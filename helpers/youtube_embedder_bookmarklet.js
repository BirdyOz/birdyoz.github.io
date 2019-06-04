var url_string = window.location.href;
    if (url_string.indexOf("?") > 0) {
        var url = new URL(url_string);
        var yt_video_id = url.searchParams.get("v");
        var url = 'https://birdyoz.github.io/helpers/pixabay_attribution_helper.html?src='+src+'&statement='+statement+'&alt='+alt;
window.open(url,'_blank');
    }


