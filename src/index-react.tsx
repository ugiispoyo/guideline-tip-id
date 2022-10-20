import "./style/style.scss";
import IClose from "./images/xmark.svg?url";
import initReact from './react'

let renderBtnClose = true;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let allData: Array<I_Args> = [];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let objDataActive: I_Args = {
    dataID: "",
    positionTip: "",
    content: "",
};

interface I_ArgsInit {
    closeButton?: boolean | true;
    dataGuideline: Array<I_Args>;
}

interface I_Args {
    dataID: string;
    positionTip: string;
    content?: any;
}

const classBody = document.body;
const html = document.getElementsByTagName("html")[0] as any;
html.style["scroll-behavior"] = "smooth";

/* Auto scroll */
function autoScroll(offsetTopElm: number) {
    setTimeout(() => {
        if (offsetTopElm === 0) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, offsetTopElm - 140);
        }
    }, 300);
}

/* Render Tip */
function renderGuideline() {
    const { dataID, positionTip } = objDataActive;

    classBody.setAttribute("class", "body-guideline-id");

    const article = document.getElementById(dataID) as HTMLDivElement;
    const widthElm: number = article.offsetWidth + 20;
    const heightElm: number = article.offsetHeight + 20;
    const offsetTopElm: number = article.offsetTop;

    /* Auto Scroll */
    const html = document.getElementsByTagName("html")[0] as any;
    html.style["scroll-behavior"] = "smooth";
    autoScroll(offsetTopElm);

    /* Wrap element child of the data-tip element */
    const wrapElm = document.createElement("div") as HTMLDivElement;
    wrapElm.setAttribute("class", "wrap_elm_");
    article.parentNode.replaceChild(wrapElm, article);
    wrapElm.appendChild(article);

    /* Div data-tip */
    const activeElm = document.createElement("div") as HTMLDivElement;
    activeElm.setAttribute("id", "data_tip");
    activeElm.setAttribute("data-tip", "true");
    activeElm.style.width = `${widthElm}px`;
    activeElm.style.height = `${heightElm}px`;
    wrapElm.parentNode.replaceChild(activeElm, wrapElm);
    activeElm.appendChild(wrapElm);

    /* Wrapper Guideline Tip */
    const guidelineTip = document.createElement("div") as HTMLDivElement;
    guidelineTip.setAttribute("id", "guideline_tip_id_wrap");
    guidelineTip.setAttribute(
        "class",
        `guideline_tip guideline_tip_${positionTip}`
    );

    switch (positionTip) {
        case "left":
            guidelineTip.style.top = `10%`;
            guidelineTip.style.right = `${widthElm + 10}px`;
            break;
        case "right":
            guidelineTip.style.top = `10%`;
            guidelineTip.style.left = `${widthElm + 10}px`;
            break;
        case "top":
            guidelineTip.style.bottom = `${heightElm + 10}px`;
            guidelineTip.style.left = `10%`;
            break;
        case "bottom":
            guidelineTip.style.top = `${heightElm + 10}px`;
            guidelineTip.style.left = `10%`;
            break;
    }
    activeElm.appendChild(guidelineTip);

    /* Button Close Guideline */
    const btnClose = document.createElement("button") as HTMLButtonElement;
    btnClose.setAttribute("class", "btn_close_guideline_tip");
    switch (positionTip) {
        case "left":
            btnClose.style.left = `-10px`;
            break;
        case "right":
            btnClose.style.right = `-10px`;
            break;
        default:
            btnClose.style.right = `-10px`;
            break;
    }
    const imgClose = document.createElement("img") as HTMLImageElement;
    imgClose.setAttribute("src", IClose);
    btnClose.appendChild(imgClose);
    btnClose.addEventListener("click", function () {
        closeGuideline();
    });

    if (renderBtnClose) {
        guidelineTip.appendChild(btnClose);
    }
}

/* Initial */
function init({ closeButton, dataGuideline }: I_ArgsInit) {
    allData = dataGuideline;
    renderBtnClose = typeof closeButton !== "undefined" ? closeButton : true;
    objDataActive = {
        dataID: dataGuideline[0].dataID,
        positionTip: dataGuideline[0].positionTip,
        content: dataGuideline[0].content,
    };
    window.onload = () => {
        renderGuideline();
        initReact(dataGuideline[0].content)
    };
}

/* Next Tip */
function nextTip(id: string): void {
    closeGuideline();
    objDataActive = allData.find((val) => val.dataID === id);
    renderGuideline();
    initReact(objDataActive.content)
}

/* Close Tip */
function closeGuideline(): void {
    document.body.removeAttribute("class");
    const article = document.querySelectorAll('[class="wrap_elm_"]')[0]
        .children[0] as any;
    article.parentElement.replaceWith(...article.parentElement.childNodes);
    article.parentElement.replaceWith(...article.parentElement.childNodes);
    document.getElementsByClassName("guideline_tip")[0].remove();
    autoScroll(0);
    html.removeAttribute("style");
}

export { init, closeGuideline, nextTip };