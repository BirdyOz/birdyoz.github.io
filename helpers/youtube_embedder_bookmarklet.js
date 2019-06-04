var url_string = window.location.href;
if (url_string.indexOf("?") > 0) {
    var url = new URL(url_string);
    var ytv = url.searchParams.get("v");
    var url = 'https://birdyoz.github.io/helpers/youtube_embedder.html?yt_video_id=' + ytv;
    window.open(url, '_blank');
}