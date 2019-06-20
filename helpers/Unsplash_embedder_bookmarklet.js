/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-06-20 09:32:12
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-06-20 15:57:26
*/
var title = document.title;
console.log("@GB: title = ", title);
var img  = encodeURIComponent(document.querySelectorAll('[property="og:image"]')[0].getAttribute("content"));
console.log("@GB: img = ", img);
var url = 'https://birdyoz.github.io/helpers/unsplash_embed2.html?addr='+encodeURIComponent(document.location.href)+'&title='+encodeURIComponent(document.title)+'&img='+img;
console.log("@GB: url = ", url);
window.open(url,'_blank')
