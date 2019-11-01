/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2019-06-20 09:32:12
 * @Last Modified by:   birdyoz
 * @Last Modified time: 2019-10-22 13:28:49
 */
var title = document.title;
var img = encodeURIComponent(document.querySelectorAll('[property="og:image"]')[0].getAttribute("content"));
var user = document.querySelectorAll('[name="twitter:creator"]')[0].getAttribute("content");
var url = 'https://birdyoz.github.io/helpers/unsplash_embed.html?addr=' + encodeURIComponent(document.location.href) + '&title=' + encodeURIComponent(document.title) + '&img=' + img + '&user=' + user;
console.log("@GB: url = ", url);
window.open(url, '_blank')


var title = document.title;
console.log("@GB: title = ", title);
var img = encodeURIComponent(document.querySelectorAll('[property="twitter:creator"]')[0].getAttribute("content"));
console.log("@GB: img = ", img);
var url = 'https://birdyoz.github.io/helpers/unsplash_embed.html?addr=' + encodeURIComponent(document.location.href) + '&title=' + encodeURIComponent(document.title) + '&img=' + img;
console.log("@GB: url = ", url);
window.open(url, '_blank')


javascript: (function() % 7 Bvar title % 3 D document.title % 3 Bconsole.log("%40GB%3A title %3D " % 2 C title) % 3 Bvar img % 3 D encodeURIComponent(document.querySelectorAll('%5Bproperty%3D"og%3Aimage"%5D') % 5 B0 % 5 D.getAttribute("content")) % 3 Bconsole.log("%40GB%3A img %3D " % 2 C img) % 3 Bvar url % 3 D 'https%3A%2F%2Fbirdyoz.github.io%2Fhelpers%2Funsplash_embed_new.html%3Faddr%3D' % 2 BencodeURIComponent(document.location.href) % 2 B '%26title%3D' % 2 BencodeURIComponent(document.title) % 2 B '%26img%3D' % 2 Bimg % 3 Bconsole.log("%40GB%3A url %3D " % 2 C url) % 3 Bwindow.open(url % 2 C '_blank') % 7 D)()