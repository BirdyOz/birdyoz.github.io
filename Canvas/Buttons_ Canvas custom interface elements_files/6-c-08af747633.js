(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[6],{Dibh:function(e,n,t){"use strict"
t.d(n,"a",(function(){return fe}))
var o=t("Ff2n")
var r=t("rePB")
var a=t("1OyB")
var i=t("vuIU")
var c=t("Ji7U")
var d=t("LK+K")
var s=t("q1tI")
var l=t.n(s)
var u=t("17x9")
var f=t.n(u)
var p=t("TSYQ")
var h=t.n(p)
var v=t("VTBJ")
t("DEX3")
var b=t("KgFQ")
var m=t("jtGx")
var g=t("ISHz")
var y=t("QF4Q")
var O=t("TjLr")
var x=function(e){Object(c["a"])(t,e)
var n=Object(d["a"])(t)
function t(){var e
Object(a["a"])(this,t)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i]
e=n.call.apply(n,[this].concat(r))
e._raf=[]
e._focusRegion=null
e.getRef=function(n){e._root=n}
return e}Object(i["a"])(t,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var n=this.props.open
n&&!e.open?this.open():!n&&e.open&&this.close()
this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close()
this._raf.forEach((function(e){return e.cancel()}))
this._raf=[]}},{key:"open",value:function(){var e=this
var n=this.props,t=(n.open,n.contentElement,Object(o["a"])(n,["open","contentElement"]))
this._raf.push(Object(g["a"])((function(){setTimeout((function(){e._focusRegion=O["a"].activateRegion(e.contentElement,Object(v["a"])({},t))}),0)})))}},{key:"close",value:function(){this._focusRegion&&O["a"].blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){if(!this.props.open||!this.contentElement)return
this._focusRegion&&O["a"].focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){if(!this.props.open||!this.contentElement)return
this.close()}},{key:"render",value:function(){var e=Object(b["a"])(t,this.props)
var n=this.props.role||(this.props.label?"dialog":void 0)
return this.props.open?l.a.createElement(e,Object.assign({},Object(m["a"])(this.props,t.propTypes),{ref:this.getRef,role:n,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(y["a"])(this.props.contentElement)
e||(e=Object(y["a"])(this._root))
return e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&O["a"].isFocused(this.contentElement,this._focusRegion.id)}}])
t.displayName="Dialog"
return t}(s["Component"])
x.propTypes={children:f.a.node,as:f.a.elementType,display:f.a.oneOf(["auto","block","inline-block"]),label:f.a.string,open:f.a.bool,onBlur:f.a.func,onDismiss:f.a.func,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),contentElement:f.a.oneOfType([f.a.element,f.a.func]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),shouldContainFocus:f.a.oneOfType([f.a.bool,f.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,shouldCloseOnEscape:f.a.bool,shouldFocusOnOpen:f.a.bool}
x.defaultProps={children:null,display:void 0,label:void 0,open:false,shouldFocusOnOpen:true,shouldContainFocus:false,shouldReturnFocus:false,shouldCloseOnDocumentClick:true,shouldCloseOnEscape:true,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}}
var _=t("dpqJ")
var k=t("AdN2")
var j=t("4Awi")
var z=t("II2N")
var E=t("9yTY")
var C=t("M4Ft")
var w=t("XQb/")
var R=t("3Zzb")
var B=t("J2CL")
var M=t("oXx0")
var D=t("ysUD")
var H=t("Mmr1")
var T=function(e){var n=e.colors,t=e.spacing
return{background:n.backgroundLightest,borderColor:n.borderMedium,padding:t.medium,paddingCompact:t.small,inverseBackground:n.backgroundDarkest,inverseBorderColor:n.backgroundDarkest}}
var F,N,Q,S,W
var I={componentId:"eHzxc",template:function(e){return"\n\n.eHzxc_bGBk{background:".concat(e.background||"inherit",";border-bottom-color:").concat(e.borderColor||"inherit",";border-bottom-style:solid;border-bottom-width:0.0625rem;box-sizing:border-box;flex:0 0 auto}\n\n.eHzxc_enfx{background:").concat(e.inverseBackground||"inherit",";border-bottom-color:").concat(e.inverseBorderColor||"inherit","}\n\n.eHzxc_bcOZ{-webkit-padding-end:").concat(e.padding||"inherit",";-webkit-padding-start:").concat(e.padding||"inherit",";padding:").concat(e.padding||"inherit",";padding-inline-end:").concat(e.padding||"inherit",";padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .eHzxc_bcOZ{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .eHzxc_bcOZ{padding-left:").concat(e.padding||"inherit",";padding-right:").concat(e.padding||"inherit","}\n\n.eHzxc_bcOZ.eHzxc_ssMr{-webkit-padding-end:calc(").concat(e.padding||"inherit","*2 + 1em);padding-inline-end:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=ltr] .eHzxc_bcOZ.eHzxc_ssMr{padding-right:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=rtl] .eHzxc_bcOZ.eHzxc_ssMr{padding-left:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n.eHzxc_cieE{-webkit-padding-end:").concat(e.paddingCompact||"inherit",";-webkit-padding-start:").concat(e.paddingCompact||"inherit",";padding:").concat(e.paddingCompact||"inherit",";padding-inline-end:").concat(e.paddingCompact||"inherit",";padding-inline-start:").concat(e.paddingCompact||"inherit","}\n\n[dir=ltr] .eHzxc_cieE{padding-left:").concat(e.paddingCompact||"inherit",";padding-right:").concat(e.paddingCompact||"inherit","}\n\n[dir=rtl] .eHzxc_cieE{padding-left:").concat(e.paddingCompact||"inherit",";padding-right:").concat(e.paddingCompact||"inherit","}\n\n.eHzxc_cieE.eHzxc_ssMr{-webkit-padding-end:calc(").concat(e.paddingCompact||"inherit","*2 + 1em);padding-inline-end:calc(").concat(e.paddingCompact||"inherit","*2 + 1em)}\n\n[dir=ltr] .eHzxc_cieE.eHzxc_ssMr{padding-right:calc(").concat(e.paddingCompact||"inherit","*2 + 1em)}\n\n[dir=rtl] .eHzxc_cieE.eHzxc_ssMr{padding-left:calc(").concat(e.paddingCompact||"inherit","*2 + 1em)}")},root:"eHzxc_bGBk",inverse:"eHzxc_enfx",defaultSpacing:"eHzxc_bcOZ",withCloseButton:"eHzxc_ssMr",compactSpacing:"eHzxc_cieE"}
var G=(F=Object(M["a"])(),N=Object(B["j"])(T,I),F(Q=N(Q=(W=S=function(e){Object(c["a"])(t,e)
var n=Object(d["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var e
var n=this.props,t=n.children,a=n.variant,i=n.spacing,c=Object(o["a"])(n,["children","variant","spacing"])
var d=false
l.a.Children.forEach(t,(function(e){e&&Object(j["a"])(e,[H["a"]])&&(d=true)}))
var s=(e={},Object(r["a"])(e,I.root,true),Object(r["a"])(e,I["".concat(i,"Spacing")],true),Object(r["a"])(e,I.inverse,"inverse"===a),Object(r["a"])(e,I.withCloseButton,true===d),e)
return l.a.createElement("div",Object.assign({className:h()(s)},Object(m["b"])(c)),t)}}])
t.displayName="ModalHeader"
return t}(s["Component"]),S.propTypes={children:f.a.node,variant:f.a.oneOf(["default","inverse"]),spacing:f.a.oneOf(["default","compact"])},S.defaultProps={children:null,variant:"default",spacing:"default"},W))||Q)||Q)
var U=t("n12J")
var q=function(e){var n=e.colors
return{inverseBackground:n.backgroundBrandSecondary}}
var P,A,J,Y,L
var X={componentId:"butxX",template:function(e){return"\n\n.butxX_bGBk{box-sizing:border-box;flex:1 1 auto;overflow-y:auto}\n\n.butxX_bGBk:focus{outline:none}\n\n.butxX_enfx{background:".concat(e.inverseBackground||"inherit","}")},root:"butxX_bGBk",inverse:"butxX_enfx"}
var Z=(P=Object(M["a"])(),A=Object(B["j"])(q,X),P(J=A(J=(L=Y=function(e){Object(c["a"])(t,e)
var n=Object(d["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var e
var n=this.props,a=n.as,i=n.elementRef,c=n.overflow,d=n.variant,s=n.padding,u=n.children,f=Object(o["a"])(n,["as","elementRef","overflow","variant","padding","children"])
var p=U["a"].omitViewProps(f,t)
var v=h()((e={},Object(r["a"])(e,X.root,true),Object(r["a"])(e,X.inverse,"inverse"===d),e))
var b="fit"===c
C["a"]
return l.a.createElement(U["a"],Object.assign({},p,{display:"block",width:b?"100%":null,height:b?"100%":null,elementRef:i,as:a,className:v,padding:s,tabIndex:"-1"}),u)}}])
t.displayName="ModalBody"
return t}(s["Component"]),Y.propTypes={children:f.a.node,padding:B["c"].spacing,elementRef:f.a.func,as:f.a.elementType,variant:f.a.oneOf(["default","inverse"]),overflow:f.a.oneOf(["scroll","fit"])},Y.defaultProps={padding:"medium",as:"div",variant:"default",children:null,elementRef:void 0,overflow:void 0},L))||J)||J)
var K=function(e){var n=e.colors,t=e.borders,o=e.spacing
return{background:n.backgroundLight,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderRadius:t.radiusMedium,padding:o.small,inverseBackground:n.backgroundDarkest,inverseBorderColor:n.borderDarkest}}
var V,$,ee,ne,te
var oe={componentId:"dNoYT",template:function(e){return"\n\n.dNoYT_bGBk{background:".concat(e.background||"inherit",";border-bottom-left-radius:").concat(e.borderRadius||"inherit",";border-bottom-right-radius:").concat(e.borderRadius||"inherit",";border-top:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";box-sizing:border-box;display:flex;flex:0 0 auto;justify-content:flex-end;padding:").concat(e.padding||"inherit","}\n\n.dNoYT_enfx{background:").concat(e.inverseBackground||"inherit",";border-top:").concat(e.borderWidth||"inherit"," solid ").concat(e.inverseBorderColor||"inherit","}")},root:"dNoYT_bGBk",inverse:"dNoYT_enfx"}
var re=(V=Object(M["a"])(),$=Object(B["j"])(K,oe),V(ee=$(ee=(te=ne=function(e){Object(c["a"])(t,e)
var n=Object(d["a"])(t)
function t(){Object(a["a"])(this,t)
return n.apply(this,arguments)}Object(i["a"])(t,[{key:"render",value:function(){var e
var n=this.props,t=n.children,a=n.variant,i=Object(o["a"])(n,["children","variant"])
var c=(e={},Object(r["a"])(e,oe.root,true),Object(r["a"])(e,oe.inverse,"inverse"===a),e)
return l.a.createElement("div",Object.assign({className:h()(c)},Object(m["b"])(i)),t)}}])
t.displayName="ModalFooter"
return t}(s["Component"]),ne.propTypes={children:f.a.node,variant:f.a.oneOf(["default","inverse"])},ne.defaultProps={variant:"default",children:null},te))||ee)||ee)
var ae=function(e){var n=e.colors,t=e.borders,o=e.breakpoints,r=e.shadows,a=e.stacking,i=e.typography
return{fontFamily:i.fontFamily,textColor:n.textDarkest,background:n.backgroundLightest,borderColor:n.borderMedium,borderRadius:t.radiusMedium,inverseBackground:n.backgroundBrandSecondary,inverseTextColor:n.textLightest,autoMinWidth:o.xSmall,smallMaxWidth:o.small,mediumMaxWidth:o.medium,largeMaxWidth:o.large,boxShadow:r.depth3,zIndex:a.topmost}}
var ie,ce,de,se,le
var ue={componentId:"fdyuz",template:function(e){return"\n\n.fdyuz_bGBk{background:".concat(e.background||"inherit",";border:0.0625rem solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";box-shadow:").concat(e.boxShadow||"inherit",";box-sizing:border-box;color:").concat(e.textColor||"inherit",";display:flex;flex-direction:column;font-family:").concat(e.fontFamily||"inherit",";min-width:1px;position:relative}\n\n.fdyuz_bGBk.fdyuz_eoSs{display:block;overflow:auto}\n\n.fdyuz_enfx{background:").concat(e.inverseBackground||"inherit",";color:").concat(e.inverseTextColor||"inherit","}\n\n.fdyuz_uUeq,.fdyuz_cMDj,.fdyuz_ycrn,.fdyuz_doqw{max-height:95%;max-width:95%}\n\n.fdyuz_uUeq.fdyuz_eoSs,.fdyuz_cMDj.fdyuz_eoSs,.fdyuz_ycrn.fdyuz_eoSs,.fdyuz_doqw.fdyuz_eoSs{max-height:none}\n\n.fdyuz_uUeq.fdyuz_fHQo:not(.fdyuz_eoSs),.fdyuz_cMDj.fdyuz_fHQo:not(.fdyuz_eoSs),.fdyuz_ycrn.fdyuz_fHQo:not(.fdyuz_eoSs),.fdyuz_doqw.fdyuz_fHQo:not(.fdyuz_eoSs){transform:translateY(2.5%)}\n\n.fdyuz_uUeq{flex:0 1 auto;min-width:").concat(e.autoMinWidth||"inherit","}\n\n.fdyuz_doqw{flex:0 1 ").concat(e.smallMaxWidth||"inherit","}\n\n.fdyuz_ycrn{flex:0 1 ").concat(e.mediumMaxWidth||"inherit","}\n\n.fdyuz_cMDj{flex:0 1 ").concat(e.largeMaxWidth||"inherit","}\n\n.fdyuz_cMOR{border:none;border-radius:0;box-shadow:none;flex:1;height:100%;width:100%}\n\n.fdyuz_fuFB{display:block;height:100%;position:relative;width:100%}")},root:"fdyuz_bGBk",ie11:"fdyuz_eoSs",inverse:"fdyuz_enfx",auto:"fdyuz_uUeq",large:"fdyuz_cMDj",medium:"fdyuz_ycrn",small:"fdyuz_doqw","overflow--fit":"fdyuz_fHQo",fullscreen:"fdyuz_cMOR",constrainContext:"fdyuz_fuFB"}
var fe=(ie=Object(M["a"])(),ce=Object(B["j"])(ae,ue),ie(de=ce(de=(le=se=function(e){Object(c["a"])(t,e)
var n=Object(d["a"])(t)
function t(e){var o
Object(a["a"])(this,t)
o=n.call(this,e)
o.handlePortalOpen=function(e){o.DOMNode=e
e&&o.applyTheme(e)}
o.handleTransitionExited=function(){o.setState({transitioning:false})}
o.contentRef=function(e){o._content=e
"function"===typeof o.props.contentRef&&o.props.contentRef(e)}
o.state={transitioning:false}
return o}Object(i["a"])(t,[{key:"componentDidUpdate",value:function(e){e.open&&!this.props.open&&this.setState({transitioning:null!==e.transition})}},{key:"renderChildren",value:function(){var e=this.props,n=e.children,t=e.variant,o=e.overflow
return s["Children"].map(n,(function(e){if(!e)return
return Object(j["a"])(e,[Z])?Object(z["a"])(e,{variant:t,overflow:e.props.overflow||o}):Object(z["a"])(e,{variant:t})}))}},{key:"renderDialog",value:function(e){var n
var t=this.props,o=t.onDismiss,a=t.label,i=t.shouldCloseOnDocumentClick,c=t.shouldReturnFocus,d=t.liveRegion,s=t.size,u=t.constrain,f=t.as
var p="fullscreen"===s
var v=l.a.createElement(x,Object.assign({},Object(m["b"])(e),{as:f,open:true,label:a,defaultFocusElement:this.defaultFocusElement,shouldCloseOnDocumentClick:i,shouldCloseOnEscape:true,shouldContainFocus:true,shouldReturnFocus:c,liveRegion:d,onDismiss:o,className:h()((n={},Object(r["a"])(n,ue.root,true),Object(r["a"])(n,ue[s],true),Object(r["a"])(n,ue.inverse,"inverse"===this.props.variant),Object(r["a"])(n,ue["overflow--fit"],"fit"===this.props.overflow),Object(r["a"])(n,ue.ie11,this.ie11),n)),ref:this.contentRef}),this.renderChildren())
return l.a.createElement(D["a"],{placement:this.maskPlacement,fullscreen:"window"===u,theme:p?{borderRadius:"0em",borderWidth:"0em"}:null},v)}},{key:"render",value:function(){var e=this.props,n=e.open,t=e.onOpen,r=e.onClose,a=e.mountNode,i=e.insertAt,c=e.transition,d=e.onEnter,s=e.onEntering,u=e.onEntered,f=e.onExit,p=e.onExiting,h=e.onExited,v=e.constrain,b=(e.overflow,Object(o["a"])(e,["open","onOpen","onClose","mountNode","insertAt","transition","onEnter","onEntering","onEntered","onExit","onExiting","onExited","constrain","overflow"]))
var m=n||this.state.transitioning
return l.a.createElement(R["a"],{mountNode:a,insertAt:i,open:m,onOpen:Object(E["a"])(this.handlePortalOpen,t),onClose:r},m&&l.a.createElement(w["a"],{in:n,transitionOnMount:true,unmountOnExit:true,type:c,onEnter:d,onEntering:s,onEntered:u,onExit:f,onExiting:p,onExited:Object(E["a"])(this.handleTransitionExited,h),theme:this.ie11?{duration:"0s"}:null},"parent"===v?l.a.createElement("span",{className:ue.constrainContext},this.renderDialog(b)):this.renderDialog(b)))}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}},{key:"maskPlacement",get:function(){return C["a"]?"top":"fit"===this.props.overflow?"stretch":"center"}}])
t.displayName="Modal"
return t}(s["Component"]),se.propTypes={label:f.a.string.isRequired,children:_["a"].enforceOrder([G,Z,re],[G,Z],[Z,re],[Z]),as:f.a.elementType,size:f.a.oneOf(["auto","small","medium","large","fullscreen"]),variant:f.a.oneOf(["default","inverse"]),open:f.a.bool,defaultFocusElement:f.a.oneOfType([f.a.element,f.a.func]),shouldReturnFocus:f.a.bool,shouldCloseOnDocumentClick:f.a.bool,onOpen:f.a.func,onClose:f.a.func,onDismiss:f.a.func,contentRef:f.a.func,mountNode:f.a.oneOfType([k["a"],f.a.func]),insertAt:f.a.oneOf(["bottom","top"]),liveRegion:f.a.oneOfType([f.a.arrayOf(f.a.element),f.a.element,f.a.func]),transition:w["a"].propTypes.type,onEnter:f.a.func,onEntering:f.a.func,onEntered:f.a.func,onExit:f.a.func,onExiting:f.a.func,onExited:f.a.func,constrain:f.a.oneOf(["window","parent"]),overflow:f.a.oneOf(["scroll","fit"])},se.defaultProps={open:false,size:"auto",variant:"default",transition:"fade",onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},as:void 0,mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:true,shouldReturnFocus:true,defaultFocusElement:null,children:null,constrain:"window",overflow:"scroll"},se.Header=G,se.Body=Z,se.Footer=re,le))||de)||de)},eAd9:function(e,n,t){(function(n){var t=false
var o
var r
function a(){if("undefined"!==typeof o)return o
var e=document.documentElement
var n=document.createElement("div")
n.setAttribute("style","width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;")
e.appendChild(n)
o=n.offsetWidth-n.clientWidth
e.removeChild(n)
return o}function i(){return document.documentElement.scrollHeight>window.innerHeight}function c(e){if("undefined"===typeof document||t)return
var n=document.documentElement
r=window.pageYOffset
i()?n.style.width="calc(100% - "+a()+"px)":n.style.width="100%"
n.style.position="fixed"
n.style.top=-r+"px"
n.style.overflow="hidden"
t=true}function d(){if("undefined"===typeof document||!t)return
var e=document.documentElement
e.style.width=""
e.style.position=""
e.style.top=""
e.style.overflow=""
window.scroll(0,r)
t=false}function s(){if(t){d()
return}c()}var l={on:c,off:d,toggle:s}
"undefined"!==typeof e.exports?e.exports=l:n.noScroll=l})(this)},ysUD:function(e,n,t){"use strict"
t.d(n,"a",(function(){return E}))
var o=t("VTBJ")
var r=t("rePB")
var a=t("1OyB")
var i=t("vuIU")
var c=t("Ji7U")
var d=t("LK+K")
var s=t("q1tI")
var l=t.n(s)
var u=t("17x9")
var f=t.n(u)
var p=t("TSYQ")
var h=t.n(p)
var v=t("eAd9")
var b=t.n(v)
var m=t("J2CL")
var g=t("sQ3t")
var y=t("jtGx")
function O(e){var n=e.colors,t=e.borders,o=e.stacking
return{zIndex:o.topmost,background:"rgba(255, 255, 255, 0.75)",borderColor:"transparent",focusBorderColor:n.borderBrand,borderRadius:t.radiusMedium,borderWidth:t.widthSmall}}O.canvas=function(e){return{focusBorderColor:e["ic-brand-primary"]}}
var x,_,k,j
var z={componentId:"fvvQs",template:function(e){return"\n\n.fvvQs_bGBk{background:".concat(e.background||"inherit",";border:").concat(e.borderWidth||"inherit"," solid ").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";bottom:0;box-sizing:border-box;display:flex;justify-content:center;left:0;outline:none;overflow:auto;position:absolute;right:0;top:0;z-index:").concat(e.zIndex||"inherit","}\n\n.fvvQs_bGBk:focus{border-color:").concat(e.focusBorderColor||"inherit","}\n\n.fvvQs_cMOR{position:fixed}\n\n.fvvQs_dacV{align-items:flex-start}\n\n.fvvQs_cwzs{align-items:center}\n\n.fvvQs_cGWj{align-items:flex-end}\n\n.fvvQs_eFiI{align-items:stretch}")},root:"fvvQs_bGBk",fullscreen:"fvvQs_cMOR",top:"fvvQs_dacV",center:"fvvQs_cwzs",bottom:"fvvQs_cGWj",stretch:"fvvQs_eFiI"}
var E=(x=Object(m["j"])(O,z),x(_=(j=k=function(e){Object(c["a"])(t,e)
var n=Object(d["a"])(t)
function t(){var e
Object(a["a"])(this,t)
for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i]
e=n.call.apply(n,[this].concat(r))
e.handleElementRef=function(n){e.props.elementRef(n)}
e.contentRef=function(n){e._content=n}
return e}Object(i["a"])(t,[{key:"componentDidMount",value:function(){this.props.fullscreen&&b.a.on()}},{key:"componentWillUnmount",value:function(){this.props.fullscreen&&b.a.off()}},{key:"render",value:function(){var e
var n=Object(g["a"])(this.props.children,{ref:this.contentRef})
var a=h()((e={},Object(r["a"])(e,z.root,true),Object(r["a"])(e,z[this.props.placement],true),Object(r["a"])(e,z.fullscreen,this.props.fullscreen),e))
var i=Object(o["a"])({},Object(y["a"])(this.props,t.propTypes),{className:a,ref:this.handleElementRef})
if("function"===typeof this.props.onClick){i.onClick=this.props.onClick
i.tabIndex=-1}return l.a.createElement("span",i,n)}}])
t.displayName="Mask"
return t}(s["Component"]),k.propTypes={onDismiss:f.a.func,placement:f.a.oneOf(["top","center","bottom","stretch"]),fullscreen:f.a.bool,children:f.a.node,onClick:f.a.func,elementRef:f.a.func},k.defaultProps={placement:"center",fullscreen:false,onDismiss:void 0,children:null,onClick:void 0,elementRef:function(e){}},j))||_)}}])

//# sourceMappingURL=6-c-08af747633.js.map