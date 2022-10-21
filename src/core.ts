import "./style/style.scss";
import IClose from "./images/xmark.svg?url";

export interface I_Args {
    dataID: string;
    positionTip: string;
    content?: any;
}

export interface I_ArgsInit {
    closeButton?: boolean | true;
    dataGuideline: Array<I_Args>;
}

/* Auto Scroll */
function autoScroll(offsetTopElm: number): void {
    setTimeout(() => {
        if (offsetTopElm === 0) {
            window.scrollTo(0, 0);
        } else {
            window.scrollTo(0, offsetTopElm - 140);
        }
    }, 300);
}

class Core {
    guidelineTip: HTMLDivElement;
    _html: any;
    _allData: Array<I_Args>;
    _objDataActive: I_Args;
    _isRenderBtnClose: boolean | true;

    /* allData */
    set allData(data: Array<I_Args>) {
        this._allData = data;
    }
    get allData() {
        return this._allData;
    }

    /* objDataActive */
    set objDataActive(objDataActive: I_Args) {
        this._objDataActive = objDataActive;
    }
    get objDataActive() {
        return this._objDataActive;
    }

    /* isRenderBtnClose */
    set isRenderBtnClose(isRenderBtnClose: boolean | true) {
        this._isRenderBtnClose = isRenderBtnClose;
    }
    get isRenderBtnClose() {
        return this._isRenderBtnClose;
    }

    /* html init */
    set html(html: any) {
        this._html = html;
    }
    get html(): any {
        return this._html;
    }

    /* Init Document */
    initDocument(): void {
        const classBody = document.body;
        classBody.setAttribute("class", "body-guideline-id");
        this.html = document.getElementsByTagName("html")[0] as any;
        this.html.style["scroll-behavior"] = "smooth";
    }

    /* closeGuideline */
    closeGuideline(isNext?: boolean | false): void {
        document.body.removeAttribute("class");
        const article = document.querySelectorAll('[class="wrap_elm_"]')[0]
            .children[0] as any;
        article.parentElement.replaceWith(...article.parentElement.childNodes);
        article.parentElement.replaceWith(...article.parentElement.childNodes);
        document.getElementsByClassName("guideline_tip")[0].remove();
        autoScroll(0);
        if (!isNext) {
            this?.html.removeAttribute("style");
        }
    }

    /* Render guideline */
    renderGuideline(): void {
        const { dataID, positionTip } = this.objDataActive;

        const article = document.getElementById(dataID) as HTMLDivElement;
        const widthElm: number = article.offsetWidth + 20;
        const heightElm: number = article.offsetHeight + 20;
        const offsetTopElm: number = article.offsetTop;

        /* Auto Scroll */
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
        this.guidelineTip = document.createElement("div") as HTMLDivElement;
        this.guidelineTip.setAttribute("id", "guideline_tip_id_wrap");
        this.guidelineTip.setAttribute(
            "class",
            `guideline_tip guideline_tip_${positionTip}`
        );

        switch (positionTip) {
            case "left":
                this.guidelineTip.style.top = `5px`;
                this.guidelineTip.style.right = `${widthElm + 10}px`;
                break;
            case "right":
                this.guidelineTip.style.top = `5px`;
                this.guidelineTip.style.left = `${widthElm + 10}px`;
                break;
            case "top":
                this.guidelineTip.style.bottom = `${heightElm + 10}px`;
                this.guidelineTip.style.left = `5px`;
                break;
            case "bottom":
                this.guidelineTip.style.top = `${heightElm + 10}px`;
                this.guidelineTip.style.left = `5px`;
                break;
        }
        activeElm.appendChild(this.guidelineTip);

        /* Button Close Guideline */
        const btnClose = document.createElement("button") as any;
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
            this.closeGuideline();
        });

        if (this.isRenderBtnClose) {
            this.guidelineTip.appendChild(btnClose);
        }
    }
}

export default Core;
