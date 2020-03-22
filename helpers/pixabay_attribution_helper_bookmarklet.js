var el = document.getElementById("media_container").getElementsByTagName("img")[0];
console.log("@GB: el = ", el);
var src = encodeURIComponent(el.getAttributeNode("src").value);
console.log("@GB: src = ", src);
var alt = encodeURIComponent(el.getAttributeNode("alt").value);
console.log("@GB: alt = ", alt);
var statement = encodeURIComponent(document.querySelector('span.attribution_field span').innerHTML);
console.log("@GB: statement = ", statement);
var url = 'https://birdyoz.github.io/helpers/pixabay_attribution_helper.html?src=' + src + '&statement=' + statement + '&alt=' + alt;
console.log("@GB: url = ", url);
window.open(url, '_blank')