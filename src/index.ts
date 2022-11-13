import Core, { I_ArgsInit } from "./core";

const { closeGuideline } = new Core();
const core = new Core();

class init extends Core {
    constructor({ dataGuideline }: I_ArgsInit) {
        super();
        core.allData = dataGuideline;
        core.objDataActive = {
            dataID: dataGuideline[0].dataID,
            positionTip: dataGuideline[0].positionTip,
            content: dataGuideline[0].content,
        };

        window.onload = function () {
            core.initDocument();
            core.renderGuideline();
            core.guidelineTip.innerHTML = dataGuideline[0].content;
        };
    }

}

class nextTip extends Core {
    constructor(id: string) {
        super();
        core.closeGuideline(true);
        core.initDocument();
        core.objDataActive = core.allData.find((val) => val.dataID === id);
        core.renderGuideline();
        core.guidelineTip.innerHTML = core.objDataActive.content;
    }
}

export { closeGuideline, init, nextTip };
