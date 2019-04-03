var el = document.querySelectorAll('[itemprop="contentURL"]')[0];
var src = encodeURIComponent(el.getAttributeNode("src").value);
var alt = encodeURIComponent(el.getAttributeNode("alt").value);
var statement = encodeURIComponent(document.querySelector('span.attribution_field span').innerHTML);
var url = 'https://birdyoz.github.io/helpers/pixabay_attribution_helper.html?src='+src+'&statement='+statement+'&alt='+alt;
window.open(url,'_blank');
