/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2022-01-20 09:56:47
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2022-01-20 11:30:15
 */


let url = 'https://birdyoz.github.io/helpers/attribution_maker?addr=' + encodeURIComponent(document.location.href);
if (document.location.href.includes('shutterstock.com')) {
    const json = document.querySelector('script[type="application/json"]').innerHTML;
    const obj = JSON.parse(json);
    const asset = obj.props.pageProps.asset;
    console.log("@GB: asset = ", asset);
    const id = asset.id;
    console.log("@GB: id = ", id);
    const img_orig = asset.link;
    console.log("@GB: img_orig = ", img_orig);
    const alt = asset.alt;
    console.log("@GB: alt = ", alt);
    const title = asset.title;
    console.log("@GB: title = ", title);
    const img_src = asset.displays["1500W"].src;
    console.log("@GB: img_src = ", img_src);
    const user = asset.contributor.publicInformation.displayName;
    console.log("@GB: user = ", user);
    const user_url = asset.contributor.publicInformation.portfolioUrl;
    console.log("@GB: user_url = ", user_url);
    let url_suffix = "&id="+encodeURIComponent(id)+"&img_orig="+encodeURIComponent(img_orig)+"&alt="+encodeURIComponent(alt)+"&title="+encodeURIComponent(title)+"&img_src="+encodeURIComponent(img_src)+"&user="+encodeURIComponent(user)+"&user_url="+encodeURIComponent(user_url);
    console.log("@GB: url_suffix = ", url_suffix);
    url = url + url_suffix;
    console.log("@GB: url = ", url);
}
// window.open(url, '_blank')