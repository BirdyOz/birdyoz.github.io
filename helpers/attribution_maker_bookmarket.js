/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2022-01-20 09:56:47
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2024-02-26 14:40:07
 */


//Send selected image URL to Attribution Maker
let url = 'https://birdyoz.github.io/helpers/attribution_maker?org=us&addr=' + encodeURIComponent(document.location.href);

// Shutterstock ONLY.
// Shutterstock does not have a public API, and so image details need to be gathered from the website

if (document.location.href.includes('shutterstock.com')) {
    const json = document.querySelector('script[type="application/json"]').innerHTML;
    const obj = JSON.parse(json);
    const asset = obj.props.pageProps.asset;
    const id = asset.id;
    const img_orig = asset.link;
    const alt = asset.alt;
    const title = asset.title;
    const img_src = asset.displays["1500W"].src;
    const user = asset.contributor.publicInformation.displayName;
    const user_url = asset.contributor.publicInformation.portfolioUrl;
    let url_suffix = "&id=" + encodeURIComponent(id) + "&img_orig=" + encodeURIComponent(img_orig) + "&alt=" + encodeURIComponent(alt) + "&title=" + encodeURIComponent(title) + "&img_src=" + encodeURIComponent(img_src) + "&user=" + encodeURIComponent(user) + "&user_url=" + encodeURIComponent(user_url);
    url = url + url_suffix;
}

// Open selected image in a new tab
window.open(url, '_blank')