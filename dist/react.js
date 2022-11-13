'use strict';

var require$$0 = require('react-dom');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "* {\n  box-sizing: border-box;\n}\n\n.backdrop_guideline-id {\n  width: 100vw;\n  height: 100%;\n  z-index: 9998;\n  background: rgba(0, 0, 0, 0.719);\n  top: 0px;\n  left: 0px;\n  position: fixed;\n}\n\n[data-tip=true] {\n  background: #fff;\n  z-index: 9999;\n  position: relative;\n  border-radius: 3px;\n  box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n}\n[data-tip=true] > .wrap_elm_ {\n  width: 100%;\n  display: block;\n  margin: auto;\n  background: transparent;\n  padding: 10px;\n}\n[data-tip=true] > .wrap_elm_ > * {\n  width: 100%;\n}\n\n/* Guideline */\n.guideline_tip {\n  z-index: 9999;\n  position: absolute;\n  background: #fff;\n  border-radius: 5px;\n  padding: 8px;\n  width: auto;\n  white-space: nowrap;\n  height: auto;\n  box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -webkit-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0px 1px 11px -3px rgba(0, 0, 0, 0.75);\n  /* Button Close */\n}\n.guideline_tip::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.guideline_tip.guideline_tip_left::after {\n  /* Triangle Left */\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-left: 10px solid white;\n  right: -10px;\n  top: 10%;\n}\n.guideline_tip.guideline_tip_right::after {\n  /* Triangle Right */\n  border-top: 10px solid transparent;\n  border-bottom: 10px solid transparent;\n  border-right: 10px solid white;\n  left: -10px;\n  top: 10%;\n}\n.guideline_tip.guideline_tip_top::after {\n  /* Triangle Down */\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  border-top: 10px solid white;\n  bottom: -10px;\n  left: 30px;\n}\n.guideline_tip.guideline_tip_bottom::after {\n  /* Triangle Top */\n  border: 10px solid transparent;\n  border-top: 0px;\n  border-bottom: 13px solid white;\n  top: -10px;\n  left: 30px;\n}\n.guideline_tip .btn_close_guideline_tip {\n  outline: none;\n  background: #fff;\n  border-radius: 50%;\n  border: 1px solid #ddd;\n  top: -10px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  cursor: pointer;\n}\n.guideline_tip .btn_close_guideline_tip > img {\n  width: 15px;\n  height: 15px;\n}\n\n@keyframes zoom-out {\n  0% {\n    transform: scale(2, 2);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}";
styleInject(css_248z);

/* Auto Scroll */
function autoScroll(offsetTopElm) {
    setTimeout(function () {
        if (offsetTopElm === 0) {
            window.scrollTo(0, 0);
        }
        else {
            window.scrollTo(0, offsetTopElm - 140);
        }
    }, 300);
}
var Core = /** @class */ (function () {
    function Core() {
    }
    Object.defineProperty(Core.prototype, "allData", {
        get: function () {
            return this._allData;
        },
        /* allData */
        set: function (data) {
            this._allData = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "objDataActive", {
        get: function () {
            return this._objDataActive;
        },
        /* objDataActive */
        set: function (objDataActive) {
            this._objDataActive = objDataActive;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "isRenderBtnClose", {
        get: function () {
            return this._isRenderBtnClose;
        },
        /* isRenderBtnClose */
        set: function (isRenderBtnClose) {
            this._isRenderBtnClose = isRenderBtnClose;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Core.prototype, "html", {
        get: function () {
            return this._html;
        },
        /* html init */
        set: function (html) {
            this._html = html;
        },
        enumerable: false,
        configurable: true
    });
    /* Init Document */
    Core.prototype.initDocument = function () {
        var _a, _b;
        var backdrop = document === null || document === void 0 ? void 0 : document.createElement("div");
        backdrop.setAttribute("class", "backdrop_guideline-id");
        (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.appendChild(backdrop);
        this.html = (_b = document === null || document === void 0 ? void 0 : document.getElementsByTagName("html")) === null || _b === void 0 ? void 0 : _b[0];
        this.html.style["scroll-behavior"] = "smooth";
    };
    /* closeGuideline */
    Core.prototype.closeGuideline = function (isNext) {
        var _a, _b;
        var _c, _d, _e;
        var backdrop = document.getElementsByClassName("backdrop_guideline-id");
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].remove();
        }
        var article = (_d = (_c = document.querySelectorAll('[class="wrap_elm_"]')) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.children;
        for (var i = 0; i < (article === null || article === void 0 ? void 0 : article.length); i++) {
            var del = article === null || article === void 0 ? void 0 : article[i];
            (_a = del.parentElement).replaceWith.apply(_a, del.parentElement.childNodes);
            (_b = del.parentElement).replaceWith.apply(_b, del.parentElement.childNodes);
        }
        (_e = document.getElementsByClassName("guideline_tip")[0]) === null || _e === void 0 ? void 0 : _e.remove();
        autoScroll(0);
        if (!isNext) {
            this === null || this === void 0 ? void 0 : this.html.removeAttribute("style");
        }
    };
    /* Render guideline */
    Core.prototype.renderGuideline = function () {
        if (typeof this.objDataActive !== "undefined") {
            var _a = this.objDataActive, dataID = _a.dataID, positionTip = _a.positionTip;
            var article = document.getElementById(dataID);
            var widthElm = article.offsetWidth + 20;
            var heightElm = article.offsetHeight + 20;
            var offsetTopElm = article.offsetTop;
            /* Auto Scroll */
            autoScroll(offsetTopElm);
            /* Wrap element child of the data-tip element */
            var wrapElm = document.createElement("div");
            wrapElm.setAttribute("class", "wrap_elm_");
            article.parentNode.replaceChild(wrapElm, article);
            wrapElm.appendChild(article);
            /* Div data-tip */
            var activeElm = document.createElement("div");
            activeElm.setAttribute("id", "data_tip");
            activeElm.setAttribute("data-tip", "true");
            activeElm.style.width = "".concat(widthElm, "px");
            activeElm.style.height = "".concat(heightElm, "px");
            wrapElm.parentNode.replaceChild(activeElm, wrapElm);
            activeElm.appendChild(wrapElm);
            /* Wrapper Guideline Tip */
            this.guidelineTip = document.createElement("div");
            this.guidelineTip.setAttribute("id", "guideline_tip_id_wrap");
            this.guidelineTip.setAttribute("class", "guideline_tip guideline_tip_".concat(positionTip));
            switch (positionTip) {
                case "left":
                    this.guidelineTip.style.top = "5px";
                    this.guidelineTip.style.right = "".concat(widthElm + 10, "px");
                    break;
                case "right":
                    this.guidelineTip.style.top = "5px";
                    this.guidelineTip.style.left = "".concat(widthElm + 10, "px");
                    break;
                case "top":
                    this.guidelineTip.style.bottom = "".concat(heightElm + 10, "px");
                    this.guidelineTip.style.left = "5px";
                    break;
                case "bottom":
                    this.guidelineTip.style.top = "".concat(heightElm + 10, "px");
                    this.guidelineTip.style.left = "5px";
                    break;
            }
            activeElm.appendChild(this.guidelineTip);
        }
    };
    return Core;
}());

var client = {};

var m = require$$0;
if (process.env.NODE_ENV === 'production') {
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  client.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  client.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}

var closeGuideline = new Core().closeGuideline;
var core = new Core();
function renderOnReact(content) {
    setTimeout(function () {
        var elm = document.getElementById('guideline_tip_id_wrap');
        if (elm) {
            var guidelineContent = client.createRoot(elm);
            guidelineContent.render(content);
        }
    }, 50);
}
var init = /** @class */ (function (_super) {
    __extends(init, _super);
    function init(_a) {
        var dataGuideline = _a.dataGuideline;
        var _this = _super.call(this) || this;
        core.allData = dataGuideline;
        core.objDataActive = {
            dataID: dataGuideline[0].dataID,
            positionTip: dataGuideline[0].positionTip,
            content: dataGuideline[0].content,
        };
        core.closeGuideline(true);
        core.initDocument();
        core.renderGuideline();
        renderOnReact(core.objDataActive.content);
        return _this;
    }
    return init;
}(Core));
var nextTip = /** @class */ (function (_super) {
    __extends(nextTip, _super);
    function nextTip(id) {
        var _this = _super.call(this) || this;
        core.closeGuideline(true);
        core.initDocument();
        core.objDataActive = core.allData.find(function (val) { return val.dataID === id; });
        core.renderGuideline();
        renderOnReact(core.objDataActive.content);
        return _this;
    }
    return nextTip;
}(Core));

exports.closeGuideline = closeGuideline;
exports.init = init;
exports.nextTip = nextTip;
