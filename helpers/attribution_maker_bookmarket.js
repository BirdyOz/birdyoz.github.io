// javascript:/%2A%2A%20%40Author%3A%20Greg%20Bird%20(%40BirdyOz%2C%20greg.bird.oz%40gmail.com)%2A%20%40First%20Created%3A%202022-01-20%2009%3A56%3A47%2A%20%40Last%20Modified%20by%3A%20BirdyOz%2A%20%40Last%20Modified%20time%3A%202026-04-14%2015%3A33%3A26%2A/let%20url%20=%20%27https%3A//birdyoz.github.io/helpers/attribution_maker?org=us%26addr=%27%20%2B%20encodeURIComponent(document.location.href);if%20(document.location.href.includes(%27shutterstock.com%27))%20{const%20json%20=%20document.querySelector(%27script[type=%22application/json%22]%27).innerHTML;const%20obj%20=%20JSON.parse(json);const%20asset%20=%20obj.props.pageProps.asset;const%20id%20=%20asset.id;const%20img_orig%20=%20asset.link;const%20alt%20=%20asset.alt;const%20title%20=%20asset.title;const%20img_src%20=%20asset.displays[%221500W%22].src;const%20user%20=%20asset.contributor.publicInformation.displayName;const%20user_url%20=%20asset.contributor.publicInformation.portfolioUrl;let%20url_suffix%20=%20%22%26id=%22%20%2B%20encodeURIComponent(id)%20%2B%20%22%26img_orig=%22%20%2B%20encodeURIComponent(img_orig)%20%2B%20%22%26alt=%22%20%2B%20encodeURIComponent(alt)%20%2B%20%22%26title=%22%20%2B%20encodeURIComponent(title)%20%2B%20%22%26img_src=%22%20%2B%20encodeURIComponent(img_src)%20%2B%20%22%26user=%22%20%2B%20encodeURIComponent(user)%20%2B%20%22%26user_url=%22%20%2B%20encodeURIComponent(user_url);url%20=%20url%20%2B%20url_suffix;}if%20(document.location.href.includes(%27openverse.org%27))%20{const%20pickMeta%20=%20(name%2C%20attr%20=%20%22property%22)%20=%3Edocument.querySelector(%60meta[%24{attr}=%22%24{name}%22]%60)?.content%20%7C%7C%20%22%22;const%20externalLinks%20=%20[...document.querySelectorAll(%27a[href%5E=%22http%22]%27)];const%20imageLink%20=%20externalLinks.find((a)%20=%3E%20a.textContent.trim()%20===%20%27Get%20this%20image%27);const%20licenceLink%20=%20externalLinks.find((a)%20=%3Ea.href.includes(%27creativecommons.org/licenses/%27)%20%26%26a.textContent.trim().startsWith(%27CC%20%27));const%20sourceLink%20=%20externalLinks.find((a)%20=%3E[%27Flickr%27%2C%20%27Wikimedia%27%2C%20%27Wikimedia%20Commons%27].includes(a.textContent.trim())%20%26%26!a.href.includes(%27openverse.org%27)%20%26%26!a.href.includes(%27/photos/%27));const%20creatorLink%20=%20externalLinks.find((a)%20=%3E%20{const%20text%20=%20a.textContent.trim();return%20(text.length%20%3E%200%20%26%26text%20!==%20%27Get%20this%20image%27%20%26%26text%20!==%20(sourceLink?.textContent.trim()%20%7C%7C%20%27%27)%20%26%26text%20!==%20(licenceLink?.textContent.trim()%20%7C%7C%20%27%27)%20%26%26!a.href.includes(%27openverse.org%27)%20%26%26!a.href.includes(%27creativecommons.org%27)%20%26%26a.href%20!==%20imageLink?.href);});const%20id%20=%20(document.location.pathname.match(/[0-9a-fA-F-]{36}/)%20%7C%7C%20[%27%27])[0];const%20img_orig%20=%20imageLink?.href%20%7C%7C%20document.location.href;const%20alt%20=%20pickMeta(%27og%3Atitle%27);const%20title%20=%20pickMeta(%27og%3Atitle%27);const%20img_src%20=%20pickMeta(%27og%3Aimage%27);const%20user%20=%20creatorLink?.textContent.trim()%20%7C%7C%20%22%22;const%20user_url%20=%20creatorLink?.href%20%7C%7C%20%22%22;const%20licence%20=%20licenceLink?.textContent.trim()%20%7C%7C%20%22%22;const%20licence_url%20=%20licenceLink?.href%20%7C%7C%20%22%22;const%20source%20=%20sourceLink?.textContent.trim()%20%7C%7C%20%22%22;const%20source_url%20=%20sourceLink?.href%20%7C%7C%20%22%22;let%20url_suffix%20=%22%26id=%22%20%2B%20encodeURIComponent(id)%20%2B%22%26img_orig=%22%20%2B%20encodeURIComponent(img_orig)%20%2B%22%26alt=%22%20%2B%20encodeURIComponent(alt)%20%2B%22%26title=%22%20%2B%20encodeURIComponent(title)%20%2B%22%26img_src=%22%20%2B%20encodeURIComponent(img_src)%20%2B%22%26user=%22%20%2B%20encodeURIComponent(user)%20%2B%22%26user_url=%22%20%2B%20encodeURIComponent(user_url)%20%2B%22%26licence=%22%20%2B%20encodeURIComponent(licence)%20%2B%22%26licence_url=%22%20%2B%20encodeURIComponent(licence_url)%20%2B%22%26source=%22%20%2B%20encodeURIComponent(source)%20%2B%22%26source_url=%22%20%2B%20encodeURIComponent(source_url);url%20=%20url%20%2B%20url_suffix;}window.open(url%2C%20%27_blank%27)
/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2022-01-20 09:56:47
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2026-04-14 15:36:34
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

// Openverse ONLY.
// Openverse helper runs on GitHub Pages and cannot call the API directly due to CORS,
// so gather the attribution metadata from the current Openverse page instead.

if (document.location.href.includes('openverse.org')) {
    const main = document.querySelector('main') || document;
    const pickMeta = (name, attr = "property") =>
        document.querySelector(`meta[${attr}="${name}"]`)?.content || "";
    const prettifyHost = (href) => {
        try {
            const hostname = new URL(href).hostname.replace(/^www\./, '').split('.')[0] || '';
            return hostname.charAt(0).toUpperCase() + hostname.slice(1);
        } catch (e) {
            return "";
        }
    };
    const ignoredLinkText = [
        'Skip to content',
        'About',
        'Licenses',
        'Sources',
        'Search help',
        'Get involved',
        'API',
        'Terms',
        'Privacy',
        'Feedback',
        'Back to results',
        'Open form',
        'DMCA form',
    ];
    const externalLinks = [...main.querySelectorAll('a[href^="http"]')];
    const imageLink = externalLinks.find((a) => a.textContent.trim() === 'Get this image');
    const licenceLink = externalLinks.find((a) =>
        (
            a.href.includes('creativecommons.org/licenses/') ||
            a.href.includes('creativecommons.org/publicdomain/')
        ) &&
        (
            a.textContent.trim().startsWith('CC ') ||
            a.textContent.trim().toLowerCase().includes('public domain')
        )
    );
    const imageOrigin = imageLink ? new URL(imageLink.href).origin : '';
    const explicitSourceLink = externalLinks.find((a) =>
        !a.href.includes('openverse.org') &&
        !a.href.includes('creativecommons.org') &&
        a.href.replace(/\/$/, '') === imageOrigin.replace(/\/$/, '')
    );
    const sourceLink = explicitSourceLink || (imageOrigin ? { href: imageOrigin, textContent: prettifyHost(imageOrigin) } : null);
    const sourceHost = sourceLink ? new URL(sourceLink.href).hostname.replace(/^www\./, '') : '';
    const creatorLink = externalLinks.find((a) => {
        const text = a.textContent.trim();
        let linkHost = '';
        try {
            linkHost = new URL(a.href).hostname.replace(/^www\./, '');
        } catch (e) {}
        return (
            text.length > 0 &&
            !ignoredLinkText.includes(text) &&
            text !== 'Get this image' &&
            text !== (sourceLink?.textContent.trim() || '') &&
            text !== (licenceLink?.textContent.trim() || '') &&
            !a.href.includes('openverse.org') &&
            !a.href.includes('creativecommons.org') &&
            a.href !== imageLink?.href &&
            (!sourceHost || linkHost === sourceHost)
        );
    });

    const id = (document.location.pathname.match(/[0-9a-fA-F-]{36}/) || [''])[0];
    const img_orig = imageLink?.href || document.location.href;
    const title = main.querySelector('h1')?.textContent.trim() || pickMeta('og:title').replace(/\s*\|\s*Openverse$/, '');
    const alt = title;
    const pageImages = [...main.querySelectorAll('img[src]')]
        .map((img) => ({
            src: img.currentSrc || img.src,
            score: (img.naturalWidth || 0) * (img.naturalHeight || 0),
        }))
        .filter((img) =>
            img.src.startsWith('http') &&
            !img.src.includes('openverse-default.jpg') &&
            !img.src.includes('/logo') &&
            !img.src.includes('/icon')
        )
        .sort((a, b) => b.score - a.score);
    const img_src = pageImages[0]?.src || pickMeta('og:image');
    const user = creatorLink?.textContent.trim() || "Unknown creator";
    const user_url = creatorLink?.href || "";
    const licence = licenceLink?.textContent.trim() || "";
    const licence_url = licenceLink?.href || "";
    const source = sourceLink?.textContent.trim() || prettifyHost(img_orig);
    const source_url = sourceLink?.href || "";

    let url_suffix =
        "&id=" + encodeURIComponent(id) +
        "&img_orig=" + encodeURIComponent(img_orig) +
        "&alt=" + encodeURIComponent(alt) +
        "&title=" + encodeURIComponent(title) +
        "&img_src=" + encodeURIComponent(img_src) +
        "&user=" + encodeURIComponent(user) +
        "&user_url=" + encodeURIComponent(user_url) +
        "&licence=" + encodeURIComponent(licence) +
        "&licence_url=" + encodeURIComponent(licence_url) +
        "&source=" + encodeURIComponent(source) +
        "&source_url=" + encodeURIComponent(source_url);
    url = url + url_suffix;
}

// Open selected image in a new tab
window.open(url, '_blank')
