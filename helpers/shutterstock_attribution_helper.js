/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-05 12:50:27
 */

$(function() {

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        var url = new URL(url_string);

        var addr = url.searchParams.get("addr").split("/").pop();
        console.log("@GB: addr = ", addr);
        if (addr.length > 0) {

            var descriptors = addr.split("-");
            console.log("@GB: descriptors = ", descriptors);

            var image_id = descriptors.pop();

            var alt = descriptors.join(", ");
            console.log("@GB: alt = ", alt);

            var user = url.searchParams.get("user");
            console.log("@GB: user = ", user);

            // PULL APART USERR DETAILS
            var re = /href="(.*?)".*?>(.*?)</gi;
            var user_details = re.exec(user);
            console.log("@GB: user_details = ", user_details);
            var user_name = user_details[2];
            // var user_url = "https://www.shutterstock.com/" + user_details[1];
            var user_url = "https://www.shutterstock.com/g/" + user_details[2];

            // Get current date string

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = dd + '/' + mm + '/' + yyyy;
            console.log("@GB: today = ", today);


            var image_url = "https://image.shutterstock.com/z/" + image_id + ".jpg";
            // var image_url = "https://image.shutterstock.com/image-photo/" + descriptors.join("-") + "-450w-" + image_id + ".jpg";
            console.log("@GB: image_url = ", image_url);
            var dom = 'Image ' + image_id + ' used under licence with <a target="_blank" href="https://www.shutterstock.com/">shutterstock.com</a> by <a  target="_blank" href="' + user_url + '">' + user_name + '</a>, accessed ' + today;


            $('img').each(function(index, el) {
                el.src = image_url;
                $(this).attr('alt', alt);
                $(this).attr('title', alt);
            });

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

});