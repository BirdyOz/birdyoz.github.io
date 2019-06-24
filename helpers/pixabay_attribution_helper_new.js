/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-24 12:21:49
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
        var url = new URL(url_string);
        var statement = url.searchParams.get("statement");
        console.log("@GB: statement = ", statement);

        var re = /utm_content\=(.*?)\"/gi;
        var utm = re.exec(statement)[1];
        console.log("@GB: utm = ", utm);

        if (statement.length > 0) {

            var api_key = "11445-7c3e3173d6f9a6047e64583ca";
            var endpoint = "https://pixabay.com/api/?key=" + api_key + "&id=" + utm;
            console.log("@GB: endpoint = ", endpoint);
            // Call api
            var jqxhr = $.getJSON(endpoint, function() {})
                .done(function(data) {
                    console.log("second success");
                    console.log("@GB: data = ", data.hits[0]);
                    // var ratio = data.hits[0].imageWidth / data.hits[0].imageHeight;
                    // establish image dimensions
                    var img_lge = data.hits[0].largeImageURL;
                    console.log("@GB: img_lge = ", img_lge);
                    var img_med = img_lge.replace("_1280", "_960");
                    console.log("@GB: img_med = ", img_med);
                    var img_sml = img_lge.replace("_1280", "_640");
                    console.log("@GB: img_sml = ", img_sml);

                    // Update preview image

                    var img_preview = data.hits[0].previewURL;
                    console.log("@GB: img_preview = ", img_preview);
                    $('.preview_card').toggleClass('d-none d-block');
                    $('img.preview').attr('src', img_preview);

                    $('a.download').click(function(event) {

                        /* Act on the event */
                        var btn = $(this);
                        var title = btn.attr("title");
                        var dl_img = img_lge;
                        if (title === "img-sml") { dl_img = img_sml };
                        if (title === "img-med") { dl_img = img_med };

                        // Parse image to Canvas download
                        downloader(utm, dl_img);

                        btn.toggleClass('btn-outline-primary btn-success');
                        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Image downloaded');

                        // Cancel the default action
                        event.preventDefault();
                    });
                })
                .fail(function() {
                    console.log("error");
                    $('a.download').hide();

                })


            var alt = url.searchParams.get("alt");
            var src = url.searchParams.get("src");
            console.log("@GB: src = ", src);
            console.log("@GB: alt = ", alt);



            // Get current date string
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '/' + mm + '/' + yyyy;


            $('.pixabay-copy img').each(function(index, el) {
                el.src = "https://dummyimage.com//b094b0/BAD761&text=Replace+with+downloaded+pixabay+image";
                $(this).attr('alt', alt);
                $(this).attr('title', alt);
            });


            $('small').each(function(index, el) {
                $(this).html(statement + ', accessed ' + today);
            });

            $('#embedder button').click(function(event) {
                /* Act on the event */

                var btn = $(this);
                var closest = btn.prev('.pixabay-copy');
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
            var ext = ".jpg"
            // ... get as Data URI
            if (image.src.indexOf(".jpg") > -1) {
                blob = canvas.toDataURL("image/jpeg");
                ext = ".jpg"
            } else if (image.src.indexOf(".jpeg") > -1) {
                blob = canvas.toDataURL("image/jpeg");
                ext = ".jpg"
            } else if (image.src.indexOf(".png") > -1) {
                blob = canvas.toDataURL("image/png");
                ext = ".png"
            } else if (image.src.indexOf(".gif") > -1) {
                blob = canvas.toDataURL("image/gif");
                ext = ".gif"
            } else {
                blob = canvas.toDataURL("image/png");
                ext = ".png"
            }

            var link = document.createElement('a');
            link.style = 'position: fixed; left -10000px;';
            link.href = blob;

            link.download = "Pixabay-" + name + "-" + canvas.width + "x" + canvas.height + ext;
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