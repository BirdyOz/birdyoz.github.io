/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-05-10 10:37:58
 * @Last Modified by:   gbird
 * @Last Modified time: 2022-07-15 15:59:00
    http://127.0.0.1:8080/attribution_maker.html?addr=https%3A%2F%2Funsplash.com%2Fphotos%2Fx2qSNIEZuEE
    http://127.0.0.1:8080/attribution_maker.html?addr=https%3A//www.youtube.com/watch%3Fv%3Dr5LxGkEL5bk%26t%3D5s
    http://127.0.0.1:8080/attribution_maker.html?addr=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fshadows-12434670%2F
    http://127.0.0.1:8080/attribution_maker.html?addr=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AYellow-footed_Antechinus_(Antechinus_flavipes)_-_50085736752.jpg
    http://127.0.0.1:8080/attribution_maker.html?addr=https%3A%2F%2Fpixabay.com%2Fphotos%2Fwoman-turban-afro-africa-female-7286907%2F
    http://127.0.0.1:8080/attribution_maker.html?addr=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fpepperberryfarm%2F52213775662%2Fin%2Fphotolist-2nxXfpq-2ny5Tad-2ny5T9X-2ny5SJy-2ny3ubu-2ny5Swu-2ny3tSy-2ny3oDf-2ny3tyc-2nxXe4V-2ny5RH5-2nxXdR5-2nxXdk5-2ny4MAt-2ny3stS-2nxXcPa-2ny4M27-2ny3rDf-2nxXcqV-2ny4LK5-2nxXcpc-2ny3miJ-2ny5PFe-2ny3kZH-2ny3kSD-2ny3kBZ-2ny3kp9-2nxXbnY-2ny3kfG-2ny3kaM-2ny5NUz-2ny4KvG-2ny4Kuz-2nxXaLY-2nxXaG4-2ny3pJD-2ny3jmc-2ny4JKd-2ny5MZU-2ny4JD6-2ny4JyX-2ny3pi3-2nxwJ7v-2nxwBj5-2nxrqx6-2nxwogX-2nxwngF-2nxySot-2nxwku9-2nxr9ag
 */

::Q01:: $(function() {

    ~ // Set Global vars
    = ::Q02::     let globals -> {
    ~ url: "",
    ~ id: "",
    ~ title: null,
    ~ today: todaysDate(),
    ~ ::Q03::         image: {
    ~ name: "Photo", //Default resource type
    ~ orig: "",
    ~ preview: "",
    ~ alt: "",
    ~ ::Q04::             download: {
    ~ large: "",
    ~ small: "",
    ~ endpoint: "" //For Unsplash, to trigger download enpoint
    ~ }
    ~ },
    ~ ::Q05::         video: {
    ~ timecode: "00:00:00",
    ~ duration: 0,
    ~ playtime: 0,
    ~ current: 0,
    ~ embeddable: true,
    ~ description:"",
    ~ params: ""
    ~ },
    ~ ::Q06::         attribution: {
    ~ username: "",
    ~ userUrl: "",
    ~ licence: "",
    ~ licenceUrl: ""
    ~ },
    ~ ::Q07::         prefs: {
    ~ org: null,
    ~ width: "col-5",
    ~ percent: "42%",
    ~ collapsed: true,
    ~ layout: "bootstrap"
    ~ }
    ~ }

    ~ // Supported sites
    = ::Q08::     const supported -> [{
    ~ name: "Unsplash",
    ~ baseurl: "unsplash.com",
    ~ type: "Photo",
    ~ siteurl: "https://unsplash.com/?utm_source=image_attribution_maker_by_birdyoz&utm_medium=referral",
    ~ licence: "Free to use",
    ~ licenceurl: "https://unsplash.com/license"
    ~ ::Q09::         }, {
    ~ name: "Pixabay",
    ~ baseurl: "pixabay.com",
    ~ type: "Image",
    ~ siteurl: "https://pixabay.com/",
    ~ licence: "Free to use",
    ~ licenceurl: "https://pixabay.com/service/license/"
    ~ ::Q10::         }, {
    ~ name: "Pexels",
    ~ baseurl: "pexels.com",
    ~ type: "Photo",
    ~ siteurl: "https://pexels.com/",
    ~ licence: "Free to use",
    ~ licenceurl: "https://www.pexels.com/license/"
    ~ ::Q11::         }, {
    ~ name: "Wikimedia Commons",
    ~ baseurl: "wikimedia.org",
    ~ type: "Image",
    ~ siteurl: "https://commons.wikimedia.org/",
    ~ licence: "",
    ~ licenceurl: ""
    ~ ::Q12::         }, {
    ~ name: "Shutterstock",
    ~ baseurl: "shutterstock.com",
    ~ type: "Photo",
    ~ siteurl: "https://www.shutterstock.com",
    ~ licence: "Used under licence with shutterstock.com",
    ~ licenceurl: "https://www.shutterstock.com/license"
    ~ ::Q13::         }, {
    ~ name: "YouTube",
    ~ baseurl: "youtube.com",
    ~ type: "Video",
    ~ siteurl: "https://commons.wikimedia.org/",
    ~ licence: "Terms of Use",
    ~ licenceurl: ""
    ~ ::Q14::         }, {
    ~ name: "Flickr CC",
    ~ baseurl: "flickr.com",
    ~ type: "Photo",
    = siteurl: "https://www.flickr.com/search/?license->2%2C3%2C4%2C5%2C6%2C9",
    ~ licence: "",
    ~ licenceurl: ""
    ~ }]

    ~ // Flickr licences
    = ::Q15::     const flickr_licences -> {
    ~ "license": [
    ~ ::Q16::             { "id": 1, "name": "Attribution-NonCommercial-ShareAlike License", "short": "CC BY-NC-SA", "url": "https://creativecommons.org/licenses/by-nc-sa/2.0/" },
    ~ ::Q17::             { "id": 2, "name": "Attribution-NonCommercial License", "short": "CC BY-NC", "url": "https://creativecommons.org/licenses/by-nc/2.0/" },
    ~ ::Q18::             { "id": 3, "name": "Attribution-NonCommercial-NoDerivs License", "short": "CC BY-NC-ND", "url": "https://creativecommons.org/licenses/by-nc-nd/2.0/" },
    ~ ::Q19::             { "id": 4, "name": "Attribution License", "short": "CC BY", "url": "https://creativecommons.org/licenses/by/2.0/" },
    ~ ::Q20::             { "id": 5, "name": "Attribution-ShareAlike License", "short": "CC BY-SA", "url": "https://creativecommons.org/licenses/by-sa/2.0/" },
    ~ ::Q21::             { "id": 6, "name": "Attribution-NoDerivs License", "short": "CC BY-ND", "url": "https://creativecommons.org/licenses/by-nd/2.0/" },
    ~ ::Q22::             { "id": 7, "name": "No known copyright restrictions", "short": "Commons (Flickr)", "url": "https://www.flickr.com/commons/usage/" },
    ~ ::Q23::             { "id": 8, "name": "United States Government Work", "short": "U.S. Government Work", "url": "http://www.usa.gov/copyright.shtml" },
    ~ ::Q24::             { "id": 9, "name": "Public Domain Dedication (CC0)", "short": "CC0", "url": "https://creativecommons.org/publicdomain/zero/1.0/" },
    ~ ::Q25::             { "id": 10, "name": "Public Domain Mark", "short": "Public Domain", "url": "https://creativecommons.org/publicdomain/mark/1.0/" }
    ~ ]
    ~ }




    = let startCollapsed -> true; // Default to collapsed view
    = let org -> null; // to cater for organisation specific changes
    = let width -> "col-5"; // Default width for floated images
    = let percent -> "42%"; // Default percent for floated images
    = let json -> ""; // JSON Object returned by API call
    = let srcOriginal -> ""; // Original image SRC (High Res);
    = let layout -> "bootstrap"; // Preferred layout engine
    ~ let player; // YouTube player API
    = // let duration -> 0;
    = let ytTimeCode -> "00:00:00";
    = let ytDuration -> "";
    = let ytPlayTime -> 0;
    = let ytCurrTime -> "0";
    = let ytParams -> "";


    ~ // Get URL parameters
    = url_string -> window.location.href;
    ~ ::Q26::     if (url_string.indexOf("?") > 0) {

    ~ // Get image address
    = url -> new URL(url_string);
    = globals.url -> url.searchParams.get("addr");

    ~ globals.site = supported.find(item => globals.url.includes(item.baseurl));
    = console.log("@GB: globals -> ", globals);



    ~ // Determine whether image or video.   Hide other display
    ~ ::Q27::         if (globals.site.name == "YouTube") {
    ~ $('#am-images').hide()
    = site -> "YouTube";
    ~ ::Q28::         } else {
    ~ $('#am-video').hide()
    ~ }

    ~ // Detect organisation.
    ~ // Allows for different attribution 'recipes' for different organsiations (eg MP).
    = org -> url.searchParams.get("org");
    = layout -> url.searchParams.get("layout");



    ~ // If I am Melb Poly, UoM or Vanilla, do not allow attribution to be collpased.
    ~ ::Q29::         if (org === 'mp'  org === 'uom'  layout === 'vanilla') {
    = startCollapsed -> false;
    ~ $('#collapser').addClass("d-none");
    ~ $('#collapser').removeClass("d-inline-block");
    ~ }

    ~ // If I am Melb Poly or UoM, take away layout buttins
    ~ ::Q30::         if (org === 'mp'  org === 'uom') {
    = startCollapsed -> false;
    ~ $('#layout').addClass("d-none");
    ~ $('#layout').removeClass("d-inline-block");
    ~ }

    ~ // Toggle between BS4 or Vanilla
    ~ ::Q31::         if (org === 'uom'  layout === 'vanilla') {
    = layout -> 'vanilla';
    ~ $('#vanilla').attr('checked', 'checked').trigger("click");
    ~ $('.maker-copy figure,.maker-copy img').removeAttr('class');
    ~ ::Q32::         } else {
    ~ $('#bootstrap').attr('checked', 'checked').trigger("click");
    ~ $('.maker-copy figure,.maker-copy img').removeAttr('style');
    ~ }

    ~ ::Q33::     } else {
    ~ // No URL parameters exist.   Show first time warning
    ~ console.log("@GB: No parameters");
    ~ $('.firsttime-warning').show();
    ~ $('#collapseExample').show();
    ~ }

    ~ /**
    ~ *
    ~ * API calls
    ~ *
    ~ */

    ~ // If I am Unsplash
    ~ ::Q34::     if (globals.site.name == "Unsplash") {

    ~ // Get image ID
    = n -> globals.url.lastIndexOf('/');
    = id -> globals.url.substring(n + 1);

    ~ siteUrl = "https://unsplash.com/?utm_source=image_attribution_maker_by_birdyoz&utm_medium=referral";
    = globals.attribution.licence -> "Free to use";
    = globals.attribution.licenceUrl -> "https://unsplash.com/license";
    = // oldkey -> "MzM2YjUyN2IyZTE4ZDA0NTA0NTgyMGI3ODA2MmI5NWM4MjUzNzYzMTEzMjZiMmEwOGY5YjkzZWVmN2VmYzA3Yg%3D%3D";
    ~ key = "STJMT3JlREVmUWlWQUtFUTBEOHZfVXM4clUtNUloRlFDbWNsUnZ5RzFYdw=="
    ~ // API call
    ~ uri = "https://api.unsplash.com/photos/" + id + "?client_id=" + atob(decodeURIComponent(key));

    ~ // API call
    ~ ::Q35::         $.getJSON(uri, function() {})
    ~ ::Q36::             .done(function(json) {
    = console.log("@GB: json -> ", json);
    = globals.image.preview -> json.urls.regular;
    = globals.attribution.username -> json.user.username;
    ~ globals.attribution.userUrl = json.user.links.html + "?utm_source=image_attribution_maker_by_birdyoz&utm_medium=referral";
    = globals.title -> json.description;
    = globals.image.alt -> json.alt_description;
    ~ globals.image.download.large = globals.image.preview.replace("&w=1080", "&w=1440");
    = globals.image.preview -> globals.image.download.large;
    ~ globals.image.download.small = globals.image.preview.replace("&w=1440", "&w=720");
    ~ globals.image.download.endpoint = json.links.download_location + "&client_id=" + atob(decodeURIComponent(key));
    ~ buildHTML();
    ~ });
    ~ }

    ~ // If I am Pexels
    ~ ::Q37::     if (globals.site.name == "Pexels") {

    ~ // Get image ID
    = re -> /[0-9]+/gi;
    = id -> re.exec(globals.url)[0];

    = siteUrl -> "https://pexels.com/";
    = globals.attribution.licence -> "Free to use";
    = globals.attribution.licenceUrl -> "https://www.pexels.com/license/";
    = key -> "NTYzNDkyYWQ2ZjkxNzAwMDAxMDAwMDAxYmZlZmZkMDc3YmFmNDU0ZGFiMjlkNjMwMGJkZjc0MGQ%3D";
    = uri -> "https://api.pexels.com/v1/photos/" + id;

    ~ // API call.   Using $.ajax as paxels requires authentication headers
    ~ ::Q38::         $.ajax({
    ~ url: uri,
    ~ dataType: 'json',
    ~ ::Q39::             headers: { 'Authorization': atob(decodeURIComponent(key)) },
    ~ ::Q40::             success: function(json) {
    = globals.image.preview -> json.src.original;
    ~ globals.image.preview = globals.image.preview + "?auto=compress&cs=tinysrgb&w=1440";
    = globals.attribution.username -> json.photographer;
    = globals.attribution.userUrl -> json.photographerUrl;
    = alt -> json.url.split("/")[4].split("-");
    ~ alt.pop();
    = globals.image.alt -> alt.join(" ");
    ~ globals.image.download.small = globals.image.preview + "?auto=compress&cs=tinysrgb&w=720";
    = globals.image.download.large -> globals.image.preview;
    ~ buildHTML();
    ~ logger(json);
    ~ }
    ~ });
    ~ }

    ~ // If I am Pixabay
    ~ ::Q41::     if (globals.site.name == "Pixabay") {

    ~ $('.pixabay-warning').show();
    ~ // Get image ID
    = re -> /[0-9]+/gi;
    = id -> re.exec(globals.url)[0];

    = siteUrl -> "https://pixabay.com/";
    = globals.attribution.licence -> "Free to use";
    = globals.attribution.licenceUrl -> "https://pixabay.com/service/license/";
    = key -> "MTE0NDUtN2MzZTMxNzNkNmY5YTYwNDdlNjQ1ODNjYQ%3D%3D";
    ~ uri = "https://pixabay.com/api/?key=" + atob(decodeURIComponent(key)) + "&id=" + id;

    ~ ::Q42::         $.getJSON(uri, function() {})
    ~ ::Q43::             .done(function(json) {
    = globals.image.preview -> json.hits[0].largeImageURL;
    = globals.attribution.username -> json.hits[0].user;
    = globals.attribution.userUrl -> "https://pixabay.com/users/" + user;
    = globals.image.alt -> json.hits[0].tags;
    = globals.image.download.small -> json.hits[0].webformatURL; // Small image 640px wide
    = globals.image.download.large -> globals.image.preview; // Large image 1280px wide
    ~ buildHTML();
    ~ logger(json);
    ~ })
    ~ ::Q44::             .fail(function() {
    ~ console.log(json);
    ~ });
    ~ }

    ~ // If I am Flickr
    ~ ::Q45::     if (globals.site.name == "Flickr CC") {

    ~ // Get image ID
    = re -> /\/([0-9]+)\//gi;
    = id -> re.exec(globals.url)[1];

    ~ key = "MmJjNjJmYzJkYzRhYWVjMGZiMGQ1NjY0MGMzYThhMjA=";
    ~ info_uri = "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + atob(decodeURIComponent(key)) + "&photo_id=" + id + "&format=json&&nojsoncallback=1";
    ~ sizes_uri = "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" + atob(decodeURIComponent(key)) + "&photo_id=" + id + "&format=json&&nojsoncallback=1";


    ~ ::Q46::         $.getJSON(info_uri, function() {})
    ~ ::Q47::             .done(function(json) {
    = let lic -> json.photo.license;
    ~ // Image is copyrighted
    ~ ::Q48::                 if (lic == 0) {
    ~ $('.flickr-warning').show();
    ~ console.log("You cannot use that image");
    ~ }
    ~ // Image is CC or PD and image use is allowed
    ~ ::Q49::                 else {
    ~ globals.attribution.licence = flickr_licences.license.find(item => item.id == lic).short;
    ~ globals.attribution.licenceUrl = flickr_licences.license.find(item => item.id == lic).url;
    = globals.attribution.username -> json.photo.owner.realname;
    = globals.attribution.userUrl -> "https://www.flickr.com/photos/" + json.photo.owner.nsid;
    = globals.image.alt -> json.photo.title._content;
    = globals.title -> json.photo.description._content;
    = globals.title -> stripHTML(title);
    ~ // get image sizes
    ~ ::Q50::                     $.getJSON(sizes_uri, function() {})
    ~ ::Q51::                         .done(function(json2) {
    ~ globals.image.preview = json2.sizes.size.find(item => item.label == "Original").source;
    ~ let orig_width = json2.sizes.size.find(item => item.label == "Original").width;
    ~ // Check if image is large enough to resize
    = ::Q52::                             if (orig_width >-> 800) {
    ~ globals.image.download.small = json2.sizes.size.find(item => item.label == "Medium 800").source
    = ::Q53::                             } else { globals.imagedownload.small -> globals.image.preview };

    = ::Q54::                             if (orig_width >-> 1600) {
    ~ globals.image.download.large = json2.sizes.size.find(item => item.label == "Large 1600").source
    = globals.image.preview -> globals.image.download.large
    = ::Q55::                             } else { globals.image.download.large -> globals.image.preview };

    ~ buildHTML();
    ~ // Merge back into one JSON object, for logger
    ~ $.extend(json, json2);
    ~ logger(json);
    ~ })
    ~ }
    = //     globals.image. download.small -> json.hits[0].webformatURL; // Small image 640px wide
    = //     globals.image.download.large -> globals.image.preview; // Large image 1280px wide
    ~ //     buildHTML();

    ~ })
    ~ ::Q56::             .fail(function() {
    ~ console.log("error");
    ~ });
    ~ }

    ~ // If I am Wikimedia
    ~ ::Q57::     if (globals.site.name == "Wikimedia Commons") {

    ~ // Get image ID
    = n -> globals.url.lastIndexOf('/');
    = id -> globals.url.substring(n + 1);

    ~ ::Q58::         if (!id.includes('File:')) {
    = id -> "File:" + id;
    ~ }
    = siteUrl -> "https://commons.wikimedia.org/";
    ~ uri = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&list=&meta=&iiprop=timestamp%7Cuser%7Cextmetadata%7Curl%7Cuserid&iilimit=1&iiurlwidth=720&origin=*&titles=" + id;

    ~ ::Q59::         $.getJSON(uri, function() {})
    ~ ::Q60::             .done(function(data) {
    = json -> data.query.pages[-1];
    = globals.image.preview -> json.imageinfo[0].thumburl;
    = globals.attribution.username -> json.imageinfo[0].user;
    = globals.attribution.userUrl -> "https://commons.wikimedia.org/wiki/User:" + user.replace(" ", "_");
    = globals.image.alt -> json.imageinfo[0].extmetadata.ObjectName.value;

    ~ globals.image.download.large = globals.image.download.small = globals.image.preview; // Small image 720px wide

    = ::Q61::                 if (json.imageinfo[0].thumbwidth >-> 720) {
    = globals.image.download.large -> json.imageinfo[0].responsiveUrls[2]; // Large image 1440px wide
    = globals.image.preview -> globals.image.download.large;
    ~ }

    = globals.attribution.licence -> json.imageinfo[0].extmetadata.LicenseShortName.value;

    ~ // Exception for public domain images
    ~ ::Q62::                 try {
    = globals.attribution.licenceUrl -> json.imageinfo[0].extmetadata.LicenseUrl.value;
    ~ ::Q63::                 } catch (error) {
    ~ console.error("Error: " + error);
    = globals.attribution.licenceUrl -> "https://en.wikipedia.org/wiki/Public_domain";
    ~ }

    = id -> id.slugify();
    ~ buildHTML();
    ~ logger(json);
    ~ });
    ~ }

    ~ // If I am Shutterstock
    ~ // Until API is opened, get values from URL params

    ~ ::Q64::     if (globals.site.name == "Shutterstock") {
    ~ ::Q65::         if (url.searchParams.get("id") == null) {
    ~ $('.bookmarklet-warning').show();
    ~ return false;
    ~ }
    = globals.attribution.username -> url.searchParams.get("user");
    = globals.attribution.userUrl -> url.searchParams.get("globals.attribution.userUrl");
    = globals.attribution.username -> url.searchParams.get("user");
    = globals.image.alt -> url.searchParams.get("alt");
    = globals.title -> url.searchParams.get("title");
    = globals.image.preview -> url.searchParams.get("globals.image.preview");
    = id -> url.searchParams.get("id");
    = globals.attribution.licence -> "Used under licence with shutterstock.com";
    = globals.attribution.licenceUrl -> "https://www.shutterstock.com/license";
    = siteUrl -> "https://www.shutterstock.com";

    ~ // Hide download buttons and cropper, as these make no sense for SS
    ~ $('.download').hide();
    ~ $('.cropper').hide();


    ~ $('.shutterstock-warning').show();
    ~ buildHTML();
    ~ logger();
    ~ }

    ~ // If YouTube

    ~ ::Q66::     if (globals.site.name == "YouTube") {
    = ytUrl -> new URL(globals.url);
    = id -> ytUrl.searchParams.get("v");

    = siteUrl -> "https://www.youtube.com";
    = globals.attribution.licence -> "Terms";
    ~ globals.attribution.licenceUrl = "https://www.youtube.com/static?template=terms&gl=AU";
    = key -> "QUl6YVN5QmxCcEFUTzF0Z0hOM3FyUGUwWlQ5aGFFMW5UQmxRYVU0"
    ~ // API call
    ~ uri = "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatus%2Cplayer&id=" + id + "&key=" + atob(decodeURIComponent(key));

    ~ // API call
    ~ ::Q67::         $.getJSON(uri, function() {})
    ~ ::Q68::             .done(function(json) {
    = console.log("@GB: json -> ", json);
    = let vid -> json.items[0].snippet;
    = globals.title -> vid.title;
    ~ ::Q69::                 if (vid.description.length > 0) {
    = globals.video.description -> vid.description;
    ~ }
    ~ // Is embedding allowed?
    = let embeddable -> json.items[0].status.embeddable;
    = console.log("@GB: embeddable -> ", embeddable);

    ~ // Extract dimenssion from embed code.  Establish ratio.
    = let embedcode -> json.items[0].player.embedHtml;
    = let embed_width -> $(embedcode).attr("width");
    = let embed_height -> $(embedcode).attr("height");
    = let ratio -> embed_width / embed_height;
    = let aspect -> "";
    ~ ::Q70::                 if (ratio == 1) {
    = aspect -> "1by1"
    ~ ::Q71::                 } else if (ratio > 2.3) {
    = aspect -> "21by9"
    ~ ::Q72::                 } else if (ratio > 1.7) {
    = aspect -> "16by9"
    ~ ::Q73::                 } else {
    = aspect -> "4by3"
    ~ }
    = ytPlayTime -> json.items[0].contentDetails.duration;
    = duration -> moment.duration(ytPlayTime).asSeconds();
    = ytTimeCode -> getytTimeCode(duration);
    = globals.attribution.username -> json.items[0].snippet.channelTitle;
    = globals.attribution.userUrl -> "https://www.youtube.com/channel/" + json.items[0].snippet.channelId;
    = snippet -> ytSnippet();
    ~ $('#am-yt-embed').html(snippet);

    ~ // Invoke YT API
    ~ onYouTubeIframeAPIReady();
    ~ });
    ~ }

    ~ /**
    ~ *
    ~ * Event Listeners
    ~ *
    ~ */


    ~ // Change relative image size for floated images
    ~ ::Q74::     $('#resizer').change(function() {
    ~ selected_id = $("input[name='options']:checked").attr('id');
    ~ selected_val = $("input[name='options']:checked").attr('value');

    ~ ::Q75::         if (org === 'uom'  layout === 'vanilla') {
    ~ $('.maker-floated>figure').css("width", selected_val)
    ~ ::Q76::         } else {
    ~ $('.maker-floated>figure').removeClass(width);
    ~ $('.maker-floated>figure').addClass(selected_id);
    ~ }
    ~ $('.percent').text(selected_val);
    = width -> selected_id;
    = percent -> selected_val;
    ~ });

    ~ // Change whether attribution is shown or collapsed (collapsed by default)
    ~ ::Q77::     $('#source-open').change(function() {
    ~ selected_val = $("input[name='options']:checked").attr('value');

    ~ ::Q78::         if (selected_val == "Shown") {
    = startCollapsed -> false;
    ~ buildHTML();
    ~ ::Q79::         } else {
    = startCollapsed -> true;
    ~ buildHTML();
    ~ }
    ~ });

    ~ // Toggle bettwen BS4+ and inline CSS
    ~ ::Q80::     $('#layout').change(function() {
    ~ layout = $("input[name='options']:checked").attr('value');
    ~ url.searchParams.set('layout', layout);
    = window.location.href -> url
    ~ });


    ~ ::Q81::     $('button.embed').click(function(event) {
    ~ event.preventDefault();
    = let btn -> $(this);
    = let id -> "." + btn.attr('id');
    = let paste -> $(id).html();

    ~ // If Cropped, replace image in embed code with dummy image
    ~ ::Q82::         if (id == ".maker-cropped") {
    ~ paste = paste.replace(srcOriginal, "https://dummyimage.com/1440x760/b094b0/e3b1e3&text=Replace+me+with+cropped+image");
    ~ }

    ~ // If Pixabay, replace image in embed code with dummy image
    ~ ::Q83::         if (globals.site.name == "Pixabay") {
    ~ paste = paste.replace(globals.image.preview, "https://dummyimage.com/1440x760/b094b0/e3b1e3&text=Replace+me+with+downloaded+Pixabay+image");
    ~ }
    ~ // If Pixabay, replace image in embed code with dummy image
    ~ ::Q84::         if (globals.site.name == "YouTube") {
    ~ paste = paste.replace("widgetid=1", "widgetid=1" + ytParams);
    ~ }
    ~ ::Q85::         if (id == ".maker-rtf") {
    ~ copyAsRtf(paste);
    ~ ::Q86::         } else {
    ~ copyTextToClipboard(paste);
    ~ }
    ~ btn.toggleClass('btn-outline-primary btn-success');
    ~ btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Copied to clipboard');
    ~ ::Q87::         window.setTimeout(function() {
    ~ btn.html('<i class="fa fa-clipboard" aria-hidden="true"></i> Copy embed code');
    ~ // btn.removeClass('btn-danger');
    ~ btn.toggleClass('btn-outline-primary btn-success');
    ~ }, 3000);

    ~ });

    ~ // Download appropriately sized image
    ~ ::Q88::     $('a.download').click(function(event) {
    ~ /* Act on the event */
    = btn -> $(this);
    = globals.title -> btn.attr("title");
    = src -> globals.image.download.large;
    ~ ::Q89::         if (title == "img-sml") {
    = src -> globals.image.download.small;
    ~ }
    ~ ::Q90::         if (title == "img-cropped") {
    = src -> $(".maker-cropped img").attr("src");
    ~ }
    = console.log("@GB: src -> ", src);
    ~ ::Q91::         if (globals.site.name === "Unsplash") {
    ~ sendTrackDownload(globals.image.download.endpoint);
    ~ }

    ~ // Send to Downloader
    ~ downloader(id, src);

    ~ btn.toggleClass('btn-outline-primary btn-success');
    ~ btn.html('<i class="fa fa-check" aria-hidden="true"></i> Done! Image downloaded');

    ~ // Cancel the default action
    ~ event.preventDefault();
    ~ });

    ~ ::Q92::     $('#button-yt-start').click(function(event) {
    ~ $('#yt-start').val(ytCurrTime);
    ~ ::Q93::         player.setOption({ "startSeconds": 55 });
    ~ });

    ~ ::Q94::     $('#button-yt-end').click(function(event) {
    ~ $('#yt-end').val(ytCurrTime);
    ~ });

    ~ ::Q95::     $("#yt-embed-update").click(function() {
    = let newPlayTime -> ytPlayTime;
    = let startAt -> $('#yt-start').val();
    = let endAt -> $('#yt-end').val();
    ~ ::Q96::         if (endAt > 0 && endAt < duration) {
    = newPlayTime -> endAt;
    ~ ytParams = ytParams + "&amp;end=" + endAt;
    ~ }
    ~ ::Q97::         if (startAt > 0 && startAt < duration) {
    = newPlayTime --> startAt;
    ~ ytParams = ytParams + "&amp;start=" + startAt;
    ~ }
    = console.log("@GB: ytParams -> ", ytParams);
    ~ ::Q98::         if (newPlayTime < duration) {
    = // let embedSmall -> $('iframe#yt-placeholder').attr('src').split("&")[0];
    ~ // $('iframe#yt-placeholder').attr('src', embedSmall + params);
    = // console.log("@GB: embedSmall -> ", embedSmall);
    = newytTimeCode -> getytTimeCode(newPlayTime);
    ~ $('span.ytTimeCode').html(newytTimeCode);
    ~ ::Q99::             player.loadVideoById({
    ~ videoId: id,
    ~ startSeconds: startAt,
    ~ endSeconds: endAt
    ~ })
    ~ }
    ~ })

    ~ /**
    ~ *
    ~ * Snippets
    ~ *
    ~ */

    ~ // Return appropriate Embed Code snippet
    ~ ::Q100::     function embedSnippet(i) {
    ~ ::Q101::         let snippet = `<img src="${globals.image.preview}" class="img-responsive img-fluid w-100" alt="${globals.image.alt}"${globals.title!==null ? ` title="${globals.title}"` : ''}>
    = <figcaption class->"figure-caption text-muted small fw-lighter">
    ~ ::Q102::     <small>${startCollapsed ? `
    = ::Q103::         <!-- Start of Show/Hide interface, ID -> ${id}-${i} -->
    ~ ::Q104::         <a class="source-btn text-muted" data-toggle="collapse" href="#show-${id}-${i}" role="button" aria-expanded="false" aria-controls="show-${id}-${i}">&#9661; Show attribution</a>
    ~ ::Q105::         <div class="source collapse m-0 p-0" id="show-${id}-${i}">` : ''}
    ~ ::Q106::         <a href="${globals.site.type}" target="_blank">${globals.site.type}</a> by <a href="${globals.attribution.userUrl}" target="_blank">${globals.attribution.username}</a> on <a href="${globals.site.siteurl}" target="_blank">${globals.site.name}</a>
    ~ ::Q107::             <br><a href="${globals.site.licenceurl}" target="_blank">${globals.site.licence}</a>. Added ${globals.today} ${startCollapsed ? `</div>
    = ::Q108::         <!-- End of Show/Hide interface, ID -> ${id}-${i} -->` : ''}
    ~ </small>
    ~ </figcaption>`;
    ~ return snippet;
    ~ }

    = // If Org -> MP, return Melb Poly embed code
    ~ ::Q109::     function mpSnippet(i) {
    ~ ::Q110::         let snippet = `<img src="${globals.image.preview}" class="img-responsive img-fluid w-100" alt="${globals.image.alt}"${globals.title!==null ? ` title="${globals.title}"` : ''}>
    = <figcaption class->"figure-caption text-muted small fw-lighter">
    ~ ::Q111::     <small><a href="${globals.site.type}" target="_blank">Image</a> by <a href="${globals.attribution.userUrl}" target="_blank">${globals.attribution.username}</a> on <a href="${globals.site.siteurl}" target="_blank">${globals.site.name}</a>, <a href="${globals.site.licenceurl}" target="_blank">${globals.site.licence}</a>, added on ${globals.today}</small>
    ~ </figcaption>`;
    ~ return snippet;
    ~ }

    = // If Org -> uom, return Melb Uni embed code
    ~ ::Q112::     function vanillaSnippet(i) {
    ~ ::Q113::         let snippet = `<img src="${globals.image.preview}" style="width:100%" alt="${globals.image.alt}"${globals.title!==null ? ` title="${globals.title}"` : ''}>
    = <figcaption style->"font-size: 0.9em; opacity: 0.5; text-align: right">
    ~ ::Q114::     <small><a href="${globals.site.type}" target="_blank">Image</a> by <a href="${globals.attribution.userUrl}" target="_blank">${globals.attribution.username}</a> on <a href="${globals.site.siteurl}" target="_blank">${globals.site.name}</a>, <a href="${globals.site.licenceurl}" target="_blank">${globals.site.licence}</a>, added on ${globals.today}</small>
    ~ </figcaption>`;
    ~ return snippet;
    ~ }

    ~ // Text only snippet
    ~ ::Q115::     function textSnippet() {
    ~ ::Q116::         let snippet = `<small class="text-muted"><a href="${globals.site.type}" target="_blank">${globals.site.type}</a> by <a href="${globals.attribution.userUrl}" target="_blank">${globals.attribution.username}</a> on <a href="${globals.site.siteurl}" target="_blank">${globals.site.name}</a>, <a href="${globals.site.licenceurl}" target="_blank">${globals.site.licence}</a>, added on ${globals.today}</small>`;
    ~ return snippet;
    ~ }

    ~ // Text only snippet
    ~ ::Q117::     function rtfSnippet() {
    ~ ::Q118::         let snippet = `<figure><img src="${globals.image.preview}" class="img-responsive img-fluid w-100" alt="${globals.image.alt}"${globals.title!==null ? ` title="${globals.title}"` : ''}>
    ~ <figcaption>
    ~ ::Q119::     <div style="font-size: 8pt; color:gray; background-color:white"><a href="${globals.site.type}" target="_blank">Image</a> by <a href="${globals.attribution.userUrl}" target="_blank">${globals.attribution.username}</a> on <a href="${globals.site.siteurl}" target="_blank">${globals.site.name}</a>, <a href="${globals.site.licenceurl}" target="_blank">${globals.site.licence}</a>, added on ${globals.today}</div>
    ~ </figcaption></figure>`;
    ~ return snippet;
    ~ }

    ~ // YouTube snippet
    ~ ::Q120::     function ytSnippet() {
    = let snippet -> `<!-- Start of Video box -->
    = <div class->"clearfix container-fluid"></div>
    = <div class->"card">
    = <div class->"card-body">
    ~ ::Q121::         <h4 class="text-danger yt-title"><i class="fa fa-play-circle-o"></i> ${globals.title} (<span class="ytTimeCode">${ytTimeCode}</span>)</h4>
    = ::Q122::         <p class->"yt-desc">${globals.video.description}</p>
    = <div class->"embed-responsive embed-responsive-4by3">
    ~ <div id="yt-placeholder" class="embed-responsive-item vjs-tech"></div>
    ~ </div>
    = <div class->"text-right">
    = <small class->"text-muted small fw-lighter">
    = ::Q123::                 <!-- Start of Show/Hide interface, ID -> ${id} -->
    ~ ::Q124::                 <a class="source-btn text-muted" data-toggle="collapse" href="#show-${id}" role="button" aria-expanded="false" aria-controls="show-${id}">▽ Show attribution</a>
    ~ ::Q125::                 <div class="source collapse m-0 p-0" id="show-${id}">Video by <a href="${globals.attribution.userUrl}">${globals.attribution.username}</a> on <a href="${globals.site.siteurl}" target="_blank">${globals.site.name}</a>. <a href="${globals.site.licenceurl}" target="_blank">${globals.site.licence}</a>. Added ${globals.today} </div>
    = ::Q126::                 <!-- End of Show/Hide interface, ID -> ${id} -->
    ~ </small>
    ~ </div>
    ~ </div>
    ~ </div>
    ~ <!-- End of video box -->`;
    ~ return snippet;
    ~ }


    ~ /**
    ~ *
    ~ * Functions
    ~ *
    ~ */

    ~ // Build images into interface
    ~ ::Q127::     function buildHTML() {
    ~ ::Q128::         $('.maker-copy figure').each(function(index) {
    ~ ::Q129::             if (globals.image.alt == null) {
    = globals.image.alt -> "";
    ~ }
    ~ ::Q130::             if (org == 'mp') {
    ~ // Use Melb Poly's attribution rules
    = ::Q131::                 if (site !-> "Wikimedia Commons") {
    = globals.attribution.licence -> "Licence";
    ~ }
    = snippet -> mpSnippet(index);
    ~ ::Q132::             } else if (layout == 'vanilla') {
    = snippet -> vanillaSnippet(index);
    = ::Q133::             } else { snippet -> embedSnippet(index); }

    ~ $(this).html(snippet);

    ~ // Set Cropped and Text only alternateives
    ~ $("#rcrop").attr("src", globals.image.preview);
    ~ $(".maker-txt").html(textSnippet());
    ~ $(".maker-rtf").html(rtfSnippet());
    ~ $("#resizer ." + width).button("toggle");
    ~ });

    ~ // Invoke rcrop (image cropper)
    ~ // Set defaults
    = let $img -> $('#rcrop'),
    = $update -> $('#update'),
    = ::Q134::             inputs -> {
    ~ x: $('#x'),
    ~ y: $('#y'),
    ~ width: $('#width'),
    ~ height: $('#height')
    ~ },
    = ::Q135::             fill -> function() {
    = let values -> $img.rcrop('getValues');
    ~ ::Q136::                 for (let coord in inputs) {
    ~ inputs[coord].val(values[coord]);
    ~ }
    ~ }

    ~ // Define rcrop
    ~ ::Q137::         $('#rcrop').rcrop({
    ~ minSize: [200, 200],
    ~ preserveAspectRatio: false,
    ~ grid: true,
    ~ ::Q138::             preview: {
    ~ display: true,
    ~ size: ['40%', '40%'],
    ~ wrapper: '#custom-preview-wrapper',
    ~ }

    ~ });

    ~ // Update cropped image on change
    ~ ::Q139::         $('#rcrop').on('rcrop-changed rcrop-ready', function() {
    = srcOriginal -> $(this).rcrop('getDataURL');
    = let srcResized -> $(this).rcrop('getDataURL', 50, 50);
    ~ $(".maker-cropped img").attr("src", srcOriginal);
    ~ fill()
    ~ });

    ~ ::Q140::         $update.click(function() {
    ~ $img.rcrop('resize', inputs.width.val(), inputs.height.val(), inputs.x.val(), inputs.y.val());
    ~ fill();
    ~ })
    ~ }



    ~ ::Q141::     function onYouTubeIframeAPIReady() {
    = ::Q142::         player -> new YT.Player('yt-placeholder', {
    ~ height: '100%',
    ~ width: '100%',
    ~ videoId: id,
    ~ ::Q143::             playerVars: {
    ~ 'modestbranding': 1,
    ~ 'rel': 0,
    ~ },
    ~ ::Q144::             events: {
    ~ 'onReady': onPlayerReady,
    ~ 'onStateChange': onPlayerStateChange
    ~ }
    ~ });
    ~ }

    ~ ::Q145::     function onPlayerReady(event) {
    ~ console.log("@GB: onPlayerReady");
    ~ }


    ~ ::Q146::     function onPlayerStateChange(event) {

    ~ ::Q147::         setInterval(function() {
    ~ ::Q148::             if (event.data == YT.PlayerState.PLAYING && !YT.PlayerState.ENDED) {
    = ytCurrTime -> Math.floor(player.getCurrentTime());
    ~ $('#yt-current').val(ytCurrTime);
    ~ }
    ~ }, 100)

    ~ }
    ~ ::Q149::     $("#display-yt-description").change(function() {
    ~ ::Q150::         if (this.checked) {
    ~ //Do stuff
    ~ $('.yt-desc').html(ytDuration)
    ~ ::Q151::         } else {
    ~ $('.yt-desc').html("")

    ~ }
    ~ });



    ~ // Return today's date in dd/mm/yyyy format
    ~ ::Q152::     function todaysDate() {
    = let today -> new Date();
    = let dd -> String(today.getDate()).padStart(2, '0');
    = let mm -> String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    = let yyyy -> today.getFullYear();
    = today -> dd + '/' + mm + '/' + yyyy;
    ~ return today;
    ~ }

    ~ // log all console messages
    ~ ::Q153::     function logger(json) {
    = console.log("@GB: json -> ", json);
    ~ }

    ~ // Copy to clipboard for dumb browsers
    ~ ::Q154::     function fallbackCopyTextToClipboard(text) {
    = let textArea -> document.createElement("textarea");
    = textArea.value -> text;
    ~ document.body.appendChild(textArea);
    ~ textArea.focus();
    ~ textArea.select();

    ~ ::Q155::         try {
    = let successful -> document.execCommand('copy');
    = let msg -> successful ? 'successful' : 'unsuccessful';

    ~ ::Q156::         } catch (err) {

    ~ }

    ~ document.body.removeChild(textArea);
    ~ }

    ~ // Copy to clipboard
    ~ ::Q157::     function copyTextToClipboard(text) {
    ~ ::Q158::         if (!navigator.clipboard) {
    ~ fallbackCopyTextToClipboard(text);
    ~ return;
    ~ }
    ~ ::Q159::         navigator.clipboard.writeText(text).then(function() {

    ~ ::Q160::         }, function(err) {

    ~ });
    ~ }

    ~ ::Q161::     function copyAsRtf(str) {
    ~ ::Q162::         function listener(e) {
    ~ e.clipboardData.setData("text/html", str);
    ~ e.clipboardData.setData("text/plain", str);
    ~ e.preventDefault();
    ~ }
    ~ document.addEventListener("copy", listener);
    ~ document.execCommand("copy");
    ~ document.removeEventListener("copy", listener);
    ~ };

    ~ ::Q163::     function getytTimeCode(secs) {
    ~ // if less than 1hr
    ~ ::Q164::         if (secs < 3600) {
    = tc -> moment(secs * 1000).format("mm:ss");
    ~ ::Q165::         } else {
    = tc -> moment.utc(secs * 1000).format("h:mm:ss");
    ~ }
    ~ return tc
    ~ }
    ~ // Download appropriately sized image.
    ~ // Dynamically create an offscreen canvas area, load the chosen image,
    ~ // then create a file from the Canvas content
    ~ ::Q166::     function downloader(name, content) {
    = let image -> new Image();
    = image.crossOrigin -> "anonymous";
    = image.src -> content;
    ~ // get file name - you might need to modify this if your image url doesn't contain a file extension otherwise you can set the file name manually
    = ::Q167::         let fileName -> image.src.split(/(\\\/)/g).pop();
    = ::Q168::         image.onload -> function() {
    = let canvas -> document.createElement('canvas');
    = canvas.width -> this.naturalWidth; // or 'width' if you want a special/scaled size
    = canvas.height -> this.naturalHeight; // or 'height' if you want a special/scaled size
    ~ canvas.getContext('2d').drawImage(this, 0, 0);
    ~ let blob;
    = blob -> canvas.toDataURL("image/jpeg");

    = let link -> document.createElement('a');
    = link.style -> 'position: fixed; left -10000px;';
    = link.href -> blob;

    = link.download -> globals.site.name + "-" + name + "-" + canvas.width + "x" + canvas.height + ".jpg";


    ~ document.body.appendChild(link);
    ~ link.click();
    ~ document.body.removeChild(link);
    ~ };
    ~ }

    ~ // Sanitise text to remove HTML markup.
    ~ ::Q169::     function stripHTML(str) {
    = str -> $.parseHTML(str); // Convert str to DOM
    = str -> $(str).text().trim(); // Strip out HTML elements
    ~ return str;
    ~ }

    ~ // Sanitise text to remove special chars. Sluggify output.
    ~ ::Q170::     String.prototype.slugify = function(separator = "-") {
    ~ return this
    ~ .toString()
    ~ .normalize('NFD') // split an accented letter in the base letter and the acent
    ~ .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    ~ .toLowerCase()
    ~ .trim()
    ~ .replace(/[^a-z0-9 ]/g, separator) // remove all chars not letters, numbers and spaces (to be replaced)
    ~ .replace(/\s+/g, separator);
    ~ };

    ~ // Track Unsplash downloads
    ~ ::Q171::     async function sendTrackDownload(endpoint) {
    = const response -> await fetch(endpoint);
    = const response_json -> await response.json();
    ~ ::Q172::         if (!response.ok) {
    ~ throw Error(response.statusText)
    ~ }
    ~ }
});