var url_string = window.location.href;

var el = document.getElementsByTagName("video")[0];
var width = el.offsetWidth;
var height = el.offsetHeight;

if (url_string.indexOf("?") > 0) {
    var url = new URL(url_string);
    var ytv = url.searchParams.get("v");
    var url = 'https://birdyoz.github.io/helpers/youtube_embedder.html?yt_video_id=' + ytv + '&width=' + width + '&height=' + height;
    window.open(url, '_blank');
}