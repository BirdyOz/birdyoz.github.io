/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-21 14:43:33
 */

$(function() {
    // Detect IE
    var isIE = detectIE();
    // Hide IE alert for non-IE browsers
    if (isIE === true) {
        $(".alert-ie").toggleClass('collapse show');
    };

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        // hide "first time" alert


        // Extract URL variables
        var url = new URL(url_string);
        var addr = url.searchParams.get("addr");
        var title = url.searchParams.get("title");


        // Pull apart Unsplash title to form an array
        var re = /by (.*?) \((.*?)\)/gi;
        var TitleArray = re.exec(title);
        console.log("@GB: TitleArray = ", TitleArray);
        if (TitleArray !== null) {

            var name = TitleArray[1];
            console.log("@GB: name = ", name);
            var user = TitleArray[2];
            console.log("@GB: user = ", user);
            var img = addr.substring(addr.lastIndexOf("/") + 1, addr.length);
            var img_url = "https://source.unsplash.com/" + img;


            // Get current date string
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;

            // Create attribution statement
            var dom = '<a href="' + addr + '" target="_blank">Photo</a> by <a href="https://unsplash.com/' + user + '" target="_blank">' + user + '</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>, accessed ' + today;

            // Establish Unsplash image path
            var img_lge = decodeURIComponent(url.searchParams.get("img"));

            if (img_lge !== 'null') {
                console.log("@GB: img_lge = ", img_lge);
                // convert to https://
                img_lge = img_lge.replace("http://", "https://");
                // Create medium and small variants
                var img_med = img_lge.replace("w=1080", "w=720");
                var img_sml = img_lge.replace("w=1080", "w=360");
            } else {
                img_sml = img_url;
                img_med = img_url;
                img_lge = img_url;
                console.log("@GB: img_sml = ", img_sml);
                $(".alert-new").toggleClass('collapse show');
                // hide download image buttons
                $('a.download').hide();
            }


            // Inject images of appropriate sizes
            $('img.img-sml').each(function(index, el) {
                el.src = img_sml;
                $(this).attr('alt', title);
                $(this).attr('title', title);
            });
            $('img.img-med').each(function(index, el) {
                el.src = img_med;
                $(this).attr('alt', title);
                $(this).attr('title', title);
            });
            $('img.img-lge').each(function(index, el) {
                el.src = img_lge;
                $(this).attr('alt', title);
                $(this).attr('title', title);
            });

            // add attribution
            $('small').each(function(index, el) {
                $(this).html(dom);
            });

            // Copy embed code
            $('#embedder button').click(function(event) {
                /* Act on the event */
                var btn = $(this);
                var closest = btn.prev('.unsplash-copy');
                var id = "." + btn.attr('id');
                var paste = $(id).html();
                console.log("@GB: paste = ", paste);

                copyTextToClipboard(paste);


                btn.toggleClass('btn-outline-primary btn-success');
                btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Embed code copied to clipboard');

                window.setTimeout(function() {
                    btn.html('<i class="fa fa-clipboard" aria-hidden="true"></i> Copy embed code');
                    // btn.removeClass('btn-danger');
                    btn.toggleClass('btn-outline-primary btn-success');
                }, 3000);

                // Cancel the default action
                event.preventDefault();
            });

            $('a.download').click(function(event) {
                /* Act on the event */
                var btn = $(this);
                var title = btn.attr("title");
                console.log("@GB: title = ", title);
                var dl_img = img_lge;
                if (title === "img-sml") { dl_img = img_sml };
                if (title === "img-med") { dl_img = img_med };

                // Parse image to Canvas download
                downloader(img, dl_img);

                btn.toggleClass('btn-outline-primary btn-success');
                btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Image downloaded');

                // Cancel the default action
                event.preventDefault();
            });
        } else {

            $('img').each(function(index, el) {
                el.src = "https://dummyimage.com//b094b0/e3b1e3&text=Seeing+this?++instructions+above";
            });
        }
    } else {
        // If no URL parameters, inject placeholder images
        $(".alert-ft").toggleClass('collapse show');
        $('img').each(function(index, el) {
            el.src = "https://dummyimage.com//b094b0/e3b1e3&text=First+time?++instructions+above";
        });

    }

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';

        } catch (err) {

        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function() {

        }, function(err) {

        });
    }

    function downloader(name, content) {
        var image = new Image();
        image.crossOrigin = "anonymous";
        image.src = content;
        // get file name - you might need to modify this if your image url doesn't contain a file extension otherwise you can set the file name manually
        var fileName = image.src.split(/(\\|\/)/g).pop();
        image.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
            console.log("@GB: canvas.width = ", canvas.width);
            canvas.getContext('2d').drawImage(this, 0, 0);
            var blob;
            blob = canvas.toDataURL("image/jpeg");

            var link = document.createElement('a');
            link.style = 'position: fixed; left -10000px;';
            link.href = blob;

            link.download = "Unsplash-" + name + "-" + canvas.width + "x" + canvas.height + ".jpg";
            console.log("@GB: link.download = ", link.download);


            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

    }

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }


});