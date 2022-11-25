import Core, { I_ArgsInit } from "./core";
import Vue, { h } from "vue";

const { closeGuideline } = new Core();
const core = new Core();

function renderOnVue(content: any) {
    const elm = document.getElementById(
        "guideline_tip_id_wrap"
    ) as HTMLDivElement;
    if (elm) {
        const atr = elm.attributes;
        const atrTipWrap: any = {};
        for (let i = 0; i < atr.length; i++) {
            atrTipWrap[atr[i].name] = atr[i].nodeValue;
        }
        new Vue({
            el: "#guideline_tip_id_wrap",
            render() {
                return h("div", atrTipWrap, [h(content)]);
            },
        });
    }
}

class initialGuideline extends Core {
    constructor() {
        super();
    }

    init({ dataGuideline }: I_ArgsInit): void {
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
    }

    nextTip(id: string): void {
        core.closeGuideline(true);
        core.initDocument();
        try {
            core.objDataActive = core.allData.find((val) => val.dataID === id);
            core.renderGuideline();
            renderOnVue(core.objDataActive.content);
        } catch(e: any) {
            console.error("Error :", `${e.message}, Please check, your element "id" is exists!`);
        }
    }
}

const init = new initialGuideline().init;
const nextTip = new initialGuideline().nextTip;
export { closeGuideline, init, nextTip };
