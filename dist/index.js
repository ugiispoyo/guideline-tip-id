!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.guidelineTipId=t():e.guidelineTipId=t()}(self,(()=>(()=>{"use strict";var e={578:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(81),n=i.n(o),r=i(645),a=i.n(r)()(n());a.push([e.id,'*{box-sizing:border-box}.backdrop_guideline-id{width:100vw;height:100%;z-index:9998;background:rgba(0,0,0,.719);top:0px;left:0px;position:fixed}[data-tip=true]{background:#fff;z-index:9999;position:relative;border-radius:3px;box-shadow:0px 1px 11px -3px rgba(0,0,0,.75);-webkit-box-shadow:0px 1px 11px -3px rgba(0,0,0,.75);-moz-box-shadow:0px 1px 11px -3px rgba(0,0,0,.75)}[data-tip=true]>.wrap_elm_{width:100%;display:block;margin:auto;background:rgba(0,0,0,0)}[data-tip=true]>.wrap_elm_>*{width:100%}.guideline_tip{z-index:9999;position:absolute;background:#fff;border-radius:5px;padding:8px;width:auto;white-space:nowrap;height:auto;box-shadow:0px 1px 11px -3px rgba(0,0,0,.75);-webkit-box-shadow:0px 1px 11px -3px rgba(0,0,0,.75);-moz-box-shadow:0px 1px 11px -3px rgba(0,0,0,.75)}.guideline_tip::after{content:"";width:0;height:0;position:absolute}.guideline_tip.guideline_tip_left::after{border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);border-left:10px solid #fff;right:-10px;top:10%}.guideline_tip.guideline_tip_right::after{border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);border-right:10px solid #fff;left:-10px;top:10%}.guideline_tip.guideline_tip_top::after{border-left:10px solid rgba(0,0,0,0);border-right:10px solid rgba(0,0,0,0);border-top:10px solid #fff;bottom:-10px;left:30px}.guideline_tip.guideline_tip_bottom::after{border:10px solid rgba(0,0,0,0);border-top:0px;border-bottom:13px solid #fff;top:-10px;left:30px}.guideline_tip .btn_close_guideline_tip{outline:none;background:#fff;border-radius:50%;border:1px solid #ddd;top:-10px;width:20px;height:20px;display:flex;align-items:center;justify-content:center;position:absolute;cursor:pointer}.guideline_tip .btn_close_guideline_tip>img{width:15px;height:15px}@keyframes zoom-out{0%{transform:scale(2, 2)}100%{transform:scale(1, 1)}}',""]);const l=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",o=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),o&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),o&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,o,n,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var p=this[l][0];null!=p&&(a[p]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);o&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),i&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=i):s[2]=i),n&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=n):s[4]="".concat(n)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function i(e){for(var i=-1,o=0;o<t.length;o++)if(t[o].identifier===e){i=o;break}return i}function o(e,o){for(var r={},a=[],l=0;l<e.length;l++){var p=e[l],d=o.base?p[0]+o.base:p[0],s=r[d]||0,c="".concat(d," ").concat(s);r[d]=s+1;var u=i(c),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)t[u].references++,t[u].updater(f);else{var b=n(f,o);o.byIndex=l,t.splice(l,0,{identifier:c,updater:b,references:1})}a.push(c)}return a}function n(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,n){var r=o(e=e||[],n=n||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var l=i(r[a]);t[l].references--}for(var p=o(e,n),d=0;d<r.length;d++){var s=i(r[d]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}r=p}}},569:e=>{var t={};e.exports=function(e,i){var o=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,n&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var r=i.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nc=void 0;var o={};return(()=>{i.r(o),i.d(o,{closeGuideline:()=>y,init:()=>T,nextTip:()=>j});var e=i(379),t=i.n(e),n=i(795),r=i.n(n),a=i(569),l=i.n(a),p=i(565),d=i.n(p),s=i(216),c=i.n(s),u=i(589),f=i.n(u),b=i(578),h={};function g(e){setTimeout((function(){0===e?window.scrollTo(0,0):window.scrollTo(0,e-140)}),300)}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=c(),t()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;const m=function(){function e(){}return Object.defineProperty(e.prototype,"allData",{get:function(){return this._allData},set:function(e){this._allData=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"objDataActive",{get:function(){return this._objDataActive},set:function(e){this._objDataActive=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRenderBtnClose",{get:function(){return this._isRenderBtnClose},set:function(e){this._isRenderBtnClose=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"html",{get:function(){return this._html},set:function(e){this._html=e},enumerable:!1,configurable:!0}),e.prototype.initDocument=function(){var e,t,i=null===document||void 0===document?void 0:document.createElement("div");i.setAttribute("class","backdrop_guideline-id"),null===(e=null===document||void 0===document?void 0:document.body)||void 0===e||e.appendChild(i),this.html=null===(t=null===document||void 0===document?void 0:document.getElementsByTagName("html"))||void 0===t?void 0:t[0],this.html.style["scroll-behavior"]="smooth"},e.prototype.closeGuideline=function(e){for(var t,i,o,n,r,a=document.getElementsByClassName("backdrop_guideline-id"),l=0;l<a.length;l++)a[l].remove();var p=null===(n=null===(o=document.querySelectorAll('[class="wrap_elm_"]'))||void 0===o?void 0:o[0])||void 0===n?void 0:n.children;for(l=0;l<(null==p?void 0:p.length);l++){var d=null==p?void 0:p[l];(t=d.parentElement).replaceWith.apply(t,d.parentElement.childNodes),(i=d.parentElement).replaceWith.apply(i,d.parentElement.childNodes)}null===(r=document.getElementsByClassName("guideline_tip")[0])||void 0===r||r.remove(),g(0),e||null==this||this.html.removeAttribute("style")},e.prototype.renderGuideline=function(){if(void 0!==this.objDataActive){var e=this.objDataActive,t=e.dataID,i=e.positionTip,o=document.getElementById(t),n=o.offsetWidth,r=o.offsetHeight;g(o.offsetTop);var a=document.createElement("div");a.setAttribute("class","wrap_elm_"),o.parentNode.replaceChild(a,o),a.appendChild(o);var l=document.createElement("div");switch(l.setAttribute("id","data_tip"),l.setAttribute("data-tip","true"),l.style.width="".concat(n,"px"),l.style.height="".concat(r,"px"),a.parentNode.replaceChild(l,a),l.appendChild(a),this.guidelineTip=document.createElement("div"),this.guidelineTip.setAttribute("id","guideline_tip_id_wrap"),this.guidelineTip.setAttribute("class","guideline_tip guideline_tip_".concat(i)),i){case"left":this.guidelineTip.style.top="5px",this.guidelineTip.style.right="".concat(n+10,"px");break;case"right":this.guidelineTip.style.top="5px",this.guidelineTip.style.left="".concat(n+10,"px");break;case"top":this.guidelineTip.style.bottom="".concat(r+10,"px"),this.guidelineTip.style.left="5px";break;case"bottom":this.guidelineTip.style.top="".concat(r+10,"px"),this.guidelineTip.style.left="5px"}l.appendChild(this.guidelineTip)}},e}();var x,v=(x=function(e,t){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},x(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function i(){this.constructor=e}x(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),y=(new m).closeGuideline,_=new m,w=function(e){function t(){return e.call(this)||this}return v(t,e),t.prototype.init=function(e){var t=e.dataGuideline;_.allData=t,_.objDataActive={dataID:t[0].dataID,positionTip:t[0].positionTip,content:t[0].content},window.onload=function(){_.initDocument(),_.renderGuideline(),_.guidelineTip.innerHTML=t[0].content}},t.prototype.nextTip=function(e){_.closeGuideline(!0),_.initDocument();try{_.objDataActive=_.allData.find((function(t){return t.dataID===e})),_.renderGuideline(),_.guidelineTip.innerHTML=_.objDataActive.content}catch(e){console.error("Error :","".concat(e.message,', Please check, your element "id" is exists!'))}},t}(m),T=(new w).init,j=(new w).nextTip})(),o})()));