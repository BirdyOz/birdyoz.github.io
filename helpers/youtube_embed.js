/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-04 13:26:24
 */

$(function() {

    // Get YT Video ID from URL param.

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        var url = new URL(url_string);
        var yt_video_id = url.searchParams.get("yt_video_id");
        console.log("@GB: yt_video_id = ", yt_video_id);
        if (yt_video_id.length > 0) {
            // Define global vars
            var yt_api_key = "AIzaSyBlBpATO1tgHN3qrPe0ZT9haE1nTBlQaU4",
                // yt_video_id = "Rtmj-oE6wPU",
                yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=" + yt_video_id + "&key=" + yt_api_key,
                yt_oembed = "https://www.youtube.com/oembed?type=json&url=https://www.youtube.com/watch?v=" + yt_video_id,
                aspect = "";

            // Establish video dimensions
            var oembed = $.getJSON(yt_oembed)
                .done(function(dimensions) {
                    var width = dimensions.width;
                    console.log("@GB: width = ", width);
                    var height = dimensions.height;
                    console.log("@GB: height = ", height);
                    // Establish video ratio
                    var ratio = width / height;
                    console.log("@GB: ratio = ", ratio);
                    if (ratio == 1) {
                        aspect = "1by1"
                    } else if (ratio > 2.3) {
                        aspect = "21by9"
                    } else if (ratio > 1.7) {
                        aspect = "16by9"
                    } else {
                        aspect = "4by3"
                    }
                    console.log("@GB: aspect = ", aspect);
                    return aspect;
                })
                .fail(function() {
                    console.log("error, see console");
                });

            // Extract video details from api
            var jqxhr = $.getJSON(yt_snippet_endpoint)
                .done(function(data) {
                    console.log("@GB: data = ", data);
                    var vid = data.items[0].snippet;
                    console.log("@GB: vid = ", vid);
                    var title = vid.title;
                    console.log("@GB: title = ", title);
                    var description = vid.description;
                    console.log("@GB: description = ", description);
                    var duration = data.items[0].contentDetails.duration.split(/\D+/);
                    duration.pop();
                    duration.shift();

                    $.each(duration, function(index, value) {
                        if (value.length == 1) {
                            value = "0" + value
                        }
                        duration[index] = value
                    });

                    var ts = duration.join(":");
                    console.log("@GB: ts = ", ts);

                    // Build Dom

                    var dom =
                        '<div class="card well" style="padding: 10px">\n' +
                        '    <h4 class="text-danger"><i class="fa fa-play-circle-o"></i> ' + title + ' (' + ts + ')</h4>\n' +
                        '    <p>' + description + '</p>\n' +
                        '    <div class="embed-responsive embed-responsive-' + aspect + '">\n' +
                        '        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' + yt_video_id + '?rel=0" allowfullscreen></iframe>\n' +
                        '    </div>\n' +
                        '</div>';

                    console.log("@GB: dom = ", dom);
                    $('#yt_video_placeholder').replaceWith(dom);


                    $('button#copy').click(function(event) {
                        /* Act on the event */

                        var btn = $(this);
                        var paste = $("#copythis").html();
                        console.log("@GB: paste = ", paste);
                        copyTextToClipboard(paste);
                        btn.toggleClass('btn-outline-primary btn-success');
                        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Embed code copied to clipboard');

                        event.preventDefault();
                    });


                })
                .fail(function() {
                    console.log("error, see console");
                });
        }
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