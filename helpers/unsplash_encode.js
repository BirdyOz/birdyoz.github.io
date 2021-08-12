/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2021-08-12 16:27:03
 */

$(function() {

    // Get current date string
    var today = todaysDate();
    var src = "";
    var alt = "";
    var title = "";
    var user = "";
    var link = "";
    var width = "col-5";
    var percent = "42%";
    console.log("@GB: today = ", today);
    var id = "";
    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        console.log("@GB: Has parameters");
        var url = new URL(url_string);
        id = url.searchParams.get("id");
    } else {
        console.log("@GB: No parameters");
        id = "TXxiFuQLBKQ";
    }

    var uri = "https://api.unsplash.com/photos/" + id + "?client_id=336b527b2e18d045045820b78062b95c825376311326b2a08f9b93eef7efc07b";
    $.getJSON(uri, function(result) {
        console.log("@GB: result = ", result);
        src = result.urls.full;
        console.log("@GB: src = ", src);
        user = result.user.username;
        console.log("@GB: user = ", user);
        link = result.user.links.html;
        console.log("@GB: link = ", link);

        title = result.description;
        console.log("@GB: title = ", title);
        alt = result.alt_description;
        console.log("@GB: alt = ", alt);


        $('.unsplash-copy>figure').each(function(index) {
            snippet = unsplashSnippet(index);
            $(this).html(snippet);
        });

        $('#source-open').change(function() {
            selected_val = $("input[name='options']:checked").attr('value');
            console.log("@GB: selected_val = ", selected_val);
            if (selected_val == "Shown") {
                $('.source-btn').addClass('collapse');
                $('.source').addClass('show');
            } else {
                $('.source-btn').removeClass('collapse');
                $('.source').removeClass('show');
            }
        });

        $('#resizer').change(function() {
            selected_id = $("input[name='options']:checked").attr('id');
            selected_val = $("input[name='options']:checked").attr('value');
            console.log("@GB: selected_text = ", selected_val);
            console.log("@GB: selected_id = ", selected_id);
            $('.unsplash-floated>figure').removeClass(width);
            $('.unsplash-floated>figure').addClass(selected_id);
            $('.percent>strong').text(selected_val);
            width = selected_id;
        });
    });

    function unsplashSnippet(i) {
        var snippet = `
        <img src="${src}" class="img-responsive img-fluid img-sml" alt="${alt}" title="${title}">
        <figcaption class="figure-caption text-muted small">
            <small>
                <!-- Start of Show/Hide interface, ID = ${id}-${i} -->
                <a class="source-btn" data-toggle="collapse" href="#show-${id}-${i}" role="button" aria-expanded="false" aria-controls="show-${id}-${i}">Source:</a>
                <div class="source collapse m-0 p-0" id="show-${id}-${i}"> <a href="https://unsplash.com/photos/${id}" target="_blank">Photo</a> by <a href="${link}" target="_blank">${user}</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>
                    <br><a href="https://unsplash.com/license" target="_blank">Free to use</a>. Added ${today} </div>
                <!-- End of Show/Hide interface, ID = ${id}-${i} -->
            </small>
        </figcaption>
    `;
        return snippet;
    }

    function todaysDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        return today;
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