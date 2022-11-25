import { C as Core, _ as __extends } from './core-af175579.js';
import Vue, { h } from 'vue';

var closeGuideline = new Core().closeGuideline;
var core = new Core();
function renderOnVue(content) {
    var elm = document.getElementById("guideline_tip_id_wrap");
    if (elm) {
        var atr = elm.attributes;
        var atrTipWrap_1 = {};
        for (var i = 0; i < atr.length; i++) {
            atrTipWrap_1[atr[i].name] = atr[i].nodeValue;
        }
        new Vue({
            el: "#guideline_tip_id_wrap",
            render: function () {
                return h("div", atrTipWrap_1, [h(content)]);
            },
        });
    }
}
var initialGuideline = /** @class */ (function (_super) {
    __extends(initialGuideline, _super);
    function initialGuideline() {
        return _super.call(this) || this;
    }
    initialGuideline.prototype.init = function (_a) {
        var dataGuideline = _a.dataGuideline;
        core.allData = dataGuideline;
        core.objDataActive = {
            dataID: dataGuideline[0].dataID,
            positionTip: dataGuideline[0].positionTip,
            content: dataGuideline[0].content,
        };
        core.closeGuideline(true);
        core.initDocument();
        core.renderGuideline();
        renderOnVue(core.objDataActive.content);
    };
    initialGuideline.prototype.nextTip = function (id) {
        core.closeGuideline(true);
        core.initDocument();
        try {
            core.objDataActive = core.allData.find(function (val) { return val.dataID === id; });
            core.renderGuideline();
            renderOnVue(core.objDataActive.content);
        }
        catch (e) {
            console.error("Error :", "".concat(e.message, ", Please check, your element \"id\" is exists!"));
        }
    };
    return initialGuideline;
}(Core));
var init = new initialGuideline().init;
var nextTip = new initialGuideline().nextTip;

export { closeGuideline, init, nextTip };
