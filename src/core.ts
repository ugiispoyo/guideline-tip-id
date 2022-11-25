import "./style/style.scss";

export type I_Args = {
    dataID: string;
    positionTip: string;
    content?: any;
}

export type I_ArgsInit = {
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
        const backdrop = document?.createElement("div") as HTMLDivElement;
        backdrop.setAttribute("class", "backdrop_guideline-id");
        document?.body?.appendChild(backdrop);

        this.html = document?.getElementsByTagName("html")?.[0] as any;
        this.html.style["scroll-behavior"] = "smooth";
    }

    /* closeGuideline */
    closeGuideline(isNext?: boolean | false): void {
        const backdrop = document.getElementsByClassName(
            "backdrop_guideline-id"
        );
        for (let i = 0; i < backdrop.length; i++) {
            backdrop[i].remove();
        }

        const article = document.querySelectorAll('[class="wrap_elm_"]')?.[0]
            ?.children as any;
        for (let i = 0; i < article?.length; i++) {
            const del = article?.[i];
            del.parentElement.replaceWith(...del.parentElement.childNodes);
            del.parentElement.replaceWith(...del.parentElement.childNodes);
        }
        document.getElementsByClassName("guideline_tip")[0]?.remove();
        autoScroll(0);
        if (!isNext) {
            this?.html.removeAttribute("style");
        }
    }

    /* Render guideline */
    renderGuideline(): void {
        if (typeof this.objDataActive !== "undefined") {
            const { dataID, positionTip } = this.objDataActive;

            const article = document.getElementById(dataID) as HTMLDivElement;
            // const widthElm: number = article.offsetWidth + 20;
            // const heightElm: number = article.offsetHeight + 20;
            const widthElm: number = article.offsetWidth;
            const heightElm: number = article.offsetHeight;
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
        }
    }
}

export default Core;
