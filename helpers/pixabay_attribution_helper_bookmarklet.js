var addr = document.location.href.split("?")[0];
console.log("@GB: addr = ", addr);
if (document.getElementsByClassName("product-contrib").length === 0) {
    el = document.querySelectorAll('[data-track-label="contributorLink"]')[0].parentNode;
} else {
    el = document.getElementsByClassName("product-contrib")[0].getElementsByTagName("h3")[0];
}
console.log("@GB: el = ", el);
var user = encodeURIComponent(el.innerHTML);
console.log("@GB: user = ", user);
var url = 'https://birdyoz.github.io/helpers/shutterstock_attribution_helper.html?addr=' + addr + '&user=' + user;
console.log("@GB: url = ", url);
window.open(url, '_blank')