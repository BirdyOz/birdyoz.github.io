/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-13 12:21:02
 */

$(function() {

    // Get YT Video ID from URL param.

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        var url = new URL(url_string);
        var yt_video_id = url.searchParams.get("yt_video_id");
        var width = parseInt(url.searchParams.get("width"), 10);
        console.log("@GB: width = ", width);
        var height = parseInt(url.searchParams.get("height"), 10);
        console.log("@GB: height = ", height);
        var ratio = width / height;
        console.log("@GB: ratio = ", ratio);
        var aspect = "";
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

        // Make YouTube API call
        if (yt_video_id.length > 0) {
            // Define global vars
            var yt_api_key = "AIzaSyBlBpATO1tgHN3qrPe0ZT9haE1nTBlQaU4",
                // yt_video_id = "Rtmj-oE6wPU",
                yt_snippet_endpoint = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatus%2Cplayer&id=" + yt_video_id + "&key=" + yt_api_key;
            console.log("@GB: yt_snippet_endpoint = ", yt_snippet_endpoint);



            // Extract video details from api
            var jqxhr = $.getJSON(yt_snippet_endpoint)
                .done(function(data) {
                    console.log("@GB: data = ", data);
                    var vid = data.items[0].snippet;
                    console.log("@GB: vid = ", vid);
                    var title = vid.title;
                    console.log("@GB: title = ", title);
                    var description = vid.description;
                    var desc = "";
                    if (description.length > 0) {
                        $("#checkbox").prop("checked", true);
                        desc = '    <p class="YT_Desc">' + description + '</p>\n'
                        console.log("@GB: desc = ", desc);
                    } else {
                        $("#checkbox").prop('disabled', true);
                    }
                    console.log("@GB: description = ", description);

                    // Is embedding allowed?
                    var embeddable = data.items[0].status.embeddable;
                    console.log("@GB: embeddable = ", embeddable);

                    // Extract dimenssion from embed code
                    var embedcode = data.items[0].player.embedHtml;
                    console.log("@GB: embedcode = ", embedcode);
                    var embed_width = $(embedcode).attr("width");
                    console.log("@GB: embed_width = ", embed_width);
                    var embed_height = $(embedcode).attr("height");
                    console.log("@GB: embed_height = ", embed_height);

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
                    var dom = "";
                    // Is embedding allowed?
                    if (embeddable === true) {
                        dom =
                            '<div class="card well" style="padding: 10px">\n' +
                            '    <h4 class="text-danger"><i class="fa fa-play-circle-o"></i> ' + title + ' (' + ts + ')</h4>\n' +
                            desc +
                            '    <div class="embed-responsive embed-responsive-' + aspect + '">\n' +
                            '        <iframe class="embed-responsive-item vjs-tech" src="https://www.youtube.com/embed/' + yt_video_id + '?rel=0" allowfullscreen></iframe>\n' +
                            '    </div>\n' +
                            '</div>';
                    } else {
                        var thumb = data.items[0].snippet.thumbnails.maxres.url;
                        var url = "https://www.youtube.com/watch?v=" + yt_video_id;

                        dom =
                            '<div class="overlay" style="width:100%; margin: 20px auto; text-align: center; color: white  !important; text-shadow: 2px 2px 4px #000000; position: relative;">\n' +
                            '    <a href="'+ url +'" target="_blank" style="color: white  !important">\n' +
                            '        <img src="' + thumb +'" class="img-responsive img-fluid" style="width:100%" alt="Link to YouTube video" title="Video opens in a new tab">\n' +
                            '        <div class="text-overlay" style="background-color: rgba(0, 0, 0, 0.4); padding:2em;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%">\n' +
                            '            <p class="" style="font-size: calc( 12px + (40 - 16) * ( 80vw / (1000 - 400) )) !important; line-height: calc( 20px + (32 - 16) * ( 80vw / (1000 - 400) )) !important;"><i class="fa fa-play-circle-o"></i> View video</p>\n' +
                            '            <p class="" style="font-size: calc( 12px + (24 - 16) * ( 60vw / (1000 - 400) )) !important; line-height: calc( 10px + (20 - 10) * ( 80vw / (1000 - 400) )) !important;">(Opens in new tab)</p>\n' +
                            '        </div>\n' +
                            '    </a>\n' +
                            '</div>';
                    }

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
                        window.setTimeout(function() {
                            btn.html('<i class="fa fa-clipboard" aria-hidden="true"></i> Copy embed code');
                            // btn.removeClass('btn-danger');
                            btn.toggleClass('btn-outline-primary btn-success');
                        }, 3000);

                        event.preventDefault();
                    });


                })
                .fail(function() {
                    console.log("error, see console");
                });

            $("#checkbox").change(function() {
                if (this.checked) {
                    console.log("@GB: checked = checked");
                    //Do stuff
                    $('h4.text-danger').after(desc)
                } else {
                    console.log("@GB: checked = unchecked");
                    $('.YT_Desc').remove()

                }
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