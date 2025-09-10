import Core, { I_ArgsInit } from "./core";

const { closeGuideline } = new Core();
const core = new Core();

class initialGuideline extends Core {
  constructor() {
    super();
  }

  init({ dataGuideline, withPadding, opacityBackdrop }: I_ArgsInit) {
    core.allData = dataGuideline;
    core.custom = {
      withPadding: Boolean(withPadding),
      opacityBackdrop: opacityBackdrop || 0.6,
    };
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

  nextTip(id: string) {
    core.closeGuideline(true);
    core.initDocument();
    try {
      core.objDataActive = core.allData.find((val) => val.dataID === id);
      core.renderGuideline();
      core.guidelineTip.innerHTML = core.objDataActive.content;
    } catch (e: any) {
      console.error(
        "Error :",
        `${e.message}, Please check, your element "id" is exists!`
      );
    }
  }
}

const init = new initialGuideline().init;
const nextTip = new initialGuideline().nextTip;
export { closeGuideline, init, nextTip };
