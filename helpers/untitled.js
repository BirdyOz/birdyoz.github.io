let uri = 'https://birdyoz.github.io/helpers/attribution_maker?addr=' + encodeURIComponent(document.location.href);
if (document.location.href.includes('shutterstock.com')) {
    const json = document.querySelector('script[type="application/ld+json"]').innerHTML;
    console.log("@GB: json = ", json);
    const obj = JSON.parse(json);
    console.log("@GB: obj = ", obj);
    // const id = asset.id;
    // console.log("@GB: id = ", id);
    // const img_orig = asset.link;
    // console.log("@GB: img_orig = ", img_orig);
    // const alt = asset.alt;
    // console.log("@GB: alt = ", alt);
    // const title = asset.title;
    // console.log("@GB: title = ", title);
    // const img_src = asset.displays["1500W"].src;
    // console.log("@GB: img_src = ", img_src);
    // const user = asset.contributor.publicInformation.displayName;
    // console.log("@GB: user = ", user);
    // const user_url = asset.contributor.publicInformation.portfolioUrl;
    // console.log("@GB: user_url = ", user_url);
    // let url_suffix = "&id="+encodeURIComponent(id)+"&img_orig="+encodeURIComponent(img_orig)+"&alt="+encodeURIComponent(alt)+"&title="+encodeURIComponent(title)+"&img_src="+encodeURIComponent(img_src)+"&user="+encodeURIComponent(user)+"&user_url="+encodeURIComponent(user_url);
    // console.log("@GB: url_suffix = ", url_suffix);
    // uri = uri + url_suffix;
    // console.log("@GB: url = ", uri);
}
// window.open(uri, '_blank')

 [{"@context":"https://schema.org","@type":"ImageObject","author":{"@type":"Person","name":"Liliya Kulianionak"},"acquireLicensePage":"https://www.shutterstock.com/image-photo/basset-hound-corgi-labrador-dog-pomeranian-190359581","contentUrl":"https://image.shutterstock.com/image-photo/basset-hound-corgi-labrador-dog-260nw-190359581.jpg","copyrightHolder":"Liliya Kulianionak / sstk","description":"Basset Hound and corgi, labrador, dog,  pomeranian puppies","fileFormat":"image/jpeg","keywords":null,"license":"https://www.shutterstock.com/license","name":"basset hound corgi labrador dog pomeranian Stock Photo (Edit Now) 190359581","sourceOrganization":"sstk","thumbnailUrl":"https://image.shutterstock.com/image-photo/basset-hound-corgi-labrador-dog-260nw-190359581.jpg","url":"https://image.shutterstock.com/image-photo/basset-hound-corgi-labrador-dog-260nw-190359581.jpg"}]