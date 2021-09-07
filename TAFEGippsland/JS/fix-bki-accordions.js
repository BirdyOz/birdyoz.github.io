/*
 * @Author: Sean Norrey (snorrey@kangan.edu.au)
 * @First Created:   2021-03-09 17:37:03
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2021-03-09 17:47:43
 */


function fixAccordion() {
    var accid = makeid(7)

    $("div[id*='editable'] .exatto-acc-card").eq(0).parent().attr("id", `accordion-${accid}`).attr("class", "accordion")
    //$(`#accordion-${accid} .exatto-acc-card`).attr("data-parent","#accordion-"+accid)
    $(`#accordion-${accid} .exatto-acc-card`).addClass("card").removeClass("exatto-acc-card")
    $(`#accordion-${accid} .exatto-acc-header`).addClass("card-header").removeClass("exatto-acc-header").removeClass("collapsed")
    $(`#accordion-${accid} .exatto-acc-content`).addClass("card-body").removeClass("exatto-acc-content")
    $(`#accordion-${accid} .card-body`).parent().attr("data-parent", `#accordion-${accid}`)

    $(`#accordion-${accid}`).find(".card-header").each(function() {
        var headID = $(this).attr("id")
        $(this).find(":header").wrapInner("<button class='btn btn-link'>")

        $(this).find("button").attr("data-toggle", $(this).attr("data-toggle"));

        $(this).find("button").attr("data-target", $(this).attr("data-target"));

        $(this).find("button").attr("aria-expanded", $(this).attr("aria-expanded"));

        var ts = $(this).attr("data-target")
        ts = ts.substring(1, ts.length)
        $(this).find("button").attr("aria-controls", ts);

        $(this).find("button").attr("value", $(this).attr("value"));


        $(this).parent().find("div[aria-labelledby]").attr("aria-labelledby", headID)

        $(this).removeAttr("data-toggle")
        $(this).removeAttr("data-target")
        $(this).removeAttr("aria-expanded")
        $(this).removeAttr("aria-controls")
        $(this).removeAttr("value")

    })
    $("div[id*='editable']").focus()
    console.log('')
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

fixAccordion()