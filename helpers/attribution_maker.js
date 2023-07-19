/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2023-07-19 15:24:22
 */

/*jshint esversion: 8 */

$(function() {
    // Set Global vars

    $('[data-toggle="tooltip"]').tooltip();

    let am = {
        url: "",
        id: "",
        title: null,
        today: todaysDate(),
        image: {
            name: "Photo", //Default resource type
            orig: "",
            preview: "",
            cropped: "",
            alt: "",
            download: {
                large: "",
                small: "",
                endpoint: "", //For Unsplash, to trigger download enpoint
            },
        },
        video: {
            timecode: "00:00:00",
            duration: 0,
            playtime: 0,
            embeddable: true,
            description: "",
            params: "",
            thumb: "",
            aspect: "16/9",
            ratio: 56.25,
            published: "",
        },
        attribution: {
            username: "",
            userUrl: "",
        },
        prefs: {
            org: null,
            cols: "col-md-5",
            percent: "42",
            collapsed: true,
            layout: "bootstrap",
            classes: ["border"],
            styles: {
                "border": "1px solid #dee2e6",
                "padding": "2px",
                "border-radius": "0.25rem"
            }
        },
        history: []
    };

    // Number of history items to display
    const maxlength = 24;

    // Supported sites
    const supported = [{
            name: "Unsplash",
            baseurl: "unsplash.com",
            type: "Photo",
            siteurl: "https://unsplash.com/?utm_source=image_attribution_maker_by_birdyoz&utm_medium=referral",
            licence: "Free to use",
            licenceurl: "https://unsplash.com/license",
        },
        {
            name: "Pixabay",
            baseurl: "pixabay.com",
            type: "Image",
            siteurl: "https://pixabay.com/",
            licence: "Free to use",
            licenceurl: "https://pixabay.com/service/license/",
        },
        {
            name: "Pexels",
            baseurl: "pexels.com",
            type: "Photo",
            siteurl: "https://pexels.com/",
            licence: "Free to use",
            licenceurl: "https://www.pexels.com/license/",
        },
        {
            name: "Wikimedia Commons",
            baseurl: "wikimedia.org",
            type: "Image",
            siteurl: "https://commons.wikimedia.org/",
            licence: "",
            licenceurl: "",
        },
        {
            name: "Shutterstock",
            baseurl: "shutterstock.com",
            type: "Photo",
            siteurl: "https://www.shutterstock.com",
            licence: "Used under licence with shutterstock.com",
            licenceurl: "https://www.shutterstock.com/license",
        },
        {
            name: "YouTube",
            baseurl: "youtube.com",
            type: "Video",
            siteurl: "https://youtube.com",
            licence: "Terms",
            licenceurl: "https://www.youtube.com/static?template=terms&gl=AU",
        },
        {
            name: "Flickr CC",
            baseurl: "flickr.com",
            type: "Photo",
            siteurl: "https://www.flickr.com/search/?license=2%2C3%2C4%2C5%2C6%2C9",
            licence: "",
            licenceurl: "",
        },
    ];

    // Flickr licences
    const flickr_licences = {
        license: [{
                id: 1,
                name: "Attribution-NonCommercial-ShareAlike License",
                short: "CC BY-NC-SA",
                url: "https://creativecommons.org/licenses/by-nc-sa/2.0/",
            },
            {
                id: 2,
                name: "Attribution-NonCommercial License",
                short: "CC BY-NC",
                url: "https://creativecommons.org/licenses/by-nc/2.0/",
            },
            {
                id: 3,
                name: "Attribution-NonCommercial-NoDerivs License",
                short: "CC BY-NC-ND",
                url: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
            },
            {
                id: 4,
                name: "Attribution License",
                short: "CC BY",
                url: "https://creativecommons.org/licenses/by/2.0/",
            },
            {
                id: 5,
                name: "Attribution-ShareAlike License",
                short: "CC BY-SA",
                url: "https://creativecommons.org/licenses/by-sa/2.0/",
            },
            {
                id: 6,
                name: "Attribution-NoDerivs License",
                short: "CC BY-ND",
                url: "https://creativecommons.org/licenses/by-nd/2.0/",
            },
            {
                id: 7,
                name: "No known copyright restrictions",
                short: "Commons (Flickr)",
                url: "https://www.flickr.com/commons/usage/",
            },
            {
                id: 8,
                name: "United States Government Work",
                short: "U.S. Government Work",
                url: "http://www.usa.gov/copyright.shtml",
            },
            {
                id: 9,
                name: "Public Domain Dedication (CC0)",
                short: "CC0",
                url: "https://creativecommons.org/publicdomain/zero/1.0/",
            },
            {
                id: 10,
                name: "Public Domain Mark",
                short: "Public Domain",
                url: "https://creativecommons.org/publicdomain/mark/1.0/",
            },
        ],
    };

    let player; // YouTube player API
    let imgHistory = []; // Invoke image history array

    // Get localstorage prefs if available
    if ("Attribution-Maker-Prefs" in localStorage) {
        am.prefs = JSON.parse(localStorage.getItem('Attribution-Maker-Prefs'));
    }

    // Get URL parameters
    url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        // Get image address
        url = new URL(url_string);
        am.url = url.searchParams.get("addr");
        am.site = supported.find((item) => am.url.includes(item.baseurl));

        // Determine whether image or video.   Hide other display
        if (am.site.name == "YouTube") {
            $("#am-images").hide();
            $("#resizer").hide();
            $("#decoration").hide();
            if (url.searchParams.get("embeddable") == "false") {
                am.video.embeddable = false;
            }
        } else {
            $("#am-video").hide();
        }

        // Detect organisation.
        // Allows for different attribution 'recipes' for different organsiations (eg MP).
        am.prefs.org = url.searchParams.get("org");
        url.searchParams.delete("org");


        // If I am Melb Poly, UoM or Vanilla, do not allow attribution to be collpased.
        if (am.prefs.org === "uom") {
            am.prefs.layout = "vanilla";
        }

        // Set localStorage
        localStorage.setItem('Attribution-Maker-Prefs', JSON.stringify(am.prefs));
    } else {
        // No URL parameters exist.   Show first time warning
        console.log("@GB: No parameters");
        $(".firsttime-warning").show();
        $("#collapseExample").show();
    }

    // If I am Unsplash
    if (am.site.name == "Unsplash") {
        // Get image ID
        n = am.url.lastIndexOf("/");
        am.id = am.url.substring(n + 1);
        // oldkey = "MzM2YjUyN2IyZTE4ZDA0NTA0NTgyMGI3ODA2MmI5NWM4MjUzNzYzMTEzMjZiMmEwOGY5YjkzZWVmN2VmYzA3Yg%3D%3D";
        key = "STJMT3JlREVmUWlWQUtFUTBEOHZfVXM4clUtNUloRlFDbWNsUnZ5RzFYdw==";
        // API call
        uri = "https://api.unsplash.com/photos/" + am.id + "?client_id=" + atob(decodeURIComponent(key));

        // API call
        $.getJSON(uri, function() {}).done(function(json) {
            console.log("@GB: json = ", json);
            am.image.preview = json.urls.regular;
            am.attribution.username = json.user.username;
            am.attribution.userUrl = json.user.links.html + "?utm_source=image_attribution_maker_by_birdyoz&utm_medium=referral";
            am.title = json.description;
            am.image.alt = json.alt_description;
            am.image.download.large = am.image.preview.replace("&w=1080", "&w=1440");
            am.image.preview = am.image.download.large;
            am.image.download.small = am.image.preview.replace("&w=1440", "&w=720");
            am.image.download.endpoint = json.links.download_location + "&client_id=" + atob(decodeURIComponent(key));
            buildHTML();
            buildHistory();
        });
    }

    // If I am Pexels
    if (am.site.name == "Pexels") {
        // Get image ID
        re = /[0-9]+/gi;
        am.id = re.exec(am.url)[0];

        key = "NTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxYmZlZmZkMDc3YmFmNDU0ZGFiMjlkNjMwMGJkZjc0MGQ%3D";
        uri = "https://api.pexels.com/v1/photos/" + am.id;

        // API call.   Using $.ajax as paxels requires authentication headers
        $.ajax({
            url: uri,
            dataType: "json",
            headers: { Authorization: atob(decodeURIComponent(key)) },
            success: function(json) {
                console.log("@GB: json = ", json);
                am.image.preview = json.src.original;
                am.image.preview = am.image.preview + "?auto=compress&cs=tinysrgb&w=1440";
                am.attribution.username = json.photographer;
                am.attribution.userUrl = json.photographer_url;
                alt = json.url.split("/")[4].split("-");
                alt.pop();
                am.image.alt = alt.join(" ");
                am.image.download.small = am.image.preview + "?auto=compress&cs=tinysrgb&w=720";
                am.image.download.large = am.image.preview;
                buildHTML();
                buildHistory();
            },
        });
    }

    // If I am Pixabay
    if (am.site.name == "Pixabay") {
        $(".pixabay-warning").show();
        // Get image ID
        re = /[0-9]+/gi;
        am.id = re.exec(am.url)[0];

        key = "MTE0NDUtN2MzZTMxNzNkNmY5YTYwNDdlNjQ1ODNjYQ%3D%3D";
        uri = "https://pixabay.com/api/?key=" + atob(decodeURIComponent(key)) + "&id=" + am.id;

        $.getJSON(uri, function() {})
            .done(function(json) {
                am.image.preview = json.hits[0].largeImageURL;
                am.attribution.username = json.hits[0].user;
                am.attribution.userUrl = "https://pixabay.com/users/" + am.attribution.username;
                am.image.alt = json.hits[0].tags;
                am.image.download.small = json.hits[0].webformatURL; // Small image 640px wide
                am.image.download.large = am.image.preview; // Large image 1280px wide
                buildHTML();
                buildHistory();
            })
            .fail(function() {
                console.log(json);
            });
    }

    // If I am Flickr
    if (am.site.name == "Flickr CC") {
        // Get image ID
        re = /\/([0-9]+)\//gi;
        am.id = re.exec(am.url)[1];

        key = "MmJjNjJmYzJkYzRhYWVjMGZiMGQ1NjY0MGMzYThhMjA=";
        info_uri = "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + atob(decodeURIComponent(key)) + "&photo_id=" + am.id + "&format=json&&nojsoncallback=1";
        sizes_uri = "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + atob(decodeURIComponent(key)) + "&photo_id=" + am.id + "&format=json&&nojsoncallback=1";

        $.getJSON(info_uri, function() {})
            .done(function(json) {
                console.log("@GB: json = ", json);
                let lic = json.photo.license;
                // Image is copyrighted
                if (lic == 0) {
                    $(".flickr-warning").show();
                    console.log("You cannot use that image");
                }
                // Image is CC or PD and image use is allowed
                else {
                    am.site.licence = flickr_licences.license.find((item) => item.id == lic).short;
                    am.site.licenceurl = flickr_licences.license.find((item) => item.id == lic).url;

                    am.attribution.username = json.photo.owner.username;
                    am.attribution.userUrl = "https://www.flickr.com/photos/" + json.photo.owner.nsid;
                    am.image.alt = json.photo.title._content;
                    title = json.photo.description._content;
                    am.title = stripHTML(title);
                    // get image sizes
                    $.getJSON(sizes_uri, function() {}).done(function(json2) {
                        console.log("@GB: json2 = ", json2);
                        am.image.preview = json2.sizes.size.find((item) => item.label == "Original").source;
                        let orig_width = json2.sizes.size.find((item) => item.label == "Original").width;
                        // Check if image is large enough to resize
                        if (orig_width >= 800) {
                            am.image.download.small = json2.sizes.size.find((item) => item.label == "Medium 800").source;
                        } else {
                            am.imagedownload.small = am.image.preview;
                        }

                        if (orig_width >= 1600) {
                            am.image.download.large = json2.sizes.size.find((item) => item.label == "Large 1600").source;
                            am.image.preview = am.image.download.large;
                        } else {
                            am.image.download.large = am.image.preview;
                        }
                        buildHTML();
                        buildHistory();
                    });
                }
            })
            .fail(function() {
                console.log("error");
            });
    }

    // If I am Wikimedia
    if (am.site.name == "Wikimedia Commons") {
        // Get image ID
        n = am.url.lastIndexOf("/");
        id = am.url.substring(n + 1);

        if (!id.includes("File:")) {
            id = "File:" + id;
        }
        uri = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&list=&meta=&iiprop=timestamp%7Cuser%7Cextmetadata%7Curl%7Cuserid&iilimit=1&iiurlwidth=720&origin=*&titles=" + id;

        $.getJSON(uri, function() {}).done(function(data) {
            json = data.query.pages[-1];
            console.log("@GB: json = ", json);
            am.id = json.imageinfo[0].descriptionshorturl.split("=")[1];
            am.image.preview = json.imageinfo[0].thumburl;
            am.image.orig = json.imageinfo[0].descriptionshorturl;
            am.attribution.username = json.imageinfo[0].user;
            am.attribution.userUrl = "https://commons.wikimedia.org/wiki/User:" + am.attribution.username.replace(" ", "_");
            am.image.alt = json.imageinfo[0].extmetadata.ObjectName.value;
            am.image.download.large = am.image.download.small = am.image.preview; // Small image 720px wide

            if (json.imageinfo[0].thumbwidth >= 720) {
                am.image.download.large = json.imageinfo[0].responsiveUrls[2]; // Large image 1440px wide
                am.image.preview = am.image.download.large;
            }

            am.site.licence = json.imageinfo[0].extmetadata.LicenseShortName.value;

            // Exception for public domain images
            try {
                am.site.licenceurl = json.imageinfo[0].extmetadata.LicenseUrl.value;
            } catch (error) {
                console.error("Error: " + error);
                am.site.licenceurl = "https://en.wikipedia.org/wiki/Public_domain";
            }

            id = id.slugify();
            buildHTML();
            buildHistory();
        });
    }

    // If I am Shutterstock
    // Until API is opened, get values from URL params

    if (am.site.name == "Shutterstock") {
        if (url.searchParams.get("id") == null) {
            $(".bookmarklet-warning").show();
            return false;
        }
        am.attribution.username = url.searchParams.get("user");
        am.attribution.userUrl = url.searchParams.get("user_url");
        am.image.alt = url.searchParams.get("alt");
        am.title = url.searchParams.get("title");
        am.image.preview = url.searchParams.get("img_src");
        am.id = url.searchParams.get("id");
        am.site.licence = "Used under licence with shutterstock.com";
        am.site.licenceUrl = "https://www.shutterstock.com/license";
        siteUrl = "https://www.shutterstock.com";

        // Hide download buttons and cropper, as these make no sense for SS
        $(".download").hide();
        $(".cropper").hide();

        $(".shutterstock-warning").show();
        buildHTML();
    }

    // If YouTube

    if (am.site.name == "YouTube") {
        ytUrl = new URL(am.url);
        am.id = ytUrl.searchParams.get("v");
        am.url = "https://www.youtube.com/watch?v=" + am.id;

        siteUrl = "https://www.youtube.com";
        am.site.licence = "Terms";
        am.site.licenceUrl = "https://www.youtube.com/static?template=terms&gl=AU";
        key = "QUl6YVN5QmxCcEFUTzF0Z0hOM3FyUGUwWlQ5aGFFMW5UQmxRYVU0";
        // API call
        uri = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatus%2Cplayer&id=" + am.id + "&key=" + atob(decodeURIComponent(key));

        // API call
        $.getJSON(uri, function() {}).done(function(json) {
            console.log("@GB: json = ", json);
            vid = json.items[0].snippet;
            am.title = vid.title;

            // Find the largest thumbnail image
            am.image.preview = Object.values(vid.thumbnails).sort((a, b) => a.width - b.width).reverse()[0].url;

            // Get published date
            published = vid.publishedAt;
            date = new Date(published);
            am.video.published = `${date.getFullYear()}, ${date.toLocaleString("default", { month: "long" })} ${date.getDay()}`;
            if (vid.description.length > 0) {
                am.video.description = vid.description;
            }
            // Is embedding allowed?
            if (am.video.embeddable === true) {
                am.video.embeddable = json.items[0].status.embeddable;
            }

            // Establish ratio.

            if (json.items[0].snippet.thumbnails.maxres) {
                embed_width = vid.thumbnails.maxres.width;
                embed_height = vid.thumbnails.maxres.height;
            } else {
                embedcode = json.items[0].player.embedHtml;
                embed_width = $(embedcode).attr("width");
                embed_height = $(embedcode).attr("height");
            }
            ratio = embed_width / embed_height;
            am.video.ratio = (embed_height / embed_width) * 100;
            if (ratio == 1) {
                am.video.aspect = "1by1";
            } else if (ratio > 2.3) {
                am.video.aspect = "21by9";
            } else if (ratio > 1.7) {
                am.video.aspect = "16by9";
            } else {
                am.video.aspect = "4by3";
            }
            ytPlayTime = json.items[0].contentDetails.duration;
            am.video.duration = moment.duration(ytPlayTime).asSeconds();
            am.video.timecode = getTimecode(am.video.duration);
            am.attribution.username = json.items[0].snippet.channelTitle;
            am.attribution.userUrl = "https://www.youtube.com/channel/" + json.items[0].snippet.channelId;
            // Can I be embedded?
            if (am.video.embeddable) {
                if (am.prefs.org === "uom") {
                    snippet = uomytSnippet();
                } else if (am.prefs.layout === "vanilla") {
                    snippet = vanillaYTSnippet();
                } else {
                    snippet = ytSnippet();
                }
            } else {
                am.video.thumb = json.items[0].snippet.thumbnails.standard.url;
                if (json.items[0].snippet.thumbnails.hasOwnProperty("maxres")) {
                    am.video.thumb = json.items[0].snippet.thumbnails.maxres.url;
                }
                $("#yt-settings .yt-placeholder-msg").html("<p class='alert alert-danger'>Your chosen video does not allow for embedding.   A placeholder has been created, that includes a thumbnail for the video, and a link back to YouTube.</p>");
                snippet = ytPlaceholderSnippet();
            }

            $("#am-yt-embed").html(snippet);
            console.log("YouTube am = ", am);

            // Invoke YT API
            onYouTubeIframeAPIReady();
            buildHistory();
        });
    }



    // Set active buttons, based on am.prefs
    $.each(am.prefs, function(key, value) {
        // Exclude date to avoid JS error
        if (['collapsed', 'cols', 'percent', 'layout'].includes(key)) {
            target = `#${key}-${value}`;
            $(target).addClass('active');
        }
    });
    // Set active buttons, based on am.prefs.classes
    $.each(am.prefs.classes, function(key, value) {
        target = `#prefs-${value}`;
        $(target).prop('checked', true);
    });

    // Capture preference changes
    $('#update-prefs .btn').on('click', function() {

        // Toggle other buttons
        $(this).siblings('button').removeClass('active');
        $(this).addClass('active');

        // Get button prefs
        localPrefs = JSON.parse($(this).attr('data-prefs'));

        // Merge with am.prefs
        am.prefs = Object.assign(am.prefs, localPrefs);
        am.prefs.date = new Date().toLocaleString();

        // if I change layout, refresh the page, otherwise BuildHTML


        if (this.id.includes("layout-") || am.site.name == "YouTube") {
            am.prefs.org = null;
            window.location.href = url;
        } else { buildHTML(); }

        // Set localStorage
        localStorage.setItem('Attribution-Maker-Prefs', JSON.stringify(am.prefs));
    });


    // Capture preference changes
    $('#update-prefs input').change(function() {

        // Get button prefs
        localClasses = $(this).attr('data-prefs-classes');
        localStyles = JSON.parse($(this).attr('data-prefs-styles'));
        if (this.checked) {
            am.prefs.classes.push(localClasses);
            am.prefs.styles = Object.assign(am.prefs.styles, localStyles);
        } else {
            am.prefs.classes = am.prefs.classes.filter(f => f !== localClasses);
            $.each(localStyles, function(key, data) {
                delete am.prefs.styles[key];
            });
        }
        // Set localStorage
        localStorage.setItem('Attribution-Maker-Prefs', JSON.stringify(am.prefs));
        buildHTML();


    });

    // Reset prefs button
    $('#prefs-reset').on('click', function() {
        localStorage.clear();
        window.location.href = url;
    });



    // Capture Tiles changes
    $('#tile-image-count').change(function() {

        // Get button prefs
        imageCount = $(this).val();
        buildTiles(imageCount)
    });

    // Toggle tiles display between two or three columns
    $('#two-three-columns').on('click', function() {
        $('#tiles-wrapper').toggleClass("row-cols-md-3 row-cols-md-2")
    });




    $("button.embed").click(function(event) {
        event.preventDefault();
        let btn = $(this);
        let id = "." + btn.attr("id");
        let paste = $(id).html();

        // If Cropped, replace image in embed code with dummy image
        if (id == ".maker-cropped") {
            paste = paste.replace(am.image.cropped, "https://dummyimage.com/1440x760/b094b0/e3b1e3&text=Replace+me+with+cropped+image");
        }

        // If Pixabay, replace image in embed code with dummy image
        if (am.site.name == "Pixabay") {
            paste = paste.replace(am.image.preview, "https://dummyimage.com/1440x760/b094b0/e3b1e3&text=Replace+me+with+downloaded+Pixabay+image");
        }
        // If Pixabay, replace image in embed code with dummy image
        if (am.site.name == "YouTube") {
            paste = paste.replace("widgetid=1", "widgetid=1" + am.video.params);
        }
        if (id == ".maker-rtf") {
            copyAsRtf(paste);
        } else {
            copyTextToClipboard(paste);
        }
        btn.toggleClass("btn-outline-primary btn-success");
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Copied to clipboard');
        window.setTimeout(function() {
            btn.html('<i class="fa fa-clipboard" aria-hidden="true"></i> Copy embed code');
            // btn.removeClass('btn-danger');
            btn.toggleClass("btn-outline-primary btn-success");
        }, 3000);
    });

    // Download appropriately sized image
    $("a.download").click(function(event) {
        /* Act on the event */
        btn = $(this);
        title = btn.attr("title");
        src = am.image.download.large;
        if (title == "img-sml") {
            src = am.image.download.small;
        }
        if (title == "img-cropped") {
            src = $(".maker-cropped img").attr("src");
        }
        if (am.site.name === "Unsplash") {
            sendTrackDownload(am.image.download.endpoint);
        }

        // Send to Downloader
        downloader(am.id, src);

        btn.toggleClass("btn-outline-primary btn-success");
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Image downloaded');

        // Cancel the default action
        event.preventDefault();
    });

    $("#button-yt-start").click(function(event) {
        $("#yt-start").val(ytCurrTime);
        // player.setOption({ "startSeconds": 55 });
    });

    $("#button-yt-end").click(function(event) {
        $("#yt-end").val(ytCurrTime);
    });

    $("#yt-embed-update").click(function() {
        let newPlayTime = am.video.duration;
        let startAt = $("#yt-start").val();
        let endAt = $("#yt-end").val();
        if (endAt > 0 && endAt < am.video.duration) {
            newPlayTime = endAt;
            am.video.params = am.video.params + "&amp;end=" + endAt;
        }
        if (startAt > 0 && startAt < am.video.duration) {
            newPlayTime -= startAt;
            am.video.params = am.video.params + "&amp;start=" + startAt;
        }
        if (newPlayTime < am.video.duration) {
            newTimecode = getTimecode(newPlayTime);
            $("span.timecode").html(newTimecode);
            player.loadVideoById({
                videoId: am.id,
                startSeconds: startAt,
                endSeconds: endAt,
            });
        }
    });

    $("input.text-input").on("input", function() {
        id = $(this).attr("id");
        target = "#" + id.replace("input-", "");
        text = $(this).val();
        $(target).html(text);
    });


    /**
     *
     * Snippets
     *
     */

    // Return appropriate Embed Code snippet
    function bootstrapSnippet(i) {
        let snippet = `<img src="${am.image.preview}" class="img-responsive img-fluid w-100" alt="${am.image.alt}"${am.title !== null ? ` title="${am.title}"` : ""}>
<figcaption class="figure-caption text-muted small fw-lighter">
    <small>${
      am.prefs.collapsed
        ? `
        <!-- Start of Show/Hide interface, ID = ${am.id}-${i} -->
        <a class="source-btn text-muted" data-toggle="collapse" href="#show-${am.id}-${i}" role="button" aria-expanded="false" aria-controls="show-${am.id}-${i}">&#9661; Show attribution</a>
        <div class="source collapse m-0 p-0" id="show-${am.id}-${i}">`
        : ""
    }
        <a href="${am.url}" target="_blank">${am.site.type}</a> by <a href="${am.attribution.userUrl}" target="_blank">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>
            <br><a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>. Added ${am.today} ${
      am.prefs.collapsed
        ? `</div>
        <!-- End of Show/Hide interface, ID = ${am.id}-${i} -->`
        : ""
    }
    </small>
</figcaption>
`;
        return snippet;
    }

    // Return appropriate Embed Code snippet
    function tilesSnippet(i) {
        let snippet = `
    <!-- Start of Tile = ${i+1} -->
    <div class="col mb-4">
        <div class="card h-100 rounded ${am.prefs.classes.join(" ")}">
            <figure>
              <img src="${imgHistory[i].preview}" class="card-img-top" alt="${imgHistory[i].alt}">
              <figcaption class="figure-caption text-muted text-right small fw-lighter mr-1">
              ${
          am.prefs.collapsed
            ? `
            <!-- Start of Show/Hide interface, ID = Tiles-${i} -->
            <a class="source-btn text-muted small" data-toggle="collapse" href="#show-tiles-${i}" role="button" aria-expanded="false" aria-controls="show-tiles-${i}">&#9661; Show attribution</a>
            <div class="source collapse m-0 p-0" id="show-tiles-${i}">`
            : ""
        }
                ${imgHistory[i].attribution}
                ${
          am.prefs.collapsed
            ? `</div>
            <!-- End of Show/Hide interface, ID = Tiles-${i} -->`
            : ""
        }
              </figcaption>
          </figure>
          <div class="card-body pt-0">
            <h5 class="card-title">Card ${i+1} heading</h5>
            <p class="card-text">Card ${i+1} content goes here.</p>
          </div>
        </div>
    </div>
    <!-- End of Tile = ${i+1} -->

`;
        return snippet;
    }



    // If am.prefs.Org = uom, return Melb Uni embed code
    function vanillaSnippet(i) {
        let snippet = `<img src="${am.image.preview}" style="width:100%" alt="${am.image.alt}"${am.title !== null ? ` title="${am.title}"` : ""}>
<figcaption style="font-size: 0.9em; color:#666; text-align: right">
  ${am.prefs.collapsed
        ? `<details><summary style = 'font-size: 0.8em'>Show attribution</summary>`:""
    }
    <small><a href="${am.url}" target="_blank">Image</a> by <a href="${am.attribution.userUrl}" target="_blank">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>, <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>, added on ${am.today}</small>
  ${am.prefs.collapsed
        ? `</details>`:""
    }
  </details>
</figcaption>
`;
        return snippet;
    }


    // If am.prefs.Org = MP, return Melb Poly embed code
    function mpSnippet(i) {
        let snippet = `<img src="${am.image.preview}" class="img-responsive img-fluid w-100" alt="${am.image.alt}"${am.title !== null ? ` title="${am.title}"` : ""}>
<figcaption class="figure-caption text-muted small fw-lighter">
    <small><a href="${am.url}" target="_blank">Image</a> by <a href="${am.attribution.userUrl}" target="_blank">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>, <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>, added on ${am.today}</small>
</figcaption>
`;
        return snippet;
    }

    // Text only snippet
    function textSnippet() {
        let snippet = `<small class="text-muted"><a href="${am.url}" target="_blank">${am.site.type}</a> by <a href="${am.attribution.userUrl}" target="_blank">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>, <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>, added on ${am.today}</small>`;
        return snippet;
    }

    // Text only snippet
    function rtfSnippet() {
        let snippet = `<figure><img src="${am.image.preview}" class="img-responsive img-fluid w-100" alt="${am.image.alt}"${am.title !== null ? ` title="${am.title}"` : ""}>
<figcaption>
    <div style="font-size: 8pt; color:gray; background-color:white"><a href="${am.url}" target="_blank">Image</a> by <a href="${am.attribution.userUrl}" target="_blank">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>, <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>, added on ${am.today}</div>
</figcaption></figure>`;
        return snippet;
    }

    // YouTube snippet
    function ytSnippet() {
        let snippet = `<!-- Start of YouTube video box -->
<div class="clearfix container-fluid"></div>
<div class="card">
    <div class="card-body">
        <h4 class="text-danger yt-title"><i class="fa fa-play-circle-o"></i> ${am.title} (<span class="timecode">${am.video.timecode}</span>)</h4>
        <p class="yt-desc">${am.video.description}</p>
        <div class="embed-responsive embed-responsive-${am.video.aspect}">
            <div id="yt-placeholder" class="embed-responsive-item vjs-tech"></div>
        </div>
        <div class="text-right">
            <small class="text-muted small fw-lighter">
                <!-- Start of Show/Hide interface, ID = ${am.id} -->
                <a class="source-btn text-muted" data-toggle="collapse" href="#show-${am.id}" role="button" aria-expanded="false" aria-controls="show-${am.id}">▽ Show attribution</a>
                <div class="source collapse m-0 p-0" id="show-${am.id}">Video by <a href="${am.attribution.userUrl}">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>. <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>. Added ${am.today} </div>
                <!-- End of Show/Hide interface, ID = ${am.id} -->
            </small>
        </div>
    </div>
</div>
<!-- End of YouTube video box -->`;
        return snippet;
    }

    // YouTube snippet
    function uomytSnippet() {
        let snippet = `<div class="uom-ui-border-box uom-ui-add-border-radius" style="border-color:  #22765f; clear: both">
    <h3 style="color:  #22765f;"><i class="fab fa-youtube fa-fw"></i> ${am.title} (<span class="timecode">${am.video.timecode}</span>)</h3>
    <p class="yt-desc">${am.video.description}</p>
    <div style="position: relative; padding-bottom: ${am.video.ratio}%;">
        <div id="yt-placeholder" class="vjs-tech" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
    </div>
    <div style="text-align: right;"><small>${am.attribution.username} (${am.video.published}). <em>${am.title}</em> [Video]. YouTube. https://www.youtube.com/watch?v=${am.id}</small></div>
</div>`;
        return snippet;
    }

    // Vanilla YT snippet
    function vanillaYTSnippet() {
        let snippet = `<div style="border: 1px solid lightgrey; clear: both; padding: 1em; border-radius: 0.5em; margin:0">
    <h4 style="color:#DC3545;"><span style="border: 2px solid; border-radius:30%; margin:0; padding: 0 0.4em; font-size: 0.7em">⏵</span> ${am.title} (<span class="timecode">${am.video.timecode}</span>)</h4>
    <p class="yt-desc">${am.video.description}</p>
    <div style="position: relative; padding-bottom: ${am.video.ratio}%;">
        <div id="yt-placeholder" class="vjs-tech" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div>
    </div>
    <div style="text-align: right;"><small>${am.prefs.collapsed?`<details><summary>Show attribution</summary>`:""}Video by <a href="${am.attribution.userUrl}">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>. <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>. Added ${am.today}${am.prefs.collapsed?`</details>`:""}</small></div>
</div>`;
        return snippet;
    }

    // YouTube placeholder
    function ytPlaceholderSnippet() {
        let snippet = `<!-- Start of YouTube Placeholder, for YT videos that don't allow embedding (Embed code by @BirdyOz) -->
<div class="clearfix container-fluid"></div>
<div class="card">
    <div class="card-body">
        <h4 class="text-danger yt-title"><i class="fa fa-play-circle-o"></i> ${am.title} (<span class="timecode">${am.video.timecode}</span>)</h4>
        <p class="yt-desc">${am.video.description}</p>

        <div class="maker-overlay" style="position: relative;">
            <a href="https://youtu.be/${am.id}" target="_blank" style="color: white  !important">\n'
                <figure class="figure border rounded w-100"><img src="${am.video.thumb}" alt="YouTube video placeholder" class="w-100">
                </figure>
                <div class="text-overlay" style="text-align: center; color: white !important; text-shadow: 2px 2px 4px #000000; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%">
                    <p id="overlay-text" style="font-size: calc( 12px + (40 - 16) * ( 80vw / (1000 - 400) )) !important; line-height: calc( 20px + (32 - 16) * ( 80vw / (1000 - 400) )) !important;"><i class="fa fa-play-circle-o"></i> View video</p>
                    <p id="overlay-citation" style="font-size: calc( 12px + (24 - 16) * ( 60vw / (1000 - 400) )) !important; line-height: calc( 10px + (20 - 10) * ( 80vw / (1000 - 400) )) !important;">(Opens in new tab)</p>
                </div>
            </a>
        </div>

        <div class="text-right">
            <small class="text-muted small fw-lighter">
                <!-- Start of Show/Hide interface, ID = ${am.id} -->
                <a class="source-btn text-muted" data-toggle="collapse" href="#show-${am.id}" role="button" aria-expanded="false" aria-controls="show-${am.id}">▽ Show attribution</a>
                <div class="source collapse m-0 p-0" id="show-${am.id}">Video by <a href="${am.attribution.userUrl}">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>. <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>. Added ${am.today} </div>
                <!-- End of Show/Hide interface, ID = ${am.id} -->
            </small>
        </div>
    </div>
</div>
<!-- End of YouTube Placeholder -->`;
        return snippet;
    }

    /**
     *
     * Functions
     *
     */

    // Build images into interface
    function buildHTML() {

        console.log("@GB: am = ", am);

        // Set percentage text
        $('.percent').text(`${am.prefs.percent}%`)

        // Toggle between BS4 or Vanilla
        if (am.prefs.layout === "vanilla" || am.prefs.org === "uom") {
            // For vanilla, remove BS classes
            $(".maker-copy figure,.maker-copy img").removeAttr("class");
            $(".maker-floated > figure").css("width", `${am.prefs.percent}%`);
            // Remove border, bg and shadow, before addding back waht is stored in prefs
            $("figure").css({ "border": "", "box-shadow": "", "background-color": "" });
            $("figure").css(am.prefs.styles);
            $('.bootstrap-only').hide();
            snippet = vanillaSnippet;
        } else {
            // For BS4, remove styles
            $(".maker-copy figure,.maker-copy img").removeAttr("style");
            $(".maker-floated>figure").removeClass("col-md-6 col-md-5 col-md-4 col-md-3 col-md-2").addClass(am.prefs.cols);
            $(".rounded").removeClass("border shadow bg-light").addClass(am.prefs.classes.join(" "));
            snippet = bootstrapSnippet;
        }


        //
        $(".maker-copy figure").each(function(index) {
            $(this).html(snippet(index));
        });

        buildTiles();
        // Set Cropped and Text only alternateives
        $("#rcrop").attr("src", am.image.preview);
        $(".maker-txt").html(textSnippet());
        $(".maker-rtf").html(rtfSnippet());

        // Invoke rcrop (image cropper)
        // Set defaults
        let $img = $("#rcrop"),
            $update = $("#update"),
            inputs = {
                x: $("#x"),
                y: $("#y"),
                width: $("#width"),
                height: $("#height"),
            },
            fill = function() {
                let values = $img.rcrop("getValues");
                for (let coord in inputs) {
                    inputs[coord].val(values[coord]);
                }
            };

        // Define rcrop
        $("#rcrop").rcrop({
            minSize: [200, 200],
            preserveAspectRatio: false,
            grid: true,
            preview: {
                display: true,
                size: ["40%", "40%"],
                wrapper: "#custom-preview-wrapper",
            },
        });

        // Update cropped image on change
        $("#rcrop").on("rcrop-changed rcrop-ready", function() {
            srcOriginal = $(this).rcrop("getDataURL");
            let srcResized = $(this).rcrop("getDataURL", 50, 50);
            $(".maker-cropped img").attr("src", srcOriginal);
            am.image.cropped = srcOriginal;
            fill();
        });

        $update.click(function() {
            $img.rcrop("resize", inputs.width.val(), inputs.height.val(), inputs.x.val(), inputs.y.val());
            fill();
        });

    };


    // Return appropriate Embed Code snippet
    function buildTiles(i = imgHistory.length) {

        if (i==2) {
            $('#tiles-wrapper').removeClass("row-cols-md-3").addClass("row-cols-md-2")
        }

        // Set slider length to length of image history (12 max)
        $('#tile-image-count').attr("max", imgHistory.length < 12 ? imgHistory.length : 12);
        $('#tile-image-count').attr("value", imgHistory.length < 12 ? imgHistory.length : 12);

        // When invoked, clear out any existing tiles:
        $('#tiles-wrapper').html("");

        for (var n = 0; n < i; n++) {
            console.log("@GB: n = ", n);
            $('#tiles-wrapper').append(tilesSnippet(n));
        }

    }




    function buildHistory() {
        // Get localstorage prefs if available
        if ("Attribution-Maker-History" in localStorage) {
            am.history = JSON.parse(localStorage.getItem('Attribution-Maker-History'));
        }

        // If it is already in my history, remove the older version
        const i = am.history.findIndex(e => e.url === am.url);
        if (i > -1) {
            am.history.splice(i, 1);
        }

        // Add current item to history
        am.history.unshift({
            "url": am.url,
            "preview": am.image.preview,
            "alt": am.image.alt,
            "time": new Date().toLocaleString(),
            "attribution": `<small class="text-muted"><a href="${am.url}" target="_blank">${am.site.type}</a> by <a href="${am.attribution.userUrl}" target="_blank">${am.attribution.username}</a> on <a href="${am.site.siteurl}" target="_blank">${am.site.name}</a>, <a href="${am.site.licenceurl}" target="_blank">${am.site.licence}</a>, added on ${am.today}</small>`,
            "site": am.site.name
        });

        // Define a new object that only contains images
        imgHistory = am.history.filter(f => f.site !== "YouTube" && f.attribution)

        console.log("@GB: imgHistory = ", imgHistory);
        buildTiles();

        // There is more than one image in my history
        // NB temporarily set to zero
        $('#image-history').before(`<h3>Your recent history <span class=\"text-muted\">(${am.history.length} items)</span></h3>`);
        buildHistoryItems(am.history.slice(0, maxlength));
        if (am.history.length > maxlength) {
            $('#showfullhistory').html(`Show full history (${am.history.length - maxlength} more items).`);

        } else { $('#showfullhistory').hide(); }
        // Set localStorage
        localStorage.setItem('Attribution-Maker-History', JSON.stringify(am.history));
    }


    function buildHistoryItems(arr) {
        $.each(arr, function(i, img) {
            let card = `<div class="col-2"><div class="card m-1 text-center"> <a class="stretched-link" href="${url.pathname}?addr=${encodeURIComponent(img.url)}"> <div class="square" style="background-image: url('${img.preview}')">${img.url.includes('youtube')? "<i class=\"fa fa-play-circle-o\"></i>":""}</div></a> <small class="text-muted history-date">${img.time}</small> </div> </div>`;
            $('#image-history').append(card);
        });
    }


    $('#showfullhistory').click(function(event) {
        console.log("@GB: showfullhistory clicked");
        $('#now-showing').hide();
        buildHistoryItems(am.history.slice(maxlength));
        $('#showfullhistory').hide()
        return false;
    });


    function onYouTubeIframeAPIReady() {
        player = new YT.Player("yt-placeholder", {
            height: "100%",
            width: "100%",
            videoId: am.id,
            playerVars: {
                modestbranding: 1,
                rel: 0,
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
    }

    function onPlayerReady(event) {
        console.log("@GB: onPlayerReady");
    }

    function onPlayerStateChange(event) {
        setInterval(function() {
            if (event.data == YT.PlayerState.PLAYING && !YT.PlayerState.ENDED) {
                ytCurrTime = Math.floor(player.getCurrentTime());
                $("#yt-current").val(ytCurrTime);
            }
        }, 100);
    }
    $("#display-yt-description").change(function() {
        if (this.checked) {
            //Do stuff
            $(".yt-desc").html(am.video.description);
        } else {
            $(".yt-desc").html("");
        }
    });

    // Return today's date in dd/mm/yyyy format
    function todaysDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        let yyyy = today.getFullYear();
        today = dd + "/" + mm + "/" + yyyy;
        return today;
    }

    // log all console messages
    function logger(json) {
        console.log("@GB: json = ", json);
    }

    // Copy to clipboard for dumb browsers
    function fallbackCopyTextToClipboard(text) {
        let textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            let successful = document.execCommand("copy");
            let msg = successful ? "successful" : "unsuccessful";
        } catch (err) {}

        document.body.removeChild(textArea);
    }

    // Copy to clipboard
    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(
            function() {},
            function(err) {}
        );
    }

    function copyAsRtf(str) {
        function listener(e) {
            e.clipboardData.setData("text/html", str);
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
    }

    function getTimecode(secs) {
        // if less than 1hr
        if (secs < 3600) {
            tc = moment(secs * 1000).format("mm:ss");
        } else {
            tc = moment.utc(secs * 1000).format("h:mm:ss");
        }
        return tc;
    }
    // Download appropriately sized image.
    // Dynamically create an offscreen canvas area, load the chosen image,
    // then create a file from the Canvas content
    function downloader(name, content) {
        let image = new Image();
        image.crossOrigin = "anonymous";
        image.src = content;
        // get file name - you might need to modify this if your image url doesn't contain a file extension otherwise you can set the file name manually
        let fileName = image.src.split(/(\\|\/)/g).pop();
        image.onload = function() {
            let canvas = document.createElement("canvas");
            canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
            canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size
            console.log("@GB: canvas.width = ", canvas.width);
            canvas.getContext("2d").drawImage(this, 0, 0);
            let blob;
            blob = canvas.toDataURL("image/jpeg");

            let link = document.createElement("a");
            link.style = "position: fixed; left -10000px;";
            link.href = blob;

            link.download = am.site.name + "-" + am.id + "-" + canvas.width + "x" + canvas.height + ".jpg";
            console.log("@GB: link.download = ", link.download);

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    }
    // Sanitise text to remove HTML markup.
    function stripHTML(str) {
        str = $.parseHTML(str); // Convert str to DOM
        str = $(str).text().trim(); // Strip out HTML elements
        return str;
    }

    // Sanitise text to remove special chars. Sluggify output.
    String.prototype.slugify = function(separator = "-") {
        return this.toString()
            .normalize("NFD") // split an accented letter in the base letter and the acent
            .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9 ]/g, separator) // remove all chars not letters, numbers and spaces (to be replaced)
            .replace(/\s+/g, separator);
    };

    // Track Unsplash downloads
    async function sendTrackDownload(endpoint) {
        const response = await fetch(endpoint);
        const response_json = await response.json();
        console.log("@GB: response_json = ", response_json);
        if (!response.ok) {
            throw Error(response.statusText);
        }
    }
});