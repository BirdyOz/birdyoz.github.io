(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[73],{"6NVu":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("IxAH")
const i={true:true,false:false,null:null}
function o(e,t){if(!e||"boolean"===typeof e){const e=window.location.search
if(!e)return{}
return o(e,...arguments)}const n={}
e.replace(/\+/g," ").split("&").forEach(e=>{let[a,o]=e.split("=")
a=decodeURIComponent(a)
o=decodeURIComponent(o)
t&&(o=o&&!isNaN(o)?+o:"undefined"===o?void 0:void 0!==i[o]?i[o]:o)
n[a]=o})
return Object(a["a"])(n)}},"897F":function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var o=n("Y/W1")
var r=n.n(o)
var s=n("qqwe")
n("ESjL")
i.a.fn.fixDialogButtons=function(){return this.each((function(){const e=i()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=i.a.map(t.toArray(),t=>{const n=i()(t)
let a=n.attr("class")||""
const o=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(s["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(a+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:a,id:o}})
n=r.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},BrAc:function(e,t,n){"use strict"
var a=n("vDqi")
var i=n.n(a)
i.a.defaults.xsrfCookieName="_csrf_token"
i.a.defaults.xsrfHeaderName="X-CSRF-Token"
const o=i.a.defaults.headers.common.Accept
i.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+o
i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=i.a},Ce78J:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var o=n("Y/W1")
var r=n.n(o)
var s=n("JiFB")
var c=n("ik22")
function l(e,t,n){const a={...n}
e.forEach(e=>{const i=t[e]
const o=n[e]
Array.isArray(i)&&Array.isArray(o)&&(a[e]=[...new Set(i.concat(o))])})
return a}function d(e,t,n,a,i){const o=new s["a"](i,c["a"],e,t)
const r={...o.defaultConfig()}
return{...r,...l(n.optionsToMerge||[],r,n.tinyOptions)}}var u=d
var m=n("FNQM")
const h={call(e,...t){if("exists?"===e)return true
return this[e](...t)},focus(){if(void 0!==tinymce){const e=tinymce.get(this.getTextarea().id)
e&&e.focus(true)}}}
const g={show(){$("#editor_tabs").show()},hide(){$("#editor_tabs").hide()}}
const f={wrapEditor(e){const t={...h,...e}
return Object.assign(e,t)},wrapSidebar(e){const t={...g,...e}
return Object.assign(e,t)}}
var p=f
var _=n("eVns")
var b=n("stQK")
var v=n("TiZd")
const w={loadingPromise:null,preload(e){(window.requestIdleCallback||window.setTimeout)(()=>this.loadRCE(e))},loadOnTarget(e,t,n){const a=this.getTargetTextarea(e)
const i=this.getRenderingTarget(a,t.getRenderingTarget)
const o=this.createRCEProps(a,t)
this.loadRCE(e=>{e.renderIntoDiv(i,o,e=>{e.tinymceOn("init",()=>n(a,p.wrapEditor(e)))})})},loadingCallbacks:[],RCE:null,loadRCE(e=(()=>{})){return Promise.all([n.e(2),n.e(3),n.e(5),n.e(6),n.e(7),n.e(10),n.e(12),n.e(14),n.e(15),n.e(18),n.e(23),n.e(30),n.e(3750)]).then(n.bind(null,"j/Fk")).then(e=>{this.RCE=e
Object(m["a"])()
return e}).then(()=>{this.loadingCallbacks.forEach(e=>e(this.RCE))
this.loadingCallbacks=[]
e(this.RCE)})},getTargetTextarea:e=>"textarea"===i()(e).get(0).type?i()(e).get(0):i()(e).find("textarea").get(0),getRenderingTarget(e,t){let n
n="undefined"===typeof t?i()(e).parent().get(0):t(e)
i()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror(e){const t=["name"]
const n=r.a.reduce(e.attributes,(e,t)=>{e[t.name]=t.value
return e},{})
return r.a.pick(n,t)},createRCEProps(e,t){var n,a
const i=e.offsetWidth
const o=e.offsetHeight||400
o&&(t.tinyOptions={height:o,...t.tinyOptions||{}})
const r=ENV.LOCALE
const s=Object.keys(b["a"]).map(e=>({id:e,label:b["a"][e]})).sort((e,t)=>e.id===r?-1:t.id===r?1:e.label.localeCompare(t.label,r))
const c={enabled:true,maxAge:Number.isNaN(ENV.rce_auto_save_max_age_ms)?36e5:ENV.rce_auto_save_max_age_ms}
return{defaultContent:e.value||t.defaultContent,editorOptions:u.bind(null,i,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:Object(_["a"])(),languages:s,liveRegion:()=>document.getElementById("flash_screenreader_holder"),ltiTools:null===(n=window.INST)||void 0===n?void 0:n.editorButtons,autosave:t.autosave||c,instRecordDisabled:ENV.RICH_CONTENT_INST_RECORD_TAB_DISABLED,maxInitRenderedRCEs:t.maxInitRenderedRCEs,highContrastCSS:null===(a=window.ENV)||void 0===a?void 0:a.url_for_high_contrast_tinymce_editor_css,use_rce_buttons_and_icons:Object(v["b"])(v["a"].ButtonsAndIcons,window.ENV)}}}
var y=w
var k=n("eodz")
function x(e,t,n){e.css("display","none")
const a=t.onFocus
t.onFocus=(...e)=>{a instanceof Function&&a(...e)}
y.loadOnTarget(e,t,(t,a)=>{const o=I(e)
const r=O(i()(t))
r.data("remoteEditor",a)
o.trigger(k["a"],a)
n&&n(a)})}function R(e){const t=I(e)
const n=t.attr("id")
const a="tinymce-parent-of-"+n
if(t.parent().attr("id")!==a)return t.wrap(`<div id='${a}' style='visibility: hidden'></div>`)}function C(){i()(".mce-resizehandle").attr("aria-hidden",true)}let E=0
function T(){return"random_editor_id_"+E++}function B(e){const t=i()(e)
const n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",T())}function O(e){const t=I(e)
const n=t.attr("id")
if(!n||""==n)return t
const a=i()("#"+n)
if(a.length<=0)return t
return a}const S={preloadRemoteModule:(e=(()=>{}))=>y.preload(e),loadNewEditor(e,t={},n){let a=I(e)
if(a.length<=0)return
B(a)
t=i.a.extend({},t)
const o=e=>{t.focus&&this.activateRCE(a)
n&&n(e)}
a=this.freshNode(a)
if(t.manageParent){delete t.manageParent
R(a)}x(a,t,o)
C()},callOnRCE(e,t,...n){let a=I(e)
a=this.freshNode(a)
return Object(k["d"])(a,t,...n)},destroyRCE(e){let t=I(e)
t=this.freshNode(t)
Object(k["b"])(t)},closeRCE(e){this.callOnRCE(e,"RCEClosed")},activateRCE(e){let t=I(e)
t=this.freshNode(t)
Object(k["c"])(t)},freshNode:O,ensureID:B,node2jquery:I}
function I(e){return e&&e.length?e:i()(e)}t["a"]=S},CsJK:function(e,t,n){"use strict"
var a=n("ik22")
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
n("Y/W1")
var s=n("gI0r")
n("dhbk")
var c=n("M+ds")
n("8JEM")
n("lBOK")
var l=n("/oRJ")
const d=Object(i["useScope"])("jquery_doc_previews")
const u={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
r.a.isPreviewable=function(e,t){return u[e]&&(!t||!a["a"]["disable"+r.a.capitalize(t)+"Previews"]&&u[e][{scribd:0,google:1}[t]])}
r.a.fn.loadDocPreview=function(e){return this.each((function(){const t=r()(this),n=r.a.extend({width:"100%",height:"400px"},t.data(),e)
function i(e){if(n.attachment_view_inline_ping_url){r.a.ajaxJSON(n.attachment_view_inline_ping_url,"POST",{},()=>{},()=>{})
Object(c["a"])("Doc Previews",e,JSON.stringify(n,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(n.crocodoc_session_url){const e=Object(l["a"])(n.crocodoc_session_url)
var o=r()("<iframe/>",{src:e,width:n.width,height:n.height,allowfullscreen:"1",id:n.id})
o.appendTo(t)
o.load(()=>{i("crocodoc")
r.a.isFunction(n.ready)&&n.ready()})}else if(n.canvadoc_session_url){const e=r()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
e.appendTo(t)
const a=void 0!==n.iframe_min_height?n.iframe_min_height:"800px"
const s=Object(l["a"])(n.canvadoc_session_url)
o=r()("<iframe/>",{src:s,width:n.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":a},id:n.id})
o.appendTo(e)
o.load(()=>{i("canvadocs")
r.a.isFunction(n.ready)&&n.ready()})}else if(!a["a"].disableGooglePreviews&&(!n.mimetype||r.a.isPreviewable(n.mimetype,"google"))&&n.attachment_id||n.public_url){const e=function(){const e="//docs.google.com/viewer?"+r.a.param({embedded:true,url:n.public_url})
n.ajax_valid&&!n.ajax_valid()||r()('<iframe src="'+Object(s["a"])(e)+'" height="'+n.height+'" width="100%" />').appendTo(t).load(()=>{i("google")
r.a.isFunction(n.ready)&&n.ready()})}
if(n.public_url)e()
else if(n.attachment_id){let a=`/api/v1/files/${n.attachment_id}/public_url.json`
n.submission_id&&(a+="?"+r.a.param({submission_id:n.submission_id}))
if(n.verifier)a+=`${n.submission_id?"&":"?"}verifier=${n.verifier}`
else{const e=window.location.search.match(/verifier=([^&]+)(?:&|$)/)
const t=e&&e[1]
t&&(a+=`${n.submission_id?"&":"?"}verifier=${t}`)}t.loadingImage()
r.a.ajaxJSON(a,"GET",{},a=>{t.loadingImage("remove")
if(a&&a.public_url){r.a.extend(n,a)
e()}})}}else n.attachment_preview_processing?t.html("<p>"+Object(s["a"])(d.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(s["a"])(d.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>")}))}},ErZx:function(e,t,n){"use strict"
const a={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=a},FNQM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return R}))
var a=n("RtDj")
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
n("gI0r")
const s=Object(i["useScope"])("ExternalToolsPlugin")
const c=ENV.MAX_MRU_LTI_TOOLS||5
var l={buttonConfig(e,t){const n={title:e.name,classes:"widget btn instructure_external_tool_button"}
n.id=e.id
n.onAction=()=>{t.execCommand("instructureExternalButton"+e.id)
this.updateMRUList(e.id)
this.showHideButtons(t)}
n.description=e.description
n.favorite=e.favorite
n.image=e.icon_url
return n},showHideButtons(e){const t=s.t("Apps")
const n=e.$(e.editorContainer.querySelector(`.tox-tbtn--select[aria-label="${t}"]`))
const a=e.$(e.editorContainer.querySelector(`.tox-tbtn[aria-label="${t}"]`))
n.attr("aria-hidden","false")
a.attr("aria-hidden","true")},updateMRUList(e){let t
try{var n
t=JSON.parse((null===(n=window.localStorage)||void 0===n?void 0:n.getItem("ltimru"))||"[]")}catch(e){console.log("Found bad LTI MRU data",e.message)}finally{Array.isArray(t)||(t=[])}try{if(!t.includes(e)){var a
t.unshift(e)
t.splice(c,t.length)
null===(a=window.localStorage)||void 0===a||a.setItem("ltimru",JSON.stringify(t))}}catch(e){console.log("Cannot save LTI MRU list",e.message)}}}
var d=n("dDTa")
n("q1tI")
var u=n("i8i4")
var m=n.n(u)
const h=Object(i["useScope"])("ExternalToolsPlugin")
const g={init(e,t,i){if(!i||!i.editorButtons||!i.editorButtons.length)return
let o={open:(...e)=>setTimeout(()=>o.open(...e),50)}
Promise.all([n.e(2),n.e(3),n.e(6),n.e(13),n.e(19),n.e(4139)]).then(n.bind(null,"PrO8")).then(({default:t})=>{const n=document.createElement("div")
document.body.appendChild(n)
m.a.render(Object(a["a"])(t,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(d["a"])(),resourceSelectionUrl:r()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),n,(function(){o=this}))})
const s=[]
for(let t=0;i.editorButtons&&t<i.editorButtons.length;t++){const n=i.editorButtons[t]
const a=()=>o.open(n)
s.push(l.buttonConfig(n,e))
e.addCommand("instructureExternalButton"+n.id,a)}if(s.length){_(e,s)
b(e,s)
p(e,s)}}}
function f(e,t){if(!t.iconSVG&&t.image){const e=document.createElement("svg")
e.setAttribute("viewBox","0 0 16 16")
e.setAttribute("version","1.1")
e.setAttribute("xmlns","http://www.w3.org/2000/svg")
const n=document.createElement("image")
n.setAttribute("xlink:href",t.image)
n.style.width="100%"
n.style.height="100%"
e.appendChild(n)
t.iconSVG=e.outerHTML
t.icon="lti_tool_"+t.id}t.iconSVG&&e.ui.registry.addIcon(t.icon,t.iconSVG)}function p(e,t){t.length&&e.ui.registry.addNestedMenuItem("lti_tools_menuitem",{text:h.t("Apps"),icon:"lti",getSubmenuItems:()=>v(e,t)})}function _(e,t){t.forEach(t=>{if(!t.favorite)return
f(e,t)
e.ui.registry.addButton("instructure_external_button_"+t.id,{onAction:t.onAction,tooltip:t.title,icon:t.icon,title:t.title})})}function b(e,t){const n=h.t("Apps")
e.ui.registry.addMenuButton("lti_mru_button",{tooltip:n,icon:"lti",fetch(n){n(v(e,t))},onSetup(t){l.showHideButtons(e)}})}function v(e,t){const n=[]
try{const a=JSON.parse(window.localStorage.getItem("ltimru"))
if(a&&Array.isArray(a)&&a.length){const i=t.filter(e=>a.includes(e.id))
i.forEach(t=>{f(e,t)
t.menuItem||(t.menuItem={type:"menuitem",text:t.title,icon:t.icon,onAction:t.onAction})
n.push(t.menuItem)})
n.sort((e,t)=>e.text.localeCompare(t.text))}}catch(e){console.log("Failed building mru menu",e.message)}finally{n.push({type:"menuitem",text:h.t("View All"),onAction:()=>{const e=new CustomEvent("tinyRCE/onExternalTools",{detail:{ltiButtons:t}})
document.dispatchEvent(e)}})}return n}var w=g
var y=n("ik22")
var k=n("uloQ")
const x=Object(i["useScope"])("loadEventListeners")
function R(e={}){const t=["equationCB","equellaCB","externalToolCB"]
t.forEach(t=>{void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",({detail:t})=>{Promise.all([n.e(0),n.e(9),n.e(4166)]).then(n.bind(null,"dIBj")).then(({default:n})=>{const a=new n(t.ed)
e.equationCB(a)}).catch(Object(k["c"])(x.t("Something went wrong loading the equation editor")))})
document.addEventListener("tinyRCE/initEquella",t=>{Promise.all([n.e(0),n.e(4279)]).then(n.bind(null,"IOhY")).then(({default:n})=>{n(t.detail.ed)
e.equellaCB()}).catch(Object(k["c"])(x.t("Something went wrong loading Equella")))})
document.addEventListener("tinyRCE/initExternalTools",t=>{w.init(t.detail.ed,t.detail.url,y["a"])
e.externalToolCB()})}},Fxmq:function(e,t,n){"use strict"
var a=n("HGxv")
var i=n("mX+G")
var o=n("ouhR")
var r=n.n(o)
n("ESjL")
var s,c=function(e,t){for(var n in t)l.call(t,n)&&(e[n]=t[n])
function a(){this.constructor=e}a.prototype=t.prototype
e.prototype=new a
e.__super__=t.prototype
return e},l={}.hasOwnProperty
s=Object(a["useScope"])("KeyboardNavDialog")
t["a"]=function(e){c(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.el="#keyboard_navigation"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.bindOpenKeys
return this}
t.prototype.render=function(e){this.$el.html(e)
return this}
t.prototype.bindOpenKeys=function(){var e
e=null
return r()(document).keydown((t=this,function(n){var a
a=191===n.keyCode&&n.shiftKey
if(a&&!r()(n.target).is(":input")&&!ENV.disable_keyboard_shortcuts){n.preventDefault()
if(!t.$el.is(":visible")){e=document.activeElement
return t.$el.dialog({title:s.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",close:function(){r()("li",this).attr("tabindex","")
if(e)return r()(e).focus()}})}t.$el.dialog("close")
if(e)return r()(e).focus()}}))
var t}
return t}(i["View"])},IxAH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("Y/W1")
var i=n.n(a)
function o(e){return i()(e).reduce((e,t,n)=>{let a=n.split("][")
let o=a.length-1
if(/\[/.test(a[0])&&/\]$/.test(a[o])){a[o]=a[o].replace(/\]$/,"")
a=a.shift().split("[").concat(a)
o=a.length-1}else o=0
if(o){let i=0
let r=e
while(i<=o){n=""===a[i]?r.length:a[i]
r=r[n]=i<o?r[n]||(a[i+1]&&isNaN(a[i+1])?{}:[]):t
i++}}else i.a.isArray(e[n])?e[n].push(t):null!=e[n]?e[n]=[e[n],t]:e[n]=t
return e},Object.create(null))}},JiFB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var a=n("uYtQ")
var i=n("ErZx")
class o{constructor(e,t,n,a){this.baseURL=e.baseURL
this.extraButtons=t.editorButtons
this.instConfig=t
this.viewportWidth=n
this.idAttribute=a}defaultConfig(){var e
return{...i["a"],body_class:null!==(e=window.ENV.FEATURES)&&void 0!==e&&e.canvas_k6_theme||window.ENV.K5_SUBJECT_COURSE||window.ENV.K5_HOMEROOM_COURSE?"elementary-theme":"default-theme",selector:"#"+this.idAttribute,directionality:Object(a["b"])(),plugins:["instructure_equation"],content_css:window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css,style_formats:[{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}],init_instance_callback:e=>{$("#tinymce-parent-of-"+e.id).css("visibility","visible")},show_media_upload:!!INST.kalturaSettings&&!INST.kalturaSettings.hide_rte_button}}}},TiZd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
n.d(t,"b",(function(){return i}))
let a;(function(e){e[e["ButtonsAndIcons"]=0]="ButtonsAndIcons"})(a||(a={}))
function i(e,t){switch(e){case a.ButtonsAndIcons:return o(t)
default:return false}}function o(e){var t,n
return!!(e.RICH_CONTENT_CAN_UPLOAD_FILES&&e.RICH_CONTENT_CAN_EDIT_FILES&&null!==(t=window.ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.buttons_and_icons_root_account)}},TvTI:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
var o=n("gI0r")
n("8JEM")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(n,a)=>{t.attr(a)&&t.attr(a,t.attr(a).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let a=false
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const r=this.find("."+t)
var n=e.avoid||""
r.each((function(){const r=i()(this)
if(r.length>0&&0===r.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues)){r.html(i.a.raw(e.data[t].toString()))
if(r.hasClass("user_content")){a=true
r.removeClass("enhanced")
r.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==r[0].tagName.toUpperCase())r.val(e.data[t])
else try{const n=e.data[t].toString()
r.html(Object(o["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,a,o=i()(this)
for(const r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
const s=e.hrefValues[r]
if(t=o.attr("href")){const n=i.a.replaceTags(t,s,encodeURIComponent(e.data[s]))
const a=o.text()===o.html()?o.text():null
if(t!==n){o.attr("href",n)
a&&o.text(a)}}(n=o.attr("rel"))&&o.attr("rel",i.a.replaceTags(n,s,e.data[s]));(a=o.attr("name"))&&o.attr("name",i.a.replaceTags(a,s,e.data[s]))}}))
a&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const o=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=i.a.trim(o.text())
"&nbsp;"===o.html()&&(a="")
1===a.length&&160===a.charCodeAt(0)&&(a="")
n[e]=a})}if(e.dataValues)for(t in e.dataValues){var a=this.data(e.dataValues[t])
a&&(n[e.dataValues[t]]=a)}if(e.htmlValues)for(t in e.htmlValues){const o=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=null
a=o.hasClass("user_content")&&o.data("unenhanced_content_html")?o.data("unenhanced_content_html"):i.a.trim(o.html())
n[e.htmlValues[t]]=a}return n}
i.a.fn.getTemplateValue=function(e,t){const n=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return C}))
var a=n("rePB")
var i=n("1OyB")
var o=n("vuIU")
var r=n("Ji7U")
var s=n("LK+K")
var c=n("q1tI")
var l=n.n(c)
var d=n("17x9")
var u=n.n(d)
var m=n("TSYQ")
var h=n.n(m)
var g=n("J2CL")
var f=n("KgFQ")
var p=n("jtGx")
var _=n("nAyT")
var b=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,a=e.spacing
return Object(b["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(a.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var w,y,k,x
var R={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var C=(w=Object(g["j"])(v,R),w(y=(x=k=function(e){Object(r["a"])(n,e)
var t=Object(s["a"])(n)
function n(){Object(i["a"])(this,n)
return t.apply(this,arguments)}Object(o["a"])(n,[{key:"render",value:function(){var e
var t=this.props,i=t.wrap,o=t.weight,r=t.fontStyle,s=t.size,c=t.lineHeight,d=t.letterSpacing,u=t.transform,m=t.color,g=t.children
var _=Object(f["a"])(n,this.props)
return l.a.createElement(_,Object.assign({},Object(p["b"])(this.props),{className:h()((e={},Object(a["a"])(e,R.root,true),Object(a["a"])(e,R[s],s),Object(a["a"])(e,R["wrap-".concat(i)],i),Object(a["a"])(e,R["weight-".concat(o)],o),Object(a["a"])(e,R["style-".concat(r)],r),Object(a["a"])(e,R["transform-".concat(u)],u),Object(a["a"])(e,R["lineHeight-".concat(c)],c),Object(a["a"])(e,R["letterSpacing-".concat(d)],d),Object(a["a"])(e,R["color-".concat(m)],m),e)),ref:this.props.elementRef}),g)}}])
n.displayName="Text"
return n}(c["Component"]),k.propTypes={as:u.a.elementType,children:u.a.node,color:_["a"].deprecatePropValues(u.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:u.a.func,fontStyle:u.a.oneOf(["italic","normal"]),letterSpacing:u.a.oneOf(["normal","condensed","expanded"]),lineHeight:u.a.oneOf(["default","fit","condensed","double"]),size:u.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:u.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:u.a.oneOf(["normal","light","bold"]),wrap:u.a.oneOf(["normal","break-word"])},k.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},x))||y)},bbn0:function(e,t,n){"use strict"
var a=n("HGxv")
var i=n("Y/W1")
var o=n.n(i)
var r=n("gI0r")
var s=n("ouhR")
var c=n.n(s)
var l=n("6NVu")
const d=Object(a["useScope"])("mediaCommentThumbnail")
const u={normal:{width:140,height:100},small:{width:70,height:50}}
function m(e,t,n){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
let a,i
const o=c()(e)
try{const e=document.createElement("a")
e.href=o.attr("href")
i=e}catch(e){}if(i&&Object(l["a"])(i.search).no_preview)return
const s=u[t]||u.normal
const m=o.data("media_comment_id")||c.a.trim(o.find(".media_comment_id:first").text())||(a=o.attr("id"))&&a.match(/^media_comment_/)&&a.substring(14)||c.a.trim(o.parent().find(".media_comment_id:first").text())
const h=o.data("author")
const g=o.data("created_at")
let f
f=h&&g?d.t("Play media comment by %{name} from %{createdAt}.",{name:h,createdAt:g}):d.t("Play media comment.")
if(m){const e="https://"+INST.kalturaSettings.resource_domain
const a=`${e}/p/${INST.kalturaSettings.partner_id}/thumbnail/entry_id/${m}/width/${s.width}/height/${s.height}/bgcolor/000000/type/2/vid_sec/5`
const i=c()(`<span\n        style='background-image: url(${Object(r["a"])(a)});'\n        class='media_comment_thumbnail media_comment_thumbnail-${Object(r["a"])(t)}'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ${Object(r["a"])(f)}\n          </span>\n        </span>\n      </span>`)
const l=o.closest("p")
l.attr("title")||l.attr("title",Object(r["a"])(f))
let d=o
if(n){d=o.clone().empty().removeClass("instructure_file_link")
const e=o.parent(".instructure_file_link_holder")
e.length?d.appendTo(e):o.after(d)}else o.empty()
d.data("download",d.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(i).css({backgroundImage:"",padding:0})}}c.a.fn.mediaCommentThumbnail=function(e="normal",t){return this.each((function(){o.a.defer(m,this,e,t)}))}},cFkJ:function(e,t,n){"use strict"
n.d(t,"b",(function(){return x}))
n.d(t,"a",(function(){return R}))
var a=n("Fxmq")
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("Y/W1")
var c=n.n(s)
var l=n("3H9/")
var d=n("gI0r")
var u=n("qqwe")
var m=n("Ce78J")
n("ik22")
n("ESjL")
function h(e){e=(e||"").split(":")[0]
const t=e.split("."),n=t.length
return(n>1?[t[n-2],t[n-1]]:t).join("")}const g=h(window.location.hostname)
r.a.expr[":"].external=function(e){const t=r()(e).attr("href")
return!!(t&&t.length&&!t.match(/^(mailto\:|javascript\:)/)&&e.hostname&&h(e.hostname)!=g)}
window.equella={ready(e){r()(document).triggerHandler("equella_ready",e)},cancel(){r()(document).triggerHandler("equella_cancel")}}
r()(document).bind("equella_ready",(function(e,t){r()("#equella_dialog").triggerHandler("equella_ready",t)})).bind("equella_cancel",(function(){r()("#equella_dialog").dialog("close")}))
window.external_tool_dialog={ready(e){const t=jQuery.Event("selection")
t.contentItems=e
r()("#resource_selection_dialog:visible").triggerHandler(t)
r()("#homework_selection_dialog:visible").triggerHandler(t)},cancel(){r()("#external_tool_button_dialog").dialog("close")
r()("#resource_selection_dialog").dialog("close")
r()("#homework_selection_dialog:visible").dialog("close")}}
window.jsonFlickrApi=function(e){r()("#instructure_image_search").triggerHandler("search_results",e)}
n("oa+I")
n("dhbk")
n("CsJK")
var f=n("M+ds")
n("7AEQ")
n("Dhso")
n("8JEM")
n("aq8L")
n("qAtv")
n("lBOK")
n("r2Yr")
n("TvTI")
n("897F")
n("bbn0")
n("wX3B")
n("XKWA")
n("gNnW")
n("bgJ8")
n("UEsX")
r()("body").on("click","[data-track-category]",(function(){const{trackCategory:e,trackLabel:t,trackAction:n,trackValue:a}=r()(this).data()
Object(f["a"])(e,n,t,a)}))
const p=Object(i["useScope"])("instructure_js")
let _=0
function b(){return"preview_"+ ++_}function v(){const e=r()(this)
const t=e.attr("href")
const n=r.a.youTubeID(t||"")
if(n&&!e.hasClass("inline_disabled")){const a=r()(`\n      <a\n        href="${Object(d["a"])(t)}"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/${Object(d["a"])(n)}/2.jpg)"\n          alt="${Object(d["a"])(e.data("preview-alt")||"")}"\n        />\n      </a>\n    `)
a.click(Object(u["a"])((function(){const e=r()(`\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/${Object(d["a"])(n)}?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ${Object(d["a"])(p.t("links.minimize_youtube_video","Minimize Video"))}\n          </a>\n        </span>\n      `)
e.find(".hide_youtube_embed_link").click(Object(u["a"])(()=>{e.remove()
a.show()
Object(f["a"])("hide_embedded_content","hide_you_tube")}))
r()(this).after(e).hide()})))
Object(f["a"])("show_embedded_content","show_you_tube")
e.addClass("youtubed").after(a)}}Object(f["a"])("Route",window.location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/")
const w=".dialog, .draggable, .resizable, .sortable, .tabs"
function y(e){try{return new URL(e)}catch{}}function k(){if(ENV.SKIP_ENHANCING_USER_CONTENT)return
const e=r()("#content")
r()(".user_content:not(.enhanced):visible").addClass("unenhanced")
r()(".user_content.unenhanced:visible").each((function(){const t=r()(this)
t.find("img").each((n,a)=>{const i=()=>{const n=Math.min(e.width(),t.width(),r()(a).width()||a.naturalWidth)
n>0&&r()(a).css("maxWidth",Math.min(e.width(),t.width(),r()(a).width()||a.naturalWidth))}
"string"===typeof a.style.width&&a.style.width.endsWith("%")||a.classList.contains("equation_image")||(0===a.naturalWidth?a.addEventListener("load",i):i());/hidden=1$/.test(a.getAttribute("src"))&&a.setAttribute("alt",p.t("This image is currently unavailable"))})
t.data("unenhanced_content_html",t.html())})).find(".enhanceable_content").show().filter(w).ifExists(e=>{const t="Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: "+w+".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
console.error(t,e)}).end().filter(".dialog").each((function(){const e=r()(this)
e.hide()
e.closest(".user_content").find("a[href='#"+e.attr("id")+"']").click(t=>{t.preventDefault()
e.dialog()})})).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".tabs").each((function(){r()(this).tabs()})).end().end().find("a:not(.not_external, .external):external").each((function(){const e=Object(d["a"])(p.t("titles.external_link","Links to an external site."))
r()(this).not(":has(img)").addClass("external").html("<span>"+r()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="'+r.a.raw(e)+'"/>').append('<span class="screenreader-only">&nbsp;('+r.a.raw(e)+")</span>")})).end()
r()("a.instructure_file_link, a.instructure_scribd_file").each((function(){const e=r()(this)
const t=y(e[0].href)
if(!t)return
const n=t.pathname.match(/(?:\/(courses|groups|users)\/(\d+))?\/files\/(\d+)/)
if(!n)return
let a,i
if(r.a.trim(e.text())){const n=this.textContent
const o=r()("<span class='instructure_file_holder link_holder instructure_file_link_holder'/>")
const s=t.searchParams
s.delete("wrap")
s.append("download_frd","1")
const c=`${t.origin}${t.pathname.replace(/(?:\/(download|preview))?$/,"/download")}?${s}`
a=r()(`<a class="file_download_btn" role="button" download style="margin-inline-start: 5px; text-decoration: none;" href="${Object(d["a"])(c)}">\n            <img style="width:16px; height:16px" src="/images/svg-icons/svg_icon_download.svg" alt="" role="presentation"/>\n            <span class="screenreader-only">\n              ${Object(d["a"])(p.t("Download %{filename}",{filename:n}))}\n            </span>\n          </a>`)
e.hasClass("instructure_scribd_file")&&(e.hasClass("inline_disabled")?e.addClass("preview_in_overlay"):e.addClass("file_preview_link"))
e.removeClass("instructure_file_link")
e.removeClass("instructure_scribd_file").before(o).appendTo(o)
o.append(i)
o.append(a)}}))
r()(".instructure_file_link_holder").find("a.file_preview_link, a.scribd_file_preview_link").each((function(){const e=r()(this)
if(e.siblings(".preview_container").length)return
const t=b()
e.attr("aria-expanded","false")
e.attr("aria-controls",t)
const n=r()('<div role="region" class="preview_container" />').attr("id",t).css("display","none")
e.parent().append(n)
e.hasClass("auto_open")&&e.click()}))
r()(".user_content.unenhanced a,.user_content.unenhanced+div.answers a").find("img.media_comment_thumbnail").each((function(){r()(this).closest("a").addClass("instructure_inline_media_comment")})).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",true).end().not(".youtubed").each(v)
r()(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced")
setTimeout(()=>{r()(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)
document.querySelectorAll('.user_content iframe[sandbox="allow-scripts allow-forms allow-same-origin"]').forEach(e=>{e.removeAttribute("sandbox")
const t=e.src
e.src=t})}function x(e){const t=r.a.fudgeDateForProfileTimezone(e)
return t.toString("MMM d, yyyy h:mmtt")}function R(e){"string"===typeof e&&(e=Date.parse(e))
const t=new Date-e
if(t<864e5){if(t<36e5){if(t<6e4)return p.t("#time.less_than_a_minute_ago","less than a minute ago")
{const e=parseInt(t/6e4,10)
return p.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:e})}}{const e=parseInt(t/36e5,10)
return p.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:e})}}return x(e)}r()((function(){if(window._earlyClick){document.removeEventListener("click",window._earlyClick)
window._earlyClick.clicks&&setTimeout((function(){r.a.each(c.a.uniq(window._earlyClick.clicks),(function(){const e=r.a.Event("click")
e.preventDefault()
r()(this).trigger(e)}))}),1)}const e=r()("#breadcrumbs")
if(e.length){let t
let n=false
const a=40.5
let i
const o=()=>{i&&(window.cancelIdleCallback||window.cancelAnimationFrame)(i)
i=(window.requestIdleCallback||window.requestAnimationFrame)(()=>{let i=500
t=t||e.find(".ellipsible")
t.ifExists(()=>{t.css("maxWidth","")
for(let o=0;e.height()>a&&o<20;o++){if(!n){n=true
t.addClass("ellipsis")}t.css("maxWidth",i-=20)}})})}
o()
r()(window).resize(o)}a["a"].prototype.bindOpenKeys.call({$el:r()("#keyboard_navigation")})
r()("#switched_role_type").ifExists((function(){const e=r()(this).attr("class")
const t=r()("<img/>")
let n=null
switch(r()(this).data("role")){case"TeacherEnrollment":n=p.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.")
break
case"StudentEnrollment":n=p.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")
break
case"TaEnrollment":n=p.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.")
break
case"ObserverEnrollment":n=p.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.")
break
case"DesignerEnrollment":n=p.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.")
break
default:n=p.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}t.attr("src","/images/warning.png").attr("title",n).css({paddingRight:2,width:12,height:12})
r()("#crumb_"+e).find("a").prepend(t)}))
r()("a.show_quoted_text_link").live("click",(function(e){const t=r()(this).parents(".quoted_text_holder").children(".quoted_text")
if(t.length>0){e.preventDefault()
t.show()
r()(this).hide()}}))
r()("a.equella_content_link").live("click",(function(e){e.preventDefault()
let t=r()("#equella_preview_dialog")
if(!t.length){t=r()("<div/>")
t.attr("id","equella_preview_dialog").hide()
t.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+Object(d["a"])(p.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>")
t.find("h2").text(r()(this).attr("title")||r()(this).text()||p.t("titles.equella_content_preview","Equella Content Preview"))
const e=t.find("iframe")
setTimeout(()=>{e.css("background","#fff")},2500)
r()("body").append(t)
t.dialog({autoOpen:false,width:"auto",resizable:false,title:p.t("titles.equella_content_preview","Equella Content Preview"),close(){t.find("iframe").attr("src","about:blank")}})}t.find(".original_link").attr("href",r()(this).attr("href"))
t.dialog("close").dialog("open")
t.find("iframe").attr("src",r()(this).attr("href"))}))
r()(".dialog_opener[aria-controls]:not(.user_content *)").live("click",(function(e){const t=this
r()("#"+r()(this).attr("aria-controls")).ifExists(n=>{e.preventDefault()
if(!n.data("dialog")){n.dialog(r.a.extend({autoOpen:false,modal:true},r()(t).data("dialogOpts")))
n.fixDialogButtons()}n.dialog("open")})}))
r()("a.file_preview_link, a.scribd_file_preview_link").live("click",(function(e){if(e.ctrlKey||e.altKey||e.metaKey||e.shiftKey)return
e.preventDefault()
const t=r()(this)
if("true"===t.attr("aria-expanded")){t.parent().find(".hide_file_preview_link").click()
return}t.loadingImage({image_size:"small",horizontal:"right!"})
t.attr("aria-expanded","true")
r.a.ajaxJSON(t.attr("href").replace(/\/(download|preview)/,"").replace(/wrap=1&?/,"").replace(/[?&]$/,""),"GET",{},n=>{const a=n&&n.attachment
t.loadingImage("remove")
if(a&&(r.a.isPreviewable(a.content_type,"google")||a.canvadoc_session_url)){const n=r()(`[id="${t.attr("aria-controls")}"]`)
n.css("display","block").loadDocPreview({canvadoc_session_url:a.canvadoc_session_url,mimeType:a.content_type,public_url:a.public_url,attachment_preview_processing:"pending_upload"===a.workflow_state||"processing"===a.workflow_state})
const i=r()('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+Object(d["a"])(p.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(e=>{e.preventDefault()
t.attr("aria-expanded","false")
t.show()
t.focus()
n.html("").css("display","none")
Object(f["a"])("hide_embedded_content","hide_file_preview")})
n.prepend(i)
Object.prototype.hasOwnProperty.call(e,"originalEvent")&&i.focus()
Object(f["a"])("show_embedded_content","show_file_preview")}},()=>{t.loadingImage("remove").hide()})}))
r()("a.preview_in_overlay").live("click",e=>{var t,a
let i=null
e.target.href?i=e.target:null!==(t=e.currentTarget)&&void 0!==t&&t.href&&(i=e.currentTarget)
const o=null===(a=i)||void 0===a?void 0:a.href.match(/\/files\/(\d+)/)
if(o){if(e.ctrlKey||e.altKey||e.metaKey||e.shiftKey)return
e.preventDefault()
const t=new URL(i.href)
const a=null===t||void 0===t?void 0:t.searchParams.get("verifier")
const s=o[1]
Promise.all([n.e(20),n.e(44),n.e(132),n.e(4137)]).then(n.bind(null,"i7z/")).then(e=>{e.showFilePreview(s,a)}).catch(e=>{r.a.flashError(p.t("Something went wrong loading the file previewer."))})}})
let t
r.a.subscribe("userContent/change",()=>{clearTimeout(t)
t=setTimeout(k,50)})
r()(document).bind("user_content_change",k)
r()(()=>{setInterval(k,15e3)
setTimeout(k,15)})
r()(".zone_cached_datetime").each((function(){if(r()(this).attr("title")){const e=l["a"].parse(r()(this).attr("title"))
e&&r()(this).text(r.a.datetimeString(e))}}))
r()(".show_sub_messages_link").click((function(e){e.preventDefault()
r()(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message")
r()(this).parents(".communication_sub_message").remove()}))
r()(".show_comments_link").click((function(e){e.preventDefault()
r()(this).closest("ul").find("li").show()
r()(this).closest("li").remove()}))
r()(".communication_message .message_short .read_more_link").click((function(e){e.preventDefault()
r()(this).parents(".communication_message").find(".message_short").hide().end().find(".message").show()}))
r()(".communication_message .close_notification_link").live("click",(function(e){e.preventDefault()
const t=r()(this).parents(".communication_message")
t.confirmDelete({url:r()(this).attr("rel"),noMessage:true,success(){r()(this).slideUp((function(){r()(this).remove()}))}})}))
r()(".communication_message .add_entry_link").click((function(e){e.preventDefault()
const t=r()(this).parents(".communication_message")
const n=t.find(".reply_message").hide()
const a=t.find(".communication_sub_message.blank").clone(true).removeClass("blank")
n.before(a.show())
const i=c.a.uniqueId("textarea_")
a.find("textarea.rich_text").attr("id",i)
r()(document).triggerHandler("richTextStart",r()("#"+i))
a.find("textarea:first").focus().select()}))
r()(document).bind("richTextStart",(e,t)=>{if(!t||0===t.length)return
t=r()(t)
if(!t||0===t.length)return
m["a"].loadNewEditor(t,{focus:true})}).bind("richTextEnd",(e,t)=>{if(!t||0===t.length)return
t=r()(t)
if(!t||0===t.length)return
m["a"].destroyRCE(t)})
r()(".communication_message .content .links .show_users_link,.communication_message .header .show_users_link").click((function(e){e.preventDefault()
r()(this).parents(".communication_message").find(".content .users_list").slideToggle()}))
r()(".communication_message .delete_message_link").click((function(e){e.preventDefault()
r()(this).parents(".communication_message").confirmDelete({noMessage:true,url:r()(this).attr("href"),success(){r()(this).slideUp()}})}))
r()(".communication_sub_message .add_conversation_message_form").formSubmit({beforeSubmit(e){r()(this).find("button").attr("disabled",true)
r()(this).find(".submit_button").text(p.t("status.posting_message","Posting Message..."))
r()(this).loadingImage()},success(e){r()(this).loadingImage("remove")
const t=r()(this).parents(".communication_sub_message")
const n=t.parents(".communication_message")
const a=e.messages[0]
t.fillTemplateData({data:{post_date:r.a.datetimeString(a.created_at),message:a.body},htmlValues:["message"]})
t.find(".message").show()
r()(this).remove()
n.find(".reply_message").show()
r.a.flashMessage("Message Sent!")
r()(document).triggerHandler("user_content_change")
"/"===window.location.pathname&&Object(f["a"])("dashboard_comment","create")},error(e){r()(this).loadingImage("remove")
r()(this).find("button").attr("disabled",false)
r()(this).find(".submit_button").text("Post Failed, Try Again")
r()(this).formErrors(e)}})
r()(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit(e){r()(this).find("button").attr("disabled",true)
r()(this).find(".submit_button").text(p.t("status.posting_message","Posting Message..."))
r()(this).loadingImage()},success(e){r()(this).loadingImage("remove")
const t=r()(this).parents(".communication_sub_message")
if(r()(this).hasClass("submission_comment_form")){const n=r()(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id
let a=null
for(const t in e){const i=e[t].submission
i.user_id==n&&(a=i)}if(a){const e=a.submission_comments[a.submission_comments.length-1].submission_comment
e.post_date=r.a.datetimeString(e.created_at)
e.message=e.formatted_body||e.comment
t.fillTemplateData({data:e,htmlValues:["message"]})}}else{const n=e.discussion_entry
n.post_date=r.a.datetimeString(n.created_at)
t.find(".content > .message_html").val(n.message)
t.fillTemplateData({data:n,htmlValues:["message"]})}t.find(".message").show()
t.find(".user_content").removeClass("enhanced")
t.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show()
r()(document).triggerHandler("richTextEnd",r()(this).find("textarea.rich_text"))
r()(document).triggerHandler("user_content_change")
r()(this).remove()
window.location.href.match(/dashboard/)&&Object(f["a"])("dashboard_comment","create")},error(e){r()(this).loadingImage("remove")
r()(this).find("button").attr("disabled",false)
r()(this).find(".submit_button").text(p.t("errors.posting_message_failed","Post Failed, Try Again"))
r()(this).formErrors(e)}})
r()(".communication_sub_message form .cancel_button").click((function(){const e=r()(this).parents(".communication_sub_message")
const t=r()(this).parents(".communication_message")
r()(document).triggerHandler("richTextEnd",e.find("textarea.rich_text"))
e.remove()
t.find(".reply_message").show()}))
r()(".communication_message,.communication_sub_message").bind("focusin mouseenter",(function(){r()(this).addClass("communication_message_hover")})).bind("focusout mouseleave",(function(){r()(this).removeClass("communication_message_hover")}))
r()(".communication_sub_message .more_options_reply_link").click((function(e){e.preventDefault()
const t=r()(this).parents("form")
let n=null
n=t.hasClass("submission_comment_form")?{comment:t.find("textarea:visible:first").val()||""}:{message:t.find("textarea:visible:first").val()||""}
window.location.href=r()(this).attr("href")+"?message="+encodeURIComponent(n.message)}))
r()(".communication_message.new_activity_message").ifExists((function(){this.find(".message_type img").click((function(){const e=r()(this),t=r.a.trim(e.attr("class"))
e.parents(".message_type").find("img").removeClass("selected")
e.addClass("selected").parents(".new_activity_message").find(".message_type_text").text(e.attr("title")).end().find(".activity_form").hide().end().find("textarea, :text").val("").end().find("."+t+"_form").show().find(".context_select").change()}))
this.find(".context_select").change((function(){const e=r()(this),t=e.val(),n=e.parents(".communication_message"),a=n.find("form")
a.attr("action",n.find("."+t+"_form_url").attr("href"))
a.data("context_name",this.options[this.selectedIndex].text)
a.data("context_code",t)
n.find(".roster_list").hide().find(":checkbox").each((function(){r()(this).attr("checked",false)}))
n.find("."+t+"_roster_list").show()})).triggerHandler("change")
this.find(".cancel_button").click((function(e){r()(this).parents(".communication_message").hide().prev(".new_activity_message").show()}))
this.find(".new_activity_message_link").click((function(e){e.preventDefault()
r()(this).parents(".communication_message").hide().next(".new_activity_message").find(".message_type img.selected").click().end().show().find(":text:visible:first").focus().select()}))
this.find("form.message_form").formSubmit({beforeSubmit(e){r()("button").attr("disabled",true)
r()("button.submit_button").text(p.t("status.posting_message","Posting Message..."))},success(e){r()("button").attr("disabled",false)
r()("button.submit_button").text("Post Message")
const t=r()(this).data("context_code")||""
const n=r()(this).data("context_name")||""
if(r()(this).hasClass("discussion_topic_form")){const a=e.discussion_topic
a.context_code=n
a.user_name=r()("#identity .user_name").text()
a.post_date=r.a.datetimeString(a.created_at)
a.topic_id=a.id
const i=r()(this).parents(".communication_message").find(".template")
const o=i.find(".communication_message").clone(true)
o.find(".header .title,.behavior_content .less_important a").attr("href",i.find("."+t+"_topic_url").attr("href"))
o.find(".add_entry_link").attr("href",i.find("."+t+"_topics_url").attr("href"))
o.find(".user_name").attr("href",i.find("."+t+"_user_url").attr("href"))
o.find(".topic_assignment_link,.topic_assignment_url").attr("href",i.find("."+t+"_assignment_url").attr("href"))
o.find(".attachment_name,.topic_attachment_url").attr("href",i.find("."+t+"_attachment_url").attr("href"))
const s={discussion_topic_id:a.id}
o.fillTemplateData({data:a,hrefValues:["topic_id","user_id","assignment_id","attachment_id"],avoid:".subcontent"})
o.find(".subcontent").fillTemplateData({data:s,hrefValues:["topic_id","user_id"]})
o.find(".subcontent form").attr("action",i.find("."+t+"_entries_url").attr("href"))
o.fillFormData(s,{object_name:"discussion_entry"})
r()(this).parents(".communication_message").after(o.hide())
o.slideDown()
r()(this).parents(".communication_message").slideUp()
r()(this).parents(".communication_message").prev(".new_activity_message").slideDown()}else r()(this).hasClass("announcement_form")||window.location.reload()},error(e){r()("button").attr("disabled",false)
r()("button.submit_button").text(p.t("errors.posting_message_failed","Post Failed, Try Again"))
r()(this).formErrors(e)}})}))
r()("#topic_list .show_all_messages_link").show().click((function(e){e.preventDefault()
r()("#topic_list .topic_message").show()
r()(this).hide()}))
let i=[]
function o(){i=[...document.querySelectorAll(".time_ago_date")].filter(r.a.expr.filters.visible)
s()}function s(){const e=i.shift()
if(e){const t=r()(e),n=t.data("parsed_date")||Date.parse(t.data("timestamp")||"")
if(n){t.data("timestamp",n.toISOString())
t.data("parsed_date",n)
t.text(R(n))
t.attr("title",x(n))}setTimeout(s,1)}else setTimeout(o,6e4)}setTimeout(o,100)
const u=r()("#sequence_footer .sequence_details_url").filter(":last").attr("href")
if(u)r.a.ajaxJSON(u,"GET",{},e=>{const t=r()("#sequence_footer")
if(e.current_item){r()("#sequence_details .current").fillTemplateData({data:e.current_item.content_tag})
r.a.each({previous:".prev",next:".next"},(n,a)=>{const i=t.find(a)
if(e[n+"_item"]||e[n+"_module"]){const a=e[n+"_item"]&&e[n+"_item"].content_tag||e[n+"_module"]&&e[n+"_module"].context_module
if(!e[n+"_item"]){a.title=a.title||a.name
"unpublished"===a.workflow_state&&(a.title+=" ("+p.t("draft","Draft")+")")
a.text="previous"===n?p.t("buttons.previous_module","Previous Module"):p.t("buttons.next_module","Next Module")
i.addClass("module_button")}i.fillTemplateData({data:a})
e[n+"_item"]?i.attr("href",r.a.replaceTags(t.find(".module_item_url").attr("href"),"id",a.id)):i.attr("href",r.a.replaceTags(t.find(".module_url").attr("href"),"id",a.id)+"/items/"+("previous"===n?"last":"first"))}else i.hide()})
t.show()
r()(window).resize()}})
else{const e=r()("#sequence_footer")
if(e.length){const t=r()(e[0])
Promise.all([n.e(9),n.e(195)]).then(n.bind(null,"fY8A")).then(()=>{t.moduleSequenceFooter({courseID:t.attr("data-course-id"),assetType:t.attr("data-asset-type"),assetID:t.attr("data-asset-id")})})}}r()("#right-side").delegate(".more_link","click",(function(e){const t=r()(this)
const n=t.parents("ul").children(":hidden").show()
t.closest("li").remove()
0===e.screenX&&n.first().find(":tabbable:first").focus()
return false}))
r()("#right-side").on("click",".disable-todo-item-link",(function(e){e.preventDefault()
const t=r()(this).parents("li, div.topic_message").last()
const n=r()(this).closest(".to-do-list > li").prev()
const a=n.find(".disable-todo-item-link").length&&n.find(".disable-todo-item-link")||r()(".todo-list-header")
const i=r()(this).data("api-href")
const o=r()(this).data("flash-message")
function s(e){t.confirmDelete({url:e,noMessage:true,success(){o&&r.a.flashMessage(o)
r()(this).slideUp((function(){r()(this).remove()
a.focus()}))}})}s(i)}))
setTimeout((function(){const e=document.getElementById("content")
if(!e)return
const t=e.querySelectorAll(`a[href*="//"]:not([href*="${window.location.hostname}"])`)
for(let e=0;e<t.length;e++){const n=r()(t[e])
if(n.hasClass("external"))continue
const a=n.not(".open_in_a_new_tab").not(":has(img)").not(".not_external").not(".exclude_external_icon")
if(a.length){const e=p.t("titles.external_link","Links to an external site.")
const t=r()('<span class="ui-icon ui-icon-extlink ui-icon-inline"/>').attr("title",e)
t.append(r()('<span class="screenreader-only"/>').text(e))
a.addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+n.html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append(t)}}}),100)}))},dDTa:function(e,t,n){"use strict"
const a=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=a},eVns:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var a=n("BrAc")
function i(e){let t=e
let n=null
return e=>{null===n&&(n=a["a"].post("/api/v1/jwts/refresh",{jwt:t}).then(e=>{n=null
t=e.data.token
return t}))
"function"===typeof e&&n.then(e)
return n}}var o=n("s9Pr")
function r(){var e
if(!ENV.context_asset_string)return null
let[t,n]=Object(o["a"])(ENV.context_asset_string,false)
const a=ENV.current_user_id
const r={contextType:t,contextId:n,userId:a}
const s=ENV.RICH_CONTENT_CAN_UPLOAD_FILES
if(!s||"account"===t){n=a
t="user"}return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,containingContext:r,contextType:t,contextId:n,filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:i(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,canvasUrl:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN,features:{buttons_and_icons_cropper:null===(e=ENV.FEATURES)||void 0===e?void 0:e.buttons_and_icons_cropper}}}},lBOK:function(e,t,n){"use strict"
var a=n("ouhR")
var i=n.n(a)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const n=this.filter(":first")
let a
if("hide"===e||"remove"===e){n.children(".loading_image").remove()
a=n.data("loading_images")||[]
a.forEach(e=>{e&&e.remove()})
n.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){n.children(".loading_image").remove()
a=n.data("loading_images")||[]
const e=a.pop()
e&&e.remove()
n.data("loading_images",a)
return this}if("register_image"===e&&3===arguments.length){i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
let o=i.a.fn.loadingImg.image_files.normal
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(o=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let r=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)r=n.outerHeight()
else if("middle"===e.vertical)r=n.outerHeight()/2-o.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}let s=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)s=n.outerWidth()-o.width
else if("right!"===e.horizontal){s="ltr"===t?n.outerWidth()+5:-5-(o.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)s=n.outerWidth()/2-o.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}const c=n.zIndex()+1
const l=i()(document.createElement("div")).addClass("loading_image_holder")
const d=i()(document.createElement("img")).attr("src",o.url)
l.append(d)
a=n.data("loading_images")||[]
a.push(l)
n.data("loading_images",a)
if(n.css("position")&&"static"!==n.css("position")){l.css({zIndex:c,position:"absolute",top:r,left:s})
n.append(l)}else{const t=n.offset()
let a=t.top,o=t.left
e.vertical&&(a+=r)
e.horizontal&&(o+=s)
l.css({zIndex:c,position:"absolute",top:a,left:o})
i()("body").append(l)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg}}])

//# sourceMappingURL=73-c-f7f641e343.js.map