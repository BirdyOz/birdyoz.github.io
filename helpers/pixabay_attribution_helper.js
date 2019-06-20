/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-20 18:02:54
 */

$(function() {

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        var url = new URL(url_string);
        var statement = url.searchParams.get("statement");
        console.log("@GB: statement = ", statement);

        if (statement.length > 0) {

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


            $('img').each(function(index, el) {
                el.src = "https://dummyimage.com//b094b0/e3b1e3&text=Replace+with+downloaded+pixabay+image";
                $(this).attr('alt', alt);
                $(this).attr('title', alt);
            });

            $('small').each(function(index, el) {
                $(this).html(statement + ', accessed ' + today);
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


});