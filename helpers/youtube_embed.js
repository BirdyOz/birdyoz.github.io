/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-06-13 13:43:29
 */

$(function() {

    // Get YT Video ID from URL param.

    var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        var url = new URL(url_string);
        var yt_video_id = url.searchParams.get("yt_video_id");


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

                    // Extract dimenssion from embed code.  Establish ratio.
                    var embedcode = data.items[0].player.embedHtml;
                    console.log("@GB: embedcode = ", embedcode);
                    var embed_width = $(embedcode).attr("width");
                    console.log("@GB: embed_width = ", embed_width);
                    var embed_height = $(embedcode).attr("height");
                    console.log("@GB: embed_height = ", embed_height);
                    var ratio = embed_width / embed_height;
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
                    // determine duration
                    var duration = window.parseISO8601Duration(data.items[0].contentDetails.duration);
                    console.log("@GB: duration = ", duration);
                    var duration_str = "";
                    if (duration.hours != 0) {
                        duration_str = duration.hours + ":";
                    }
                    if (duration.minutes != 0) {
                        if (duration.minutes.length === 1) {
                            duration_str += "0"
                        }
                        duration_str += duration.minutes + ":";
                    } else { duration_str += "00:" }
                    if (duration.seconds != 0) {
                        if (duration.seconds.length === 1) {
                            console.log("@GB: duration.seconds.length = ", duration.seconds.length);
                            duration_str += "0"
                        }
                        duration_str += duration.seconds;
                    } else { duration_str += "00" }


                    // Build Dom
                    var dom = "";
                    // Is embedding allowed?
                    if (embeddable === true) {
                        dom =
                            '<div class="card well" style="padding: 10px">\n' +
                            '    <h4 class="text-danger"><i class="fa fa-play-circle-o"></i> ' + title + ' (' + duration_str + ')</h4>\n' +
                            desc +
                            '    <div class="embed-responsive embed-responsive-' + aspect + '">\n' +
                            '        <iframe class="embed-responsive-item vjs-tech" src="https://www.youtube.com/embed/' + yt_video_id + '?rel=0" allowfullscreen></iframe>\n' +
                            '    </div>\n' +
                            '</div>';
                    } else {
                        var thumb = data.items[0].snippet.thumbnails.maxres.url;
                        var url = "https://www.youtube.com/watch?v=" + yt_video_id;

                        dom =
                            '<div class="card well" style="padding: 10px">\n' +
                            '    <h4 class="text-danger"><i class="fa fa-play-circle-o"></i> ' + title + ' (' + duration_str + ')</h4>\n' +
                            desc +
                            '<div class="overlay" style="width:100%; margin: 20px auto; text-align: center; color: white  !important; text-shadow: 2px 2px 4px #000000; position: relative;">\n' +
                            '    <a href="' + url + '" target="_blank" style="color: white  !important">\n' +
                            '        <img src="' + thumb + '" class="img-responsive img-fluid" style="width:100%" alt="Link to YouTube video" title="Video opens in a new tab">\n' +
                            '        <div class="text-overlay" style="background-color: rgba(0, 0, 0, 0.4); padding:2em;position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%">\n' +
                            '            <p class="" style="font-size: calc( 12px + (40 - 16) * ( 80vw / (1000 - 400) )) !important; line-height: calc( 20px + (32 - 16) * ( 80vw / (1000 - 400) )) !important;"><i class="fa fa-play-circle-o"></i> View video</p>\n' +
                            '            <p class="" style="font-size: calc( 12px + (24 - 16) * ( 60vw / (1000 - 400) )) !important; line-height: calc( 10px + (20 - 10) * ( 80vw / (1000 - 400) )) !important;">(Opens in new tab)</p>\n' +
                            '        </div>\n' +
                            '    </a>\n' +
                            '</div></div>';
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





    window.parseISO8601Duration = function(iso8601Duration) {
        var iso8601DurationRegex = /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;
        var matches = iso8601Duration.match(iso8601DurationRegex);

        return {
            sign: matches[1] === undefined ? '+' : '-',
            years: matches[2] === undefined ? 0 : matches[2],
            months: matches[3] === undefined ? 0 : matches[3],
            weeks: matches[4] === undefined ? 0 : matches[4],
            days: matches[5] === undefined ? 0 : matches[5],
            hours: matches[6] === undefined ? 0 : matches[6],
            minutes: matches[7] === undefined ? 0 : matches[7],
            seconds: matches[8] === undefined ? 0 : matches[8]
        };
    };


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