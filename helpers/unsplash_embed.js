/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2018-05-14 17:19:49
 */

$(function() {

    var url_string = window.location.href;
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
            btn.text('Embed code copied!');



        });
    } else {
        $('img').each(function(index, el) {
            console.log("No URL parameters");
            // el.src = 'http://dummyimage.com//b094b0/e3b1e3&text=First+Time+User?++Follow+instructions+above';
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