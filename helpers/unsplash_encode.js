/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-19 15:31:26
 */

$(function() {

    var url_string = window.location.href;
    var id = "Be8TdJZPaBE";
    var uri = "https://api.unsplash.com/photos/" + id + "?client_id=336b527b2e18d045045820b78062b95c825376311326b2a08f9b93eef7efc07b";
    $.getJSON( uri, function( result ) {
        console.log("@GB: result = ", result);
            full = result.urls.full;
            console.log("@GB: full = ", full);
            regular = result.urls.regular;
            console.log("@GB: regular = ", regular);
            small = result.urls.small;
            console.log("@GB: small = ", small);
            user = result.user.username;
            console.log("@GB: user = ", user);
            link = result.user.links.html;
            console.log("@GB: link = ", link);

            desc = result.description;
            console.log("@GB: desc = ", desc);
            alt_desc = result.alt_description;
            console.log("@GB: alt_desc = ", alt_desc);


        });














    if (url_string.indexOf("?") > 0) {
        console.log("@GB: Has parameters");

        var url = new URL(url_string);
        var addr = url.searchParams.get("addr");
        var title = url.searchParams.get("title");
        var re = /by (.*?) \((.*?)\)/gi;
        var TitleArray = re.exec(title);
        console.log("@GB: TitleArray = ", TitleArray);
        if (TitleArray !== null) {

            var name = TitleArray[1];
            var user = TitleArray[2];
            var image = addr.substring(addr.lastIndexOf("/") + 1, addr.length);
            var image_url = "https://source.unsplash.com/" + image;
            var dom = '<a href="' + addr + '" target="_blank">Photo</a> by <a href="https://unsplash.com/' + user + '" target="_blank">' + user + '</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>';


            $('img').each(function(index, el) {
                el.src = image_url;
                $(this).attr('alt', title);
                $(this).attr('title', title);
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