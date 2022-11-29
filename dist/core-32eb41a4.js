var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(e,t)};function __extends(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function styleInject(e,t){var n,i,t=(t=void 0===t?{}:t).insertAt;e&&"undefined"!=typeof document&&(n=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("style")).type="text/css","top"===t&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e)))}var css_248z='* {\n  box-sizing: border-box;\n}\n\n.backdrop_guideline-id {\n  width: 100vw;\n  height: 100%;\n  z-index: 9998;\n  background: rgba(0, 0, 0, 0.719);\n  top: 0px;\n  left: 0px;\n  position: fixed;\n}\n\n[data-tip=true] {\n  background: #fff;\n  z-index: 9999;\n  position: relative;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n}\n[data-tip=true] > .wrap_elm_ {\n  width: 100%;\n  display: block;\n  margin: auto;\n  background: transparent;\n}\n[data-tip=true] > .wrap_elm_ > * {\n  width: 100%;\n}\n\n/* Guideline */\n.guideline_tip {\n  z-index: 9999;\n  position: absolute;\n  background: #fff;\n  border-radius: 5px;\n  padding: 8px;\n  margin: 8px;\n  width: auto;\n  white-space: nowrap;\n  height: auto;\n  box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  /* Button Close */\n}\n.guideline_tip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.guideline_tip.guideline_tip_left::after {\n  /* Triangle Left */\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid white;\n  right: -10px;\n  top: 10%;\n}\n.guideline_tip.guideline_tip_right::after {\n  /* Triangle Right */\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid white;\n  left: -10px;\n  top: 10%;\n}\n.guideline_tip.guideline_tip_top::after {\n  /* Triangle Down */\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid white;\n  bottom: -10px;\n  left: 30px;\n}\n.guideline_tip.guideline_tip_bottom::after {\n  /* Triangle Top */\n  border: 10px solid transparent;\n  border-top: 0px;\n  border-bottom: 13px solid white;\n  top: -10px;\n  left: 30px;\n}\n.guideline_tip .btn_close_guideline_tip {\n  outline: none;\n  background: #fff;\n  border-radius: 50%;\n  border: 1px solid #ddd;\n  top: -10px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  cursor: pointer;\n}\n.guideline_tip .btn_close_guideline_tip > img {\n  width: 15px;\n  height: 15px;\n}\n\n@keyframes zoom-out {\n  0% {\n    transform: scale(2, 2);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}';function autoScroll(e){setTimeout(function(){0===e?window.scrollTo(0,0):window.scrollTo(0,e-140)},300)}styleInject(css_248z);var Core=function(){function e(){}return Object.defineProperty(e.prototype,"allData",{get:function(){return this._allData},set:function(e){this._allData=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"objDataActive",{get:function(){return this._objDataActive},set:function(e){this._objDataActive=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRenderBtnClose",{get:function(){return this._isRenderBtnClose},set:function(e){this._isRenderBtnClose=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"html",{get:function(){return this._html},set:function(e){this._html=e},enumerable:!1,configurable:!0}),e.prototype.initDocument=function(){var e,t=null===document||void 0===document?void 0:document.createElement("div");t.setAttribute("class","backdrop_guideline-id"),null!=(e=null===document||void 0===document?void 0:document.body)&&e.appendChild(t),this.html=null==(e=null===document||void 0===document?void 0:document.getElementsByTagName("html"))?void 0:e[0],this.html.style["scroll-behavior"]="smooth"},e.prototype.closeGuideline=function(e){for(var t,n,i=document.getElementsByClassName("backdrop_guideline-id"),o=0;o<i.length;o++)i[o].remove();for(var r=null==(n=null==(n=document.querySelectorAll('[class="wrap_elm_"]'))?void 0:n[0])?void 0:n.children,o=0;o<(null==r?void 0:r.length);o++){var l=null==r?void 0:r[o];(t=l.parentElement).replaceWith.apply(t,l.parentElement.childNodes),(t=l.parentElement).replaceWith.apply(t,l.parentElement.childNodes)}null!=(n=document.getElementsByClassName("guideline_tip")[0])&&n.remove(),autoScroll(0),e||null!=this&&this.html.removeAttribute("style")},e.prototype.renderGuideline=function(){if(void 0!==this.objDataActive){var e=this.objDataActive,t=e.dataID,e=e.positionTip,t=document.getElementById(t),n=t.offsetWidth,i=t.offsetHeight,o=(autoScroll(t.offsetTop),document.createElement("div")),t=(o.setAttribute("class","wrap_elm_"),t.parentNode.replaceChild(o,t),o.appendChild(t),document.createElement("div"));switch(t.setAttribute("id","data_tip"),t.setAttribute("data-tip","true"),t.style.width="".concat(n,"px"),t.style.height="".concat(i,"px"),o.parentNode.replaceChild(t,o),t.appendChild(o),this.guidelineTip=document.createElement("div"),this.guidelineTip.setAttribute("id","guideline_tip_id_wrap"),this.guidelineTip.setAttribute("class","guideline_tip guideline_tip_".concat(e)),e){case"left":this.guidelineTip.style.top="5px",this.guidelineTip.style.right="".concat(n+10,"px"),this.guidelineTip.style.marginRight="0px",this.guidelineTip.style.marginTop="3px";break;case"right":this.guidelineTip.style.top="5px",this.guidelineTip.style.left="".concat(n+10,"px"),this.guidelineTip.style.marginLeft="0px",this.guidelineTip.style.marginTop="3px";break;case"top":this.guidelineTip.style.bottom="".concat(i+10,"px"),this.guidelineTip.style.left="5px",this.guidelineTip.style.marginBottom="0px",this.guidelineTip.style.marginLeft="3px";break;case"bottom":this.guidelineTip.style.top="".concat(i+10,"px"),this.guidelineTip.style.left="5px",this.guidelineTip.style.marginTop="0px",this.guidelineTip.style.marginLeft="3px"}t.appendChild(this.guidelineTip)}},e}();export{Core as C,__extends as _};