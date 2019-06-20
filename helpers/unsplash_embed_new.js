/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-20 18:18:29
 */

$(function() {

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        console.log("@GB: Has parameters");

        var url = new URL(url_string);
        var addr = url.searchParams.get("addr");
        console.log("@GB: addr = ", addr);
        var title = url.searchParams.get("title");
        console.log("@GB: title = ", title);
        var img_lge = decodeURIComponent(url.searchParams.get("img"));
        console.log("@GB: img_lge = ", img_lge);
        var img_med = img_lge.replace("w=1080", "w=720");
        console.log("@GB: img_med = ", img_med);
        var img_sml = img_lge.replace("w=1080", "w=360");
        console.log("@GB: img_sml = ", img_sml);
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

            var dom = '<a href="' + addr + '" target="_blank">Photo</a> by <a href="https://unsplash.com/' + user + '" target="_blank">' + user + '</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>, accessed ' + today;


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

            $('a.img-sml').each(function(index, el) {
                $(this).attr('href', img_sml);
                $(this).attr('download', "Unsplash-" + img + "-360W.jpg");
            });
            $('a.img-med').each(function(index, el) {
                $(this).attr('href', img_med);
                $(this).attr('download', "Unsplash-" + img + "-720W.jpg");
            });
            $('a.img-lge').each(function(index, el) {
                $(this).attr('href', img_lge);
                $(this).attr('download', "Unsplash-" + img + "-1024W.jpg");
            });
            img_dl(img_sml);

            $('small').each(function(index, el) {
                $(this).html(dom);
            });









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
        } else {
            $('img').each(function(index, el) {
                el.src = "https://dummyimage.com//b094b0/e3b1e3&text=Seeing+this?++instructions+above";
            });
        }
    } else {
        console.log("@GB: No parameters");
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

    function img_dl(src) {
        var image = new Image();
        image.crossOrigin = "anonymous";
        image.src = src;
        // get file name - you might need to modify this if your image url doesn't contain a file extension otherwise you can set the file name manually
        var fileName = image.src.split(/(\\|\/)/g).pop();
        image.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
            canvas.getContext('2d').drawImage(this, 0, 0);
            var blob;
            // ... get as Data URI
            if (image.src.indexOf(".jpg") > -1) {
                blob = canvas.toDataURL("image/jpeg");
            } else if (image.src.indexOf(".png") > -1) {
                blob = canvas.toDataURL("image/png");
            } else if (image.src.indexOf(".gif") > -1) {
                blob = canvas.toDataURL("image/gif");
            } else {
                blob = canvas.toDataURL("image/jpeg");
            }
            $("body").append("<b>Click image to download.</b><br><a download='" + fileName + "' href='" + blob + "'><img src='" + blob + "'/></a>");
        };
    }

});