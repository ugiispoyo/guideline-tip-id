import Core, { I_ArgsInit } from "./core";
import ReactDOM from "react-dom/client";

const { closeGuideline } = new Core();
const core = new Core();

function renderOnReact(content: any) {
    setTimeout(() => {
        const elm = document.getElementById('guideline_tip_id_wrap') as HTMLDivElement
        const guidelineContent = ReactDOM.createRoot(elm);
        guidelineContent.render(content);
    }, 50)
}

class init extends Core {
    constructor({ closeButton, dataGuideline }: I_ArgsInit) {
        super();
        core.allData = dataGuideline;
        core.isRenderBtnClose =
            typeof closeButton !== "undefined" ? closeButton : true;
        core.objDataActive = {
            dataID: dataGuideline[0].dataID,
            positionTip: dataGuideline[0].positionTip,
            content: dataGuideline[0].content,
        };

        window.onload = function () {
            core.initDocument();
            core.renderGuideline();
            renderOnReact(core.objDataActive.content);
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
        renderOnReact(core.objDataActive.content);
    }
}

export { closeGuideline, init, nextTip };
