import "./style/style.scss";

export type I_Args = {
  dataID: string;
  positionTip: string;
  content?: any;
};

export type I_ArgsInit = {
  dataGuideline: Array<I_Args>;
} & T_CustomObj;

export type T_CustomObj = {
  withPadding?: boolean;
  opacityBackdrop?: number;
};

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
  _custom: T_CustomObj;
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

  /* custom */
  set custom(custom: T_CustomObj) {
    this._custom = custom;
  }
  get custom() {
    return this._custom;
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
    if (this.custom?.opacityBackdrop) {
      backdrop.style.opacity = String(this.custom.opacityBackdrop);
    }
    document?.body?.appendChild(backdrop);

    this.html = document?.getElementsByTagName("html")?.[0] as any;
    this.html.style["scroll-behavior"] = "smooth";
  }

  /* closeGuideline */
  closeGuideline(isNext?: boolean | false): void {
    const backdrop = document.getElementsByClassName("backdrop_guideline-id");
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
      const withPadding = this.custom?.withPadding;

      const article = document.getElementById(dataID) as HTMLDivElement;
      let widthElm: number = article.offsetWidth;
      let heightElm: number = article.offsetHeight;
      if (Boolean(withPadding)) {
        widthElm = article.offsetWidth + 20;
        heightElm = article.offsetHeight + 20;
        article.style.width = `${article.offsetWidth}px`;
        article.style.height = `${article.offsetHeight}px`;
        article.style.position = "relative";
      }
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
      if (Boolean(withPadding)) {
        activeElm.style.position = "absolute";
        activeElm.style.marginTop = `-10px`;
        activeElm.style.marginLeft = `-10px`;
        activeElm.style.padding = `10px`;
      }
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
          this.guidelineTip.style.marginRight = `0px`;
          this.guidelineTip.style.marginTop = `3px`;
          break;
        case "right":
          this.guidelineTip.style.top = `5px`;
          this.guidelineTip.style.left = `${widthElm + 10}px`;
          this.guidelineTip.style.marginLeft = `0px`;
          this.guidelineTip.style.marginTop = `3px`;
          break;
        case "top":
          this.guidelineTip.style.bottom = `${heightElm + 10}px`;
          this.guidelineTip.style.left = `5px`;
          this.guidelineTip.style.marginBottom = `0px`;
          this.guidelineTip.style.marginLeft = `3px`;
          break;
        case "bottom":
          this.guidelineTip.style.top = `${heightElm + 10}px`;
          this.guidelineTip.style.left = `5px`;
          this.guidelineTip.style.marginTop = `0px`;
          this.guidelineTip.style.marginLeft = `3px`;
          break;
      }
      activeElm.appendChild(this.guidelineTip);
    }
  }
}

export default Core;
