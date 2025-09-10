import Core, { I_ArgsInit } from "./core";
import ReactDOM from "react-dom/client";

const { closeGuideline } = new Core();
const core = new Core();

function renderOnReact(content: any) {
  const elm = document.getElementById(
    "guideline_tip_id_wrap"
  ) as HTMLDivElement;
  if (elm) {
    const guidelineContent = ReactDOM.createRoot(elm);
    guidelineContent.render(content);
  }
}

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

    core.closeGuideline(true);
    core.initDocument();
    core.renderGuideline();
    renderOnReact(core.objDataActive.content);
  }

  nextTip(id: string): void {
    core.closeGuideline(true);
    core.initDocument();
    try {
      core.objDataActive = core.allData.find((val) => val.dataID === id);
      core.renderGuideline();
      renderOnReact(core.objDataActive.content);
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
