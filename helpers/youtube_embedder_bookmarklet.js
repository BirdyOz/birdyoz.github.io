var url_string = window.location.href;
if (url_string.indexOf("?") > 0) {
    var url = new URL(url_string);
    var ytv = url.searchParams.get("v");
    var url = 'https://birdyoz.github.io/helpers/youtube_embedder.html?yt_video_id=' + ytv;
    window.open(url, '_blank');
}

javascript:(function()%7Bvar url_string %3D window.location.href%3Bif (url_string.indexOf("%3F") > 0) %7Bvar url %3D new URL(url_string)%3Bvar ytv %3D url.searchParams.get("v")%3Bvar url %3D 'https%3A%2F%2Fbirdyoz.github.io%2Fhelpers%2Fyoutube_embedder.html%3Fyt_video_id%3D' %2B ytv%3Bwindow.open(url%2C '_blank')%3B%7D%7D)()
