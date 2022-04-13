(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[4113,36,38,39,40,56,60,70,71,75,94,98,195,3695,4118,4119,4122,4192,4281],{"+6XX":function(e,t,n){var i=n("y1pI")
function o(e){return i(this.__data__,e)>-1}e.exports=o},"+Gzo":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1468.2354,1807.0586 L112.9414,1807.0586 L112.9414,112.9406 L1016.4714,112.9406 L1016.4714,564.7056 L1468.2354,564.7056 L1468.2354,1807.0586 Z M1129.4124,136.3196 L1444.8554,451.7656 L1129.4124,451.7656 L1129.4124,136.3196 Z M1531.5944,378.8056 L1202.3724,49.5806 C1170.2964,17.6196 1127.7174,-0.0004 1082.5414,-0.0004 L0.0004,-0.0004 L0.0004,1919.9996 L1581.1754,1919.9996 L1581.1754,498.6346 C1581.1754,453.4586 1563.5574,410.8796 1531.5944,378.8056 L1531.5944,378.8056 Z M338.823,1242.353 L1129.412,1242.353 L1129.412,1129.413 L338.823,1129.413 L338.823,1242.353 Z M338.823,790.588 L1242.353,790.588 L1242.353,677.647 L338.823,677.647 L338.823,790.588 Z M338.823,1468.235 L790.588,1468.235 L790.588,1355.294 L338.823,1355.294 L338.823,1468.235 Z M338.823,1016.471 L1016.471,1016.471 L1016.471,903.53 L338.823,903.53 L338.823,1016.471 Z M338.823,564.706 L790.588,564.706 L790.588,451.765 L338.823,451.765 L338.823,564.706 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1",transform:"translate(238)"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconDocumentLine"
return n}(l["Component"])
h.glyphName="document"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},"+Pml":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1807.05882,1637.70588 C1807.05882,1668.87765 1781.64706,1694.17647 1750.58824,1694.17647 L169.411765,1694.17647 C138.352941,1694.17647 112.941176,1668.87765 112.941176,1637.70588 L112.941176,225.941176 L703.849412,225.941176 L854.4,451.823529 L225.882353,451.823529 L225.882353,564.764706 L1807.05882,564.764706 L1807.05882,1637.70588 Z M990.268235,451.823529 L764.385882,113 L-5.68434189e-14,113 L-5.68434189e-14,1637.70588 C-5.68434189e-14,1731.10824 76.0094118,1807.11765 169.411765,1807.11765 L1750.58824,1807.11765 C1843.99059,1807.11765 1920,1731.10824 1920,1637.70588 L1920,451.823529 L990.268235,451.823529 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),d)}}])
n.displayName="IconFolderLine"
return n}(l["Component"])
h.glyphName="folder"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},"+c4W":function(e,t,n){var i=n("711d"),o=n("4/ic"),r=n("9ggG"),s=n("9Nap")
function a(e){return r(e)?i(s(e)):o(e)}e.exports=a},"+tcD":function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var i=n("RtDj")
var o=n("ouhR")
var r=n.n(o)
var s=n("q1tI")
var a=n.n(s)
n("17x9")
var l=n("HGxv")
var c=n("dDTa")
var u=n("HeaX")
var d,h
const p=Object(l["useScope"])("external_toolsModalLauncher")
class f extends a.a.Component{constructor(...e){super(...e)
this.state={beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",modalLaunchStyle:{}}
this.getDimensions=()=>{const e=this.getLaunchDimensions()
return{modalStyle:this.getModalStyle(e),modalBodyStyle:this.getModalBodyStyle(e),modalLaunchStyle:this.getModalLaunchStyle(e)}}
this.onExternalToolCompleted=(e,t)=>{this.props.onExternalContentReady&&this.props.onExternalContentReady(t)
this.props.onRequestClose()}
this.getIframeSrc=()=>{if(this.props.isOpen&&this.props.tool)return["/",this.props.contextType,"s/",this.props.contextId,"/external_tools/",this.props.tool.definition_id,"?display=borderless&launch_type=",this.props.launchType].join("")}
this.getLaunchDimensions=()=>{const e={width:700,height:700}
if(this.props.isOpen&&this.props.tool&&this.props.launchType&&this.props.tool.placements&&this.props.tool.placements[this.props.launchType]){const t=this.props.tool.placements[this.props.launchType];(t.launch_width||t.selection_width)&&(e.width=t.launch_width||t.selection_width);(t.launch_height||t.selection_height)&&(e.height=t.launch_height||t.selection_height)}return e}
this.getModalLaunchStyle=e=>({...e,border:"none"})
this.getModalBodyStyle=e=>({...e,padding:0,display:"flex",flexDirection:"column"})
this.getModalStyle=e=>({width:e.width})
this.handleAlertBlur=e=>{const t={modalLaunchStyle:{border:"none"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.handleAlertFocus=e=>{const t={modalLaunchStyle:{width:this.iframe.offsetWidth-4,border:"2px solid #0374B5"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.onAfterOpen=()=>{this.iframe&&this.iframe.setAttribute("allow",Object(c["a"])())}}componentDidMount(){r()(window).on("externalContentReady",this.onExternalToolCompleted)
r()(window).on("externalContentCancel",this.onExternalToolCompleted)}componentWillUnmount(){r()(window).off("externalContentReady",this.onExternalToolCompleted)
r()(window).off("externalContentCancel",this.onExternalToolCompleted)}render(){const e="before_external_content_info_alert "+this.state.beforeExternalContentAlertClass
const t="after_external_content_info_alert "+this.state.afterExternalContentAlertClass
const n=this.getDimensions()
n.modalLaunchStyle={...n.modalLaunchStyle,...this.state.modalLaunchStyle}
return Object(i["a"])(u["a"],{label:p.t("Launch External Tool"),open:this.props.isOpen,onDismiss:this.props.onRequestClose,onOpen:this.onAfterOpen,title:this.props.title,appElement:this.props.appElement},void 0,a.a.createElement("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,ref:e=>{this.beforeAlert=e}},Object(i["a"])("div",{className:"ic-flash-info"},void 0,d||(d=Object(i["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(i["a"])("i",{className:"icon-info"}))),p.t("The following content is partner provided"))),a.a.createElement("iframe",{src:this.getIframeSrc(),style:n.modalLaunchStyle,title:this.props.title,ref:e=>{this.iframe=e},"data-lti-launch":"true"}),a.a.createElement("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,ref:e=>{this.afterAlert=e}},Object(i["a"])("div",{className:"ic-flash-info"},void 0,h||(h=Object(i["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(i["a"])("i",{className:"icon-info"}))),p.t("The preceding content is partner provided"))))}}f.defaultProps={appElement:document.getElementById("application")}},"/J96":function(e,t,n){"use strict"
var i=n("17x9")
const o=Object(i["shape"])({id:i["string"].isRequired,title:i["string"].isRequired,groupId:i["string"]})
const r=Object(i["shape"])({id:i["string"].isRequired,title:i["string"].isRequired,items:Object(i["arrayOf"])(o)})
Object(i["oneOfType"])([Object(i["shape"])({siblings:Object(i["arrayOf"])(o).isRequired}),Object(i["shape"])({groupsLabel:i["string"].isRequired,groups:Object(i["arrayOf"])(r).isRequired,excludeCurrent:i["bool"]})])},"/oRJ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(e){const t="about:blank"
try{const n=new URL(e,window.location.origin)
if("javascript:"===n.protocol)return t
return e}catch(e){return t}}},"08kA":function(e,t,n){"use strict"
var i=n("s4NR"),o=n("CxY0"),r=n("U6jy")
function s(e){return e&&e.rel}function a(e,t){function n(n){e[n]=r(t,{rel:n})}t.rel.split(/\s+/).forEach(n)
return e}function l(e,t){var n=t.match(/\s*(.+)\s*=\s*"?([^"]+)"?/)
n&&(e[n[1]]=n[2])
return e}function c(e){try{var t=e.match(/<?([^>]*)>(.*)/),n=t[1],s=t[2].split(";"),a=o.parse(n),c=i.parse(a.query)
s.shift()
var u=s.reduce(l,{})
u=r(c,u)
u.url=n
return u}catch(e){return null}}e.exports=function(e){if(!e)return null
return e.split(/,\s*</).map(c).filter(s).reduce(a,{})}},"0FJJ":function(e,t,n){"use strict"
var i=function(e,t){return function(){return e.apply(t,arguments)}},o={}.hasOwnProperty
t["a"]=function(){function e(e){null==e&&(e={})
this.normalizeBoolean=i(this.normalizeBoolean,this)
this.present=i(this.present,this)
this.excludesSmallMatches=i(this.excludesSmallMatches,this)
this.toJSON=i(this.toJSON,this)
this.percent=i(this.percent,this)
this.words=i(this.words,this)
this.originalityReportVisibility=e.originality_report_visibility||"immediate"
this.sPaperCheck=this.normalizeBoolean(e.s_paper_check)
this.internetCheck=this.normalizeBoolean(e.internet_check)
this.excludeBiblio=this.normalizeBoolean(e.exclude_biblio)
this.excludeQuoted=this.normalizeBoolean(e.exclude_quoted)
this.journalCheck=this.normalizeBoolean(e.journal_check)
this.excludeSmallMatchesType=e.exclude_small_matches_type
this.excludeSmallMatchesValue=e.exclude_small_matches_value||0
this.submitPapersTo=!e.hasOwnProperty("submit_papers_to")||this.normalizeBoolean(e.submit_papers_to)}e.prototype.words=function(){return"words"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
e.prototype.percent=function(){return"percent"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
e.prototype.toJSON=function(){return{s_paper_check:this.sPaperCheck,originality_report_visibility:this.originalityReportVisibility,internet_check:this.internetCheck,exclude_biblio:this.excludeBiblio,exclude_quoted:this.excludeQuoted,journal_check:this.journalCheck,exclude_small_matches_type:this.excludeSmallMatchesType,exclude_small_matches_value:this.excludeSmallMatchesValue,submit_papers_to:this.submitPapersTo}}
e.prototype.excludesSmallMatches=function(){return!(null==this.excludeSmallMatchesType)}
e.prototype.present=function(){var e,t,n,i
e={}
n=this
for(t in n){if(!o.call(n,t))continue
i=n[t]
e[t]=i}e.excludesSmallMatches=this.excludesSmallMatches()
e.words=this.words()
e.percent=this.percent()
return e}
e.prototype.normalizeBoolean=function(e){return["1",true,"true",1].includes(e)}
return e}()},"0unK":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
class s extends r.a.Component{render(){return Object(i["a"])("div",{className:this.props.className,style:this.props.style},void 0,this.props.children)}}s.displayName="ModalContent"
s.defaultProps={className:"ReactModal__Body",style:{}}},"2W6z":function(e,t,n){"use strict"
var i=false
var o=function(){}
if(i){var r=function(e,t){var n=arguments.length
t=new Array(n>1?n-1:0)
for(var i=1;i<n;i++)t[i-1]=arguments[i]
var o=0
var r="Warning: "+e.replace(/%s/g,(function(){return t[o++]}))
"undefined"!==typeof console&&console.error(r)
try{throw new Error(r)}catch(e){}}
o=function(e,t,n){var i=arguments.length
n=new Array(i>2?i-2:0)
for(var o=2;o<i;o++)n[o-2]=arguments[o]
if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument")
e||r.apply(null,[t].concat(n))}}e.exports=o},"2gN3":function(e,t,n){var i=n("Kz5y")
var o=i["__core-js_shared__"]
e.exports=o},"2mql":function(e,t,n){"use strict"
var i=n("TOwV")
var o={childContextTypes:true,contextType:true,contextTypes:true,defaultProps:true,displayName:true,getDefaultProps:true,getDerivedStateFromError:true,getDerivedStateFromProps:true,mixins:true,propTypes:true,type:true}
var r={name:true,length:true,prototype:true,caller:true,callee:true,arguments:true,arity:true}
var s={$$typeof:true,render:true,defaultProps:true,displayName:true,propTypes:true}
var a={$$typeof:true,compare:true,defaultProps:true,displayName:true,propTypes:true,type:true}
var l={}
l[i.ForwardRef]=s
l[i.Memo]=a
function c(e){if(i.isMemo(e))return a
return l[e["$$typeof"]]||o}var u=Object.defineProperty
var d=Object.getOwnPropertyNames
var h=Object.getOwnPropertySymbols
var p=Object.getOwnPropertyDescriptor
var f=Object.getPrototypeOf
var m=Object.prototype
function g(e,t,n){if("string"!==typeof t){if(m){var i=f(t)
i&&i!==m&&g(e,i,n)}var o=d(t)
h&&(o=o.concat(h(t)))
var s=c(e)
var a=c(t)
for(var l=0;l<o.length;++l){var _=o[l]
if(!r[_]&&!(n&&n[_])&&!(a&&a[_])&&!(s&&s[_])){var b=p(t,_)
try{u(e,_,b)}catch(e){}}}}return e}e.exports=g},"2rMq":function(e,t,n){var i;(function(){"use strict"
var o=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
var r={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!!(window.addEventListener||window.attachEvent),canUseViewport:o&&!!window.screen}
i=function(){return r}.call(t,n,t,e),void 0!==i&&(e.exports=i)})()},"2z/i":function(e,t,n){"use strict"
var i=n("HGxv")
var o=n("Z6JD")
const r=Object(i["useScope"])("format_range")
const s=()=>ENV.CONDITIONAL_RELEASE_SERVICE_ENABLED||false
const a=()=>{const e=ENV.CONDITIONAL_RELEASE_ENV&&ENV.CONDITIONAL_RELEASE_ENV.active_rules||[]
return{triggerAssignments:e.reduce((e,t)=>{e[t.trigger_assignment_id]=t
return e},{}),releasedAssignments:e.reduce((e,t)=>{t.scoring_ranges.forEach(n=>{n.assignment_sets.forEach(i=>{i.assignment_set_associations.forEach(i=>{const o=i.assignment_id
e[o]=e[o]||[]
e[o].push({assignment_id:t.trigger_assignment_id,assignment:t.trigger_assignment_model,upper_bound:n.upper_bound,lower_bound:n.lower_bound})})})})
return e},{})}}
let l=a()
const c=e=>l.triggerAssignments.hasOwnProperty(e)
const u=e=>l.releasedAssignments.hasOwnProperty(e)
const d=e=>{const t=l.releasedAssignments[e]||[]
if(t.length>1)return r.t("Multiple")
if(t.length>0){const e=t[0]
return r.t("%{upper} - %{lower}",{upper:Object(o["b"])(e.upper_bound,e.assignment,true),lower:Object(o["b"])(e.lower_bound,e.assignment,false)})}return null}
t["a"]={isEnabled:s,reloadEnv(){l=a()},getItemData(e,t=true){e=e&&e.toString()
return s()?{isCyoeAble:e&&t,isTrigger:e&&t&&c(e),isReleased:u(e),releasedLabel:d(e)}:{}}}},"2zZe":function(e,t,n){"use strict"
n.d(t,"a",(function(){return I}))
var i=n("Ff2n")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("cClk")
var p=n("dpqJ")
var f=n("sTNg")
var m=n("UCAh")
var g=n("oXx0")
var _=n("4Awi")
var b=n("E+IV")
var v=n("jtGx")
var y=n("tCl5")
var x=n("BTe1")
var k=n("Oioo")
var w=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return null}}])
n.displayName="Option"
return n}(l["Component"])
w.propTypes={id:d.a.string.isRequired,value:d.a.string.isRequired,isDisabled:d.a.bool,renderBeforeLabel:d.a.oneOfType([d.a.node,d.a.func]),renderAfterLabel:d.a.oneOfType([d.a.node,d.a.func]),children:d.a.string}
w.defaultProps={isDisabled:false,renderBeforeLabel:void 0,renderAfterLabel:void 0,children:null}
var C=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return null}}])
n.displayName="Group"
return n}(l["Component"])
C.propTypes={renderLabel:d.a.oneOfType([d.a.node,d.a.func]).isRequired,children:p["a"].oneOf([w])}
C.defaultProps={children:null}
var O,S,E,T
var I=(O=Object(g["a"])(),O(S=(T=E=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var i
Object(o["a"])(this,n)
i=t.call(this,e)
i._emptyOptionId=Object(x["a"])("Select-EmptyOption")
i.handleRef=function(e){i._select=e}
i.handleBlur=function(e){i.setState({highlightedOptionId:null})
i.props.onBlur(e)}
i.handleShowOptions=function(e){i.setState({isShowingOptions:true})
i.props.onShowOptions(e)}
i.handleHideOptions=function(e){i.setState((function(e){var t=i.getOption("id",e.selectedOptionId)
return{isShowingOptions:false,highlightedOptionId:null,inputValue:t?t.props.children:""}}))
i.props.onHideOptions(e)}
i.handleHighlightOption=function(e,t){var n=t.id
if(n===i._emptyOptionId)return
var o=i.getOption("id",n)
var r=o.props.children
var s="keydown"===e.type?r:i.state.inputValue
i.setState({highlightedOptionId:n,inputValue:s})}
i.handleSelectOption=function(e,t){var n=t.id
if(n===i._emptyOptionId){i.setState({isShowingOptions:false})
return}var o=i.getOption("id",n)
var r=o&&o.props.value
i.isControlled?i.setState({isShowingOptions:false}):i.setState((function(e){return{isShowingOptions:false,selectedOptionId:n,inputValue:o?o.props.children:e.inputValue}}))
o&&i.props.onChange(e,{value:r,id:n})
i.props.onHideOptions(e)}
var r=i.getInitialOption(e)
i.state={inputValue:r?r.props.children:"",isShowingOptions:false,highlightedOptionId:null,selectedOptionId:r?r.props.id:null}
return i}Object(r["a"])(n,[{key:"focus",value:function(){this._select&&this._select.focus()}},{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value){var t=this.getOption("value",this.props.value)
"undefined"===typeof this.props.value&&(t=this.getOption("value",e.value))
this.setState({inputValue:t?t.props.children:"",selectedOptionId:t?t.props.id:""})}}},{key:"getInitialOption",value:function(e){var t=e.value,n=e.defaultValue
var i=t||n
if("string"===typeof i)return this.getOption("value",i)
return this.getOptionByIndex(0)}},{key:"getOptionLabelById",value:function(e){var t=this.getOption("id",e)
return t?t.props.children:""}},{key:"getOptionByIndex",value:function(e){var t=l["Children"].toArray(this.props.children)
var n=null
for(var i=0;i<t.length;i++){var o=t[i]
Object(_["a"])(o,[w])?n=o:Object(_["a"])(o,[C])&&(n=l["Children"].toArray(o.props.children)[0])
if(n)break}return n}},{key:"getOption",value:function(e,t){var n=l["Children"].toArray(this.props.children)
var i=null
for(var o=0;o<n.length;++o){var r=n[o]
if(Object(_["a"])(r,[w]))r.props[e]===t&&(i=r)
else if(Object(_["a"])(r,[C])){var s=l["Children"].toArray(r.props.children)
for(var a=0;a<s.length;++a){var c=s[a]
if(c.props[e]===t){i=c
break}}}if(i)break}return i}},{key:"renderChildren",value:function(){var e=this
var t=l["Children"].toArray(this.props.children)
t=l["Children"].map(t,(function(t){if(Object(_["a"])(t,[w]))return e.renderOption(t)
if(Object(_["a"])(t,[C]))return e.renderGroup(t)
return null})).filter((function(e){return!!e}))
if(0===t.length)return this.renderEmptyOption()
return t}},{key:"renderEmptyOption",value:function(){return c.a.createElement(k["a"].Option,{id:this._emptyOptionId,isHighlighted:false,isSelected:false},Object(b["a"])(this.props.renderEmptyOption))}},{key:"renderOption",value:function(e){var t=e.props,n=t.id,o=t.value,r=t.children,s=t.renderBeforeLabel,a=t.renderAfterLabel,l=Object(i["a"])(t,["id","value","children","renderBeforeLabel","renderAfterLabel"])
return c.a.createElement(k["a"].Option,Object.assign({id:n,value:o,key:e.key||n,isHighlighted:n===this.state.highlightedOptionId,isSelected:n===this.state.selectedOptionId,isDisabled:e.props.isDisabled,renderBeforeLabel:s,renderAfterLabel:a},Object(v["b"])(l)),r)}},{key:"renderGroup",value:function(e){var t=this
var n=e.props,o=n.id,r=n.renderLabel,s=n.children,a=Object(i["a"])(n,["id","renderLabel","children"])
return c.a.createElement(k["a"].Group,Object.assign({renderLabel:r,key:e.key||o},Object(v["b"])(a)),l["Children"].map(s,(function(e){return t.renderOption(e)})))}},{key:"render",value:function(){var e=this.props,t=e.renderLabel,n=(e.value,e.defaultValue,e.id),o=e.size,r=e.assistiveText,s=e.placeholder,a=(e.interaction,e.isRequired),l=e.isInline,u=e.width,d=e.optionsMaxWidth,h=e.visibleOptionsCount,p=e.messages,f=e.placement,m=e.constrain,g=e.mountNode,_=e.inputRef,b=e.listRef,y=(e.renderEmptyOption,e.renderBeforeInput),x=e.renderAfterInput,w=e.onFocus,C=(e.onBlur,e.onShowOptions,e.onHideOptions,e.children),O=Object(i["a"])(e,["renderLabel","value","defaultValue","id","size","assistiveText","placeholder","interaction","isRequired","isInline","width","optionsMaxWidth","visibleOptionsCount","messages","placement","constrain","mountNode","inputRef","listRef","renderEmptyOption","renderBeforeInput","renderAfterInput","onFocus","onBlur","onShowOptions","onHideOptions","children"])
return c.a.createElement(k["a"],Object.assign({renderLabel:t,inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,id:n,size:o,assistiveText:r,placeholder:s,interaction:this.interaction,isRequired:a,isInline:l,width:u,optionsMaxWidth:d,visibleOptionsCount:h,messages:p,placement:f,constrain:m,mountNode:g,ref:this.handleRef,inputRef:_,listRef:b,renderBeforeInput:y,renderAfterInput:x,onFocus:w,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},Object(v["b"])(O)),this.renderChildren(C))}},{key:"focused",get:function(){return this._select&&this._select.focused}},{key:"id",get:function(){return this._select&&this._select.id}},{key:"isControlled",get:function(){return"undefined"!==typeof this.props.value}},{key:"interaction",get:function(){return Object(y["a"])({props:this.props})}}])
n.displayName="SimpleSelect"
return n}(l["Component"]),E.Option=w,E.Group=C,E.propTypes={renderLabel:d.a.oneOfType([d.a.node,d.a.func]).isRequired,value:Object(h["a"])(d.a.string,"onChange"),defaultValue:d.a.string,id:d.a.string,size:d.a.oneOf(["small","medium","large"]),assistiveText:d.a.string,placeholder:d.a.string,interaction:d.a.oneOf(["enabled","disabled","readonly"]),isRequired:d.a.bool,isInline:d.a.bool,width:d.a.string,optionsMaxWidth:d.a.string,visibleOptionsCount:d.a.number,messages:d.a.arrayOf(f["d"].message),placement:m["a"].placement,constrain:m["a"].constrain,mountNode:m["a"].mountNode,onChange:d.a.func,onFocus:d.a.func,onBlur:d.a.func,onShowOptions:d.a.func,onHideOptions:d.a.func,inputRef:d.a.func,listRef:d.a.func,renderEmptyOption:d.a.oneOfType([d.a.node,d.a.func]),renderBeforeInput:d.a.oneOfType([d.a.node,d.a.func]),renderAfterInput:d.a.oneOfType([d.a.node,d.a.func]),children:p["a"].oneOf([C,w])},E.defaultProps={value:void 0,defaultValue:void 0,id:void 0,size:"medium",assistiveText:void 0,placeholder:null,interaction:void 0,isRequired:false,isInline:false,width:void 0,optionsMaxWidth:void 0,visibleOptionsCount:8,messages:void 0,placement:"bottom stretch",mountNode:void 0,constrain:"window",onChange:function(e,t){},onFocus:function(e){},onBlur:function(e){},onShowOptions:function(e){},onHideOptions:function(e){},inputRef:function(e){},listRef:function(e){},renderEmptyOption:"---",renderBeforeInput:null,renderAfterInput:null,children:null},T))||S)},"2zs7":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0
var i=n("2rMq")
var o=r(i)
function r(e){return e&&e.__esModule?e:{default:e}}var s=o.default
var a=s.canUseDOM?window.HTMLElement:{}
t.SafeHTMLCollection=s.canUseDOM?window.HTMLCollection:{}
t.SafeNodeList=s.canUseDOM?window.NodeList:{}
t.canUseDOM=s.canUseDOM
t.default=a},"3Fdi":function(e,t){var n=Function.prototype
var i=n.toString
function o(e){if(null!=e){try{return i.call(e)}catch(e){}try{return e+""}catch(e){}}return""}e.exports=o},"3HOH":function(e,t,n){"use strict"
var i=n("RtDj")
var o=n("Y/W1")
var r=n.n(o)
var s=n("zq/q")
var a=n("3Yjv")
var l=n("HGxv")
var c=n("q1tI")
var u=n.n(c)
var d=n("pZ4s")
var h=n("ZbPE")
var p=n("uSnb")
const f=Object(l["useScope"])("modules")
function m(e){return Object(i["a"])(d["a"],{startAt:"medium",vAlign:"middle",rowSpacing:"none",colSpacing:"none"},void 0,Object(i["a"])(d["a"].Row,{vAlign:"middle",rowSpacing:"none"},void 0,Object(i["a"])(d["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(i["a"])(p["a"],{renderTitle:f.t("Duplicating Module")}))),Object(i["a"])(d["a"].Row,{},void 0,Object(i["a"])(d["a"].Col,{hAlign:"center",textAlign:"center"},void 0,Object(i["a"])(h["a"],{},void 0,f.t("Duplicating Module...")))))}var g=n("i8i4")
var _=n.n(g)
var b=n("ep+9")
var v=n("mX+G")
var y=n.n(v)
const x=Object(l["useScope"])("publishableModuleItem")
class k extends v["Model"]{static initClass(){this.prototype.defaults={module_type:null,course_id:null,module_id:null,published:true,publishable:true,unpublishable:true,module_item_name:null}
this.prototype.urls={generic(){return`${this.baseUrl()}/modules/${this.get("module_id")}/items/${this.get("module_item_id")}`},module(){return`${this.baseUrl()}/modules/${this.get("id")}`}}
this.prototype.toJSONs={generic(){return{module_item:{published:this.get("published")}}},module(){return{module:{published:this.get("published")}}}}
this.prototype.disabledMessages={generic(){return this.get("module_item_name")?x.t("Publishing %{item_name} is disabled",{item_name:this.get("module_item_name")}):x.t("Publishing is disabled for this item")},assignment(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")},quiz(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")},discussion_topic(){return this.get("module_item_name")?x.t("Can't unpublish %{item_name} if there are student submissions",{item_name:this.get("module_item_name")}):x.t("Can't unpublish if there are student submissions")}}}branch(e){const t="lti-quiz"===this.get("module_type")?"quiz":this.get("module_type")
return(this[e][t]||this[e].generic).call(this)}url(){return this.branch("urls")}toJSON(){return this.branch("toJSONs")}disabledMessage(){return this.branch("disabledMessages")}baseUrl(){return"/api/v1/courses/"+this.get("course_id")}publish(){return this.save("published",true)}unpublish(){return this.save("published",false)}}k.initClass()
var w=n("Ophv")
var C=n("SYfm")
const O=y.a.Model.extend({defaults:{is_master_course_master_content:false,is_master_course_child_content:false,restricted_by_master_course:false}})
var S=O
var E=n("d61b")
var T=n("ik22")
var I=n("ouhR")
var j=n.n(I)
var L=n("/oRJ")
const D={}
D.setWindowLocation=function(e){window.location=e}
D.externalUrlLinkClick=function(e,t){e.preventDefault()
this.setWindowLocation(Object(L["a"])(t.attr("data-item-href")))}.bind(D)
var R=D
var N=n("2z/i")
n("lBOK")
var P,A=function(e,t){return function(){return e.apply(t,arguments)}},M=function(e,t){for(var n in t)B.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},B={}.hasOwnProperty
P=Object(l["useScope"])("viewsContextModules")
var F=function(e){M(t,e)
function t(){this.onKeyDown=A(this.onKeyDown,this)
this.error=A(this.error,this)
this.success=A(this.success,this)
this.toggleWorkflowState=A(this.toggleWorkflowState,this)
return t.__super__.constructor.apply(this,arguments)}t.optionProperty("modules")
t.prototype.toggleWorkflowState=function(e){var t,n
e.preventDefault()
this.$context_module=j()(e.target).parents(".context_module")
t=this.$context_module.data("module-url")
this.workflow_state=this.$context_module.data("workflow-state")
n={url:t,type:"PUT",beforeSend:(i=this,function(){return i.$context_module.loadingImage()}),success:this.success,error:this.error}
var i
this.setRequestPublishOptions(n)
return j.a.ajax(n)}
t.prototype.success=function(e){this.$context_module.data("workflow-state",e.context_module.workflow_state)
"unpublished"===e.context_module.workflow_state?this.addUnpublishAttributes():this.addPublishAttributes()
return this.$context_module.loadingImage("remove")}
t.prototype.error=function(e){alert("This module could not be published")
return this.$context_module.loadingImage("remove")}
t.prototype.setRequestPublishOptions=function(e){return"active"===this.workflow_state?e.data="unpublish=1":e.data="publish=1"}
t.prototype.addUnpublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(P.t("context_modules.publish","Publish"))
this.$context_module.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
this.$context_module.find(".draft-text").removeClass("hide")
return this.$context_module.addClass("unpublished_module")}
t.prototype.addPublishAttributes=function(){this.$context_module.find(".workflow-state-action").text(P.t("context_module.unpublish","Unpublish"))
this.$context_module.find(".workflow-state-icon").addClass("unpublish-module-link").removeClass("publish-module-link")
this.$context_module.find(".draft-text").addClass("hide")
return this.$context_module.removeClass("unpublished_module")}
t.prototype.keyCodes={32:"Space",38:"UpArrow",40:"DownArrow"}
t.prototype.moduleSelector="div.context_module"
t.prototype.itemSelector="table.context_module_item"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.$contextModules=j()("#context_modules")
return this.$contextModules.parent().on("keydown",this.onKeyDown)}
t.prototype.onKeyDown=function(e){var t,n
t=j()(e.target)
n="on"+this.keyCodes[e.keyCode]+"Key"
if(this[n]){e.preventDefault()
return this[n].call(this,e,t)}}
t.prototype.getFocusedElement=function(e){var t
t=e.parents(this.itemSelector).first()
this.empty(t)||(e=t)
if(!e.is(this.itemSelector)){t=e.parents(this.moduleSelector).first()
this.empty(t)||(e=t)
e.is(this.moduleSelector)||(e=this.$contextModules)}return e}
t.prototype.onUpArrowKey=function(e,t){var n,i,o
n=this.getFocusedElement(t)
if(n.is(this.itemSelector)){o=n.prev(this.itemSelector);(this.empty(o)||this.$contextModules.data("dragModule"))&&(o=n.parents(this.moduleSelector).first())}else if(n.is(this.moduleSelector))if(this.$contextModules.data("dragItem"))o=this.$contextModules.data("dragItemModule")
else{o=n.prev(this.moduleSelector)
if(this.empty(o))o=this.$contextModules
else if(!this.$contextModules.data("dragModule")){i=o.find(this.itemSelector).last()
this.empty(i)||(o=i)}}if(o&&!this.empty(o))return o.focus()}
t.prototype.onDownArrowKey=function(e,t){var n,i,o
n=this.getFocusedElement(t)
if(n.is(this.itemSelector)){i=n.next(this.itemSelector)
if(this.empty(i)&&!this.$contextModules.data("dragItem")){o=n.parents(this.moduleSelector).first()
i=o.next(this.moduleSelector)}}else if(n.is(this.moduleSelector)){i=n.find(this.itemSelector).first();(this.empty(i)||this.$contextModules.data("dragModule"))&&(i=n.next(this.moduleSelector))}else i=this.$contextModules.find(this.moduleSelector).first()
if(i&&!this.empty(i))return i.focus()}
t.prototype.onSpaceKey=function(e,t){var n,i,o,r
o=this.getFocusedElement(t)
if(n=this.$contextModules.data("dragItem")){if(!o.is(n)){r=this.$contextModules.data("dragItemModule")
o.is(this.itemSelector)&&!this.empty(o.parents(r))?o.after(n):r.find(".items").prepend(n)
modules.updateModuleItemPositions(null,{item:n.parent()})}n.attr("aria-grabbed",false)
this.$contextModules.data("dragItem",null)
this.$contextModules.data("dragItemModule",null)
return n.focus()}if(i=this.$contextModules.data("dragModule")){o.is(this.itemSelector)&&(o=o.parents(this.moduleSelector).first())
if(!o.is(i)){this.empty(o)||o.is(this.$contextModules)?this.$contextModules.prepend(i):o.after(i)
modules.updateModulePositions()}i.attr("aria-grabbed",false)
this.$contextModules.data("dragModule",null)
return i.focus()}if(!o.is(this.$contextModules)){o.attr("aria-grabbed",true)
if(o.is(this.itemSelector)){this.$contextModules.data("dragItem",o)
this.$contextModules.data("dragItemModule",o.parents(this.moduleSelector).first())}else o.is(this.moduleSelector)&&this.$contextModules.data("dragModule",o)
o.blur()
return o.focus()}}
t.prototype.empty=function(e){return 0===e.length}
return t}(y.a.View)
var q=n("KIYd")
var z=n("3O+N")
var H=n.n(z)
n("BGrI")
var U=H.a.default
var G=U.template,V=U.templates=U.templates||{}
var W="/work/canvas-deploy/generated/ui/shared/context-modules/jst/RelockModulesDialog"
V[W]=G((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var r,s,a="",l=n.helperMissing,c=this.escapeExpression
a+="<p>"+c((r=n.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:o},r?r.call(t,"you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",s):l.call(t,"t","you_have_changed_the_progression_requirements_for__6772bc89","You have changed the progression requirements for an active course. There may be students who have already progressed to this module and to others that depend on it.",s)))+"</p>\n<p>"+c((r=n.t||t&&t.t,s={hash:{i18n_inferred_key:true},data:o},r?r.call(t,"would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",s):l.call(t,"t","would_you_like_to_let_students_continue_in_the_cou_a4c36171","Would you like to let students continue in the course or do you want to re-lock these modules until the new requirements are completed?",s)))+"</p>"
return a}))
var $=V[W]
const Y=Object(l["useScope"])("modules")
class X extends q["a"]{renderIfNeeded(e){if(e.relock_warning){this.module_id=e.id
return this.render().show()}}dialogOptions(){return{id:"relock_modules_dialog",title:Y.t("requirements_changed","Requirements Changed"),buttons:[{text:Y.t("relock_modules","Re-Lock Modules"),click:()=>this.relock()},{text:Y.t("continue","Continue"),class:"btn-primary",click:e=>this.cancel(e)}]}}relock(){const e=`/api/v1/courses/${ENV.COURSE_ID}/modules/${this.module_id}/relock`
return this.dialog.disableWhileLoading(j.a.ajaxJSON(e,"PUT",{},()=>this.close()))}}X.prototype.template=$
var J=n("QJn8")
var Z=H.a.default
var K=Z.template,Q=Z.templates=Z.templates||{}
var ee="/work/canvas-deploy/generated/ui/shared/context-modules/jst/-vddTooltip"
Q[ee]=K((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var r,s,a="",l="function",c=this.escapeExpression,u=this
function d(e,t){var i,o,r=""
r+='href="'
if(o=n.link_href)i=o.call(e,{hash:{},data:t})
else{o=e&&e.link_href
i=typeof o===l?o.call(e,{hash:{},data:t}):o}r+=c(i)+'"'
return r}function h(e,t){var i,o,r=""
r+='\n      <div class="clearfix">\n        <dt>'
if(o=n.due_for)i=o.call(e,{hash:{},data:t})
else{o=e&&e.due_for
i=typeof o===l?o.call(e,{hash:{},data:t}):o}r+=c(i)+"</dt>\n        <dd>"
if(o=n.due_at)i=o.call(e,{hash:{},data:t})
else{o=e&&e.due_at
i=typeof o===l?o.call(e,{hash:{},data:t}):o}r+=c(i)+"</dd>\n      </div>\n    "
return r}function p(e,t){var i,o,r=""
r+='\n      <div class="clearfix">\n        <dd>'
if(o=n.more_message)i=o.call(e,{hash:{},data:t})
else{o=e&&e.more_message
i=typeof o===l?o.call(e,{hash:{},data:t}):o}r+=c(i)+"</dd>\n      </div>\n    "
return r}a+='<a title class="vdd_tooltip_link"\n  data-tooltip-selector="#vdd_tooltip_'
if(s=n.selector)r=s.call(t,{hash:{},data:o})
else{s=t&&t.selector
r=typeof s===l?s.call(t,{hash:{},data:o}):s}a+=c(r)+'"\n  '
r=n["if"].call(t,t&&t.link_href,{hash:{},inverse:u.noop,fn:u.program(1,d,o),data:o});(r||0===r)&&(a+=r)
a+="\n  >"
if(s=n.link_text)r=s.call(t,{hash:{},data:o})
else{s=t&&t.link_text
r=typeof s===l?s.call(t,{hash:{},data:o}):s}a+=c(r)+'</a>\n\n<div id="vdd_tooltip_'
if(s=n.selector)r=s.call(t,{hash:{},data:o})
else{s=t&&t.selector
r=typeof s===l?s.call(t,{hash:{},data:o}):s}a+=c(r)+'" style="display:none;">\n  <dl class="vdd_tooltip_content dl-horizontal">\n    '
r=n.each.call(t,t&&t.due_dates,{hash:{},inverse:u.noop,fn:u.program(3,h,o),data:o});(r||0===r)&&(a+=r)
a+="\n    "
r=n["if"].call(t,t&&t.more_message,{hash:{},inverse:u.noop,fn:u.program(5,p,o),data:o});(r||0===r)&&(a+=r)
a+="\n  </dl>\n</div>"
return a}))
Z.registerPartial("ui/shared/context-modules/jst/_vddTooltip.handlebars",Q["/work/canvas-deploy/generated/ui/shared/context-modules/jst/-vddTooltip"])
var te=Q[ee]
const ne=Object(l["useScope"])("publishable")
class ie extends y.a.Model{constructor(...e){super(...e)
this.publish=()=>{this.set("published",true)
return this.save()}
this.unpublish=()=>{this.set("published",false)
return this.save()}}initialize(e,t){this._root=t.root
return this.set("unpublishable",true)}disabledMessage(){return ne.t("cant_unpublish","Can't unpublish")}toJSON(){const e={}
e[this._root]=r.a.clone(this.attributes)
return e}}var oe=n("Vovh")
var re=n("gI0r")
const se=(e,t)=>{const n="context_module_content_"+t
e.find("#context_module_content_").attr("id",n)
e.find('[aria-controls="context_module_content_"]').attr("aria-controls",n)}
var ae=se
var le=n("WIG6")
var ce=n("jFoo")
var ue=n("mwIZ")
var de=n.n(ue)
var he=n("BrAc")
var pe=n("uloQ")
n("dhbk")
n("7AEQ")
n("Dhso")
n("ESjL")
n("897F")
n("8JEM")
n("aq8L")
n("qAtv")
n("TvTI")
n("wX3B")
n("bgJ8")
n("r2Yr")
var fe=n("Nuch")
var me=n("QbG7")
var ge=n("ph9R")
var _e=n("R7Yz")
var be=n("+tcD")
var ve
const ye=Object(l["useScope"])("context_modulespublic")
function xe(e,t=500){if(!e||0===e.length)return
j()("html, body").animate({scrollTop:e.offset().top},t)}function ke(e){e.find(".context_module_item.quiz").length||e.find(".cannot-duplicate").length?e.find(".duplicate_module_menu_item").attr("hidden",true):e.find(".duplicate_module_menu_item").removeAttr("hidden")}window.modules={updateTaggedItems(){},currentIndent(e){const t=e.attr("class").split(/\s/)
let n=0
for(let e=0;e<t.length;e++)if(t[e].match(/^indent_/)){const i=parseInt(t[e].substring(7),10)
isNaN(i)||(n=i)}return n},addModule(){const e=j()("#context_module_blank").clone(true).attr("id","context_module_new")
j()("#context_modules").append(e)
const t=modules.sortable_module_options
t.update=modules.updateModuleItemPositions
e.find(".context_module_items").sortable(t)
j()("#context_modules.ui-sortable").sortable("refresh")
j()("#context_modules .context_module .context_module_items.ui-sortable").each((function(){j()(this).sortable("refresh")
j()(this).sortable("option","connectWith",".context_module_items")}))
modules.editModule(e)},updateModulePositions(){const e=[]
j()("#context_modules .context_module").each((function(){e.push(j()(this).attr("id").substring("context_module_".length))}))
const t=ENV.CONTEXT_URL_ROOT+"/modules/reorder"
j()("#context_modules").loadingImage()
j.a.ajaxJSON(t,"POST",{order:e.join(",")},e=>{j()("#context_modules").loadingImage("remove")
for(const t in e){const n=e[t]
j()("#context_module_"+n.context_module.id).triggerHandler("update",n)}},e=>{j()("#context_modules").loadingImage("remove")})},updateModuleItemPositions(e,t){const n=t.item.parents(".context_module")
const i=n.attr("id").substring("context_module_".length)
const o=`${ENV.CONTEXT_URL_ROOT}/modules/${i}/reorder`
const r=[]
n.find(".context_module_items .context_module_item").each((function(){r.push(j()(this).getTemplateData({textValues:["id"]}).id)}))
n.find(".context_module_items.ui-sortable").sortable("disable")
n.disableWhileLoading(j.a.ajaxJSON(o,"POST",{order:r.join(",")},e=>{if(e&&e.context_module&&e.context_module.content_tags)for(const t in e.context_module.content_tags){const i=e.context_module.content_tags[t].content_tag
n.find("#context_module_item_"+i.id).fillTemplateData({data:{position:i.position}})}n.find(".context_module_items.ui-sortable").sortable("enable")},e=>{n.find(".content").loadingImage("remove")
n.find(".content").errorBox(ye.t("errors.reorder","Reorder failed, please try again."))}))
j()(".context_module").each((function(){ke(j()(this))}))},updateProgressions(e){if(!ENV.IS_STUDENT){e&&e()
return}const t=j()(".progression_list_url").attr("href")
j()(".context_module_item.progression_requirement:visible").length>0&&j()(".loading_module_progressions_link").show().attr("disabled",true)
j.a.ajaxJSON(t,"GET",{},(function(t){j()(".loading_module_progressions_link").remove()
const n=j()("#current_user_progression_list")
const i=[]
for(const e in t)i.push(t[e])
const o=function(){j()("#context_modules").hasClass("editable")||j()("#context_modules .context_module").each((function(){modules.updateProgressionState(j()(this))}))
e&&e()}
let r=0
var s=function(){const e=i.shift()
if(!e){o()
return}const t=e.context_module_progression
if(t.user_id==window.ENV.current_user_id){let e=n.find(".progression_"+t.context_module_id)
if(0===e.length&&n.length>0){e=n.find(".progression_blank").clone(true)
e.removeClass("progression_blank").addClass("progression_"+t.context_module_id)
n.append(e)}if(e.length>0){e.data("requirements_met",t.requirements_met)
e.data("incomplete_requirements",t.incomplete_requirements)
e.fillTemplateData({data:t})}}r++
if(r>=50){r=0
setTimeout(s,150)}else s()}
s()}),()=>{e&&e()})},updateAssignmentData:e=>j.a.ajaxJSON(ENV.CONTEXT_MODULE_ASSIGNMENT_INFO_URL,"GET",{},t=>{j()(()=>{j.a.each(t,(e,t)=>{const n=j()("#context_module_item_"+e)
const i={}
null!=t.points_possible&&(i.points_possible_display=ye.t("points_possible_short","%{points} pts",{points:ye.n(t.points_possible)}))
if(null!=t.todo_date)i.due_date_display=j.a.dateString(t.todo_date)
else if(null!=t.due_date){null!=t.past_due&&n.data("past_due",true)
i.due_date_display=j.a.dateString(t.due_date)}else if(null!=t.has_many_overrides)i.due_date_display=ye.t("Multiple Due Dates")
else if(null!=t.vdd_tooltip){t.vdd_tooltip.link_href=n.find("a.title").attr("href")
n.find(".due_date_display").html(te(t.vdd_tooltip))}else n.find(".due_date_display").remove()
n.fillTemplateData({data:i,htmlValues:["points_possible_display"]})
null===t.points_possible&&n.find(".points_possible_display").remove()
if(t.mc_objectives){n.find(".mc_objectives").text(t.mc_objectives)
n.find(".icon-assignment").hide()
n.find("#mc_icon").show()}else n.find(".mc_objectives").remove()})
Object(J["a"])()
e&&e()})},()=>{e&&j()(e)}),loadMasterCourseData(e){ENV.MASTER_COURSE_SETTINGS&&j.a.ajaxJSON(ENV.MASTER_COURSE_SETTINGS.MASTER_COURSE_DATA_URL,"GET",{tag_id:e},e=>{e.tag_restrictions&&j.a.each(e.tag_restrictions,(e,t)=>{const n=j()("#context_module_item_"+e).not(".master_course_content")
n.addClass("master_course_content")
Object.keys(t).some(e=>t[e])&&n.attr("data-master_course_restrictions",JSON.stringify(t))
this.initMasterCourseLockButton(n,t)})})},itemClass:e=>(e.content_type||"").replace(/^[A-Za-z]+::/,"")+"_"+e.content_id,updateAllItemInstances(e){j()(".context_module_item."+modules.itemClass(e)+" .title").each((function(){const t=j()(this)
t.text(e.title)
t.attr("title",e.title)}))},editModule(e){const t=j()("#add_context_module_form")
t.data("current_module",e)
const n=e.getTemplateData({textValues:["name","unlock_at","require_sequential_progress","publish_final_grade","requirement_count"]})
t.fillFormData(n,{object_name:"context_module"})
let i=false
if("context_module_new"==e.attr("id")){i=true
t.attr("action",t.find(".add_context_module_url").attr("href"))
t.find(".completion_entry").hide()
t.attr("method","POST")
t.find(".submit_button").text(ye.t("buttons.add","Add Module"))}else{t.attr("action",e.find(".edit_module_link").attr("href"))
t.find(".completion_entry").show()
t.attr("method","PUT")
t.find(".submit_button").text(ye.t("buttons.update","Update Module"))}t.find("#unlock_module_at").prop("checked",n.unlock_at).change()
t.find("#require_sequential_progress").attr("checked","true"==n.require_sequential_progress||"1"==n.require_sequential_progress)
t.find("#publish_final_grade").attr("checked","true"==n.publish_final_grade||"1"==n.publish_final_grade)
const o=j()("#context_modules .context_module").length>1&&j()("#context_modules .context_module:first").attr("id")!==e.attr("id")
t.find(".prerequisites_entry").showIf(o)
const r=[]
e.find(".prerequisites .prerequisite_criterion").each((function(){r.push(j()(this).getTemplateData({textValues:["id","name","type"]}))}))
t.find(".prerequisites_list .criteria_list").empty()
for(const e in r){const n=r[e]
t.find(".add_prerequisite_link:first").click()
"context_module"==n.type&&t.find(".prerequisites_list .criteria_list .criterion:last select").val(n.id).trigger("change")}t.find(".completion_entry .criteria_list").empty()
e.find(".content .context_module_item .criterion.defined").each((function(){const e=j()(this).parents(".context_module_item").getTemplateData({textValues:["id","criterion_type","min_score"]})
t.find(".add_completion_criterion_link").click()
t.find(".criteria_list .criterion:last").find(".id").val(e.id||"").change().end().find(".type").val(e.criterion_type||"").change().end().find(".min_score").val(e.min_score||"")}))
const s=0===e.find(".content .context_module_item").length
t.find(".prerequisites_list .criteria_list").showIf(0!=r.length).end().find(".add_prerequisite_link").showIf(o).end().find(".completion_entry .criteria_list").showIf(!s).end().find(".completion_entry .no_items_message").hide().end().find(".add_completion_criterion_link").showIf(!s)
s&&t.find(".completion_entry .no_items_message").show()
0!==e.find(".content .context_module_item .criterion.defined").length?j()(".requirement-count-radio").show():j()(".requirement-count-radio").hide()
const a=e.find(".pill li").data("requirement-count")
1==a?j()("#context_module_requirement_count_1").prop("checked",true).change():j()("#context_module_requirement_count_").prop("checked",true).change()
e.fadeIn("fast",()=>{})
e.addClass("dont_remove")
t.find(".module_name").toggleClass("lonely_entry",i)
const l=j()(".ig-header-admin .al-trigger",e)
const c=window.matchMedia("(min-width: 600px)").matches
const u=c?600:320
t.dialog({autoOpen:false,modal:true,title:i?ye.t("titles.add","Add Module"):ye.t("titles.edit","Edit Module Settings"),width:u,height:i?400:600,close(){modules.hideEditModule(true)
l.focus()
const e=j()("#context_modules .context_module")
e.length&&j()("#context_modules_sortable_container").removeClass("item-group-container--is-empty")}}).dialog("open")
e.removeClass("dont_remove")},hideEditModule(e){const t=j()("#add_context_module_form").data("current_module")
e&&t&&"context_module_new"==t.attr("id")&&!t.hasClass("dont_remove")&&t.remove()
j()("#add_context_module_form:visible").dialog("close")},addContentTagToEnv(e){ENV.MODULE_FILE_DETAILS[e.id]={content_details:e.content_details,content_id:e.content_id,id:e.id,module_id:e.context_module_id}},addItemToModule(e,t){if(!t)return j()("<div/>")
t.id=t.id||"new"
t.type=t.type||t["item[type]"]||j.a.underscore(t.content_type)
t.title=t.title||t["item[title]"]
t.new_tab=t.new_tab?"1":"0"
t.graded=t.graded?"1":"0"
let n,i="new"!==t.id?j()("#context_module_item_"+t.id):[]
if(i.length){const e=i.find(".ig-admin")
e.length&&e.detach()
n=i.clone(true)
e.length&&n.find(".ig-row").append(e)}else{n=j()("#context_module_item_blank").clone(true).removeAttr("id")
modules.evaluateItemCyoe(n,t)}n.addClass(t.type+"_"+t.id)
n.addClass(t.quiz_lti?"lti-quiz":t.type)
t.is_duplicate_able&&n.addClass("dupeable")
n.attr("aria-label",t.title)
n.find(".title").attr("title",t.title)
n.fillTemplateData({data:t,id:"context_module_item_"+t.id,hrefValues:["id","context_module_id","content_id"]})
for(let e=0;e<10;e++)n.removeClass("indent_"+e)
n.addClass("indent_"+(t.indent||0))
n.addClass(modules.itemClass(t))
let o=null
e.find(".context_module_items").children().each((function(){const e=parseInt(j()(this).getTemplateData({textValues:["position"]}).position,10)
!t.position&&0!==t.position||!e&&0!==e||null==o&&e-t.position>=0&&(o=j()(this))}))
i.length?i.replaceWith(n.show()):o?o.before(n.show()):e.find(".context_module_items").append(n.show())
ke(e)
return n},evaluateItemCyoe(e,t){if(!N["a"].isEnabled())return
e=j()(e)
const n=e.find(".publish-icon")
const i=e.find(".ig-admin")
t=t||{id:n.attr("data-module-item-id"),title:n.attr("data-module-item-name"),assignment_id:n.attr("data-assignment-id"),is_cyoe_able:"true"===n.attr("data-is-cyoeable")}
const o=N["a"].getItemData(t.assignment_id,t.is_cyoe_able)
if(o.isReleased){const e=ye.t("Released by Mastery Path: %{path}",{path:o.releasedLabel})
const t=j()('<span class="pill mastery-path-icon" aria-hidden="true" data-tooltip><i class="icon-mastery-path" /></span>').attr("title",e).append(Object(re["a"])(o.releasedLabel))
const n=j()('<span class="screenreader-only">').append(Object(re["a"])(e))
i.prepend(n)
i.prepend(t)}if(o.isCyoeAble){const e=j()('<a class="mastery_paths_link" />').attr("href",ENV.CONTEXT_URL_ROOT+"/modules/items/"+t.id+"/edit_mastery_paths?return_to="+encodeURIComponent(window.location.pathname)).attr("title",ye.t("Edit Mastery Paths for %{title}",{title:t.title})).text(ye.t("Mastery Paths"))
o.isTrigger&&i.prepend(e.clone())
i.find(".delete_link").parent().before(j()('<li role="presentation" />').append(e.prepend('<i class="icon-mastery-path" /> ')))}},getNextPosition(e){let t=0
e.find(".context_module_items").children().each((function(){const e=parseInt(j()(this).getTemplateData({textValues:["position"]}).position,10)
e>t&&(t=e)}))
return t+1},refreshModuleList(){j()("#module_list").find(".context_module_option").remove()
j()("#context_modules .context_module").each((function(){const e=j()(this)
const t=e.find(".header").getTemplateData({textValues:["name"]})
t.id=e.find(".header").attr("id")
e.find(".name").attr("title",t.name)
const n=j()(document.createElement("option"))
n.val(t.id)
n.attr("role","option").text(t.name).addClass("context_module_"+t.id).addClass("context_module_option")
j()("#module_list").append(n)}))},filterPrerequisites(e,t){const n=modules.prerequisites()
const i=e.attr("id").substring("context_module_".length)
const o=[]
for(const e in t)-1==j.a.inArray(t[e],n[i])&&o.push(t[e])
return o},prerequisites(){const e={to_visit:{},visited:{}}
j()("#context_modules .context_module").each((function(){const t=j()(this).attr("id").substring("context_module_".length)
e[t]=[]
j()(this).find(".prerequisites .criterion").each((function(){const n=j()(this).getTemplateData({textValues:["id"]}).id
if(j()(this).hasClass("context_module_criterion")){e[t].push(n)
e.to_visit[t+"_"+n]=true}}))}))
for(const t in e.to_visit)if(e.to_visit.hasOwnProperty(t)){const n=t.split("_")
if(e.visited[t])continue
e.visited[t]=true
for(const t in e[n[1]]){e[n[0]].push(e[n[1]][t])
e.to_visit[n[0]+"_"+e[n[1]][t]]=true}}delete e.to_visit
delete e.visited
return e},updateProgressionState(e){const t=e.attr("id").substring(15)
const n=j()("#current_user_progression_list .progression_"+t)
const i=n.getTemplateData({textValues:["context_module_id","workflow_state","collapsed","current_position"]})
e=j()("#context_module_"+i.context_module_id)
let o=i.workflow_state
const s=o&&o.charAt(0).toUpperCase()+o.substring(1)
e.addClass(o)
"locked"!=o&&"unlocked"!=o&&e.find(".completion_status i:visible").attr("title",s)
"completed"!=o||e.find(".progression_requirement").length||(o="")
e.fillTemplateData({data:{progression_state:o}})
let a=n.data("requirements_met")
null==a&&(a=[])
let l=n.data("incomplete_requirements")
null==l&&(l=[])
e.find(".context_module_item").each((function(){const e=j()(this)
const t=parseInt(e.getTemplateData({textValues:["position"]}).position,10)
i.current_position&&t&&i.current_position<t&&e.addClass("after_current_position")
const n=e.find(".module-item-status-icon")
const s=e.getTemplateData({textValues:["id"]}).id
const c=r.a.some(a,t=>t.id==s&&e.hasClass(t.type+"_requirement"))
if(c){e.addClass("completed_item")
we(n,"icon-check",ye.t("Completed"))}else if("completed"==o)e.hasClass("progression_requirement")&&we(n,"no-icon",ye.t("Not completed"))
else if(null!=e.data("past_due"))we(n,"icon-minimize",ye.t("This assignment is overdue"))
else{let t=null
for(const e in l)l[e].id==s&&(t=l[e])
t?null!=t.score?we(n,"icon-minimize",ye.t("You scored a %{score}.",{score:t.score})+" "+Ce(e)+"."):we(n,"icon-info",ye.t("Your submission has not been graded yet")):e.hasClass("progression_requirement")&&we(n,"icon-mark-as-read",Ce(e))}}))
"true"==i.collapsed&&e.addClass("collapsed_module")},sortable_module_options:{connectWith:".context_module_items",handle:".move_item_link",helper:"clone",placeholder:"context_module_placeholder",forcePlaceholderSize:true,axis:"y",containment:"#content"},initMasterCourseLockButton(e,t){const n=e.find(".lock-icon")
const i=j()(n).data()||{}
const o=!!("moduleItemId"in i&&ENV.MASTER_COURSE_SETTINGS.IS_MASTER_COURSE)
const r=!!("moduleItemId"in i&&ENV.MASTER_COURSE_SETTINGS.IS_CHILD_COURSE)
const s=!!("moduleItemId"in i&&Object.keys(t).some(e=>t[e]))
const a=new S({is_master_course_master_content:o,is_master_course_child_content:r,restricted_by_master_course:s})
const l={model:a,el:n[0],course_id:ENV.COURSE_ID,content_type:i.moduleType,content_id:i.contentId}
const c=new C["a"](l)
c.render()}}
var we=function(e,t,n){const i=j()("<i data-tooltip></i>")
i.attr("class",t).attr("title",n).attr("aria-label",n)
e.empty().append(i)}
var Ce=function(e){return e.hasClass("must_submit_requirement")?ye.t("Must submit the assignment"):e.hasClass("must_mark_done_requirement")?ye.t("Must mark as done"):e.hasClass("must_view_requirement")?ye.t("Must view the page"):e.hasClass("min_contribute_requirement")?ye.t("Must contribute to the page"):e.hasClass("min_score_requirement")?ye.t("Must score at least a %{score}",{score:e.getTemplateData({textValues:["min_score"]}).min_score}):ye.t("Not yet completed")}
const Oe=function(e,t){const n=e.find(".prerequisites")
let i=""
n.empty()
if(t.length>0){for(const e in t){const o=j()("<div />",{class:"prerequisite_criterion "+t[e].type+"_criterion",style:"float: left;"})
const r=j()("<span />",{text:Object(re["a"])(t[e].id),class:"id",style:"display: none;"})
const s=j()("<span />",{text:Object(re["a"])(t[e].type),class:"type",style:"display: none;"})
const a=j()("<span />",{text:Object(re["a"])(t[e].name),class:"name",style:"display: none;"})
o.append(r)
o.append(s)
o.append(a)
n.append(o)
i+=t[e].name+", "}i=i.slice(0,-2)
const e=j()("<div />",{text:Ee(i),class:"prerequisites_message"})
n.append(e)}}
const Se=function(e,t){j()("div.context_module .prerequisite_criterion .id").each((function(n,i){const o=j()(i)
const r=o.text()
if(r==e){const e=o.closest(".prerequisite_criterion")
e.find(".name").text(t)
const n=o.closest(".prerequisites")
const i=j.a.makeArray(n.find(".prerequisite_criterion .name")).map(e=>j()(e).text()).join(", ")
n.find(".prerequisites_message").text(Ee(i))}}))}
var Ee=function(e){return ye.t("Prerequisites: %{list}",{list:e})}
const Te=function(e,t){const n=e.find(".requirements_message")
if(0!=t){const e=j()('<ul class="pill"><li></li></ul></div>')
n.html(e)
const i=n.find(".pill li")
const o=1===t?ye.t("Complete One Item"):ye.t("Complete All Items")
i.text(o)
i.data("requirement-count",t)}}
modules.initModuleManagement=function(e){new F({el:j()("#content"),modules:modules})
const t=new X
const n=j()("#context_module_unlock_at")
let o=""
j()("#unlock_module_at").change((function(){const e=j()(this)
const t=j()(".unlock_module_at_details")
t.showIf(e.attr("checked"))
if(e.attr("checked"))n.val()||n.val(o)
else{o=n.val()
n.val("").triggerHandler("change")}})).triggerHandler("change")
j()(".context_module").bind("update",(e,t)=>{t.context_module.displayed_unlock_at=j.a.datetimeString(t.context_module.unlock_at)
t.context_module.unlock_at=j.a.datetimeString(t.context_module.unlock_at)
const n=j()("#context_module_"+t.context_module.id)
n.attr("aria-label",t.context_module.name)
n.find(".header").fillTemplateData({data:t.context_module,hrefValues:["id"]})
n.find(".header").attr("id",t.context_module.id)
n.find(".footer").fillTemplateData({data:t.context_module,hrefValues:["id"]})
n.find(".unlock_details").showIf(t.context_module.unlock_at&&Date.parse(t.context_module.unlock_at)>new Date)
Oe(n,t.context_module.prerequisites)
Se(t.context_module.id,t.context_module.name)
0===t.context_module.completion_requirements.length?n.find(".requirements_message").empty():Te(n,t.context_module.requirement_count)
n.find(".context_module_items .context_module_item").removeClass("progression_requirement").removeClass("min_score_requirement").removeClass("max_score_requirement").removeClass("must_view_requirement").removeClass("must_mark_done_requirement").removeClass("must_submit_requirement").removeClass("must_contribute_requirement").find(".criterion").removeClass("defined")
n.find(".ig-row").removeClass("with-completion-requirements")
for(const e in t.context_module.completion_requirements){const i=t.context_module.completion_requirements[e]
i.criterion_type=i.type
const o=n.find("#context_module_item_"+i.id)
o.find(".ig-row").addClass("with-completion-requirements")
o.find(".criterion").fillTemplateData({data:i})
o.find(".completion_requirement").fillTemplateData({data:i})
o.find(".criterion").addClass("defined")
o.find(".module-item-status-icon").show()
o.addClass(i.type+"_requirement").addClass("progression_requirement")}modules.refreshModuleList()})
j()("#add_context_module_form").formSubmit({object_name:"context_module",required:["name"],processData(e){const t=[]
j()(this).find(".prerequisites_list .criteria_list .criterion").each((function(){const e=j()(this).find(".option select").val()
e&&t.push("module_"+e)}))
e["context_module[prerequisites]"]=t.join(",")
e["context_module[completion_requirements][none]"]="none"
const n=j()(this).find(".completion_entry .criteria_list .criterion")
n.each((function(){const t=j()(this).find(".id").val()
e["context_module[completion_requirements]["+t+"][type]"]=j()(this).find(".type").val()
e["context_module[completion_requirements]["+t+"][min_score]"]=j()(this).find(".min_score").val()}))
const i=j()('input[name="context_module[requirement_count]"]:checked').val()
e["context_module[requirement_count]"]=i
return e},beforeSubmit(e){const t=j()(this).data("current_module")
t.loadingImage()
t.find(".header").fillTemplateData({data:e})
t.addClass("dont_remove")
modules.hideEditModule()
t.removeClass("dont_remove")
return t},success(e,n){var o,r
n.loadingImage("remove")
n.attr("id","context_module_"+e.context_module.id)
ae(n,e.context_module.id)
n.data("moduleId",e.context_module.id)
n.data("module-url","/courses/"+e.context_module.context_id+"/modules/"+e.context_module.id+"items?include[]=content_details")
n.data("workflow-state",e.context_module.workflow_state)
if("unpublished"==e.context_module.workflow_state){n.find(".workflow-state-action").text("Publish")
n.find(".workflow-state-icon").addClass("publish-module-link").removeClass("unpublish-module-link")
n.addClass("unpublished_module")}j()("#no_context_modules_message").slideUp()
j()("#expand_collapse_all").show()
Le()
const s=n.find(".publish-icon")
if(!s.data("id")){const t=function(t,i){const o=n.find(t)
o.attr(i,o.attr(i).replace("{{ id }}",e.context_module.id))}
t("span.collapse_module_link","href")
t("span.expand_module_link","href")
t(".add_module_item_link","rel")
t(".add_module_item_link","rel")
const i={moduleType:"module",id:e.context_module.id,courseId:e.context_module.context_id,published:"published"==e.context_module.workflow_state,publishable:true}
const o=d(s,i)
y(o.model,o)}t.renderIfNeeded(e.context_module)
n.triggerHandler("update",e)
const a=n.find(".module_dnd")[0]
if(a){const t=document.getElementById("context_modules")
_.a.render(Object(i["a"])(E["a"],{courseId:ENV.course_id,moduleId:e.context_module.id,contextModules:t}),a)}null!==(o=window.ENV)&&void 0!==o&&null!==(r=o.FEATURES)&&void 0!==r&&r.new_math_equation_handling&&ge["a"].isMathMLOnPage()&&(ge["a"].isMathJaxLoaded()?ge["a"].reloadElement("content"):ge["a"].loadMathJax(void 0))},error(e,t){t.loadingImage("remove")}})
j()("#add_context_module_form .add_prerequisite_link").click((function(e){e.preventDefault()
const t=j()(this).parents("#add_context_module_form")
const n=t.data("current_module")
const i=j()("#module_list").clone(true).removeAttr("id")
const o=t.find("#criterion_blank_prereq").clone(true).removeAttr("id")
i.find("."+n.attr("id")).remove()
const r=[]
j()("#context_modules .context_module").each((function(){(j()(this)[0]==n[0]||r.length>0)&&r.push(j()(this).attr("id"))}))
for(const e in r)i.find("."+r[e]).hide()
i.attr("id","module_list_prereq")
o.find(".option").empty().append(i.show())
j()('<label for="module_list_prereq" class="screenreader-only" />').text(ye.t("Select prerequisite module")).insertBefore(i)
t.find(".prerequisites_list .criteria_list").append(o).show()
o.show()
i.change(e=>{const t=j()(e.target)
const n=t.val()?t.find("option:selected").text():""
const i=t.closest(".criterion")
const o=i.find(".delete_criterion_link")
o.attr("aria-label",ye.t("Delete prerequisite %{title}",{title:n}))})
i.focus()}))
j()("#add_context_module_form .add_completion_criterion_link").click((function(e){e.preventDefault()
const t=j()(this).parents("#add_context_module_form")
const n=t.data("current_module")
const i=j()("#completion_criterion_option").clone(true).removeAttr("id")
const o=i.find("select.id")
const r=t.find("#criterion_blank_req").clone(true).removeAttr("id")
r.find(".prereq_desc").remove()
modules.prerequisites()
const s={}
n.find(".content .context_module_item").not(".context_module_sub_header").each((function(){let e
const t=j()(this).getTemplateData({textValues:["id","type"]})
t.title=j()(this).find(".title").attr("title")
"quiz"===t.type||"lti-quiz"===t.type||j()(this).hasClass("lti-quiz")?e=ye.t("optgroup.quizzes","Quizzes"):"assignment"===t.type?e=ye.t("optgroup.assignments","Assignments"):"attachment"===t.type?e=ye.t("optgroup.files","Files"):"external_url"===t.type?e=ye.t("optgroup.external_urls","External URLs"):"context_external_tool"===t.type?e=ye.t("optgroup.external_tools","External Tools"):"discussion_topic"===t.type?e=ye.t("optgroup.discussion_topics","Discussions"):"wiki_page"===t.type&&(e=ye.t("Pages"))
let n=s[e]
if(!n){n=s[e]=j()(document.createElement("optgroup"))
n.attr("label",e)
o.append(n)}const i=t.title
const r=j()(document.createElement("option"))
r.val(t.id).text(i)
n.append(r)}))
r.find(".option").empty().append(i)
i.find(".id").change()
i.slideDown((function(){e.originalEvent&&j()("select:first",j()(this)).focus()}))
t.find(".completion_entry .criteria_list").append(r).show()
r.slideDown()
j()(".requirement-count-radio").show()
j()("#context_module_requirement_count_").change()}))
j()("#completion_criterion_option .id").change((function(){const e=j()(this).parents(".completion_criterion_option")
const t=j()("#context_module_item_"+j()(this).val()).getTemplateData({textValues:["type","graded"]})
e.find(".type option").hide().attr("disabled",true).end().find(".type option.any").show().attr("disabled",false).end().find(".type option."+t.type).show().attr("disabled",false)
"1"==t.graded&&e.find(".type option.graded").show().attr("disabled",false)
e.find(".type").val(e.find(".type option."+t.criterion_type+":first").val())
e.find(".type").change()}))
j()("#completion_criterion_option .type").change((function(){const e=j()(this).parents(".completion_criterion_option")
e.find(".min_score_box").showIf("min_score"==j()(this).val())
const t=e.find(".id").val()
const n=j.a.trim(j()("#context_module_item_"+t+" .points_possible_display").text().split(" ")[0])
if(n.length>0&&"min_score"==j()(this).val()){e.find(".points_possible").text(n)
e.find(".points_possible_parent").show()}else e.find(".points_possible_parent").hide()
const i=e.find(".id option:selected").text()
const o=e.find(".type option:selected").text()
e.closest(".criterion").find(".delete_criterion_link").attr("aria-label",ye.t("Delete requirement %{item} (%{type})",{item:i,type:o}))}))
j()("#add_context_module_form .requirement-count-radio .ic-Radio input").change(()=>{if(j()("#context_module_requirement_count_").prop("checked"))j()(".require-sequential").show()
else{j()(".require-sequential").hide()
j()("#require_sequential_progress").prop("checked",false)}})
j()("#add_context_module_form .delete_criterion_link").click((function(e){e.preventDefault()
const t=j()(this).closest(".criteria_list")
const n=j()(this).parents(".completion_entry")
const i=j()(this).closest(".criterion")
const o=i.prev()
const r=o.length?j()(".delete_criterion_link",o):j()(".add_prerequisite_or_requirement_link",j()(this).closest(".form-section"))
i.slideUp((function(){j()(this).remove()
0===t.html().length&&0!==n.length&&j()(".requirement-count-radio").fadeOut("fast")
r.focus()}))}))
j()(".duplicate_module_link").live("click",(function(e){e.preventDefault()
const t=j()(this).attr("href")
const n=j()(this).parents(".context_module")
const o=ve||(ve=Object(i["a"])(m,{}))
const r=j()('<div id="temporary-spinner" class="item-group-condensed"></div>')
r.insertAfter(n)
_.a.render(o,j()("#temporary-spinner")[0])
j.a.screenReaderFlashMessage(ye.t("Duplicating Module, this may take some time"))
const s=function(e){e.data.ENV_UPDATE.forEach(e=>{ENV.MODULE_FILE_DETAILS[e.id]=e})
const t=e.data.context_module.id
const o=e.data.context_module.context_id
const s=`/courses/${o}/modules`
he["a"].get(s).then(e=>{const o=j()(e.data)
const s=o.find("#context_module_"+t)
r.remove()
s.insertAfter(n)
const a=s.find(".module_dnd")[0]
if(a){const e=document.getElementById("context_modules")
_.a.render(Object(i["a"])(E["a"],{courseId:ENV.course_id,moduleId:t,contextModules:e}),a)}s.find(".collapse_module_link").focus()
modules.updateAssignmentData()
j()(".delete_module_link").die()
j()(".duplicate_module_link").die()
j()(".duplicate_item_link").die()
j()(".add_module_link").die()
j()(".edit_module_link").die()
j()("#context_modules").off("addFileToModule")
j()("#add_context_module_form .add_prerequisite_link").off()
j()("#add_context_module_form .add_completion_criterion_link").off()
j()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",De)
modules.initModuleManagement(s)}).catch(Object(pe["c"])(ye.t("Error rendering duplicated module")))}
he["a"].post(t,{}).then(s).catch(Object(pe["c"])(ye.t("Error duplicating module")))}))
j()(".delete_module_link").live("click",(function(e){e.preventDefault()
j()(this).parents(".context_module").confirmDelete({url:j()(this).attr("href"),message:ye.t("confirm.delete","Are you sure you want to delete this module?"),cancelled(){j()(".ig-header-admin .al-trigger",j()(this)).focus()},success(e){const t=e.context_module.id
j()(".context_module .prerequisites .criterion").each((function(){const e=j()(this).getTemplateData({textValues:["id","type"]})
"context_module"==e.type&&e.id==t&&j()(this).remove()}))
const n=j()(this).prev()
const i=j()("#content .header-bar .add_module_link")
const o=n.length?j()(".ig-header-admin .al-trigger",n):i
const r=j()(this).find(".module_dnd")[0]
r&&_.a.unmountComponentAtNode(r)
j()(this).slideUp((function(){j()(this).remove()
modules.updateTaggedItems()
o.focus()
const e=j()("#context_modules .context_module")
e.length||j()("#expand_collapse_all").hide()}))
j.a.flashMessage(ye.t("Module %{module_name} was successfully deleted.",{module_name:e.context_module.name}))}})}))
j()(".outdent_item_link,.indent_item_link").live("click",(function(e,t,n){e.preventDefault()
const i=j()(t)
const o=i&&i.attr("id")?"#"+i.attr("id"):t&&"."+i.attr("class")
const r=j()(this).closest(".cog-menu-container").children(".al-trigger")
const s=j()(this).hasClass("indent_item_link")
const a=j()(this).parents(".context_module_item")
let l=modules.currentIndent(a)
l=Math.max(Math.min(l+(s?1:-1),5),0)
a.loadingImage({image_size:"small"})
j.a.ajaxJSON(j()(this).attr("href"),"PUT",{"content_tag[indent]":l},e=>{a.loadingImage("remove")
const t=j()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
modules.updateAssignmentData()},e=>{}).done(()=>{o?setTimeout(()=>{const e="."+j()(n).attr("class").split(" ").join(".")
j()(o).find(e).focus()},0):r.focus()})}))
j()(".edit_item_link").live("click",(function(e){e.preventDefault()
const t=j()(this).closest(".cog-menu-container").children(".al-trigger")
const n=j()(this).parents(".context_module_item")
const i=n.getTemplateData({textValues:["url","indent","new_tab"]})
i.title=n.find(".title").attr("title")
i.indent=modules.currentIndent(n)
j()("#edit_item_form").find(".external").showIf(n.hasClass("external_url")||n.hasClass("context_external_tool"))
j()("#edit_item_form").attr("action",j()(this).attr("href"))
j()("#edit_item_form").fillFormData(i,{object_name:"content_tag"})
const o=j()("#edit_item_form #content_tag_title")
const r=n.data().master_course_restrictions
const s=!de()(ENV,"MASTER_COURSE_SETTINGS.IS_MASTER_COURSE")&&!!de()(r,"content")
o.attr("disabled",s)
j()("#edit_item_form").dialog({title:ye.t("titles.edit_item","Edit Item Details"),close(){j()("#edit_item_form").hideErrors()
t.focus()},minWidth:320}).fixDialogButtons()}))
j()("#edit_item_form .cancel_button").click(e=>{j()("#edit_item_form").dialog("close")})
j()("#edit_item_form").formSubmit({beforeSubmit(e){if(""==e["content_tag[title]"]){j()("#content_tag_title").errorBox(ye.t("Title is required"))
return false}j()(this).loadingImage()},success(e){j()(this).loadingImage("remove")
const t=j()("#context_module_"+e.content_tag.context_module_id)
modules.addItemToModule(t,e.content_tag)
t.find(".context_module_items.ui-sortable").sortable("refresh")
0!=e.content_tag.content_id&&"ContextExternalTool"!=e.content_tag.content_type&&modules.updateAllItemInstances(e.content_tag)
modules.updateAssignmentData()
j()(this).dialog("close")},error(e){j()(this).loadingImage("remove")
j()(this).formErrors(e)}})
j()(".delete_item_link").live("click",(function(e){e.preventDefault()
const t=j()(this).closest(".cog-menu-container").children(".al-trigger")
const n=j()(this).parents(".context_module_items").children()
const i=j()(this).parents(".context_module")
const o=n.index(j()(this).parents(".context_module_item"))
const r=o-1
let s
if(r>=0){const e=n[r]
s=j()(e).hasClass("context_module_sub_header")?j()(e).find(".cog-menu-container .al-trigger"):j()(e).find(".item_link")}else s=j()(this).closest(".editable_context_module").find("button.al-trigger")
j()(this).parents(".context_module_item").confirmDelete({url:j()(this).attr("href"),message:ye.t("confirm.delete_item","Are you sure you want to remove this item from the module?"),success(e){delete ENV.MODULE_FILE_DETAILS[e.content_tag.id]
j()(this).slideUp((function(){j()(this).remove()
modules.updateTaggedItems()
s.focus()
ke(i)}))
j.a.flashMessage(ye.t("Module item %{module_item_name} was successfully deleted.",{module_item_name:e.content_tag.title}))},cancelled(){t.focus()}})}))
j()(".move_module_item_link").on("click keyclick",(function(e){e.preventDefault()
const t=j()(this).parents(".context_module_item")[0]
const n=document.querySelectorAll("#context_modules .context_module")
const i=Array.prototype.map.call(n,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const n=e.querySelector(".header > .collapse_module_link > .name").textContent
const i=e.querySelectorAll(".context_module_item")
const o=Array.prototype.map.call(i,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:n,items:o}})
const o={title:ye.t("Move Module Item"),items:[{id:t.getAttribute("id").substring("context_module_item_".length),title:t.querySelector(".title").textContent.trim()}],moveOptions:{groupsLabel:ye.t("Modules"),groups:i},formatSaveUrl:({groupId:e})=>`${ENV.CONTEXT_URL_ROOT}/modules/${e}/reorder`,onMoveSuccess:({data:e,itemIds:t,groupId:n})=>{const i=t[0]
const o=j()(`#context_module_${n} .ui-sortable`)
o.sortable("disable")
const r=document.querySelector("#context_module_item_"+i)
o[0].appendChild(r)
const s=e.context_module.content_tags.map(e=>e.content_tag.id)
Object(b["c"])(s,o[0],e=>"#context_module_item_"+e)
o.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(o,document.getElementById("not_right_side"))}))
j()(".move_module_link").on("click keyclick",(function(e){e.preventDefault()
const t=j()(this).parents(".context_module")[0]
const n=document.querySelectorAll("#context_modules .context_module")
const i=Array.prototype.map.call(n,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const n=e.querySelector(".header > .collapse_module_link > .name").textContent
return{id:t,title:n}})
const o={title:ye.t("Move Module"),items:[{id:t.getAttribute("id").substring("context_module_".length),title:t.querySelector(".header > .collapse_module_link > .name").textContent}],moveOptions:{siblings:i},formatSaveUrl:()=>ENV.CONTEXT_URL_ROOT+"/modules/reorder",onMoveSuccess:e=>{const t=document.querySelector("#context_modules.ui-sortable")
Object(b["c"])(e.data.map(e=>e.context_module.id),t,e=>"#context_module_"+e)
j()(t).sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(o,document.getElementById("not_right_side"))}))
j()(".move_module_contents_link").on("click keyclick",(function(e){e.preventDefault()
const t=j()(this).parents(".context_module")[0]
const n=document.querySelectorAll("#context_modules .context_module")
const i=Array.prototype.map.call(n,e=>{const t=e.getAttribute("id").substring("context_module_".length)
const n=e.querySelector(".header > .collapse_module_link > .name").textContent
const i=e.querySelectorAll(".context_module_item")
const o=Array.prototype.map.call(i,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
return{id:t,title:n,items:o}})
const o=t.querySelectorAll(".context_module_item")
const r=Array.prototype.map.call(o,e=>({id:e.getAttribute("id").substring("context_module_item_".length),title:e.querySelector(".title").textContent.trim()}))
if(0===r.length)return
r[0].groupId=t.getAttribute("id").substring("context_module_".length)
const s={title:ye.t("Move Contents Into"),items:r,moveOptions:{groupsLabel:ye.t("Modules"),groups:i,excludeCurrent:true},formatSaveUrl:({groupId:e})=>`${ENV.CONTEXT_URL_ROOT}/modules/${e}/reorder`,onMoveSuccess:({data:e,itemIds:t,groupId:n})=>{const i=j()(`#context_module_${n} .ui-sortable`)
i.sortable("disable")
t.forEach(e=>{const t=document.querySelector("#context_module_item_"+e)
i[0].appendChild(t)})
const o=e.context_module.content_tags.map(e=>e.content_tag.id)
Object(b["c"])(o,i[0],e=>"#context_module_item_"+e)
i.sortable("enable").sortable("refresh")},focusOnExit:()=>t.querySelector(".al-trigger")}
Object(b["b"])(s,document.getElementById("not_right_side"))}))
j()(".drag_and_drop_warning").on("focus",e=>{j()(e.currentTarget).removeClass("screenreader-only")})
j()(".drag_and_drop_warning").on("blur",e=>{j()(e.currentTarget).addClass("screenreader-only")})
j()(".edit_module_link").live("click",(function(e){e.preventDefault()
modules.editModule(j()(this).parents(".context_module"))}))
j()(".add_module_link").live("click",e=>{e.preventDefault()
modules.addModule()})
j()("#context_modules").on("addFileToModule",e=>{e.preventDefault()
const t=e.originalEvent.moduleId
const n=e.originalEvent.attachment
const i={"item[id]":n.id,"item[type]":"attachment","item[title]":n.display_name}
r(t,false)(i)})
j()(".add_module_item_link").on("click",(function(e){e.preventDefault()
const t=j()(e.currentTarget)
t.blur()
const n=j()(this).closest(".context_module")
if(n.hasClass("collapsed_module")){n.find(".expand_module_link").triggerHandler("click",()=>{n.find(".add_module_item_link").click()})
return}if(T["a"]&&T["a"].selectContentDialog){const e=j()(this).parents(".context_module").find(".header").attr("id")
const n=j()(this).parents(".context_module").find(".name").attr("title")
const i={for_modules:true,context_module_id:e}
const o=window.matchMedia("(min-width: 500px)").matches
const s=window.matchMedia("(min-width: 770px)").matches
const a=s?770:o?500:320
i.select_button_text=ye.t("buttons.add_item","Add Item")
i.holder_name=n
i.height=550
i.width=a
i.dialog_title=ye.t("titles.add_item","Add Item to %{module}",{module:n})
i.close=function(){t.focus()}
i.submit=r(e)
T["a"].selectContentDialog(i)}}))
function r(e,t=true){return n=>{if(n["item[assignment_id]"])return window.location.reload()
const i=j()("#context_module_"+e)
let o=modules.getNextPosition(i)
n.content_details=["items"]
n["item[position]"]=o++
let r=modules.addItemToModule(i,n)
i.find(".context_module_items.ui-sortable").sortable("refresh").sortable("disable")
const s=i.find(".add_module_item_link").attr("rel")
i.disableWhileLoading(j.a.ajaxJSON(s,"POST",n,e=>{r.remove()
e.content_tag.type=n["item[type]"]
r=modules.addItemToModule(i,e.content_tag)
modules.addContentTagToEnv(e.content_tag)
i.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")
l(r,e.content_tag)
h(r,e.content_tag)
modules.updateAssignmentData()
r.find(".lock-icon").data({moduleType:e.content_tag.type,contentId:e.content_tag.content_id,moduleItemId:e.content_tag.id})
modules.loadMasterCourseData(e.content_tag.id)}),{onComplete(){t&&i.find(".add_module_item_link").focus()}})}}j()(".duplicate_item_link").live("click",(function(e){e.preventDefault()
const t=j()(this).closest(".context_module")
const n=j()(this).attr("href")
he["a"].post(n).then(({data:e})=>{const n=modules.addItemToModule(t,e.content_tag)
l(n,e.content_tag)
h(n,e.content_tag)
modules.updateAssignmentData()
n.find(".lock-icon").data({moduleType:e.content_tag.type,contentId:e.content_tag.content_id,moduleItemId:e.content_tag.id})
modules.loadMasterCourseData(e.content_tag.id)
t.find(".context_module_items.ui-sortable").sortable("disable")
e.new_positions.forEach(({content_tag:e})=>{t.find("#context_module_item_"+e.id).fillTemplateData({data:{position:e.position}})})
j()(`#context_module_item_${e.content_tag.id} .item_link`).focus()
t.find(".context_module_items.ui-sortable").sortable("enable").sortable("refresh")}).catch(Object(pe["c"])("Error duplicating item"))}))
j()("#add_module_prerequisite_dialog .cancel_button").click(()=>{j()("#add_module_prerequisite_dialog").dialog("close")})
j()(".delete_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=j()(this).parents(".criterion")
const n=[]
j()(this).parents(".context_module .prerequisites .criterion").each((function(){if(j()(this)[0]!=t[0]){const e=j()(this).getTemplateData({textValues:["id","type"]})
const t="context_module"==e.type?"module":e.type
n.push(t+"_"+e.id)}}))
const i=j()(this).parents(".context_module").find(".edit_module_link").attr("href")
const o={"context_module[prerequisites]":n.join(",")}
t.dim()
j.a.ajaxJSON(i,"PUT",o,e=>{j()("#context_module_"+e.context_module.id).triggerHandler("update",e)})}))
j()("#add_module_prerequisite_dialog .submit_button").click((function(){const e=j()("#add_module_prerequisite_dialog .prerequisite_module_select select").val()
if(!e)return
j()("#add_module_prerequisite_dialog").loadingImage()
const t=[]
t.push("module_"+e)
const n=j()("#context_module_"+j()("#add_module_prerequisite_dialog").getTemplateData({textValues:["context_module_id"]}).context_module_id)
n.find(".prerequisites .criterion").each((function(){t.push("module_"+j()(this).getTemplateData({textValues:["id","name","type"]}).id)}))
const i=n.find(".edit_module_link").attr("href")
const o={"context_module[prerequisites]":t.join(",")}
j.a.ajaxJSON(i,"PUT",o,e=>{j()("#add_module_prerequisite_dialog").loadingImage("remove")
j()("#add_module_prerequisite_dialog").dialog("close")
j()("#context_module_"+e.context_module.id).triggerHandler("update",e)},e=>{j()("#add_module_prerequisite_dialog").loadingImage("remove")
j()("#add_module_prerequisite_dialog").formErrors(e)})}))
j()(".context_module .add_prerequisite_link").live("click",(function(e){e.preventDefault()
const t=j()(this).parents(".context_module").find(".header").getTemplateData({textValues:["name","id"]})
j()("#add_module_prerequisite_dialog").fillTemplateData({data:{module_name:t.name,context_module_id:t.id}})
const n=j()(this).parents(".context_module")
const i=j()("#module_list").clone(true).removeAttr("id")
i.find("."+n.attr("id")).remove()
const o=[]
j()("#context_modules .context_module").each((function(){(j()(this)[0]==n[0]||o.length>0)&&o.push(j()(this).getTemplateData({textValues:["id"]}).id)}))
for(const e in o)i.find(".context_module_"+o[e]).hide()
j()("#add_module_prerequisite_dialog").find(".prerequisite_module_select").empty().append(i.show())
j()("#add_module_prerequisite_dialog").dialog({title:ye.t("titles.add_prerequisite","Add Prerequisite to %{module}",{module:t.name}),width:400})}))
j()("#add_context_module_form .cancel_button").click(e=>{modules.hideEditModule(true)})
requestAnimationFrame((function(){const e=[]
j()("#context_modules .context_module_items").each((function(){e.push(j()(this))}))
var t=function(){if(e.length>0){const n=e.shift()
const i=modules.sortable_module_options
const o=j()("#k5-course-header").closest(".ic-Dashboard-tabs").eq(0)
const r=j()("#k5-modules-container")
o.length>0&&r.length>0&&(i.sort=e=>c(e,r,o))
i.update=modules.updateModuleItemPositions
n.sortable(i)
requestAnimationFrame(t)}}
t()
j()("#context_modules").sortable({handle:".reorder_module_link",helper:"clone",axis:"y",update:modules.updateModulePositions})
modules.refreshModuleList()
modules.refreshed=true}))
function l(e,t){const n={moduleType:t.type,id:t.publishable_id,moduleItemName:t.moduleItemName,moduleItemId:t.id,moduleId:t.context_module_id,courseId:t.context_id,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable,content_details:t.content_details,isNew:true}
const i=d(e.find(".publish-icon"),n)
y(i.model,i)}var c=function(e,t,n){const i=null===t||void 0===t?void 0:t.position().top
const o=(null===n||void 0===n?void 0:n.position().top)+n.height()
const r=i<o
if(r&&e.pageY<o+30){const t=window.scrollY-.05*e.clientY
j()("html, body").scrollTop(t)}}
var d=function(e,t){t=t||e.data()
if("attachment"==t.moduleType){let n={}
if(t.isNew){n=t||{}
e.attr("data-module-type","attachment")}else n=ENV.MODULE_FILE_DETAILS[parseInt(t.moduleItemId,10)]
n.content_details=n.content_details||{}
const i=new s["a"]({type:"file",id:n.content_id||n.id,locked:n.content_details.locked,hidden:n.content_details.hidden,unlock_at:n.content_details.unlock_at,lock_at:n.content_details.lock_at,display_name:n.content_details.display_name,thumbnail_url:n.content_details.thumbnail_url,usage_rights:n.content_details.usage_rights})
i.url=function(){return"/api/v1/files/"+this.id}
const o={model:i,togglePublishClassOn:e.parents(".ig-row")[0],userCanEditFilesForContext:ENV.MODULE_FILE_PERMISSIONS.manage_files_edit,usageRightsRequiredForContext:ENV.MODULE_FILE_PERMISSIONS.usage_rights_required,fileName:i.displayName()}
const r=u.a.createElement(a["a"],o)
_.a.render(r,e[0])
return{model:i}}const n=new k({module_type:t.moduleType,content_id:t.contentId,id:t.id,module_id:t.moduleId,module_item_id:t.moduleItemId,module_item_name:t.moduleItemName,course_id:t.courseId,published:t.published,publishable:t.publishable,unpublishable:t.unpublishable})
const i={model:n,title:t.publishTitle,el:e[0]}
const o=new w["a"](i)
const r=e.closest(".ig-row")
t.published&&r.addClass("ig-published")
o.render()
return o}
const h=(e,t)=>{const n=e.find(".module_item_copy_to")
if(0===n.length)return
const i=e.find(".module_item_send_to")
const o=t.content_id
const r=t.type.replace(/^wiki_/,"")
const s="quiz"===r?"quizzes":r+"s"
if(["assignment","discussion_topic","page","quiz"].includes(r)){n.data("select-class",s)
n.data("select-id",o)
i.data("content-type",r)
i.data("content-id",o)}else{n.closest("li").remove()
i.closest("li").remove()}}
const p={}
const f=function(e,t){let n,i,o,r
i=p[je(e)||je(t)]
if(i)for(n=0;n<i.length;n++){o=i[n]
r=o.model.parse(e)
if("File"==r.type)o.model.set({locked:!r.published})
else{o.model.set({published:r.published})
o.model.view.render()}}}
const g=function(e){const n=e.publish,i=e.unpublish
e.publish=function(){return n.apply(e,arguments).done(n=>{n.publish_warning&&j.a.flashWarning(ye.t("Some module items could not be published"))
t.renderIfNeeded(n)
e.fetch({data:{include:"items"}}).done(t=>{for(let n=0;n<t.items.length;n++)f(t.items[n],e)})})}
e.unpublish=function(){return i.apply(e,arguments).done(()=>{e.fetch({data:{include:"items"}}).done(t=>{for(let n=0;n<t.items.length;n++)f(t.items[n],e)})})}}
const v=function(e){const t=e.publish,n=e.unpublish
e.publish=function(){return t.apply(e,arguments).done(t=>{f(j.a.extend({published:true},t),e)})}
e.unpublish=function(){return n.apply(e,arguments).done(t=>{f(j.a.extend({published:false},t),e)})}}
var y=function(e,t){const n=je(e)
null===n?g(e):v(e)
p[n]||(p[n]=[])
p[n].push({model:e,view:t})}
const x=e||j()("#context_modules")
x.find(".publish-icon").each((e,t)=>{const n=j()(t)
if(n.data("id")){const e=d(n)
y(e.model,e)}})
j()(".module-publish-link").each((e,t)=>{const n=j()(t)
const i=new ie({published:n.hasClass("published"),id:n.attr("data-id")},{url:n.attr("data-url"),root:"module"})
const o=new oe["a"]({model:i,el:n})
o.render()})}
const Ie={page:"wiki_page",discussion:"discussion_topic",external_tool:"context_external_tool",sub_header:"context_module_sub_header"}
function je(e){if(null===e)return null
let t=e.attributes||e,n=j.a.underscore(t.module_type||t.type),i=t.content_id||t.id
n=Ie[n]||n
if(n&&"module"!==n){if("wiki_page"==n){n="wiki_page"
i=t.page_url||t.id}else"context_module_sub_header"!==n&&"external_url"!==n&&"context_external_tool"!=n||(i=t.id)
return n+"_"+i}return null}const Le=function(){let e=false
j()("#context_modules .context_module .content").each((function(){"block"===j()(this).css("display")&&(e=true)}))
j()("#expand_collapse_all").text(e?ye.t("Collapse All"):ye.t("Expand All"))
j()("#expand_collapse_all").attr("aria-label",e?ye.t("Collapse All Modules"):ye.t("Expand All Modules"))
j()("#expand_collapse_all").data("expand",!e)
j()("#expand_collapse_all").attr("aria-expanded",e?"true":"false")}
var De=function(e){e.preventDefault()
const t=null
const n=j()(this).hasClass("collapse_module_link")?"1":"0"
const i=j()(this).parents(".context_module")
const o=0===i.find(".content .context_module_items").children().length
const r=function(e){const n=function(){i.find(".collapse_module_link").css("display",i.find(".content:visible").length>0?"inline-block":"none")
i.find(".expand_module_link").css("display",0===i.find(".content:visible").length?"inline-block":"none")
if(i.find(".content:visible").length>0){i.find(".footer .manage_module").css("display","")
i.toggleClass("collapsed_module",false)
i.find(".collapse_module_link").focus()
j.a.screenReaderFlashMessage(ye.t("Expanded"))}else{i.find(".footer .manage_module").css("display","")
i.toggleClass("collapsed_module",true)
i.find(".expand_module_link").focus()
j.a.screenReaderFlashMessage(ye.t("Collapsed"))}Le()
t&&j.a.isFunction(t)&&t()}
if(e){i.find(".content").show()
n()}else i.find(".content").slideToggle(n)}
o&&i.loadingImage()
const s=j()(this).attr("href")
j.a.ajaxJSON(s,"POST",{collapse:n},e=>{if(o){i.loadingImage("remove")
for(const t in e)modules.addItemToModule(i,e[t].content_tag)
i.find(".context_module_items.ui-sortable").sortable("refresh")
r()
modules.updateProgressionState(i)}},e=>{i.loadingImage("remove")})
"1"!=n&&o||r()}
function Re(e){return"none"===e.style.display||e.parentElement.classList.contains("collapsed_module")}modules.updateAssignmentData(()=>{modules.updateProgressions((function(){if(window.location.hash&&!window.location.hash.startsWith("#!"))try{xe(j()(window.location.hash))}catch(e){}else{var e
const t=null===(e=document.querySelector(".context_module"))||void 0===e?void 0:e.querySelector(".content")
if(!t||Re(t)){const e=[...document.querySelectorAll(".context_module .content")].find(e=>!Re(e))
e&&xe(j()(e).parents(".context_module"))}}}))})
j()(document).ready((function(){j()(".context_module").each((function(){ke(j()(this))}))
if(ENV.IS_STUDENT){j()(".context_module").addClass("student-view")
j()(".context_module_item .ig-row").addClass("student-view")}j()(".external_url_link").click((function(e){R.externalUrlLinkClick(e,j()(this))}))
j()(".datetime_field").datetime_field()
j()(".context_module").live("mouseover",(function(){j()(".context_module_hover").removeClass("context_module_hover")
j()(this).addClass("context_module_hover")}))
j()(".context_module_item").live("mouseover focus",(function(){j()(".context_module_item_hover").removeClass("context_module_item_hover")
j()(this).addClass("context_module_item_hover")}))
j()(".context_module_item").each((e,t)=>{modules.evaluateItemCyoe(t)})
let e=null
const t=function(e){if(e.hasClass("context_module")){j()(".context_module_hover").removeClass("context_module_hover")
j()(".context_module_item_hover").removeClass("context_module_item_hover")
e.addClass("context_module_hover")}else if(e.hasClass("context_module_item")){j()(".context_module_item_hover").removeClass("context_module_item_hover")
j()(".context_module_hover").removeClass("context_module_hover")
e.addClass("context_module_item_hover")
e.parents(".context_module").addClass("context_module_hover")}e.find(":tabbable:first").focus()}
const n=function(n){n=n||{}
let i
if(e){if(e&&e.hasClass("context_module")){i=n.selectWhenModuleFocused&&n.selectWhenModuleFocused.item
i=i.length?i:n.selectWhenModuleFocused&&n.selectWhenModuleFocused.fallbackModule}else if(e&&e.hasClass("context_module_item")){i=n.selectWhenModuleItemFocused&&n.selectWhenModuleItemFocused.item
i=i.length?i:n.selectWhenModuleItemFocused&&n.selectWhenModuleItemFocused.fallbackModule}}else i=j()(".context_module:first")
t(i)
return i}
const o=function(e){const t=e&&e.closest(".context_module_item_hover").length?".context_module_item_hover":".context_module_hover"
return e.closest(t)}
if(!ENV.disable_keyboard_shortcuts){const t=j()(document)
t.keycodes("k up",t=>{const i={selectWhenModuleFocused:{item:e&&e.prev(".context_module").find(".context_module_item:visible:last"),fallbackModule:e&&e.prev(".context_module")},selectWhenModuleItemFocused:{item:e&&e.prev(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module")}}
const o=n(i)
o.length&&(e=o)})
t.keycodes("j down",t=>{const i={selectWhenModuleFocused:{item:e&&e.find(".context_module_item:visible:first"),fallbackModule:e&&e.next(".context_module")},selectWhenModuleItemFocused:{item:e&&e.next(".context_module_item:visible"),fallbackModule:e&&e.parents(".context_module").next(".context_module")}}
const o=n(i)
o.length&&(e=o)})
t.keycodes("e d space",t=>{if(!e)return
const n=o(e)
const i=n.hasClass("context_module_item_hover")
if("e"==t.keyString)i?e.find(".edit_item_link:first").click():e.find(".edit_module_link:first").click()
else if("d"==t.keyString)if(i){e.find(".delete_item_link:first").click()
e=e.parents(".context_module")}else{e.find(".delete_module_link:first").click()
e=null}else"space"==t.keyString&&(i?e.find(".move_module_item_link:first").click():e.find(".move_module_link:first").click())
t.preventDefault()})
t.keycodes("n",e=>{j()(".add_module_link:visible:first").click()
e.preventDefault()})
t.keycodes("i o",n=>{if(!e)return
const i=e.attr("id")
"i"==n.keyString?e.find(".indent_item_link:first").trigger("click",[e,document.activeElement]):"o"==n.keyString&&e.find(".outdent_item_link:first").trigger("click",[e,document.activeElement])
t.ajaxStop(()=>{e=j()("#"+i)})})}if(j()("#context_modules").hasClass("editable")){requestAnimationFrame(()=>{modules.initModuleManagement()})
modules.loadMasterCourseData()}j()(".context_module").find(".expand_module_link,.collapse_module_link").bind("click keyclick",De)
j()(document).fragmentChange((e,t)=>{if("#student_progressions"==t)j()(".module_progressions_link").trigger("click")
else if(!t.startsWith("#!")){const e=j()(t.replace(/module/,"context_module"))
e.hasClass("collapsed_module")&&e.find(".expand_module_link").triggerHandler("click")}})
const r=ENV.COLLAPSED_MODULES
for(const e in r)j()("#context_module_"+r[e]).addClass("collapsed_module")
const s=j()("#context_modules .context_module")
if(!s.length){j()("#no_context_modules_message").show()
j()("#expand_collapse_all").hide()
j()("#context_modules_sortable_container").addClass("item-group-container--is-empty")}s.each((function(){modules.updateProgressionState(j()(this))}))
Le()
j()("#expand_collapse_all").click((function(){const e=j()(this).data("expand")
j()(this).text(e?ye.t("Collapse All"):ye.t("Expand All"))
j()(this).attr("aria-label",e?ye.t("Collapse All Modules"):ye.t("Expand All Modules"))
j()(this).data("expand",!e)
j()(this).attr("aria-expanded",e?"true":"false")
j()(".context_module").each((function(){const t=j()(this)
if(e&&0===t.find(".content:visible").length||!e&&t.find(".content:visible").length>0){const n=function(){t.find(".collapse_module_link").css("display",e?"inline-block":"none")
t.find(".expand_module_link").css("display",e?"none":"inline-block")
t.find(".footer .manage_module").css("display","")
t.toggleClass("collapsed_module",e)}
t.find(".content").slideToggle({queue:false,done:n()})}}))
const t=j()(this).data("url")
const n=e?"0":"1"
j.a.ajaxJSON(t,"POST",{collapse:n})}))
function a(e,t,n,o){const r=()=>{var e
a(null)
o.focus()
null!==ce["b"]&&void 0!==ce["b"]&&null!==(e=ce["b"].tray)&&void 0!==e&&e.refreshOnClose&&window.location.reload()}
_.a.render(Object(i["a"])(le["a"],{tool:e,placement:"module_index_menu",acceptedResourceTypes:["assignment","audio","discussion_topic","document","image","module","quiz","page","video"],targetResourceType:"module",allowItemSelection:n,selectableItems:t,onDismiss:r,open:null!==e}),j()("#external-tool-mount-point")[0])}function l(e,t,n,o){o&&Object(_e["a"])(()=>{window.location.reload()})
const r=()=>{l(e,t,n,false)
n.focus()}
_.a.render(Object(i["a"])(be["a"],{tool:e,launchType:t,isOpen:o,contextType:"course",contextId:parseInt(ENV.COURSE_ID,10),title:e.name,onRequestClose:r}),j()("#external-tool-mount-point")[0])}function c(e,t,n){return(e||[]).find(e=>e[t]===n.target.dataset.toolId)}function u(e){null!=e&&e.preventDefault()
const t=e.target.dataset.toolLaunchType
if("module_index_menu_modal"===t){const n=c(ENV.MODULE_MENU_TOOLS,"definition_id",e)
l(n,t,j()(".al-trigger")[0],true)
return}const n=c(ENV.MODULE_TRAY_TOOLS[t],"id",e)
const i=[]
if("module_index_menu"==t)i.push({course_id:ENV.COURSE_ID,type:"module"})
else if("module_group_menu"==t){const t=j()(e.target).parents(".context_module")
i.push({id:t.attr("id").substring("context_module_".length),name:t.find(".name").attr("title")})}a(n,i,"module_index_menu"==t,j()(".al-trigger")[0])}j()(".menu_tray_tool_link").click(u)
Object(ce["c"])()
function d(e,t,n){_.a.render(Object(i["a"])(fe["a"],{open:e,sourceCourseId:ENV.COURSE_ID,contentSelection:t,onDismiss:()=>{d(false,t,n)
n.focus()}}),document.getElementById("direct-share-mount-point"))}function h(e,t,n){_.a.render(Object(i["a"])(me["a"],{open:e,sourceCourseId:ENV.COURSE_ID,contentShare:t,onDismiss:()=>{h(false,t,n)
n.focus()}}),document.getElementById("direct-share-mount-point"))}j()(".module_copy_to").live("click",e=>{e.preventDefault()
const t=j()(e.target).closest(".context_module").data("module-id").toString()
const n={modules:[t]}
const i=j()(e.target).closest("ul").prev(".al-trigger")
d(true,n,i)})
j()(".module_send_to").live("click",e=>{e.preventDefault()
const t=j()(e.target).closest(".context_module").data("module-id").toString()
const n={content_type:"module",content_id:t}
const i=j()(e.target).closest("ul").prev(".al-trigger")
h(true,n,i)})
j()(".module_item_copy_to").live("click",e=>{e.preventDefault()
const t=j()(e.target).data("select-id")
const n=j()(e.target).data("select-class")
const i={[n]:[t]}
const o=j()(e.target).closest("ul").prev(".al-trigger")
d(true,i,o)})
j()(".module_item_send_to").live("click",e=>{e.preventDefault()
const t=j()(e.target).data("content-id")
const n=j()(e.target).data("content-type")
const i={content_id:t,content_type:n}
const o=j()(e.target).closest("ul").prev(".al-trigger")
h(true,i,o)})}))
t["a"]=modules},"3Yjv":function(e,t,n){"use strict"
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
var s=n("fhzG")
var a=n.n(s)
var l=n("i8i4")
var c=n.n(l)
var u=n("ouhR")
var d=n.n(u)
var h=n("HGxv")
var p=n("17x9")
var f=n.n(p)
var m=n("Lg2F")
n("r2Yr")
n("7AEQ")
const g=Object(h["useScope"])("broccoli_cloud")
var _={displayName:"PublishCloud",propTypes:{togglePublishClassOn:f.a.object,model:m["a"].filesystemObject,userCanEditFilesForContext:f.a.bool.isRequired,fileName:f.a.string},getInitialState(){return this.extractStateFromModel(this.props.model)},componentDidMount(){this.props.togglePublishClassOn&&this.updatePublishClassElements()},componentDidUpdate(){this.props.togglePublishClassOn&&this.updatePublishClassElements()},componentWillMount(){const e=e=>this.setState(this.extractStateFromModel(e))
this.props.model.on("change",e,this)},componentWillUnmount(){this.props.model.off(null,null,this)},updatePublishClassElements(){return this.props.togglePublishClassOn.classList[this.state.published?"add":"remove"]("ig-published")},getRestrictedText(){if(this.props.model.get("unlock_at")&&this.props.model.get("lock_at"))return g.t("Available after %{unlock_at} until %{lock_at}",{unlock_at:d.a.datetimeString(this.props.model.get("unlock_at")),lock_at:d.a.datetimeString(this.props.model.get("lock_at"))})
if(this.props.model.get("unlock_at")&&!this.props.model.get("lock_at"))return g.t("Available after %{unlock_at}",{unlock_at:d.a.datetimeString(this.props.model.get("unlock_at"))})
if(!this.props.model.get("unlock_at")&&this.props.model.get("lock_at"))return g.t("Available until %{lock_at}",{lock_at:d.a.datetimeString(this.props.model.get("lock_at"))})},extractStateFromModel:e=>({published:!e.get("locked"),restricted:!!e.get("lock_at")||!!e.get("unlock_at"),hidden:!!e.get("hidden")}),togglePublishedState(){this.setState({published:!this.state.published,restricted:false,hidden:false})}}
n("ESjL")
var b,v,y,x,k
const w=Object(h["useScope"])("publish_cloud")
_.openRestrictedDialog=function(){const e=d()("<div>").dialog({title:w.t("Editing permissions for: %{name}",{name:this.props.model.displayName()}),width:800,minHeight:300,close(){c.a.unmountComponentAtNode(this)
d()(this).remove()}})
n.e(125).then(n.bind(null,"c9cI")).then(({default:t})=>{c.a.render(Object(i["a"])(t,{usageRightsRequiredForContext:this.props.usageRightsRequiredForContext,models:[this.props.model],closeDialog:()=>{e.dialog("close")}}),e[0])})}
_.render=function(){const e=this.props.model&&this.props.model.displayName()||w.t("This file")
return this.props.userCanEditFilesForContext?this.state.published&&this.state.restricted?r.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status restricted",title:this.getRestrictedText(),"aria-label":w.t("%{fileName} is %{restricted} - Click to modify",{fileName:e,restricted:this.getRestrictedText()})},b||(b=Object(i["a"])("i",{className:"icon-calendar-month icon-line"}))):this.state.published&&this.state.hidden?r.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status hiddenState",title:w.t("Only available to students with link"),"aria-label":w.t("%{fileName} is only available to students with the link - Click to modify",{fileName:e})},v||(v=Object(i["a"])("i",{className:"icon-off icon-line"}))):this.state.published?r.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status published",title:w.t("Published"),"aria-label":w.t("%{fileName} is Published - Click to modify",{fileName:e})},y||(y=Object(i["a"])("i",{className:"icon-publish icon-Solid"}))):r.a.createElement("button",{type:"button","data-tooltip":"left",onClick:this.openRestrictedDialog,ref:"publishCloud",className:"btn-link published-status unpublished",title:w.t("Unpublished"),"aria-label":w.t("%{fileName} is Unpublished - Click to modify",{fileName:e})},x||(x=Object(i["a"])("i",{className:"icon-unpublish"}))):this.state.published&&this.state.restricted?r.a.createElement("div",{style:{marginRight:"12px"},"data-tooltip":"left",ref:"publishCloud",className:"published-status restricted",title:this.getRestrictedText(),"aria-label":w.t("%{fileName} is %{restricted}",{fileName:e,restricted:this.getRestrictedText()})},k||(k=Object(i["a"])("i",{className:"icon-calendar-day"}))):Object(i["a"])("div",{style:{width:28,height:36}})}
t["a"]=a()(_)},"3jyj":function(e,t,n){"use strict"
var i=n("QYKH")
n("mX+G")
var o=n("Y/W1")
var r=n.n(o)
var s={}
var a=function(e){var t=r.a.uniqueId()
var n=r.a.extend((function(n,i){var o=function(){return new e(n,i)}
var r=n&&n[e.prototype.idAttribute]
if(r){var a=t+":"+r
if(s[a]){var l=s[a]
i&&i.parse&&(n=l.parse(n))
l.set(n)}else s[a]=o()
return s[a]}var c=o()
c.on("change:"+e.prototype.idAttribute,(function(e,n){s[t+":"+n]=c
c.off(null,null,this)}),this)
return c}),e)
n.prototype=e.prototype
return n}
a.resetCache=function(){s={}}
var l=a
var c=n("TnsN")
var u=n("VXGR")
var d=n("plYi")
var h={encodeSpecialChars:e=>e.replace(/%/g,"&#37;"),decodeSpecialChars:e=>e.split("/").map(e=>encodeURIComponent(decodeURIComponent(e).replace(/&#37;/,"%"))).join("/")}
const p=/^[^\/]+\/?/
let f=null
function m(e,t){return"name"!==t||e instanceof _?"user"===t?v(e.get("user"),e=>e.display_name)||"":"usage_rights"===t?v(e.get("usage_rights"),e=>e.license_name)||"":e.get(t):e.get("display_name")}class g extends i["a"]{initialize(e){this.contentTypes||(this.contentTypes=null!=e?e.contentTypes:void 0)
this.useVerifiers||(this.useVerifiers=null!=e?e.useVerifiers:void 0)
this.setUpFilesAndFoldersIfNeeded()
this.on("change:sort change:order",this.setQueryStringParams)
return super.initialize(...arguments)}url(){return this.isNew()?super.url(...arguments):"/api/v1/folders/"+this.id}parse(e){const t=super.parse(...arguments)
this.contentTypes||(this.contentTypes=e.contentTypes)
this.useVerifiers||(this.useVerifiers=e.useVerifiers)
this.setUpFilesAndFoldersIfNeeded()
this.folders.url=e.folders_url
this.files.url=e.files_url
return t}setUpFilesAndFoldersIfNeeded(){this.folders||(this.folders=new b([],{parentFolder:this}))
if(!this.files)return this.files=new u["a"]([],{parentFolder:this})}getSubtrees(){return this.folders}getItems(){return this.files}expand(e=false,t={}){let n
this.isExpanded=true
this.trigger("expanded")
if(this.expandDfd||e)return $.when()
this.isExpanding=true
this.trigger("beginexpanding")
this.expandDfd=$.Deferred().done(()=>{this.isExpanding=false
return this.trigger("endexpanding")})
const i=this.folders.url===this.folders.constructor.prototype.url||this.files.url===this.files.constructor.prototype.url;(i||e)&&(n=this.fetch())
return $.when(n).done(()=>{let e,n
0!==this.get("folders_count")&&(n=this.folders.fetch({data:{per_page:this.get("folders_count")}}))
0===this.get("files_count")||t.onlyShowSubtrees||(e=this.files.fetch())
return $.when(n,e).done(this.expandDfd.resolve)})}collapse(){this.isExpanded=false
return this.trigger("collapsed")}toggle(e){return this.isExpanded?this.collapse():this.expand(false,e)}previewUrl(){let e
if(e=this.get("context_type"),["Course","Group"].includes(e))return`/${this.get("context_type").toLowerCase()+"s"}/${this.get("context_id")}/files/{{id}}/preview`}isEmpty(){return!!(this.files.loadedAll&&0===this.files.length)&&this.folders.loadedAll&&0===this.folders.length}urlPath(){let e=(this.get("full_name")||"").replace(p,"")
e=h.encodeSpecialChars(e)
e=e.split("/").map(e=>encodeURIComponent(e)).join("/")
f||(f=n("m452").default)
if(f.showingAllContexts){const t=`${v(this.get("context_type"),e=>e.toLowerCase())}s_${this.get("context_id")}`
e=`${t}/${e}`}return e}childrenSorter(e="name",t="asc",n,i){let o
const r=["name","user","usage_rights"].includes(e)
n=m(n,e)
i=m(i,e)
o=r?d["a"].strings(n,i):(()=>{if(n===i)return 0
if(n>i||void 0===n)return 1
if(n<i||void 0===i)return-1
throw new Error("wat? error sorting")})()
"desc"===t&&(o=0-o)
return o}children({sort:e,order:t}){return this.folders.toArray().concat(this.files.toArray()).sort(this.childrenSorter.bind(null,e,t))}}g.resolvePath=function(e,t,n){n=h.decodeSpecialChars(n)
const i=`/api/v1/${e}/${t}/folders/by_path${n}`
return $.getJSON(i).pipe(e=>e.map(e=>new _(e,{parse:true})))}
g.prototype.defaults={name:""}
const _=l(g)
t["a"]=_
class b extends c["a"]{static initClass(){this.optionProperty("parentFolder")
this.prototype.model=_}parse(e){e&&e.forEach(e=>{e.contentTypes=this.parentFolder.contentTypes
return e.useVerifiers=this.parentFolder.useVerifiers})
return super.parse(...arguments)}}b.initClass()
_.FoldersCollection=b
function v(e,t){return"undefined"!==typeof e&&null!==e?t(e):void 0}},"4/ic":function(e,t,n){var i=n("ZWtO")
function o(e){return function(t){return i(t,e)}}e.exports=o},"40dz":function(e,t,n){"use strict"
n.r(t)
n.d(t,"default",(function(){return N}))
var i=n("RtDj")
var o=n("HGxv")
var r=n("ouhR")
var s=n.n(r)
var a=n("q1tI")
var l=n("i8i4")
var c=n.n(l)
n("aq8L")
var u=n("mwIZ")
var d=n.n(u)
const h=e=>Object.assign({assignment:{toggleWrapperSelector:{show:".assignment-buttons",edit:".header-bar .header-bar-right .header-group-left"}[e.page],itemIdPath:{show:"ASSIGNMENT_ID",edit:"ASSIGNMENT.id"}[e.page]},quiz:{toggleWrapperSelector:{show:".header-group-left",edit:".header-bar .header-bar-right .header-group-left"}[e.page],toggleWrapperChildIndex:{edit:2}[e.page],itemIdPath:"QUIZ.id"},discussion_topic:{toggleWrapperSelector:{show:".form-inline .pull-right",edit:".discussion-edit-header .text-right"}[e.page],itemIdPath:{show:"DISCUSSION.TOPIC.ID",edit:"DISCUSSION_TOPIC.ATTRIBUTES.id"}[e.page]},wiki_page:{toggleWrapperSelector:{show:".blueprint-label"}[e.page],itemIdPath:"WIKI_PAGE.page_id"}}[e.itemType],e)
var p=h
var f=n("poaC")
n("17x9")
var m=n("L+/K")
var g=n("ZbPE")
n("r2Yr")
var _=n("wOvH")
n("tlDv")
const b=Object(o["useScope"])("blueprint_coursesLockBanner")
class v extends a["Component"]{static setupRootNode(){const e=document.createElement("div")
e.id="blueprint-lock-banner"
e.setAttribute("style","margin-bottom: 2em")
const t=document.querySelector("#content")
return t.insertBefore(e,t.firstChild)}componentDidUpdate(e){this.props.isLocked&&!e.isLocked&&s.a.screenReaderFlashMessage(b.t("%{attributes} locked",{attributes:Object(_["a"])(this.props.itemLocks)}))}render(){if(this.props.isLocked)return Object(i["a"])(m["a"],{},void 0,Object(i["a"])(g["a"],{weight:"bold",size:"small"},void 0,b.t("Locked:")," "),Object(i["a"])(g["a"],{size:"small"},void 0,Object(_["a"])(this.props.itemLocks)))
return null}}v.defaultProps={itemLocks:{content:false,points:false,settings:false,due_dates:false,availability_dates:false}}
var y=n("Xx/m")
var x=n("Zgll")
var k=n("bZJi")
var w=n("CO+y")
var C=n("6SzX")
var O=n("o/ft")
var S=n("kC3k")
var E=n("JGuX")
const T=Object(o["useScope"])("blueprint_coursesLockToggle")
const I={ADMIN_LOCKED:{label:T.t("Locked"),icon:O["a"],tooltip:T.t("Unlock"),variant:"primary"},ADMIN_UNLOCKED:{label:T.t("Blueprint"),icon:S["a"],tooltip:T.t("Lock"),variant:"default"},ADMIN_WILLUNLOCK:{label:T.t("Blueprint"),icon:S["a"],tooltip:T.t("Unlock"),variant:"default"},ADMIN_WILLLOCK:{label:T.t("Locked"),icon:O["a"],tooltip:T.t("Lock"),variant:"primary"},TEACH_LOCKED:{label:T.t("Locked"),icon:O["a"]},TEACH_UNLOCKED:{label:T.t("Blueprint"),icon:S["a"]}}
class j extends a["Component"]{static setupRootNode(e,t,n){const i=document.createElement("span")
i.className="bpc-lock-toggle-wrapper"
const o=setInterval(()=>{const r=document.querySelector(e)
if(r){clearInterval(o)
r.insertBefore(i,r.childNodes[t])
n(i)}},200)}constructor(e){super(e)
this.onEnter=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?I.ADMIN_WILLUNLOCK:I.ADMIN_WILLLOCK})}
this.onExit=()=>{this.props.isToggleable&&this.setState({mode:this.props.isLocked?I.ADMIN_LOCKED:I.ADMIN_UNLOCKED})}
this.state={}
this.toggleBtnRef=null
e.isToggleable?this.state.mode=e.isLocked?I.ADMIN_LOCKED:I.ADMIN_UNLOCKED:this.state.mode=e.isLocked?I.TEACH_LOCKED:I.TEACH_UNLOCKED}componentDidMount(){const e=Math.max(...Object.values(I).map(e=>e.label.length))
this.toggleBtnRef&&(this.toggleBtnRef.style.width=.845*e+"em")}render(){var e,t,n,o
const r=this.state.mode.icon
const s=Object(i["a"])("span",{className:"bpc-lock-toggle__label"},void 0,this.state.mode.label||"-")
let a=null
if(this.props.isToggleable){const l=this.state.mode.variant
const c=this.state.mode.tooltip
const u=this.props.isLocked?T.t("Locked. Click to unlock."):T.t("Unlocked. Click to lock.")
a=Object(i["a"])(k["a"],{renderTip:c,placement:"top",color:"primary",on:["hover","focus"]},void 0,this.props.breakpoints.miniTablet?Object(i["a"])(y["a"],{id:"lock-toggle-btn",elementRef:e=>this.toggleBtnRef=e,variant:l,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked},void 0,e||(e=Object(i["a"])(r,{})),t||(t=Object(i["a"])(w["a"],{},void 0,s)),n||(n=Object(i["a"])(C["a"],{},void 0,u))):Object(i["a"])(x["a"],{color:"primary"===l?l:null,onClick:this.props.onClick,onFocus:this.onEnter,onBlur:this.onExit,onMouseEnter:this.onEnter,onMouseLeave:this.onExit,"aria-pressed":this.props.isLocked,screenReaderLabel:u},void 0,o||(o=Object(i["a"])(r,{}))))}else a=Object(i["a"])("span",{className:"bpc__lock-no__toggle"},void 0,Object(i["a"])("span",{className:"bpc__lock-no__toggle-icon"},void 0,Object(i["a"])(r,{})),Object(i["a"])(g["a"],{size:"small"},void 0,s))
return Object(i["a"])("span",{className:"bpc-lock-toggle"},void 0,a)}}j.defaultProps={isToggleable:false,onClick:()=>{},breakpoints:{}}
const L=Object(E["a"])(j)
L.setupRootNode=j.setupRootNode
var D=L
const R=Object(o["useScope"])("blueprint_coursesLockManageer")
class N{constructor(){this.toggleLocked=()=>{const{itemType:e}=this.props
const{courseId:t,isLocked:n,itemId:i}=this.state
f["a"].toggleLocked({courseId:t,itemType:e,itemId:i,isLocked:!n}).then(e=>{e.data.success?this.setState({isLocked:!n}):this.showToggleError()}).catch(()=>{this.showToggleError()})}
this.state={isLocked:false,itemLocks:[],isMasterContent:false,isChildContent:false,itemId:""}}init(e){if(!this.shouldInit())return
this.props=p(e)
this.setupState()
void 0!==this.state.itemId&&this.render()}shouldInit(){return ENV.MASTER_COURSE_DATA&&(ENV.MASTER_COURSE_DATA.is_master_course_master_content||ENV.MASTER_COURSE_DATA.is_master_course_child_content)}setupState(){this.state={isLocked:ENV.MASTER_COURSE_DATA.restricted_by_master_course,itemLocks:ENV.MASTER_COURSE_DATA.master_course_restrictions||ENV.MASTER_COURSE_DATA.default_restrictions,isMasterContent:ENV.MASTER_COURSE_DATA.is_master_course_master_content,isChildContent:ENV.MASTER_COURSE_DATA.is_master_course_child_content,courseId:ENV.COURSE_ID,itemId:d()(ENV,this.props.itemIdPath)}}setState(e){this.state=Object.assign(this.state,e)
this.render()}getItemLocks(){return{...this.state.itemLocks}}isMasterContent(){return this.state.isMasterContent}isChildContent(){return this.state.isChildContent}showToggleError(){s.a.flashError(R.t("There was a problem toggling the content lock."))}setupToggle(e){if(!this.props.toggleWrapperSelector)return
this.toggleNode?e():D.setupRootNode(this.props.toggleWrapperSelector,this.props.toggleWrapperChildIndex||0,t=>{this.toggleNode=t
e()})}renderLockToggle(){if(!this.props.toggleWrapperSelector)return
this.setupToggle(()=>{c.a.render(Object(i["a"])(D,{isLocked:this.state.isLocked,isToggleable:"show"===this.props.page&&this.state.isMasterContent,onClick:this.toggleLocked}),this.toggleNode)})}renderBanner(){this.bannerNode||(this.bannerNode=v.setupRootNode())
c.a.render(Object(i["a"])(v,{isLocked:this.state.isLocked,itemLocks:this.state.itemLocks}),this.bannerNode)}render(){this.renderBanner()
this.renderLockToggle()}}},"44Ds":function(e,t,n){var i=n("e4Nc")
var o="Expected a function"
function r(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(o)
var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],r=n.cache
if(r.has(o))return r.get(o)
var s=e.apply(this,i)
n.cache=r.set(o,s)||r
return s}
n.cache=new(r.Cache||i)
return n}r.Cache=i
e.exports=r},"4M30":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
n.d(t,"b",(function(){return r}))
const i={}.hasOwnProperty
function o(e,t){for(const n in t)i.call(t,n)&&(e[n]=t[n])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e}function r(e,t){Object.keys(t).forEach(n=>Object.defineProperty(e,n,{get:t[n],enumerable:true,configurable:true}))
return e}},"4kuk":function(e,t,n){var i=n("SfRM"),o=n("Hvzi"),r=n("u8Dt"),s=n("ekgI"),a=n("JSQU")
function l(e){var t=-1,n=null==e?0:e.length
this.clear()
while(++t<n){var i=e[t]
this.set(i[0],i[1])}}l.prototype.clear=i
l.prototype["delete"]=o
l.prototype.get=r
l.prototype.has=s
l.prototype.set=a
e.exports=l},"4sDh":function(e,t,n){var i=n("4uTw"),o=n("03A+"),r=n("Z0cm"),s=n("wJg7"),a=n("shjB"),l=n("9Nap")
function c(e,t,n){t=i(t,e)
var c=-1,u=t.length,d=false
while(++c<u){var h=l(t[c])
if(!(d=null!=e&&n(e,h)))break
e=e[h]}if(d||++c!=u)return d
u=null==e?0:e.length
return!!u&&a(u)&&s(h,u)&&(r(e)||o(e))}e.exports=c},"4uTw":function(e,t,n){var i=n("Z0cm"),o=n("9ggG"),r=n("GNiM"),s=n("dt0z")
function a(e,t){if(i(e))return e
return o(e,t)?[e]:r(s(e))}e.exports=a},"4uX5":function(e,t,n){"use strict"
n.d(t,"a",(function(){return f}))
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
var s=n("mrSG")
var a=n("gtzJ")
var l=n("3CEA")
var c=n("9/Zf")
var u=n("8LbN")
n("2mql")
var d=Object(c["f"])(o["version"])
var h={componentStack:null,error:null,eventId:null}
var p=function(e){Object(s["__extends"])(t,e)
function t(){var t=null!==e&&e.apply(this,arguments)||this
t.state=h
t.resetErrorBoundary=function(){var e=t.props.onReset
var n=t.state,i=n.error,o=n.componentStack,r=n.eventId
e&&e(i,o,r)
t.setState(h)}
return t}t.prototype.componentDidCatch=function(e,t){var n=this
var i=t.componentStack
var o=this.props,r=o.beforeCapture,c=o.onError,u=o.showDialog,h=o.dialogOptions
Object(a["c"])((function(t){if(d.major&&d.major>=17){var o=new Error(e.message)
o.name="React ErrorBoundary "+o.name
o.stack=i
e.cause=o}r&&r(t,e,i)
var p=Object(a["a"])(e,{contexts:{react:{componentStack:i}}})
c&&c(e,i,p)
u&&Object(l["b"])(Object(s["__assign"])(Object(s["__assign"])({},h),{eventId:p}))
n.setState({error:e,componentStack:i,eventId:p})}))}
t.prototype.componentDidMount=function(){var e=this.props.onMount
e&&e()}
t.prototype.componentWillUnmount=function(){var e=this.state,t=e.error,n=e.componentStack,i=e.eventId
var o=this.props.onUnmount
o&&o(t,n,i)}
t.prototype.render=function(){var e=this.props,t=e.fallback,n=e.children
var i=this.state,r=i.error,s=i.componentStack,a=i.eventId
if(r){var l=void 0
l="function"===typeof t?t({error:r,componentStack:s,resetError:this.resetErrorBoundary,eventId:a}):t
if(o["isValidElement"](l))return l
t&&u["b"].warn("fallback did not produce a valid ReactElement")
return null}if("function"===typeof n)return n()
return n}
return t}(o["Component"])
class f extends r.a.Component{constructor(...e){super(...e)
this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error(e,t)}render(){if(this.state.error)return"function"===typeof this.props.errorComponent?this.props.errorComponent({error:this.state.error,componentStack:null,eventId:null,resetError:()=>this.setState({error:null})}):this.props.errorComponent
return Object(i["a"])(p,{fallback:this.props.errorComponent},void 0,this.props.children)}}},"65NJ":function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
n("w2hD")
o.a.fn.scrollToVisible=function(e){const t={}
const n=o()(e)
if(0===n.length)return
let i=n.offset(),r=n.outerWidth(),s=n.outerHeight(),a=i.top,l=a+s,c=i.left,u=c+r,d="html,body"==this.selector?o.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),p=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=o()("body").offset()
this.each((function(){try{e=o()(this).offset()
return false}catch(e){}}))
a-=e.top
l-=e.top
c-=e.left
u-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){p=o()(window).height()
o()("#wizard_box:visible").length>0&&(p-=o()("#wizard_box:visible").height())
f=o()(window).width()
a-=d
c-=h
l-=d
u-=h}a<0||p<s&&l>p?t.scrollTop=a+d:l>p&&(t.scrollTop=l+d-p+20)
c<0?t.scrollLeft=c+h:u>f&&(t.scrollLeft=u+h-f+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},"711d":function(e,t){function n(e){return function(t){return null==t?void 0:t[e]}}e.exports=n},"7Y4T":function(e,t,n){"use strict"
n.d(t,"a",(function(){return I}))
var i=n("1OyB")
var o=n("vuIU")
var r=n("Ji7U")
var s=n("LK+K")
n("DEX3")
var a=n("q1tI")
var l=n.n(a)
var c=n("17x9")
var u=n.n(c)
var d=n("MObU")
var h=n.n(d)
var p=n("ODXe")
var f=n("HMVb")
function m(e,t){var n=[]
Object.keys(e).forEach((function(i){var o=e[i],r=o.minWidth,s=o.maxWidth,a=o.minHeight,l=o.maxHeight
n.push([i,{minWidth:Object(f["a"])(r,t)||0,maxWidth:Object(f["a"])(s,t)||Infinity,minHeight:Object(f["a"])(a,t)||0,maxHeight:Object(f["a"])(l,t)||Infinity}])}))
return function(e){var t=e.width,i=e.height
var o={}
n.forEach((function(e){var n=Object(p["a"])(e,2),r=n[0],s=n[1],a=s.minWidth,l=s.maxWidth,c=s.minHeight,u=s.maxHeight
o[r]=a<=t&&t<=l&&c<=i&&i<=u}))
return o}}var g=n("8o96")
var _=n("gCYW")
var b=n("QF4Q")
var v=n("eGSd")
function y(e,t,n){var i="function"===typeof t?t():t
var o=[]
var r=function(t){var r=x(e,i,o,t)
if(r){o=r
n(o)}}
var s=Object(v["a"])(r,100,{leading:false,trailing:true})
var a=Object(g["a"])(i,s)
var l=Object(_["a"])(i),c=l.width,u=l.height
var d=r({width:c,height:u},e,i,o)
if(d){o=d
n(o)}return{remove:function(){a&&a.remove()
s&&s.cancel()}}}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[]
var i=arguments.length>3?arguments[3]:void 0
var o=Object(b["a"])(t)
var r=i||Object(_["a"])(o),s=r.width,a=r.height
var l=m(e,o)({width:s,height:a})
var c=Object.keys(l).filter((function(e){return l[e]})).map((function(e){return e}))
if(n.length!==c.length)return c
if(n.filter((function(e){return-1===c.indexOf(e)})).length>0)return c
return null}var k=n("i/8D")
var w=n("gpCx")
function C(e,t){var n=Object(b["a"])(t)||document
return k["a"]&&Object(w["a"])(n).matchMedia(e)}function O(e,t){var n=Object.keys(e)
if(1!==n.length)throw new Error("Expected exactly one key in query object.")
var i=n[0]
var o=["minHeight","maxHeight","minWidth","maxWidth"]
if(-1===o.indexOf(i))throw new Error("Invalid key `".concat(i,"` in query object. Valid keys should consist of one of the following: ")+"".concat(o.join(", ")," (case sensitive)"))
var r=e[i]
if("string"!==typeof r&&"number"!==typeof r)throw new Error("The value of the query object must be a string or number.")
if(!r)throw new Error("No value supplied for query object")
return"(".concat(S(i.toLowerCase()),": ").concat(Object(f["a"])(r,t),"px)")}function S(e){return e.slice(0,3)+"-"+e.slice(3)}function E(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:C
var o="function"===typeof t?t():t
var r=function(e){var t=Object.keys(e).filter((function(t){return e[t].matches})).map((function(e){return e}))
n(t)}
var s={}
var a=function(){r(s)}
Object.keys(e).forEach((function(t){var n=i(O(e[t],o),o)
n.addListener(a)
s[t]=n}))
r(s)
return{remove:function(){s&&Object.keys(s).forEach((function(e){s[e].removeListener(a)}))}}}var T={validQuery:function(e,t,n){try{O(e[t])}catch(e){return new Error("Invalid query prop supplied to `".concat(n,"`. ").concat(e.message))}}}
var I=function(e){Object(r["a"])(n,e)
var t=Object(s["a"])(n)
function n(){var e
Object(i["a"])(this,n)
for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s]
e=t.call.apply(t,[this].concat(r))
e._matchListener=null
e.state={matches:[],hasRendered:false}
e.updateMatches=function(t,n){e.setState({matches:t},(function(){"function"===typeof n&&n()}))}
return e}Object(o["a"])(n,[{key:"componentDidMount",value:function(){this.props.render||this.props.children
if("element"===this.props.match){var e=x(this.props.query,this)||[]
this.setState({matches:e,hasRendered:true})}else this.setState({hasRendered:true})
this._matchListener=this.addMatchListener(this.props.query,this.updateMatches)}},{key:"componentWillUnmount",value:function(){this.removeMatchListener()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.match,i=t.query
if(n!==e.match||!h()(i,e.query)){this.removeMatchListener()
this._matchListener=this.addMatchListener(i,this.updateMatches,n)}}},{key:"addMatchListener",value:function(e,t){var n=this
var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.match
var o="element"===i?y:E
return o(e,(function(){return Object(b["a"])(n)}),t)}},{key:"removeMatchListener",value:function(){this._matchListener&&this._matchListener.remove()}},{key:"mergeProps",value:function(e,t){if(!t)return null
var n={}
e.forEach((function(e){var i=t[e]
Object.keys(i).forEach((function(e){["[Responsive] The prop `".concat(e,"` is defined at 2 or more breakpoints"),"which are currently applied at the same time. Its current value, `".concat(n[e],"`,"),"will be overwritten as `".concat(i[e],"`.")].join(" ")
n[e]=i[e]}))}))
return n}},{key:"render",value:function(){var e=this.state,t=e.matches,n=e.hasRendered
var i=this.props,o=i.props,r=i.render,s=i.children
var a
n&&(a=s||r)
return l.a.createElement("div",null,a&&a(this.mergeProps(t,o),t))}}])
n.displayName="Responsive"
return n}(a["Component"])
I.propTypes={match:u.a.oneOf(["element","media"]),query:u.a.objectOf(T.validQuery).isRequired,props:u.a.objectOf(u.a.object),render:u.a.func,children:u.a.func}
I.defaultProps={children:null,render:void 0,match:"element",props:null}},"7lHU":function(e,t,n){"use strict"
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
var s=n("17x9")
var a=n("RfgP")
var l=n("HGxv")
var c=n("vCN0")
var u=n("0unK")
var d=n("GN1s")
const h=Object(l["useScope"])("zip_file_options_form")
class p extends r.a.Component{constructor(...e){super(...e)
this.handleExpandClick=()=>{this.props.onZipOptionsResolved({file:this.props.fileOptions.file,expandZip:true})}
this.handleUploadClick=()=>{this.props.onZipOptionsResolved({file:this.props.fileOptions.file,expandZip:false})}
this.buildMessage=e=>{let t
if(this.props.fileOptions){const e=this.props.fileOptions.file.name
t=h.t("message",'Would you like to expand the contents of "%{fileName}" into the current folder, or upload the zip file as is?',{fileName:e})}return t}}render(){return r.a.createElement(c["a"],{className:"ReactModal__Content--canvas ReactModal__Content--mini-modal",isOpen:!!this.props.fileOptions,ref:"canvasModal",title:h.t("zip_options","Zip file options"),onRequestClose:this.props.onClose},Object(i["a"])(u["a"],{},void 0,Object(i["a"])("p",{className:"modalMessage"},void 0,this.buildMessage())),Object(i["a"])(d["a"],{},void 0,Object(i["a"])("button",{className:"btn",onClick:this.handleExpandClick},void 0,h.t("expand","Expand It")),Object(i["a"])("button",{className:"btn btn-primary",onClick:this.handleUploadClick},void 0,h.t("upload","Upload It"))))}}p.displayName="ZipFileOptionsForm"
var f=p
var m=n("MAjw")
Object(s["oneOfType"])([s["string"],s["number"]]).isRequired,s["string"].isRequired,s["object"],s["bool"],s["bool"],s["string"],s["string"],s["bool"],s["bool"],s["bool"],s["bool"],s["func"],s["func"],s["func"],s["func"]
class g extends r.a.Component{constructor(e){super(e)
this.addFiles=()=>this.addFileInputRef.current.click()
this.handleFilesInputChange=e=>{this.props.onChange(e)
m["a"].setOptionsFromFiles(e.target.files)
this.setStateFromOptions()}
this.onNameConflictResolved=e=>{m["a"].onNameConflictResolved(e)
this.setStateFromOptions(()=>{if(this.state.resolvedNames.length+this.state.nameCollisions.length+this.state.zipOptions.length===0){this.reset()
this.props.onChange()}})}
this.onZipOptionsResolved=e=>{m["a"].onZipOptionsResolved(e)
this.setStateFromOptions()}
this.onClose=()=>{if(this.props.autoUpload){this.reset()
m["a"].resetState()
this.setStateFromOptions()
this.props.onEmptyOrClose()}else this.restore()}
this.setStateFromOptions=e=>{this.setState(m["a"].getState(),e)}
this.buildPotentialModal=()=>{if(this.state.zipOptions.length&&!this.props.alwaysUploadZips)return Object(i["a"])(f,{fileOptions:this.state.zipOptions[0],onZipOptionsResolved:this.onZipOptionsResolved,onClose:this.onClose})
if(this.state.nameCollisions.length&&!this.props.alwaysRename)return Object(i["a"])(a["a"],{"data-testid":"rename-dialog",fileOptions:this.state.nameCollisions[0],onNameConflictResolved:this.onNameConflictResolved,onClose:this.onClose,allowSkip:this.props.allowSkip,onRenameFileMessage:this.props.onRenameFileMessage,onLockFileMessage:this.props.onLockFileMessage})}
this.formRef=r.a.createRef()
this.addFileInputRef=r.a.createRef()
this.state={...m["a"].getState(),showResolveModals:this.props.autoUpload}
this.setFolder(e.currentFolder)
this.setUploadOptions(e)}setFolder(e){const t=m["a"].getFolder()
m["a"].setFolder(e)
if(!this.props.autoUpload&&null!==t&&void 0!==t&&t.id&&null!==e&&void 0!==e&&e.id&&e.id!==t.id){m["a"].setOptionsFromFiles(this.addFileInputRef.current.files)
this.setStateFromOptions()}}getFolder(){return m["a"].getFolder()}reset(e=false){if(e||this.props.autoUpload){var t
null===(t=this.formRef.current)||void 0===t||t.reset()}this.setState({showResolveModals:this.props.autoUpload})}restore(){m["a"].setOptionsFromFiles(this.addFileInputRef.current.files)
this.setStateFromOptions()
this.setState({showResolveModals:false})}setUploadOptions({alwaysRename:e,alwaysUploadZips:t}){m["a"].setUploadOptions({alwaysRename:e,alwaysUploadZips:t})}_actualQueueUploads(){this.reset()
return m["a"].queueUploads(this.props.contextId,this.props.contextType)}queueUploads(){this.props.autoUpload?this._actualQueueUploads():this.state.showResolveModals||this.setState({showResolveModals:true})}componentDidUpdate(){this.setFolder(this.props.currentFolder)
this.setUploadOptions(this.props)
0===this.state.zipOptions.length&&0===this.state.nameCollisions.length&&m["a"].hasNewOptions()&&(this.props.autoUpload?this.state.resolvedNames.length>0?this._actualQueueUploads():this.props.onEmptyOrClose():this.state.showResolveModals&&(this.state.resolvedNames.length>0?this._actualQueueUploads():this.restore()))}UNSAFE_componentWillMount(){m["a"].onChange=this.setStateFromOptions}componentWillUnMount(){m["a"].onChange=null}render(){return Object(i["a"])("span",{},void 0,r.a.createElement("form",{ref:this.formRef,className:this.props.visible?"":"hidden"},r.a.createElement("input",{id:this.props.inputId,name:this.props.inputName,type:"file",ref:this.addFileInputRef,onChange:this.handleFilesInputChange,multiple:true,"data-testid":"file-input",disabled:this.props.disabled})),this.state.showResolveModals&&this.buildPotentialModal())}}g.defaultProps={allowSkip:false,autoUpload:true,disabled:false,alwaysRename:false,alwaysUploadZips:false,onChange:()=>{},onEmptyOrClose:()=>{},onRenameFileMessage:()=>{},onLockFileMessage:()=>{}}
t["a"]=g},"85Cn":function(e,t,n){"use strict"
var i=n("mX+G")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
n("ouhR")
var a=n("ZUSV")
var l=n("XE4h")
var c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty
t["a"]=function(e){u(t,e)
function t(){this.isSimple=c(this.isSimple,this)
this.datesJSON=c(this.datesJSON,this)
this.toJSON=c(this.toJSON,this)
this.blank=c(this.blank,this)
this.containsDefaultDueDate=c(this.containsDefaultDueDate,this)
this.getDefaultDueDate=c(this.getDefaultDueDate,this)
this.courseSectionIDs=c(this.courseSectionIDs,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.model=a["a"]
t.prototype.courseSectionIDs=function(){return this.pluck("course_section_id")}
t.prototype.comparator=function(e){return e.id}
t.prototype.getDefaultDueDate=function(){return this.detect((function(e){return e.getCourseSectionID()===l["a"].defaultDueDateSectionID}))}
t.prototype.containsDefaultDueDate=function(){return!!this.getDefaultDueDate()}
t.prototype.blank=function(){return this.select((function(e){return e.isBlank()}))}
t.prototype.toJSON=function(){var e
e=this.reject((function(e){return e.representsDefaultDueDate()}))
return s.a.map(e,(function(e){return e.toJSON().assignment_override}))}
t.prototype.datesJSON=function(){return this.map((function(e){return e.toJSON().assignment_override}))}
t.prototype.isSimple=function(){return 0===s.a.difference(this.courseSectionIDs(),[l["a"].defaultDueDateSectionID]).length}
return t}(o.a.Collection)},"897F":function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("qqwe")
n("ESjL")
o.a.fn.fixDialogButtons=function(){return this.each((function(){const e=o()(this)
const t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=o.a.map(t.toArray(),t=>{const n=o()(t)
let i=n.attr("class")||""
const r=n.attr("id")
if(n.is(".dialog_closer")){n.off(".fixdialogbuttons")
n.on("click.fixdialogbuttons",Object(a["a"])(()=>e.dialog("close")))}"submit"===n.prop("type")&&n[0].form&&(i+=" button_type_submit")
return{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:i,id:r}})
n=s.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0)
e.dialog("option","buttons",n)}}))}},"8S//":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i="undefined"!==typeof navigator&&navigator.userAgent||""
var o=/Edge/.test(i)},"8t0o":function(e,t,n){"use strict"
n.d(t,"a",(function(){return M}))
var i=n("rePB")
var o=n("Ff2n")
var r=n("1OyB")
var s=n("vuIU")
var a=n("JX7q")
var l=n("Ji7U")
var c=n("LK+K")
n("DEX3")
var u=n("q1tI")
var d=n.n(u)
var h=n("17x9")
var p=n.n(h)
var f=n("TSYQ")
var m=n.n(f)
var g=n("n12J")
var _=n("J2CL")
var b=n("rW8M")
var v=n("/UXv")
var y=n("kR0I")
var x=n("nAyT")
var k=n("E+IV")
var w=n("jtGx")
var C=n("4Awi")
var O=n("tCl5")
var S=n("KgFQ")
var E=n("oXx0")
var T=n("o4+2")
function I(e){var t=e.colors,n=e.typography,i=e.borders,o=e.spacing
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,color:t.textLink,textDecorationWithinText:"underline",hoverTextDecorationWithinText:"none",textDecorationOutsideText:"none",hoverTextDecorationOutsideText:"underline",focusOutlineWidth:i.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:i.style,hoverColor:Object(T["a"])(t.textLink,10),colorInverse:t.textLight,focusInverseOutlineColor:t.borderLightest,focusInverseIconOutlineColor:t.borderLightest,iconSize:"1.125em",iconPlusTextMargin:o.xxSmall}}I["canvas"]=function(e){return{color:e["ic-link-color"],focusOutlineColor:e["ic-brand-primary"],hoverColor:Object(T["a"])(e["ic-link-color"],10)}}
I["canvas-high-contrast"]=function(e){return{textDecorationOutsideText:"underline",hoverTextDecorationOutsideText:"none"}}
var j,L,D,R,N,P
var A={componentId:"fbyHH",template:function(e){return"\n\n.fbyHH_bGBk,a.fbyHH_bGBk,button.fbyHH_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";outline-color:transparent;outline-offset:0.25rem;outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit",";transition:outline-color 0.2s;vertical-align:baseline}\n\n.fbyHH_bGBk:focus,a.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{outline-color:").concat(e.focusOutlineColor||"inherit","}\n\n.fbyHH_bGBk[aria-disabled],a.fbyHH_bGBk[aria-disabled],button.fbyHH_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.fbyHH_bGBk::-moz-focus-inner,a.fbyHH_bGBk::-moz-focus-inner,button.fbyHH_bGBk::-moz-focus-inner{border:0}\n\na.fbyHH_bGBk,button.fbyHH_bGBk{color:").concat(e.color||"inherit",";cursor:pointer}\n\na.fbyHH_bGBk.fbyHH_vIby,button.fbyHH_bGBk.fbyHH_vIby{-webkit-text-decoration:").concat(e.textDecorationWithinText||"inherit",";text-decoration:").concat(e.textDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk.fbyHH_bSMN,button.fbyHH_bGBk.fbyHH_bSMN{-webkit-text-decoration:").concat(e.textDecorationOutsideText||"inherit",";text-decoration:").concat(e.textDecorationOutsideText||"inherit","}\n\na.fbyHH_bGBk:focus,button.fbyHH_bGBk:focus{color:").concat(e.color||"inherit","}\n\na.fbyHH_bGBk:active,a.fbyHH_bGBk:hover,button.fbyHH_bGBk:active,button.fbyHH_bGBk:hover{color:").concat(e.hoverColor||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_vIby,a.fbyHH_bGBk:hover.fbyHH_vIby,button.fbyHH_bGBk:active.fbyHH_vIby,button.fbyHH_bGBk:hover.fbyHH_vIby{-webkit-text-decoration:").concat(e.hoverTextDecorationWithinText||"inherit",";text-decoration:").concat(e.hoverTextDecorationWithinText||"inherit","}\n\na.fbyHH_bGBk:active.fbyHH_bSMN,a.fbyHH_bGBk:hover.fbyHH_bSMN,button.fbyHH_bGBk:active.fbyHH_bSMN,button.fbyHH_bGBk:hover.fbyHH_bSMN{-webkit-text-decoration:").concat(e.hoverTextDecorationOutsideText||"inherit",";text-decoration:").concat(e.hoverTextDecorationOutsideText||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH,a.fbyHH_bGBk.fbyHH_dQmH:link,a.fbyHH_bGBk.fbyHH_dQmH:visited,button.fbyHH_bGBk.fbyHH_dQmH{color:").concat(e.colorInverse||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,button.fbyHH_bGBk.fbyHH_dQmH:focus{outline-color:").concat(e.focusInverseOutlineColor||"inherit","}\n\n.fbyHH_bGBk.fbyHH_dQmH:active,.fbyHH_bGBk.fbyHH_dQmH:focus,.fbyHH_bGBk.fbyHH_dQmH:hover,a.fbyHH_bGBk.fbyHH_dQmH:link:active,a.fbyHH_bGBk.fbyHH_dQmH:link:focus,a.fbyHH_bGBk.fbyHH_dQmH:link:hover,a.fbyHH_bGBk.fbyHH_dQmH:visited:active,a.fbyHH_bGBk.fbyHH_dQmH:visited:focus,a.fbyHH_bGBk.fbyHH_dQmH:visited:hover,button.fbyHH_bGBk.fbyHH_dQmH:active,button.fbyHH_bGBk.fbyHH_dQmH:focus,button.fbyHH_bGBk.fbyHH_dQmH:hover{color:").concat(e.colorInverse||"inherit","}\n\nbutton.fbyHH_bGBk{-moz-appearance:none;-ms-user-select:text;-webkit-appearance:none;-webkit-user-select:text;appearance:none;background:none;border:none;cursor:pointer;font-size:1em;margin:0;padding:0;text-align:inherit;user-select:text}\n\n[dir=ltr] button.fbyHH_bGBk,[dir=rtl] button.fbyHH_bGBk{text-align:inherit}\n\n.fbyHH_dnnz{box-sizing:border-box;font-size:").concat(e.iconSize||"inherit","}\n\n.fbyHH_ddMx .fbyHH_dnnz{-webkit-padding-end:").concat(e.iconPlusTextMargin||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .fbyHH_ddMx .fbyHH_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=rtl] .fbyHH_ddMx .fbyHH_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n.fbyHH_bkXt .fbyHH_dnnz{-webkit-padding-end:0;-webkit-padding-start:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=ltr] .fbyHH_bkXt .fbyHH_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n[dir=rtl] .fbyHH_bkXt .fbyHH_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n.fbyHH_FcDy.fbyHH_bkXt,.fbyHH_FcDy.fbyHH_ddMx{align-items:center}")},root:"fbyHH_bGBk",isWithinText:"fbyHH_vIby",isOutsideText:"fbyHH_bSMN","color--link-inverse":"fbyHH_dQmH",icon:"fbyHH_dnnz","iconPlacement--start":"fbyHH_ddMx","iconPlacement--end":"fbyHH_bkXt",truncates:"fbyHH_FcDy"}
var M=(j=Object(x["a"])("8.0.0",{linkRef:"elementRef",variant:"color"}),L=Object(E["a"])(),D=Object(_["j"])(I,A),j(R=L(R=D(R=(P=N=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s]
e=t.call.apply(t,[this].concat(o))
e.state={hasFocus:false}
e.handleElementRef=function(t){var n=e.props,i=n.elementRef,o=n.linkRef
e._link=t
"function"===typeof o&&o(t)
"function"===typeof i&&i(t)}
e.handleClick=function(t){var n=e.props.onClick
var i=Object(a["a"])(e),o=i.interaction
if("disabled"===o){t.preventDefault()
t.stopPropagation()}else"function"===typeof n&&n(t)}
e.handleFocus=function(t){e.setState({hasFocus:true})
"function"===typeof e.props.onFocus&&e.props.onFocus(t)}
e.handleBlur=function(t){e.setState({hasFocus:false})
"function"===typeof e.props.onBlur&&e.props.onBlur(t)}
return e}Object(s["a"])(n,[{key:"focus",value:function(){this._link&&this._link.focus()}},{key:"renderIcon",value:function(){this.props.display
return d.a.createElement("span",{className:A.icon},Object(k["a"])(this.props.renderIcon))}},{key:"render",value:function(){var e
var t=this.props,n=t.children,r=t.onClick,s=t.color,a=t.href,l=t.margin,c=t.renderIcon,u=t.iconPlacement,h=t.isWithinText,p=t.variant,f=Object(o["a"])(t,["children","onClick","color","href","margin","renderIcon","iconPlacement","isWithinText","variant"])
var _=(e={},Object(i["a"])(e,A.root,true),Object(i["a"])(e,A["color--link-inverse"],"inverse"===p||"link-inverse"===s),Object(i["a"])(e,A["iconPlacement--".concat(u)],c&&this.hasVisibleChildren),Object(i["a"])(e,A.truncates,this.containsTruncateText),Object(i["a"])(e,A["is".concat(h?"Within":"Outside","Text")],true),e)
var b=this.interaction
var v="disabled"===b
var y=r&&"button"!==this.element?"button":null
var x="button"===this.element||"input"===this.element?"button":null
var k="button"!==y||v?null:"0"
return d.a.createElement(g["a"],Object.assign({},Object(w["b"])(f),{elementRef:this.handleElementRef,as:this.element,display:this.display,margin:l,href:a,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,"aria-disabled":v?"true":null,role:y,type:x,tabIndex:k,className:m()(_)}),c&&"start"===u&&this.renderIcon(),n,c&&"end"===u&&this.renderIcon())}},{key:"containsTruncateText",get:function(){var e=false
d.a.Children.forEach(this.props.children,(function(t){t&&Object(C["a"])(t,["TruncateText"])&&(e=true)}))
!e||this.props.display
return e}},{key:"display",get:function(){if(this.props.display)return this.props.display
var e=this.containsTruncateText
return this.props.renderIcon?e?"inline-flex":"inline-block":e?"block":"auto"}},{key:"interaction",get:function(){return Object(O["a"])({props:this.props,interactionTypes:["disabled"]})}},{key:"element",get:function(){return Object(S["a"])(n,this.props)}},{key:"focused",get:function(){return Object(v["a"])(this._link)}},{key:"focusable",get:function(){return Object(y["a"])(this._link)}},{key:"hasVisibleChildren",get:function(){return Object(b["a"])(this.props.children)}}])
n.displayName="Link"
return n}(u["Component"]),N.propTypes={children:p.a.node.isRequired,href:p.a.string,color:p.a.oneOf(["link","link-inverse"]),elementRef:p.a.func,as:p.a.elementType,interaction:p.a.oneOf(["enabled","disabled"]),margin:_["c"].spacing,renderIcon:p.a.oneOfType([p.a.func,p.a.node]),iconPlacement:p.a.oneOf(["start","end"]),display:p.a.oneOf(["auto","block","inline-block","flex","inline-flex"]),isWithinText:p.a.bool,onClick:p.a.func,onFocus:p.a.func,onBlur:p.a.func,linkRef:p.a.func,variant:p.a.oneOf(["default","inverse"])},N.defaultProps={href:void 0,elementRef:void 0,interaction:void 0,margin:void 0,renderIcon:void 0,display:void 0,color:"link",as:void 0,iconPlacement:"start",isWithinText:true,onClick:void 0,onFocus:void 0,onBlur:void 0},P))||R)||R)||R)},"9Nap":function(e,t,n){var i=n("/9aa")
var o=1/0
function r(e){if("string"==typeof e||i(e))return e
var t=e+""
return"0"==t&&1/e==-o?"-0":t}e.exports=r},"9P8q":function(e,t,n){"use strict"
var i=n("Y/W1")
var o=n.n(i)
var r=n("mX+G")
var s=n.n(r)
var a=n("W2TM")
var l=n("ygkh")
var c=n("2gWY")
var u=n("s9Pr")
var d=n("HGxv")
var h,p,f=function(e,t){for(var n in t)m.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},m={}.hasOwnProperty
h=Object(d["useScope"])("pages")
p=["contextAssetString","revision"]
t["a"]=function(e){f(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.mixin(c["a"])
t.prototype.resourceName="pages"
t.prototype.idAttribute="page_id"
t.prototype.initialize=function(e,n){var i
t.__super__.initialize.apply(this,arguments)
Object.assign(this,o.a.pick(n||{},p))
this.contextAssetString&&(i=Object(u["a"])(this.contextAssetString),this.contextName=i[0],this.contextId=i[1])
this.on("change:front_page",this.setPublishable)
this.on("change:published",this.setPublishable)
return this.setPublishable()}
t.prototype.setPublishable=function(){var e,t,n,i
t=this.get("front_page")
i=this.get("published")
n=!t||!i
e=!t
this.set("publishable",n)
this.set("deletable",e)
return n?this.unset("publishableMessage"):this.set("publishableMessage",h.t("cannot_unpublish_front_page","Cannot unpublish the front page"))}
t.prototype.disabledMessage=function(){return this.get("publishableMessage")}
t.prototype.urlRoot=function(){return"/api/v1/"+this._contextPath()+"/pages"}
t.prototype.url=function(){return this.get("url")?this.urlRoot()+"/"+this.get("url"):this.urlRoot()}
t.prototype.latestRevision=function(e){var t
if(!this._latestRevision&&this.get("url")&&!this._latestRevision){t=Object.assign({},{contextAssetString:this.contextAssetString,page:this,pageUrl:this.get("url"),latest:true,summary:true},e)
this._latestRevision=new a["a"]({revision_id:this.revision},t)}return this._latestRevision}
t.prototype.parse=function(e,t){var n
e.wiki_page&&(e=o.a.extend(o.a.omit(e,"wiki_page"),e.wiki_page))
e.set_assignment=null!=e.assignment&&e.assignment.only_visible_to_overrides
n=e.assignment||{}
e.assignment=this.createAssignment(n)
return e}
t.prototype.createAssignment=function(e){var t
t=new l["a"](e)
t.alreadyScoped=true
return t}
t.prototype.toJSON=function(){var e,n
e=t.__super__.toJSON.apply(this,arguments)
e.set_assignment||delete e.assignment
e.assignment=null!=(n=e.assignment)?n.toJSON():void 0
return{wiki_page:e}}
t.prototype.present=function(){return Object.assign({},this.attributes,{contextName:this.contextName,contextId:this.contextId,new_record:!this.get("url")})}
t.prototype.duplicate=function(e,t){return $.ajaxJSON("/api/v1/courses/"+e+"/pages/"+this.id+"/duplicate","POST",{},t)}
t.prototype.publish=function(){var e
e={wiki_page:{published:true}}
return this.save(e,{attrs:e,wait:true})}
t.prototype.unpublish=function(){var e
e={wiki_page:{published:false}}
return this.save(e,{attrs:e,wait:true})}
t.prototype.setFrontPage=function(e){var t
t={wiki_page:{front_page:true}}
return this.save(t,{attrs:t,wait:true,complete:e})}
t.prototype.unsetFrontPage=function(){var e
e={wiki_page:{front_page:false}}
return this.save(e,{attrs:e,wait:true})}
return t}(s.a.Model)},"9Qmj":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var i=n("RtDj")
n("q1tI")
n("17x9")
var o=n("TSYQ")
var r=n.n(o)
function s(e){return Object(i["a"])("div",{className:r()({"progress-bar__bar-container":true,"almost-done":100===e.progress})},void 0,Object(i["a"])("div",{className:r()({"progress-bar__bar":true,"almost-done":100===e.progress}),role:"progressbar","aria-valuenow":e.progress,"aria-valuemin":"0","aria-valuemax":"100","aria-label":e["aria-label"]||"",style:{width:Math.min(e.progress,100)+"%"}}))}},"9ggG":function(e,t,n){var i=n("Z0cm"),o=n("/9aa")
var r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/
function a(e,t){if(i(e))return false
var n=typeof e
if("number"==n||"symbol"==n||"boolean"==n||null==e||o(e))return true
return s.test(e)||!r.test(e)||null!=t&&e in Object(t)}e.exports=a},"9rZX":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var i=n("qFS3")
var o=r(i)
function r(e){return e&&e.__esModule?e:{default:e}}t.default=o.default
e.exports=t["default"]},B9nD:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var i=n("mX+G")
var o=n.n(i)
var r=n("HGxv")
var s=n("3H9/")
const a=Object(r["useScope"])("models_DateGroup")
class l extends o.a.Model{dueAt(){const e=this.get("due_at")
return e?s["a"].parse(e):null}unlockAt(){const e=this.get("unlock_at")||this.get("single_section_unlock_at")
return e?s["a"].parse(e):null}lockAt(){const e=this.get("lock_at")||this.get("single_section_lock_at")
return e?s["a"].parse(e):null}now(){const e=this.get("now")
return e?s["a"].parse(e):new Date}alwaysAvailable(){return!this.unlockAt()&&!this.lockAt()}pending(){const e=this.unlockAt()
return e&&e>this.now()}available(){return this.alwaysAvailable()||!this.lockAt()&&this.unlockAt()<this.now()}open(){return this.lockAt()&&!this.pending()&&!this.closed()}closed(){const e=this.lockAt()
return e&&e<this.now()}toJSON(){return{dueFor:this.get("title"),dueAt:this.dueAt(),unlockAt:this.unlockAt(),lockAt:this.lockAt(),available:this.available(),pending:this.pending(),open:this.open(),closed:this.closed()}}}l.prototype.defaults={get title(){return a.t("everyone_else","Everyone else")},due_at:null,unlock_at:null,lock_at:null}},BrAc:function(e,t,n){"use strict"
var i=n("vDqi")
var o=n.n(i)
o.a.defaults.xsrfCookieName="_csrf_token"
o.a.defaults.xsrfHeaderName="X-CSRF-Token"
const r=o.a.defaults.headers.common.Accept
o.a.defaults.headers.common.Accept="application/json+canvas-string-ids, "+r
o.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"
t["a"]=o.a},C7l9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return M}))
var i=n("VTBJ")
var o=n("rePB")
var r=n("1OyB")
var s=n("vuIU")
var a=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var h=n.n(d)
var p=n("TSYQ")
var f=n.n(p)
var m=n("3zPy")
var g=n.n(m)
var _=n("sTNg")
var b=n("Dud2")
var v=n("Afqh")
var y=n("BTe1")
var x=n("J2CL")
var k=n("oXx0")
var w=n("nAyT")
var C=n("jtGx")
var O=n("E+IV")
var S=n("tCl5")
function E(e){var t=e.colors,n=e.typography,i=e.borders,o=e.spacing,r=e.forms
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,borderWidth:i.widthSmall,borderStyle:i.style,borderColor:t.borderMedium,borderRadius:i.radiusMedium,color:t.textDarkest,background:t.backgroundLightest,padding:"0 ".concat(o.small),arrowsContainerWidth:"2rem",arrowsColor:t.textDarkest,arrowsBackgroundColor:t.backgroundLight,arrowsHoverBackgroundColor:t.backgroundMedium,arrowsBorderColor:t.borderMedium,arrowsActiveBoxShadow:"inset 0 0 3px 1px ".concat(t.borderMedium),focusOutlineWidth:i.widthMedium,focusOutlineStyle:i.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,mediumFontSize:n.fontSizeMedium,mediumHeight:r.inputHeightMedium,largeFontSize:n.fontSizeLarge,largeHeight:r.inputHeightLarge}}E.canvas=function(e){return{color:e["ic-brand-font-color-dark"],arrowsColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}
var T,I,j,L,D,R
var N={componentId:"bXpZq",template:function(e){return"\n\n.bXpZq_engK{display:block;position:relative}\n\n.bXpZq_engK:before{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit",'*1.5);bottom:-0.25rem;box-sizing:border-box;content:"";display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bXpZq_engK.bXpZq_eWbJ:before{opacity:1;transform:scale(1)}\n\n.bXpZq_engK.bXpZq_eWbJ.bXpZq_fszt:before{border-color:').concat(e.errorOutlineColor||"inherit","}\n\n.bXpZq_dtDb{border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;display:flex;font-family:").concat(e.fontFamily||"inherit",";margin:0;overflow:hidden;transition:all 0.2s}\n\n.bXpZq_dtDb.bXpZq_fszt{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bXpZq_dtDb.bXpZq_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bXpZq_dtDb.bXpZq_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:").concat(e.mediumHeight||"inherit","}\n\n.bXpZq_dtDb.bXpZq_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:").concat(e.largeHeight||"inherit","}\n\n.bXpZq_cwos,input[type].bXpZq_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;direction:inherit;display:inline;empty-cells:show;flex:1;float:none;font-family:serif;font-family:inherit;font-size:medium;font-size:inherit;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;min-width:0.0625rem;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .bXpZq_cwos,[dir=ltr] input[type].bXpZq_cwos{text-align:left}\n\n[dir=rtl] .bXpZq_cwos,[dir=rtl] input[type].bXpZq_cwos{text-align:right}\n\n.bXpZq_cwos::-ms-clear,input[type].bXpZq_cwos::-ms-clear{display:none}\n\n.bXpZq_cwos:-ms-input-placeholder,input[type].bXpZq_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bXpZq_cwos::placeholder,input[type].bXpZq_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bXpZq_cNTO{display:flex;flex:0 0 ").concat(e.arrowsContainerWidth||"inherit",";flex-direction:column}\n\n.bXpZq_cNTO.bXpZq_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bXpZq_fAVq{-ms-user-select:none;-webkit-border-end:none;-webkit-border-start:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.arrowsBorderColor||"inherit",";-webkit-user-select:none;align-items:center;background-color:").concat(e.arrowsBackgroundColor||"inherit",";border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.arrowsBorderColor||"inherit",";border-inline-end:none;border-inline-start:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.arrowsBorderColor||"inherit",";border-top:none;color:").concat(e.arrowsColor||"inherit",";cursor:pointer;display:flex;flex:1;justify-content:center;text-align:center;user-select:none}\n\n[dir=ltr] .bXpZq_fAVq{border-left:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.arrowsBorderColor||"inherit",";border-right:none;text-align:center}\n\n[dir=rtl] .bXpZq_fAVq{border-left:none;border-right:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.arrowsBorderColor||"inherit",";text-align:center}\n\n.bXpZq_fAVq:last-child{border-bottom:none}\n\n.bXpZq_fAVq:hover{background-color:").concat(e.arrowsHoverBackgroundColor||"inherit","}\n\n.bXpZq_fAVq:active{box-shadow:").concat(e.arrowsActiveBoxShadow||"inherit","}")},inputWidth:"bXpZq_engK",focus:"bXpZq_eWbJ",invalid:"bXpZq_fszt",inputContainer:"bXpZq_dtDb",disabled:"bXpZq_ywdX",medium:"bXpZq_ycrn",large:"bXpZq_cMDj",input:"bXpZq_cwos",arrowContainer:"bXpZq_cNTO",arrow:"bXpZq_fAVq"}
var P=u.a.createElement(b["a"],null)
var A=u.a.createElement(v["a"],null)
var M=(T=Object(w["a"])("8.0.0",{label:"renderLabel",required:"isRequired",inline:"display"}),I=Object(k["a"])(),j=Object(x["j"])(E,N),T(L=I(L=j(L=(R=D=function(e){Object(a["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s]
e=t.call.apply(t,[this].concat(o))
e.state={hasFocus:false}
e._input=null
e.handleRef=function(t){e._input=t
e.props.inputRef(t)}
e.handleFocus=function(t){e.setState({hasFocus:true})
e.props.onFocus(t)}
e.handleBlur=function(t){e.setState({hasFocus:false})
e.props.onBlur(t)}
e.handleChange=function(t){e.props.onChange(t,t.target.value)}
e.handleKeyDown=function(t){e.props.onKeyDown(t)
if(t.keyCode===g.a.codes.down){t.preventDefault()
e.props.onDecrement(t)}else if(t.keyCode===g.a.codes.up){t.preventDefault()
e.props.onIncrement(t)}}
e.handleClickUpArrow=function(t){e.arrowClicked(t,e.props.onIncrement)}
e.handleClickDownArrow=function(t){e.arrowClicked(t,e.props.onDecrement)}
return e}Object(s["a"])(n,[{key:"arrowClicked",value:function(e,t){var n=this.interaction
e.preventDefault()
if("enabled"===n){this._input.focus()
t(e)}}},{key:"renderArrows",value:function(){return u.a.createElement("span",{className:N.arrowContainer},u.a.createElement("button",{"aria-hidden":true,className:N.arrow,onMouseDown:this.handleClickUpArrow,tabIndex:"-1",type:"button"},P),u.a.createElement("button",{"aria-hidden":true,className:N.arrow,onMouseDown:this.handleClickDownArrow,tabIndex:"-1",type:"button"},A))}},{key:"render",value:function(){var e,t
var r=this.props,s=r.label,a=r.renderLabel,l=r.inline,c=r.display,d=r.placeholder,h=r.required,p=r.isRequired,m=r.showArrows,g=r.size,b=r.value,v=r.width
var y=this.interaction
return u.a.createElement(_["a"],Object.assign({},Object(C["c"])(this.props,_["a"].propTypes),{label:Object(O["a"])(a||s),inline:"inline-block"===c||l,id:this.id}),u.a.createElement("span",{className:f()(N.inputWidth,(e={},Object(o["a"])(e,N.focus,this.state.hasFocus),Object(o["a"])(e,N.invalid,this.invalid),e)),style:v?{width:v}:null},u.a.createElement("span",{className:f()(N.inputContainer,(t={},Object(o["a"])(t,N.disabled,"disabled"===y),Object(o["a"])(t,N.focus,this.state.hasFocus),Object(o["a"])(t,N.invalid,this.invalid),Object(o["a"])(t,N[g],g),t))},u.a.createElement("input",Object.assign({},Object(C["a"])(this.props,Object(i["a"])({},_["a"].propTypes,{},n.propTypes)),{className:N.input,"aria-invalid":this.invalid?"true":null,id:this.id,type:"text",inputMode:this.props.inputMode,placeholder:d,ref:this.handleRef,required:p||h,value:b,disabled:"disabled"===y,readOnly:"readonly"===y,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown})),m?this.renderArrows():null)))}},{key:"id",get:function(){if(this.props.id)return this.props.id
this._id||(this._id=Object(y["a"])("NumberInput"))
return this._id}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.some((function(e){return"error"===e.type}))}},{key:"interaction",get:function(){return Object(S["a"])({props:this.props})}}])
n.displayName="NumberInput"
return n}(c["Component"]),D.propTypes={renderLabel:h.a.oneOfType([h.a.node,h.a.func]).isRequired,id:h.a.string,interaction:h.a.oneOf(["enabled","disabled","readonly"]),messages:h.a.arrayOf(_["d"].message),placeholder:h.a.string,isRequired:h.a.bool,showArrows:h.a.bool,size:h.a.oneOf(["medium","large"]),value:h.a.oneOfType([h.a.string,h.a.number]),width:h.a.string,display:h.a.oneOf(["inline-block","block"]),inputRef:h.a.func,onFocus:h.a.func,onBlur:h.a.func,onChange:h.a.func,onDecrement:h.a.func,onIncrement:h.a.func,onKeyDown:h.a.func,inputMode:h.a.oneOf(["numeric","decimal","tel"]),label:h.a.node,required:h.a.bool,inline:h.a.bool},D.defaultProps={id:null,interaction:void 0,messages:[],placeholder:null,isRequired:false,showArrows:true,size:"medium",value:void 0,width:void 0,display:"block",inputRef:function(e){},onFocus:function(e){},onBlur:function(e){},onChange:function(e,t){},onDecrement:function(e){},onIncrement:function(e){},onKeyDown:function(e){},label:void 0,disabled:void 0,readOnly:void 0,inputMode:"numeric",required:void 0,inline:void 0},R))||L)||L)||L)},C8i9:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("QYKH")
var l=n("EyBU")
n("dhbk")
var c=function(e,t){return function(){return e.apply(t,arguments)}},u=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty,h=[].slice
t["a"]=function(e){u(t,e)
function t(){this.externalToolEnabled=c(this.externalToolEnabled,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.url=function(){return this.isNew()?t.__super__.url.apply(this,arguments):"/api/v1/files/"+this.id}
t.prototype.initialize=function(e,n){null==n&&(n={})
this.preflightUrl=n.preflightUrl
return t.__super__.initialize.apply(this,arguments)}
t.prototype.save=function(e,n){var i,r,s,a,c,u
null==e&&(e={})
null==n&&(n={})
if(!this.get("file"))return t.__super__.save.apply(this,arguments)
this.set(e)
i=o.a.Deferred()
c=(d=this,function(e){d.set(e)
i.resolve(e)
return"function"===typeof n.success?n.success(e):void 0})
var d
a=function(e){i.reject(e)
return"function"===typeof n.error?n.error(e):void 0}
r=this.get("file")
s=(r.value||r.name).split(/[\/\\]/).pop()
r=r.files[0]
u={name:s,on_duplicate:"rename"}
Object(l["uploadFile"])(this.preflightUrl,u,r).then(c)["catch"](a)
return i}
t.prototype.isFile=true
t.prototype.toJSON=function(){var e
if(!this.get("file"))return t.__super__.toJSON.apply(this,arguments)
return s.a.pick.apply(s.a,[this.attributes,"file"].concat(h.call(s.a.keys(null!=(e=this.uploadParams)?e:{}))))}
t.prototype.present=function(){return s.a.clone(this.attributes)}
t.prototype.externalToolEnabled=function(e){var t
if(e.accept_media_types&&e.accept_media_types.length>0){t=this.get("content-type")
return s.a.find(e.accept_media_types.split(","),(function(e){var n
n=new RegExp("^"+e.replace("*",".*")+"$")
return t.match(n)}))}return true}
return t}(a["a"])},CMdt:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M790.588235,1468.23529 C416.865882,1468.23529 112.941176,1164.31059 112.941176,790.588235 C112.941176,416.865882 416.865882,112.941176 790.588235,112.941176 C1164.31059,112.941176 1468.23529,416.865882 1468.23529,790.588235 C1468.23529,1164.31059 1164.31059,1468.23529 790.588235,1468.23529 L790.588235,1468.23529 Z M1387.36941,1307.52 C1507.76471,1168.82824 1581.17647,988.235294 1581.17647,790.588235 C1581.17647,354.748235 1226.42824,2.84217094e-14 790.588235,2.84217094e-14 C354.748235,2.84217094e-14 2.84217094e-14,354.748235 2.84217094e-14,790.588235 C2.84217094e-14,1226.42824 354.748235,1581.17647 790.588235,1581.17647 C988.235294,1581.17647 1168.82824,1507.76471 1307.52,1387.36941 L1823.54824,1903.51059 L1903.51059,1823.54824 L1387.36941,1307.52 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconSearch",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconSearchLine"
return n}(l["Component"])
h.glyphName="search"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},CMye:function(e,t,n){var i=n("GoyQ")
function o(e){return e===e&&!i(e)}e.exports=o},Cwc5:function(e,t,n){var i=n("NKxu"),o=n("Npjl")
function r(e,t){var n=o(e,t)
return i(n)?n:void 0}e.exports=r},"E/5I":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("HGxv")
const o=Object(i["useScope"])("move_positions")
function r(e,t){const n=e.slice()
const i=n.indexOf(t);-1!==i&&n.splice(i,1)
return n}function s(e,t){let n=e.slice()
t.forEach(e=>{n=r(n,e)})
return n}const a={first:{type:"absolute",get label(){return o.t("At the Top")},apply:({items:e,order:t})=>[...e,...s(t,e)]},before:{type:"relative",get label(){return o.t("Before..")},apply:({order:e,items:t,relativeTo:n})=>{const i=s(e,t)
return[...i.slice(0,n),...t,...i.slice(n)]}},after:{type:"relative",get label(){return o.t("After..")},apply:({order:e,items:t,relativeTo:n})=>{const i=s(e,t)
return[...i.slice(0,n+1),...t,...i.slice(n+1)]}},last:{type:"absolute",get label(){return o.t("At the Bottom")},apply:({order:e,items:t})=>[...s(e,t),...t]}}},E2jh:function(e,t,n){var i=n("2gN3")
var o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""),r?"Symbol(src)_1."+r:"")
var r
function s(e){return!!o&&o in e}e.exports=s},EpBk:function(e,t){function n(e){var t=typeof e
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}e.exports=n},ErZx:function(e,t,n){"use strict"
const i={auto_focus:false,block_formats:void 0,body_class:"default-theme",content_css:[],directionality:"ltr",height:void 0,language:"en",menubar:void 0,menu:void 0,toolbar:void 0,plugins:void 0,branding:false,browser_spellcheck:true,content_style:void 0,convert_urls:false,font_formats:"Lato=lato,Helvetica Neue,Helvetica,Arial,sans-serif; Balsamiq Sans=Balsamiq Sans,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Architect's Daughter=Architects Daughter,lato,Helvetica Neue,Helvetica,Arial,sans-serif; Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",language_load:false,language_url:"none",toolbar_mode:"floating",toolbar_ticky:true,mobile:{theme:"silver"},preview_styles:"font-family font-size font-weight font-style text-decoration text-transform border border-radius outline text-shadow",remove_script_host:true,resize:true,skin:false,statusbar:false,valid_elements:"@[id|class|style|title|dir<ltr?rtl|lang|xml::lang|role],a[rel|rev|charset|hreflang|tabindex|accesskey|type|name|href|target|title|class],strong/b,em/i,strike/s,u,#p,-ol[type|compact],-ul[type|compact],-li,br,img[longdesc|usemap|src|border|alt|title|hspace|vspace|width|height|align|role],-sub,-sup,-blockquote[cite],-table[border=0|cellspacing|cellpadding|width|frame|rules|height|align|summary|bgcolor|background|bordercolor],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,-div,-span,-code,-pre,address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value|_value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,kbd,q[cite],samp,small,tt,var,big,figure,figcaption,source[media|sizes|src|srcset|type],track,mark,article,aside,details,footer,header,nav,section,summary,time",extended_valid_elements:"@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[id|data-media-type|title|src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],#p,li[value],-ol[reversed|start|type|compact],pre[width],table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],tr[char|charoff|valign|bgcolor],-ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],picture,ruby,rp,rt,wbrsvg[*],g[*],circle[*]",non_empty_elements:"td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track ruby",target_list:false,link_title:false,default_link_target:"_blank"}
t["a"]=i},EyBU:function(e,t,n){"use strict"
n.r(t)
n.d(t,"uploadFile",(function(){return h}))
n.d(t,"completeUpload",(function(){return p}))
n.d(t,"submissionCommentAttachmentsUpload",(function(){return f}))
n.d(t,"uploadFiles",(function(){return m}))
var i=n("BrAc")
var o=n("Qyje")
var r=n.n(o)
var s=n("HGxv")
var a=n("gBVS")
const l=Object(s["useScope"])("upload_file")
function c(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to initiate the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function u(e){if("Network Error"===e.message){const t=new Error(l.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function d(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to complete the upload."))
t.originalError=e
return Promise.reject(t)}return Promise.reject(e)}function h(e,t,n,o=i["a"],s){if(!n&&!t.url)throw new Error("expected either a file to upload or a url to clone",{file:n,preflightData:t})
if(n&&t.url)throw new Error("can't upload with both a file object and a url to clone",{file:n,preflightData:t})
t.no_redirect=true
t["attachment[context_code]"]&&(t=r.a.stringify(t))
return o.post(e,t).catch(c).then(e=>p(e.data,n,{ajaxLib:o,onProgress:s}))}function p(e,t,n={}){const o=n.ajaxLib||i["a"]
const s=n.ajaxLibOptions||{}
e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0])
if(!e)throw new Error("expected a preflightResponse")
if(t&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!t&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const{upload_url:l,progress:c}=e
if(!l)return Object(a["a"])(c,{ajaxLib:o}).catch(d)
let{file_param:h,upload_params:p,success_url:f}=e
h=h||"file"
p=p||{}
f=f||p.success_url
const m=!!f
const g=new FormData
Object.entries(p).forEach(([e,t])=>g.append(e,t))
t&&g.append(h,t,n.filename)
const _=o.post(l,g,{responseType:m?"document":"json",onUploadProgress:n.onProgress,withCredentials:!m,...s})
return _.catch(u).then(e=>{if(c)return Object(a["a"])(c,{ajaxLib:o}).catch(d)
let t,i={}
if(f){const{Bucket:n,Key:o,ETag:r}=e.data
t=f
i={bucket:n,key:o,etag:r}}else if(201===e.status&&!n.ignoreResult){t=e.data.location
i={}}if(t){n.includeAvatar&&(i.include="avatar")
i=r.a.stringify(i)
i&&(t=-1!==t.indexOf("?")?`${t}&${i}`:`${t}?${i}`)
return o.get(t).then(({data:e})=>e).catch(d)}return e.data})}function f(e,t,n){const i=`/api/v1/courses/${t}/assignments/${n}/submissions/self/comments/files`
const o=e.map(e=>{const t={name:e.name,content_type:e.type}
return h(i,t,e)})
return Promise.all(o)}function m(e,t){const n=e.map(e=>e.url?h(t,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:false}):h(t,{name:e.name,content_type:e.type},e))
return Promise.all(n)}},FdVj:function(e,t,n){"use strict"
var i=n("qJBq")
var o=n.n(i)
var r=n("HGxv")
const s={_parseNumber:o.a,parse(e){if(null==e)return NaN
if("number"===typeof e)return e
let t=s._parseNumber(e.toString(),{thousands:r["default"].lookup("number.format.delimiter"),decimal:r["default"].lookup("number.format.separator")})
isNaN(t)&&(t=s._parseNumber(e))
e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e))
return t},validate:e=>!isNaN(s.parse(e))}
t["a"]=s},G4i8:function(e,t,n){var i={"./__tests__/lti.resourceImported.test.js":["LFe7",4207],"./__tests__/lti.screenReaderAlert.test.js":["0Guc",4208],"./__tests__/lti.showAlert.test.js":["+y7l",4209],"./__tests__/org.imsglobal.lti.get_data.test.js":["CXUv",4194],"./__tests__/org.imsglobal.lti.put_data.test.js":["mElt",4195],"./__tests__/requestFullWindowLaunch.test.js":["o6ta",4210],"./lti.enableScrollEvents.js":["HVU3",4269],"./lti.fetchWindowSize.js":["OANa",4270],"./lti.frameResize.js":["bSyB",4196],"./lti.removeUnloadMessage.js":["tjuu",4211],"./lti.resourceImported.js":["FC2N",4271],"./lti.screenReaderAlert.js":["YYEg",4272],"./lti.scrollToTop.js":["W/R1",4273],"./lti.setUnloadMessage.js":["6fDN",4212],"./lti.showAlert.js":["onLg",4274],"./lti.showModuleNavigation.js":["NSTA",4275],"./org.imsglobal.lti.capabilities.js":["zPPZ",4276],"./org.imsglobal.lti.get_data.js":["lH2A",4205],"./org.imsglobal.lti.put_data.js":["hugc",4206],"./requestFullWindowLaunch.js":["8IHO",4277],"./toggleCourseNavigationMenu.js":["ECMy",4204]}
function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t}))
var t=i[e],o=t[0]
return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)}
o.id="G4i8"
e.exports=o},GDhZ:function(e,t,n){var i=n("wF/u"),o=n("mwIZ"),r=n("hgQt"),s=n("9ggG"),a=n("CMye"),l=n("IOzZ"),c=n("9Nap")
var u=1,d=2
function h(e,t){if(s(e)&&a(t))return l(c(e),t)
return function(n){var s=o(n,e)
return void 0===s&&s===t?r(n,e):i(t,s,u|d)}}e.exports=h},GEFT:function(e,t,n){"use strict"
var i=n("mX+G")
var o=n.n(i)
n("Y/W1")
n("ouhR")
var r=n("B9nD")
var s=function(e,t){for(var n in t)a.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
t["a"]=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.model=r["a"]
return t}(o.a.Collection)},GN1s:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
class s extends r.a.Component{render(){return Object(i["a"])("div",{className:this.props.className},void 0,Object(i["a"])("div",{className:this.props.footerClassName},void 0,this.props.children))}}s.displayName="ModalButtons"
s.defaultProps={className:"ReactModal__Footer",footerClassName:"ReactModal__Footer-Actions"}},GNiM:function(e,t,n){var i=n("I01J")
var o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
var r=/\\(\\)?/g
var s=i((function(e){var t=[]
46===e.charCodeAt(0)&&t.push("")
e.replace(o,(function(e,n,i,o){t.push(i?o.replace(r,"$1"):n||e)}))
return t}))
e.exports=s},GTSS:function(e,t,n){"use strict"
n.d(t,"a",(function(){return S}))
var i=n("rePB")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("TSYQ")
var p=n.n(h)
var f=n("BTe1")
var m=n("J2CL")
var g=n("oXx0")
var _=n("jtGx")
var b=n("/UXv")
function v(e){var t=e.spacing,n=e.borders,i=e.colors,o=e.forms,r=e.shadows,s=e.typography
return{labelColor:i.textDarkest,labelFontFamily:s.fontFamily,labelFontWeight:s.fontWeightNormal,labelLineHeight:s.lineHeightCondensed,background:i.backgroundLightest,borderWidth:n.widthSmall,borderColor:i.borderMedium,hoverBorderColor:i.borderDarkest,controlSize:"0.1875rem",focusBorderColor:i.borderBrand,focusBorderWidth:n.widthMedium,focusBorderStyle:n.style,simpleFacadeSmallSize:"1rem",simpleFacadeMediumSize:"1.25rem",simpleFacadeLargeSize:"1.75rem",simpleCheckedInsetSmall:"0.1875rem",simpleCheckedInsetMedium:"0.25rem",simpleCheckedInsetLarge:"0.375rem",simpleFontSizeSmall:s.fontSizeSmall,simpleFontSizeMedium:s.fontSizeMedium,simpleFontSizeLarge:s.fontSizeLarge,simpleFacadeMarginEnd:t.xSmall,toggleBorderRadius:n.radiusSmall,toggleBorderWidth:n.widthLarge,toggleBackgroundSuccess:i.backgroundSuccess,toggleBackgroundOff:i.backgroundDark,toggleBackgroundDanger:i.backgroundDanger,toggleBackgroundWarning:i.backgroundWarning,toggleHandleText:i.textLightest,toggleSmallHeight:o.inputHeightSmall,toggleMediumHeight:o.inputHeightMedium,toggleLargeHeight:o.inputHeightLarge,toggleShadow:r.depth1,toggleSmallFontSize:s.fontSizeXSmall,toggleMediumFontSize:s.fontSizeSmall,toggleLargeFontSize:s.fontSizeMedium}}v["canvas-a11y"]=v["canvas-high-contrast"]=function(e){var t=e.colors
return{toggleBackgroundOff:t.backgroundDarkest}}
v.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"],hoverBorderColor:e["ic-brand-font-color-dark"],labelColor:e["ic-brand-font-color-dark"]}}
var y,x,k,w,C
var O={componentId:"Vmatu",template:function(e){return"\n\n.Vmatu_bGBk{position:relative;width:100%}\n\n.Vmatu_bGBk:hover{cursor:default}\n\n.Vmatu_bOnW{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;direction:inherit;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n[dir=ltr] .Vmatu_bOnW{text-align:left}\n\n[dir=rtl] .Vmatu_bOnW{text-align:right}\n\n.Vmatu_cwos,input.Vmatu_cwos[type=radio]{font-size:inherit;left:0;line-height:inherit;margin:0;opacity:0.0001;padding:0;position:absolute;top:0;width:auto}\n\n.Vmatu_ywdX{opacity:0.5}\n\n.Vmatu_ywdX:hover{cursor:not-allowed}\n\n.Vmatu_eXrk{display:inline-block;vertical-align:middle;width:auto}\n\n.Vmatu_blJt{color:".concat(e.labelColor||"inherit",";flex:1 1 auto;font-family:").concat(e.labelFontFamily||"inherit",";font-weight:").concat(e.labelFontWeight||"inherit",";line-height:").concat(e.labelLineHeight||"inherit","}\n\n.Vmatu_cAug .Vmatu_bOnW{align-items:flex-start;display:flex}\n\n.Vmatu_cAug .Vmatu_cSXm{-webkit-margin-end:").concat(e.simpleFacadeMarginEnd||"inherit",";-webkit-margin-start:0;background:").concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:100%;box-sizing:border-box;display:block;flex-shrink:0;margin-inline-end:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-inline-start:0;min-width:1rem;position:relative;transition:all 0.2s ease-out}\n\n[dir=ltr] .Vmatu_cAug .Vmatu_cSXm{margin-left:0;margin-right:").concat(e.simpleFacadeMarginEnd||"inherit","}\n\n[dir=rtl] .Vmatu_cAug .Vmatu_cSXm{margin-left:").concat(e.simpleFacadeMarginEnd||"inherit",";margin-right:0}\n\n.Vmatu_cAug .Vmatu_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",';border-radius:100%;box-sizing:border-box;content:"";height:calc(100% + 0.75rem);left:-0.375rem;opacity:0;pointer-events:none;position:absolute;top:-0.375rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.75rem)}\n\n.Vmatu_cAug.Vmatu_doqw .Vmatu_cSXm{height:').concat(e.simpleFacadeSmallSize||"inherit",";width:").concat(e.simpleFacadeSmallSize||"inherit","}\n\n.Vmatu_cAug.Vmatu_doqw .Vmatu_blJt{font-size:").concat(e.simpleFontSizeSmall||"inherit","}\n\n.Vmatu_cAug.Vmatu_doqw .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetSmall||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug.Vmatu_ycrn .Vmatu_cSXm{height:").concat(e.simpleFacadeMediumSize||"inherit",";width:").concat(e.simpleFacadeMediumSize||"inherit","}\n\n.Vmatu_cAug.Vmatu_ycrn .Vmatu_blJt{font-size:").concat(e.simpleFontSizeMedium||"inherit","}\n\n.Vmatu_cAug.Vmatu_ycrn .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetMedium||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug.Vmatu_cMDj .Vmatu_cSXm{height:").concat(e.simpleFacadeLargeSize||"inherit",";width:").concat(e.simpleFacadeLargeSize||"inherit","}\n\n.Vmatu_cAug.Vmatu_cMDj .Vmatu_blJt{font-size:").concat(e.simpleFontSizeLarge||"inherit","}\n\n.Vmatu_cAug.Vmatu_cMDj .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{box-shadow:inset 0 0 0 ").concat(e.simpleCheckedInsetLarge||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:hover+.Vmatu_bOnW .Vmatu_cSXm{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{background:").concat(e.background||"inherit",";border-color:").concat(e.hoverBorderColor||"inherit",";box-shadow:inset 0 0 0 ").concat(e.controlSize||"inherit"," ").concat(e.hoverBorderColor||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_cSXm{background:").concat(e.background||"inherit","}\n\n.Vmatu_cAug .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_cSXm:before{opacity:1;transform:scale(1)}\n\n.Vmatu_cjSw .Vmatu_bOnW{-ms-user-select:none;-webkit-user-select:none;box-sizing:border-box;display:block;position:relative;user-select:none}\n\n.Vmatu_cjSw .Vmatu_blJt{align-items:center;display:flex;line-height:1;min-width:0.0625rem;overflow:hidden;position:relative;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap;z-index:1}\n\n.Vmatu_cjSw .Vmatu_cSXm{border-radius:").concat(e.toggleBorderRadius||"inherit",";box-shadow:").concat(e.toggleShadow||"inherit",";display:block;height:100%;left:0;top:0;visibility:hidden;width:100%;z-index:1}\n\n.Vmatu_cjSw .Vmatu_cSXm,.Vmatu_cjSw .Vmatu_cSXm:before{box-sizing:border-box;position:absolute}\n\n.Vmatu_cjSw .Vmatu_cSXm:before{border:").concat(e.focusBorderWidth||"inherit"," ").concat(e.focusBorderStyle||"inherit"," ").concat(e.focusBorderColor||"inherit",";border-radius:calc(").concat(e.toggleBorderRadius||"inherit",' + 0.0625rem);content:"";height:calc(100% + 0.5rem);left:-0.25rem;opacity:0;top:-0.25rem;transform:scale(0.75);transition:all 0.2s;width:calc(100% + 0.5rem)}\n\n.Vmatu_cjSw.Vmatu_cOXX .Vmatu_cSXm{background-color:').concat(e.toggleBackgroundSuccess||"inherit","}\n\n.Vmatu_cjSw.Vmatu_zGXc .Vmatu_cSXm{background-color:").concat(e.toggleBackgroundDanger||"inherit","}\n\n.Vmatu_cjSw.Vmatu_eRqw .Vmatu_cSXm{background-color:").concat(e.toggleBackgroundWarning||"inherit","}\n\n.Vmatu_cjSw.Vmatu_ksNK .Vmatu_cSXm{background-color:").concat(e.toggleBackgroundOff||"inherit","}\n\n.Vmatu_cjSw.Vmatu_doqw .Vmatu_bOnW{height:").concat(e.toggleSmallHeight||"inherit",";padding:0 0.5rem}\n\n.Vmatu_cjSw.Vmatu_doqw .Vmatu_bOnW .Vmatu_blJt{font-size:").concat(e.toggleSmallFontSize||"inherit",";height:").concat(e.toggleSmallHeight||"inherit","}\n\n.Vmatu_cjSw.Vmatu_doqw .Vmatu_bOnW .Vmatu_blJt svg{font-size:calc(").concat(e.toggleSmallFontSize||"inherit"," + 0.375rem)}\n\n.Vmatu_cjSw.Vmatu_ycrn .Vmatu_bOnW{height:").concat(e.toggleMediumHeight||"inherit",";padding:0 0.875rem}\n\n.Vmatu_cjSw.Vmatu_ycrn .Vmatu_bOnW .Vmatu_blJt{font-size:").concat(e.toggleMediumFontSize||"inherit",";height:").concat(e.toggleMediumHeight||"inherit","}\n\n.Vmatu_cjSw.Vmatu_ycrn .Vmatu_bOnW .Vmatu_blJt svg{font-size:calc(").concat(e.toggleMediumFontSize||"inherit"," + 0.375rem)}\n\n.Vmatu_cjSw.Vmatu_cMDj .Vmatu_bOnW{height:").concat(e.toggleLargeHeight||"inherit",";padding:0 1rem}\n\n.Vmatu_cjSw.Vmatu_cMDj .Vmatu_bOnW .Vmatu_blJt{font-size:").concat(e.toggleLargeFontSize||"inherit",";height:").concat(e.toggleLargeHeight||"inherit","}\n\n.Vmatu_cjSw.Vmatu_cMDj .Vmatu_bOnW .Vmatu_blJt svg{font-size:calc(").concat(e.toggleLargeFontSize||"inherit"," + 0.375rem)}\n\n.Vmatu_cjSw .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_cSXm{visibility:visible}\n\n.Vmatu_cjSw .Vmatu_cwos:checked+.Vmatu_bOnW .Vmatu_blJt{color:").concat(e.toggleHandleText||"inherit","}\n\n.Vmatu_cjSw .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_blJt{text-decoration:underline}\n\n.Vmatu_cjSw .Vmatu_cwos:focus+.Vmatu_bOnW .Vmatu_cSXm:before{opacity:1;transform:scale(1)}")},root:"Vmatu_bGBk",control:"Vmatu_bOnW",input:"Vmatu_cwos",disabled:"Vmatu_ywdX",inline:"Vmatu_eXrk",label:"Vmatu_blJt",simple:"Vmatu_cAug",facade:"Vmatu_cSXm",small:"Vmatu_doqw",medium:"Vmatu_ycrn",large:"Vmatu_cMDj",toggle:"Vmatu_cjSw",success:"Vmatu_cOXX",danger:"Vmatu_zGXc",warning:"Vmatu_eRqw",off:"Vmatu_ksNK"}
var S=(y=Object(g["a"])(),x=Object(m["j"])(v,O),y(k=x(k=(C=w=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var i
Object(o["a"])(this,n)
i=t.call(this,e)
i.handleClick=function(e){if(i.props.disabled||i.props.readOnly){e.preventDefault()
return}i.props.onClick(e)}
i.handleChange=function(e){if(i.props.disabled||i.props.readOnly){e.preventDefault()
return}"undefined"===typeof i.props.checked&&i.setState({checked:!i.state.checked})
i.props.onChange(e)}
i.state={}
"undefined"===typeof e.checked&&(i.state.checked=false)
i._defaultId=Object(f["a"])("RadioInput")
return i}Object(r["a"])(n,[{key:"focus",value:function(){this._input.focus()}},{key:"render",value:function(){var e,t=this
var o=this.props,r=o.disabled,s=o.readOnly,a=o.label,l=o.variant,u=o.size,d=o.inline,h=o.context,f=o.value,m=o.name
var g=Object(_["a"])(this.props,n.propTypes)
var b=(e={},Object(i["a"])(e,O.root,true),Object(i["a"])(e,O.disabled,r),Object(i["a"])(e,O[l],true),Object(i["a"])(e,O[h],"toggle"===l),Object(i["a"])(e,O[u],true),Object(i["a"])(e,O["inline"],d),e)
return c.a.createElement("div",{className:p()(b)},c.a.createElement("input",Object.assign({},g,{id:this.id,ref:function(e){t._input=e},value:f,name:m,checked:this.checked,type:"radio",className:O.input,disabled:r||s,"aria-disabled":r||s?"true":null,onChange:this.handleChange,onClick:this.handleClick})),c.a.createElement("label",{className:O.control,htmlFor:this.id},c.a.createElement("span",{className:O.facade,"aria-hidden":"true"}),c.a.createElement("span",{className:O.label},a)))}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return Object(b["a"])(this._input)}},{key:"checked",get:function(){return"undefined"===typeof this.props.checked?this.state.checked:this.props.checked}}])
n.displayName="RadioInput"
return n}(l["Component"]),w.propTypes={label:d.a.node.isRequired,value:d.a.oneOfType([d.a.string,d.a.number]),id:d.a.string,name:d.a.string,checked:d.a.bool,disabled:d.a.bool,readOnly:d.a.bool,variant:d.a.oneOf(["simple","toggle"]),size:d.a.oneOf(["small","medium","large"]),context:d.a.oneOf(["success","warning","danger","off"]),inline:d.a.bool,onClick:d.a.func,onChange:d.a.func},w.defaultProps={onClick:function(e){},onChange:function(e){},variant:"simple",size:"medium",disabled:false,inline:false,context:"success",readOnly:false,checked:void 0,id:void 0,name:void 0,value:void 0},C))||k)||k)},H8j4:function(e,t,n){var i=n("QkVE")
function o(e,t){var n=i(this,e),o=n.size
n.set(e,t)
this.size+=n.size==o?0:1
return this}e.exports=o},HeaX:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _}))
var i=n("RtDj")
var o=n("HGxv")
var r=n("q1tI")
var s=n.n(r)
n("17x9")
var a=n("Mmr1")
var l=n("n12J")
var c=n("TstA")
var u=n("msMH")
var d=n("Dibh")
var h=n("4uX5")
var p=n("qwzJ")
var f=n("1sWr")
var m=n.n(f)
const g=Object(o["useScope"])("canvas_modal")
_.defaultProps={padding:"small",errorImageUrl:m.a,footer:null,title:null,closeButtonSize:"small"}
function _({padding:e,errorSubject:t,errorCategory:n,errorImageUrl:o,label:r,title:f,onDismiss:m,children:_,footer:b,closeButtonSize:v,...y}){null==f&&(f=r)
return s.a.createElement(d["a"],Object.assign({label:r,onDismiss:m},y),Object(i["a"])(d["a"].Header,{},void 0,Object(i["a"])(c["a"],{},void 0,Object(i["a"])(c["a"].Item,{grow:true},void 0,Object(i["a"])(u["a"],{},void 0,f)),Object(i["a"])(c["a"].Item,{},void 0,Object(i["a"])(a["a"],{onClick:m,size:v,screenReaderLabel:g.t("Close")})))),Object(i["a"])(d["a"].Body,{padding:e},void 0,Object(i["a"])(l["a"],{as:"div",height:"100%"},void 0,Object(i["a"])(h["a"],{errorComponent:Object(i["a"])(p["a"],{imageUrl:o,errorSubject:t,errorCategory:n})},void 0,_))),b&&Object(i["a"])(d["a"].Footer,{},void 0,"function"===typeof b?b():b))}},Hvzi:function(e,t){function n(e){var t=this.has(e)&&delete this.__data__[e]
this.size-=t?1:0
return t}e.exports=n},I01J:function(e,t,n){var i=n("44Ds")
var o=500
function r(e){var t=i(e,(function(e){n.size===o&&n.clear()
return e}))
var n=t.cache
return t}e.exports=r},IOzZ:function(e,t){function n(e,t){return function(n){if(null==n)return false
return n[e]===t&&(void 0!==t||e in Object(n))}}e.exports=n},IiHG:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var i=n("ouhR")
var o=n.n(i)
var r=n("HGxv")
var s=n("mT8+")
const a=Object(r["useScope"])("pages")
const l={fixDialogButtons:false,title:a.t("delete_dialog_title","Delete Page"),width:Object(s["b"])(240,400),height:"auto"}
class c extends s["a"]{static initClass(){this.prototype.setViewProperties=false
this.optionProperty("wiki_pages_path")
this.optionProperty("focusOnCancel")
this.optionProperty("onDelete")}wrapperTemplate(){return'<div class="outlet"></div>'}template(){return a.t("delete_confirmation","Are you sure you want to delete this page?")}initialize(e){return super.initialize({...l,...e})}submit(e){null!=e&&e.preventDefault()
const t=this.model.destroy({wait:true})
const n=o.a.Deferred()
const i=this.model.get("title")
const{wiki_pages_path:r}=this
t.then(()=>{if(r){const e=new Date
e.setMinutes(e.getMinutes()+1)
const t="/"
o.a.cookie("deleted_page_title",i,{expires:e,path:t})
return window.location.href=r}o.a.flashMessage(a.t("notices.page_deleted",'The page "%{title}" has been deleted.',{title:i}))
n.resolve()
return this.close()})
t.fail(()=>{o.a.flashError(a.t("notices.delete_failed",'The page "%{title}" could not be deleted.',{title:i}))
return n.reject()})
return this.$el.disableWhileLoading(n)}close(){(null!=this.dialog?this.dialog.isOpen():void 0)&&this.dialog.close()
return"delete"===this.buttonClicked?null!=this.onDelete?this.onDelete():void 0:null!=this.focusOnCancel?this.focusOnCancel.focus():void 0}setupDialog(){super.setupDialog(...arguments)
const e=this
const t=[{class:"btn",text:a.t("cancel_button","Cancel"),click:()=>{this.buttonClicked="cancel"
return e.$el.dialog("close")}},{class:"btn btn-danger",text:a.t("delete_button","Delete"),"data-text-while-loading":a.t("deleting_button","Deleting..."),click:()=>{this.buttonClicked="delete"
return e.submit()}}]
return this.$el.dialog("option","buttons",t)}}c.initClass()},Ipg6:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var i=n("ouhR")
var o=n.n(i)
var r=n("FOCd")
var s=n("08kA")
var a=n.n(s)
var l=n("etQE")
function c({path:e,params:t}){const n=o.a.param(t)
if(!n.length)return e
return`${e}?${n}`}async function u({path:e,method:t="GET",headers:n={},params:i={},body:o,fetchOpts:s={}}){const u={...l["e"]}
u.headers["X-CSRF-Token"]=Object(r["a"])("_csrf_token")
if(o&&"string"!==typeof o){o=JSON.stringify(o)
u.headers["Content-Type"]="application/json"}Object.assign(u.headers,n)
Object.assign(u,s)
const d=c({path:e,params:i})
const h=await fetch(d,{body:o,method:t,...u})
if(!h.ok){const e=new Error(`doFetchApi received a bad response: ${h.status} ${h.statusText}`)
Object.assign(e,{response:h})
throw e}const p=h.headers.get("Link")
const f=p&&a()(p)||void 0
const m=await h.text()
const g=m.length>0?JSON.parse(m):void 0
return{json:g,response:h,link:f}}},JC6p:function(e,t,n){var i=n("cq/+"),o=n("7GkX")
function r(e,t){return e&&i(e,t,o)}e.exports=r},JGuX:function(e,t,n){"use strict"
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
var s=n("17x9")
var a=n.n(s)
var l=n("7Y4T")
const c={miniTablet:{minWidth:"500px"},tablet:{minWidth:"768px"},desktop:{minWidth:"992px"},desktopNavOpen:{minWidth:"1140px"},desktopOnly:{minWidth:"768px"},mobileOnly:{maxWidth:"767px"}}
const u=e=>{const t={}
e.forEach(e=>t[e]=true)
return t}
const d=e=>t=>window.matchMedia?Object(i["a"])(l["a"],{match:"media",query:c,render:(n,i)=>r.a.createElement(e,Object.assign({breakpoints:u(i)},t))}):r.a.createElement(e,Object.assign({breakpoints:{}},t))
a.a.shape({miniTablet:a.a.bool,tablet:a.a.bool,desktop:a.a.bool,desktopNavOpen:a.a.bool,desktopOnly:a.a.bool,mobileOnly:a.a.bool})
t["a"]=d},JHgL:function(e,t,n){var i=n("QkVE")
function o(e){return i(this,e).get(e)}e.exports=o},JHuN:function(e,t,n){"use strict"
var i=n("9rZX")
var o=n.n(i)
const r=document.getElementById("application")
r&&o.a.setAppElement(document.getElementById("application"))
t["a"]=o.a},JSQU:function(e,t,n){var i=n("YESw")
var o="__lodash_hash_undefined__"
function r(e,t){var n=this.__data__
this.size+=this.has(e)?0:1
n[e]=i&&void 0===t?o:t
return this}e.exports=r},Juji:function(e,t){function n(e,t){return null!=e&&t in Object(e)}e.exports=n},KIYd:function(e,t,n){"use strict"
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("Y/W1")
var a=n.n(s)
var l=n("mX+G")
var c=n.n(l)
n("ESjL")
var u,d=function(e,t){return function(){return e.apply(t,arguments)}},h=function(e,t){for(var n in t)p.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},p={}.hasOwnProperty
u=Object(i["useScope"])("dialog")
t["a"]=function(e){h(t,e)
function t(){this.cancel=d(this.cancel,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.initDialog()
return this.setElement(this.dialog)}
t.prototype.defaultOptions=function(){return{autoOpen:false,width:420,resizable:false,buttons:[],destroy:false}}
t.prototype.initDialog=function(){var e
e=a.a.extend({},this.defaultOptions(),{buttons:[{text:u.t("#buttons.cancel","Cancel"),class:"cancel_button",click:(t=this,function(e){return t.cancel(e)})},{text:u.t("#buttons.update","Update"),class:"btn-primary",click:function(e){return function(t){return e.update(t)}}(this)}]},a.a.result(this,"dialogOptions"))
var t
this.dialog=r()('<div id="'+e.id+'"></div>').appendTo("body").dialog(e)
e.containerId&&this.dialog.parent().attr("id",e.containerId)
r()(".ui-resizable-handle").attr("aria-hidden",true)
return this.dialog}
t.prototype.show=function(){return this.dialog.dialog("open")}
t.prototype.close=function(){return this.options.destroy?this.dialog.dialog("destroy"):this.dialog.dialog("close")}
t.prototype.update=function(e){throw"Not yet implemented"}
t.prototype.cancel=function(e){e.preventDefault()
return this.close()}
return t}(c.a.View)},KMkd:function(e,t){function n(){this.__data__=[]
this.size=0}e.exports=n},L2KU:function(e,t,n){"use strict"
const i=/<(http.*?)>; rel="([a-z]*)"/g
const o=e=>{const t={}
const n=e.headers?e.headers.link:null
if(!n)return t
let o=i.exec(n)
while(o){t[o[2]]=o[1]
o=i.exec(n)}return t}
t["a"]=o},Lg2F:function(e,t,n){"use strict"
var i=n("17x9")
var o=n.n(i)
var r=n("3jyj")
var s=n("QYKH")
t["a"]={contextType:o.a.oneOf(["users","groups","accounts","courses"]),contextId:o.a.oneOfType([o.a.string,o.a.number]),folder:o.a.instanceOf(r["a"]),filesystemObject:o.a.instanceOf(s["a"])}},MAjw:function(e,t,n){"use strict"
var i=n("Y/W1")
var o=n.n(i)
var r=n("hlSq")
var s=n("i8i4")
var a=n.n(s)
var l=n("9dNb")
class c{constructor(){this.state=this.buildDefaultState()
this.uploadOptions={alwaysRename:false,alwaysUploadZips:false}}buildDefaultState(){return{resolvedNames:[],nameCollisions:[],zipOptions:[],newOptions:false}}async applyCategory(e){const t=async e=>{const t=await l["a"](e.file)
return{...e,...t}}
return Promise.all(e.map(t))}queueUploads(e,t){this.applyCategory(this.state.resolvedNames).then(n=>{n.forEach(n=>{r["a"].enqueue(n,this.folder,e,t)})}).catch(e=>{throw e})
this.setState({newOptions:false})}toFilesOptionArray(e){return[].slice.call(e,0).map(e=>({file:e}))}findMatchingFile(e){return(this.folder.files.models||this.folder.files).find(t=>t.get("display_name")===e)}isZipFile(e){return!!(null!=e.type?e.type.match(/zip/):void 0)}segregateOptionBuckets(e){const[t,n,i]=[[],[],[]]
e.forEach(e=>{this.isZipFile(e.file)&&this.uploadOptions.alwaysUploadZips&&(e.expandZip=false)
if(this.isZipFile(e.file)&&"undefined"===typeof e.expandZip)i.push(e)
else if("skip"!==e.dup){const i=e.name||e.file.name
const o=this.findMatchingFile(i)
if(!o||"overwrite"===e.dup||null!=e.expandZip&&false!==e.expandZip||this.uploadOptions.alwaysRename){e.replacingFileId=null===o||void 0===o?void 0:o.id
n.push(e)}else{o.get("restricted_by_master_course")&&(e.cannotOverwrite=true)
t.push(e)}}})
return{collisions:t,resolved:n,zips:i}}handleAddFilesClick(){return a.a.findDOMNode(this.refs.addFileInput).click()}handleFilesInputChange(e){const t=this.toFilesOptionArray(a.a.findDOMNode(this.refs.addFileInput).files)
const{resolved:n,collisions:i,zips:o}=this.segregateOptionBuckets(t)
this.setState({nameCollisions:i,resolvedNames:n,zipOptions:o})}onNameConflictResolved(e){let t,n
const{nameCollisions:i}=this.state
const{resolvedNames:o}=this.state
let r=this.state.zipOptions
o.push(e)
i.shift()
const s=o.concat(i).concat(r);({resolved:n,collisions:t,zips:r}=this.segregateOptionBuckets(s))
this.setState({nameCollisions:t,resolvedNames:n,zipOptions:r})}onZipOptionsResolved(e){let t,n
const{nameCollisions:i}=this.state
const{resolvedNames:o}=this.state
let r=this.state.zipOptions
o.push(e)
r.shift()
const s=o.concat(i).concat(r);({resolved:n,collisions:t,zips:r}=this.segregateOptionBuckets(s))
this.setState({nameCollisions:t,resolvedNames:n,zipOptions:r})}setOptionsFromFiles(e,t){const n=this.toFilesOptionArray(e)
const{resolved:i,collisions:o,zips:r}=this.segregateOptionBuckets(n)
this.setState({nameCollisions:o,resolvedNames:i,zipOptions:r,newOptions:true})
if(t&&this.onChange)return this.onChange()}hasNewOptions(){return this.state.newOptions}setFolder(e){return this.folder=e}getFolder(){return this.folder}setState(e){return this.state=o.a.defaults(e,this.state)}getState(){return this.state}resetState(){return this.state=this.buildDefaultState()}setUploadOptions(e){this.uploadOptions.alwaysRename=!!e.alwaysRename
this.uploadOptions.alwaysUploadZips=!!e.alwaysUploadZips}onChange(){}}t["a"]=new c},NKxu:function(e,t,n){var i=n("lSCD"),o=n("E2jh"),r=n("GoyQ"),s=n("3Fdi")
var a=/[\\^$.*+?()[\]{}|]/g
var l=/^\[object .+?Constructor\]$/
var c=Function.prototype,u=Object.prototype
var d=c.toString
var h=u.hasOwnProperty
var p=RegExp("^"+d.call(h).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$")
function f(e){if(!r(e)||o(e))return false
var t=i(e)?p:l
return t.test(s(e))}e.exports=f},Npjl:function(e,t){function n(e,t){return null==e?void 0:e[t]}e.exports=n},Nuch:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var i=n("RtDj")
var o=n("HGxv")
var r=n("q1tI")
var s=n.n(r)
var a=n("l0h0")
const l=Object(o["useScope"])("direct_share_course_tray")
const c=Object(r["lazy"])(()=>Promise.all([n.e(5),n.e(7),n.e(10),n.e(119),n.e(4193)]).then(n.bind(null,"dpkT")))
function u({sourceCourseId:e,contentSelection:t,onDismiss:n,...o}){return s.a.createElement(a["a"],Object.assign({label:l.t("Copy To..."),placement:"end",onDismiss:n,padding:"medium"},o),Object(i["a"])(c,{sourceCourseId:e,contentSelection:t,onCancel:n}))}},O0v1:function(e,t,n){"use strict"
var i=n("3O+N")
var o=n.n(i)
n("BGrI")
var r=o.a.default
var s=r.template,a=r.templates=r.templates||{}
var l="/work/canvas-deploy/generated/ui/shared/external-tools/jst/-external-tool-menuitem"
a[l]=s((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var r,s="",a="function",l=this.escapeExpression,c=this
function u(e,t){var i,o,r=""
r+='\n  <a class="menu_tool_link" href="'
if(o=n.url)i=o.call(e,{hash:{},data:t})
else{o=e&&e.url
i=typeof o===a?o.call(e,{hash:{},data:t}):o}r+=l(i)+'" data-tool-id="'
if(o=n.id)i=o.call(e,{hash:{},data:t})
else{o=e&&e.id
i=typeof o===a?o.call(e,{hash:{},data:t}):o}r+=l(i)+'">\n    '
i=n["if"].call(e,e&&e.canvas_icon_class,{hash:{},inverse:c.program(4,h,t),fn:c.program(2,d,t),data:t});(i||0===i)&&(r+=i)
r+="\n    "
if(o=n.title)i=o.call(e,{hash:{},data:t})
else{o=e&&e.title
i=typeof o===a?o.call(e,{hash:{},data:t}):o}r+=l(i)+"\n  </a>\n"
return r}function d(e,t){var i,o,r=""
r+='\n      <i class="'
if(o=n.canvas_icon_class)i=o.call(e,{hash:{},data:t})
else{o=e&&e.canvas_icon_class
i=typeof o===a?o.call(e,{hash:{},data:t}):o}r+=l(i)+'"></i>\n    '
return r}function h(e,t){var i,o=""
o+="\n      "
i=n["if"].call(e,e&&e.icon_url,{hash:{},inverse:c.noop,fn:c.program(5,p,t),data:t});(i||0===i)&&(o+=i)
o+="\n    "
return o}function p(e,t){var i,o,r=""
r+='<img class="icon" alt="" src="'
if(o=n.icon_url)i=o.call(e,{hash:{},data:t})
else{o=e&&e.icon_url
i=typeof o===a?o.call(e,{hash:{},data:t}):o}r+=l(i)+'" />'
return r}r=n["if"].call(t,t,{hash:{},inverse:c.noop,fn:c.program(1,u,o),data:o});(r||0===r)&&(s+=r)
s+="\n"
return s}))
r.registerPartial("ui/shared/external-tools/jst/_external_tool_menuitem.handlebars",a["/work/canvas-deploy/generated/ui/shared/external-tools/jst/-external-tool-menuitem"])
a[l]
var c=o.a.default
var u=c.template,d=c.templates=c.templates||{}
var h="/work/canvas-deploy/generated/ui/shared/external-tools/jst/-external-tools-menu"
d[h]=u((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=this.merge(i,e.partials)
o=o||{}
var r,s="",a=this
function l(e,t){var i,o=""
o+="\n  "
i=n.each.call(e,e,{hash:{},inverse:a.noop,fn:a.program(2,c,t),data:t});(i||0===i)&&(o+=i)
o+="\n  </ul>\n"
return o}function c(e,t){var o,r=""
r+='\n    <li role="presentation">\n      '
o=a.invokePartial(i["ui/shared/external-tools/jst/_external_tool_menuitem.handlebars"],"ui/shared/external-tools/jst/_external_tool_menuitem.handlebars",e,n,i,t);(o||0===o)&&(r+=o)
r+="\n    </li>\n  "
return r}r=n["if"].call(t,t,{hash:{},inverse:a.noop,fn:a.program(1,l,o),data:o});(r||0===r)&&(s+=r)
s+="\n"
return s}))
c.registerPartial("ui/shared/external-tools/jst/_external_tools_menu.handlebars",d["/work/canvas-deploy/generated/ui/shared/external-tools/jst/-external-tools-menu"])
d[h]},O7RO:function(e,t,n){var i=n("CMye"),o=n("7GkX")
function r(e){var t=o(e),n=t.length
while(n--){var r=t[n],s=e[r]
t[n]=[r,s,i(s)]}return t}e.exports=r},Ophv:function(e,t,n){"use strict"
var i=n("Vovh")
var o=n("Y/W1")
var r=n.n(o)
var s=function(e,t){for(var n in t)a.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},a={}.hasOwnProperty
t["a"]=function(e){s(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.publishClass="publish-icon-publish"
t.prototype.publishedClass="publish-icon-published"
t.prototype.unpublishClass="publish-icon-unpublish"
t.prototype.tagName="span"
t.prototype.className="publish-icon"
t.optionProperty("title")
t.optionProperty("publishText")
t.optionProperty("unpublishText")
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.events=r.a.extend({},i["a"].prototype.events,this.events)}
t.prototype.events={keyclick:"click"}
return t}(i["a"])},QEso:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}
var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||false
i.configurable=true
"value"in i&&(i.writable=true)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
var s=n("q1tI")
var a=n("17x9")
var l=k(a)
var c=n("VKEO")
var u=x(c)
var d=n("S1to")
var h=k(d)
var p=n("Ye7m")
var f=x(p)
var m=n("fbhf")
var g=x(m)
var _=n("2zs7")
var b=k(_)
var v=n("UIKY")
var y=k(v)
n("WkvU")
function x(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function k(e){return e&&e.__esModule?e:{default:e}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var S={overlay:"ReactModal__Overlay",content:"ReactModal__Content"}
var E=9
var T=27
var I=0
var j=function(e){O(t,e)
function t(e){w(this,t)
var n=C(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
n.setOverlayRef=function(e){n.overlay=e
n.props.overlayRef&&n.props.overlayRef(e)}
n.setContentRef=function(e){n.content=e
n.props.contentRef&&n.props.contentRef(e)}
n.afterClose=function(){var e=n.props,t=e.appElement,i=e.ariaHideApp,o=e.htmlOpenClassName,r=e.bodyOpenClassName
r&&g.remove(document.body,r)
o&&g.remove(document.getElementsByTagName("html")[0],o)
if(i&&I>0){I-=1
0===I&&f.show(t)}if(n.props.shouldFocusAfterRender)if(n.props.shouldReturnFocusAfterClose){u.returnFocus(n.props.preventScroll)
u.teardownScopedFocus()}else u.popWithoutFocus()
n.props.onAfterClose&&n.props.onAfterClose()
y.default.deregister(n)}
n.open=function(){n.beforeOpen()
if(n.state.afterOpen&&n.state.beforeClose){clearTimeout(n.closeTimer)
n.setState({beforeClose:false})}else{if(n.props.shouldFocusAfterRender){u.setupScopedFocus(n.node)
u.markForFocusLater()}n.setState({isOpen:true},(function(){n.openAnimationFrame=requestAnimationFrame((function(){n.setState({afterOpen:true})
n.props.isOpen&&n.props.onAfterOpen&&n.props.onAfterOpen({overlayEl:n.overlay,contentEl:n.content})}))}))}}
n.close=function(){n.props.closeTimeoutMS>0?n.closeWithTimeout():n.closeWithoutTimeout()}
n.focusContent=function(){return n.content&&!n.contentHasFocus()&&n.content.focus({preventScroll:true})}
n.closeWithTimeout=function(){var e=Date.now()+n.props.closeTimeoutMS
n.setState({beforeClose:true,closesAt:e},(function(){n.closeTimer=setTimeout(n.closeWithoutTimeout,n.state.closesAt-Date.now())}))}
n.closeWithoutTimeout=function(){n.setState({beforeClose:false,isOpen:false,afterOpen:false,closesAt:null},n.afterClose)}
n.handleKeyDown=function(e){e.keyCode===E&&(0,h.default)(n.content,e)
if(n.props.shouldCloseOnEsc&&e.keyCode===T){e.stopPropagation()
n.requestClose(e)}}
n.handleOverlayOnClick=function(e){null===n.shouldClose&&(n.shouldClose=true)
n.shouldClose&&n.props.shouldCloseOnOverlayClick&&(n.ownerHandlesClose()?n.requestClose(e):n.focusContent())
n.shouldClose=null}
n.handleContentOnMouseUp=function(){n.shouldClose=false}
n.handleOverlayOnMouseDown=function(e){n.props.shouldCloseOnOverlayClick||e.target!=n.overlay||e.preventDefault()}
n.handleContentOnClick=function(){n.shouldClose=false}
n.handleContentOnMouseDown=function(){n.shouldClose=false}
n.requestClose=function(e){return n.ownerHandlesClose()&&n.props.onRequestClose(e)}
n.ownerHandlesClose=function(){return n.props.onRequestClose}
n.shouldBeClosed=function(){return!n.state.isOpen&&!n.state.beforeClose}
n.contentHasFocus=function(){return document.activeElement===n.content||n.content.contains(document.activeElement)}
n.buildClassName=function(e,t){var i="object"===("undefined"===typeof t?"undefined":o(t))?t:{base:S[e],afterOpen:S[e]+"--after-open",beforeClose:S[e]+"--before-close"}
var r=i.base
n.state.afterOpen&&(r=r+" "+i.afterOpen)
n.state.beforeClose&&(r=r+" "+i.beforeClose)
return"string"===typeof t&&t?r+" "+t:r}
n.attributesFromObject=function(e,t){return Object.keys(t).reduce((function(n,i){n[e+"-"+i]=t[i]
return n}),{})}
n.state={afterOpen:false,beforeClose:false}
n.shouldClose=null
n.moveFromContentToOverlay=null
return n}r(t,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){false
this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close()
this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose()
clearTimeout(this.closeTimer)
cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,i=e.htmlOpenClassName,o=e.bodyOpenClassName
o&&g.add(document.body,o)
i&&g.add(document.getElementsByTagName("html")[0],i)
if(n){I+=1
f.hide(t)}y.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.overlayClassName,r=e.defaultStyles,s=e.children
var a=n?{}:r.content
var l=o?{}:r.overlay
if(this.shouldBeClosed())return null
var c={ref:this.setOverlayRef,className:this.buildClassName("overlay",o),style:i({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown}
var u=i({id:t,ref:this.setContentRef,style:i({},a,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",i({modal:true},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId})
var d=this.props.contentElement(u,s)
return this.props.overlayElement(c,d)}}])
return t}(s.Component)
j.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}}
j.propTypes={isOpen:l.default.bool.isRequired,defaultStyles:l.default.shape({content:l.default.object,overlay:l.default.object}),style:l.default.shape({content:l.default.object,overlay:l.default.object}),className:l.default.oneOfType([l.default.string,l.default.object]),overlayClassName:l.default.oneOfType([l.default.string,l.default.object]),bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,ariaHideApp:l.default.bool,appElement:l.default.oneOfType([l.default.instanceOf(b.default),l.default.instanceOf(_.SafeHTMLCollection),l.default.instanceOf(_.SafeNodeList),l.default.arrayOf(l.default.instanceOf(b.default))]),onAfterOpen:l.default.func,onAfterClose:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,role:l.default.string,contentLabel:l.default.string,aria:l.default.object,data:l.default.object,children:l.default.node,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func,testId:l.default.string}
t.default=j
e.exports=t["default"]},QJn8:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("ouhR")
var o=n.n(i)
n("XbwQ")
function r(){return o()(".vdd_tooltip_link").tooltip({position:{my:"center bottom",at:"center top-10",collision:"fit fit"},tooltipClass:"center bottom vertical",content(){const e=o()(this).data("tooltipSelector")
try{const t=document.querySelector(e)
return o()(t).html()}catch(e){}}})}},QLaP:function(e,t,n){"use strict"
var i=function(e,t,n,i,o,r,s,a){false
if(!e){var l
if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var c=[n,i,o,r,s,a]
var u=0
l=new Error(t.replace(/%s/g,(function(){return c[u++]})))
l.name="Invariant Violation"}l.framesToPop=1
throw l}}
e.exports=i},QYKH:function(e,t,n){"use strict"
var i=n("mX+G")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("s9Pr")
var l=function(e,t){for(var n in t)c.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},c={}.hasOwnProperty
t["a"]=function(e){l(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.displayName=function(){return this.get("display_name")||this.get("name")}
t.prototype.destinationIsSameContext=function(e){var t,n,i,o,r,s,l,c
l=(t=this.get("context_asset_string"))?Object(a["a"])(t,false):[null!=(o=this.collection.parentFolder)?o.get("context_type"):void 0,null!=(r=this.collection.parentFolder)&&null!=(s=r.get("context_id"))?s.toString():void 0],i=l[0],n=l[1]
return i&&n&&i.toLowerCase()===e.get("context_type").toLowerCase()&&n===(null!=(c=e.get("context_id"))?c.toString():void 0)}
t.prototype.moveTo=function(e,t){null==t&&(t={})
return this.destinationIsSameContext(e)?this.moveToFolder(e,t):this.copyToContext(e,t)}
t.prototype.moveToFolder=function(e,t){var n
null==t&&(t={})
n=this.setAttributes({parent_folder_id:e.id},t)
$.extend(n,{parent_folder_id:e.id})
return this.save({},{attrs:n}).then((i=this,function(){i.collection.remove(i)
return i.updateCollection(i,e,t)}))
var i}
t.prototype.copyToContext=function(e,t){var n,i,o,r,a,l
null==t&&(t={})
n=this.setAttributes($.extend({},this.attributes),t)
a=this.isFile?"file":"folder"
n["source_"+a+"_id"]=n.id
delete n.id
i=new this.constructor(s.a.omit(n,"id","parent_folder_id","parent_folder_path"))
o=this.updateCollection(i,e,t)
i.url=o.url
this.set("url",o.url)
r="copy_"+a
l="/api/v1/folders/"+e.attributes.id+"/"+r
return i.save(n,{url:l})}
t.prototype.setAttributes=function(e,t){null==e&&(e={})
null==t&&(t={})
"overwrite"===t.dup?$.extend(e,{on_duplicate:"overwrite"}):"rename"===t.dup&&(t.name?$.extend(e,{display_name:t.name,name:t.name,on_duplicate:"rename"}):$.extend(e,{on_duplicate:"rename"}))
return e}
t.prototype.updateCollection=function(e,t,n){var i,o
o=this.isFile?"files":"folders"
i=t[o]
"overwrite"===n.dup&&i.remove(i.where({display_name:e.get("display_name")}))
i.add(e,{merge:true})
return i}
return t}(o.a.Model)},QbG7:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
var i=n("RtDj")
var o=n("HGxv")
var r=n("q1tI")
var s=n.n(r)
n("17x9")
var a=n("L+/K")
var l=n("Xx/m")
var c=n("uSnb")
var u=n("n12J")
var d=n("HeaX")
n("XFtX")
var h=n("uloQ")
var p=n("Ipg6")
const f=Object(o["useScope"])("direct_share_user_modal")
const m=Object(r["lazy"])(()=>Promise.all([n.e(5),n.e(7),n.e(10),n.e(4153)]).then(n.bind(null,"pdP4")))
function g({contentShare:e,courseId:t,...n}){const[o,g]=Object(r["useState"])([])
const[_,b]=Object(r["useState"])(null)
const v=Object(r["useRef"])(n.open)
function y(){g([])
b(null)}function x(e){o.find(t=>t.id===e.id)||g(o.concat([e]))}function k(e){g(o.filter(t=>t.id!==e.id))}function w(){return Object(p["a"])({method:"POST",path:"/api/v1/users/self/content_shares",body:{...e,receiver_ids:o.map(e=>e.id)}})}function C(){b("info")
w().then(O).catch(e=>{console.error(e)
e.response&&console.error(e.response)
b("error")})}function O(){Object(h["d"])(f.t("Content share started successfully"))()
n.onDismiss()}function S(){return s.a.createElement(s.a.Fragment,null,Object(i["a"])(l["a"],{onClick:n.onDismiss},void 0,f.t("Cancel")),Object(i["a"])(l["a"],{disabled:0===o.length||"info"===_,color:"primary",margin:"0 0 0 x-small",onClick:C},void 0,f.t("Send")))}const E=Object(i["a"])(u["a"],{as:"div",textAlign:"center"},void 0,Object(i["a"])(c["a"],{renderTitle:f.t("Loading")}))
if(n.open!==v.current){v.current=n.open
y()}let T=""
"info"===_?T=f.t("Starting content share"):"error"===_&&(T=f.t("Error starting content share"))
const I=T?Object(i["a"])(a["a"],{variant:_},void 0,Object(i["a"])("div",{role:"alert","aria-live":"assertive","aria-atomic":true},void 0,T),"info"===_?Object(i["a"])(c["a"],{renderTitle:T,size:"x-small"}):null):null
return s.a.createElement(d["a"],Object.assign({label:f.t("Send To..."),size:"medium"},n,{footer:Object(i["a"])(S,{})}),Object(i["a"])(r["Suspense"],{fallback:E},void 0,I,Object(i["a"])(m,{courseId:t,selectedUsers:o,onUserSelected:x,onUserRemoved:k})))}},QkVE:function(e,t,n){var i=n("EpBk")
function o(e,t){var n=e.__data__
return i(t)?n["string"==typeof t?"string":"hash"]:n.map}e.exports=o},R7Yz:function(e,t,n){"use strict"
n.d(t,"b",(function(){return o}))
n.d(t,"a",(function(){return r}))
n.d(t,"c",(function(){return a}))
const i="LtiDeepLinkingResponse"
function o(e,t){return!!(e.origin===t.DEEP_LINKING_POST_MESSAGE_ORIGIN&&e.data&&e.data.subject===i)}const r=e=>{window.removeEventListener("message",s)
window.addEventListener("message",s(e))}
const s=e=>async t=>{if(!o(t,ENV))return
await e(t)}
const a=()=>{window.location.reload()}},RfgP:function(e,t,n){"use strict"
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
var s=n("fhzG")
var a=n.n(s)
var l=n("i8i4")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h={displayName:"FileRenameForm",propType:{fileOptions:d.a.object,onNameConflictResolved:d.a.func.isRequired,allowSkip:d.a.bool,onRenameFileMessage:d.a.func,onLockFileMessage:d.a.func},getInitialState(){return{isEditing:false,fileOptions:this.props.fileOptions}},componentWillReceiveProps(e){this.setState({fileOptions:e.fileOptions,isEditing:false})},handleRenameClick(){this.setState({isEditing:true})},handleBackClick(){this.setState({isEditing:false})},handleSkipClick(){this.props.closeOnResolve&&this.refs.canvasModal.closeModal()
return this.props.onNameConflictResolved({file:this.state.fileOptions.file,dup:"skip",name:this.state.fileOptions.name,expandZip:this.state.fileOptions.expandZip})},handleReplaceClick(){this.props.closeOnResolve&&this.refs.canvasModal.closeModal()
return this.props.onNameConflictResolved({file:this.state.fileOptions.file,dup:"overwrite",name:this.state.fileOptions.name,expandZip:this.state.fileOptions.expandZip})},handleChangeClick(){this.props.closeOnResolve&&this.refs.canvasModal.closeModal()
return this.props.onNameConflictResolved({file:this.state.fileOptions.file,dup:"rename",name:c.a.findDOMNode(this.refs.newName).value,expandZip:this.state.fileOptions.expandZip})},handleFormSubmit(e){e.preventDefault()
return this.handleChangeClick()}}
var p=n("vCN0")
var f=n("0unK")
var m=n("GN1s")
var g=n("HGxv")
const _=Object(g["useScope"])("file_rename_form")
h.buildContent=function(){const{onRenameFileMessage:e,onLockFileMessage:t}=this.props
const n=this.state.fileOptions.name||this.state.fileOptions.file.name
let o
if(this.state.isEditing||this.state.fileOptions.cannotOverwrite){let e
e=this.state.fileOptions.cannotOverwrite?(null===t||void 0===t?void 0:t(n))||_.t('A locked item named "%{name}" already exists in this location. Please enter a new name.',{name:n}):_.t('Change "%{name}" to',{name:n})
o=r.a.createElement("div",{ref:"bodyContent"},Object(i["a"])("p",{},void 0,e),Object(i["a"])("form",{onSubmit:this.handleFormSubmit},void 0,Object(i["a"])("label",{className:"file-rename-form__form-label"},void 0,_.t("Name")),r.a.createElement("input",{className:"input-block-level",type:"text",defaultValue:n,ref:"newName"})))}else o=r.a.createElement("div",{ref:"bodyContent"},Object(i["a"])("p",{id:"renameFileMessage"},void 0,(null===e||void 0===e?void 0:e(n))||_.t('An item named "%{name}" already exists in this location. Do you want to replace the existing file?',{name:n})))
return o}
h.buildButtons=function(){let e
if(this.state.fileOptions.cannotOverwrite)e=[r.a.createElement("button",{key:"commitChangeBtn",ref:"commitChangeBtn",className:"btn btn-primary",onClick:this.handleChangeClick},_.t("Change"))]
else if(this.state.isEditing)e=[r.a.createElement("button",{key:"backBtn",ref:"backBtn",className:"btn btn-default",onClick:this.handleBackClick},_.t("Back")),r.a.createElement("button",{key:"commitChangeBtn",ref:"commitChangeBtn",className:"btn btn-primary",onClick:this.handleChangeClick},_.t("Change"))]
else{e=[r.a.createElement("button",{key:"renameBtn",ref:"renameBtn",className:"btn btn-default",onClick:this.handleRenameClick},_.t("Change Name")),r.a.createElement("button",{key:"replaceBtn",ref:"replaceBtn",className:"btn btn-primary",onClick:this.handleReplaceClick},_.t("Replace"))]
this.props.allowSkip&&e.unshift(r.a.createElement("button",{key:"skipBtn",ref:"skipBtn",className:"btn btn-default",onClick:this.handleSkipClick},_.t("Skip")))}return e}
h.render=function(){return Object(i["a"])("div",{},void 0,r.a.createElement(p["a"],{className:"ReactModal__Content--canvas ReactModal__Content--mini-modal",ref:"canvasModal",isOpen:this.props.fileOptions,title:_.t("Copy"),onRequestClose:this.props.onClose,closeWithX:this.props.closeWithX,"data-testid":"FileRenameForm-modal"},Object(i["a"])(f["a"],{},void 0,this.buildContent(),Object(i["a"])(m["a"],{},void 0,this.buildButtons()))))}
t["a"]=a()(h)},RoCN:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("gI0r")
n("tHpF")
n("sXof")
n("Dhso")
n("8JEM")
t["a"]={fieldSelectors:null,findSiblingTinymce:function(e){return e.siblings(".tox-tinymce").find(".tox-edit-area")},findField:function(e,t){var n,i,r
null==t&&(t=false)
r=(null!=(i=this.fieldSelectors)?i[e]:void 0)||"[name='"+e+"']"
n=t?o()(r):this.$(r)
n.data("rich_text")&&(n=this.findSiblingTinymce(n))
return n},showErrors:function(e,t){var n,i,r,s,l,c,u,d
null==t&&(t=false)
d=[]
for(r in e){i=e[r]
n=i.element||this.findField(r,t)
s=i.message||function(){var e,t,n,o
o=[]
for(e=0,t=i.length;e<t;e++){l=i[e].message
o.push(Object(a["a"])((null!=(n=this.translations)?n[l]:void 0)||l))}return o}.call(this).join("</p><p>")
null!=(c=n.errorBox(o.a.raw(""+s)))&&null!=(u=c.css("z-index","1100"))&&u.attr("role","alert")
this.attachErrorDescription(n,s)
i.$input=n
d.push(i.$errorBox=n.data("associated_error_box"))}return d},attachErrorDescription:function(e,t){var n
n=this.findOrCreateDescriptionField(e)
n["description"].text(o.a.raw(""+t))
return e.attr("aria-describedby",n["description"].attr("id")+" "+n["originalDescriptionIds"])},findOrCreateDescriptionField:function(e){var t,n,i
n=e.attr("id")
o()("#"+n+"_sr_description").length>0||o()("<div>").attr({id:n+"_sr_description",class:"screenreader-only"}).insertBefore(e)
t=o()("#"+n+"_sr_description")
i=this.getExistingDescriptionIds(e,n)
return{description:t,originalDescriptionIds:i}},getExistingDescriptionIds:function(e,t){var n,i
n=e.attr("aria-describedby")
i=n?n.split(" "):[]
return s.a.without(i,t+"_sr_description")}}},S1to:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var i=n("ZDLa")
var o=r(i)
function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=(0,o.default)(e)
if(!n.length){t.preventDefault()
return}var i=void 0
var r=t.shiftKey
var s=n[0]
var a=n[n.length-1]
if(e===document.activeElement){if(!r)return
i=a}a!==document.activeElement||r||(i=s)
s===document.activeElement&&r&&(i=a)
if(i){t.preventDefault()
i.focus()
return}var l=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent)
var c=null!=l&&"Chrome"!=l[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)
if(!c)return
var u=n.indexOf(document.activeElement)
u>-1&&(u+=r?-1:1)
i=n[u]
if("undefined"===typeof i){t.preventDefault()
i=r?a:s
i.focus()
return}t.preventDefault()
i.focus()}e.exports=t["default"]},SKAX:function(e,t,n){var i=n("JC6p"),o=n("lQqw")
var r=o(i)
e.exports=r},SYfm:function(e,t,n){"use strict"
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("mX+G")
var a=n.n(s)
var l=n("gI0r")
n("Dhso")
var c,u=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty
c=Object(i["useScope"])("LockButton")
var h=function(e){u(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.lockedClass="btn-locked"
t.prototype.unlockedClass="btn-unlocked"
t.prototype.disabledClass="disabled"
t.optionProperty("lockedText")
t.optionProperty("unlockedText",t.optionProperty("course_id",t.optionProperty("content_id")))
t.optionProperty("content_type")
t.prototype.tagName="button"
t.prototype.className="btn"
t.prototype.events={click:"click",hover:"hover",focus:"focus",blur:"blur"}
t.prototype.els={i:"$icon",".lock-text":"$text"}
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.disabled=!this.isMasterCourseMasterContent()
this.disabledClass=this.disabled?"disabled":""
this.lockedText=this.lockedText||c.t("Locked. Click to unlock.")
return this.unlockedText=this.unlockedText||c.t("Unlocked. Click to lock.")}
t.prototype.setElement=function(){t.__super__.setElement.apply(this,arguments)
return this.$el.attr("data-tooltip","")}
t.prototype.hover=function(e){var t
t=e.type
if(this.disabled)return
if("mouseenter"===t)return this.isLocked()?this.renderWillUnlock():this.renderWillLock()
if("mouseleave"===t)return this.isLocked()?this.renderLocked():this.renderUnlocked()}
t.prototype.focus=function(){return this.focusblur()}
t.prototype.blur=function(){return this.focusblur()}
t.prototype.focusblur=function(){if(this.disabled)return
return this.isLocked()?this.renderLocked():this.renderUnlocked()}
t.prototype.click=function(e){e.preventDefault()
e.stopPropagation()
if(this.disabled)return
return this.isLocked()?this.unlock():this.lock()}
t.prototype.setFocusToElement=function(){return this.$el.focus()}
t.prototype.lock=function(e){this.renderLocking()
return this.setLockState(true)}
t.prototype.unlock=function(e){this.renderUnlocking()
return this.setLockState(false)}
t.prototype.setLockState=function(e){return r.a.ajaxJSON("/api/v1/courses/"+this.course_id+"/blueprint_templates/default/restrict_item","PUT",{content_type:this.content_type,content_id:this.content_id,restricted:e},(t=this,function(n){t.model.set("restricted_by_master_course",e)
t.trigger(e?"lock":"unlock")
t.render()
t.setFocusToElement()
t.closeTooltip()
return null}),function(e){return function(t){return e.setFocusToElement()}}(this))
var t}
t.prototype.isLocked=function(){return this.model.get("restricted_by_master_course")}
t.prototype.isMasterCourseMasterContent=function(){return!!this.model.get("is_master_course_master_content")}
t.prototype.isMasterCourseChildContent=function(){return!!this.model.get("is_master_course_child_content")}
t.prototype.isMasterCourseContent=function(){return this.isMasterCourseMasterContent()||this.isMasterCourseChildContent()}
t.prototype.reset=function(){this.$el.removeClass(this.lockedClass+" "+this.unlockedClass+" "+this.disabledClass)
this.$icon.removeClass("icon-lock icon-unlock icon-unlocked")
this.$el.removeAttr("aria-label")
return this.closeTooltip()}
t.prototype.closeTooltip=function(){return r()(".ui-tooltip").remove()}
t.prototype.render=function(){if(!this.isMasterCourseContent())return
this.$el.attr("role","button")
this.disabled||this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="lock-text screenreader-only"></span>')
this.cacheEls()
return this.isLocked()?this.renderLocked():this.renderUnlocked()}
t.prototype.renderLocked=function(){return this.renderState({hint:c.t("Locked"),label:this.lockedText,buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
t.prototype.renderWillUnlock=function(){return this.renderState({hint:c.t("Unlock"),label:this.lockedText,buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
t.prototype.renderUnlocking=function(){return this.renderState({hint:c.t("Unlocking..."),buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
t.prototype.renderUnlocked=function(){return this.renderState({hint:c.t("Unlocked"),label:this.unlockedText,buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
t.prototype.renderWillLock=function(){return this.renderState({hint:c.t("Lock"),label:this.unlockedText,buttonClass:this.lockedClass+" "+this.disabledClass,iconClass:"icon-blueprint-lock"})}
t.prototype.renderLocking=function(){return this.renderState({hint:c.t("Locking..."),buttonClass:this.unlockedClass+" "+this.disabledClass,iconClass:"icon-blueprint"})}
t.prototype.renderState=function(e){this.reset()
this.$el.addClass(e.buttonClass)
this.disabled?this.$el.attr("aria-disabled",true):this.$el.attr("aria-pressed",e.buttonClass===this.lockedClass)
this.$icon.attr("class",e.iconClass)
this.$text.html(""+Object(l["a"])(e.label||e.hint))
return this.$el.attr("title",e.hint)}
return t}(a.a.View)
var p=function(e,t){for(var n in t)f.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},f={}.hasOwnProperty
t["a"]=function(e){p(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.lockClass="lock-icon-lock"
t.prototype.lockedClass="lock-icon-locked"
t.prototype.unlockClass="lock-icon-unlock"
t.prototype.tagName="span"
t.prototype.className="lock-icon"
t.optionProperty("lockText")
t.optionProperty("unlockText")
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.events=Object.assign({},h.prototype.events,this.events)}
t.prototype.events={keyclick:"click"}
return t}(h)},SfRM:function(e,t,n){var i=n("YESw")
function o(){this.__data__=i?i(null):{}
this.size=0}e.exports=o},TOwV:function(e,t,n){"use strict"
e.exports=n("qT12")},TZ14:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}))
var i=n("q1tI")
var o=n.n(i)
var r=n("i8i4")
var s=n("Jvcl")
var a=n("cymJ")
var l=n("NFDp")
var c,u
null!==(c=e)&&void 0!==c&&null!==(u=c.env)&&void 0!==u&&u.BUILD_LOCALE||l["a"].setup({locale:"en",generateId:n("syYy"),missingTranslation:"ignore"})
function d(e,t,c){Promise.all([n.e(11),n.e(21),n.e(22),n.e(24),n.e(27),n.e(28),n.e(26),n.e(29),n.e(4119)]).then(n.bind(null,"5+Bo")).then(n=>{const u=n.default
t=Object(a["a"])(t,u)
l["a"].setup({locale:t.language})
const d=Object(i["createRef"])()
Object(r["render"])(o.a.createElement(s["a"],Object.assign({ref:d},t,{handleUnmount:()=>Object(r["unmountComponentAtNode"])(e)})),e,()=>{c&&c(d.current)})}).catch(e=>{console.error("Failed loading RCE",e)})}window&&window.addEventListener("wheel",()=>{})}).call(this,n("8oxB"))},TnsN:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("mX+G")
var s=n.n(r)
var a=n("Y/W1")
var l=n.n(a)
var c,u=function(e,t){return function(){return e.apply(t,arguments)}},d=function(e,t){for(var n in t)h.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},h={}.hasOwnProperty,p=[].slice,f=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
c=function(e){null==e&&(e="")
return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()}
t["a"]=function(e){d(t,e)
function t(){this._setStateAfterFetch=u(this._setStateAfterFetch,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.nameRegex=/rel="([a-z]+)/
t.prototype.linkRegex=/^<([^>]+)/
t.prototype.pageRegex=/\Wpage=(\d+)/
t.prototype.perPageRegex=/\Wper_page=(\d+)/
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.urls={}}
t.prototype.fetch=function(e){var n,i,r,s
null==e&&(e={})
e=l.a.clone(e)
this.loadedAll=false
i="fetching"+c(e.page)+"Page"
this[i]=true
if(null!=e.page){null==e.remove&&(e.remove=false)
if(null!=(r=this.urls)?r[e.page]:void 0){e.url=this.urls[e.page]
e.data=""}}else null==e.reset&&(e.reset=true)
null!=e.fetchOptions&&(e.data=e.fetchOptions)
this.trigger("beforeFetch",this,e)
null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e)
s=null
e.dataFilter=(a=this,function(t){a[i]=false
a._setStateAfterFetch(s,e)
return t})
var a
n=e.dfd||o.a.Deferred()
s=t.__super__.fetch.call(this,e).done(function(t){return function(i,o,r){var s
t.trigger("fetch",t,i,e)
null!=e.page&&t.trigger("fetch:"+e.page,t,i,e);(null!=(s=t.urls)?s.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(p.call(arguments)))
return t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:n})})):n.resolve(i,o,r)}}(this))
n.abort=s.abort
n.success=n.done
n.error=n.fail
return n}
t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]}
t.prototype._setStateAfterFetch=function(e,t){var n,i,o,r,s,a,l,c,u,d,h,p,m,g
null==this._urlCache&&(this._urlCache=[])
g=(a=t.url,f.call(this._urlCache,a)<0)
g||this._urlCache.push(t.url)
i=!this.atLeastOnePageFetched
h=i||("next"===(l=t.page)||"bottom"===l)&&g
p=i||("prev"===(c=t.page)||"top"===c)&&g
r=this.urls
this.urls=this._parsePageLinks(e)
h&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=r.bottom:delete this.urls.bottom
p&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=r.top:delete this.urls.top
m=null!=(u=this.urls.first)?u:this.urls.next
if(null!=m){s=parseInt(m.match(this.perPageRegex)[1],10);(null!=(n=null!=this.options?this.options:this.options={}).params?n.params:n.params={}).per_page=s}this.urls.last&&(o=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(o[1],10));(null!=(d=this.urls)?d.next:void 0)||(this.loadedAll=true)
return this.atLeastOnePageFetched=true}
t.prototype._parsePageLinks=function(e){var t,n
t=null!=(n=e.getResponseHeader("link"))?n.split(","):void 0
null==t&&(t=[])
return l.a.reduce(t,(i=this,function(e,t){var n,o
n=t.match(i.nameRegex)[1]
o=t.match(i.linkRegex)[1]
e[n]=o
return e}),{})
var i}
return t}(s.a.Collection)},TvTI:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("gI0r")
n("8JEM")
o.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=o()(this)
o.a.each(["name","id","class"],(n,i)=>{t.attr(i)&&t.attr(i,t.attr(i).replace(/-iterator-/,e.iterator))})}))
e.id&&this.attr("id",e.id)
let i=false
if(e.data)for(var t in e.data){if(e.except&&-1!=o.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=o.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const s=this.find("."+t)
var n=e.avoid||""
s.each((function(){const s=o()(this)
if(s.length>0&&0===s.closest(n).length){"undefined"!==typeof e.data[t]&&null!==e.data[t]||(e.data[t]="")
if(e.htmlValues&&-1!=o.a.inArray(t,e.htmlValues)){s.html(o.a.raw(e.data[t].toString()))
if(s.hasClass("user_content")){i=true
s.removeClass("enhanced")
s.data("unenhanced_content_html",e.data[t].toString())}}else if("INPUT"==s[0].tagName.toUpperCase())s.val(e.data[t])
else try{const n=e.data[t].toString()
s.html(Object(r["a"])(n))}catch(e){}}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,i,r=o()(this)
for(const s in e.hrefValues){if(!e.hrefValues.hasOwnProperty(s))continue
const a=e.hrefValues[s]
if(t=r.attr("href")){const n=o.a.replaceTags(t,a,encodeURIComponent(e.data[a]))
const i=r.text()===r.html()?r.text():null
if(t!==n){r.attr("href",n)
i&&r.text(i)}}(n=r.attr("rel"))&&r.attr("rel",o.a.replaceTags(n,a,e.data[a]));(i=r.attr("name"))&&r.attr("name",o.a.replaceTags(i,a,e.data[a]))}}))
i&&o()(document).triggerHandler("user_content_change")}return this}
o.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
o.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const r=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=o.a.trim(r.text())
"&nbsp;"===r.html()&&(i="")
1===i.length&&160===i.charCodeAt(0)&&(i="")
n[e]=i})}if(e.dataValues)for(t in e.dataValues){var i=this.data(e.dataValues[t])
i&&(n[e.dataValues[t]]=i)}if(e.htmlValues)for(t in e.htmlValues){const r=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=null
i=r.hasClass("user_content")&&r.data("unenhanced_content_html")?r.data("unenhanced_content_html"):o.a.trim(r.html())
n[e.htmlValues[t]]=i}return n}
o.a.fn.getTemplateValue=function(e,t){const n=o.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},U6jy:function(e,t){e.exports=i
var n=Object.prototype.hasOwnProperty
function i(){var e={}
for(var t=0;t<arguments.length;t++){var i=arguments[t]
for(var o in i)n.call(i,o)&&(e[o]=i[o])}return e}},UIKY:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.log=s
t.resetState=a
function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function e(){var t=this
i(this,e)
this.register=function(e){if(-1!==t.openInstances.indexOf(e)){false
return}t.openInstances.push(e)
t.emit("register")}
this.deregister=function(e){var n=t.openInstances.indexOf(e)
if(-1===n){false
return}t.openInstances.splice(n,1)
t.emit("deregister")}
this.subscribe=function(e){t.subscribers.push(e)}
this.emit=function(e){t.subscribers.forEach((function(n){return n(e,t.openInstances.slice())}))}
this.openInstances=[]
this.subscribers=[]}
var r=new o
function s(){console.log("portalOpenInstances ----------")
console.log(r.openInstances.length)
r.openInstances.forEach((function(e){return console.log(e)}))
console.log("end portalOpenInstances ----------")}function a(){r=new o}t.default=r},"UT5+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return H}))
var i=n("rePB")
var o=n("Ff2n")
var r=n("ODXe")
var s=n("1OyB")
var a=n("vuIU")
var l=n("Ji7U")
var c=n("LK+K")
var u=n("q1tI")
var d=n.n(u)
var h=n("17x9")
var p=n.n(h)
var f=n("TSYQ")
var m=n.n(f)
var g=n("3zPy")
var _=n.n(g)
var b=n("sTNg")
var v=n("n12J")
var y=n("BTe1")
var x=n("J2CL")
var k=n("oXx0")
var w=n("nAyT")
var C=n("E+IV")
var O=n("jtGx")
var S=n("tCl5")
var E=n("8S//")
function T(e,t){if(e&&t&&"application/x-moz-file"!==e.type){var n=I(t)
var i=e.type||""
var o=i.replace(/\/.*$/,"")
return n.some((function(t){if("."===t.charAt(0)){if(!e.name)return i.endsWith(t.slice(1))
return e.name.toLowerCase().endsWith(t.toLowerCase())}if(/\/\*$/.test(t))return o===t.replace(/\/.*$/,"")
return i===t}))}return true}function I(e){var t=Array.isArray(e)?e:e.split(",")
return t.map((function(e){return e.trim().replace(/^\w+$/,".$&")}))}function j(e,t){var n=e.dataTransfer
if(n){if(n.files&&n.files.length)return n.files
if(n.items&&n.items.length)return n.items}else if(t&&t.files)return t.files
return[]}function L(e){var t=e.borders,n=e.colors
return{backgroundColor:n.backgroundLightest,borderRadius:t.radiusLarge,borderWidth:t.widthMedium,borderStyle:"dashed",borderColor:n.borderMedium,hoverBorderColor:n.borderBrand,acceptedColor:n.textBrand,rejectedColor:n.textDanger}}L.canvas=function(e){return{hoverBorderColor:e["ic-brand-primary"],acceptedColor:e["ic-brand-primary"]}}
var D,R,N,P,A,M
var B={componentId:"emSEn",template:function(e){return"\n\n.emSEn_blJt,.emSEn_bGBk{position:relative}\n\n.emSEn_blJt{box-sizing:border-box;display:block}\n\n.emSEn_blJt.emSEn_JSXc{height:100%}\n\n.emSEn_cwos{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}\n\n.emSEn_QUBp{border:".concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-sizing:border-box;cursor:pointer;display:block;text-align:center;z-index:1}\n\n[dir=ltr] .emSEn_QUBp,[dir=rtl] .emSEn_QUBp{text-align:center}\n\n.emSEn_QUBp:hover{border-color:").concat(e.hoverBorderColor||"inherit","}\n\n.emSEn_QUBp.emSEn_JSXc{height:100%}\n\n.emSEn_byIz{border-radius:").concat(e.borderRadius||"inherit",";display:block;overflow:hidden}\n\n.emSEn_byIz.emSEn_JSXc{height:100%}\n\n.emSEn_cbYS .emSEn_QUBp{border-color:").concat(e.acceptedColor||"inherit","}\n\n.emSEn_cvQK .emSEn_QUBp{border-color:").concat(e.rejectedColor||"inherit","}\n\n.emSEn_cFXB{cursor:not-allowed;pointer-events:none}\n\n.emSEn_eXzv{opacity:0.5}")},label:"emSEn_blJt",root:"emSEn_bGBk",withHeight:"emSEn_JSXc",input:"emSEn_cwos",labelContent:"emSEn_QUBp",layout:"emSEn_byIz",dragAccepted:"emSEn_cbYS",dragRejected:"emSEn_cvQK",functionallyDisabled:"emSEn_cFXB",visuallyDisabled:"emSEn_eXzv"}
function F(e){return e.keyCode===_.a.codes.space||e.keyCode===_.a.codes.enter}function q(){var e=false
try{e=document.documentMode||E["a"]}catch(e){}return e}var z=q()
var H=(D=Object(w["a"])("8.0.0",{label:"renderLabel",enablePreview:"shouldEnablePreview",allowRepeatFileSelection:"shouldAllowRepeats",allowMultiple:"shouldAllowMultiple"}),R=Object(k["a"])(),N=Object(x["j"])(L,B),D(P=R(P=N(P=(M=A=function(e){Object(l["a"])(n,e)
var t=Object(c["a"])(n)
function n(e){var i
Object(s["a"])(this,n)
i=t.call(this,e)
i.state={isDragAccepted:false,isDragRejected:false,isFocused:false,isFileBrowserDisplayed:false}
i.enterCounter=0
i.fileInputEl=null
i.defaultId=null
i.handleDragEnter=function(e){e.preventDefault()
i.enterCounter+=1
if(i.enterCounter>1)return
var t=i.allFilesAccepted(i.getDataTransferItems(e))
i.setState({isDragAccepted:t,isDragRejected:!t})
i.props.onDragEnter(e)}
i.handleDragOver=function(e){e.preventDefault()
e.stopPropagation()
try{var t=e
t.dataTransfer.dropEffect="copy"}catch(e){}i.props.onDragOver(e)
return false}
i.handleDragLeave=function(e){e.preventDefault()
i.enterCounter-=1
if(i.enterCounter>0)return
i.setState({isDragAccepted:false,isDragRejected:false})
i.props.onDragLeave(e)}
i.handleChange=function(e){var t=i.props,n=t.onDrop,o=t.onDropAccepted,s=t.onDropRejected
var a=i.getDataTransferItems(e,i.shouldEnablePreview)
var l=i.parseFiles(a),c=Object(r["a"])(l,2),u=c[0],d=c[1]
e.preventDefault()
i.enterCounter=0
n(u,d,e)
d.length>0&&s(d,e)
u.length>0&&o(u,e)
i.setState({isDragAccepted:false,isDragRejected:false,isFileBrowserDisplayed:false})}
i.fileAccepted=function(e){return T(e,i.props.accept)}
i.handleRef=function(e){i.fileInputEl=e}
i.handleBlur=function(){i.setState({isFocused:false,isFileBrowserDisplayed:false})}
i.handleFocus=function(){i.setState({isFocused:true,isFileBrowserDisplayed:false})}
i.handleClick=function(e){i.fileInputEl.value&&i.shouldAllowRepeats&&(i.fileInputEl.value=null)
i.fileInputEl.focus()
i.props.onClick(e)
i.setState({isFileBrowserDisplayed:true})}
i.handleKeyDown=function(e){if(i.state.isFocused&&F(e)){i.shouldAllowRepeats&&(i.fileInputEl.value=null)
if(z){e.stopPropagation()
e.preventDefault()
i.fileInputEl.click()}}}
i.handleKeyUp=function(e){if(e.keyCode===_.a.codes.esc&&i.state.isFileBrowserDisplayed){e.stopPropagation()
e.nativeEvent.stopImmediatePropagation()
i.setState({isFileBrowserDisplayed:false})}}
i.defaultId=Object(y["a"])("FileDrop")
i.messagesId=Object(y["a"])("FileDrop-messages")
return i}Object(a["a"])(n,[{key:"getDataTransferItems",value:function(e,t){var n=Array.from(j(e,this.fileInputEl))
n.length>1&&(n=this.shouldAllowMultiple?n:[n[0]])
if(t)return n.map((function(e){return Object.assign(e,{preview:window.URL.createObjectURL(e)})}))
return n}},{key:"parseFiles",value:function(e){var t=this
var n=[]
var i=[]
e.forEach((function(e){t.fileAccepted(e)&&t.fileMatchSize(e)?n.push(e):i.push(e)}))
return[n,i]}},{key:"fileMatchSize",value:function(e){return e.size<=this.props.maxSize&&e.size>=this.props.minSize}},{key:"allFilesAccepted",value:function(e){return e.every(this.fileAccepted)}},{key:"acceptStr",value:function(){var e=this.props.accept
return e?I(e).join(","):null}},{key:"renderLabel",value:function(){var e=this.props,t=e.label,n=e.renderLabel
return Object(C["a"])(t||n,{isDragAccepted:this.state.isDragAccepted,isDragRejected:this.state.isDragRejected,interaction:this.interaction})}},{key:"render",value:function(){var e,t,n
var r=this.props,s=r.display,a=r.height,l=r.width,c=r.minWidth,u=r.maxWidth,h=r.margin,p=(r.onDropAccepted,r.onDropRejected,Object(o["a"])(r,["display","height","width","minWidth","maxWidth","margin","onDropAccepted","onDropRejected"]))
var f=this.props.id||this.defaultId
var g="disabled"===this.interaction||"readonly"===this.interaction
var _=this.state.isDragRejected||this.invalid?"danger":void 0
var y=(e={},Object(i["a"])(e,B.label,true),Object(i["a"])(e,B.functionallyDisabled,g),Object(i["a"])(e,B.visuallyDisabled,"disabled"===this.interaction),Object(i["a"])(e,B.dragRejected,this.state.isDragRejected||this.invalid),Object(i["a"])(e,B.dragAccepted,this.state.isDragAccepted),Object(i["a"])(e,B.withHeight,a),e)
return d.a.createElement(v["a"],{display:s,position:"relative",width:l,minWidth:c,maxWidth:u,margin:h,height:a},d.a.createElement("label",{className:m()(y),htmlFor:f,onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleChange},d.a.createElement(v["a"],{display:"block",position:"relative",withFocusOutline:this.state.isFocused,borderRadius:"large",focusColor:_,height:a},d.a.createElement("span",{className:m()((t={},Object(i["a"])(t,B.labelContent,true),Object(i["a"])(t,B.withHeight,a),t))},d.a.createElement("span",{className:m()((n={},Object(i["a"])(n,B.layout,true),Object(i["a"])(n,B.withHeight,a),n))},d.a.createElement(v["a"],{height:a},this.renderLabel()))))),d.a.createElement("input",Object.assign({},Object(O["b"])(p),{onClick:this.handleClick,type:"file",className:B.input,id:f,ref:this.handleRef,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,multiple:this.shouldAllowMultiple,accept:this.acceptStr(),onChange:this.handleChange,"aria-describedby":this.hasMessages?this.messagesId:null,disabled:g})),this.hasMessages?d.a.createElement(v["a"],{display:"block",margin:"small 0 0"},d.a.createElement(b["c"],{id:this.messagesId,messages:this.props.messages})):null)}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"interaction",get:function(){return Object(S["a"])({props:this.props})}},{key:"shouldEnablePreview",get:function(){return this.props.enablePreview||this.props.shouldEnablePreview}},{key:"shouldAllowRepeats",get:function(){return this.props.allowRepeatFileSelection||this.props.shouldAllowRepeats}},{key:"shouldAllowMultiple",get:function(){return this.props.allowMultiple||this.props.shouldAllowMultiple}},{key:"invalid",get:function(){return this.hasMessages&&this.props.messages.findIndex((function(e){return"error"===e.type}))>=0}}])
n.displayName="FileDrop"
return n}(u["Component"]),A.propTypes={id:p.a.string,renderLabel:p.a.oneOfType([p.a.func,p.a.node]).isRequired,accept:p.a.oneOfType([p.a.string,p.a.arrayOf(p.a.string)]),messages:p.a.arrayOf(b["d"].message),onClick:p.a.func,onDrop:p.a.func,onDropAccepted:p.a.func,onDropRejected:p.a.func,onDragEnter:p.a.func,onDragOver:p.a.func,onDragLeave:p.a.func,shouldEnablePreview:p.a.bool,shouldAllowMultiple:p.a.bool,shouldAllowRepeats:p.a.bool,maxSize:p.a.number,minSize:p.a.number,interaction:p.a.oneOf(["enabled","disabled","readonly"]),display:p.a.oneOf(["block","inline-block"]),height:p.a.oneOfType([p.a.string,p.a.number]),width:p.a.oneOfType([p.a.string,p.a.number]),maxWidth:p.a.oneOfType([p.a.string,p.a.number]),minWidth:p.a.oneOfType([p.a.string,p.a.number]),margin:x["c"].spacing,label:p.a.oneOfType([p.a.func,p.a.node]),enablePreview:p.a.bool,allowRepeatFileSelection:p.a.bool,allowMultiple:p.a.bool},A.defaultProps={onClick:function(e){},onDrop:function(e,t,n){},onDropAccepted:function(e,t){},onDropRejected:function(e,t){},onDragEnter:function(e){},onDragOver:function(e){},onDragLeave:function(e){},shouldEnablePreview:false,shouldAllowMultiple:false,shouldAllowRepeats:true,maxSize:Infinity,minSize:0,interaction:void 0,messages:[],id:void 0,accept:void 0,display:"block",height:void 0,width:void 0,minWidth:void 0,maxWidth:void 0,margin:void 0},M))||P)||P)||P)},UWEG:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
n("dhbk")
t["a"]={toggle(e){const t=o()(e).data.bind(o()(e))
return o.a.ajaxJSON(t("url"),t("isChecked")?"DELETE":"PUT",{},()=>{t("isChecked",!t("isChecked"))
o()(e).toggleClass("btn-success")
o()("i",e).toggleClass("icon-empty icon-complete")
o()(".mark-done-labels span",e).toggleClass("visible")})}}},UWiF:function(e,t,n){"use strict"
var i=function(e,t){return function(){return e.apply(t,arguments)}},o={}.hasOwnProperty
t["a"]=function(){function e(e){null==e&&(e={})
this.normalizeBoolean=i(this.normalizeBoolean,this)
this.present=i(this.present,this)
this.toJSON=i(this.toJSON,this)
this.originalityReportVisibility=e.originality_report_visibility||"immediate"
this.excludeQuoted=this.normalizeBoolean(e.exclude_quoted)
this.excludeSelfPlag=this.normalizeBoolean(e.exclude_self_plag)
this.storeInIndex=this.normalizeBoolean(e.store_in_index)}e.prototype.toJSON=function(){return{originality_report_visibility:this.originalityReportVisibility,exclude_quoted:this.excludeQuoted,exclude_self_plag:this.excludeSelfPlag,store_in_index:this.storeInIndex}}
e.prototype.present=function(){var e,t,n,i
e={}
n=this
for(t in n){if(!o.call(n,t))continue
i=n[t]
e[t]=i}return e}
e.prototype.normalizeBoolean=function(e){return["1",true,"true",1].includes(e)}
return e}()},VCL8:function(e,t,n){"use strict"
n.r(t)
n.d(t,"polyfill",(function(){return s}))
function i(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state)
null!==e&&void 0!==e&&this.setState(e)}function o(e){function t(t){var n=this.constructor.getDerivedStateFromProps(e,t)
return null!==n&&void 0!==n?n:null}this.setState(t.bind(this))}function r(e,t){try{var n=this.props
var i=this.state
this.props=e
this.state=t
this.__reactInternalSnapshotFlag=true
this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,i)}finally{this.props=n
this.state=i}}i.__suppressDeprecationWarning=true
o.__suppressDeprecationWarning=true
r.__suppressDeprecationWarning=true
function s(e){var t=e.prototype
if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components")
if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e
var n=null
var s=null
var a=null
"function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount")
"function"===typeof t.componentWillReceiveProps?s="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(s="UNSAFE_componentWillReceiveProps")
"function"===typeof t.componentWillUpdate?a="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate")
if(null!==n||null!==s||null!==a){var l=e.displayName||e.name
var c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()"
throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==s?"\n  "+s:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps){t.componentWillMount=i
t.componentWillReceiveProps=o}if("function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype")
t.componentWillUpdate=r
var u=t.componentDidUpdate
t.componentDidUpdate=function(e,t,n){var i=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n
u.call(this,e,t,i)}}return e}},VKEO:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.resetState=c
t.log=u
t.handleBlur=d
t.handleFocus=h
t.markForFocusLater=p
t.returnFocus=f
t.popWithoutFocus=m
t.setupScopedFocus=g
t.teardownScopedFocus=_
var i=n("ZDLa")
var o=r(i)
function r(e){return e&&e.__esModule?e:{default:e}}var s=[]
var a=null
var l=false
function c(){s=[]}function u(){return}function d(){l=true}function h(){if(l){l=false
if(!a)return
setTimeout((function(){if(a.contains(document.activeElement))return
var e=(0,o.default)(a)[0]||a
e.focus()}),0)}}function p(){s.push(document.activeElement)}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var t=null
try{if(0!==s.length){t=s.pop()
t.focus({preventScroll:e})}return}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function m(){s.length>0&&s.pop()}function g(e){a=e
if(window.addEventListener){window.addEventListener("blur",d,false)
document.addEventListener("focus",h,true)}else{window.attachEvent("onBlur",d)
document.attachEvent("onFocus",h)}}function _(){a=null
if(window.addEventListener){window.removeEventListener("blur",d)
document.removeEventListener("focus",h)}else{window.detachEvent("onBlur",d)
document.detachEvent("onFocus",h)}}},VXGR:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("TnsN")
var o=n("Y/W1")
var r=n.n(o)
var s=n("C8i9")
class a extends i["a"]{initialize(){this.on("change:sort change:order",this.setQueryStringParams)
return super.initialize(...arguments)}fetch(e={}){e.data=r.a.extend({content_types:null!=this.parentFolder?this.parentFolder.contentTypes:void 0},e.data||{});(null!=this.parentFolder?this.parentFolder.useVerifiers:void 0)&&(e.data.use_verifiers=1)
return super.fetch(e)}parse(e){if(e&&this.parentFolder){const t=this.parentFolder.previewUrl()
r.a.each(e,e=>e.rce_preview_url=t?t.replace("{{id}}",e.id.toString()):e.url)}return super.parse(...arguments)}setQueryStringParams(){const e={include:["user"],per_page:20,sort:this.get("sort"),order:this.get("order")}
if(this.loadedAll)return
const t=new URL(this.url)
const n=deparam(t.search)
t.search=$.param(r.a.extend(n,e))
this.url=t.toString()
return this.reset()}}a.optionProperty("parentFolder")
a.prototype.model=s["a"]},Vovh:function(e,t,n){"use strict"
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("mX+G")
var a=n.n(s)
var l=n("gI0r")
n("Dhso")
var c,u=function(e,t){for(var n in t)d.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},d={}.hasOwnProperty
c=Object(i["useScope"])("publish_btn_module")
t["a"]=function(e){u(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.disabledClass="disabled"
t.prototype.publishClass="btn-publish"
t.prototype.publishedClass="btn-published"
t.prototype.unpublishClass="btn-unpublish"
t.optionProperty("title")
t.optionProperty("publishText")
t.optionProperty("unpublishText")
t.optionProperty("disabledForModeration")
t.prototype.tagName="button"
t.prototype.className="btn"
t.prototype.events={click:"click",hover:"hover"}
t.prototype.els={i:"$icon",".publish-text":"$text"}
t.prototype.initialize=function(){var e
t.__super__.initialize.apply(this,arguments)
return null!=(e=this.model)?e.on("change:unpublishable",(n=this,function(){if(!n.model.get("unpublishable")&&n.model.get("published"))return n.disable()})):void 0
var n}
t.prototype.setElement=function(){t.__super__.setElement.apply(this,arguments)
this.$el.attr("data-tooltip","")
if(!this.model.get("unpublishable")&&this.model.get("published"))return this.disable()}
t.prototype.hover=function(e){var t
t=e.type
if("mouseenter"===t){if(this.keepState||this.isPublish()||this.isDisabled())return
this.renderUnpublish()
return this.keepState=true}this.keepState=false
if(!(this.isPublish()||this.isDisabled()))return this.renderPublished()}
t.prototype.click=function(e){e.preventDefault()
e.stopPropagation()
if(this.isDisabled())return
this.keepState=true
if(this.isPublish())return this.publish()
if(this.isUnpublish()||this.isPublished())return this.unpublish()}
t.prototype.addAriaLabel=function(e){var t
t=this.$el.find("span.screenreader-only.accessible_label")
t.length||(t=r()('<span class="screenreader-only accessible_label"></span>').appendTo(this.$el))
t.text(e)
return this.$el.attr("aria-label",e)}
t.prototype.setFocusToElement=function(){return this.$el.focus()}
t.prototype.publish=function(e){this.renderPublishing()
return this.model.publish().always((t=this,function(){t.trigger("publish")
t.enable()
t.render()
return t.setFocusToElement()}))
var t}
t.prototype.unpublish=function(e){this.renderUnpublishing()
return this.model.unpublish().done((t=this,function(){t.trigger("unpublish")
t.disable()
t.render()
return t.setFocusToElement()})).fail(function(e){return function(t){403===t.status&&r.a.flashError(e.model.disabledMessage())
e.disable()
e.renderPublished()
return e.setFocusToElement()}}(this))
var t}
t.prototype.isPublish=function(){return this.$el.hasClass(this.publishClass)}
t.prototype.isPublished=function(){return this.$el.hasClass(this.publishedClass)}
t.prototype.isUnpublish=function(){return this.$el.hasClass(this.unpublishClass)}
t.prototype.isDisabled=function(){return this.$el.hasClass(this.disabledClass)}
t.prototype.disable=function(){return this.$el.addClass(this.disabledClass)}
t.prototype.enable=function(){return this.$el.removeClass(this.disabledClass)}
t.prototype.reset=function(){this.$el.removeClass(this.publishClass+" "+this.publishedClass+" "+this.unpublishClass)
this.$icon.removeClass("icon-publish icon-unpublish icon-unpublished")
return this.$el.removeAttr("aria-label")}
t.prototype.publishLabel=function(){if(this.publishText)return this.publishText
if(this.title)return c.t("Unpublished.  Click to publish %{title}.",{title:this.title})
return c.t("Unpublished.  Click to publish.")}
t.prototype.unpublishLabel=function(){if(this.unpublishText)return this.unpublishText
if(this.title)return c.t("Published.  Click to unpublish %{title}.",{title:this.title})
return c.t("Published.  Click to unpublish.")}
t.prototype.render=function(){this.$el.is("button")||this.$el.attr("role","button")
this.$el.attr("tabindex","0")
this.$el.html('<i></i><span class="publish-text"></span>')
this.cacheEls()
this.$text.attr("tabindex","-1")
this.model.get("published")?this.renderPublished():this.renderPublish()
return this}
t.prototype.renderPublish=function(){return this.renderState({text:c.t("buttons.publish","Publish"),label:this.publishLabel(),buttonClass:this.publishClass,iconClass:"icon-unpublish"})}
t.prototype.renderPublished=function(){return this.renderState({text:c.t("buttons.published","Published"),label:this.unpublishLabel(),buttonClass:this.publishedClass,iconClass:"icon-publish icon-Solid"})}
t.prototype.renderUnpublish=function(){var e
e=c.t("buttons.unpublish","Unpublish")
return this.renderState({text:e,buttonClass:this.unpublishClass,iconClass:"icon-unpublish"})}
t.prototype.renderPublishing=function(){var e
this.disable()
e=c.t("buttons.publishing","Publishing...")
return this.renderState({text:e,buttonClass:this.publishClass,iconClass:"icon-publish icon-Solid"})}
t.prototype.renderUnpublishing=function(){var e
this.disable()
e=c.t("buttons.unpublishing","Unpublishing...")
return this.renderState({text:e,buttonClass:this.unpublishClass,iconClass:"icon-unpublished"})}
t.prototype.renderState=function(e){this.reset()
this.$el.addClass(e.buttonClass)
this.$el.attr("aria-pressed",e.buttonClass===this.publishedClass)
this.$icon.addClass(e.iconClass)
this.$text.html("&nbsp;"+Object(l["a"])(e.text))
if(this.model.get("disabledForModeration"))return this.disableWithMessage("You do not have permissions to edit this moderated assignment")
if(null==this.model.get("unpublishable")||this.model.get("unpublishable")){this.enable()
this.$el.data("tooltip","left")
this.$el.attr("title",e.text)
if(e.label)return this.addAriaLabel(e.label)}else if(this.model.get("published"))return this.disableWithMessage(this.model.disabledMessage())}
t.prototype.disableWithMessage=function(e){this.disable()
this.$el.attr("aria-disabled",true)
this.$el.attr("title",e)
this.$el.data("tooltip","left")
return this.addAriaLabel(e)}
return t}(a.a.View)},VrN0:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("eodz")
const s=/^(?:select|textarea)/i
const a=/\r?\n/g
const l=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week|file)$/i
function c(){if(this.elements)return o.a.makeArray(this.elements)
{const e=o()(this).find(":input")
return e.length?e:this}}function u(){return this.name&&!this.disabled&&(this.checked||s.test(this.nodeName)||l.test(this.type))}function d(e,t){"string"===typeof t&&(t=t.replace(a,"\r\n"))
return{name:e,value:t}}function h(){const e=o()(this)
const t=(()=>{if("file"!==this.type)return e.hasClass("datetime_field_enabled")?""===e.val()?null:e.data("date")||null:e.data("rich_text")?Object(r["d"])(e,"get_code",false):e.val()
if(e.val())return this})()
return o.a.isArray(t)?t.map(e=>d(this.name,e)):d(this.name,t)}o.a.fn.serializeForm=function(){return this.map(c).filter(u).map(h).get()}},W2TM:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("mX+G")
var l=n.n(a)
var c=n("HGxv")
var u=n("2gWY")
var d=n("cRz0")
n("r2Yr")
n("sXof")
var h,p,f=function(e,t){return function(){return e.apply(t,arguments)}},m=function(e,t){for(var n in t)g.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},g={}.hasOwnProperty
h=Object(c["useScope"])("pages")
p=["contextAssetString","page","pageUrl","latest","summary"]
t["a"]=function(e){m(t,e)
function t(){this.doPoll=f(this.doPoll,this)
return t.__super__.constructor.apply(this,arguments)}t.mixin(u["a"])
t.prototype.initialize=function(e,n){t.__super__.initialize.apply(this,arguments)
s.a.extend(this,s.a.pick(n||{},p))
if(s.a.has(this,"url"))return delete this.url}
t.prototype.urlRoot=function(){return"/api/v1/"+this._contextPath()+"/pages/"+this.pageUrl+"/revisions"}
t.prototype.url=function(){var e
e=this.urlRoot()
if(this.latest)return e+"/latest"
if(this.get("revision_id"))return e+"/"+this.get("revision_id")
return e}
t.prototype.fetch=function(e){var n
null==e&&(e={})
if(this.summary){null==e.data&&(e.data={})
null==(n=e.data).summary&&(n.summary=true)}return t.__super__.fetch.call(this,e)}
t.prototype.pollForChanges=function(e){var t,n
null==e&&(e=3e4)
if(!this._poller){n=s.a.throttle(this.doPoll,e)
this._poller=new d["a"](e,10*e,n);(t=window.ENV.WIKI_PAGE_PANDAPUB)&&this._poller.setToken(t.CHANNEL,t.TOKEN)
this._poller.setOnData((function(){return n()}))
return this._poller.start()}}
t.prototype.startPolling=function(){if(this._poller)return this._poller.start()}
t.prototype.stopPolling=function(){if(this._poller)return this._poller.stop()}
t.prototype.doPoll=function(e){if(!(this._poller&&this._poller.isRunning()))return
return this.fetch().done((function(t,n,i){n=i.status.toString()
"4"!==n[0]&&"5"!==n[0]||this._poller.stop()
if(e)return e()}))}
t.prototype.parse=function(e,t){e.url&&(e.id=e.url)
return e}
t.prototype.toJSON=function(){return s.a.omit(t.__super__.toJSON.apply(this,arguments),"id")}
t.prototype.restore=function(){var e
e=o.a.ajaxJSON(this.url(),"POST").fail((function(){return o.a.flashError(h.t("restore_failed","Failed to restore page revision"))}))
o()("#wiki_page_revisions").disableWhileLoading(o.a.Deferred())
return e}
return t}(l.a.Model)},WIG6:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("RtDj")
n("q1tI")
n("17x9")
var o=n("bJGz")
var r=n("ouhR")
var s=n.n(r)
function a({tool:e,placement:t,acceptedResourceTypes:n,targetResourceType:r,allowItemSelection:a,selectableItems:l,onDismiss:c,open:u}){const d={com_instructure_course_accept_canvas_resource_types:n,com_instructure_course_canvas_resource_type:r,com_instructure_course_allow_canvas_resource_selection:a,com_instructure_course_available_canvas_resources:l,display:"borderless",placement:t}
const h=-1===(null===e||void 0===e?void 0:e.base_url.indexOf("?"))?"?":"&"
const p=`${null===e||void 0===e?void 0:e.base_url}${h}${s.a.param(d)}`
const f=e?e.title:""
return Object(i["a"])(o["a"],{open:u,label:f,onDismiss:c,placement:"end",size:"regular",padding:"0",headerPadding:"medium"},void 0,Object(i["a"])("iframe",{style:{border:"none",display:"block",width:"100%",height:"100%"},"data-testid":"ltiIframe",src:p,title:f,"data-lti-launch":"true"}))}},WkvU:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.resetState=c
t.log=u
var i=n("UIKY")
var o=r(i)
function r(e){return e&&e.__esModule?e:{default:e}}var s=void 0,a=void 0,l=[]
function c(){var e=[s,a]
for(var t=0;t<e.length;t++){var n=e[t]
if(!n)continue
n.parentNode&&n.parentNode.removeChild(n)}s=a=null
l=[]}function u(){console.log("bodyTrap ----------")
console.log(l.length)
var e=[s,a]
for(var t=0;t<e.length;t++){var n=e[t]
var i=n||{}
console.log(i.nodeName,i.className,i.id)}console.log("edn bodyTrap ----------")}function d(){if(0===l.length){false
return}l[l.length-1].focusContent()}function h(e,t){if(!s&&!a){s=document.createElement("div")
s.setAttribute("data-react-modal-body-trap","")
s.style.position="absolute"
s.style.opacity="0"
s.setAttribute("tabindex","0")
s.addEventListener("focus",d)
a=s.cloneNode()
a.addEventListener("focus",d)}l=t
if(l.length>0){document.body.firstChild!==s&&document.body.insertBefore(s,document.body.firstChild)
document.body.lastChild!==a&&document.body.appendChild(a)}else{s.parentElement&&s.parentElement.removeChild(s)
a.parentElement&&a.parentElement.removeChild(a)}}o.default.subscribe(h)},XE4h:function(e,t,n){"use strict"
var i=n("mX+G")
var o=n("HGxv")
var r,s=function(e,t){return function(){return e.apply(t,arguments)}},a=function(e,t){for(var n in t)l.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},l={}.hasOwnProperty
r=Object(o["useScope"])("modelsSection")
t["a"]=function(e){a(t,e)
function t(){this.isDefaultDueDateSection=s(this.isDefaultDueDateSection,this)
return t.__super__.constructor.apply(this,arguments)}t.defaultDueDateSection=function(){return new t({id:t.defaultDueDateSectionID,name:r.t("overrides.everyone","Everyone")})}
t.defaultDueDateSectionID="0"
t.prototype.isDefaultDueDateSection=function(){return this.id===t.defaultDueDateSectionID}
return t}(i["Model"])},XFtX:function(e,t,n){"use strict"
var i=n("17x9")
var o=n("lNsk")
const r=Object(i["shape"])({id:i["string"],display_name:i["string"],url:i["string"]})
var s=r
const a=Object(i["shape"])({id:i["string"].isRequired,progress_url:i["string"],user_id:i["string"],workflow_state:Object(i["oneOf"])(["created","exporting","exported","failed"]),attachment:s})
var l=a
const c=["assignment","attachment","discussion_topic","page","quiz","module","module_item"]
Object(i["shape"])({id:i["string"].isRequired,name:i["string"].isRequired,content_type:Object(i["oneOf"])(c).isRequired,created_at:i["string"].isRequired,updated_at:i["string"].isRequired,read_state:i["string"].isRequired,sender:o["b"].isRequired,content_export:l})},XKWA:function(e,t,n){const i=n("ouhR")
var o,r,s,a=i({})
i.subscribe=o=function(e,t){if(i.isPlainObject(e))return i.each(e,(function(e,t){o(e,t)}))
function n(){return t.apply(this,Array.prototype.slice.call(arguments,1))}n.guid=t.guid=t.guid||i.guid++
a.bind(e,n)}
i.unsubscribe=r=function(){a.unbind.apply(a,arguments)}
i.publish=s=function(){a.trigger.apply(a,arguments)}
e.exports={subscribe:o,unsubscribe:r,publish:s}},Xi7e:function(e,t,n){var i=n("KMkd"),o=n("adU4"),r=n("tMB7"),s=n("+6XX"),a=n("Z8oC")
function l(e){var t=-1,n=null==e?0:e.length
this.clear()
while(++t<n){var i=e[t]
this.set(i[0],i[1])}}l.prototype.clear=i
l.prototype["delete"]=o
l.prototype.get=r
l.prototype.has=s
l.prototype.set=a
e.exports=l},YESw:function(e,t,n){var i=n("Cwc5")
var o=i(Object,"create")
e.exports=o},Ye7m:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.resetState=l
t.log=c
t.assertNodeList=u
t.setElement=d
t.validateElement=h
t.hide=p
t.show=f
t.documentNotReadyOrSSRTesting=m
var i=n("2W6z")
var o=s(i)
var r=n("2zs7")
function s(e){return e&&e.__esModule?e:{default:e}}var a=null
function l(){a&&(a.removeAttribute?a.removeAttribute("aria-hidden"):null!=a.length?a.forEach((function(e){return e.removeAttribute("aria-hidden")})):document.querySelectorAll(a).forEach((function(e){return e.removeAttribute("aria-hidden")})))
a=null}function c(){return}function u(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function d(e){var t=e
if("string"===typeof t&&r.canUseDOM){var n=document.querySelectorAll(t)
u(n,t)
t=n}a=t||a
return a}function h(e){var t=e||a
if(t)return Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t];(0,o.default)(false,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" "))
return[]}function p(e){var t=true
var n=false
var i=void 0
try{for(var o,r=h(e)[Symbol.iterator]();!(t=(o=r.next()).done);t=true){var s=o.value
s.setAttribute("aria-hidden","true")}}catch(e){n=true
i=e}finally{try{!t&&r.return&&r.return()}finally{if(n)throw i}}}function f(e){var t=true
var n=false
var i=void 0
try{for(var o,r=h(e)[Symbol.iterator]();!(t=(o=r.next()).done);t=true){var s=o.value
s.removeAttribute("aria-hidden")}}catch(e){n=true
i=e}finally{try{!t&&r.return&&r.return()}finally{if(n)throw i}}}function m(){a=null}},Z0cm:function(e,t){var n=Array.isArray
e.exports=n},Z6JD:function(e,t,n){"use strict"
n.d(t,"b",(function(){return p}))
n.d(t,"a",(function(){return b}))
var i=n("HGxv")
const o=Object(i["useScope"])("cyoe_assignment_sidebar_grading_types")
const r={points:{get label(){return o.t("points")},key:"points"},percent:{get label(){return o.t("percent")},key:"percent"},letter_grade:{get label(){return o.t("letter grade")},key:"letter_grade"},gpa_scale:{get label(){return o.t("GPA scale")},key:"gpa_scale"},other:{get label(){return o.t("other")},key:"other"}}
var s=r
var a=n("FdVj")
const l=Object(i["useScope"])("cyoe_assignment_sidebar_score")
const c=e=>{const t=a["a"].parse(e)
return!isNaN(t)&&isFinite(t)}
const u=e=>!!e&&!!e.grading_scheme
const d=e=>{const t=e?e.grading_type:s.percent.key
if((t===s.letter_grade.key||t===s.gpa_scale.key)&&!u(e))return s.percent.key
return t}
const h=(e,t)=>{const n=d(t)
return n===s.points.key?m(e,t):n===s.letter_grade.key||n===s.gpa_scale.key?g(e,t):_(e)}
const p=(e,t,n)=>{e||(e=n?"1":"0")
return f(h(e,t),t)}
const f=(e,t)=>{const n=d(t)
return n===s.points.key?l.t("%{score} pts",{score:l.n(e,{precision:2,strip_insignificant_zeros:true})}):n===s.letter_grade.key||n===s.gpa_scale.key?e:l.n(e,{precision:2,percentage:true,strip_insignificant_zeros:true})}
const m=(e,t)=>{if(!c(e))return e
if(0===e)return"0"
const n=a["a"].parse(e)
const i=Number(t.points_possible)||100
return parseFloat((n*i).toFixed(2))}
const g=(e,t)=>{if(""===e)return""
const n=a["a"].parse(e)
const i={letter:null,score:-Infinity}
for(const e in t.grading_scheme){const o=a["a"].parse(t.grading_scheme[e])
if(o<=n&&o>i.score||0===o&&o>n){i.score=o
i.letter=e}}return i.letter?i.letter:n}
const _=e=>{if(!c(e))return e
return Math.floor(100*e)}
const b=(e,t)=>{if("string"===typeof e&&t.grading_type!==s.letter_grade.key&&t.grading_type!==s.gpa_scale.key){const n=a["a"].parse(e.replace(/%$/,""))
if(!isNaN(n))return f(n,t)}return e}},Z8oC:function(e,t,n){var i=n("y1pI")
function o(e,t){var n=this.__data__,o=i(n,e)
if(o<0){++this.size
n.push([e,t])}else n[o][1]=t
return this}e.exports=o},ZCpW:function(e,t,n){var i=n("lm/5"),o=n("O7RO"),r=n("IOzZ")
function s(e){var t=o(e)
if(1==t.length&&t[0][2])return r(t[0][0],t[0][1])
return function(n){return n===e||i(n,e,t)}}e.exports=s},ZDLa:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=l
var i=/input|select|textarea|button|object/
function o(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0
if(t&&!e.innerHTML)return true
try{var n=window.getComputedStyle(e)
return t?"visible"!==n.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0:"none"==n.getPropertyValue("display")}catch(e){console.warn("Failed to inspect element style")
return false}}function r(e){var t=e
while(t){if(t===document.body)break
if(o(t))return false
t=t.parentNode}return true}function s(e,t){var n=e.nodeName.toLowerCase()
var o=i.test(n)&&!e.disabled||"a"===n&&e.href||t
return o&&r(e)}function a(e){var t=e.getAttribute("tabindex")
null===t&&(t=void 0)
var n=isNaN(t)
return(n||t>=0)&&s(e,!n)}function l(e){return[].slice.call(e.querySelectorAll("*"),0).filter(a)}e.exports=t["default"]},ZUSV:function(e,t,n){"use strict"
var i=n("mX+G")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("XE4h")
var l=n("HGxv")
var c=n("4M30")
var u,d=function(e,t){return function(){return e.apply(t,arguments)}},h=function(e,t){for(var n in t)p.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},p={}.hasOwnProperty
u=Object(l["useScope"])("assignmentOverride")
t["a"]=function(e){h(t,e)
function t(){this.combinedDates=d(this.combinedDates,this)
this.representsDefaultDueDate=d(this.representsDefaultDueDate,this)
this.getCourseSectionID=d(this.getCourseSectionID,this)
this.isBlank=d(this.isBlank,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={due_at_overridden:true,due_at:null,all_day:false,all_day_date:null,unlock_at_overridden:true,unlock_at:null,lock_at_overridden:true,lock_at:null}
t.conditionalRelease=Object(c["b"])({noop_id:"1"},{name:function(){return u.t("Mastery Paths")}})
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
return this.on("change:course_section_id",this.clearID,this)}
t.prototype.clearID=function(){return this.set("id",void 0)}
t.prototype.parse=function(e){var t
t=e.assignment_override
return t}
t.prototype.toJSON=function(){return{assignment_override:t.__super__.toJSON.apply(this,arguments)}}
t.defaultDueDate=function(e){var n
null==e&&(e={})
n=s.a.extend(e,{course_section_id:a["a"].defaultDueDateSectionID})
return new t(n)}
t.prototype.isBlank=function(){return null==this.get("due_at")}
t.prototype.getCourseSectionID=function(){return this.get("course_section_id")}
t.prototype.representsDefaultDueDate=function(){return this.getCourseSectionID()===a["a"].defaultDueDateSectionID}
t.prototype.combinedDates=function(){var e
e=void 0===this.get("id")?null:this.get("id")
return""+(this.get("due_at")+this.get("unlock_at")+this.get("lock_at")+e)}
return t}(o.a.Model)},ZWtO:function(e,t,n){var i=n("4uTw"),o=n("9Nap")
function r(e,t){t=i(t,e)
var n=0,r=t.length
while(null!=e&&n<r)e=e[o(t[n++])]
return n&&n==r?e:void 0}e.exports=r},ZbFs:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconCheck",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconCheckSolid"
return n}(l["Component"])
h.glyphName="check"
h.variant="Solid"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},ZbPE:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var i=n("rePB")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("TSYQ")
var p=n.n(h)
var f=n("J2CL")
var m=n("KgFQ")
var g=n("jtGx")
var _=n("nAyT")
var b=n("VTBJ")
function v(e){var t=e.typography,n=e.colors,i=e.spacing
return Object(b["a"])({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,dangerColor:n.textDanger,successColor:n.textSuccess,alertColor:n.textAlert,paragraphMargin:"".concat(i.medium," 0")})}v.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var y,x,k,w
var C={componentId:"enRcg",template:function(e){return"\n\n.enRcg_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.enRcg_bGBk sub,.enRcg_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.enRcg_bGBk sup{top:-0.4em}\n\n.enRcg_bGBk sub{bottom:-0.4em}\n\n.enRcg_bGBk code,.enRcg_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.enRcg_bGBk em,.enRcg_bGBk i{font-style:italic}\n\n.enRcg_bGBk b,.enRcg_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.enRcg_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.enRcg_bGBk[type]{text-align:left}\n\n[dir=rtl] input.enRcg_bGBk[type]{text-align:right}\n\n.enRcg_bGBk:focus,input.enRcg_bGBk[type]:focus{outline:none}\n\n.enRcg_bGBk.enRcg_qFsi,input.enRcg_bGBk[type].enRcg_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_bLsb,input.enRcg_bGBk[type].enRcg_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.enRcg_bGBk.enRcg_ezBQ,input.enRcg_bGBk[type].enRcg_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dlnd,input.enRcg_bGBk[type].enRcg_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.enRcg_bGBk.enRcg_cJLh,input.enRcg_bGBk[type].enRcg_cJLh{color:").concat(e.successColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fpfC,input.enRcg_bGBk[type].enRcg_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eHcp,input.enRcg_bGBk[type].enRcg_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.enRcg_bGBk.enRcg_dwua,input.enRcg_bGBk[type].enRcg_dwua{color:").concat(e.errorColor||"inherit","}\n\n.enRcg_bGBk.enRcg_NQMb,input.enRcg_bGBk[type].enRcg_NQMb{color:").concat(e.dangerColor||"inherit","}\n\n.enRcg_bGBk.enRcg_eZgl,input.enRcg_bGBk[type].enRcg_eZgl{color:").concat(e.alertColor||"inherit","}\n\n.enRcg_bGBk.enRcg_fbNi,input.enRcg_bGBk[type].enRcg_fbNi{-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto;overflow-wrap:break-word;word-break:break-word}\n\n.enRcg_bGBk.enRcg_drST,input.enRcg_bGBk[type].enRcg_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_pEgL,input.enRcg_bGBk[type].enRcg_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.enRcg_bGBk.enRcg_bdMA,input.enRcg_bGBk[type].enRcg_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.enRcg_bGBk.enRcg_ijuF,input.enRcg_bGBk[type].enRcg_ijuF{font-style:normal}\n\n.enRcg_bGBk.enRcg_fetN,input.enRcg_bGBk[type].enRcg_fetN{font-style:italic}\n\n.enRcg_bGBk.enRcg_dfBC,input.enRcg_bGBk[type].enRcg_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_doqw,input.enRcg_bGBk[type].enRcg_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.enRcg_bGBk.enRcg_ycrn,input.enRcg_bGBk[type].enRcg_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.enRcg_bGBk.enRcg_cMDj,input.enRcg_bGBk[type].enRcg_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_eoMd,input.enRcg_bGBk[type].enRcg_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fdca,input.enRcg_bGBk[type].enRcg_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.enRcg_bGBk.enRcg_fEWX,input.enRcg_bGBk[type].enRcg_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.enRcg_bGBk.enRcg_fNIu,input.enRcg_bGBk[type].enRcg_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.enRcg_bGBk.enRcg_dfDs,input.enRcg_bGBk[type].enRcg_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bDjL,input.enRcg_bGBk[type].enRcg_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.enRcg_bGBk.enRcg_eQnG,input.enRcg_bGBk[type].enRcg_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.enRcg_bGBk.enRcg_bbUA,input.enRcg_bGBk[type].enRcg_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.enRcg_bGBk.enRcg_bRWU,input.enRcg_bGBk[type].enRcg_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.enRcg_bGBk.enRcg_wZsr,input.enRcg_bGBk[type].enRcg_wZsr{text-transform:none}\n\n.enRcg_bGBk.enRcg_fCZK,input.enRcg_bGBk[type].enRcg_fCZK{text-transform:capitalize}\n\n.enRcg_bGBk.enRcg_dsRi,input.enRcg_bGBk[type].enRcg_dsRi{text-transform:uppercase}\n\n.enRcg_bGBk.enRcg_bLtD,input.enRcg_bGBk[type].enRcg_bLtD{text-transform:lowercase}")},root:"enRcg_bGBk","color-primary":"enRcg_qFsi","color-secondary":"enRcg_bLsb","color-primary-inverse":"enRcg_ezBQ","color-secondary-inverse":"enRcg_dlnd","color-success":"enRcg_cJLh","color-brand":"enRcg_fpfC","color-warning":"enRcg_eHcp","color-error":"enRcg_dwua","color-danger":"enRcg_NQMb","color-alert":"enRcg_eZgl","wrap-break-word":"enRcg_fbNi","weight-normal":"enRcg_drST","weight-light":"enRcg_pEgL","weight-bold":"enRcg_bdMA","style-normal":"enRcg_ijuF","style-italic":"enRcg_fetN","x-small":"enRcg_dfBC",small:"enRcg_doqw",medium:"enRcg_ycrn",large:"enRcg_cMDj","x-large":"enRcg_eoMd","xx-large":"enRcg_fdca","lineHeight-default":"enRcg_fEWX","lineHeight-fit":"enRcg_fNIu","lineHeight-condensed":"enRcg_dfDs","lineHeight-double":"enRcg_bDjL","letterSpacing-normal":"enRcg_eQnG","letterSpacing-condensed":"enRcg_bbUA","letterSpacing-expanded":"enRcg_bRWU","transform-none":"enRcg_wZsr","transform-capitalize":"enRcg_fCZK","transform-uppercase":"enRcg_dsRi","transform-lowercase":"enRcg_bLtD"}
var O=(y=Object(f["j"])(v,C),y(x=(w=k=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){var e
var t=this.props,o=t.wrap,r=t.weight,s=t.fontStyle,a=t.size,l=t.lineHeight,u=t.letterSpacing,d=t.transform,h=t.color,f=t.children
var _=Object(m["a"])(n,this.props)
return c.a.createElement(_,Object.assign({},Object(g["b"])(this.props),{className:p()((e={},Object(i["a"])(e,C.root,true),Object(i["a"])(e,C[a],a),Object(i["a"])(e,C["wrap-".concat(o)],o),Object(i["a"])(e,C["weight-".concat(r)],r),Object(i["a"])(e,C["style-".concat(s)],s),Object(i["a"])(e,C["transform-".concat(d)],d),Object(i["a"])(e,C["lineHeight-".concat(l)],l),Object(i["a"])(e,C["letterSpacing-".concat(u)],u),Object(i["a"])(e,C["color-".concat(h)],h),e)),ref:this.props.elementRef}),f)}}])
n.displayName="Text"
return n}(l["Component"]),k.propTypes={as:d.a.elementType,children:d.a.node,color:_["a"].deprecatePropValues(d.a.oneOf(["primary","secondary","brand","success","warning","error","danger","alert","primary-inverse","secondary-inverse"]),["error"],"It will be removed in version 8.0.0. Use `danger` instead."),elementRef:d.a.func,fontStyle:d.a.oneOf(["italic","normal"]),letterSpacing:d.a.oneOf(["normal","condensed","expanded"]),lineHeight:d.a.oneOf(["default","fit","condensed","double"]),size:d.a.oneOf(["x-small","small","medium","large","x-large","xx-large"]),transform:d.a.oneOf(["none","capitalize","uppercase","lowercase"]),weight:d.a.oneOf(["normal","light","bold"]),wrap:d.a.oneOf(["normal","break-word"])},k.defaultProps={as:"span",wrap:"normal",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},w))||x)},Zgll:function(e,t,n){"use strict"
n.d(t,"a",(function(){return w}))
var i=n("Ff2n")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("oXx0")
var p=n("J2CL")
var f=n("jtGx")
var m=n("6SzX")
var g=n("C6Zt")
var _=n("tPrY")
var b,v,y,x,k
var w=(b=Object(h["a"])(),v=Object(p["j"])(_["a"]),b(y=v(y=(k=x=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){var e
Object(o["a"])(this,n)
for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s]
e=t.call.apply(t,[this].concat(r))
e._baseButton=null
return e}Object(r["a"])(n,[{key:"focus",value:function(){this._baseButton&&this._baseButton.focus()}},{key:"render",value:function(){var e=this
var t=this.props,n=t.children,o=t.renderIcon,r=t.screenReaderLabel,s=t.type,a=t.size,l=t.elementRef,u=t.as,d=t.interaction,h=t.color,p=t.focusColor,_=t.shape,b=t.withBackground,v=t.withBorder,y=t.margin,x=t.cursor,k=t.href,w=Object(i["a"])(t,["children","renderIcon","screenReaderLabel","type","size","elementRef","as","interaction","color","focusColor","shape","withBackground","withBorder","margin","cursor","href"])
var C=this.theme
return c.a.createElement(g["a"],Object.assign({},Object(f["b"])(w),{type:s,size:a,elementRef:l,as:u,interaction:d,color:h,focusColor:p,shape:_,withBackground:b,withBorder:v,margin:y,cursor:x,href:k,renderIcon:n||o,theme:C,ref:function(t){e._baseButton=t}}),c.a.createElement(m["a"],null,r))}},{key:"focused",get:function(){return this._baseButton&&this._baseButton.focused}}])
n.displayName="IconButton"
return n}(l["Component"]),x.propTypes={children:d.a.oneOfType([d.a.node,d.a.func]),renderIcon:d.a.oneOfType([d.a.node,d.a.func]),screenReaderLabel:d.a.string.isRequired,type:d.a.oneOf(["button","submit","reset"]),size:d.a.oneOf(["small","medium","large"]),elementRef:d.a.func,as:d.a.elementType,interaction:d.a.oneOf(["enabled","disabled","readonly"]),color:d.a.oneOf(["primary","primary-inverse","secondary","success","danger"]),focusColor:d.a.oneOf(["info","inverse"]),shape:d.a.oneOf(["rectangle","circle"]),withBackground:d.a.bool,withBorder:d.a.bool,margin:p["c"].spacing,cursor:d.a.string,href:d.a.string},x.defaultProps={children:null,renderIcon:void 0,type:"button",size:"medium",elementRef:function(e){},as:"button",interaction:void 0,color:"secondary",focusColor:void 0,shape:"rectangle",withBackground:true,withBorder:true,margin:"0",cursor:"pointer",href:void 0},k))||y)||y)},aaDL:function(e,t,n){"use strict"
n.d(t,"a",(function(){return g}))
n.d(t,"b",(function(){return _}))
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
n("17x9")
var s=n("HGxv")
var a
const l=e=>r.a.createElement("span",e,a||(a=Object(i["a"])("svg",{width:"15px",height:"57px",viewBox:"0 0 15 57",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},void 0,Object(i["a"])("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},void 0,Object(i["a"])("g",{id:"Alt-Move-Module-To-02",transform:"translate(-1174.000000, -193.000000)",fillRule:"nonzero",fill:"#A5AFB5"},void 0,Object(i["a"])("g",{id:"Group",transform:"translate(1174.000000, 193.000000)"},void 0,Object(i["a"])("path",{d:"M2.08984375,50.4040286 L2.08984375,2.140625 L14.2460937,2.140625 L14.2460937,0.140625 L0.08984375,0.140625 L0.08984375,52.4040286 L12.3117575,52.4040286 L12.3117575,50.4040286 L2.08984375,50.4040286 Z M8.75061079,46.8029894 C8.34904169,46.401618 7.70214858,46.397441 7.29950809,46.7998832 L7.29950809,46.7998832 C6.8996553,47.1995392 6.89963974,47.8474939 7.30261575,48.2502716 L11.1577205,52.1034784 C11.5592896,52.5048499 12.2061828,52.5090268 12.6088232,52.1065846 L12.6088232,52.1065846 C13.008676,51.7069286 13.0086916,51.0589739 12.6057156,50.6561963 L8.75061079,46.8029894 L8.75061079,46.8029894 Z M8.75061079,56.1970106 C8.34904169,56.598382 7.70214858,56.602559 7.29950809,56.2001168 L7.29950809,56.2001168 C6.8996553,55.8004608 6.89963974,55.1525061 7.30261575,54.7497284 L11.1577205,50.8965216 C11.5592896,50.4951501 12.2061828,50.4909732 12.6088232,50.8934154 L12.6088232,50.8934154 C13.008676,51.2930714 13.0086916,51.9410261 12.6057156,52.3438037 L8.75061079,56.1970106 L8.75061079,56.1970106 Z",id:"connector"})))))))
var c=l
var u=n("ZbPE")
var d=n("sTNg")
var h=n("n12J")
var p=n("6SzX")
var f=n("E/5I")
n("/J96")
const m=Object(s["useScope"])("selectPosition")
g.defaultProps={options:[],className:"",selectOneDefault:false,testId:null}
function g({label:e,onChange:t,options:n,className:o,selectOneDefault:r,testId:s}){return Object(i["a"])(h["a"],{margin:"medium 0",display:"block",className:o},void 0,Object(i["a"])(d["a"],{id:"move-select-form",label:Object(i["a"])(p["a"],{},void 0,e)},void 0,Object(i["a"])("select",{"data-testid":s,onChange:t,className:"move-select-form",style:{margin:"0",width:"100%"}},void 0,r&&Object(i["a"])("option",{},void 0,m.t("Select one")),n)))}_.defaultProps={selectedPosition:{type:"absolute"},selectPosition:()=>{},selectSibling:()=>{}}
function _({items:e,siblings:t,selectedPosition:n,selectPosition:o,selectSibling:r}){const s=!!(n&&"relative"===n.type)
function a(){const n=t.filter(t=>{var n
return t.id!==(null===(n=e[0])||void 0===n?void 0:n.id)})
return Object(i["a"])(g,{label:m.t("Item Select"),className:"move-select__sibling",onChange:r,options:n.map((e,t)=>Object(i["a"])("option",{value:t},e.id,e.title)),selectOneDefault:false,testId:"select-sibling"})}function l(){const t=1===e.length?m.t('Place "%{title}"',{title:e[0].title}):m.t("Place")
return Object(i["a"])(u["a"],{weight:"bold"},void 0,t)}return Object(i["a"])("div",{},void 0,l(),Object(i["a"])(g,{label:m.t("Position Select"),className:"move-select__position",onChange:o,options:Object.keys(f["a"]).map(e=>Object(i["a"])("option",{value:e},e,f["a"][e].label)),selectOneDefault:false,testId:"select-position"}),s?Object(i["a"])("div",{},void 0,Object(i["a"])(c,{"aria-hidden":true,style:{position:"absolute",transform:"translate(-15px, -35px)"}}),a(e)):null)}},adU4:function(e,t,n){var i=n("y1pI")
var o=Array.prototype
var r=o.splice
function s(e){var t=this.__data__,n=i(t,e)
if(n<0)return false
var o=t.length-1
n==o?t.pop():r.call(t,n,1);--this.size
return true}e.exports=s},agq5:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("VTBJ")
var o=n("rePB")
var r=n("1OyB")
var s=n("vuIU")
var a=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var h=n.n(d)
var p=n("TSYQ")
var f=n.n(p)
var m=n("msMH")
var g=n("n12J")
var _=n("J2CL")
var b=n("E+IV")
var v=n("KgFQ")
var y=n("jtGx")
function x(e){var t=e.borders,n=e.colors,i=e.spacing,o=e.typography
return{fontFamily:o.fontFamily,paddingSmall:i.small,paddingMedium:i.medium,paddingLarge:i.medium,iconColor:n.textDark,mediumMargin:i.small,largeMargin:i.medium,iconHoverColor:n.textLink,backgroundColor:n.backgroundLightest,iconHoverColorInverse:n.textLightest,buttonBorderWidth:t.widthMedium,buttonBorderRadius:t.radiusLarge,messageColor:n.textDark,messageColorClickable:n.textLink,messageColorInverse:n.textLight,messageFontSizeSmall:o.fontSizeSmall,messageFontSizeMedium:o.fontSizeMedium,messageFontSizeLarge:o.fontSizeLarge,clickableActiveBg:n.backgroundBrand,clickableActiveText:n.textLightest,buttonBorderStyle:t.style,buttonHoverBorderStyle:"dashed"}}x.canvas=function(e){return{iconHoverColor:e["ic-link-color"],messageColorClickable:e["ic-link-color"],clickableActiveBg:e["ic-brand-primary"]}}
var k,w,C,O
var S={componentId:"ftPBL",template:function(e){return"\n\n.ftPBL_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";margin-left:auto;margin-right:auto;position:relative;text-align:center}\n\n[dir=ltr] .ftPBL_bGBk,[dir=rtl] .ftPBL_bGBk{text-align:center}\n\n.ftPBL_bGBk:not(.ftPBL_bGiS){background-color:").concat(e.backgroundColor||"inherit","}\n\n.ftPBL_bGBk.ftPBL_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.ftPBL_EwaR,.ftPBL_caGd,.ftPBL_eDnN,.ftPBL_cuDj,.ftPBL_elxg{display:block}\n\n.ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.largeMargin||"inherit"," 0 0}\n\n.ftPBL_eDnN+.ftPBL_elxg,.ftPBL_cuDj+.ftPBL_elxg,.ftPBL_doqw .ftPBL_cuDj+.ftPBL_eDnN{margin:").concat(e.mediumMargin||"inherit"," 0 0}\n\n.ftPBL_doqw{padding:").concat(e.paddingSmall||"inherit","}\n\n.ftPBL_doqw .ftPBL_cuDj{font-size:3rem}\n\n.ftPBL_doqw .ftPBL_elxg{font-size:").concat(e.messageFontSizeSmall||"inherit","}\n\n.ftPBL_ycrn{padding:").concat(e.paddingMedium||"inherit","}\n\n.ftPBL_ycrn .ftPBL_cuDj{font-size:5rem}\n\n.ftPBL_ycrn .ftPBL_elxg{font-size:").concat(e.messageFontSizeMedium||"inherit","}\n\n.ftPBL_cMDj{padding:").concat(e.paddingLarge||"inherit","}\n\n.ftPBL_cMDj .ftPBL_cuDj{font-size:10rem}\n\n.ftPBL_cMDj .ftPBL_elxg{font-size:").concat(e.messageFontSizeLarge||"inherit","}\n\n.ftPBL_elxg{color:").concat(e.messageColor||"inherit","}\n\n.ftPBL_cuDj{color:").concat(e.iconColor||"inherit","}\n\n.ftPBL_cuDj>img,.ftPBL_cuDj>svg{display:block;margin:0 auto;max-width:100%}\n\n.ftPBL_cuDj>img{height:auto}\n\n.ftPBL_bGiS{-moz-appearance:none;-ms-user-select:none;-webkit-appearance:none;-webkit-user-select:none;appearance:none;background:").concat(e.backgroundColor||"inherit",";border:").concat(e.buttonBorderWidth||"inherit"," ").concat(e.buttonBorderStyle||"inherit"," transparent;border-radius:").concat(e.buttonBorderRadius||"inherit",";box-sizing:border-box;cursor:pointer;margin:0;text-decoration:none;touch-action:manipulation;user-select:none;width:100%}\n\n.ftPBL_bGiS:hover{border-style:").concat(e.buttonHoverBorderStyle||"inherit","}\n\n.ftPBL_bGiS:focus,.ftPBL_bGiS:hover{border-color:").concat(e.iconHoverColor||"inherit",";outline:none;text-decoration:none}\n\n.ftPBL_bGiS:focus .ftPBL_cuDj,.ftPBL_bGiS:hover .ftPBL_cuDj{color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active{background:").concat(e.clickableActiveBg||"inherit",";border-color:").concat(e.iconHoverColor||"inherit","}\n\n.ftPBL_bGiS:active .ftPBL_cuDj,.ftPBL_bGiS:active .ftPBL_elxg{color:").concat(e.clickableActiveText||"inherit","}\n\n.ftPBL_bGiS .ftPBL_elxg{color:").concat(e.messageColorClickable||"inherit","}")},root:"ftPBL_bGBk",clickable:"ftPBL_bGiS",disabled:"ftPBL_ywdX",button:"ftPBL_EwaR",content:"ftPBL_caGd",heading:"ftPBL_eDnN",hero:"ftPBL_cuDj",message:"ftPBL_elxg",small:"ftPBL_doqw",medium:"ftPBL_ycrn",large:"ftPBL_cMDj"}
var E=(k=Object(_["j"])(x,S),k(w=(O=C=function(e){Object(a["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s]
e=t.call.apply(t,[this].concat(o))
e.handleClick=function(t){var n=e.props,i=n.readOnly,o=n.onClick
if(i){t.preventDefault()
t.stopPropagation()}else"function"===typeof o&&o(t)}
return e}Object(s["a"])(n,[{key:"renderHeading",value:function(){var e=this.props,t=e.headingLevel,n=e.headingAs,i=e.heading
return u.a.createElement("span",{className:S.heading},u.a.createElement(m["a"],{level:t,as:n,color:"primary"},i))}},{key:"renderHero",value:function(){return this.heroIsFunction?this.props.hero(this.SVGIconSize):this.props.hero}},{key:"renderContent",value:function(){var e=this.props,t=e.heading,n=e.message,i=e.hero
return u.a.createElement("span",{className:S.content},i&&u.a.createElement("span",{className:S.hero},this.renderHero()),t&&this.renderHeading(),n&&u.a.createElement("span",{className:S.message},Object(b["a"])(n)))}},{key:"render",value:function(){var e
var t=this.props,r=t.href,s=t.disabled,a=t.readOnly,l=t.onClick,c=t.size,d=t.margin,h=t.elementRef
var p=(e={},Object(o["a"])(e,S.root,true),Object(o["a"])(e,S[c],true),Object(o["a"])(e,S.clickable,r||l),Object(o["a"])(e,S.disabled,s),e)
var m=Object(v["a"])(n,this.props)
return u.a.createElement(g["a"],{as:"div",margin:d},u.a.createElement(g["a"],Object.assign({},Object(y["a"])(this.props,Object(i["a"])({},n.propTypes,{},g["a"].propTypes)),{type:"button"===m?"button":null,as:m,elementRef:h,className:f()(p),href:r,onClick:this.handleClick,disabled:s,"aria-disabled":s||a?"true":null}),this.renderContent()))}},{key:"heroIsFunction",get:function(){return"function"===typeof this.props.hero}},{key:"SVGIconSize",get:function(){var e=this.props.size
return"small"===e?"medium":"large"===e?"x-large":"large"}}])
n.displayName="Billboard"
return n}(c["Component"]),C.propTypes={hero:h.a.oneOfType([h.a.element,h.a.func]),size:h.a.oneOf(["small","medium","large"]),as:h.a.elementType,elementRef:h.a.func,heading:h.a.string,headingAs:h.a.oneOf(["h1","h2","h3","span"]),headingLevel:h.a.oneOf(["h1","h2","h3","h4"]),message:h.a.oneOfType([h.a.node,h.a.func]),onClick:h.a.func,href:h.a.string,disabled:h.a.bool,readOnly:h.a.bool,margin:_["c"].spacing},C.defaultProps={margin:void 0,disabled:false,readOnly:false,href:void 0,message:void 0,onClick:void 0,heading:void 0,hero:void 0,size:"medium",headingAs:"span",headingLevel:"h1",as:"span",elementRef:function(e){}},O))||w)},aq8L:function(e,t,n){"use strict"
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("gI0r")
var a=n("3PZ/")
n("dhbk")
n("ESjL")
n("65NJ")
n("w2hD")
const l=Object(i["useScope"])("instructure_misc_plugins")
r.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(s["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(s["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(r.a.raw(n))}
r.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){const e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
e.remove()
return n-i}
r.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
r.a.fn.undim=function(e){return this.animate({opacity:1},e)}
r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
const t=this
let n=null
let i=true
e.noMessage=e.noMessage||e.no_message
const o=function(){if(!i){e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(a["a"])()
r.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,o,s)=>{e.error&&r.a.isFunction(e.error)?e.error.call(t,n,i,o,s):r.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){i=false
const t="object"===typeof e.dialog?e.dialog:{}
const s=e.url.includes("assignments")?"btn-danger":"btn-primary"
n=r()(e.message).dialog(r.a.extend({},{modal:true,close:o,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:s,click(){i=true
r()(this).dialog("close")}}]},t))
return}i=confirm(e.message)}o()}
r.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
r.a.fn.fragmentChange=function(e){if(e&&true!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const o=this
let s=false
for(t=0;t<r.a._checkFragments.fragmentList.length;t++){const e=r.a._checkFragments.fragmentList[t]
e.doc[0]==o[0]&&(s=true)}s||r.a._checkFragments.fragmentList.push({doc:o,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(()=>{i&&i.length>0?o.triggerHandler("document_fragment_change",i):o&&o[0]&&o[0].location&&o[0].location.hash.length>0&&o.triggerHandler("document_fragment_change",o[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){const e=r.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t]
const i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
r.a._checkFragments.fragmentList[t]=n}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
r.a.fn.showIf=function(e){if(r.a.isFunction(e))return this.each((function(t){r()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
r.a.fn.disableIf=function(e){r.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
r.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}r()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width()
const o=this.height()
const s=(e.container||this).zIndex()
t=r()(document.createElement("div"))
t.css({width:i+6,height:o+6,top:n.top-3,left:n.left-3,zIndex:s+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
r()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()}))
e&&e.scroll&&r()("html,body").scrollToVisible(t)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
r.a.fn.fillWindowWithMe=function(e){const t=r.a.extend({minHeight:400},e),n=r()(this),i=r()("#wrapper"),o=r()("#main"),s=r()("#not_right_side"),a=r()(window),l=r()(this).add(t.alsoResize)
function c(){l.height(0)
const e=a.height()-(i.offset().top+i.outerHeight())+(o.height()-s.height()),c=Math.max(400,e)
l.height(c)
r.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
r.a.fn.autoGrowInput=function(e){e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||r()(this).width(),n="",i=r()(this),o=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),s=function(){setTimeout(()=>{if(n===(n=i.val()))return
o.text(n)
const r=o.width(),s=r+e.comfortZone>=t?r+e.comfortZone:t,a=i.width(),l=s<a&&s>=t||s>t&&s<e.maxWidth
l&&i.width(s)})}
o.insertAfter(i)
r()(this).bind("keyup keydown blur update change",s)}))
return this}
r.a},bJGz:function(e,t,n){"use strict"
n.d(t,"a",(function(){return b}))
var i=n("RtDj")
var o=n("HGxv")
var r=n("q1tI")
var s=n.n(r)
n("17x9")
var a=n("Mmr1")
var l=n("n12J")
var c=n("TstA")
var u=n("msMH")
var d=n("Ci/e")
var h=n("4uX5")
var p=n("qwzJ")
var f=n("1sWr")
var m=n.n(f)
var g=n("/656")
const _=Object(o["useScope"])("tray")
b.defaultProps={padding:"small",contentPadding:"0",errorImageUrl:m.a}
function b({padding:e,headerPadding:t,contentPadding:n,errorSubject:o,errorCategory:r,errorImageUrl:f,label:m,title:b,onDismiss:v,children:y,...x}){var k,w
null==t&&(t=`0 0 ${e} 0`)
null==b&&(b=m)
function C(){return Object(i["a"])(c["a"],{as:"div",padding:t},void 0,Object(i["a"])(c["a"].Item,{grow:true},void 0,Object(i["a"])(u["a"],{},void 0,Object(i["a"])(g["a"],{},void 0,b))),Object(i["a"])(c["a"].Item,{},void 0,Object(i["a"])(a["a"],{onClick:v,size:"small",screenReaderLabel:_.t("Close")})))}function O(){return Object(i["a"])(h["a"],{errorComponent:k||(k=Object(i["a"])(p["a"],{imageUrl:f,errorSubject:o,errorCategory:r}))},void 0,w||(w=Object(i["a"])(l["a"],{as:"div",padding:n,width:"100%",height:"100%"},void 0,y)))}return s.a.createElement(d["a"],Object.assign({label:m,onDismiss:v},x),Object(i["a"])(l["a"],{as:"div",padding:e,position:"absolute",insetBlockStart:"0",insetBlockEnd:"0",insetInlineStart:"0",insetInlineEnd:"0"},void 0,Object(i["a"])("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%"}},void 0,C(),Object(i["a"])("div",{style:{position:"relative",flex:1}},void 0,O()))))}},bKqk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M101.002105,1230.63705 L101.002105,377.954947 C658.711579,230.317053 1177.31368,342.485474 1315.45263,377.954947 L1315.45263,773.879158 L1416.50526,743.563368 L1416.50526,302.165474 L1380.83368,291.150737 C1354.56,282.864421 729.246316,93.9970526 31.68,292.464421 L-0.0505263158,305.197053 L-0.0505263158,1306.42653 L35.6210526,1317.34021 C52.9010526,1322.79705 331.402105,1406.87284 717.827368,1406.87284 C840,1406.87284 973.692632,1396.86863 1112.53895,1374.94021 L1112.53895,1273.68547 C636.176842,1351.496 222.063158,1261.66021 101.002105,1230.63705 M1919.90905,789.309895 L1919.90905,1482.83411 C1919.808,1585.90779 1837.65221,1669.68042 1736.59958,1669.68042 C1644.74274,1669.68042 1569.25642,1600.15621 1556.01853,1510.21937 C1554.60379,1501.12463 1553.29011,1492.02989 1553.29011,1482.53095 C1553.29011,1379.45726 1635.44589,1295.48253 1736.59958,1295.48253 C1753.27326,1295.48253 1769.13853,1298.41305 1784.49853,1302.75832 C1796.52379,1305.992 1808.04379,1310.64042 1818.85642,1316.29937 L1818.85642,1316.29937 L1818.85642,924.619368 L1779.04168,936.442526 L1416.46484,1043.76042 L1388.57432,1051.94568 L1388.57432,1631.88674 C1388.57432,1634.71621 1387.86695,1637.34358 1387.76589,1640.072 C1383.52168,1739.30568 1303.58905,1819.03621 1205.16379,1819.03621 C1104.01011,1819.03621 1021.85432,1735.06147 1021.85432,1631.88674 C1021.85432,1563.37305 1058.53642,1503.85305 1112.49853,1471.31411 C1139.88379,1454.84253 1171.21011,1444.73726 1205.16379,1444.73726 C1234.97432,1444.73726 1262.66274,1452.72042 1287.52168,1465.55411 L1287.52168,1465.55411 L1287.52168,976.459368 L1315.41221,968.274105 L1416.46484,938.362526 L1777.42484,831.549895 L1919.90905,789.309895 Z M527.514947,480.634526 L1088.35705,810.470316 L527.514947,1140.20505 L527.514947,480.634526 Z M628.567579,657.274526 L628.567579,963.565053 L888.980211,810.470316 L628.567579,657.274526 Z M1736.59958,1568.62779 C1698.50274,1568.62779 1667.78274,1540.93937 1658.48589,1503.95411 C1656.66695,1496.98147 1654.34274,1490.21095 1654.34274,1482.53095 C1654.34274,1435.13726 1691.22695,1396.53516 1736.59958,1396.53516 C1755.49642,1396.53516 1772.27116,1404.31621 1786.11537,1415.63411 C1805.61853,1431.39832 1818.85642,1454.94358 1818.85642,1482.53095 C1818.85642,1530.02568 1781.97221,1568.62779 1736.59958,1568.62779 L1736.59958,1568.62779 Z M1205.16379,1717.98358 C1159.79116,1717.98358 1122.90695,1679.38147 1122.90695,1631.88674 C1122.90695,1584.392 1159.79116,1545.78989 1205.16379,1545.78989 C1250.53642,1545.78989 1287.52168,1584.392 1287.52168,1631.88674 C1287.52168,1679.38147 1250.53642,1717.98358 1205.16379,1717.98358 L1205.16379,1717.98358 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconAttachMedia",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconAttachMediaLine"
return n}(l["Component"])
h.glyphName="attach-media"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},bZJi:function(e,t,n){"use strict"
n.d(t,"a",(function(){return D}))
var i=n("Ff2n")
var o=n("VTBJ")
var r=n("1OyB")
var s=n("vuIU")
var a=n("Ji7U")
var l=n("LK+K")
var c=n("q1tI")
var u=n.n(c)
var d=n("17x9")
var h=n.n(d)
var p=n("nAyT")
var f=n("KgFQ")
var m=n("jtGx")
var g=n("sQ3t")
var _=n("E+IV")
var b=n("UCAh")
var v=n("BTe1")
var y=n("J2CL")
var x=n("oXx0")
var k=n("jsCG")
var w=n("AdN2")
var C=function(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:n.small}}
var O,S,E,T,I,j
var L={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var D=(O=Object(p["a"])("8.0.0",{tip:"renderTip",variant:"color"}),S=Object(x["a"])(),E=Object(y["j"])(C,L),O(T=S(T=E(T=(j=I=function(e){Object(a["a"])(n,e)
var t=Object(l["a"])(n)
function n(){var e
Object(r["a"])(this,n)
for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s]
e=t.call.apply(t,[this].concat(o))
e._id=Object(v["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(s["a"])(n,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,i=e.as
var r=this.state.hasFocus
var s={"aria-describedby":this._id}
if(i){var a=Object(f["a"])(n,this.props)
var l=Object(m["a"])(this.props,n.propTypes)
return u.a.createElement(a,Object.assign({},l,s),t)}return"function"===typeof t?t({focused:r,getTriggerProps:function(e){return Object(o["a"])({},s,{},e)}}):Object(g["a"])(this.props.children,s)}},{key:"render",value:function(){var e=this
var t=this.props,n=t.renderTip,o=t.isShowingContent,r=t.defaultIsShowingContent,s=t.on,a=t.placement,l=t.mountNode,c=t.constrain,d=t.offsetX,h=t.offsetY,p=t.positionTarget,f=t.onShowContent,g=t.onHideContent,b=t.tip,v=(t.variant,Object(i["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var y=this.props.variant
y=y?"default"===y?"primary-inverse":"primary":this.props.color
return u.a.createElement(k["a"],Object.assign({},Object(m["b"])(v),{isShowingContent:o,defaultIsShowingContent:r,on:s,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:a,color:"primary"===y?"primary-inverse":"primary",mountNode:l,constrain:c,shadow:"none",offsetX:d,offsetY:h,positionTarget:p,renderTrigger:function(){return e.renderTrigger()},onShowContent:f,onHideContent:g,onFocus:this.handleFocus,onBlur:this.handleBlur}),u.a.createElement("span",{id:this._id,className:L.root,role:"tooltip"},n?Object(_["a"])(n):b))}}])
n.displayName="Tooltip"
return n}(c["Component"]),I.propTypes={children:h.a.oneOfType([h.a.node,h.a.func]).isRequired,renderTip:h.a.oneOfType([h.a.node,h.a.func]),isShowingContent:h.a.bool,defaultIsShowingContent:h.a.bool,as:h.a.elementType,on:h.a.oneOfType([h.a.oneOf(["click","hover","focus"]),h.a.arrayOf(h.a.oneOf(["click","hover","focus"]))]),color:h.a.oneOf(["primary","primary-inverse"]),placement:b["a"].placement,mountNode:b["a"].mountNode,constrain:b["a"].constrain,offsetX:h.a.oneOfType([h.a.string,h.a.number]),offsetY:h.a.oneOfType([h.a.string,h.a.number]),positionTarget:h.a.oneOfType([w["a"],h.a.func]),onShowContent:h.a.func,onHideContent:h.a.func,tip:h.a.node,variant:h.a.oneOf(["default","inverse"])},I.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},j))||T)||T)||T)},bgJ8:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
n("MIhX")
n("dGUw")
n("dJId")
o.a.widget("ui.sortable",o.a.ui.mouse,{version:"@VERSION",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3},_create:function(){var e=this.options
this.containerCache={}
this.element.addClass("ui-sortable")
this.refresh()
this.floating=!!this.items.length&&("x"===e.axis||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")))
this.offset=this.element.offset()
this._mouseInit()
this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled")
this._mouseDestroy()
for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item")
return this},_setOption:function(e,t){if("disabled"===e){this.options[e]=t
this.widget().toggleClass("ui-sortable-disabled",!!t)}else o.a.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,t){var n=this
if(this.reverting)return false
if(this.options.disabled||"static"==this.options.type)return false
this._refreshItems(e)
var i=null
o()(e.target).parents().each((function(){if(o.a.data(this,n.widgetName+"-item")==n){i=o()(this)
return false}}))
o.a.data(e.target,n.widgetName+"-item")==n&&(i=o()(e.target))
if(!i)return false
if(this.options.handle&&!t){var r=false
o()(this.options.handle,i).find("*").andSelf().each((function(){this==e.target&&(r=true)}))
if(!r)return false}this.currentItem=i
this._removeCurrentsFromItems()
return true},_mouseStart:function(e,t,n){var i=this.options
this.currentContainer=this
this.refreshPositions()
this.helper=this._createHelper(e)
this._cacheHelperProportions()
this._cacheMargins()
this.scrollParent=this.helper.scrollParent()
this.offset=this.currentItem.offset()
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left}
o.a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()})
this.helper.css("position","absolute")
this.cssPosition=this.helper.css("position")
this.originalPosition=this._generatePosition(e)
this.originalPageX=e.pageX
this.originalPageY=e.pageY
i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt)
this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]}
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide()
this._createPlaceholder()
i.containment&&this._setContainment()
if(i.cursor){o()("body").css("cursor")&&(this._storedCursor=o()("body").css("cursor"))
o()("body").css("cursor",i.cursor)}if(i.opacity){this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity"))
this.helper.css("opacity",i.opacity)}if(i.zIndex){this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex"))
this.helper.css("zIndex",i.zIndex)}this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset())
this._trigger("start",e,this._uiHash())
this._preserveHelperProportions||this._cacheHelperProportions()
if(!n)for(var r=this.containers.length-1;r>=0;r--)this.containers[r]._trigger("activate",e,this._uiHash(this))
o.a.ui.ddmanager&&(o.a.ui.ddmanager.current=this)
o.a.ui.ddmanager&&!i.dropBehaviour&&o.a.ui.ddmanager.prepareOffsets(this,e)
this.dragging=true
this.helper.addClass("ui-sortable-helper")
this._mouseDrag(e)
return true},_mouseDrag:function(e){this.position=this._generatePosition(e)
this.positionAbs=this._convertPositionTo("absolute")
this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs)
if(this.options.scroll){var t=this.options,n=false
if(this.scrollParent[0]!=document&&"HTML"!=this.scrollParent[0].tagName){this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<t.scrollSensitivity?this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop+t.scrollSpeed:e.pageY-this.overflowOffset.top<t.scrollSensitivity&&(this.scrollParent[0].scrollTop=n=this.scrollParent[0].scrollTop-t.scrollSpeed)
this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<t.scrollSensitivity?this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft+t.scrollSpeed:e.pageX-this.overflowOffset.left<t.scrollSensitivity&&(this.scrollParent[0].scrollLeft=n=this.scrollParent[0].scrollLeft-t.scrollSpeed)}else{e.pageY-o()(document).scrollTop()<t.scrollSensitivity?n=o()(document).scrollTop(o()(document).scrollTop()-t.scrollSpeed):o()(window).height()-(e.pageY-o()(document).scrollTop())<t.scrollSensitivity&&(n=o()(document).scrollTop(o()(document).scrollTop()+t.scrollSpeed))
e.pageX-o()(document).scrollLeft()<t.scrollSensitivity?n=o()(document).scrollLeft(o()(document).scrollLeft()-t.scrollSpeed):o()(window).width()-(e.pageX-o()(document).scrollLeft())<t.scrollSensitivity&&(n=o()(document).scrollLeft(o()(document).scrollLeft()+t.scrollSpeed))}false!==n&&o.a.ui.ddmanager&&!t.dropBehaviour&&o.a.ui.ddmanager.prepareOffsets(this,e)}this.positionAbs=this._convertPositionTo("absolute")
this.options.axis&&"y"==this.options.axis||(this.helper[0].style.left=this.position.left+"px")
this.options.axis&&"x"==this.options.axis||(this.helper[0].style.top=this.position.top+"px")
for(var i=this.items.length-1;i>=0;i--){var r=this.items[i],s=r.item[0],a=this._intersectsWithPointer(r)
if(!a)continue
if(s!=this.currentItem[0]&&this.placeholder[1==a?"next":"prev"]()[0]!=s&&!o.a.contains(this.placeholder[0],s)&&("semi-dynamic"!=this.options.type||!o.a.contains(this.element[0],s))){this.direction=1==a?"down":"up"
if("pointer"!=this.options.tolerance&&!this._intersectsWithSides(r))break
this._rearrange(e,r)
this._trigger("change",e,this._uiHash())
break}}this._contactContainers(e)
o.a.ui.ddmanager&&o.a.ui.ddmanager.drag(this,e)
this._trigger("sort",e,this._uiHash())
this.lastPositionAbs=this.positionAbs
return false},_mouseStop:function(e,t){if(!e)return
o.a.ui.ddmanager&&!this.options.dropBehaviour&&o.a.ui.ddmanager.drop(this,e)
if(this.options.revert){var n=this
var i=this.placeholder.offset()
this.reverting=true
o()(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,(function(){n._clear(e)}))}else this._clear(e,t)
return false},cancel:function(){if(this.dragging){this._mouseUp({target:null})
"original"==this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show()
for(var e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("deactivate",null,this._uiHash(this))
if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",null,this._uiHash(this))
this.containers[e].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0])
"original"!=this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove()
o.a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null})
this.domPosition.prev?o()(this.domPosition.prev).after(this.currentItem):o()(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(e){var t=this._getItemsAsjQuery(e&&e.connected)
var n=[]
e=e||{}
o()(t).each((function(){var t=(o()(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[-=_](.+)/)
t&&n.push((e.key||t[1]+"[]")+"="+(e.key&&e.expression?t[1]:t[2]))}))
!n.length&&e.key&&n.push(e.key+"=")
return n.join("&")},toArray:function(e){var t=this._getItemsAsjQuery(e&&e.connected)
var n=[]
e=e||{}
t.each((function(){n.push(o()(e.item||this).attr(e.attribute||"id")||"")}))
return n},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,i=this.positionAbs.top,o=i+this.helperProportions.height
var r=e.left,s=r+e.width,a=e.top,l=a+e.height
var c=this.offset.click.top,u=this.offset.click.left
var d=i+c>a&&i+c<l&&t+u>r&&t+u<s
return"pointer"==this.options.tolerance||this.options.forcePointerForContainers||"pointer"!=this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?d:r<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<s&&a<i+this.helperProportions.height/2&&o-this.helperProportions.height/2<l},_intersectsWithPointer:function(e){var t="x"===this.options.axis||o.a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),n="y"===this.options.axis||o.a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&n,r=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection()
if(!i)return false
return this.floating?s&&"right"==s||"down"==r?2:1:r&&("down"==r?2:1)},_intersectsWithSides:function(e){var t=o.a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),n=o.a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection()
return this.floating&&r?"right"==r&&n||"left"==r&&!n:i&&("down"==i&&t||"up"==i&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top
return 0!=e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left
return 0!=e&&(e>0?"right":"left")},refresh:function(e){this._refreshItems(e)
this.refreshPositions()
return this},_connectWith:function(){var e=this.options
return e.connectWith.constructor==String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(e){var t=[]
var n=[]
var i=this._connectWith()
if(i&&e)for(var r=i.length-1;r>=0;r--){var s=o()(i[r])
for(var a=s.length-1;a>=0;a--){var l=o.a.data(s[a],this.widgetName)
l&&l!=this&&!l.options.disabled&&n.push([o.a.isFunction(l.options.items)?l.options.items.call(l.element):o()(l.options.items,l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),l])}}n.push([o.a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):o()(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this])
for(r=n.length-1;r>=0;r--)n[r][0].each((function(){t.push(this)}))
return o()(t)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)")
for(var t=0;t<this.items.length;t++)for(var n=0;n<e.length;n++)e[n]==this.items[t].item[0]&&this.items.splice(t,1)},_refreshItems:function(e){this.items=[]
this.containers=[this]
var t=this.items
var n=[[o.a.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):o()(this.options.items,this.element),this]]
var i=this._connectWith()
if(i&&this.ready)for(var r=i.length-1;r>=0;r--){var s=o()(i[r])
for(var a=s.length-1;a>=0;a--){var l=o.a.data(s[a],this.widgetName)
if(l&&l!=this&&!l.options.disabled){n.push([o.a.isFunction(l.options.items)?l.options.items.call(l.element[0],e,{item:this.currentItem}):o()(l.options.items,l.element),l])
this.containers.push(l)}}}for(r=n.length-1;r>=0;r--){var c=n[r][1]
var u=n[r][0]
a=0
for(var d=u.length;a<d;a++){var h=o()(u[a])
h.data(this.widgetName+"-item",c)
t.push({item:h,instance:c,width:0,height:0,left:0,top:0})}}},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset())
for(var t=this.items.length-1;t>=0;t--){var n=this.items[t]
if(n.instance!=this.currentContainer&&this.currentContainer&&n.item[0]!=this.currentItem[0])continue
var i=this.options.toleranceElement?o()(this.options.toleranceElement,n.item):n.item
if(!e){n.width=i.outerWidth()
n.height=i.outerHeight()}var r=i.offset()
n.left=r.left
n.top=r.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this)
else for(t=this.containers.length-1;t>=0;t--){r=this.containers[t].element.offset()
this.containers[t].containerCache.left=r.left
this.containers[t].containerCache.top=r.top
this.containers[t].containerCache.width=this.containers[t].element.outerWidth()
this.containers[t].containerCache.height=this.containers[t].element.outerHeight()}return this},_createPlaceholder:function(e){e=e||this
var t=e.options
if(!t.placeholder||t.placeholder.constructor==String){var n=t.placeholder
t.placeholder={element:function(){var t=o()(document.createElement(e.currentItem[0].nodeName)).addClass(n||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]
n||(t.style.visibility="hidden")
return t},update:function(i,o){if(n&&!t.forcePlaceholderSize)return
o.height()||o.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10))
o.width()||o.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))}}}e.placeholder=o()(t.placeholder.element.call(e.element,e.currentItem))
e.currentItem.after(e.placeholder)
t.placeholder.update(e,e.placeholder)},_contactContainers:function(e){var t=null,n=null
for(var i=this.containers.length-1;i>=0;i--){if(o.a.contains(this.currentItem[0],this.containers[i].element[0]))continue
if(this._intersectsWith(this.containers[i].containerCache)){if(t&&o.a.contains(this.containers[i].element[0],t.element[0]))continue
t=this.containers[i]
n=i}else if(this.containers[i].containerCache.over){this.containers[i]._trigger("out",e,this._uiHash(this))
this.containers[i].containerCache.over=0}}if(!t)return
if(1===this.containers.length){this.containers[n]._trigger("over",e,this._uiHash(this))
this.containers[n].containerCache.over=1}else if(this.currentContainer!=this.containers[n]){var r=1e4
var s=null
var a=this.positionAbs[this.containers[n].floating?"left":"top"]
for(var l=this.items.length-1;l>=0;l--){if(!o.a.contains(this.containers[n].element[0],this.items[l].item[0]))continue
var c=this.containers[n].floating?this.items[l].item.offset().left:this.items[l].item.offset().top
if(Math.abs(c-a)<r){r=Math.abs(c-a)
s=this.items[l]
this.direction=c-a>0?"down":"up"}}if(!s&&!this.options.dropOnEmpty)return
this.currentContainer=this.containers[n]
s?this._rearrange(e,s,null,true):this._rearrange(e,null,this.containers[n].element,true)
this._trigger("change",e,this._uiHash())
this.containers[n]._trigger("change",e,this._uiHash(this))
this.options.placeholder.update(this.currentContainer,this.placeholder)
this.containers[n]._trigger("over",e,this._uiHash(this))
this.containers[n].containerCache.over=1}},_createHelper:function(e){var t=this.options
var n=o.a.isFunction(t.helper)?o()(t.helper.apply(this.element[0],[e,this.currentItem])):"clone"==t.helper?this.currentItem.clone():this.currentItem
n.parents("body").length||o()("parent"!=t.appendTo?t.appendTo:this.currentItem[0].parentNode)[0].appendChild(n[0])
n[0]==this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")});(""==n[0].style.width||t.forceHelperSize)&&n.width(this.currentItem.width());(""==n[0].style.height||t.forceHelperSize)&&n.height(this.currentItem.height())
return n},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" "))
o.a.isArray(e)&&(e={left:+e[0],top:+e[1]||0})
"left"in e&&(this.offset.click.left=e.left+this.margins.left)
"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left)
"top"in e&&(this.offset.click.top=e.top+this.margins.top)
"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
var e=this.offsetParent.offset()
if("absolute"==this.cssPosition&&this.scrollParent[0]!=document&&o.a.contains(this.scrollParent[0],this.offsetParent[0])){e.left+=this.scrollParent.scrollLeft()
e.top+=this.scrollParent.scrollTop()}(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&"html"==this.offsetParent[0].tagName.toLowerCase()&&o.a.browser.msie)&&(e={top:0,left:0})
return{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"==this.cssPosition){var e=this.currentItem.position()
return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e=this.options
"parent"==e.containment&&(e.containment=this.helper[0].parentNode)
"document"!=e.containment&&"window"!=e.containment||(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,o()("document"==e.containment?document:window).width()-this.helperProportions.width-this.margins.left,(o()("document"==e.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top])
if(!/^(document|window|parent)$/.test(e.containment)){var t=o()(e.containment)[0]
var n=o()(e.containment).offset()
var i="hidden"!=o()(t).css("overflow")
this.containment=[n.left+(parseInt(o()(t).css("borderLeftWidth"),10)||0)+(parseInt(o()(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(o()(t).css("borderTopWidth"),10)||0)+(parseInt(o()(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(i?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(o()(t).css("borderLeftWidth"),10)||0)-(parseInt(o()(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(i?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(o()(t).css("borderTopWidth"),10)||0)-(parseInt(o()(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(e,t){t||(t=this.position)
var n="absolute"==e?1:-1
this.options
var i="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&o.a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,r=/(html|body)/i.test(i[0].tagName)
return{top:t.top+this.offset.relative.top*n+this.offset.parent.top*n-("fixed"==this.cssPosition?-this.scrollParent.scrollTop():r?0:i.scrollTop())*n,left:t.left+this.offset.relative.left*n+this.offset.parent.left*n-("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():r?0:i.scrollLeft())*n}},_generatePosition:function(e){var t=this.options,n="absolute"!=this.cssPosition||this.scrollParent[0]!=document&&o.a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(n[0].tagName)
"relative"!=this.cssPosition||this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset())
var r=e.pageX
var s=e.pageY
if(this.originalPosition){if(this.containment){e.pageX-this.offset.click.left<this.containment[0]&&(r=this.containment[0]+this.offset.click.left)
e.pageY-this.offset.click.top<this.containment[1]&&(s=this.containment[1]+this.offset.click.top)
e.pageX-this.offset.click.left>this.containment[2]&&(r=this.containment[2]+this.offset.click.left)
e.pageY-this.offset.click.top>this.containment[3]&&(s=this.containment[3]+this.offset.click.top)}if(t.grid){var a=this.originalPageY+Math.round((s-this.originalPageY)/t.grid[1])*t.grid[1]
s=this.containment&&(a-this.offset.click.top<this.containment[1]||a-this.offset.click.top>this.containment[3])?a-this.offset.click.top<this.containment[1]?a+t.grid[1]:a-t.grid[1]:a
var l=this.originalPageX+Math.round((r-this.originalPageX)/t.grid[0])*t.grid[0]
r=this.containment&&(l-this.offset.click.left<this.containment[0]||l-this.offset.click.left>this.containment[2])?l-this.offset.click.left<this.containment[0]?l+t.grid[0]:l-t.grid[0]:l}}return{top:s-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"==this.cssPosition?-this.scrollParent.scrollTop():i?0:n.scrollTop()),left:r-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"==this.cssPosition?-this.scrollParent.scrollLeft():i?0:n.scrollLeft())}},_rearrange:function(e,t,n,i){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"==this.direction?t.item[0]:t.item[0].nextSibling)
this.counter=this.counter?++this.counter:1
var o=this.counter
this._delay((function(){o==this.counter&&this.refreshPositions(!i)}))},_clear:function(e,t){this.reverting=false
var n=[]
!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem)
this._noFinalSort=null
if(this.helper[0]==this.currentItem[0]){for(var i in this._storedCSS)"auto"!=this._storedCSS[i]&&"static"!=this._storedCSS[i]||(this._storedCSS[i]="")
this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show()
this.fromOutside&&!t&&n.push((function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}))
!this.fromOutside&&this.domPosition.prev==this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent==this.currentItem.parent()[0]||t||n.push((function(e){this._trigger("update",e,this._uiHash())}))
if(!o.a.contains(this.element[0],this.currentItem[0])){t||n.push((function(e){this._trigger("remove",e,this._uiHash())}))
for(i=this.containers.length-1;i>=0;i--)if(o.a.contains(this.containers[i].element[0],this.currentItem[0])&&!t){n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.containers[i]))
n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.containers[i]))}}for(i=this.containers.length-1;i>=0;i--){t||n.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[i]))
if(this.containers[i].containerCache.over){n.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[i]))
this.containers[i].containerCache.over=0}}this._storedCursor&&o()("body").css("cursor",this._storedCursor)
this._storedOpacity&&this.helper.css("opacity",this._storedOpacity)
this._storedZIndex&&this.helper.css("zIndex","auto"==this._storedZIndex?"":this._storedZIndex)
this.dragging=false
if(this.cancelHelperRemoval){if(!t){this._trigger("beforeStop",e,this._uiHash())
for(i=0;i<n.length;i++)n[i].call(this,e)
this._trigger("stop",e,this._uiHash())}return false}t||this._trigger("beforeStop",e,this._uiHash())
this.placeholder[0].parentNode.removeChild(this.placeholder[0])
this.helper[0]!=this.currentItem[0]&&this.helper.remove()
this.helper=null
if(!t){for(i=0;i<n.length;i++)n[i].call(this,e)
this._trigger("stop",e,this._uiHash())}this.fromOutside=false
return true},_trigger:function(){false===o.a.Widget.prototype._trigger.apply(this,arguments)&&this.cancel()},_uiHash:function(e){var t=e||this
return{helper:t.helper,placeholder:t.placeholder||o()([]),position:t.position,originalPosition:t.originalPosition,offset:t.positionAbs,item:t.currentItem,sender:e?e.element:null}}})},br6r:function(e,t,n){"use strict"
var i=n("mX+G")
var o=n.n(i)
var r=n("RoCN")
var s=n("ouhR")
var a=n.n(s)
var l=n("Y/W1")
var c=n.n(l)
var u=n("HGxv")
n("tHpF")
n("sXof")
n("Dhso")
var d=n("eodz")
var h=n("4M30")
var p=n("yuBc")
function f(e,t=["message"]){const n={...e}
t.forEach(e=>{if(!n[e])return
n[e]=Object(p["a"])(n[e])})
return n}var m,g=function(e,t){return function(){return e.apply(t,arguments)}},_=function(e,t){for(var n in t)b.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},b={}.hasOwnProperty,v=[].slice
m=Object(u["useScope"])("errors")
t["a"]=function(e){_(t,e)
function t(){this.checkUnload=g(this.checkUnload,this)
this.watchUnload=g(this.watchUnload,this)
this.onSaveFail=g(this.onSaveFail,this)
this.onSaveSuccess=g(this.onSaveSuccess,this)
return t.__super__.constructor.apply(this,arguments)}t.mixin(r["a"])
t.prototype.tagName="form"
t.prototype.className="validated-form-view"
t.prototype.events={submit:"submit"}
t.prototype.saveOpts={wait:true}
t.prototype.disableWhileLoadingOpts={}
t.prototype.submit=function(e,t){var n,i,o,r,s,l,u,h,p
null==t&&(t=d["d"])
null!=e&&e.preventDefault()
this.hideErrors()
h=this.$el.find("textarea[data-rich_text]").toArray()
u=true
h.length>0&&(u=h.map((function(e){return t(a()(e),"checkReadyToGetCode",window.confirm)})).every((function(e){return e})))
if(!u)return
i=this.getFormData()
s=this.validateBeforeSave(i,{})
if(0===c.a.keys(s).length){r=new a.a.Deferred
p=this.saveFormData(i)
p.then(this.onSaveSuccess.bind(this),this.onSaveFail.bind(this))
p.fail((f=this,function(){r.reject()
if(f.setFocusAfterError)return f.setFocusAfterError()}))
this.dontRenableAfterSaveSuccess||p.done((function(){return r.resolve()}))
this.$el.disableWhileLoading(r,this.disableWhileLoadingOpts)
h.length>0&&h.forEach((function(e){return t(a()(e),"RCEClosed")}))
this.trigger("submit")
return p}o=c.a.map(a()("[data-error-type]"),(function(e){return a()(e).attr("data-error-type")}))
n=c.a.chain(c.a.keys(s)).reject((function(e){return c.a.includes(o,e)})).value()
l=n[0]||o[0]
this.findField(l).focus()
return window.setTimeout(function(e){return function(){e.showErrors(s)
return null}}(this),50)
var f}
t.prototype.cancel=function(){var e
e=this.$el.find("textarea[data-rich_text]").toArray()
return e.forEach((function(e){return Object(d["d"])(a()(e),"RCEClosed")}))}
t.prototype.getFormData=function(){return f(this.$el.toJSON())}
t.prototype.saveFormData=function(e){var t,n
null==e&&(e=null)
t=this.model
e||(e=this.getFormData())
n=this.saveOpts
return t.save(e,n)}
t.prototype.validate=function(e){var t,n
null==e&&(e={})
e||(e={})
t=e["data"]||this.getFormData()
n=this.validateFormData(t,{})
this.hideErrors()
this.showErrors(n)
return 0===n.length}
t.prototype.validateFormData=function(e){return{}}
t.prototype.validateBeforeSave=function(e){return this.validateFormData(e)}
t.prototype.hideErrors=function(){return this.$el.hideErrors()}
t.prototype.onSaveSuccess=function(e){return this.trigger.apply(this,["success",e].concat(v.call(arguments)))}
t.prototype.onSaveFail=function(e){var t
t=this.parseErrorResponse(e)
t||(t={})
this.showErrors(t)
return this.trigger.apply(this,["fail",t].concat(v.call(arguments)))}
t.prototype.parseErrorResponse=function(e){if(422===e.status)return{authenticity_token:"invalid"}
try{return a.a.parseJSON(e.responseText).errors}catch(e){e
return{}}}
t.prototype.translations=Object(h["b"])({},{required:function(){return m.t("required","Required")},blank:function(){return m.t("blank","Required")},unsaved:function(){return m.t("unsaved_changes","You have unsaved changes.")}})
t.prototype.fieldSelectors=null
t.prototype.findField=function(e){var t,n,i
i=(null!=(n=this.fieldSelectors)?n[e]:void 0)||"[name='"+e+"']"
t=this.$(i)
0===t.length&&(t=this.$("[data-error-type='"+e+"']"))
t.data("rich_text")&&(t=this.findSiblingTinymce(t))
t.length>1&&(t=t.not("[type=hidden]"))
return t}
t.prototype.castJSON=function(e){var t
if(!c.a.isObject(e))return e
if(null!=e.toJSON)return e.toJSON()
t=c.a.clone(e)
c.a.each(t,(n=this,function(e,i){return t[i]=n.castJSON(e)}))
var n
return t}
t.prototype.original=null
t.prototype.watchUnload=function(){this.original=this.castJSON(this.getFormData())
this.unwatchUnload()
return a()(window).on("beforeunload",this.checkUnload)}
t.prototype.unwatchUnload=function(){return a()(window).off("beforeunload",this.checkUnload)}
t.prototype.checkUnload=function(){var e
e=this.castJSON(this.getFormData())
if(!c.a.isEqual(this.original,e))return this.translations.unsaved}
return t}(o.a.View)},cRz0:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var i=n("ik22")
var o=n("ouhR")
var r=n.n(o)
class s{constructor(){this.enabled=i["a"].pandaPubSettings
this.subscribe=(e,t,n)=>{const o=`/${i["a"].pandaPubSettings.application_id}${e}`
this.tokens[o]=t
const s=new r.a.Deferred
s.cancel=function(){}
this.client(e=>{const t=e.subscribe(o,e=>n(e))
t.then(s.resolve,s.reject)
return s.cancel=()=>t.cancel()})
return s}
this.on=(e,t)=>this.client(n=>n.on(e,t))
this.authExtension=()=>({outgoing:(e,t)=>{"/meta/subscribe"===e.channel&&e.subscription in this.tokens&&((e.ext||(e.ext={})).auth={token:this.tokens[e.subscription]})
return t(e)}})
this.subscribe=this.subscribe.bind(this)
this.on=this.on.bind(this)
this.authExtension=this.authExtension.bind(this)
this.faye=null
this.tokens={}}client(e){this.faye&&e(this.faye)
this.faye||r.a.getScript(i["a"].pandaPubSettings.push_url+"/client.js",()=>{this.faye=new window.Faye.Client(i["a"].pandaPubSettings.push_url)
this.faye.addExtension(this.authExtension())
e(this.faye)})}}var a=new s
class l{constructor(e,t,n){this.setToken=(e,t)=>{this.channel=e
this.token=t
a.enabled&&this.running&&this.subscribe()}
this.setOnData=e=>{this.streamingCB=e}
this.start=()=>{this.lastUpdate=Date.now()
this.running=true
this.startTimeout()
a.enabled&&this.subscribe()}
this.stop=()=>{this.stopTimeout()
a.enabled&&this.unsubscribe()
this.running=false}
this.isRunning=()=>this.running
this.startTimeout=()=>this.timeout=setTimeout(this.considerPoll,this.pollInterval)
this.stopTimeout=()=>clearTimeout(this.timeout)
this.considerPoll=()=>{let e=this.pollInterval
a.enabled&&(e=this.rarePollInterval)
return Date.now()-this.lastUpdate>=e?this.pollCB(this.pollDone):this.startTimeout()}
this.pollDone=()=>{this.lastUpdate=Date.now()
this.startTimeout()}
this.subscribe=()=>{if(this.subscription)return
if(!this.channel||!this.token)return
this.subscription=a.subscribe(this.channel,this.token,e=>{this.lastUpdate=Date.now()
this.streamingCB(e)})}
this.unsubscribe=()=>{this.subscription&&this.subscription.cancel()}
this.pollInterval=e
this.rarePollInterval=t
this.pollCB=n
this.running=false
this.lastUpdate=null
r()(window).on("beforeunload",()=>{this.timeout&&this.stopTimeout()})}}},"cq/+":function(e,t,n){var i=n("mc0g")
var o=i()
e.exports=o},cymJ:function(e,t,n){"use strict"
var i=n("7Jtz")
t["a"]=function(e,t){const n=e.editorOptions(t)
const o=Object(i["a"])(e.mirroredAttrs,n)
return{...e,editorOptions:o,tinymce:t}}},d3fI:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1866.00282,351.563294 L1565.12753,50.5750588 C1495.66871,-17.0767059 1384.19576,-16.8508235 1316.20518,51.1397647 L906.228706,461.116235 C837.899294,529.558588 837.899294,640.805647 906.341647,709.248 L937.965176,740.871529 L1017.70165,660.909176 L986.078118,629.398588 C961.795765,605.003294 961.795765,565.360941 986.078118,540.965647 L1396.05459,130.989176 C1420.56282,106.593882 1460.88282,106.819765 1485.72988,130.989176 L1785.58871,430.960941 C1810.32282,456.146824 1810.43576,496.579765 1786.15341,520.975059 L1376.17694,930.951529 C1351.66871,955.233882 1312.02635,955.233882 1287.63106,930.951529 L1176.83576,820.043294 L1336.30871,660.683294 L1256.45929,580.833882 L820.845176,1016.33506 L711.066353,906.556235 C678.200471,872.899765 634.266353,854.264471 587.395765,853.925647 C543.800471,855.619765 495.122824,872.222118 461.240471,906.104471 L51.3769412,1316.08094 C-17.0654118,1384.52329 -17.0654118,1495.77035 51.3769412,1564.21271 L352.929882,1865.76565 C387.038118,1899.87388 431.988706,1917.04094 476.939294,1917.04094 C521.889882,1917.04094 566.840471,1899.87388 601.061647,1865.76565 L1011.03812,1455.78918 C1044.80753,1421.90682 1063.44282,1377.18212 1063.104,1329.74682 C1062.87812,1282.76329 1044.12988,1238.82918 1011.03812,1206.528 L980.544,1176.03388 L900.694588,1255.88329 L931.640471,1286.82918 C943.499294,1298.46212 950.049882,1313.93506 950.162824,1330.42447 C950.275765,1347.36565 943.499294,1363.51624 931.188706,1375.93976 L521.212235,1785.91624 C497.720471,1809.408 456.271059,1809.408 432.779294,1785.91624 L131.226353,1484.36329 C119.480471,1472.61741 113.042824,1456.91859 113.042824,1440.09035 C113.042824,1423.37506 119.480471,1407.67624 131.226353,1395.93035 L541.202824,985.953882 C553.400471,973.643294 569.438118,966.866824 586.266353,966.866824 L586.718118,966.866824 C603.207529,966.979765 618.680471,973.530353 630.652235,985.953882 L740.995765,1096.18447 L578.812235,1258.48094 L658.661647,1338.33035 L1096.98635,899.892706 L1207.78165,1010.80094 C1242.11576,1045.02212 1286.95341,1062.07624 1331.904,1062.07624 C1376.85459,1062.07624 1421.80518,1045.02212 1456.02635,1010.80094 L1866.00282,600.824471 C1933.88047,532.833882 1933.99341,421.360941 1866.00282,351.563294",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconLink",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconLinkLine"
return n}(l["Component"])
h.glyphName="link"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},d61b:function(e,t,n){"use strict"
n.d(t,"a",(function(){return O}))
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
n("17x9")
var s=n("HGxv")
var a=n("BrAc")
var l=n("hlSo")
var c=n("QYKH")
function u(e,t){return Promise.all([e,t]).then(([e,t])=>e.concat(t))}function d(e){return Promise.resolve(e.data.map(e=>new c["a"](e)))}function h(e){return a["a"].get(e).then(e=>{var t,n
const i=null===(t=Object(l["a"])(null===(n=e.headers)||void 0===n?void 0:n.link))||void 0===t?void 0:t.next
return i?u(d(e),h(i)):d(e)})}function p(e){return h(`/api/v1/folders/${e}/files?only[]=names`)}function f(e){return a["a"].get(`/api/v1/courses/${e}/folders/root`).then(({data:e})=>e)}var m=n("uloQ")
var g=n("UT5+")
var _=n("agq5")
var b=n("whu9")
var v=n("ZbPE")
var y=n("vavB")
var x=n("e2r+")
var k=n("MAjw")
var w=n("7lHU")
const C=Object(s["useScope"])("modules")
class O extends r.a.Component{constructor(e){super(e)
this.showAlert=()=>{Object(m["b"])({type:"error",message:C.t("Unable to set up drag and drop for modules")})}
this.handleDragEnter=()=>{this.setState({hightlightUpload:true})}
this.handleDragLeave=()=>{this.setState({hightlightUpload:false})}
this.handleDrop=e=>{const{moduleId:t,contextModules:n}=this.props
const{folder:i}=this.state
this.setInteractionOnAll(false)
y["a"].prototype.onUploadPosted=e=>{this.addFile(e)
if(n){const i=new Event("addFileToModule")
i.moduleId=t
i.attachment=e
n.dispatchEvent(i)}}
k["a"].setUploadOptions({alwaysRename:false,alwaysUploadZips:true})
this.setState({hightlightUpload:false,isUploading:true},()=>{k["a"].setFolder(i)
k["a"].setOptionsFromFiles(e,true)})}
this.handleEmptyUpload=()=>{this.setState({isUploading:false})
this.setInteractionOnAll(true)}
this.renameFileMessage=e=>C.t('A file named "%{name}" already exists. Do you want to replace the existing file?',{name:e})
this.lockFileMessage=e=>C.t('A locked file named "%{name}" already exists. Please enter a new name.',{name:e})
this.handleUploadChange=e=>{0===e&&this.setInteractionOnAll(true)
this.setState({isUploading:e>0})}
this.state={hightlightUpload:false,isUploading:false,folder:null,contextType:null,contextId:null,interaction:true}}componentDidMount(){Object.keys(O.folderState).length>0&&this.setFolderState(O.folderState)
0===O.activeDrops.size&&this.fetchRootFolder()
O.activeDrops.add(this)}fetchRootFolder(){return f(this.props.courseId).then(e=>p(e.id).then(t=>{e.files=t
O.folderState={contextId:e.context_id,contextType:e.context_type,folder:e}
O.activeDrops.forEach(e=>{e.setFolderState(O.folderState)})}).catch(this.showAlert)).catch(this.showAlert)}addFile(e){O.folderState.folder.files=[...O.folderState.folder.files,new c["a"](e)]
O.activeDrops.forEach(e=>{e.setFolderState(O.folderState)})}componentWillUnmount(){O.activeDrops.delete(this)}setFolderState(e){this.setState(e)}renderHero(e){const{hightlightUpload:t}=this.state
return Object(i["a"])(b["a"],{size:e,color:t?"brand":"primary"})}renderBillboard(){const{folder:e}=this.state
return Object(i["a"])(_["a"],{heading:e?C.t("Drop files here to add to module"):C.t("Loading..."),headingLevel:"h4",hero:e=>this.renderHero(e),message:Object(i["a"])(v["a"],{size:"small",color:"brand"},void 0,e?C.t("or choose files"):"")})}setInteractionOnAll(e){O.activeDrops.forEach(t=>t.setInteraction(e))}setInteraction(e){this.setState({interaction:e})}renderFileDrop(){const{interaction:e,folder:t}=this.state
return Object(i["a"])(g["a"],{shouldAllowMultiple:true,renderLabel:this.renderBillboard(),onDragEnter:this.handleDragEnter,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop,interaction:e&&t?"enabled":"disabled"})}renderUploading(){const{folder:e,contextId:t,contextType:n}=this.state
return r.a.createElement(r.a.Fragment,null,Object(i["a"])(w["a"],{visible:false,currentFolder:e,contextId:t,contextType:n,allowSkip:true,alwaysUploadZips:true,onEmptyOrClose:this.handleEmptyUpload,onRenameFileMessage:this.renameFileMessage,onLockFileMessage:this.lockFileMessage}),Object(i["a"])(x["a"],{onUploadChange:this.handleUploadChange}))}render(){const{isUploading:e}=this.state
return e?this.renderUploading():this.renderFileDrop()}}O.defaultProps={contextModules:null}
O.folderState={}
O.activeDrops=new Set},dDTa:function(e,t,n){"use strict"
const i=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=i},dI71:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("s4An")
function o(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
Object(i["a"])(e,t)}},dKDz:function(e,t,n){"use strict"
var i=/["'&<>]/
e.exports=o
function o(e){var t=""+e
var n=i.exec(t)
if(!n)return t
var o
var r=""
var s=0
var a=0
for(s=n.index;s<t.length;s++){switch(t.charCodeAt(s)){case 34:o="&quot;"
break
case 38:o="&amp;"
break
case 39:o="&#39;"
break
case 60:o="&lt;"
break
case 62:o="&gt;"
break
default:continue}a!==s&&(r+=t.substring(a,s))
a=s+1
r+=o}return a!==s?r+t.substring(a,s):r}},do4u:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
var i=n("Y/W1")
var o=n.n(i)
var r=n("mX+G")
var s=n.n(r)
const a=["reloadMessage","warning","interval"]
class l extends s.a.View{static initClass(){this.prototype.setViewProperties=false
this.prototype.defaults={modelAttributes:["title","url","body"],warning:false}
this.prototype.events={"click a.reload":"reload"}}template(){return`<div class='alert alert-${$.raw(this.options.warning?"warning":"info")} reload-changed-page'>${$.raw(this.reloadMessage)}</div>`}initialize(e){super.initialize(...arguments)
return o.a.extend(this,o.a.pick(e||{},a))}pollForChanges(){if(!this.model)return
const e=this
const{model:t}=this
const n=this.latestRevision=t.latestRevision()
if(n&&!t.isNew()){n.on("change:revision_id",()=>n.fetch({data:{summary:false}}).done(()=>{e.render()
e.trigger("changed")
return e.stopPolling()}))
return n.pollForChanges(this.interval)}}stopPolling(){return null!=this.latestRevision?this.latestRevision.stopPolling():void 0}reload(e){null!=e&&e.preventDefault()
this.model.set(o.a.pick(this.latestRevision.attributes,this.options.modelAttributes))
this.trigger("reload")
return this.latestRevision.startPolling()}}l.initClass()},dt0z:function(e,t,n){var i=n("zoYe")
function o(e){return null==e?"":i(e)}e.exports=o},"e2r+":function(e,t,n){"use strict"
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
n("17x9")
var s=n("TSYQ")
var a=n.n(s)
var l=n("HGxv")
var c=n("9Qmj")
var u=n("scx4")
var d=n("hlSq")
var h=n("uloQ")
const p=Object(l["useScope"])("files_upload_progress")
class f extends r.a.Component{constructor(e){super(e)
this.state={progress:0,messages:{}}
this.resetProgress=this.resetProgress.bind(this)}componentDidMount(){const e=this.props.uploader.roundProgress()
if(this.state.progress!==e)return this.sendProgressUpdate(e)}UNSAFE_componentWillReceiveProps(e){const t=e.uploader.roundProgress()
if(this.state.progress!==t)return this.sendProgressUpdate(t)}componentWillUnmount(){return this.sendProgressUpdate(this.state.progress)}sendProgressUpdate(e){const{messages:t}=this.state
if(!(e in t)){const n=this.props.uploader.getFileName()
const i=e<100?p.t("%{fileName} - %{progress} percent uploaded",{fileName:n,progress:e}):p.t("%{fileName} uploaded successfully!",{fileName:n})
Object(h["b"])({message:i,err:null,type:"info",srOnly:true})
t[e]=true
this.setState({messages:t,progress:e})}}resetProgress(){this.setState({messages:{},progress:0})}renderProgressBar(){if(this.props.uploader.error){const e=this.props.uploader.error.message?p.t("Error: %{message}",{message:this.props.uploader.error.message}):p.t("Error uploading file.")
Object(h["b"])({message:e,type:"error",srOnly:true})
return Object(i["a"])("span",{},void 0,e,Object(i["a"])("button",{type:"button",className:"btn-link",onClick:()=>{this.resetProgress()
d["a"].attemptThisUpload(this.props.uploader)}},void 0,p.t("Retry")))}return Object(i["a"])(c["a"],{progress:this.props.uploader.roundProgress()})}render(){const e=a()({"ef-item-row":true,"text-error":this.props.uploader.error})
return Object(i["a"])("div",{className:e},void 0,Object(i["a"])("div",{className:"col-xs-6"},void 0,Object(i["a"])("div",{className:"media ellipsis"},void 0,Object(i["a"])("span",{className:"pull-left"},void 0,Object(i["a"])("i",{className:"media-object mimeClass-"+Object(u["a"])(this.props.uploader.getFileType())})),Object(i["a"])("span",{className:"media-body"},void 0,this.props.uploader.getFileName()))),Object(i["a"])("div",{className:"col-xs-5"},void 0,this.renderProgressBar()),this.props.uploader.canAbort()&&Object(i["a"])("button",{type:"button",onClick:this.props.uploader.cancel,"aria-label":p.t("Cancel"),className:"btn-link upload-progress-view__button"},void 0,"x"))}}var m=f
class g extends r.a.Component{constructor(...e){super(...e)
this.state={currentUploads:[]}
this.handleUploadQueueChange=e=>{this.setState({currentUploads:e.getAllUploaders()},()=>{this.props.onUploadChange(this.state.currentUploads.length)})}
this.renderUploadProgress=function(){if(this.state.currentUploads.length){const e=this.state.currentUploads.map(e=>Object(i["a"])(m,{uploader:e},e.getFileName()))
return Object(i["a"])("div",{className:"current_uploads__uploaders"},void 0,e)}return null}}componentDidMount(){d["a"].addChangeListener(this.handleUploadQueueChange)}componentWillUnmount(){d["a"].removeChangeListener(this.handleUploadQueueChange)}render(){const e=a()({current_uploads:this.state.currentUploads.length})
return Object(i["a"])("div",{className:e},void 0,this.renderUploadProgress())}}g.defaultProps={onUploadChange:()=>{}}
t["a"]=g},e4Nc:function(e,t,n){var i=n("fGT3"),o=n("k+1r"),r=n("JHgL"),s=n("pSRY"),a=n("H8j4")
function l(e){var t=-1,n=null==e?0:e.length
this.clear()
while(++t<n){var i=e[t]
this.set(i[0],i[1])}}l.prototype.clear=i
l.prototype["delete"]=o
l.prototype.get=r
l.prototype.has=s
l.prototype.set=a
e.exports=l},eUgh:function(e,t){function n(e,t){var n=-1,i=null==e?0:e.length,o=Array(i)
while(++n<i)o[n]=t(e[n],n,e)
return o}e.exports=n},ebwN:function(e,t,n){var i=n("Cwc5"),o=n("Kz5y")
var r=i(o,"Map")
e.exports=r},ekgI:function(e,t,n){var i=n("YESw")
var o=Object.prototype
var r=o.hasOwnProperty
function s(e){var t=this.__data__
return i?void 0!==t[e]:r.call(t,e)}e.exports=s},"ep+9":function(e,t,n){"use strict"
n.d(t,"b",(function(){return O}))
n.d(t,"a",(function(){return S}))
n.d(t,"c",(function(){return E}))
var i=n("q1tI")
var o=n.n(i)
var r=n("i8i4")
var s=n.n(r)
var a=n("RtDj")
var l=n("HGxv")
var c=n("BrAc")
n("17x9")
var u=n("Ci/e")
var d=n("msMH")
var h=n("n12J")
var p=n("Mmr1")
var f=n("uloQ")
n("/J96")
var m=n("E/5I")
var g=n("aaDL")
var _=n("Xx/m")
var b=n("ZbPE")
var v
const y=Object(l["useScope"])("move_select")
class x extends o.a.Component{constructor(e){super(e)
this.selectGroup=e=>{this.setState({selectedGroup:this.props.moveOptions.groups.find(t=>t.id===e.target.value)||null})}
this.selectPosition=e=>{this.setState({selectedPosition:m["a"][e.target.value]||null})}
this.selectSibling=e=>{this.setState({selectedSibling:""===e.target.value?0:Number(e.target.value)})}
this.submitSelection=()=>{const{items:e,moveOptions:t}=this.props
const{selectedGroup:n,selectedPosition:i,selectedSibling:o}=this.state
let r=e.map(({id:e})=>e)
if(i){const s=n?n.items:t.siblings
r=i.apply({items:e.map(({id:e})=>e),order:s.map(({id:e})=>e),relativeTo:o})}this.props.onSelect({groupId:t.groups?n.id:null,itemIds:e.map(({id:e})=>e),order:r})}
this.state={selectedGroup:this.props.moveOptions.groups&&this.getFilteredGroups()[0],selectedPosition:m["a"].first,selectedSibling:0}}hasSelectedPosition(){const{selectedSibling:e,selectedPosition:t}=this.state
const n=t&&"absolute"===t.type
return!!t&&(n||null!==e)}getFilteredGroups(){const{moveOptions:e,items:t}=this.props
let{groups:n}=e
e.excludeCurrent&&t[0].groupId&&(n=n.filter(e=>e.id!==t[0].groupId))
return n}isDoneSelecting(){const{selectedGroup:e}=this.state
return this.props.moveOptions.groups?e&&e.items&&e.items.length?this.hasSelectedPosition():!!e:this.hasSelectedPosition()}renderSelectGroup(){const{selectedGroup:e,selectedPosition:t}=this.state
const{items:n}=this.props
const i=!!(e&&e.items&&e.items.length)
const o=this.getFilteredGroups(this.props)
return Object(a["a"])("div",{},void 0,Object(a["a"])(g["a"],{label:y.t("Group Select"),className:"move-select__group",onChange:this.selectGroup,options:o.map(e=>Object(a["a"])("option",{value:e.id},e.id,e.title)),selectOneDefault:false}),i?Object(a["a"])(g["b"],{items:n,siblings:e.items,selectedPosition:t,selectPosition:this.selectPosition,selectSibling:this.selectSibling}):null)}render(){const{groups:e,siblings:t}=this.props.moveOptions
const{items:n}=this.props
const{selectedPosition:i}=this.state
return Object(a["a"])("div",{className:"move-select"},void 0,this.props.moveOptions.groupsLabel&&Object(a["a"])(b["a"],{weight:"bold"},void 0,this.props.moveOptions.groupsLabel),e?this.renderSelectGroup():Object(a["a"])(g["b"],{items:n,siblings:t,selectedPosition:i,selectPosition:this.selectPosition,selectSibling:this.selectSibling}),Object(a["a"])(h["a"],{textAlign:"end",display:"block"},void 0,v||(v=Object(a["a"])("hr",{"aria-hidden":"true"})),Object(a["a"])(_["a"],{id:"move-item-tray-cancel-button",onClick:this.props.onClose,margin:"0 x-small 0 0"},void 0,y.t("Cancel")),Object(a["a"])(_["a"],{id:"move-item-tray-submit-button",disabled:!this.isDoneSelecting(),type:"submit",color:"primary",onClick:this.submitSelection,margin:"0 x-small 0 0"},void 0,y.t("Move"))))}}const k=Object(l["useScope"])("move_item_tray")
class w extends o.a.Component{constructor(...e){super(...e)
this.state={open:true}
this.onExited=()=>{setTimeout(()=>{const e=this.props.focusOnExit(this.props.items[0])
e&&e.focus()})
this.props.onExited&&this.props.onExited()}
this.onMoveSelect=({order:e,itemId:t,groupId:n,itemIds:i})=>{const o=this.props.formatSaveUrl({itemId:t,groupId:n})
const r=o?c["a"].post(o,this.props.formatSaveData(e)):Promise.resolve({data:e})
r.then(e=>{this.props.onMoveSuccess({data:e.data,groupId:n,itemId:t,itemIds:i})
this.close()}).catch(Object(f["c"])(k.t("Move Item Failed")))}
this.open=()=>{this.setState({open:true})}
this.close=()=>{this.setState({open:false})}}render(){return Object(a["a"])(u["a"],{label:this.props.title,open:this.state.open,onDismiss:this.close,onExited:this.onExited,placement:"end",shouldContainFocus:true},void 0,Object(a["a"])(p["a"],{placement:"start",onClick:this.close,screenReaderLabel:k.t("close move tray")}),Object(a["a"])(d["a"],{margin:"small xx-large",level:"h4",as:"h2"},void 0,this.props.title),Object(a["a"])(h["a"],{display:"block",padding:"medium medium large"},void 0,Object(a["a"])(x,{items:this.props.items,moveOptions:this.props.moveOptions,onSelect:this.onMoveSelect,onClose:this.close})))}}w.defaultProps={get title(){return k.t("Move To")},focusOnExit:()=>null,formatSaveUrl:()=>null,formatSaveData:e=>({order:e.join(",")}),onExited:()=>{},onMoveSuccess:()=>{}}
const C="move_item_tray"
function O(e,t=document.body){let n=document.getElementById(C)
if(!n){n=document.createElement("div")
n.setAttribute("id",C)
t.appendChild(n)}s.a.render(o.a.createElement(w,Object.assign({},e,{ref:e=>e&&e.open()})),n)}const S={collectionToItems:(e,t=(e=>e.models))=>t(e).map(e=>({id:e.attributes.id,title:e.attributes.name||e.attributes.title})),collectionToGroups(e,t,n=(()=>true)){return e.models.filter(n).map(e=>({id:e.attributes.id,title:e.attributes.name||e.attributes.title,items:this.collectionToItems(t(e))}))},reorderInCollection(e,t,n=t.collection){e.forEach((e,t)=>{const i=n.get(e)
i&&i.set("position",t+1)})
n.sort()
n.reset(n.models)},reorderAcrossCollections(e,t,n,i){let o=n.collection.view.parentCollection.get(t).get(i.model)
if(o&&o!==n.collection){n.collection.remove(n)
o.add(n)
i.parent&&n.set(i.parent,t)}else o=n.collection
this.reorderInCollection(e,n,o)},reorderAllItemsIntoNewCollection(e,t,n,i){let o=n.collection.get(t).get(i.model)
if(o&&o!==n.collection){const e=n.get(i.model).models.slice()
e.forEach(e=>{n.get(i.model).remove(e)
o.add(e)})
i.parent&&n.set(i.parent,t)}else o=n.collection
this.reorderInCollection(e,n,o)}}
function E(e,t,n=(e=>"#"+e)){const i=e.reduce((e,i)=>{const o=t.querySelector(n(i))
if(null==o)return e
e[i]=o
t.removeChild(o)
return e},{})
e.forEach(e=>{null!=i[e]&&t.appendChild(i[e])})}},fGT3:function(e,t,n){var i=n("4kuk"),o=n("Xi7e"),r=n("ebwN")
function s(){this.size=0
this.__data__={hash:new i,map:new(r||o),string:new i}}e.exports=s},fY8A:function(e,t,n){"use strict"
n.r(t)
n.d(t,"default",(function(){return b}))
var i=n("ouhR")
var o=n.n(i)
var r=n("3O+N")
var s=n.n(r)
var a=n("HGxv")
n("BGrI")
var l=s.a.default
var c=l.template,u=l.templates=l.templates||{}
var d="/work/canvas-deploy/generated/ui/shared/module-sequence-footer/jst/ModuleSequenceFooter"
u[d]=c((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var r,s,a,l="",c=n.helperMissing,u=this.escapeExpression,d="function",h=this
function p(e,t){var i,o,r,s=""
s+='\n      <span class="module-sequence-footer-button--previous" data-tooltip="right" data-html-tooltip-title="'+u((i=(i=e&&e.previous,null==i||false===i?i:i.tooltip),typeof i===d?i.apply(e):i))+'">\n          <a\n            href="'+u((i=(i=e&&e.previous,null==i||false===i?i:i.url),typeof i===d?i.apply(e):i))+'"\n            role="button"\n            class="Button"\n            aria-describedby="msf'
if(o=n.instanceNumber)i=o.call(e,{hash:{},data:t})
else{o=e&&e.instanceNumber
i=typeof o===d?o.call(e,{hash:{},data:t}):o}s+=u(i)+'-previous-desc"\n            aria-label="'+u((o=n.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},o?o.call(e,"previous_module_item_a9e57348","Previous Module Item",r):c.call(e,"t","previous_module_item_a9e57348","Previous Module Item",r)))
i=n["if"].call(e,(i=e&&e.previous,null==i||false===i?i:i.externalItem),{hash:{},inverse:h.noop,fn:h.program(2,f,t),data:t});(i||0===i)&&(s+=i)
s+='"\n          >\n            <i class="icon-mini-arrow-left"></i>'+u((o=n.t||e&&e.t,r={hash:{scope:"jquery.module_sequence_footer"},data:t},o?o.call(e,"previous","Previous",r):c.call(e,"t","previous","Previous",r)))+'\n            <span id="msf'
if(o=n.instanceNumber)i=o.call(e,{hash:{},data:t})
else{o=e&&e.instanceNumber
i=typeof o===d?o.call(e,{hash:{},data:t}):o}s+=u(i)+'-previous-desc" class="hidden" hidden>'+u((i=(i=e&&e.previous,null==i||false===i?i:i.tooltipText),typeof i===d?i.apply(e):i))+"</span>\n          </a>\n      </span>\n    "
return s}function f(e,t){var i,o,r=""
r+=" - "+u((i=n.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},i?i.call(e,"opens_in_new_window_b4b99243","opens in new window",o):c.call(e,"t","opens_in_new_window_b4b99243","opens in new window",o)))
return r}function m(e,t){var i,o,r,s=""
s+='\n      <span class="module-sequence-footer-button--next" data-tooltip="left" data-html-tooltip-title="'+u((i=(i=e&&e.next,null==i||false===i?i:i.tooltip),typeof i===d?i.apply(e):i))+'">\n        <a\n          href="'+u((i=(i=e&&e.next,null==i||false===i?i:i.url),typeof i===d?i.apply(e):i))+'"\n          role="button"\n          class="Button"\n          aria-describedby="msf'
if(o=n.instanceNumber)i=o.call(e,{hash:{},data:t})
else{o=e&&e.instanceNumber
i=typeof o===d?o.call(e,{hash:{},data:t}):o}s+=u(i)+'-next-desc"\n          aria-label="'+u((o=n.t||e&&e.t,r={hash:{i18n_inferred_key:true},data:t},o?o.call(e,"next_module_item_19e835f3","Next Module Item",r):c.call(e,"t","next_module_item_19e835f3","Next Module Item",r)))
i=n["if"].call(e,(i=e&&e.next,null==i||false===i?i:i.externalItem),{hash:{},inverse:h.noop,fn:h.program(2,f,t),data:t});(i||0===i)&&(s+=i)
s+='"\n            '
i=n["if"].call(e,(i=e&&e.next,null==i||false===i?i:i.modules_tab_disabled),{hash:{},inverse:h.noop,fn:h.program(5,g,t),data:t});(i||0===i)&&(s+=i)
s+="\n          "+u((o=n.disabledIf||e&&e.disabledIf,r={hash:{},data:t},o?o.call(e,(i=e&&e.next,null==i||false===i?i:i.modules_tab_disabled),r):c.call(e,"disabledIf",(i=e&&e.next,null==i||false===i?i:i.modules_tab_disabled),r)))+"\n        >\n          "+u((o=n.t||e&&e.t,r={hash:{scope:"jquery.module_sequence_footer"},data:t},o?o.call(e,"next","Next",r):c.call(e,"t","next","Next",r)))+'<i class="icon-mini-arrow-right"></i>\n          <span id="msf'
if(o=n.instanceNumber)i=o.call(e,{hash:{},data:t})
else{o=e&&e.instanceNumber
i=typeof o===d?o.call(e,{hash:{},data:t}):o}s+=u(i)+'-next-desc" class="hidden" hidden>'+u((i=(i=e&&e.next,null==i||false===i?i:i.tooltipText),typeof i===d?i.apply(e):i))+"</span>\n        </a>\n      </span>\n    "
return s}function g(e,t){return' aria-disabled="true" '}l+="<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer' role=\"navigation\" aria-label=\""+u((s=n.t||t&&t.t,a={hash:{i18n_inferred_key:true},data:o},s?s.call(t,"module_navigation_97043417","Module Navigation",a):c.call(t,"t","module_navigation_97043417","Module Navigation",a)))+'">\n  <div class="module-sequence-footer-content">\n    '
r=n["if"].call(t,(r=t&&t.previous,null==r||false===r?r:r.show),{hash:{},inverse:h.noop,fn:h.program(1,p,o),data:o});(r||0===r)&&(l+=r)
l+="\n\n    "
r=n["if"].call(t,(r=t&&t.next,null==r||false===r?r:r.show),{hash:{},inverse:h.noop,fn:h.program(4,m,o),data:o});(r||0===r)&&(l+=r)
l+="\n  </div>\n</div>\n"
return l}))
var h=u[d]
var p=n("Y/W1")
var f=n.n(p)
var m=n("gI0r")
n("dhbk")
const g=Object(a["useScope"])("sequence_footer")
let _=0
o.a.fn.moduleSequenceFooter=function(e={}){if(!e.assetType||!e.assetID)throw"Option must be set with assetType and assetID"
this.msfAnimation=e=>this.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!e)
if(!this.data("msfInstance")){this.msfInstance=new o.a.fn.moduleSequenceFooter.MSFClass(e)
this.data("msfInstance",this.msfInstance)
this.msfInstance.fetch().done(()=>{if(this.msfInstance.hide){this.hide()
return}this.html(h({instanceNumber:this.msfInstance.instanceNumber,previous:this.msfInstance.previous,next:this.msfInstance.next}))
e&&void 0!==e.animation&&this.msfAnimation(e.animation)
this.show()
o()(window).triggerHandler("resize")
e.onFetchSuccess&&e.onFetchSuccess()})}return this}
class b{constructor(e={}){this.iconClasses={ModuleItem:"icon-module",File:"icon-paperclip",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link",ExternalUrl:"icon-link","Lti::MessageHandler":"icon-link"}
this.success=e=>{this.modules=e.modules
if(!(e&&e.items&&1===e.items.length)){this.hide=true
return}this.item=e.items[0];(this.previous.show=this.item.prev)&&this.buildPreviousData()
if(this.item.next||this.awaitingPathProgress()){this.next.show=true
const e=this.awaitingPathProgress()
e?this.buildNextPathData():this.buildNextData()}}
this.instanceNumber=_++
this.courseID=e.courseID||"undefined"!==typeof ENV&&ENV.course_id
this.assetID=e.assetID
this.assetType=e.assetType
this.location=e.location||document.location
this.previous={}
this.next={}
this.url=`/api/v1/courses/${this.courseID}/module_item_sequence`}getQueryParams(e){let t
e=e.split("+").join(" ")
const n={}
const i=/[?&]?([^=]+)=([^&]*)/g
while(t=i.exec(e))n[decodeURIComponent(t[1])]=decodeURIComponent(t[2])
return n}fetch(){const e=this.getQueryParams(this.location.search)
return e.module_item_id?o.a.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:e.module_item_id,frame_external_urls:true},this.success,null,{}):o.a.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:true},this.success,null,{})}buildPreviousData(){this.previous.url=this.item.prev.html_url
this.previous.externalItem="ExternalUrl"===this.item.prev.type&&this.item.prev.new_tab
if(this.item.current.module_id===this.item.prev.module_id){this.previous.tooltip=`<i class='${Object(m["a"])(this.iconClasses[this.item.prev.type])}'></i> ${Object(m["a"])(this.item.prev.title)}`
this.previous.tooltipText=g.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})}else{const e=f.a.find(this.modules,e=>e.id===this.item.prev.module_id)
this.previous.tooltip=`<strong style='float:left'>${Object(m["a"])(g.t("prev_module","Previous Module:"))}</strong> <br> ${Object(m["a"])(e.name)}`
this.previous.tooltipText=g.t("prev_module_desc","Previous Module: *module*",{wrapper:e.name})}}buildNextPathData(){const e=this.item.mastery_path
if(e.awaiting_choice){this.next.url=e.choose_url
this.next.tooltipText=g.t("Choose the next mastery path")}else{const t=g.t("Next mastery path is currently locked")
const n=g.t("Next mastery path is still processing, please periodically refresh the page")
const i=e.locked?t:n
this.next.modules_tab_disabled=e.modules_tab_disabled
this.next.url=e.modules_url
this.next.tooltipText=i}this.next.tooltip=`<i class='${Object(m["a"])(this.iconClasses.ModuleItem)}'/> ${this.next.tooltipText}`}buildNextData(){this.next.url=this.item.next.html_url
this.next.externalItem="ExternalUrl"===this.item.next.type&&this.item.next.new_tab
if(this.item.current.module_id===this.item.next.module_id){this.next.tooltip=`<i class='${Object(m["a"])(this.iconClasses[this.item.next.type])}'></i> ${Object(m["a"])(this.item.next.title)}`
this.next.tooltipText=g.t("Next: *item*",{wrapper:this.item.next.title})}else{const e=f.a.find(this.modules,e=>e.id===this.item.next.module_id)
this.next.tooltip=`<strong style='float:left'>${Object(m["a"])(g.t("next_module","Next Module:"))}</strong> <br> ${Object(m["a"])(e.name)}`
this.next.tooltipText=g.t("next_module_desc","Next Module: *module*",{wrapper:e.name})}}awaitingPathProgress(){const e=this.item.mastery_path
if(e&&e.is_student)return e.awaiting_choice||e.locked||e.still_processing}}o.a.fn.moduleSequenceFooter.MSFClass=b},fbhf:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.resetState=s
t.log=a
var i={}
var o={}
function r(e,t){e.classList.remove(t)}function s(){var e=document.getElementsByTagName("html")[0]
for(var t in i)r(e,i[t])
var n=document.body
for(var s in o)r(n,o[s])
i={}
o={}}function a(){return}var l=function(e,t){e[t]||(e[t]=0)
e[t]+=1
return t}
var c=function(e,t){e[t]&&(e[t]-=1)
return t}
var u=function(e,t,n){n.forEach((function(n){l(t,n)
e.add(n)}))}
var d=function(e,t,n){n.forEach((function(n){c(t,n)
0===t[n]&&e.remove(n)}))}
t.add=function(e,t){return u(e.classList,"html"==e.nodeName.toLowerCase()?i:o,t.split(" "))}
t.remove=function(e,t){return d(e.classList,"html"==e.nodeName.toLowerCase()?i:o,t.split(" "))}},fhP7:function(e,t,n){"use strict"
n.d(t,"k",(function(){return i}))
n.d(t,"e",(function(){return o}))
n.d(t,"f",(function(){return r}))
n.d(t,"g",(function(){return s}))
n.d(t,"h",(function(){return a}))
n.d(t,"l",(function(){return l}))
n.d(t,"i",(function(){return c}))
n.d(t,"b",(function(){return u}))
n.d(t,"j",(function(){return d}))
n.d(t,"c",(function(){return h}))
n.d(t,"d",(function(){return p}))
n.d(t,"a",(function(){return f}))
const i="@"
const o="mentions-marker"
const r="span#"+o
const s="mention-menu"
const a="span#mention-menu"
const l=ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN
const c="mentions.NavigationEvent"
const u="mentions.InputChangeEvent"
const d="mentions.SelectionEvent"
const h={backspace:8,enter:13,up:38,down:40,escape:27,tab:9}
const p={[h.up]:"UpArrow",[h.down]:"DownArrow",[h.enter]:"Enter"}
const f={ariaControlTemplate:e=>e+"-mention-popup",activeDescendant:(e,t)=>`${e}-mention-popup-item-${t}`}},gBVS:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("BrAc")
function o(e){return new Promise(t=>{setTimeout(t,e)})}function r(e,t={}){const n=t.ajaxLib||i["a"]
const{url:s,workflow_state:a,results:l,message:c}=e
if("queued"===a||"running"===a){let{interval:e}=t
e||(e=1e3)
e<100&&(e=100)
return o(e).then(()=>n.get(s)).then(e=>{const n=e.data
return r(n,t)})}return"completed"===a?Promise.resolve(l):Promise.reject(c)}},"gW/U":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M960,1807.05882 C492.875294,1807.05882 112.941176,1427.12471 112.941176,960 C112.941176,492.875294 492.875294,112.941176 960,112.941176 C1427.12471,112.941176 1807.05882,492.875294 1807.05882,960 C1807.05882,1427.12471 1427.12471,1807.05882 960,1807.05882 M960,0 C430.644706,0 0,430.644706 0,960 C0,1489.35529 430.644706,1920 960,1920 C1489.35529,1920 1920,1489.35529 1920,960 C1920,430.644706 1489.35529,0 960,0 M960.056471,1355.18118 L1016.52706,1355.29412 L960.056471,1355.29412 L960.056471,1355.18118 L960.056471,1355.18118 Z M752.64,409.648941 C836.329412,344.933647 944.301176,323.248941 1049.33647,350.354824 C1164.19765,380.058353 1257.6,473.460706 1287.30353,588.321882 C1310.68235,678.787765 1298.03294,771.625412 1251.84,849.780706 C1206.32471,926.806588 1130.65412,983.728941 1044.25412,1005.86541 C1030.47529,1009.36659 1016.47059,1020.66071 1016.47059,1037.71482 L1016.47059,1037.71482 L1016.47059,1129.42306 L903.529412,1129.42306 L903.529412,1037.71482 C903.529412,971.644235 949.835294,913.592471 1016.24471,896.425412 C1073.84471,881.743059 1124.21647,843.794824 1154.59765,792.406588 C1185.43059,740.114824 1193.78824,677.658353 1177.97647,616.557176 C1158.32471,540.886588 1096.77176,479.333647 1021.10118,459.681882 C950.174118,441.498353 877.552941,455.728941 821.76,498.985412 C766.08,542.128941 734.117647,607.296 734.117647,677.658353 L734.117647,677.658353 L621.176471,677.658353 C621.176471,572.058353 669.063529,474.364235 752.64,409.648941 Z M960.056471,1242.35294 C897.712941,1242.35294 847.115294,1293.06353 847.115294,1355.29412 C847.115294,1417.52471 897.712941,1468.23529 960.056471,1468.23529 C1022.28706,1468.23529 1072.99765,1417.52471 1072.99765,1355.29412 C1072.99765,1293.06353 1022.28706,1242.35294 960.056471,1242.35294 L960.056471,1242.35294 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconQuestion",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconQuestionLine"
return n}(l["Component"])
h.glyphName="question"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},hgQt:function(e,t,n){var i=n("Juji"),o=n("4sDh")
function r(e,t){return null!=e&&o(e,t,i)}e.exports=r},hlSo:function(e,t,n){"use strict"
t["a"]=function(e){if(!e)return[]
const t={}
e.split(",").map(e=>e.split("; ")).forEach(e=>{const n=e[0].substring(1,e[0].length-1)
let i=e[1].split("=")
i=i[1]
i=i.substring(1,i.length-1)
t[i]=n})
return t}},hlSq:function(e,t,n){"use strict"
var i=n("Y/W1")
var o=n.n(i)
var r=n("C8i9")
var s=n("vavB")
class a extends s["a"]{constructor(e,t){super(e,t)
this.addFileToCollection=e=>{var t,n
if(null!==(t=this.folder)&&void 0!==t&&null!==(n=t.files)&&void 0!==n&&n.add){const t=new r["a"](e,"no/url/needed/")
this.folder.files.add(t)
if("overwrite"===this.options.dup){const e=this.options.name||this.file.name
const t=this.folder.files.findWhere({display_name:e})
t&&this.folder.files.remove(t)}}}
this.onUploadPosted=this.onUploadPosted.bind(this)}onUploadPosted(e){this.inFlight=false
this.options.replacingFileId&&(e.replacingFileId=this.options.replacingFileId)
this.addFileToCollection(e)
super.onUploadPosted(e)}}var l=n("BrAc")
class c extends s["a"]{constructor(e,t,n,i){super(e,t)
this.onPreflightComplete=({data:e})=>{this.uploadData=e.pre_attachment
this.contentMigrationId=e.id
return this._actualUpload()}
this.getContentMigration=()=>Object(l["a"])({url:`/api/v1/${this.contextType}/${this.contextId}/content_migrations/${this.contentMigrationId}`,method:"GET",responseType:"json"}).then(({data:e})=>e.progress_url?this.pullMigrationProgress(e.progress_url):new Promise((e,t)=>{setTimeout(()=>{this.getContentMigration().then(e).catch(t)},500)}))
this.pullMigrationProgress=e=>Object(l["a"])({url:e,method:"GET",responseType:"json"}).then(({data:t})=>{this.trackMigrationProgress(t.completion||0)
if("failed"===t.workflow_state)throw new Error("zip file migration failed")
if(t.completion<100){if(t.completion>0){const e={loaded:t.completion,total:100}
this.trackProgress(e)}return new Promise((n,i)=>{setTimeout(()=>{this.pullMigrationProgress(`${e}#${t.completion}`).then(n).catch(i)},1e3)})}return this.onMigrationComplete()})
this.trackProgress=e=>{this.progress=e.loaded/e.total
return this.onProgress(this.progress,this.file)}
this.contextId=n
this.contextType=i
this.migrationProgress=0
this.onUploadPosted=this.onUploadPosted.bind(this)
this.onUploadCancelled=this.onUploadCancelled.bind(this)}createPreFlightParams(){return{migration_type:"zip_file_importer",settings:{folder_id:this.folder.id},pre_attachment:{name:this.options.name||this.file.name,size:this.file.size,content_type:this.file.type,on_duplicate:this.options.dup||"rename",no_redirect:true}}}getPreflightUrl(){return`/api/v1/${this.contextType}/${this.contextId}/content_migrations`}onUploadPosted(){this._cancelToken=null
this.onProgress(this.progress,this.file)
const e=this.getContentMigration()
super.onUploadPosted()
return e}onMigrationComplete(){this.inFlight=false
return this.folder.folders.fetch({reset:true}).then(()=>this.folder.files.fetch({reset:true}))}trackMigrationProgress(e){return this.migrationProgress=e/100}getProgress(){return(this.progress+this.migrationProgress)/2}roundProgress(){const e=this.getProgress()||0
return Math.min(Math.round(100*e),100)}getFileName(){return this.options.name||this.file.name}}class u{constructor(){this.listeners=[]}length(){return this._queue.length}pendingUploads(){return this._queue.length+(this.currentUploader?1:0)}flush(){this._queue=[]
this.currentUploader=null
this.onChange()}getAllUploaders(){let e=this._queue.slice()
this.currentUploader&&(e=e.concat(this.currentUploader))
return e.reverse()}getCurrentUploader(){return this.currentUploader}addChangeListener(e){this.listeners.push(e)}removeChangeListener(e){this.listeners=this.listeners.filter(t=>t!==e)}onChange(){this.listeners.forEach(e=>e(this))}createUploader(e,t,n,i){const r=e.expandZip?new c(e,t,n,i):new a(e,t)
r.onProgress=()=>{this.onChange()}
r.cancel=()=>{r.abort()
this._queue=o.a.without(this._queue,r)
this.currentUploader===r&&(this.currentUploader=null)
return this.onChange()}
return r}enqueue(e,t,n,i){const o=this.createUploader(e,t,n,i)
this._queue.push(o)
return this.attemptNextUpload()}dequeue(){const e=this._queue.find(e=>!e.error)
this._queue=o.a.without(this._queue,e)
return e}removeUploaderFromQueue(e){if(e.error||e.inFlight)return
const t=this._queue.findIndex(t=>t===e)
t>=0&&this._queue.splice(t,1)}pageChangeWarning(e){e.preventDefault()
e.returnValue=""}attemptNextUpload(){if(this._uploading||0===this._queue.length)return
const e=this.dequeue()
this.attemptThisUpload(e)}attemptThisUpload(e){if(!e)return
e.reset()
if(this._uploading)return
this.removeUploaderFromQueue(e)
this.currentUploader=e
this.onChange()
this._uploading=true
window.addEventListener("beforeunload",this.pageChangeWarning)
return e.upload().catch(t=>{if("user_aborted_upload"!==t)return this._queue.unshift(e)}).finally(()=>{var e
this._uploading=false
null!==(e=this.currentUploader)&&void 0!==e&&e.inFlight||(this.currentUploader=null)
window.removeEventListener("beforeunload",this.pageChangeWarning)
this.onChange()
this.attemptNextUpload()})}}u.prototype._uploading=false
u.prototype._queue=[]
t["a"]=new u},idOe:function(e,t,n){"use strict"
n("7AEQ")
var i=n("ouhR")
var o=n.n(i)
var r=n("gI0r")
var s=n("ik22")
var a=n("HGxv")
const l=Object(a["useScope"])("content_locks")
s["a"].lockExplanation=function(e,t){if(e.lock_at){const n=o.a.datetimeString(e.lock_at)
switch(t){case"quiz":return l.t("messages.quiz_locked_at","This quiz was locked %{at}.",{at:n})
case"assignment":return l.t("messages.assignment_locked_at","This assignment was locked %{at}.",{at:n})
case"topic":return l.t("messages.topic_locked_at","This topic was locked %{at}.",{at:n})
case"file":return l.t("messages.file_locked_at","This file was locked %{at}.",{at:n})
case"page":return l.t("messages.page_locked_at","This page was locked %{at}.",{at:n})
default:return l.t("messages.content_locked_at","This content was locked %{at}.",{at:n})}}else if(e.unlock_at){const n=o.a.datetimeString(e.unlock_at)
switch(t){case"quiz":return l.t("messages.quiz_locked_until","This quiz is locked until %{date}.",{date:n})
case"assignment":return l.t("messages.assignment_locked_until","This assignment is locked until %{date}.",{date:n})
case"topic":return l.t("messages.topic_locked_until","This topic is locked until %{date}.",{date:n})
case"file":return l.t("messages.file_locked_until","This file is locked until %{date}.",{date:n})
case"page":return l.t("messages.page_locked_until","This page is locked until %{date}.",{date:n})
default:return l.t("messages.content_locked_until","This content is locked until %{date}.",{date:n})}}else{if(e.context_module){let n=""
switch(t){case"quiz":n+=l.t("messages.quiz_locked_module","This quiz is part of the module *%{module}* and hasn't been unlocked yet.",{module:e.context_module.name,wrapper:"<b>$1</b>"})
break
case"assignment":n+=l.t("messages.assignment_locked_module","This assignment is part of the module *%{module}* and hasn't been unlocked yet.",{module:e.context_module.name,wrapper:"<b>$1</b>"})
break
case"topic":n+=l.t("messages.topic_locked_module","This topic is part of the module *%{module}* and hasn't been unlocked yet.",{module:e.context_module.name,wrapper:"<b>$1</b>"})
break
case"file":n+=l.t("messages.file_locked_module","This file is part of the module *%{module}* and hasn't been unlocked yet.",{module:e.context_module.name,wrapper:"<b>$1</b>"})
break
case"page":n+=l.t("messages.page_locked_module","This page is part of the module *%{module}* and hasn't been unlocked yet.",{module:e.context_module.name,wrapper:"<b>$1</b>"})
break
default:n+=l.t("messages.content_locked_module","This content is part of the module *%{module}* and hasn't been unlocked yet.",{module:e.context_module.name,wrapper:"<b>$1</b>"})}if(o()("#context_modules_url").length>0){n+="<br/>"
n+="<a href='"+Object(r["a"])(o()("#context_modules_url").attr("href"))+"'>"
n+=Object(r["a"])(l.t("messages.visit_modules_page_for_details","Visit the modules page for information on how to unlock this content."))
n+="</a>"}return o.a.raw(n)}switch(t){case"quiz":return l.t("messages.quiz_locked_no_reason","This quiz is locked.  No other reason has been provided.")
case"assignment":return l.t("messages.assignment_locked_no_reason","This assignment is locked.  No other reason has been provided.")
case"topic":return l.t("messages.topic_locked_no_reason","This topic is locked.  No other reason has been provided.")
case"file":return l.t("messages.file_locked_no_reason","This file is locked.  No other reason has been provided.")
case"page":return l.t("messages.page_locked_no_reason","This page is locked.  No other reason has been provided.")
default:return l.t("messages.content_locked_no_reason","This content is locked.  No other reason has been provided.")}}}},jDZg:function(e,t,n){"use strict"
n.d(t,"d",(function(){return r}))
n.d(t,"a",(function(){return a}))
n.d(t,"b",(function(){return l}))
n.d(t,"e",(function(){return c}))
n.d(t,"c",(function(){return s}))
var i=n("HGxv")
const o=Object(i["useScope"])("blueprint_settings_labels")
const r={get assignment(){return o.t("Assignment")},get assignment_group(){return o.t("Assignment Group")},get quiz(){return o.t("Quiz")},get discussion_topic(){return o.t("Discussion")},get wiki_page(){return o.t("Page")},get attachment(){return o.t("File")},get context_module(){return o.t("Module")},get announcement(){return o.t("Announcement")},get assessment_question_bank(){return o.t("Question Bank")},get calendar_event(){return o.t("Event")},get learning_outcome(){return o.t("Outcome")},get learning_outcome_group(){return o.t("Outcome Group")},get rubric(){return o.t("Rubric")},get context_external_tool(){return o.t("External Tool")},get folder(){return o.t("Folder")},get syllabus(){return o.t("Syllabus")},get settings(){return o.t("Settings")}}
const s={get assignment(){return o.t("Assignments")},get quiz(){return o.t("Quizzes")},get discussion_topic(){return o.t("Discussions")},get wiki_page(){return o.t("Pages")},get attachment(){return o.t("Files")}}
const a={get created(){return o.t("Created")},get updated(){return o.t("Updated")},get deleted(){return o.t("Deleted")},get initial_sync(){return o.t("Initial Sync Incomplete")}}
const l={get points(){return o.t("Points changed exceptions:")},get content(){return o.t("Content changed exceptions:")},get due_dates(){return o.t("Due Dates changed exceptions:")},get availability_dates(){return o.t("Availability Dates changed exceptions:")},get settings(){return o.t("Settings changed exceptions:")},get deleted(){return o.t("Deleted content exceptions:")}}
const c={get content(){return o.t("Content")},get points(){return o.t("Points")},get settings(){return o.t("Settings")},get due_dates(){return o.t("Due Dates")},get availability_dates(){return o.t("Availability Dates")}}},jFoo:function(e,t,n){"use strict"
n.d(t,"b",(function(){return u}))
n.d(t,"a",(function(){return d}))
n.d(t,"c",(function(){return f}))
var i=n("fhP7")
const o="error"
const r="unsupported_subject"
const s="wrong_origin"
const a="bad_request"
const l=({targetWindow:e,origin:t,subject:n,message_id:i})=>{const l=(o={})=>{const r={subject:n+".response"}
i&&(r.message_id=i)
e?e.postMessage({...r,...o},t):console.error("Error sending response postMessage: target window does not exist")}
const c=()=>{l({})}
const u=(e,t)=>{const n={code:e}
t&&(n.message=t)
l({error:n})}
const d=e=>{u(o,e)}
const h=e=>{u(a,e)}
const p=()=>{u(s)}
const f=()=>{u(r)}
return{sendResponse:l,sendSuccess:c,sendError:u,sendGenericError:d,sendBadRequestError:h,sendWrongOriginError:p,sendUnsupportedSubjectError:f}}
var c=l
const u={}
const d=["lti.enableScrollEvents","lti.fetchWindowSize","lti.frameResize","lti.removeUnloadMessage","lti.resourceImported","lti.screenReaderAlert","lti.scrollToTop","lti.setUnloadMessage","lti.showAlert","lti.showModuleNavigation","org.imsglobal.lti.capabilities","org.imsglobal.lti.get_data","org.imsglobal.lti.put_data","requestFullWindowLaunch","toggleCourseNavigationMenu"]
const h=["A2ExternalContentReady","LtiDeepLinkingResponse",i["i"],i["b"],i["j"]]
async function p(e,t=false){if(e.data.source&&e.data.source.includes("react-devtools"))return false
let i
try{i="string"===typeof e.data?JSON.parse(e.data):e.data}catch(e){return false}const o=i.subject||i.messageType
const r=c({targetWindow:e.source,origin:e.origin,subject:o,message_id:i.message_id})
if(h.includes(o))return false
if(!d.includes(o)){t&&r.sendUnsupportedSubjectError()
return false}if(!t&&o.includes("org.imsglobal.lti"))return false
try{const s=await n("G4i8")(`./${o}.js`)
const a=s.default({message:i,event:e,responseMessages:r})
!a&&t&&r.sendSuccess()
return true}catch(e){console.error(`Error loading or executing message handler for "${o}": ${e}`)
t&&r.sendGenericError(e.message)
return false}}function f(){var e,t
const n=null===(e=ENV)||void 0===e||null===(t=e.FEATURES)||void 0===t?void 0:t.lti_platform_storage
window.addEventListener("message",e=>{""!==e.data&&p(e,n)})}},jqxs:function(e,t,n){"use strict"
var i=n("Y/W1")
var o=n.n(i)
var r=n("ouhR")
var s=n.n(r)
class a{static initialize(){this.$container.on("scroll",o.a.debounce(this.checkInstances,10))
this.initialized=true}static addInstance(e){this.initialized||this.initialize()
this.instances.push(e)
this.checkInstances()}static removeInstance(e){this.initialized||this.initialize()
this.instances=o.a.reject(this.instances,t=>t===e)
this.checkInstances()}static checkInstances(){const e=a.$container.scrollTop()
a.instances.forEach(t=>{e>=t.top?t.stuck||t.stick():t.stuck&&t.unstick()})}constructor(e){this.$el=e
this.top=this.$el.offset().top
this.stuck=false
this.constructor.addInstance(this)}stick(){this.$el.addClass("sticky")
this.stuck=true}unstick(){this.$el.removeClass("sticky")
this.stuck=false}remove(){this.unstick()
this.constructor.removeInstance(this)}}a.instances=[]
a.initialized=false
a.$container=s()(window)
s.a.fn.sticky=function(){return this.each((function(){new a(s()(this))}))}
s()(()=>s()("[data-sticky]").sticky())
t["a"]={afterRender:function(){this.stickyHeader&&this.stickyHeader.remove()
return this.stickyHeader=this.$("[data-sticky]").sticky()}}},"k+1r":function(e,t,n){var i=n("QkVE")
function o(e){var t=i(this,e)["delete"](e)
this.size-=t?1:0
return t}e.exports=o},kC3k:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M790.5886,1750.588 L790.5886,1807.059 L847.0586,1807.059 L847.0586,1920 L677.6466,1920 L677.6466,1750.588 L790.5886,1750.588 Z M1208.383,1807.059 L1208.383,1920 L1027.721,1920 L1027.721,1807.059 L1208.383,1807.059 Z M1569.816,1807.059 L1569.816,1920 L1389.154,1920 L1389.154,1807.059 L1569.816,1807.059 Z M1920,1750.588 L1920,1920 L1750.588,1920 L1750.588,1807.059 L1807.059,1807.059 L1807.059,1750.588 L1920,1750.588 Z M1581.1771,338.8238 L1581.1771,564.7058 L1468.2351,564.7058 L1468.2351,451.7648 L451.7651,451.7648 L451.7651,1468.2358 L564.7061,1468.2358 L564.7061,1581.1768 L338.8241,1581.1768 L338.8241,338.8238 L1581.1771,338.8238 Z M1920,1389.265 L1920,1569.927 L1807.059,1569.927 L1807.059,1389.265 L1920,1389.265 Z M790.588,1389.154 L790.588,1569.816 L677.647,1569.816 L677.647,1389.154 L790.588,1389.154 Z M1242.353,0.0004 L1242.353,225.8824 L1129.412,225.8824 L1129.412,112.9414 L112.941,112.9414 L112.941,1129.4124 L225.882,1129.4124 L225.882,1242.3524 L5.68434189e-14,1242.3524 L5.68434189e-14,0.0004 L1242.353,0.0004 Z M1920,1027.831 L1920,1208.492 L1807.059,1208.492 L1807.059,1027.831 L1920,1027.831 Z M790.588,1027.721 L790.588,1208.383 L677.647,1208.383 L677.647,1027.721 L790.588,1027.721 Z M1920,677.6466 L1920,847.0586 L1807.059,847.0586 L1807.059,790.5886 L1750.588,790.5886 L1750.588,677.6466 L1920,677.6466 Z M847.0584,677.6466 L847.0584,790.5886 L790.5884,790.5886 L790.5884,847.0586 L677.6474,847.0586 L677.6474,677.6466 L847.0584,677.6466 Z M1208.492,677.647 L1208.492,790.588 L1027.831,790.588 L1027.831,677.647 L1208.492,677.647 Z M1569.927,677.647 L1569.927,790.588 L1389.265,790.588 L1389.265,677.647 L1569.927,677.647 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconBlueprint",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconBlueprintSolid"
return n}(l["Component"])
h.glyphName="blueprint"
h.variant="Solid"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},l0h0:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var i=n("RtDj")
var o=n("HGxv")
var r=n("q1tI")
var s=n.n(r)
var a=n("bJGz")
var l=n("uSnb")
var c=n("n12J")
const u=Object(o["useScope"])("canvas_lazy_tray")
function d({children:e,...t}){const n=Object(i["a"])(c["a"],{as:"div",textAlign:"center"},void 0,Object(i["a"])(l["a"],{renderTitle:u.t("Loading...")}))
return s.a.createElement(a["a"],t,Object(i["a"])(r["Suspense"],{fallback:n},void 0,e))}},l9OW:function(e,t,n){var i=n("SKAX"),o=n("MMmD")
function r(e,t){var n=-1,r=o(e)?Array(e.length):[]
i(e,(function(e,i,o){r[++n]=t(e,i,o)}))
return r}e.exports=r},lBOK:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
o.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=window.getComputedStyle(this[0]).direction||"ltr"
const n=this.filter(":first")
let i
if("hide"===e||"remove"===e){n.children(".loading_image").remove()
i=n.data("loading_images")||[]
i.forEach(e=>{e&&e.remove()})
n.data("loading_images",null)
this.css("margin-inline-end","")
return this}if("remove_once"===e){n.children(".loading_image").remove()
i=n.data("loading_images")||[]
const e=i.pop()
e&&e.remove()
n.data("loading_images",i)
return this}if("register_image"===e&&3===arguments.length){o.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]
return this}e=o.a.extend({},o.a.fn.loadingImg.defaults,e)
let r=o.a.fn.loadingImg.image_files.normal
e.image_size&&o.a.fn.loadingImg.image_files[e.image_size]&&(r=o.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
let s=0
if(e.vertical)if("top"===e.vertical);else if("bottom"===e.vertical)s=n.outerHeight()
else if("middle"===e.vertical)s=n.outerHeight()/2-r.height/2
else{s=parseInt(e.vertical,10)
isNaN(s)&&(s=0)}let a=0
if(e.horizontal)if("left"===e.horizontal);else if("right"===e.horizontal)a=n.outerWidth()-r.width
else if("right!"===e.horizontal){a="ltr"===t?n.outerWidth()+5:-5-(r.width||16)
this.css({"margin-inline-end":"16px"})}else if("middle"===e.horizontal)a=n.outerWidth()/2-r.width/2
else{a=parseInt(e.horizontal,10)
isNaN(a)&&(a=0)}const l=n.zIndex()+1
const c=o()(document.createElement("div")).addClass("loading_image_holder")
const u=o()(document.createElement("img")).attr("src",r.url)
c.append(u)
i=n.data("loading_images")||[]
i.push(c)
n.data("loading_images",i)
if(n.css("position")&&"static"!==n.css("position")){c.css({zIndex:l,position:"absolute",top:s,left:a})
n.append(c)}else{const t=n.offset()
let i=t.top,r=t.left
e.vertical&&(i+=s)
e.horizontal&&(r+=a)
c.css({zIndex:l,position:"absolute",top:i,left:r})
o()("body").append(c)}return o()(this)}
o.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
o.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
o.a.fn.loadingImage=o.a.fn.loadingImg},lNsk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("17x9")
const o=Object(i["shape"])({id:i["string"].isRequired,display_name:i["string"].isRequired,avatar_image_url:i["string"]})
t["b"]=o
Object(i["shape"])({id:i["string"].isRequired,name:i["string"].isRequired,avatar_url:i["string"],email:i["string"]})
const r=Object(i["shape"])({id:i["string"].isRequired,name:i["string"].isRequired,avatar_image_url:i["string"],html_url:i["string"].isRequired})},lQqw:function(e,t,n){var i=n("MMmD")
function o(e,t){return function(n,o){if(null==n)return n
if(!i(n))return e(n,o)
var r=n.length,s=t?r:-1,a=Object(n)
while(t?s--:++s<r)if(false===o(a[s],s,a))break
return n}}e.exports=o},lSCD:function(e,t,n){var i=n("NykK"),o=n("GoyQ")
var r="[object AsyncFunction]",s="[object Function]",a="[object GeneratorFunction]",l="[object Proxy]"
function c(e){if(!o(e))return false
var t=i(e)
return t==s||t==a||t==r||t==l}e.exports=c},ljhN:function(e,t){function n(e,t){return e===t||e!==e&&t!==t}e.exports=n},"lm/5":function(e,t,n){var i=n("fmRc"),o=n("wF/u")
var r=1,s=2
function a(e,t,n,a){var l=n.length,c=l,u=!a
if(null==e)return!c
e=Object(e)
while(l--){var d=n[l]
if(u&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return false}while(++l<c){d=n[l]
var h=d[0],p=e[h],f=d[1]
if(u&&d[2]){if(void 0===p&&!(h in e))return false}else{var m=new i
if(a)var g=a(p,f,h,e,t,m)
if(!(void 0===g?o(f,p,r|s,a,m):g))return false}}return true}e.exports=a},m452:function(e,t,n){"use strict"
n.r(t)
var i=n("3jyj")
var o=n("s9Pr")
const r=ENV.FILES_CONTEXTS||[]
const s={contexts:r,contextsDictionary:r.reduce((e,t)=>{const[n,i]=Array.from(Object(o["a"])(t.asset_string))
t.contextType=n
t.contextId=i
e[[n,i].join("_")]=t
return e},{}),showingAllContexts:window.location.pathname.match(/^\/files/),contextType:null!=r[0]?r[0].contextType:void 0,contextId:null!=r[0]?r[0].contextId:void 0,rootFolders:r.map(e=>{if(ENV.current_user_id){const t=new i["a"]({custom_name:e.name,context_type:e.contextType.replace(/s$/,""),context_id:e.contextId})
t.url=`/api/v1/${e.contextType}/${e.contextId}/folders/root`
t.fetch()
return t}})}
s.contextFor=function(e){let t
e.collection&&e.collection.parentFolder&&(e=e.collection.parentFolder)
if(e instanceof i["a"]){const n=e
t=`${n&&n.get("context_type")}s_${n&&n.get("context_id")}`.toLowerCase()}else e.contextType&&e.contextId&&(t=`${e.contextType}_${e.contextId}`.toLowerCase())
return s.contextsDictionary&&s.contextsDictionary[t]}
s.userHasPermission=function(e,t){if(!e)return false
return s.contextFor(e)&&s.contextFor(e).permissions&&s.contextFor(e).permissions[t]}
s.baseUrl=s.showingAllContexts?"/files":`/${s.contextType}/${s.contextId}/files`
t["default"]=s},"mT8+":function(e,t,n){"use strict"
n.d(t,"c",(function(){return _}))
n.d(t,"b",(function(){return b}))
var i=n("ouhR")
var o=n.n(i)
var r=n("br6r")
var s=n("qqwe")
var a=n("3O+N")
var l=n.n(a)
n("HGxv")
n("BGrI")
var c=l.a.default
var u=c.template,d=c.templates=c.templates||{}
var h="/work/canvas-deploy/generated/ui/shared/forms/jst/DialogFormWrapper"
d[h]=u((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
o=o||{}
var r,s,a="",l=n.helperMissing,c=this.escapeExpression
a+='<div class="outlet"></div>\n\n<div class="button-container">\n  <button class="btn dialog_closer">'+c((r=n.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:o},r?r.call(t,"cancel","Cancel",s):l.call(t,"t","cancel","Cancel",s)))+'</button>\n  <button\n    class="btn btn-primary"\n    data-text-while-loading=\''+c((r=n.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:o},r?r.call(t,"saving","Saving...",s):l.call(t,"t","saving","Saving...",s)))+'\'\n    type="submit"\n  >'+c((r=n.t||t&&t.t,s={hash:{scope:"dialog_form_wrapper"},data:o},r?r.call(t,"save_settings","Save Settings",s):l.call(t,"t","save_settings","Save Settings",s)))+"</button>\n\n"
return a}))
var p=d[h]
n("ESjL")
n("897F")
var f=function(e,t){return function(){return e.apply(t,arguments)}},m=function(e,t){for(var n in t)g.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},g={}.hasOwnProperty
var _=!window.matchMedia("(min-width: 550px)").matches
var b=function(e,t){return _?e:t}
t["a"]=function(e){m(t,e)
function t(){this.onSaveSuccess=f(this.onSaveSuccess,this)
this.renderElAgain=f(this.renderElAgain,this)
this.firstRenderEl=f(this.firstRenderEl,this)
this.toggle=f(this.toggle,this)
return t.__super__.constructor.apply(this,arguments)}t.prototype.defaults={trigger:false,title:null,width:null,height:null,minWidth:null,minHeight:null,fixDialogButtons:true}
t.prototype.$dialogAppendTarget=o()("body")
t.prototype.className="dialogFormView"
t.prototype.wrapperTemplate=p
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.setTrigger()
this.open=this.firstOpen
return this.renderEl=this.firstRenderEl}
t.prototype.open=null
t.prototype.close=function(){var e,t;(null!=(e=this.dialog)?e.isOpen():void 0)&&this.dialog.close()
return null!=(t=this.focusReturnsTo())?t.focus():void 0}
t.prototype.toggle=function(){var e
return(null!=(e=this.dialog)?e.isOpen():void 0)?this.close():this.open()}
t.prototype.remove=function(){var e,n
t.__super__.remove.apply(this,arguments)
null!=(e=this.$trigger)&&e.off(".dialogFormView")
null!=(n=this.$dialog)&&n.remove()
this.open=this.firstOpen
return this.renderEl=this.firstRenderEl}
t.prototype.firstOpen=function(){this.insert()
this.render()
this.setupDialog()
this.openAgain()
return this.open=this.openAgain}
t.prototype.openAgain=function(){this.dialog.open()
return this.dialog.focusable.focus()}
t.prototype.insert=function(){return this.$el.appendTo(this.$dialogAppendTarget)}
t.prototype.setTrigger=function(e){e&&(this.options.trigger=e)
if(!this.options.trigger)return
this.$trigger=o()(this.options.trigger)
return this.attachTrigger()}
t.prototype.attachTrigger=function(){var e
return null!=(e=this.$trigger)?e.on("click.dialogFormView",Object(s["a"])(this.toggle)):void 0}
t.prototype.renderEl=null
t.prototype.firstRenderEl=function(){this.$el.html(this.wrapperTemplate(this.toJSON()))
this.renderElAgain()
return this.renderEl=this.renderElAgain}
t.prototype.renderElAgain=function(){var e
e=this.template(this.toJSON())
return this.$el.find(".outlet").html(e)}
t.prototype.getDialogTitle=function(){var e
return this.options.title||(null!=(e=this.$trigger)?e.attr("title"):void 0)||this.getAriaTitle()}
t.prototype.getAriaTitle=function(){var e,t
e=null!=(t=this.$trigger)?t.attr("aria-describedby"):void 0
return o()("#"+e).text()}
t.prototype.setupDialog=function(){var e
e={autoOpen:false,title:this.getDialogTitle(),close:(t=this,function(){t.close()
return t.trigger("close")}),open:function(e){return function(){return e.trigger("open")}}(this)}
var t
e.width=this.options.width
e.height=this.options.height
e.minWidth=this.options.minWidth
e.minHeight=this.options.minHeight
this.$el.dialog(e)
this.options.fixDialogButtons&&this.$el.fixDialogButtons()
this.dialog=this.$el.data("dialog")
return o()(".ui-resizable-handle").attr("aria-hidden",true)}
t.prototype.setDimensions=function(e,t){var n
e=null!=e?e:this.options.width
t=null!=t?t:this.options.height
n={width:e,height:t}
return this.$el.dialog(n)}
t.prototype.onSaveSuccess=function(){t.__super__.onSaveSuccess.apply(this,arguments)
return this.close()}
t.prototype.focusReturnsTo=function(){var e
if(!this.$trigger)return null
return(e=this.$trigger.data("focusReturnsTo"))?o()("#"+e):this.$trigger}
return t}(r["a"])},mc0g:function(e,t){function n(e){return function(t,n,i){var o=-1,r=Object(t),s=i(t),a=s.length
while(a--){var l=s[e?a:++o]
if(false===n(r[l],l,r))break}return t}}e.exports=n},msTH:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("gI0r")
var l=n("HGxv")
const c=Object(l["useScope"])("user_content")
const u={translateMathmlForScreenreaders(e){var t,n
if(!(null!==(t=ENV)&&void 0!==t&&null!==(n=t.FEATURES)&&void 0!==n&&n.new_math_equation_handling)){const t=o()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html()
const n=o()('<span class="hidden-readable"></span>')
n.html(t)
return n}},toMediaCommentLink(e){const t=o()(`<a\n        id='media_comment_${Object(a["a"])(o()(e).data("media_comment_id"))}'\n        data-media_comment_type='${Object(a["a"])(o()(e).data("media_comment_type"))}'\n        class='instructure_inline_media_comment ${Object(a["a"])(e.nodeName.toLowerCase())}_comment'\n        data-alt='${Object(a["a"])(o()(e).attr("data-alt"))}'\n      />`)
t.html(o()(e).html())
return t},convert(e,t={}){const n=o()("<div />").html(e)
n.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return u.toMediaCommentLink(this)}))
n.find("object.instructure_user_content:not(#kaltura_player) embed").remove()
if(!t.forEditing){n.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=o()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=s.a.uniqueId("uc_")
let n="/object_snippet"
ENV.files_domain&&(n=`//${ENV.files_domain}${n}`)
const i=o()(`<form\n            action='${Object(a["a"])(n)}'\n            method='post'\n            class='user_content_post_form'\n            target='${Object(a["a"])(t)}'\n            id='form-${Object(a["a"])(t)}'\n          />`)
i.append(o()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")}))
i.append(o()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")}))
o()("body").append(i)
setTimeout(()=>i.submit(),0)
return o()(`<iframe\n            class='user_content_iframe'\n            name='${Object(a["a"])(t)}'\n            style='width: ${Object(a["a"])(e.data("uc_width"))}; height: ${Object(a["a"])(e.data("uc_height"))};'\n            frameborder='0'\n            title='${Object(a["a"])(c.t("User Content"))}'\n          />`)}))
n.find("img.equation_image").each((e,t)=>{const n=o()(t)
const i=u.translateMathmlForScreenreaders(n)
n.removeAttr("x-canvaslms-safe-mathml")
n.after(i)})}return n.html()}}
t["a"]=u},mwIZ:function(e,t,n){var i=n("ZWtO")
function o(e,t,n){var o=null==e?void 0:i(e,t)
return void 0===o?n:o}e.exports=o},"o/ft":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1300.007,676.9996 C1485.521,676.9996 1636.515,827.9376 1636.515,1013.5066 L1636.515,1013.5066 L1636.515,1246.9996 L1779.015,1246.9996 L1779.015,1761.6316 C1779.015,1848.9856 1707.985,1920.0146 1620.632,1920.0146 L1620.632,1920.0146 L979.382,1920.0146 C892.029,1920.0146 821,1848.9856 821,1761.6316 L821,1761.6316 L821,1246.9996 L963.5,1246.9996 L963.5,1013.5066 C963.5,827.9376 1114.492,676.9996 1300.007,676.9996 Z M1581.1771,338.8234 L1581.1771,564.7054 L1468.2351,564.7054 L1468.2351,451.7644 L451.7651,451.7644 L451.7651,1468.2354 L564.7061,1468.2354 L564.7061,1581.1764 L338.8241,1581.1764 L338.8241,338.8234 L1581.1771,338.8234 Z M1300.007,780.0146 C1171.294,780.0146 1066.515,884.7936 1066.515,1013.5066 L1066.515,1013.5066 L1066.515,1246.9996 L1533.5,1246.9996 L1533.5,1013.5066 C1533.5,884.7936 1428.721,780.0146 1300.007,780.0146 Z M1242.353,0 L1242.353,225.882 L1129.412,225.882 L1129.412,112.941 L112.941,112.941 L112.941,1129.412 L225.882,1129.412 L225.882,1242.352 L5.68434189e-14,1242.352 L5.68434189e-14,0 L1242.353,0 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconBlueprintLock",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconBlueprintLockSolid"
return n}(l["Component"])
h.glyphName="blueprint-lock"
h.variant="Solid"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},oBik:function(e,t,n){"use strict"
n.d(t,"a",(function(){return l}))
n.d(t,"d",(function(){return c}))
n.d(t,"b",(function(){return u}))
n.d(t,"c",(function(){return d}))
var i=n("0T/Z")
var o=n("TZ14")
var r=n("n/1O")
var s=n("k3+9")
var a=n("ErZx")
const l=a["a"]
function c(e,t,n){const r=Object(i["a"])(t.language)
"en"===r?Object(o["a"])(e,t,n):Object(s["a"])(r).then(()=>Object(o["a"])(e,t,n)).catch(i=>{console.error("Failed loading the language file for",r,"RCE is falling back to English.\n Cause:",i)
Object(o["a"])(e,t,n)})}function u(e){return Object(r["b"])(e)}function d(e){return Object(r["c"])(e)}},pSRY:function(e,t,n){var i=n("QkVE")
function o(e){return i(this,e).has(e)}e.exports=o},plYi:function(e,t,n){"use strict"
var i=n("HGxv")
t["a"]={strings(e,t){let n=i["default"].locale||"en-US"
const o={zh_Hant:"zh-Hant"}
n=o[n]||n
return e.localeCompare(t,n,{sensitivity:"variant",ignorePunctuation:false,numeric:true})},by(e){return(t,n)=>this.strings(e(t),e(n))},byKey(e){return this.by(t=>t[e])},byGet(e){return this.by(t=>t.get(e))}}},poaC:function(e,t,n){"use strict"
var i=n("BrAc")
var o=n("L2KU")
var r=n("rf2n")
const s={_depaginate(e,t=Infinity,n=[]){return i["a"].get(e).then(e=>{const i=n.concat(e.data)
const r=t-1
if(e.headers.link&&r>0){const t=Object(o["a"])(e)
if(t.next)return this._depaginate(t.next,r,i)}e.data=i
return e})},_queryString:e=>e.map(e=>{const t=Object.keys(e)[0]
const n=e[t]
return n?`${t}=${n}`:null}).filter(e=>!!e).join("&"),getCourses({accountId:e},{search:t="",term:n="",subAccount:i=""}={}){const o=this._queryString([{per_page:"100"},{blueprint:"false"},{blueprint_associated:"false"},{"include[]":"term"},{"include[]":"teachers"},{teacher_limit:"5"},{search_term:t},{enrollment_term_id:n}])
return this._depaginate(`/api/v1/accounts/${i||e}/courses?${o}`,1)},getAssociations({masterCourse:e}){const t=this._queryString([{per_page:"100"},{teacher_limit:"5"}])
return this._depaginate(`/api/v1/courses/${e.id}/blueprint_templates/default/associated_courses?${t}`)},saveAssociations:({masterCourse:e,addedAssociations:t,removedAssociations:n})=>i["a"].put(`/api/v1/courses/${e.id}/blueprint_templates/default/update_associations`,{course_ids_to_add:t.map(e=>e.id),course_ids_to_remove:n.map(e=>e.id)}),getMigrations:({masterCourse:e})=>i["a"].get(`/api/v1/courses/${e.id}/blueprint_templates/default/migrations`),beginMigration({masterCourse:e,willSendNotification:t,willIncludeCustomNotificationMessage:n,notificationMessage:o,willIncludeCourseSettings:r,willPublishCourses:s}){const a={send_notification:t}
r&&(a.copy_settings=true)
n&&o&&(a.comment=o)
s&&(a.publish_after_initial_sync=true)
return i["a"].post(`/api/v1/courses/${e.id}/blueprint_templates/default/migrations`,a)},checkMigration(e){return this.getMigrations(e).then(e=>{let t=r["a"].void
e.data[0]&&(t=e.data[0].workflow_state)
e.data=t
return e})},getMigration:({course:e},{blueprintType:t="blueprint_templates",templateId:n="default",changeId:o})=>i["a"].get(`/api/v1/courses/${e.id}/${t}/${n}/migrations/${o}`),getMigrationDetails:({course:e},{blueprintType:t="blueprint_templates",templateId:n="default",changeId:o})=>i["a"].get(`/api/v1/courses/${e.id}/${t}/${n}/migrations/${o}/details`),getFullMigration({course:e},t){return this.getMigration({course:e},t).then(({data:n})=>this.getMigrationDetails({course:e},t).then(e=>Object.assign(n,{changeId:t.changeId,changes:e.data})))},getSyncHistory({masterCourse:e}){return this.getMigrations({masterCourse:e}).then(({data:t})=>Promise.all(t.slice(0,5).map(t=>this.getMigrationDetails({course:e},{changeId:t.id}).then(e=>Object.assign(t,{changes:e.data})))))},toggleLocked:({courseId:e,itemType:t,itemId:n,isLocked:o})=>i["a"].put(`/api/v1/courses/${e}/blueprint_templates/default/restrict_item`,{content_type:t,content_id:n,restricted:o}),loadUnsyncedChanges:({masterCourse:e})=>i["a"].get(`/api/v1/courses/${e.id}/blueprint_templates/default/unsynced_changes`)}
t["a"]=s},qFS3:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.bodyOpenClassName=t.portalClassName=void 0
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}
var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n]
i.enumerable=i.enumerable||false
i.configurable=true
"value"in i&&(i.writable=true)
Object.defineProperty(e,i.key,i)}}return function(t,n,i){n&&e(t.prototype,n)
i&&e(t,i)
return t}}()
var r=n("q1tI")
var s=v(r)
var a=n("i8i4")
var l=v(a)
var c=n("17x9")
var u=v(c)
var d=n("QEso")
var h=v(d)
var p=n("Ye7m")
var f=b(p)
var m=n("2zs7")
var g=v(m)
var _=n("VCL8")
function b(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
t.default=e
return t}function v(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function k(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var w=t.portalClassName="ReactModalPortal"
var C=t.bodyOpenClassName="ReactModal__Body--open"
var O=m.canUseDOM&&void 0!==l.default.createPortal
var S=function(e){return document.createElement(e)}
var E=function(){return O?l.default.createPortal:l.default.unstable_renderSubtreeIntoContainer}
function T(e){return e()}var I=function(e){k(t,e)
function t(){var e
var n,o,r
y(this,t)
for(var a=arguments.length,c=Array(a),u=0;u<a;u++)c[u]=arguments[u]
return r=(n=(o=x(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o),o.removePortal=function(){!O&&l.default.unmountComponentAtNode(o.node)
var e=T(o.props.parentSelector)
e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var n=E()
var r=n(o,s.default.createElement(h.default,i({defaultStyles:t.defaultStyles},e)),o.node)
o.portalRef(r)},n),x(o,r)}o(t,[{key:"componentDidMount",value:function(){if(!m.canUseDOM)return
O||(this.node=S("div"))
this.node.className=this.props.portalClassName
var e=T(this.props.parentSelector)
e.appendChild(this.node)
!O&&this.renderPortal(this.props)}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=T(e.parentSelector)
var n=T(this.props.parentSelector)
return{prevParent:t,nextParent:n}}},{key:"componentDidUpdate",value:function(e,t,n){if(!m.canUseDOM)return
var i=this.props,o=i.isOpen,r=i.portalClassName
e.portalClassName!==r&&(this.node.className=r)
var s=n.prevParent,a=n.nextParent
if(a!==s){s.removeChild(this.node)
a.appendChild(this.node)}if(!e.isOpen&&!o)return
!O&&this.renderPortal(this.props)}},{key:"componentWillUnmount",value:function(){if(!m.canUseDOM||!this.node||!this.portal)return
var e=this.portal.state
var t=Date.now()
var n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS)
if(n){e.beforeClose||this.portal.closeWithTimeout()
setTimeout(this.removePortal,n-t)}else this.removePortal()}},{key:"render",value:function(){if(!m.canUseDOM||!O)return null
!this.node&&O&&(this.node=S("div"))
var e=E()
return e(s.default.createElement(h.default,i({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(e){f.setElement(e)}}])
return t}(r.Component)
I.propTypes={isOpen:u.default.bool.isRequired,style:u.default.shape({content:u.default.object,overlay:u.default.object}),portalClassName:u.default.string,bodyOpenClassName:u.default.string,htmlOpenClassName:u.default.string,className:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),overlayClassName:u.default.oneOfType([u.default.string,u.default.shape({base:u.default.string.isRequired,afterOpen:u.default.string.isRequired,beforeClose:u.default.string.isRequired})]),appElement:u.default.oneOfType([u.default.instanceOf(g.default),u.default.instanceOf(m.SafeHTMLCollection),u.default.instanceOf(m.SafeNodeList),u.default.arrayOf(u.default.instanceOf(g.default))]),onAfterOpen:u.default.func,onRequestClose:u.default.func,closeTimeoutMS:u.default.number,ariaHideApp:u.default.bool,shouldFocusAfterRender:u.default.bool,shouldCloseOnOverlayClick:u.default.bool,shouldReturnFocusAfterClose:u.default.bool,preventScroll:u.default.bool,parentSelector:u.default.func,aria:u.default.object,data:u.default.object,role:u.default.string,contentLabel:u.default.string,shouldCloseOnEsc:u.default.bool,overlayRef:u.default.func,contentRef:u.default.func,id:u.default.string,overlayElement:u.default.func,contentElement:u.default.func}
I.defaultProps={isOpen:false,portalClassName:w,bodyOpenClassName:C,role:"dialog",ariaHideApp:true,closeTimeoutMS:0,shouldFocusAfterRender:true,shouldCloseOnEsc:true,shouldCloseOnOverlayClick:true,shouldReturnFocusAfterClose:true,preventScroll:false,parentSelector:function(){return document.body},overlayElement:function(e,t){return s.default.createElement("div",e,t)},contentElement:function(e,t){return s.default.createElement("div",e,t)}}
I.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,_.polyfill)(I)
false
t.default=I},qJBq:function(e,t){(function(){var t,n,i
i=[]
t={}
e.exports=n=function(e,n,o){var r,s,a,l,c,u,d,h,p
null==o&&(o=true)
if("string"===typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
p=n[0],r=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
p=n[0],r=n[1]}else{p=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands
r=(null!=n?n.decimal:void 0)||t.decimal}d=""+p+r+o
u=i[d]
if(null==u){a=o?3:1
u=i[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+p+"\\d{"+a+",3})+)|\\d*))(?:\\"+r+"(\\d*))?\\s*$")}h=e.match(u)
if(!(null!=h&&3===h.length))return NaN
l=h[1].replace(new RegExp("\\"+p,"g"),"")
s=h[2]
c=parseFloat(l+"."+s)
return c}
e.exports.setOptions=function(e){var n,i
for(n in e){i=e[n]
t[n]=i}}
e.exports.factoryReset=function(){t={thousands:",",decimal:"."}}
e.exports.withOptions=function(e,t){null==t&&(t=true)
return function(i){return n(i,e,t)}}
e.exports.factoryReset()}).call(this)},qT12:function(e,t,n){"use strict"
var i="function"===typeof Symbol&&Symbol.for,o=i?Symbol.for("react.element"):60103,r=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,a=i?Symbol.for("react.strict_mode"):60108,l=i?Symbol.for("react.profiler"):60114,c=i?Symbol.for("react.provider"):60109,u=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.async_mode"):60111,h=i?Symbol.for("react.concurrent_mode"):60111,p=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.suspense"):60113,m=i?Symbol.for("react.suspense_list"):60120,g=i?Symbol.for("react.memo"):60115,_=i?Symbol.for("react.lazy"):60116,b=i?Symbol.for("react.block"):60121,v=i?Symbol.for("react.fundamental"):60117,y=i?Symbol.for("react.responder"):60118,x=i?Symbol.for("react.scope"):60119
function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof
switch(t){case o:switch(e=e.type,e){case d:case h:case s:case l:case a:case f:return e
default:switch(e=e&&e.$$typeof,e){case u:case p:case _:case g:case c:return e
default:return t}}case r:return t}}}function w(e){return k(e)===h}t.AsyncMode=d
t.ConcurrentMode=h
t.ContextConsumer=u
t.ContextProvider=c
t.Element=o
t.ForwardRef=p
t.Fragment=s
t.Lazy=_
t.Memo=g
t.Portal=r
t.Profiler=l
t.StrictMode=a
t.Suspense=f
t.isAsyncMode=function(e){return w(e)||k(e)===d}
t.isConcurrentMode=w
t.isContextConsumer=function(e){return k(e)===u}
t.isContextProvider=function(e){return k(e)===c}
t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o}
t.isForwardRef=function(e){return k(e)===p}
t.isFragment=function(e){return k(e)===s}
t.isLazy=function(e){return k(e)===_}
t.isMemo=function(e){return k(e)===g}
t.isPortal=function(e){return k(e)===r}
t.isProfiler=function(e){return k(e)===l}
t.isStrictMode=function(e){return k(e)===a}
t.isSuspense=function(e){return k(e)===f}
t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===s||e===h||e===l||e===a||e===f||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===_||e.$$typeof===g||e.$$typeof===c||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x||e.$$typeof===b)}
t.typeOf=k},rf2n:function(e,t,n){"use strict"
const i=["queued","exporting","imports_queued"]
const o=["completed","exports_failed","imports_failed"]
const r=["void","unknown",...i,...o]
const s={statesList:r,states:r.reduce((e,t)=>Object.assign(e,{[t]:t}),{})}
s.isEndState=e=>o.includes(e)
s.isLoadingState=e=>i.includes(e)
s.getLoadingValue=e=>i.indexOf(e)+1
s.isSuccessful=e=>"completed"===e
s.maxLoadingValue=i.length+1
t["a"]=s},sULQ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return E}))
var i=n("rePB")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("17x9")
var d=n.n(u)
var h=n("TSYQ")
var p=n.n(h)
var f=n("UCAh")
var m=n("n12J")
var g=n("J2CL")
var _=n("II2N")
var b=n("BTe1")
var v=n("oXx0")
function y(e){var t=e.borders,n=e.colors,i=e.spacing,o=e.typography,r=e.stacking
return{fontFamily:o.fontFamily,fontWeight:o.fontWeightNormal,color:n.textLightest,fontSize:o.fontSizeXSmall,colorDanger:n.textDanger,colorSuccess:n.textSuccess,colorPrimary:n.textBrand,colorInverse:n.textDarkest,size:"1.25rem",countOffset:"0.5rem",notificationOffset:"0.125rem",notificationZIndex:r.above,sizeNotification:i.small,borderRadius:"999rem",padding:i.xxSmall,pulseBorderThickness:t.widthMedium}}y["canvas"]=function(e){return{colorPrimary:e["ic-brand-primary"]}}
var x,k,w,C,O
var S={componentId:"cECYn",template:function(e){return"\n\n.cECYn_bGBk{border-radius:".concat(e.borderRadius||"inherit",";box-sizing:border-box;color:").concat(e.color||"inherit",";font-family:").concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";pointer-events:none;text-align:center;white-space:nowrap}\n\n[dir=ltr] .cECYn_bGBk,[dir=rtl] .cECYn_bGBk{text-align:center}\n\n.cECYn_bGBk:not(.cECYn_bBTa){position:absolute;z-index:").concat(e.notificationZIndex||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_dDWY.cECYn_bXWC{top:calc(-1*").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_dDWY.cECYn_KksD{top:").concat(e.notificationOffset||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bPSM.cECYn_bXWC{bottom:calc(-1*").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bPSM.cECYn_KksD{bottom:").concat(e.notificationOffset||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_bXWC{inset-inline-end:auto;inset-inline-start:calc(-1*").concat(e.countOffset||"inherit",")}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_bXWC{left:calc(-1*").concat(e.countOffset||"inherit",");right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_bXWC{left:auto;right:calc(-1*").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_KksD{inset-inline-end:auto;inset-inline-start:").concat(e.notificationOffset||"inherit","}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_KksD{left:").concat(e.notificationOffset||"inherit",";right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_fcMK.cECYn_KksD{left:auto;right:").concat(e.notificationOffset||"inherit","}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_bXWC{inset-inline-end:calc(-1*").concat(e.countOffset||"inherit",");inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_bXWC{left:auto;right:calc(-1*").concat(e.countOffset||"inherit",")}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_bXWC{left:calc(-1*").concat(e.countOffset||"inherit",");right:auto}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_KksD{inset-inline-end:").concat(e.notificationOffset||"inherit",";inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_KksD{left:auto;right:").concat(e.notificationOffset||"inherit","}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_bXgF.cECYn_KksD{left:").concat(e.notificationOffset||"inherit",";right:auto}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC,.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{top:calc(50% - ").concat(e.size||"inherit","/2)}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD,.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{top:calc(50% - ").concat(e.sizeNotification||"inherit","/2)}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{inset-inline-end:calc(100% - ").concat(e.countOffset||"inherit",");inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{left:auto;right:calc(100% - ").concat(e.countOffset||"inherit",")}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_bXWC{left:calc(100% - ").concat(e.countOffset||"inherit",");right:auto}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{inset-inline-end:auto;inset-inline-start:calc(-1*").concat(e.sizeNotification||"inherit","/2)}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{left:calc(-1*").concat(e.sizeNotification||"inherit","/2);right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_fcMK.cECYn_KksD{left:auto;right:calc(-1*").concat(e.sizeNotification||"inherit","/2)}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC{inset-inline-end:auto;inset-inline-start:calc(100% - ").concat(e.countOffset||"inherit",")}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC{left:calc(100% - ").concat(e.countOffset||"inherit",");right:auto}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_bXWC{left:auto;right:calc(100% - ").concat(e.countOffset||"inherit",")}\n\n.cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD{inset-inline-end:calc(-1*").concat(e.sizeNotification||"inherit","/2);inset-inline-start:auto}\n\n[dir=ltr] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD{left:auto;right:calc(-1*").concat(e.sizeNotification||"inherit","/2)}\n\n[dir=rtl] .cECYn_bGBk:not(.cECYn_bBTa).cECYn_eCdq.cECYn_bXgF.cECYn_KksD{left:calc(-1*").concat(e.sizeNotification||"inherit","/2);right:auto}\n\n.cECYn_bGBk.cECYn_bXWC{-webkit-padding-end:").concat(e.padding||"inherit",";-webkit-padding-start:").concat(e.padding||"inherit",";line-height:").concat(e.size||"inherit",";min-width:").concat(e.size||"inherit",";padding-inline-end:").concat(e.padding||"inherit",";padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .cECYn_bGBk.cECYn_bXWC{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .cECYn_bGBk.cECYn_bXWC{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n.cECYn_bGBk.cECYn_KksD{height:").concat(e.sizeNotification||"inherit",";width:").concat(e.sizeNotification||"inherit","}\n\n.cECYn_zGXc{background-color:").concat(e.colorDanger||"inherit","}\n\n.cECYn_zGXc.cECYn_fdSp:before{border-color:").concat(e.colorDanger||"inherit","}\n\n.cECYn_cOXX{background-color:").concat(e.colorSuccess||"inherit","}\n\n.cECYn_cOXX.cECYn_fdSp:before{border-color:").concat(e.colorSuccess||"inherit","}\n\n.cECYn_bXiG{background-color:").concat(e.colorPrimary||"inherit","}\n\n.cECYn_bXiG.cECYn_fdSp:before{border-color:").concat(e.colorPrimary||"inherit","}\n\n.cECYn_enfx{background-color:").concat(e.color||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.cECYn_enfx.cECYn_fdSp:before{border-color:").concat(e.color||"inherit","}\n\n@keyframes cECYn_fdSp{to{opacity:0.9;transform:scale(1)}}\n\n.cECYn_fdSp{position:relative}\n\n.cECYn_fdSp:before{animation-direction:alternate;animation-duration:1s;animation-iteration-count:4;animation-name:cECYn_fdSp;border:").concat(e.pulseBorderThickness||"inherit"," solid;border-radius:").concat(e.borderRadius||"inherit",';box-sizing:border-box;content:"";height:calc(100% + 0.5rem);inset-inline-end:auto;inset-inline-start:-0.25rem;opacity:0;position:absolute;top:-0.25rem;transform:scale(0.75);width:calc(100% + 0.5rem)}\n\n[dir=ltr] .cECYn_fdSp:before{left:-0.25rem;right:auto}\n\n[dir=rtl] .cECYn_fdSp:before{left:auto;right:-0.25rem}\n\n.cECYn_gasz{box-sizing:border-box;position:relative}\n\n.cECYn_gasz svg{display:block}')},root:"cECYn_bGBk",standalone:"cECYn_bBTa","positioned--top":"cECYn_dDWY",count:"cECYn_bXWC",notification:"cECYn_KksD","positioned--bottom":"cECYn_bPSM","positioned--start":"cECYn_fcMK","positioned--end":"cECYn_bXgF","positioned--center":"cECYn_eCdq",danger:"cECYn_zGXc",pulse:"cECYn_fdSp",success:"cECYn_cOXX",primary:"cECYn_bXiG",inverse:"cECYn_enfx",wrapper:"cECYn_gasz"}
var E=(x=Object(v["a"])(),k=Object(g["j"])(y,S),x(w=k(w=(O=C=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(e){var i
Object(o["a"])(this,n)
i=t.call(this,e)
i._defaultId=Object(b["a"])("Badge")
return i}Object(r["a"])(n,[{key:"countOverflow",value:function(){var e=this.props,t=e.count,n=e.countUntil
return n>1&&t>=n}},{key:"renderOutput",value:function(){var e=this.props,t=e.count,n=e.countUntil,i=e.formatOverflowText,o=e.formatOutput,r=e.type
var s="count"===r&&this.countOverflow()?i(t,n):t
return"function"===typeof o?o(s):"count"===r?s:null}},{key:"renderBadge",value:function(){var e
var t=this.props,n=t.count,o=t.margin,r=t.pulse,s=t.placement,a=t.standalone,l=t.type,u=t.variant
return c.a.createElement(m["a"],{margin:a?o:"none",className:p()((e={},Object(i["a"])(e,S.root,true),Object(i["a"])(e,S[l],l),Object(i["a"])(e,S[u],u),Object(i["a"])(e,S["positioned--top"],s.indexOf("top")>-1),Object(i["a"])(e,S["positioned--bottom"],s.indexOf("bottom")>-1),Object(i["a"])(e,S["positioned--start"],s.indexOf("start")>-1),Object(i["a"])(e,S["positioned--end"],s.indexOf("end")>-1),Object(i["a"])(e,S["positioned--center"],s.indexOf("center")>-1),Object(i["a"])(e,S.standalone,a),Object(i["a"])(e,S.pulse,r),e)),title:"count"===l&&this.countOverflow()?n:null,id:a?null:this._defaultId,display:a?"inline-block":"block"},this.renderOutput())}},{key:"renderChildren",value:function(){var e=this
return l["Children"].map(this.props.children,(function(t){return Object(_["a"])(t,{"aria-describedby":e._defaultId})}))}},{key:"render",value:function(){var e=this.props,t=e.margin,n=e.elementRef,i=e.standalone,o=e.as
return i?this.renderBadge():c.a.createElement(m["a"],{as:o,margin:t,elementRef:n,className:S.wrapper,display:"inline-block"},this.renderChildren(),this.renderBadge())}}])
n.displayName="Badge"
return n}(l["Component"]),C.propTypes={count:d.a.number,countUntil:d.a.number,children:d.a.element,type:d.a.oneOf(["count","notification"]),standalone:d.a.bool,pulse:d.a.bool,variant:d.a.oneOf(["primary","success","danger","inverse"]),placement:f["a"].placement,margin:g["c"].spacing,elementRef:d.a.func,formatOverflowText:d.a.func,formatOutput:d.a.func,as:d.a.elementType},C.defaultProps={count:void 0,children:null,countUntil:void 0,margin:void 0,formatOutput:void 0,standalone:false,type:"count",variant:"primary",pulse:false,placement:"top end",elementRef:function(e){},formatOverflowText:function(e,t){return"".concat(t-1," +")}},O))||w)||w)},tHpF:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
n("VrN0")
const r={validate:/^[a-zA-Z][a-zA-Z0-9_-]*(?:\[(?:\d*|[a-zA-Z0-9_-]+)\])*$/,key:/[a-zA-Z0-9_-]+|(?=\[\])/g,push:/^$/,fixed:/^\d+$/,named:/^[a-zA-Z0-9_-]+$/}
const s=function(e,t,n){e[t]=n
return e}
o.a.fn.toJSON=function(){let e={},t={}
const n=function(e,n){void 0===t[e]&&(t[e]=0)
if(void 0===n)return t[e]++
if(void 0!==n&&n>t[e])return t[e]=++n}
o.a.each(o()(this).serializeForm(),(function(){if(!r.validate.test(this.name))return
let t,i=this.name.match(r.key),a=this.value,l=this.name
while(void 0!==(t=i.pop())){l=l.replace(new RegExp("\\["+t+"\\]$"),"")
if(t.match(r.push))a=s([],n(l),a)
else if(t.match(r.fixed)){n(l,t)
a=s([],t,a)}else t.match(r.named)&&(a=s({},t,a))}e=o.a.extend(true,e,a)}))
return e}},tMB7:function(e,t,n){var i=n("y1pI")
function o(e){var t=this.__data__,n=i(t,e)
return n<0?void 0:t[n][1]}e.exports=o},tlDv:function(e,t,n){"use strict"
var i=n("17x9")
var o=n.n(i)
var r=n("rf2n")
const{shape:s,string:a,arrayOf:l,oneOf:c,bool:u,instanceOf:d}=o.a
const h={}
h.migrationState=c(r["a"].statesList)
h.term=s({id:a.isRequired,name:a.isRequired})
h.termList=l(h.term)
h.account=s({id:a.isRequired,name:a.isRequired})
h.accountList=l(h.account)
h.course=s({id:a.isRequired,name:a.isRequired,course_code:a.isRequired,term:h.term.isRequired,teachers:l(s({display_name:a.isRequired})),teacher_count:a,sis_course_id:a})
h.courseList=l(h.course)
h.courseInfo=s({id:a.isRequired,name:a.isRequired,enrollment_term_id:a.isRequired,sis_course_id:a})
h.lockableAttribute=c(["points","content","due_dates","availability_dates","settings","deleted"])
h.lockableAttributeList=l(h.lockableAttribute)
h.migrationException=s({course_id:a.isRequired,conflicting_changes:h.lockableAttributeList})
h.migrationExceptionList=l(h.migrationException)
h.migrationChange=s({asset_id:a.isRequired,asset_type:c(["assignment","quiz","discussion_topic","wiki_page","attachment","context_module","learning_outcome","learning_outcome_group","announcement","rubric","syllabus"]).isRequired,asset_name:a.isRequired,change_type:c(["created","updated","deleted"]).isRequired,htnl_url:a,exceptions:h.migrationExceptionList})
h.migrationChangeList=l(h.migrationChange)
h.migration=s({id:a.isRequired,workflow_state:h.migrationState.isRequired,comment:a,created_at:a.isRequired,exports_started_at:a,imports_queued_at:a,imports_completed_at:a,changes:h.migrationChangeList})
h.migrationList=l(h.migration)
h.unsyncedChange=s({asset_id:a.isRequired,asset_type:a.isRequired,asset_name:a.isRequired,change_type:a.isRequired,html_url:a.isRequired,locked:u.isRequired})
h.unsyncedChanges=l(h.unsyncedChange)
h.notification=s({id:a.isRequired,message:a.isRequired,err:d(Error)})
h.notificationList=l(h.notification)
h.itemLocks=s({content:u,points:u,due_dates:u,availability_dates:u})
h.itemLocksByObject=s({assignment:h.itemLocks,discussion_topic:h.itemLocks,wiki_page:h.itemLocks,quiz:h.itemLocks,attachment:h.itemLocks})},tybv:function(e,t,n){"use strict"
var i=n("Y/W1")
var o=n.n(i)
function r(e,t=false){let n=o.a.isDate(e)
t&&!n&&(n=null===e)
if(!n)throw new Error(`\`${e}\` must be a Date or null`)}function s(e){if(null==e)throw new Error(`'${e}' must be an array or object`)
const t=["startDate","endDate","closeDate"]
const n=o.a.isArray(e)?e:[e]
o.a.each(n,e=>{o.a.each(t,t=>r(e[t]))})
return n}function a(e){const t=o.a.isString(e)
if(!t)throw new Error(`Grading period id \`${e}\` must be a String`)}class l{constructor(e){this.gradingPeriods=s(e)}static isAllGradingPeriods(e){a(e)
return"0"===e}get earliestValidDueDate(){const e=o.a.sortBy(this.gradingPeriods,"startDate")
const t=o.a.find(e,{isClosed:false})
return t?t.startDate:null}gradingPeriodForDueAt(e){r(e,true)
return o.a.find(this.gradingPeriods,t=>this.isDateInGradingPeriod(e,t.id,false))||null}isDateInGradingPeriod(e,t,n=true){if(n){r(e,true)
a(t)}const i=o.a.find(this.gradingPeriods,{id:t})
if(!i)throw new Error(`No grading period has id \`${t}\``)
return null===e?i.isLast:i.startDate<e&&e<=i.endDate}isDateInClosedGradingPeriod(e){const t=this.gradingPeriodForDueAt(e)
return!!t&&t.isClosed}}t["a"]=l},u8Dt:function(e,t,n){var i=n("YESw")
var o="__lodash_hash_undefined__"
var r=Object.prototype
var s=r.hasOwnProperty
function a(e){var t=this.__data__
if(i){var n=t[e]
return n===o?void 0:n}return s.call(t,e)?t[e]:void 0}e.exports=a},"ut/Y":function(e,t,n){var i=n("ZCpW"),o=n("GDhZ"),r=n("zZ0H"),s=n("Z0cm"),a=n("+c4W")
function l(e){if("function"==typeof e)return e
if(null==e)return r
if("object"==typeof e)return s(e)?o(e[0],e[1]):i(e)
return a(e)}e.exports=l},vCN0:function(e,t,n){"use strict"
n.d(t,"a",(function(){return _}))
var i=n("RtDj")
var o=n("q1tI")
var r=n.n(o)
var s=n("ouhR")
var a=n.n(s)
var l=n("Y/W1")
var c=n.n(l)
var u=n("qqwe")
var d=n("JHuN")
var h=n("0unK")
var p=n("GN1s")
var f,m
const g={overlay:{backgroundColor:"rgba(0,0,0,0.5)",zIndex:"2002"},content:{position:"static",top:"0",left:"0",right:"auto",bottom:"auto",borderRadius:"0",border:"none",padding:"0"}}
class _ extends r.a.Component{constructor(...e){super(...e)
this.state={modalIsOpen:this.props.isOpen}
this.openModal=()=>{this.setState({modalIsOpen:true})}
this.cleanupAfterClose=()=>{this.props.onRequestClose&&this.props.onRequestClose()
a()(this.getAppElement()).removeAttr("aria-hidden")}
this.closeModal=()=>{this.setState({modalIsOpen:false},this.cleanupAfterClose)}
this.closeWithX=()=>{c.a.isFunction(this.props.closeWithX)&&this.props.closeWithX()
this.closeModal()}
this.onSubmit=()=>{const e=this.props.onSubmit()
a()(this.modal).disableWhileLoading(e)}
this.onAfterOpen=()=>{this.closeBtn.focus()
this.props.onAfterOpen&&this.props.onAfterOpen()}
this.getAppElement=()=>this.props.appElement||document.getElementById("application")
this.processMultipleChildren=e=>{let t=null
let n=null
r.a.Children.forEach(e.children,e=>{e.type===h["a"]?t=e:e.type===p["a"]?n=e:console.warn("Modal chilren must be wrapped in either a modal-content or modal-buttons component.")})
return this.props.onSubmit?Object(i["a"])("form",{className:"ModalForm",onSubmit:Object(u["a"])(this.onSubmit)},void 0,[t,n]):[t,n]}}componentWillReceiveProps(e){let t
this.props.isOpen&&!e.isOpen&&(t=this.cleanupAfterClose)
this.setState({modalIsOpen:e.isOpen},t)}render(){return Object(i["a"])("div",{className:"canvasModal"},void 0,Object(i["a"])(d["a"],{ariaHideApp:!!this.state.modalIsOpen,isOpen:!!this.state.modalIsOpen,onRequestClose:this.closeModal,className:this.props.className,style:g,onAfterOpen:this.onAfterOpen,overlayClassName:this.props.overlayClassName,contentLabel:this.props.contentLabel,appElement:this.getAppElement()},void 0,r.a.createElement("div",{ref:e=>{this.modal=e},className:"ReactModal__Layout",style:this.props.style},Object(i["a"])("div",{className:"ReactModal__Header"},void 0,Object(i["a"])("div",{className:"ReactModal__Header-Title"},void 0,Object(i["a"])("h4",{},void 0,this.props.title)),Object(i["a"])("div",{className:"ReactModal__Header-Actions"},void 0,r.a.createElement("button",{ref:e=>{this.closeBtn=e},className:"Button Button--icon-action",type:"button",onClick:this.closeWithX},f||(f=Object(i["a"])("i",{className:"icon-x"})),m||(m=Object(i["a"])("span",{className:"screenreader-only"},void 0,"Close"))))),this.processMultipleChildren(this.props))))}}_.defaultProps={className:"ReactModal__Content--canvas",style:{}}},vavB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("BrAc")
var o=n("EyBU")
class r{constructor(e,t){this.onPreflightComplete=({data:e})=>{this.uploadData=e
return this._actualUpload()}
this.trackProgress=e=>{this.progress=e.loaded/e.total
return this.onProgress(this.progress,this.file)}
this.canAbort=()=>!!this._cancelToken
this.abort=()=>{null===this||void 0===this||this._cancelRequest()
this.onUploadCancelled(this.file)}
this.file=e.file
this.options=e
this.folder=t
this.progress=0
this._cancelRequest=null
this._cancelToken=null
this.inFlight=false}onProgress(e,t){}createPreFlightParams(){return{name:this.options.name||this.file.name,size:this.file.size,content_type:this.file.type,on_duplicate:this.options.dup||"rename",parent_folder_id:this.folder.id,no_redirect:true,category:this.options.category}}getPreflightUrl(){return`/api/v1/folders/${this.folder.id}/files`}upload(){this._cancelToken=new i["a"].CancelToken(e=>{this._cancelRequest=e})
this.inFlight=true
return Object(i["a"])({url:this.getPreflightUrl(),method:"POST",data:this.createPreFlightParams(),responseType:"json",cancelToken:this._cancelToken}).then(this.onPreflightComplete).catch(e=>{this.inFlight=false
if(i["a"].isCancel(e)){this.onUploadCancelled()
throw"user_aborted_upload"}this.error=e
throw e})}_actualUpload(){return Object(o["completeUpload"])(this.uploadData,this.file,{ajaxLib:i["a"],onProgress:this.trackProgress,ajaxLibOptions:{cancelToken:this._cancelToken}}).then(this.onUploadPosted)}onUploadPosted(){}onUploadCancelled(e){this.inFlight=false}getProgress(){return this.progress}roundProgress(){const e=this.getProgress()||0
return Math.min(Math.round(100*e),100)}getFileType(){return this.file.type}getFileName(){return this.options.name||this.file.name}reset(){this.error=null
this.progress=0}}},wOvH:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var i=n("HGxv")
var o=n("jDZg")
const r=Object(i["useScope"])("blueprint_LockItemFormat")
function s(e){const t=e.map(e=>o["e"][e])
switch(t.length){case 0:return r.t("no attributes locked")
case 1:return t[0]
default:return`${t.slice(0,-1).join(", ")} & ${t.slice(-1)[0]}`}}function a(e){const t=Object.keys(e).filter(t=>e[t])
return s(t)}},whu9:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1838.86029,1451.57632 L1920,1532.94589 L1558.4341,1894.51179 L361.565904,1894.51179 L0,1532.94589 L81.2546391,1451.57632 L409.146414,1779.58302 L1510.85359,1779.58302 L1838.86029,1451.57632 Z M962.333054,25 L1462.61798,525.284928 L1381.47827,606.654495 L1019.68251,244.973662 L1019.68251,1432.53262 L904.86867,1432.53262 L904.86867,244.973662 L543.187837,606.654495 L462.048126,525.284928 L962.333054,25 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconUpload",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconUploadLine"
return n}(l["Component"])
h.glyphName="upload"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},wx14:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
function i(){i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}
return i.apply(this,arguments)}},xHhu:function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var i=n("VTBJ")
var o=n("1OyB")
var r=n("vuIU")
var s=n("Ji7U")
var a=n("LK+K")
var l=n("q1tI")
var c=n.n(l)
var u=n("hPGw")
var d=c.a.createElement("path",{d:"M1581.17647,1750.58824 C1581.17647,1781.64706 1555.76471,1807.05882 1524.70588,1807.05882 L395.294118,1807.05882 C364.235294,1807.05882 338.823529,1781.64706 338.823529,1750.58824 L338.823529,564.705882 L225.882353,564.705882 L225.882353,1750.58824 C225.882353,1843.99059 301.891765,1920 395.294118,1920 L1524.70588,1920 C1618.10824,1920 1694.11765,1843.99059 1694.11765,1750.58824 L1694.11765,564.705882 L1581.17647,564.705882 L1581.17647,1750.58824 Z M677.647059,1581.17647 L790.588235,1581.17647 L790.588235,677.647059 L677.647059,677.647059 L677.647059,1581.17647 Z M1129.41176,1581.17647 L1242.35294,1581.17647 L1242.35294,677.647059 L1129.41176,677.647059 L1129.41176,1581.17647 Z M1340.62306,338.823529 L1217.06541,2.5243549e-29 L694.599529,2.5243549e-29 L571.267765,338.823529 L0.0112941176,338.823529 L0.0112941176,451.764706 L1920.01129,451.764706 L1920.01129,338.823529 L1340.62306,338.823529 Z M691.324235,338.823529 L773.658353,112.941176 L1138.11953,112.941176 L1220.45365,338.823529 L691.324235,338.823529 Z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){Object(s["a"])(n,e)
var t=Object(a["a"])(n)
function n(){Object(o["a"])(this,n)
return t.apply(this,arguments)}Object(r["a"])(n,[{key:"render",value:function(){return c.a.createElement(u["a"],Object.assign({},this.props,{name:"IconTrash",viewBox:"0 0 1920 1920"}),d)}}])
n.displayName="IconTrashLine"
return n}(l["Component"])
h.glyphName="trash"
h.variant="Line"
h.propTypes=Object(i["a"])({},u["a"].propTypes)},xetX:function(e,t,n){"use strict"
var i=n("HGxv")
var o=n("ouhR")
var r=n.n(o)
var s=n("gI0r")
var a=n("RnbG")
var l=n.n(a)
n("dhbk")
n("8JEM")
const c=Object(i["useScope"])("prerequisites_lookup")
let u=false
INST.lookupPrerequisites=function(){if(u)return
const e=r()("#module_prerequisites_lookup_link")
if(0==e.length)return
u=true
const t=e.attr("x-canvaslms-trusted-url")
const n=new l.a({radius:5})
n.spin()
r()(n.el).css({opacity:.5,top:"25px",left:"200px"}).appendTo(".spinner")
r.a.ajaxJSON(t,"GET",{},(function(t){n.stop()
if(false===t.locked)return
const i=r()("<ul/>")
i.attr("id","module_prerequisites_list")
for(const e in t.modules){const n=t.modules[e]
const o=r()("<li/>")
const s=r()("<i/>")
o.addClass("module")
o.click((function(){r()(this).find("ul").toggle()}))
o.toggleClass("locked",!!n.locked)
n.locked&&s.addClass("icon-lock")
o.append(s)
const a=r()("<h3/>")
a.text(n.name)
o.append(a)
if(n.prerequisites&&n.prerequisites.length>0){const e=r()("<ul/>")
for(const t in n.prerequisites){const i=n.prerequisites[t]
const o=r()("<li/>")
o.addClass("requirement")
o.toggleClass("locked_requirement",!i.available)
const s=r()("<a/>")
s.attr("href",i.url)
s.text(i.title)
s.toggleClass("icon-lock",!i.available)
o.append(s)
const a=i.requirement_description
if(a){const e=r()("<div/>")
e.addClass("description")
e.text(a)
o.append(e)}e.append(o)}o.append(e)}i.append(o)}e.after(i)
const o=c.t("headers.completion_prerequisites","Completion Prerequisites")
const a=c.beforeLabel(c.t("labels.requirements_must_be_completed","The following requirements need to be completed before this page will be unlocked"))
e.after("<br/><h3 style='margin-top: 15px;'>"+Object(s["a"])(o)+"</h3>"+Object(s["a"])(a))
e.prev("a").hide()}),e=>{n.stop()
r()(".module_prerequisites_fallback").show()})}
r()(document).ready(INST.lookupPrerequisites)},y1pI:function(e,t,n){var i=n("ljhN")
function o(e,t){var n=e.length
while(n--)if(i(e[n][0],t))return n
return-1}e.exports=o},ygkh:function(e,t,n){"use strict"
var i=n("ouhR")
var o=n.n(i)
var r=n("Y/W1")
var s=n.n(r)
var a=n("mX+G")
var l=n("2gWY")
var c=n("0FJJ")
var u=n("UWiF")
var d=n("B9nD")
var h=n("85Cn")
var p=n("GEFT")
var f=n("HGxv")
var m=n("tybv")
var g=n("3H9/")
var _=n("FdVj")
var b=n("cRz0")
function v(e,t){if(!(e&&t))return false
const n=new URL(e)
const i=new URL(t)
return n.origin===i.origin}var y,x,k,w,C=function(e,t){return function(){return e.apply(t,arguments)}},O=function(e,t){for(var n in t)S.call(t,n)&&(e[n]=t[n])
function i(){this.constructor=e}i.prototype=t.prototype
e.prototype=new i
e.__super__=t.prototype
return e},S={}.hasOwnProperty
y=Object(f["useScope"])("models_Assignment")
x=function(){var e
return null!=(e=ENV.PERMISSIONS)?e.manage:void 0}
k=function(){return s.a.includes(ENV.current_user_roles,"admin")}
w=function(){return s.a.includes(ENV.current_user_roles,"student")&&!x()}
t["a"]=function(e){var t
O(n,e)
function n(){this.quizzesRespondusEnabled=C(this.quizzesRespondusEnabled,this)
this.showGradersAnonymousToGradersCheckbox=C(this.showGradersAnonymousToGradersCheckbox,this)
this.pollUntilFinished=C(this.pollUntilFinished,this)
this.pollUntilFinishedLoading=C(this.pollUntilFinishedLoading,this)
this.pollUntilFinishedMigrating=C(this.pollUntilFinishedMigrating,this)
this.pollUntilFinishedImporting=C(this.pollUntilFinishedImporting,this)
this.pollUntilFinishedDuplicating=C(this.pollUntilFinishedDuplicating,this)
this.retry_migration=C(this.retry_migration,this)
this.duplicate_failed=C(this.duplicate_failed,this)
this.duplicate=C(this.duplicate,this)
this.setNullDates=C(this.setNullDates,this)
this._filterFrozenAttributes=C(this._filterFrozenAttributes,this)
this._getAssignmentType=C(this._getAssignmentType,this)
this._hasOnlyType=C(this._hasOnlyType,this)
this._submissionTypes=C(this._submissionTypes,this)
this.toView=C(this.toView,this)
this.submissionTypesFrozen=C(this.submissionTypesFrozen,this)
this.failedToImport=C(this.failedToImport,this)
this.isImporting=C(this.isImporting,this)
this.isQuizLTIAssignment=C(this.isQuizLTIAssignment,this)
this.is_quiz_assignment=C(this.is_quiz_assignment,this)
this.originalAssignmentName=C(this.originalAssignmentName,this)
this.originalAssignmentID=C(this.originalAssignmentID,this)
this.originalQuizID=C(this.originalQuizID,this)
this.originalCourseID=C(this.originalCourseID,this)
this.failedToMigrate=C(this.failedToMigrate,this)
this.failedToDuplicate=C(this.failedToDuplicate,this)
this.isMigrating=C(this.isMigrating,this)
this.isDuplicating=C(this.isDuplicating,this)
this.canDuplicate=C(this.canDuplicate,this)
this.singleSectionDueDate=C(this.singleSectionDueDate,this)
this.singleSection=C(this.singleSection,this)
this.allDates=C(this.allDates,this)
this.nonBaseDates=C(this.nonBaseDates,this)
this.hasPointsPossible=C(this.hasPointsPossible,this)
this.hasDueDate=C(this.hasDueDate,this)
this.multipleDueDates=C(this.multipleDueDates,this)
this.defaultDates=C(this.defaultDates,this)
this.showBuildButton=C(this.showBuildButton,this)
this.newMasteryConnectIconEnabled=C(this.newMasteryConnectIconEnabled,this)
this.newQuizzesAssignmentBuildButtonEnabled=C(this.newQuizzesAssignmentBuildButtonEnabled,this)
this.submissionTypeSelectionTools=C(this.submissionTypeSelectionTools,this)
this.dueDateRequiredForAccount=C(this.dueDateRequiredForAccount,this)
this.maxNameLengthRequiredForAccount=C(this.maxNameLengthRequiredForAccount,this)
this.maxNameLength=C(this.maxNameLength,this)
this.sisIntegrationSettingsEnabled=C(this.sisIntegrationSettingsEnabled,this)
this.postToSISName=C(this.postToSISName,this)
this.postToSISEnabled=C(this.postToSISEnabled,this)
this.labelId=C(this.labelId,this)
this.htmlBuildUrl=C(this.htmlBuildUrl,this)
this.htmlEditUrl=C(this.htmlEditUrl,this)
this.htmlUrl=C(this.htmlUrl,this)
this.objectType=C(this.objectType,this)
this.iconType=C(this.iconType,this)
this.useNewQuizIcon=C(this.useNewQuizIcon,this)
this.published=C(this.published,this)
this.isGpaScaled=C(this.isGpaScaled,this)
this.isLetterGraded=C(this.isLetterGraded,this)
this.isSimple=C(this.isSimple,this)
this.externalToolNewTab=C(this.externalToolNewTab,this)
this.externalToolDataStudentLabelText=C(this.externalToolDataStudentLabelText,this)
this.isMasteryConnectTool=C(this.isMasteryConnectTool,this)
this.externalToolCustomParamsStringified=C(this.externalToolCustomParamsStringified,this)
this.externalToolCustomParams=C(this.externalToolCustomParams,this)
this.externalToolDataStringified=C(this.externalToolDataStringified,this)
this.externalToolData=C(this.externalToolData,this)
this.externalToolIframeHeight=C(this.externalToolIframeHeight,this)
this.externalToolIframeWidth=C(this.externalToolIframeWidth,this)
this.externalToolUrl=C(this.externalToolUrl,this)
this.gradingStandardId=C(this.gradingStandardId,this)
this.groupCategoryId=C(this.groupCategoryId,this)
this.vericiteEnabled=C(this.vericiteEnabled,this)
this.turnitinEnabled=C(this.turnitinEnabled,this)
this.gradeGroupStudentsIndividually=C(this.gradeGroupStudentsIndividually,this)
this.vericiteAvailable=C(this.vericiteAvailable,this)
this.turnitinAvailable=C(this.turnitinAvailable,this)
this.allowedExtensions=C(this.allowedExtensions,this)
this.restrictFileExtensions=C(this.restrictFileExtensions,this)
this.notifyOfUpdate=C(this.notifyOfUpdate,this)
this.peerReviewsAssignAt=C(this.peerReviewsAssignAt,this)
this.peerReviewCount=C(this.peerReviewCount,this)
this.automaticPeerReviews=C(this.automaticPeerReviews,this)
this.anonymousPeerReviews=C(this.anonymousPeerReviews,this)
this.peerReviews=C(this.peerReviews,this)
this.graderCommentsVisibleToGraders=C(this.graderCommentsVisibleToGraders,this)
this.gradersAnonymousToGraders=C(this.gradersAnonymousToGraders,this)
this.anonymousGrading=C(this.anonymousGrading,this)
this.anonymousInstructorAnnotations=C(this.anonymousInstructorAnnotations,this)
this.moderatedGrading=C(this.moderatedGrading,this)
this.postToSIS=C(this.postToSIS,this)
this.isOnlineSubmission=C(this.isOnlineSubmission,this)
this.acceptsOnlineTextEntries=C(this.acceptsOnlineTextEntries,this)
this.acceptsMediaRecording=C(this.acceptsMediaRecording,this)
this.acceptsOnlineURL=C(this.acceptsOnlineURL,this)
this.acceptsAnnotatedDocument=C(this.acceptsAnnotatedDocument,this)
this.acceptsOnlineUpload=C(this.acceptsOnlineUpload,this)
this.withoutGradedSubmission=C(this.withoutGradedSubmission,this)
this.hasSubmittedSubmissions=C(this.hasSubmittedSubmissions,this)
this.allowedToSubmit=C(this.allowedToSubmit,this)
this.expectsSubmission=C(this.expectsSubmission,this)
this.submissionType=C(this.submissionType,this)
this.selectedSubmissionTypeToolId=C(this.selectedSubmissionTypeToolId,this)
this.isNonPlacementExternalTool=C(this.isNonPlacementExternalTool,this)
this.isGenericExternalTool=C(this.isGenericExternalTool,this)
this.defaultToolSelected=C(this.defaultToolSelected,this)
this.isQuickCreateDefaultTool=C(this.isQuickCreateDefaultTool,this)
this.defaultToOnPaper=C(this.defaultToOnPaper,this)
this.defaultToOnline=C(this.defaultToOnline,this)
this.defaultToNone=C(this.defaultToNone,this)
this.isDefaultTool=C(this.isDefaultTool,this)
this.shouldShowDefaultTool=C(this.shouldShowDefaultTool,this)
this.isNewAssignment=C(this.isNewAssignment,this)
this.submissionTypes=C(this.submissionTypes,this)
this.courseID=C(this.courseID,this)
this.omitFromFinalGrade=C(this.omitFromFinalGrade,this)
this.gradingType=C(this.gradingType,this)
this.inClosedGradingPeriod=C(this.inClosedGradingPeriod,this)
this.frozenAttributes=C(this.frozenAttributes,this)
this.frozen=C(this.frozen,this)
this.freezeOnCopy=C(this.freezeOnCopy,this)
this.canMove=C(this.canMove,this)
this.canDelete=C(this.canDelete,this)
this.canFreeze=C(this.canFreeze,this)
this.assignmentGroupId=C(this.assignmentGroupId,this)
this.secureParams=C(this.secureParams,this)
this.pointsPossible=C(this.pointsPossible,this)
this.name=C(this.name,this)
this.description=C(this.description,this)
this.importantDates=C(this.importantDates,this)
this.dueDateRequired=C(this.dueDateRequired,this)
this.lockAt=C(this.lockAt,this)
this.unlockAt=C(this.unlockAt,this)
this.dueAt=C(this.dueAt,this)
this.assignmentType=C(this.assignmentType,this)
this.isAssignment=C(this.isAssignment,this)
this.isNotGraded=C(this.isNotGraded,this)
this.defaultToolUrl=C(this.defaultToolUrl,this)
this.defaultToolName=C(this.defaultToolName,this)
this.isNonPlacementExternalTool=C(this.isNonPlacementExternalTool,this)
this.isExternalTool=C(this.isExternalTool,this)
this.isPage=C(this.isPage,this)
this.isDiscussionTopic=C(this.isDiscussionTopic,this)
this.isQuiz=C(this.isQuiz,this)
return n.__super__.constructor.apply(this,arguments)}n.mixin(l["a"])
n.prototype.resourceName="assignments"
t="https://canvas.instructure.com/lti/mastery_connect_assessment"
n.prototype.urlRoot=function(){return this._defaultUrl()}
n.prototype.defaults={publishable:true,hidden:false,unpublishable:true}
n.prototype.initialize=function(){var e,t,n,i
null!=(t=this.get("assignment_overrides"))&&this.set("assignment_overrides",new h["a"](t))
null!=(n=this.get("turnitin_settings"))&&this.set("turnitin_settings",new c["a"](n),{silent:true})
null!=(i=this.get("vericite_settings"))&&this.set("vericite_settings",new u["a"](i),{silent:true})
null!=(e=this.get("all_dates"))&&this.set("all_dates",new p["a"](e))
if(this.postToSISEnabled()&&!this.get("id")&&false!==this.get("post_to_sis"))return this.set("post_to_sis",!!("undefined"!==typeof ENV&&null!==ENV?ENV.POST_TO_SIS_DEFAULT:void 0))}
n.prototype.isQuiz=function(){return this._hasOnlyType("online_quiz")}
n.prototype.isDiscussionTopic=function(){return this._hasOnlyType("discussion_topic")}
n.prototype.isPage=function(){return this._hasOnlyType("wiki_page")}
n.prototype.isExternalTool=function(){return this._hasOnlyType("external_tool")}
n.prototype.isNonPlacementExternalTool=function(){return this.isExternalTool}
n.prototype.defaultToolName=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_NAME&&escape(ENV.DEFAULT_ASSIGNMENT_TOOL_NAME).replace(/%20/g," ")}
n.prototype.defaultToolUrl=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_URL}
n.prototype.isNotGraded=function(){return this._hasOnlyType("not_graded")}
n.prototype.isAssignment=function(){return!s.a.includes(this._submissionTypes(),"online_quiz","discussion_topic","not_graded","external_tool")}
n.prototype.assignmentType=function(e){if(!(arguments.length>0))return this._getAssignmentType()
return"assignment"===e?this.set("submission_types",["none"]):this.set("submission_types",[e])}
n.prototype.dueAt=function(e){if(!(arguments.length>0))return this.get("due_at")
return this.set("due_at",e)}
n.prototype.unlockAt=function(e){if(!(arguments.length>0))return this.get("unlock_at")
return this.set("unlock_at",e)}
n.prototype.lockAt=function(e){if(!(arguments.length>0))return this.get("lock_at")
return this.set("lock_at",e)}
n.prototype.dueDateRequired=function(e){if(!(arguments.length>0))return this.get("dueDateRequired")
return this.set("dueDateRequired",e)}
n.prototype.importantDates=function(e){if(!(arguments.length>0))return this.get("important_dates")
return this.set("important_dates",e)}
n.prototype.description=function(e){if(!(arguments.length>0))return this.get("description")
return this.set("description",e)}
n.prototype.name=function(e){if(!(arguments.length>0))return this.get("name")
return this.set("name",e)}
n.prototype.pointsPossible=function(e){if(!(arguments.length>0))return this.get("points_possible")||0
return _["a"].validate(e)?this.set("points_possible",_["a"].parse(e)):this.set("points_possible",e)}
n.prototype.secureParams=function(){return this.get("secure_params")}
n.prototype.assignmentGroupId=function(e){if(!(arguments.length>0))return this.get("assignment_group_id")
return this.set("assignment_group_id",e)}
n.prototype.canFreeze=function(){return null!=this.get("frozen_attributes")&&!this.frozen()&&!this.isQuizLTIAssignment()}
n.prototype.canDelete=function(){return!this.inClosedGradingPeriod()&&!this.frozen()}
n.prototype.canMove=function(){return!this.inClosedGradingPeriod()&&!s.a.includes(this.frozenAttributes(),"assignment_group_id")}
n.prototype.freezeOnCopy=function(){return this.get("freeze_on_copy")}
n.prototype.frozen=function(){return this.get("frozen")}
n.prototype.frozenAttributes=function(){return this.get("frozen_attributes")||[]}
n.prototype.inClosedGradingPeriod=function(){if(k())return false
return this.get("in_closed_grading_period")}
n.prototype.gradingType=function(e){if(!e)return this.get("grading_type")||"points"
return this.set("grading_type",e)}
n.prototype.omitFromFinalGrade=function(e){if(!(arguments.length>0))return this.get("omit_from_final_grade")
return this.set("omit_from_final_grade",e)}
n.prototype.courseID=function(){return this.get("course_id")}
n.prototype.submissionTypes=function(e){if(!(arguments.length>0))return this._submissionTypes()
return this.set("submission_types",e)}
n.prototype.isNewAssignment=function(){return!this.name()}
n.prototype.shouldShowDefaultTool=function(){if(!this.defaultToolUrl())return false
return this.defaultToolSelected()||this.isQuickCreateDefaultTool()||this.isNewAssignment()}
n.prototype.isDefaultTool=function(){return"external_tool"===this.submissionType()&&this.shouldShowDefaultTool()}
n.prototype.defaultToNone=function(){return"none"===this.submissionType()&&!this.shouldShowDefaultTool()}
n.prototype.defaultToOnline=function(){return"online"===this.submissionType()&&!this.shouldShowDefaultTool()}
n.prototype.defaultToOnPaper=function(){return"on_paper"===this.submissionType()&&!this.shouldShowDefaultTool()}
n.prototype.isQuickCreateDefaultTool=function(){return this.submissionTypes().includes("default_external_tool")}
n.prototype.defaultToolSelected=function(){return v(this.defaultToolUrl(),this.externalToolUrl())}
n.prototype.isGenericExternalTool=function(){return"external_tool"===this.submissionType()&&!this.isDefaultTool()&&!this.selectedSubmissionTypeToolId()}
n.prototype.isNonPlacementExternalTool=function(){return"external_tool"===this.submissionType()&&!this.selectedSubmissionTypeToolId()}
n.prototype.selectedSubmissionTypeToolId=function(){var e,t
if("external_tool"!==this.submissionType())return
t=null!=(e=this.get("external_tool_tag_attributes"))?e.content_id:void 0
if(t&&s.a.find(this.submissionTypeSelectionTools(),(function(e){return t===e.id})))return t}
n.prototype.submissionType=function(){var e
e=this._submissionTypes()
return s.a.includes(e,"none")||0===e.length?"none":s.a.includes(e,"on_paper")?"on_paper":s.a.includes(e,"external_tool")||s.a.includes(e,"default_external_tool")?"external_tool":"online"}
n.prototype.expectsSubmission=function(){var e
e=this._submissionTypes()
return e.length>0&&!s.a.includes(e,"")&&!s.a.includes(e,"none")&&!s.a.includes(e,"not_graded")&&!s.a.includes(e,"on_paper")&&!s.a.includes(e,"external_tool")}
n.prototype.allowedToSubmit=function(){var e
e=this._submissionTypes()
return this.expectsSubmission()&&!this.get("locked_for_user")&&!s.a.includes(e,"online_quiz")&&!s.a.includes(e,"attendance")}
n.prototype.hasSubmittedSubmissions=function(){return this.get("has_submitted_submissions")}
n.prototype.withoutGradedSubmission=function(){var e
e=this.get("submission")
return null==e||e.withoutGradedSubmission()}
n.prototype.acceptsOnlineUpload=function(){return!!s.a.includes(this._submissionTypes(),"online_upload")}
n.prototype.acceptsAnnotatedDocument=function(){return!!s.a.includes(this._submissionTypes(),"student_annotation")}
n.prototype.acceptsOnlineURL=function(){return!!s.a.includes(this._submissionTypes(),"online_url")}
n.prototype.acceptsMediaRecording=function(){return!!s.a.includes(this._submissionTypes(),"media_recording")}
n.prototype.acceptsOnlineTextEntries=function(){return!!s.a.includes(this._submissionTypes(),"online_text_entry")}
n.prototype.isOnlineSubmission=function(){return s.a.some(this._submissionTypes(),(function(e){return"online"===e||"online_text_entry"===e||"media_recording"===e||"online_url"===e||"online_upload"===e||"student_annotation"===e}))}
n.prototype.postToSIS=function(e){if(!(arguments.length>0))return this.get("post_to_sis")
return this.set("post_to_sis",e)}
n.prototype.moderatedGrading=function(e){if(!(arguments.length>0))return this.get("moderated_grading")||false
return this.set("moderated_grading",e)}
n.prototype.anonymousInstructorAnnotations=function(e){if(!(arguments.length>0))return this.get("anonymous_instructor_annotations")
return this.set("anonymous_instructor_annotations",e)}
n.prototype.anonymousGrading=function(e){if(!(arguments.length>0))return this.get("anonymous_grading")
return this.set("anonymous_grading",e)}
n.prototype.gradersAnonymousToGraders=function(e){if(!(arguments.length>0))return this.get("graders_anonymous_to_graders")
return this.set("graders_anonymous_to_graders",e)}
n.prototype.graderCommentsVisibleToGraders=function(e){if(!(arguments.length>0))return!!this.get("grader_comments_visible_to_graders")
return this.set("grader_comments_visible_to_graders",e)}
n.prototype.peerReviews=function(e){if(!(arguments.length>0))return this.get("peer_reviews")
return this.set("peer_reviews",e)}
n.prototype.anonymousPeerReviews=function(e){if(!(arguments.length>0))return this.get("anonymous_peer_reviews")
return this.set("anonymous_peer_reviews",e)}
n.prototype.automaticPeerReviews=function(e){if(!(arguments.length>0))return this.get("automatic_peer_reviews")
return this.set("automatic_peer_reviews",e)}
n.prototype.peerReviewCount=function(e){if(!(arguments.length>0))return this.get("peer_review_count")||0
return this.set("peer_review_count",e)}
n.prototype.peerReviewsAssignAt=function(e){if(!(arguments.length>0))return this.get("peer_reviews_assign_at")||null
return this.set("peer_reviews_assign_at",e)}
n.prototype.intraGroupPeerReviews=function(){return this.get("intra_group_peer_reviews")}
n.prototype.notifyOfUpdate=function(e){if(!(arguments.length>0))return this.get("notify_of_update")
return this.set("notify_of_update",e)}
n.prototype.restrictFileExtensions=function(){return!!this.allowedExtensions()}
n.prototype.allowedExtensions=function(e){if(!(arguments.length>0))return this.get("allowed_extensions")
return this.set("allowed_extensions",e)}
n.prototype.turnitinAvailable=function(){return"undefined"!==typeof this.get("turnitin_enabled")}
n.prototype.vericiteAvailable=function(){return"undefined"!==typeof this.get("vericite_enabled")}
n.prototype.gradeGroupStudentsIndividually=function(e){if(!(arguments.length>0))return this.get("grade_group_students_individually")
return this.set("grade_group_students_individually",e)}
n.prototype.turnitinEnabled=function(e){return 0===arguments.length?void 0!==this.get("turnitin_enabled")&&!!this.get("turnitin_enabled"):this.set("turnitin_enabled",e)}
n.prototype.vericiteEnabled=function(e){return 0===arguments.length?void 0!==this.get("vericite_enabled")&&!!this.get("vericite_enabled"):this.set("vericite_enabled",e)}
n.prototype.groupCategoryId=function(e){if(!(arguments.length>0))return this.get("group_category_id")
return this.set("group_category_id",e)}
n.prototype.canGroup=function(){return!this.get("has_submitted_submissions")}
n.prototype.isPlagiarismPlatformLocked=function(){return this.get("has_submitted_submissions")||s.a.includes(this.frozenAttributes(),"submission_types")}
n.prototype.gradingStandardId=function(e){if(!(arguments.length>0))return this.get("grading_standard_id")
return this.set("grading_standard_id",e)}
n.prototype.externalToolUrl=function(e){var t
t=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return t.url
t.url=e
return this.set("external_tool_tag_attributes",t)}
n.prototype.externalToolIframeWidth=function(e){var t,n
n=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return null!=n&&null!=(t=n.iframe)?t.width:void 0
n.iframe.width=e
return this.set("external_tool_tag_attributes",n)}
n.prototype.externalToolIframeHeight=function(e){var t,n
n=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return null!=n&&null!=(t=n.iframe)?t.height:void 0
n.iframe.height=e
return this.set("external_tool_tag_attributes",n)}
n.prototype.externalToolData=function(){var e
e=this.get("external_tool_tag_attributes")||{}
return e.external_data}
n.prototype.externalToolDataStringified=function(){var e
e=this.externalToolData()
if(e)return JSON.stringify(e)
return""}
n.prototype.externalToolCustomParams=function(e){var t
t=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return t.custom_params
t.custom_params=e
return this.set("external_tool_tag_attributes",t)}
n.prototype.externalToolCustomParamsStringified=function(){var e
e=this.externalToolCustomParams()
if(e)return JSON.stringify(e)
return""}
n.prototype.isMasteryConnectTool=function(){var e,n
n=this.get("external_tool_tag_attributes")||{}
return(null!=n&&null!=(e=n.external_data)?e.key:void 0)===t}
n.prototype.externalToolDataStudentLabelText=function(){var e
e=this.externalToolData()
if(!e)return""
if(1===e.studentCount)return y.t("Student")
return y.t("Students")}
n.prototype.externalToolNewTab=function(e){var t
t=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return t.new_tab
t.new_tab=e
return this.set("external_tool_tag_attributes",t)}
n.prototype.isSimple=function(){var e
e=this.get("assignment_overrides")
return"points"===this.gradingType()&&"none"===this.submissionType()&&!this.groupCategoryId()&&!this.peerReviews()&&!this.frozen()&&(!e||e.isSimple())}
n.prototype.isLetterGraded=function(){return"letter_grade"===this.gradingType()}
n.prototype.isGpaScaled=function(){return"gpa_scale"===this.gradingType()}
n.prototype.published=function(e){if(!(arguments.length>0))return this.get("published")
return this.set("published",e)}
n.prototype.useNewQuizIcon=function(){return ENV.FLAGS&&ENV.FLAGS.newquizzes_on_quiz_page&&(this.isQuiz()&&w()||this.isQuizLTIAssignment())}
n.prototype.position=function(e){if(!(arguments.length>0))return this.get("position")||0
return this.set("position",e)}
n.prototype.iconType=function(){if(this.useNewQuizIcon())return"quiz icon-Solid"
if(this.isQuiz())return"quiz"
if(this.isDiscussionTopic())return"discussion"
if(this.isPage())return"document"
return"assignment"}
n.prototype.objectType=function(){if(this.isQuiz())return"Quiz"
if(this.isDiscussionTopic())return"Discussion"
if(this.isPage())return"WikiPage"
return"Assignment"}
n.prototype.objectTypeDisplayName=function(){if(this.isQuiz()||this.isQuizLTIAssignment()&&w())return y.t("Quiz")
if(this.isQuizLTIAssignment())return y.t("New Quiz")
if(this.isDiscussionTopic())return y.t("Discussion Topic")
if(this.isPage())return y.t("Page")
return y.t("Assignment")}
n.prototype.htmlUrl=function(){return this.isQuizLTIAssignment()&&x()&&ENV.FLAGS&&ENV.FLAGS.new_quizzes_modules_support?this.htmlEditUrl():this.get("html_url")}
n.prototype.htmlEditUrl=function(){return this.get("html_url")+"/edit"}
n.prototype.htmlBuildUrl=function(){return this.get("html_url")}
n.prototype.labelId=function(){return this.id}
n.prototype.postToSISEnabled=function(){return ENV.POST_TO_SIS}
n.prototype.postToSISName=function(){return ENV.SIS_NAME}
n.prototype.sisIntegrationSettingsEnabled=function(){return ENV.SIS_INTEGRATION_SETTINGS_ENABLED}
n.prototype.maxNameLength=function(){return ENV.MAX_NAME_LENGTH}
n.prototype.maxNameLengthRequiredForAccount=function(){return ENV.MAX_NAME_LENGTH_REQUIRED_FOR_ACCOUNT}
n.prototype.dueDateRequiredForAccount=function(){return ENV.DUE_DATE_REQUIRED_FOR_ACCOUNT}
n.prototype.submissionTypeSelectionTools=function(){return ENV.SUBMISSION_TYPE_SELECTION_TOOLS||[]}
n.prototype.newQuizzesAssignmentBuildButtonEnabled=function(){return ENV.NEW_QUIZZES_ASSIGNMENT_BUILD_BUTTON_ENABLED}
n.prototype.newMasteryConnectIconEnabled=function(){return ENV.FLAGS&&ENV.FLAGS.updated_mastery_connect_icon}
n.prototype.showBuildButton=function(){return this.isQuizLTIAssignment()&&this.newQuizzesAssignmentBuildButtonEnabled()}
n.prototype.defaultDates=function(){var e
e=this.singleSection()
return new d["a"]({due_at:this.get("due_at"),unlock_at:this.get("unlock_at"),lock_at:this.get("lock_at"),single_section_unlock_at:null!=e?e.unlockAt:void 0,single_section_lock_at:null!=e?e.lockAt:void 0})}
n.prototype.multipleDueDates=function(){var e,t
e=this.get("all_dates_count")
if(e&&e>1)return true
t=this.get("all_dates")
return t&&t.length>1}
n.prototype.hasDueDate=function(){return!this.isPage()}
n.prototype.hasPointsPossible=function(){return!this.isQuiz()&&!this.isPage()}
n.prototype.nonBaseDates=function(){var e,t
e=this.get("all_dates")
if(!e)return false
t=s.a.filter(e.models,(function(e){return e&&!e.get("base")}))
return t.length>0}
n.prototype.allDates=function(){var e,t
e=this.get("all_dates")
t=e&&e.models||[]
return s.a.map(t,(function(e){return e.toJSON()}))}
n.prototype.singleSection=function(){var e,t,n,i
e=this.allDates()
if(!e||1!==e.length)return null
for(t=0,n=e.length;t<n;t++){i=e[t]
return i}}
n.prototype.singleSectionDueDate=function(){var e,t,n,i
if(this.multipleDueDates()||this.dueAt())return this.dueAt()
e=this.allDates()
for(t=0,n=e.length;t<n;t++){i=e[t]
if(i.dueAt)return i.dueAt.toISOString()}}
n.prototype.canDuplicate=function(){return this.get("can_duplicate")}
n.prototype.isDuplicating=function(){return"duplicating"===this.get("workflow_state")}
n.prototype.isMigrating=function(){return"migrating"===this.get("workflow_state")}
n.prototype.failedToDuplicate=function(){return"failed_to_duplicate"===this.get("workflow_state")}
n.prototype.failedToMigrate=function(){return"failed_to_migrate"===this.get("workflow_state")}
n.prototype.originalCourseID=function(){return this.get("original_course_id")}
n.prototype.originalQuizID=function(){return this.get("original_quiz_id")}
n.prototype.originalAssignmentID=function(){return this.get("original_assignment_id")}
n.prototype.originalAssignmentName=function(){return this.get("original_assignment_name")}
n.prototype.is_quiz_assignment=function(){return this.get("is_quiz_assignment")}
n.prototype.isQuizLTIAssignment=function(){return this.get("is_quiz_lti_assignment")}
n.prototype.isImporting=function(){return"importing"===this.get("workflow_state")}
n.prototype.failedToImport=function(){return"failed_to_import"===this.get("workflow_state")}
n.prototype.submissionTypesFrozen=function(){return s.a.includes(this.frozenAttributes(),"submission_types")}
n.prototype.toView=function(){var e,t,n,i,o
t=["acceptsAnnotatedDocument","acceptsMediaRecording","acceptsOnlineTextEntries","acceptsOnlineURL","acceptsOnlineUpload","allDates","allowedExtensions","anonymousGrading","anonymousInstructorAnnotations","anonymousPeerReviews","assignmentGroupId","automaticPeerReviews","canFreeze","defaultToNone","defaultToOnPaper","defaultToOnline","defaultToolName","description","dueAt","dueDateRequired","externalToolCustomParams","externalToolCustomParamsStringified","externalToolData","externalToolDataStringified","externalToolDataStudentLabelText","externalToolNewTab","externalToolUrl","failedToDuplicate","failedToImport","failedToMigrate","freezeOnCopy","frozen","frozenAttributes","gradeGroupStudentsIndividually","gradersAnonymousToGraders","gradingStandardId","gradingType","groupCategoryId","hasDueDate","hasPointsPossible","htmlEditUrl","htmlBuildUrl","htmlUrl","iconType","inClosedGradingPeriod","isDefaultTool","isDuplicating","isExternalTool","isGenericExternalTool","isGpaScaled","isImporting","isLetterGraded","isMasteryConnectTool","isMigrating","isNonPlacementExternalTool","isNotGraded","isOnlineSubmission","isOnlyVisibleToOverrides","isPlagiarismPlatformLocked","isQuizLTIAssignment","isSimple","is_quiz_assignment","labelId","lockAt","moderatedGrading","multipleDueDates","name","newQuizzesAssignmentBuildButtonEnabled","nonBaseDates","notifyOfUpdate","objectTypeDisplayName","omitFromFinalGrade","originalAssignmentName","peerReviewCount","peerReviews","peerReviewsAssignAt","pointsPossible","position","postToSIS","postToSISEnabled","published","restrictFileExtensions","secureParams","selectedSubmissionTypeToolId","showBuildButton","showGradersAnonymousToGradersCheckbox","singleSectionDueDate","submissionType","submissionTypeSelectionTools","submissionTypesFrozen","turnitinAvailable","turnitinEnabled","unlockAt","vericiteAvailable","vericiteEnabled","importantDates","externalToolIframeWidth","externalToolIframeHeight","newMasteryConnectIconEnabled"]
n={id:this.get("id"),is_master_course_child_content:this.get("is_master_course_child_content"),restricted_by_master_course:this.get("restricted_by_master_course"),master_course_restrictions:this.get("master_course_restrictions")}
for(i=0,o=t.length;i<o;i++){e=t[i]
n[e]=this[e]()}return n}
n.prototype.toJSON=function(){var e,t,i,o
e=n.__super__.toJSON.apply(this,arguments)
e=this._filterFrozenAttributes(e);(null!=(t=ENV.MASTER_COURSE_DATA)?t.is_master_course_child_content:void 0)&&(null!=(i=ENV.MASTER_COURSE_DATA)&&null!=(o=i.master_course_restrictions)?o.content:void 0)&&delete e.description
return this.alreadyScoped?e:{assignment:e}}
n.prototype.inGradingPeriod=function(e){var t,n
t=this.get("all_dates")
n=new m["a"](e)
return t?s.a.some(t.models,(function(t){return n.isDateInGradingPeriod(t.dueAt(),e.id)})):n.isDateInGradingPeriod(g["a"].parse(this.dueAt()),e.id)}
n.prototype.search=function(e,t){var n
n=""===e||this.get("name").match(e)
n&&t&&(n=this.inGradingPeriod(t))
if(n){this.set("hidden",false)
return true}this.set("hidden",true)
return false}
n.prototype.endSearch=function(){return this.set("hidden",false)}
n.prototype.parse=function(e){var t,i,o
e=n.__super__.parse.call(this,e)
null!=(t=e.assignment_overrides)&&(e.assignment_overrides=new h["a"](t))
null!=(i=e.turnitin_settings)&&(e.turnitin_settings=new c["a"](i))
null!=(o=e.vericite_settings)&&(e.vericite_settings=new u["a"](o))
return e}
n.prototype.doNotParse=function(){return this.parse=function(){return{}}}
n.prototype._submissionTypes=function(){return this.get("submission_types")||[]}
n.prototype._hasOnlyType=function(e){var t
t=this._submissionTypes()
return 1===t.length&&t[0]===e}
n.prototype._getAssignmentType=function(){return this.isDiscussionTopic()?"discussion_topic":this.isPage()?"wiki_page":this.isQuiz()?"online_quiz":this.isExternalTool()?"external_tool":this.isNotGraded()?"not_graded":"assignment"}
n.prototype._filterFrozenAttributes=function(e){var t,n
n=this.attributes
for(t in n){if(!S.call(n,t))continue
n[t]
s.a.includes(this.frozenAttributes(),t)&&delete e[t]}s.a.includes(this.frozenAttributes(),"title")&&delete e.name
s.a.includes(this.frozenAttributes(),"group_category_id")&&delete e.grade_group_students_individually
if(s.a.includes(this.frozenAttributes(),"peer_reviews")){delete e.automatic_peer_reviews
delete e.peer_review_count
delete e.peer_reviews_assign_at}delete e.frozen
delete e.frozen_attributes
return e}
n.prototype.setNullDates=function(){this.dueAt(null)
this.lockAt(null)
this.unlockAt(null)
return this}
n.prototype.publish=function(){return this.save("published",true)}
n.prototype.unpublish=function(){return this.save("published",false)}
n.prototype.disabledMessage=function(){return y.t("Can't unpublish %{name} if there are student submissions",{name:this.get("name")})}
n.prototype.duplicate=function(e){var t,n
n=this.courseID()
t=this.id
return o.a.ajaxJSON("/api/v1/courses/"+n+"/assignments/"+t+"/duplicate","POST",{},e)}
n.prototype.duplicate_failed=function(e){var t,n,i,r,s
s=this.courseID()
r=this.id
n=this.originalCourseID()
t=this.originalAssignmentID()
i="?target_assignment_id="+r
n!==s&&(i+="&target_course_id="+s)
return o.a.ajaxJSON("/api/v1/courses/"+n+"/assignments/"+t+"/duplicate"+i,"POST",{},e)}
n.prototype.retry_migration=function(e){var t,n,i
t=this.courseID()
i=this.originalQuizID()
n=this.get("id")
return o.a.ajaxJSON("/api/v1/courses/"+t+"/content_exports?export_type=quizzes2&quiz_id="+i+"&failed_assignment_id="+n+"&include[]=migrated_assignment","POST",{},e)}
n.prototype.pollUntilFinishedDuplicating=function(e){null==e&&(e=3e3)
return this.pollUntilFinished(e,this.isDuplicating)}
n.prototype.pollUntilFinishedImporting=function(e){null==e&&(e=3e3)
return this.pollUntilFinished(e,this.isImporting)}
n.prototype.pollUntilFinishedMigrating=function(e){null==e&&(e=3e3)
return this.pollUntilFinished(e,this.isMigrating)}
n.prototype.pollUntilFinishedLoading=function(e){null==e&&(e=3e3)
if(this.isDuplicating())return this.pollUntilFinishedDuplicating(e)
if(this.isImporting())return this.pollUntilFinishedImporting(e)
if(this.isMigrating())return this.pollUntilFinishedMigrating(e)}
n.prototype.pollUntilFinished=function(e,t){var n
n=new b["a"](e,5*e,(i=this,function(e){return i.fetch().always((function(){e()
if(!t())return n.stop()}))}))
var i
return n.start()}
n.prototype.isOnlyVisibleToOverrides=function(e){if(!(arguments.length>0))return this.get("only_visible_to_overrides")||false
return this.set("only_visible_to_overrides",e)}
n.prototype.isRestrictedByMasterCourse=function(){return this.get("is_master_course_child_content")&&this.get("restricted_by_master_course")}
n.prototype.showGradersAnonymousToGradersCheckbox=function(){return this.moderatedGrading()&&this.get("grader_comments_visible_to_graders")}
n.prototype.quizzesRespondusEnabled=function(){return this.get("require_lockdown_browser")&&this.isQuizLTIAssignment()&&w()}
return n}(a["Model"])},yuBc:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var i=n("5+Bo")
var o=n("oBik")
function r(e){return(new i["default"].html.Serializer).serialize(new i["default"].html.DomParser({validate:true},s()).parse(e))}function s(){const e=new i["default"].html.Schema
e.setValidElements(o["a"].valid_elements)
e.addValidElements(o["a"].extended_valid_elements)
return e}},z2Lv:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var o=n.n(i)
var r=n("3lLS")
var s=n.n(r)
n("3HOH")
var a=n("9P8q")
var l=n("RtDj")
n("q1tI")
var c=n("i8i4")
var u=n.n(c)
n("65NJ")
var d=n("3H9/")
var h=n("Y/W1")
var p=n.n(h)
var f=n("mX+G")
var m=n.n(f)
var g=n("3O+N")
var _=n.n(g)
n("O0v1")
var b=n("HGxv")
n("BGrI")
var v=_.a.default
var y=v.template,x=v.templates=v.templates||{}
var k="/work/canvas-deploy/generated/ui/features/wiki-page-show/jst/WikiPage"
x[k]=y((function(e,t,n,i,o){this.compilerInfo=[4,">= 1.0.0"]
n=this.merge(n,e.helpers)
i=this.merge(i,e.partials)
o=o||{}
var r,s,a="",l="function",c=this.escapeExpression,u=this,d=n.helperMissing
function h(e,t){var i,o=""
o+='\n<div class="header-bar-outer-container">\n  <div class="sticky-toolbar" data-sticky>\n    <div class="header-bar page-toolbar '
i=n["if"].call(e,e&&e.course_home,{hash:{},inverse:u.noop,fn:u.program(2,p,t),data:t});(i||0===i)&&(o+=i)
o+='">\n      <div class="page-toolbar-start">\n        <div class="page-heading">\n          '
i=n["if"].call(e,e&&e.course_home,{hash:{},inverse:u.program(6,m,t),fn:u.program(4,f,t),data:t});(i||0===i)&&(o+=i)
o+="\n        </div>\n        "
i=n.unless.call(e,e&&e.course_home,{hash:{},inverse:u.noop,fn:u.program(10,b,t),data:t});(i||0===i)&&(o+=i)
o+='\n        </div>\n        <div class="page-toolbar-end">\n          '
i=n.unless.call(e,e&&e.course_home,{hash:{},inverse:u.noop,fn:u.program(13,y,t),data:t});(i||0===i)&&(o+=i)
o+='\n          <div class="buttons">\n            '
i=n.unless.call(e,e&&e.cannot_edit_by_master_course,{hash:{},inverse:u.noop,fn:u.program(22,S,t),data:t});(i||0===i)&&(o+=i)
o+="\n            "
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.ACCESS_GEAR_MENU),{hash:{},inverse:u.noop,fn:u.program(25,T,t),data:t});(i||0===i)&&(o+=i)
o+='\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="page-changed-alert" role="alert" aria-atomic="true" aria-live="polite"></div>\n  </div>\n</div>\n<div id="direct-share-mount-point"></div>\n'
return o}function p(e,t){return"as-course-home"}function f(e,t){var i,o,r=""
r+='\n          <h2 class="course-title" title="'
if(o=n.course_title)i=o.call(e,{hash:{},data:t})
else{o=e&&e.course_title
i=typeof o===l?o.call(e,{hash:{},data:t}):o}r+=c(i)+'">'
if(o=n.course_title)i=o.call(e,{hash:{},data:t})
else{o=e&&e.course_title
i=typeof o===l?o.call(e,{hash:{},data:t}):o}r+=c(i)+"</h2>\n          "
return r}function m(e,t){var i,o=""
o+="\n            "
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.VIEW_ALL_PAGES),{hash:{},inverse:u.noop,fn:u.program(7,g,t),data:t});(i||0===i)&&(o+=i)
o+="\n          "
return o}function g(e,t){var i,o,r,s=""
s+='\n              <a class="btn'
i=n["if"].call(e,e&&e.front_page,{hash:{},inverse:u.noop,fn:u.program(8,_,t),data:t});(i||0===i)&&(s+=i)
s+=' view_all_pages" href="'
if(o=n.wiki_pages_path)i=o.call(e,{hash:{},data:t})
else{o=e&&e.wiki_pages_path
i=typeof o===l?o.call(e,{hash:{},data:t}):o}s+=c(i)+'">'+c((o=n.t||e&&e.t,r={hash:{scope:"wiki.wiki_page"},data:t},o?o.call(e,"buttons.view_all_pages","View All Pages",r):d.call(e,"t","buttons.view_all_pages","View All Pages",r)))+"</a>\n            "
return s}function _(e,t){return" btn-primary"}function b(e,t){var i,o=""
o+="\n          "
i=n["if"].call(e,e&&e.front_page,{hash:{},inverse:u.noop,fn:u.program(11,v,t),data:t});(i||0===i)&&(o+=i)
o+="\n        "
return o}function v(e,t){var i,o,r=""
r+='\n            <div class="front-page">\n              <span class="front-page label">'+c((i=n.t||e&&e.t,o={hash:{frontPageText:e&&e.frontPageText,scope:"wiki.wiki_page"},data:t},i?i.call(e,"labels.front_page","%{frontPageText}",o):d.call(e,"t","labels.front_page","%{frontPageText}",o)))+"</span>\n            </div>\n          "
return r}function y(e,t){var i,o=""
o+='\n          <div class="blueprint-label"></div>\n          <div class="publishing">\n            <div class="published">\n              '
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.PUBLISH),{hash:{},inverse:u.program(16,k,t),fn:u.program(14,x,t),data:t});(i||0===i)&&(o+=i)
o+="\n            </div>\n          </div>\n          "
return o}function x(e,t){return'\n                <span class="publish-button"></span>\n              '}function k(e,t){var i,o=""
o+="\n                "
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.VIEW_UNPUBLISHED),{hash:{},inverse:u.noop,fn:u.program(17,w,t),data:t});(i||0===i)&&(o+=i)
o+="\n              "
return o}function w(e,t){var i,o=""
o+="\n                  "
i=n["if"].call(e,e&&e.published,{hash:{},inverse:u.program(20,O,t),fn:u.program(18,C,t),data:t});(i||0===i)&&(o+=i)
o+="\n                "
return o}function C(e,t){var i,o,r=""
r+='\n                    <span class=\'published-status published\'>\n                      <i class="icon-publish icon-Solid"></i><span class="hide-when-small"> '+c((i=n.t||e&&e.t,o={hash:{scope:"wiki.wiki_page"},data:t},i?i.call(e,"published_indicator","Published",o):d.call(e,"t","published_indicator","Published",o)))+"</span>\n                    </span>\n                  "
return r}function O(e,t){var i,o,r=""
r+='\n                    <span class=\'published-status unpublished\'>\n                      <i class="icon-unpublished"></i><span class="hide-when-small"></span> '+c((i=n.t||e&&e.t,o={hash:{scope:"wiki.wiki_page"},data:t},i?i.call(e,"unpublished_indicator","Not Published",o):d.call(e,"t","unpublished_indicator","Not Published",o)))+"</span>\n                    </span>\n                  "
return r}function S(e,t){var i,o=""
o+="\n              "
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.UPDATE_CONTENT),{hash:{},inverse:u.noop,fn:u.program(23,E,t),data:t});(i||0===i)&&(o+=i)
o+="\n            "
return o}function E(e,t){var i,o,r,s=""
s+='\n                <a href="'
if(o=n.wiki_page_edit_path)i=o.call(e,{hash:{},data:t})
else{o=e&&e.wiki_page_edit_path
i=typeof o===l?o.call(e,{hash:{},data:t}):o}s+=c(i)+'" class="btn edit-wiki"><i class="icon-edit"></i><span class="hide-when-small"> '+c((o=n.t||e&&e.t,r={hash:{scope:"wiki.wiki_page"},data:t},o?o.call(e,"buttons.edit","Edit",r):d.call(e,"t","buttons.edit","Edit",r)))+"</span></a>\n              "
return s}function T(e,t){var o,r,s,a=""
a+='\n              <div class="inline-block">\n                <a class="btn al-trigger" tabindex="0" role="button" href="#">\n                  <i class="icon-more" aria-hidden="true"></i>\n                  <span class="screenreader-only">'+c((r=n.t||e&&e.t,s={hash:{scope:"wiki.wiki_page"},data:t},r?r.call(e,"toolbar_menu.settings","Settings",s):d.call(e,"t","toolbar_menu.settings","Settings",s)))+'</span>\n                </a>\n                <ul class="al-options">\n                  '
o=n.unless.call(e,e&&e.cannot_delete_by_master_course,{hash:{},inverse:u.noop,fn:u.program(26,I,t),data:t});(o||0===o)&&(a+=o)
a+="\n                  "
o=n["if"].call(e,(o=e&&e.CAN,null==o||false===o?o:o.READ_REVISIONS),{hash:{},inverse:u.noop,fn:u.program(32,R,t),data:t});(o||0===o)&&(a+=o)
a+="\n                  "
o=n.unless.call(e,e&&e.front_page,{hash:{},inverse:u.noop,fn:u.program(34,N,t),data:t});(o||0===o)&&(a+=o)
a+="\n                  "
o=n["if"].call(e,(o=e&&e.CAN,null==o||false===o?o:o.DIRECT_SHARE),{hash:{},inverse:u.noop,fn:u.program(37,A,t),data:t});(o||0===o)&&(a+=o)
a+="\n                  "
o=u.invokePartial(i["ui/shared/external-tools/jst/_external_tools_menu.handlebars"],"ui/shared/external-tools/jst/_external_tools_menu.handlebars",e&&e.wiki_page_menu_tools,n,i,t);(o||0===o)&&(a+=o)
a+="\n                </ul>\n              </div>\n            "
return a}function I(e,t){var i,o=""
o+="\n                    "
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.DELETE),{hash:{},inverse:u.noop,fn:u.program(27,j,t),data:t});(i||0===i)&&(o+=i)
o+="\n                  "
return o}function j(e,t){var i,o,r,s=""
s+='\n                      <li><a href="#" class="icon-trash delete_page'
i=n.unless.call(e,e&&e.deletable,{hash:{},inverse:u.noop,fn:u.program(28,L,t),data:t});(i||0===i)&&(s+=i)
s+='" '
i=n.unless.call(e,e&&e.deletable,{hash:{},inverse:u.noop,fn:u.program(30,D,t),data:t});(i||0===i)&&(s+=i)
s+=">"+c((o=n.t||e&&e.t,r={hash:{scope:"wiki.wiki_page"},data:t},o?o.call(e,"delete_wiki","Delete",r):d.call(e,"t","delete_wiki","Delete",r)))+"</a></li>\n                    "
return s}function L(e,t){return" disabled"}function D(e,t){return'aria-disabled="true"'}function R(e,t){var i,o,r,s=""
s+='\n                    <li><a href="'
if(o=n.wiki_page_history_path)i=o.call(e,{hash:{},data:t})
else{o=e&&e.wiki_page_history_path
i=typeof o===l?o.call(e,{hash:{},data:t}):o}s+=c(i)+'" class="icon-clock view_page_history">'+c((o=n.t||e&&e.t,r={hash:{scope:"wiki.wiki_page"},data:t},o?o.call(e,"view_page_history_wiki","View Page History",r):d.call(e,"t","view_page_history_wiki","View Page History",r)))+"</a></li>\n                  "
return s}function N(e,t){var i,o=""
o+="\n                    "
i=n["if"].call(e,(i=e&&e.CAN,null==i||false===i?i:i.UPDATE_CONTENT),{hash:{},inverse:u.noop,fn:u.program(35,P,t),data:t});(i||0===i)&&(o+=i)
o+="\n                  "
return o}function P(e,t){var i,o,r,s=""
s+='\n                      <li><a href="#" class="icon-bookmark use-as-front-page-menu-item'
i=n.unless.call(e,e&&e.published,{hash:{},inverse:u.noop,fn:u.program(28,L,t),data:t});(i||0===i)&&(s+=i)
s+='" title="'+c((o=n.t||e&&e.t,r={hash:{frontPageText:e&&e.frontPageText,scope:"wiki.wiki_page"},data:t},o?o.call(e,"menu.use_front_page","Use as %{frontPageText}",r):d.call(e,"t","menu.use_front_page","Use as %{frontPageText}",r)))+'" '
i=n.unless.call(e,e&&e.published,{hash:{},inverse:u.noop,fn:u.program(30,D,t),data:t});(i||0===i)&&(s+=i)
s+=">"+c((o=n.t||e&&e.t,r={hash:{frontPageText:e&&e.frontPageText,scope:"wiki.wiki_page"},data:t},o?o.call(e,"menu.use_front_page","Use as %{frontPageText}",r):d.call(e,"t","menu.use_front_page","Use as %{frontPageText}",r)))+"</a></li>\n                    "
return s}function A(e,t){var i,o,r=""
r+='\n                    <li><a href="#" class="icon-user direct-share-send-to-menu-item">'+c((i=n.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},i?i.call(e,"send_to_b940900a","Send To...",o):d.call(e,"t","send_to_b940900a","Send To...",o)))+'</a></li>\n                    <li><a href="#" class="icon-duplicate direct-share-copy-to-menu-item">'+c((i=n.t||e&&e.t,o={hash:{i18n_inferred_key:true},data:t},i?i.call(e,"copy_to_64f8456b","Copy To...",o):d.call(e,"t","copy_to_64f8456b","Copy To...",o)))+"</a></li>\n                  "
return r}function M(e,t){var i,o,r=""
r+="\n    <b>"+c((i=n.t||e&&e.t,o={hash:{scope:"wiki.wiki_page"},data:t},i?i.call(e,"wiki.todo_date","To-Do Date:",o):d.call(e,"t","wiki.todo_date","To-Do Date:",o)))+" "+c((i=n.tDateToString||e&&e.tDateToString,o={hash:{},data:t},i?i.call(e,e&&e.todo_date,"date_at_time",o):d.call(e,"tDateToString",e&&e.todo_date,"date_at_time",o)))+"</b>\n  "
return r}function B(e,t){return'\n    <div class="spinner"></div>\n    <div class="lock_explanation"></div>\n  '}function F(e,t){var i,o,r=""
r+="\n    "+c((i=n.convertApiUserContent||e&&e.convertApiUserContent,o={hash:{},data:t},i?i.call(e,e&&e.body,o):d.call(e,"convertApiUserContent",e&&e.body,o)))+"\n  "
return r}r=n["if"].call(t,(r=t&&t.CAN,null==r||false===r?r:r.VIEW_TOOLBAR),{hash:{},inverse:u.noop,fn:u.program(1,h,o),data:o});(r||0===r)&&(a+=r)
a+='\n\n<div class="show-content user_content clearfix">\n  <h1 class="page-title">'
if(s=n.title)r=s.call(t,{hash:{},data:o})
else{s=t&&t.title
r=typeof s===l?s.call(t,{hash:{},data:o}):s}a+=c(r)+"</h1>\n  "
r=n["if"].call(t,t&&t.todo_date,{hash:{},inverse:u.noop,fn:u.program(39,M,o),data:o});(r||0===r)&&(a+=r)
a+="\n  "
r=n["if"].call(t,t&&t.locked_for_user,{hash:{},inverse:u.program(43,F,o),fn:u.program(41,B,o),data:o});(r||0===r)&&(a+=r)
a+="\n</div>\n"
return a}))
var w=x[k]
var C=n("jqxs")
var O=n("IiHG")
var S=n("do4u")
var E=n("Vovh")
var T=n("gI0r")
var I=n("XKWA")
n("xetX")
var j=n("ik22")
n("idOe")
n("7AEQ")
n("ESjL")
const L=Object(b["useScope"])("content_locks")
o()(document).ready((function(){o()(".content_lock_icon").live("click",(function(e){if(o()(this).data("lock_reason")){e.preventDefault()
const t=o()(this).data("lock_reason")
const n=t.type
const i=o()("<div/>")
i.html(Object(T["a"])(j["a"].lockExplanation(t,n)))
let r=o()("#lock_reason_dialog")
if(0===r.length){r=o()("<div/>").attr("id","lock_reason_dialog")
o()("body").append(r.hide())
const e="<div class='lock_reason_content'></div><div class='button-container'><button type='button' class='btn' >"+Object(T["a"])(L.t("buttons.ok_thanks","Ok, Thanks"))+"</button></div>"
r.append(e)
r.find(".button-container .btn").click(()=>{r.dialog("close")})}r.find(".lock_reason_content").empty().append(i)
r.dialog({title:L.t("titles.content_is_locked","Content Is Locked")})}}))}))
var D=n("QbG7")
var R=n("Nuch")
const N=Object(b["useScope"])("pages")
class P extends m.a.View{static initClass(){this.mixin(C["a"])
this.prototype.template=w
this.prototype.els={".publish-button":"$publishButton",".header-bar-outer-container":"$headerBarOuterContainer",".page-changed-alert":"$pageChangedAlert",".al-trigger":"$gearMenu"}
this.prototype.events={"click .delete_page":"deleteWikiPage","click .use-as-front-page-menu-item":"useAsFrontPage","click .unset-as-front-page-menu-item":"unsetAsFrontPage","click .direct-share-send-to-menu-item":"openSendTo","click .direct-share-copy-to-menu-item":"openCopyTo"}
this.optionProperty("modules_path")
this.optionProperty("wiki_pages_path")
this.optionProperty("wiki_page_edit_path")
this.optionProperty("wiki_page_history_path")
this.optionProperty("WIKI_RIGHTS")
this.optionProperty("PAGE_RIGHTS")
this.optionProperty("course_id")
this.optionProperty("course_home")
this.optionProperty("course_title")
this.optionProperty("display_show_all_pages")}initialize(){this.model.on("change",()=>this.render())
super.initialize(...arguments)
this.WIKI_RIGHTS||(this.WIKI_RIGHTS={})
return this.PAGE_RIGHTS||(this.PAGE_RIGHTS={})}render(){var e
null!=this.publishButtonView&&this.publishButtonView.$el.detach()
null!=this.$sequenceFooter&&this.$sequenceFooter.detach()
super.render(...arguments)
if(this.model.get("locked_for_user")){const e=this.model.get("lock_info")
o()(".lock_explanation").html(Object(T["a"])(INST.lockExplanation(e,"page")))
if(e.context_module&&e.context_module.id){const t=`${ENV.MODULES_PATH}/${e.context_module.id}/prerequisites/wiki_page_${this.model.get("page_id")}`
o()('<a id="module_prerequisites_lookup_link" style="display: none;">').attr("x-canvaslms-trusted-url",t).appendTo(o()(".lock_explanation"))
INST.lookupPrerequisites()}}if(!this.publishButtonView){this.publishButtonView=new E["a"]({model:this.model})
this.model.view=this}this.publishButtonView.$el.appendTo(this.$publishButton)
this.publishButtonView.render()
const t=document.getElementById("immersive_reader_mount_point")
const i=document.getElementById("immersive_reader_mobile_mount_point");(t||i)&&n.e(139).then(n.bind(null,"AZYJ")).then(e=>{const n=()=>document.querySelector(".show-content").innerHTML
const o=document.querySelector(".page-title").textContent
t&&e.initializeReaderButton(t,{content:n,title:o})
i&&e.initializeReaderButton(i,{content:n,title:o})}).catch(e=>{console.log("Error loading immersive readers.",e)})
""!==(null===(e=window.location)||void 0===e?void 0:e.hash)&&(window.location.href=window.location.hash)
const r=o()(".show-content iframe.lti-embed")
if(r.length>0){o()(".show-content").addClass("lti-content")
r.each((function(){o()(this).closest("p").addClass("lti-embed-container")}))}if(this.$sequenceFooter||this.course_home||!this.course_id)null!=this.$sequenceFooter&&this.$sequenceFooter.msfAnimation(false)
else{this.$sequenceFooter||(this.$sequenceFooter=o()("<div></div>").hide())
this.$sequenceFooter.moduleSequenceFooter({courseID:this.course_id,assetType:"Page",assetID:this.model.get("url"),onFetchSuccess:()=>{o()(".module-sequence-footer-content").append(o()("#mark-as-done-container"))
o()("#mark-as-done-container").css({float:"right","margin-right":"4px"})}})}if(this.$sequenceFooter)return this.$sequenceFooter.appendTo(o()("#module_navigation_target"))}navigateToLinkAnchor(){const e=window.location.hash.replace(/^#/,"")
if(e.length){let t=o()("#wiki_page_show .user_content #"+e)
t.length||(t=o()(`#wiki_page_show .user_content a[name='${e}']`))
t.length&&o()("html, body").scrollToVisible(t)}}afterRender(){super.afterRender(...arguments)
this.navigateToLinkAnchor()
this.reloadView=new S["a"]({el:this.$pageChangedAlert,model:this.model,interval:15e4,reloadMessage:N.t("reload_viewing_page","This page has changed since you started viewing it. *Reload*",{wrapper:'<a class="reload" href="#">$1</a>'})})
this.reloadView.on("changed",()=>this.$headerBarOuterContainer.addClass("page-changed"))
this.reloadView.on("reload",()=>this.render())
this.reloadView.pollForChanges()
return Object(I["publish"])("userContent/change")}deleteWikiPage(e){null!=e&&e.preventDefault()
if(!this.model.get("deletable"))return
const t=new O["a"]({model:this.model,wiki_pages_path:this.wiki_pages_path})
return t.open()}unsetAsFrontPage(e){null!=e&&e.preventDefault()
return this.model.unsetFrontPage(()=>o()("#wiki_page_show .page-toolbar .buttons .al-trigger").focus())}useAsFrontPage(e){null!=e&&e.preventDefault()
if(!this.model.get("published"))return
return this.model.setFrontPage(()=>o()("#wiki_page_show .page-toolbar .buttons .al-trigger").focus())}openSendTo(e,t=true){e&&e.preventDefault()
u.a.render(Object(l["a"])(D["a"],{open:t,sourceCourseId:this.course_id,contentShare:{content_type:"page",content_id:this.model.id},onDismiss:()=>{this.openSendTo(null,false)
this.$gearMenu.focus()}}),document.getElementById("direct-share-mount-point"))}openCopyTo(e,t=true){e&&e.preventDefault()
u.a.render(Object(l["a"])(R["a"],{open:t,sourceCourseId:this.course_id,contentSelection:{pages:[this.model.id]},onDismiss:()=>{this.openCopyTo(null,false)
this.$gearMenu.focus()}}),document.getElementById("direct-share-mount-point"))}toJSON(){const e=super.toJSON(...arguments)
e.modules_path=this.modules_path
e.wiki_pages_path=this.wiki_pages_path
e.wiki_page_edit_path=this.wiki_page_edit_path
e.wiki_page_history_path=this.wiki_page_history_path
e.course_home=this.course_home
e.course_title=this.course_title
e.CAN={VIEW_ALL_PAGES:!!this.display_show_all_pages||!!this.WIKI_RIGHTS.manage,VIEW_PAGES:!!this.WIKI_RIGHTS.read,PUBLISH:!!this.WIKI_RIGHTS.publish_page,VIEW_UNPUBLISHED:!!this.WIKI_RIGHTS.manage||!!this.WIKI_RIGHTS.view_unpublished_items,UPDATE_CONTENT:!!this.PAGE_RIGHTS.update||!!this.PAGE_RIGHTS.update_content,DELETE:!!this.PAGE_RIGHTS.delete&&!this.course_home,READ_REVISIONS:!!this.PAGE_RIGHTS.read_revisions}
e.CAN.DIRECT_SHARE=!!ENV.DIRECT_SHARE_ENABLED
e.CAN.ACCESS_GEAR_MENU=e.CAN.DELETE||e.CAN.READ_REVISIONS||e.CAN.DIRECT_SHARE
e.CAN.VIEW_TOOLBAR=e.course_home||e.CAN.VIEW_ALL_PAGES||e.CAN.PUBLISH||e.CAN.UPDATE_CONTENT||e.CAN.ACCESS_GEAR_MENU
e.lock_info&&(e.lock_info=p.a.clone(e.lock_info));(null!=e.lock_info?e.lock_info.unlock_at:void 0)&&(e.lock_info.unlock_at=d["a"].parse(e.lock_info.unlock_at)<new Date?null:o.a.datetimeString(e.lock_info.unlock_at))
if(e.is_master_course_child_content&&e.restricted_by_master_course){e.cannot_delete_by_master_course=true
e.cannot_edit_by_master_course=e.master_course_restrictions.content}e.wiki_page_menu_tools=ENV.wiki_page_menu_tools
p.a.each(e.wiki_page_menu_tools,e=>{e.url=`${e.base_url}&pages[]=${this.model.get("page_id")}`})
e.frontPageText=ENV.K5_SUBJECT_COURSE?"Subject Home":"Front Page"
return e}}P.initClass()
var A=n("UWEG")
var M=n("40dz")
n("fY8A")
var B=n("jFoo")
o()("body").addClass("show")
s()(()=>{const e=new M["default"]
e.init({itemType:"wiki_page",page:"show"})
o()("#content").on("click","#mark-as-done-checkbox",(function(){A["a"].toggle(this)}))
const t=new a["a"](ENV.WIKI_PAGE,{revision:ENV.WIKI_PAGE_REVISION,contextAssetString:ENV.context_asset_string})
const n=new P({el:"#wiki_page_show",model:t,modules_path:ENV.MODULES_PATH,wiki_pages_path:ENV.WIKI_PAGES_PATH,wiki_page_edit_path:ENV.WIKI_PAGE_EDIT_PATH,wiki_page_history_path:ENV.WIKI_PAGE_HISTORY_PATH,WIKI_RIGHTS:ENV.WIKI_RIGHTS,PAGE_RIGHTS:ENV.PAGE_RIGHTS,course_id:ENV.COURSE_ID,course_home:ENV.COURSE_HOME,course_title:ENV.COURSE_TITLE,display_show_all_pages:ENV.DISPLAY_SHOW_ALL_LINK})
n.render()})
Object(B["c"])()},zZ0H:function(e,t){function n(e){return e}e.exports=n},zoYe:function(e,t,n){var i=n("nmnc"),o=n("eUgh"),r=n("Z0cm"),s=n("/9aa")
var a=1/0
var l=i?i.prototype:void 0,c=l?l.toString:void 0
function u(e){if("string"==typeof e)return e
if(r(e))return o(e,u)+""
if(s(e))return c?c.call(e):""
var t=e+""
return"0"==t&&1/e==-a?"-0":t}e.exports=u},"zq/q":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var i=n("QYKH")
class o extends i["a"]{initialize(e,t){return super.initialize(...arguments)}}}}])

//# sourceMappingURL=wiki_page_show-c-03f1a07bcb.js.map