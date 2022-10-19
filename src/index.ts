import "./style/style.scss";
import IClose from './images/xmark.svg?url';

const classBody = document.body
classBody.setAttribute('class', 'body-guideline-id')

const dataID = "article" as string
const positionTip = "right" as string;

const article = document.getElementById(dataID) as HTMLDivElement;
const widthElm: number = article.offsetWidth + 20;
const heightElm: number = article.offsetHeight + 20;
const offsetTopElm: number = article.offsetTop;

/* Auto Scroll */
window.onload = function () {
    const html = document.getElementsByTagName("html")[0] as any;
    html.style["scroll-behavior"] = "smooth";

    setTimeout(() => {
        window.scrollTo(0, offsetTopElm - 140);
        html.removeAttribute("style");
    }, 500);
};

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
const btnClose = document.createElement('button') as HTMLButtonElement
btnClose.setAttribute('class', 'btn_close_guideline_tip')
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
const imgClose = document.createElement('img') as HTMLImageElement
imgClose.setAttribute('src', IClose)
btnClose.appendChild(imgClose)
btnClose.addEventListener('click', () => closeGuideline())

guidelineTip.appendChild(btnClose)

const closeGuideline = () => {
    classBody.removeAttribute('class')
    const articleDiv = document.getElementById(dataID) as any
    article.parentElement.replaceWith(...articleDiv.parentElement.childNodes);
    article.parentElement.replaceWith(...articleDiv.parentElement.childNodes);
    guidelineTip.remove()
}