import { C as Core, _ as __extends } from './core-af175579.js';
import require$$0 from 'react-dom';

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
    var elm = document.getElementById('guideline_tip_id_wrap');
    if (elm) {
        var guidelineContent = client.createRoot(elm);
        guidelineContent.render(content);
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
        renderOnReact(core.objDataActive.content);
    };
    initialGuideline.prototype.nextTip = function (id) {
        core.closeGuideline(true);
        core.initDocument();
        try {
            core.objDataActive = core.allData.find(function (val) { return val.dataID === id; });
            core.renderGuideline();
            renderOnReact(core.objDataActive.content);
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
