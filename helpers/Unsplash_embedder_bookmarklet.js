/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-06-20 09:32:12
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-06-20 18:38:40
*/
var title = document.title;
console.log("@GB: title = ", title);
var img  = encodeURIComponent(document.querySelectorAll('[property="og:image"]')[0].getAttribute("content"));
console.log("@GB: img = ", img);
var url = 'https://birdyoz.github.io/helpers/unsplash_embed_new.html?addr='+encodeURIComponent(document.location.href)+'&title='+encodeURIComponent(document.title)+'&img='+img;
console.log("@GB: url = ", url);
window.open(url,'_blank')



javascript:(function()%7Bvar title %3D document.title%3Bconsole.log("%40GB%3A title %3D "%2C title)%3Bvar img  %3D encodeURIComponent(document.querySelectorAll('%5Bproperty%3D"og%3Aimage"%5D')%5B0%5D.getAttribute("content"))%3Bconsole.log("%40GB%3A img %3D "%2C img)%3Bvar url %3D 'https%3A%2F%2Fbirdyoz.github.io%2Fhelpers%2Funsplash_embed_new.html%3Faddr%3D'%2BencodeURIComponent(document.location.href)%2B'%26title%3D'%2BencodeURIComponent(document.title)%2B'%26img%3D'%2Bimg%3Bconsole.log("%40GB%3A url %3D "%2C url)%3Bwindow.open(url%2C'_blank')%7D)()