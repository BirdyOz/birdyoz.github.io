/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   gbird
 * @Last Modified time: 2021-12-08 15:31:42
 */

$(function() {

    // Get current date string
    let today = todaysDate();
    let site = "";
    let site_url = "";
    let id = ""; // Image ID
    let img_name = "Photo"; // Image name.   Defualt to "Photo"
    let img_orig = ""; // Link to original image
    let img_src = ""; // src of image to be displayed in page
    let download_sml = ""; // Small image 720px wide
    let download_lge = ""; // Large image 1440px wide
    let alt = ""; // alternative text
    let user = ""; //username
    let user_url = ""; //URL to user profile
    let licence = ""; // Licence type, eg "Free to use|Public Domain|CC-BY" etc.
    let licence_url = ""; // Link to licence
    let title = null; //If tyhe image has a title, then this will be used
    let startCollapsed = true; // Default to collapsed view
    let org = null; // to cater for organisation specific changes
    let width = "col-5"; // Default width for floated images
    let json = ""; // JSON Object returned by API call

    // Flickr licences
    let flickr_licences = {
        "license": [
            { "id": 1, "name": "Attribution-NonCommercial-ShareAlike License", "short": "CC BY-NC-SA", "url": "https://creativecommons.org/licenses/by-nc-sa/2.0/" },
            { "id": 2, "name": "Attribution-NonCommercial License", "short": "CC BY-NC", "url": "https://creativecommons.org/licenses/by-nc/2.0/" },
            { "id": 3, "name": "Attribution-NonCommercial-NoDerivs License", "short": "CC BY-NC-ND", "url": "https://creativecommons.org/licenses/by-nc-nd/2.0/" },
            { "id": 4, "name": "Attribution License", "short": "CC BY", "url": "https://creativecommons.org/licenses/by/2.0/" },
            { "id": 5, "name": "Attribution-ShareAlike License", "short": "CC BY-SA", "url": "https://creativecommons.org/licenses/by-sa/2.0/" },
            { "id": 6, "name": "Attribution-NoDerivs License", "short": "CC BY-ND", "url": "https://creativecommons.org/licenses/by-nd/2.0/" },
            { "id": 7, "name": "No known copyright restrictions", "short": "Commons (Flickr)", "url": "https://www.flickr.com/commons/usage/" },
            { "id": 8, "name": "United States Government Work", "short": "U.S. Government Work", "url": "http://www.usa.gov/copyright.shtml" },
            { "id": 9, "name": "Public Domain Dedication (CC0)", "short": "CC0", "url": "https://creativecommons.org/publicdomain/zero/1.0/" },
            { "id": 10, "name": "Public Domain Mark", "short": "Public Domain", "url": "https://creativecommons.org/publicdomain/mark/1.0/" }
        ]
    }

    // Set defualt value of collapsed or shown
    if (startCollapsed) {} else {
        $('#start-shown').click();
    }

    // Get URL parameters
    url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        url = new URL(url_string);
        img_orig = url.searchParams.get("addr");
        console.log("@GB: img_orig = ", img_orig);

        // Detect site
        if (img_orig.includes('unsplash.com')) {
            site = "Unsplash";
        }
        if (img_orig.includes('pixabay.com')) {
            site = "Pixabay";
            $('.pixabay-warning').show();
        }
        if (img_orig.includes('wikimedia.org')) {
            site = "Wikimedia Commons";
        }
        if (img_orig.includes('pexels.com')) {
            site = "Pexels";
        }
        if (img_orig.includes('flickr.com')) {
            site = "Flickr";
        }
        console.log("@GB: site = ", site);

        // Detect organisation
        org = url.searchParams.get("org");
        console.log("@GB: org = ", org);

        // If I am Melb Poly, do not allow attribution to be collpased.
        if (org == 'mp') {
            startCollapsed = false;
            $('#collapser').hide();
        }

    } else {
        console.log("@GB: No parameters");
        $('.firsttime-warning').show();
        $('#collapseExample').show();
    }

    // If I am Unsplash
    if (site == "Unsplash") {
        n = img_orig.lastIndexOf('/');
        id = img_orig.substring(n + 1);
        site_url = "https://unsplash.com";
        licence = "Free to use";
        licence_url = "https://unsplash.com/license";
        key = "MzM2YjUyN2IyZTE4ZDA0NTA0NTgyMGI3ODA2MmI5NWM4MjUzNzYzMTEzMjZiMmEwOGY5YjkzZWVmN2VmYzA3Yg%3D%3D";
        // API call
        uri = "https://api.unsplash.com/photos/" + id + "?client_id=" + atob(decodeURIComponent(key));

        $.getJSON(uri, function(json) {
            img_src = json.urls.regular;
            user = json.user.username;
            user_url = json.user.links.html;
            title = json.description;
            alt = json.alt_description;
            download_lge = img_src.replace("&w=1080", "&w=1440");
            img_src = download_lge;
            download_sml = img_src.replace("&w=1440", "&w=720");
            buildHTML();
            logger(json);
        });
    }

    // If I am Pexels
    if (site == "Pexels") {
        re = /[0-9]+/gi;
        id = re.exec(img_orig)[0];
        site_url = "https://pexels.com/";
        licence = "Free to use";
        licence_url = "https://www.pexels.com/license/";
        key = "NTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxYmZlZmZkMDc3YmFmNDU0ZGFiMjlkNjMwMGJkZjc0MGQ%3D";
        uri = "https://api.pexels.com/v1/photos/" + id;

        $.ajax({
            url: uri,
            dataType: 'json',
            headers: { 'Authorization': atob(decodeURIComponent(key)) },
            success: function(json) {
                img_src = json.src.original;
                img_src = img_src + "?auto=compress&cs=tinysrgb&w=1440";
                user = json.photographer;
                user_url = json.photographer_url;
                alt = json.url.split("/")[4].split("-");
                alt.pop();
                alt = alt.join(" ");
                download_sml = img_src + "?auto=compress&cs=tinysrgb&w=720";
                download_lge = img_src;
                buildHTML();
                logger(json);
            }
        });
    }

    // If I am Pixabay
    if (site == "Pixabay") {
        re = /[0-9]+/gi;
        id = re.exec(img_orig)[0];
        console.log("@GB: Pixabay id = ", id);
        site_url = "https://pixabay.com/";
        licence = "Free to use";
        licence_url = "https://pixabay.com/service/license/";
        key = "MTE0NDUtN2MzZTMxNzNkNmY5YTYwNDdlNjQ1ODNjYQ%3D%3D";
        uri = "https://pixabay.com/api/?key=" + atob(decodeURIComponent(key)) + "&id=" + id;

        $.getJSON(uri, function() {})
            .done(function(json) {
                img_src = json.hits[0].largeImageURL;
                user = json.hits[0].user;
                user_url = "https://pixabay.com/users/" + user;
                alt = json.hits[0].tags;
                img_name = "Image";
                download_sml = json.hits[0].webformatURL; // Small image 640px wide
                download_lge = img_src; // Large image 1280px wide
                buildHTML();
                logger(json);
            });
    }

    // If I am Flickr
    if (site == "Flickr") {
        re = /\/([0-9]+)\//gi;
        id = re.exec(img_orig)[1];
        console.log("@GB: Flickr id = ", id);
        site_url = "https://www.flickr.com/";
        key = "MmJjNjJmYzJkYzRhYWVjMGZiMGQ1NjY0MGMzYThhMjA=";
        info_uri = "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + atob(decodeURIComponent(key)) + "&photo_id=" + id + "&format=json&&nojsoncallback=1";
        sizes_uri = "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + atob(decodeURIComponent(key)) + "&photo_id=" + id + "&format=json&&nojsoncallback=1";


        $.getJSON(info_uri, function() {})
            .done(function(json) {
                let lic = json.photo.license;
                // Image is copyrighted
                if (lic == 0) {
                    $('.flickr-warning').show();
                    console.log("You cannot use that image");
                }
                // Image is CC or PD and image use is allowed
                else {
                    licence = flickr_licences.license.find(item => item.id == lic).short;
                    licence_url = flickr_licences.license.find(item => item.id == lic).url;
                    img_src = json.photo.urls.url[0]._content;
                    img_orig = img_src;
                    user = json.photo.owner.realname;
                    user_url = "https://www.flickr.com/photos/" + json.photo.owner.nsid;
                    alt = json.photo.description._content;
                    // get image sizes
                    $.getJSON(sizes_uri, function() {})
                        .done(function(json) {
                            download_sml = json.sizes.size.find(item => item.label == "Medium 800").source // Small image 800px wide
                            download_lge = json.sizes.size.find(item => item.label == "Large 1600").source // Small image 1600px wide
                            img_src = download_lge
                            buildHTML();

                            logger(json);
                        })
                }
                //     download_sml = json.hits[0].webformatURL; // Small image 640px wide
                //     download_lge = img_src; // Large image 1280px wide
                //     buildHTML();

            })
            .fail(function() {
                console.log("error");
            });
    }

    // If I am Wikimedia
    if (site == "Wikimedia Commons") {
        n = img_orig.lastIndexOf('/');
        id = img_orig.substring(n + 1);
        if (!id.includes('File:')) {
            console.log("@GB: id does not include File: = ", id);
            id = "File:" + id;
        }
        site_url = "https://commons.wikimedia.org/";
        uri = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&list=&meta=&iiprop=timestamp%7Cuser%7Cextmetadata%7Curl%7Cuserid&iilimit=1&iiurlwidth=720&origin=*&titles=" + id;

        $.getJSON(uri, function() {})
            .done(function(data) {
                json = data.query.pages[-1];
                console.log("@GB: json = ", json);
                img_src = json.imageinfo[0].thumburl;
                user = json.imageinfo[0].user;
                user_url = "https://commons.wikimedia.org/wiki/User:" + user.replace(" ", "_");
                alt = json.imageinfo[0].extmetadata.ObjectName.value;
                img_name = "Image";
                download_lge = download_sml = img_src; // Small image 720px wide
                if (json.imageinfo[0].thumbwidth >= 720) {
                    download_lge = json.imageinfo[0].responsiveUrls[2]; // Large image 1440px wide
                    img_src = download_lge;
                }
                licence = json.imageinfo[0].extmetadata.LicenseShortName.value;
                // Exception for public domain images
                try {
                    licence_url = json.imageinfo[0].extmetadata.LicenseUrl.value;
                } catch (error) {
                    console.error("Error: " + error);
                    licence_url = "https://en.wikipedia.org/wiki/Public_domain";
                }
                id = id.slugify();
                buildHTML();
                logger(json);
            });
    }


    $('#resizer').change(function() {
        selected_id = $("input[name='options']:checked").attr('id');
        selected_val = $("input[name='options']:checked").attr('value');
        $('.maker-floated>figure').removeClass(width);
        $('.maker-floated>figure').addClass(selected_id);
        $('.percent').text(selected_val);
        width = selected_id;
        console.log("@GB: New width = ", width);
    });

    $('#source-open').change(function() {
        selected_val = $("input[name='options']:checked").attr('value');
        if (selected_val == "Shown") {
            startCollapsed = false;
            buildHTML();
        } else {
            startCollapsed = true;
            buildHTML();
        }
    });


    $('#embedder button').click(function(event) {
        /* Act on the event */
        // Cancel the default action
        event.preventDefault();
        var btn = $(this);
        var closest = btn.prev('.maker-copy');
        var id = "." + btn.attr('id');
        var paste = $(id).html();
        console.log("@GB: Copied HTML = ", paste);
        copyTextToClipboard(paste);
        btn.toggleClass('btn-outline-primary btn-success');
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Embed code copied to clipboard');
        window.setTimeout(function() {
            btn.html('<i class="fa fa-clipboard" aria-hidden="true"></i> Copy embed code');
            // btn.removeClass('btn-danger');
            btn.toggleClass('btn-outline-primary btn-success');
        }, 3000);

    });


    $('a.download').click(function(event) {
        /* Act on the event */
        btn = $(this);
        title = btn.attr("title");
        src = download_lge;
        if (title == "img-sml") {
            src = download_sml;
        }
        downloader(id, src);

        btn.toggleClass('btn-outline-primary btn-success');
        btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Image downloaded');

        // Cancel the default action
        event.preventDefault();
    });

    function embedSnippet(i) {
        var snippet = `<img src="${img_src}" class="img-responsive img-fluid w-100" alt="${alt}"${title!==null ? ` title="${title}"` : ''}>
<figcaption class="figure-caption text-muted small fw-lighter">
    <small>${startCollapsed ? `
        <!-- Start of Show/Hide interface, ID = ${id}-${i} -->
        <a class="source-btn text-muted" data-toggle="collapse" href="#show-${id}-${i}" role="button" aria-expanded="false" aria-controls="show-${id}-${i}">&#9661; Show attribution</a>
        <div class="source collapse m-0 p-0" id="show-${id}-${i}">` : ''}
        <a href="${img_orig}" target="_blank">${img_name}</a> by <a href="${user_url}" target="_blank">${user}</a> on <a href="${site_url}" target="_blank">${site}</a>
            <br><a href="${licence_url}" target="_blank">${licence}</a>. Added ${today} ${startCollapsed ? `</div>
        <!-- End of Show/Hide interface, ID = ${id}-${i} -->` : ''}
    </small>
</figcaption>`;
        return snippet;
    }

    function mpSnippet(i) {
        var snippet = `<img src="${img_src}" class="img-responsive img-fluid w-100" alt="${alt}"${title!==null ? ` title="${title}"` : ''}>
<figcaption class="figure-caption text-muted small fw-lighter">
    <small><a href="${img_orig}" target="_blank">Image</a> by <a href="${user_url}" target="_blank">${user}</a> on <a href="${site_url}" target="_blank">${site}</a>, <a href="${licence_url}" target="_blank">${licence}</a>, added on ${today}</small>
</figcaption>`;
        return snippet;
    }

    function textSnippet(i) {
        var snippet = `<small class="text-muted"><a href="${img_orig}" target="_blank">${img_name}</a> by <a href="${user_url}" target="_blank">${user}</a> on <a href="${site_url}" target="_blank">${site}</a>, <a href="${licence_url}" target="_blank">${licence}</a>, added on ${today}</small>`;
        return snippet;
    }

    function buildHTML() {
        $('.maker-copy figure').each(function(index) {
            if (org == 'mp') {
                // Use Melb Poly's attribution rules
                if (site != "Wikimedia Commons") {
                    licence = "Licence";
                    console.log("@GB: licence = ", licence);
                }
                snippet = mpSnippet(index);
            } else { snippet = embedSnippet(index); }

            $(this).html(snippet);
        });
    }

    function todaysDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    function logger(json) {
        console.log("@GB: site = ", site);
        console.log("@GB: img_orig = ", img_orig);
        console.log("@GB: img_src = ", img_src);
        console.log("@GB: download_sml = ", download_sml);
        console.log("@GB: download_lge = ", download_lge);
        console.log("@GB: user = ", user);
        console.log("@GB: user_url = ", user_url);
        console.log("@GB: alt = ", alt);
        console.log("@GB: title = ", title);
        console.log("@GB: licence = ", licence);
        console.log("@GB: licence_url = ", licence_url);
        console.log("@GB: json = ", json);
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
            blob = canvas.toDataURL("image/jpeg");

            var link = document.createElement('a');
            link.style = 'position: fixed; left -10000px;';
            link.href = blob;

            link.download = site + "-" + name + "-" + canvas.width + "x" + canvas.height + ".jpg";
            console.log("@GB: link.download = ", link.download);


            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

    }

    String.prototype.slugify = function(separator = "-") {
        return this
            .toString()
            .normalize('NFD') // split an accented letter in the base letter and the acent
            .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9 ]/g, separator) // remove all chars not letters, numbers and spaces (to be replaced)
            .replace(/\s+/g, separator);
    };

});