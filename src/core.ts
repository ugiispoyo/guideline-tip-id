import "./style/style.scss";

export type I_Args = {
  dataID: string;
  positionTip: string; // 'left' | 'right' | 'top' | 'bottom' (tetap string agar kompatibel)
  content: any;
};

export type T_CustomObj = {
  withPadding?: boolean;
  opacityBackdrop?: number;
};

export type I_ArgsInit = {
  dataGuideline: Array<I_Args>;
} & T_CustomObj;

/* Auto Scroll (dipertahankan) */
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
  guidelineTip!: HTMLDivElement;
  private _custom!: T_CustomObj;
  private _html!: HTMLHtmlElement | any;
  private _allData!: Array<I_Args>;
  private _objDataActive!: I_Args;
  private _isRenderBtnClose!: boolean | true; // dipertahankan

  /* ---------- Accessors (dipertahankan) ---------- */
  set allData(data: Array<I_Args>) {
    this._allData = data;
  }
  get allData(): Array<I_Args> {
    return this._allData;
  }

  set custom(custom: T_CustomObj) {
    this._custom = custom;
  }
  get custom(): T_CustomObj {
    return this._custom;
  }

  set objDataActive(objDataActive: I_Args) {
    this._objDataActive = objDataActive;
  }
  get objDataActive(): I_Args {
    return this._objDataActive;
  }

  set isRenderBtnClose(isRenderBtnClose: boolean | true) {
    this._isRenderBtnClose = isRenderBtnClose;
  }
  get isRenderBtnClose(): boolean | true {
    return this._isRenderBtnClose;
  }

  set html(html: HTMLHtmlElement | any) {
    this._html = html;
  }
  get html(): HTMLHtmlElement | any {
    return this._html;
  }

  /* ---------- Helpers ---------- */

  private createDiv(className?: string, id?: string): HTMLDivElement {
    const el = document.createElement("div") as HTMLDivElement;
    if (className) el.setAttribute("class", className);
    if (id) el.setAttribute("id", id);
    return el;
  }

  private setTipPosition(
    positionTip: string,
    widthElm: number,
    heightElm: number
  ): void {
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
  }

  /* ---------- Lifecycle ---------- */

  /* Init Document */
  initDocument(): void {
    const { dataID } = this.objDataActive;
    const checkID = document.getElementById(dataID);
    if (!Boolean(checkID)) {
      return;
    }

    const backdrop = this.createDiv("backdrop_guideline-id");
    if (this.custom?.opacityBackdrop) {
      // tetap truthy-only seperti kode asli
      backdrop.style.opacity = String(this.custom.opacityBackdrop);
    }
    document?.body?.appendChild(backdrop);

    this.html =
      (document?.getElementsByTagName("html")?.[0] as any) ||
      document.documentElement;
    this.html.style["scroll-behavior"] = "smooth";
  }

  /* closeGuideline */
  closeGuideline(isNext?: boolean | false): void {
    const backdrop = document.getElementsByClassName("backdrop_guideline-id");
    for (let i = 0; i < backdrop.length; i++) {
      backdrop[i].remove();
    }

    const articleChildren = document.querySelectorAll(
      '[class="wrap_elm_"]'
    )?.[0]?.children as any;
    for (let i = 0; i < articleChildren?.length; i++) {
      const del = articleChildren?.[i];
      // DUA KALI replaceWith harus tetap (dipertahankan)
      del.parentElement.replaceWith(...del.parentElement.childNodes);
      del.parentElement.replaceWith(...del.parentElement.childNodes);
    }

    document.getElementsByClassName("guideline_tip")[0]?.remove();
    autoScroll(0);

    if (!isNext) {
      this?.html?.removeAttribute?.("style");
    }
  }

  /* Render guideline */
  renderGuideline(): void {
    if (typeof this.objDataActive === "undefined") return;

    const { dataID, positionTip } = this.objDataActive;
    const withPadding = this.custom?.withPadding;

    const article = document.getElementById(dataID) as HTMLDivElement | null;
    if (!Boolean(article)) {
      return;
    }

    let widthElm = article.offsetWidth;
    let heightElm = article.offsetHeight;

    const rect = article.getBoundingClientRect();
    const checkPaddingLeft = rect.left;
    const checkPaddingRight = rect.right;

    if (Boolean(withPadding) && checkPaddingLeft > 0 && checkPaddingRight > 0) {
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
    const wrapElm = this.createDiv("wrap_elm_");
    article.parentNode?.replaceChild(wrapElm, article);
    wrapElm.appendChild(article);

    /* Div data-tip */
    const activeElm = this.createDiv(undefined, "data_tip");
    activeElm.setAttribute("data-tip", "true");
    activeElm.style.width = `${widthElm}px`;
    activeElm.style.height = `${heightElm}px`;

    if (Boolean(withPadding) && checkPaddingLeft > 0 && checkPaddingRight > 0) {
      activeElm.style.marginTop = `-10px`;
      activeElm.style.marginLeft = `-10px`;
      activeElm.style.padding = `10px`;
      activeElm.style.position = "relative";
      activeElm.style.marginBottom = `-10px`;
    }

    wrapElm.parentNode?.replaceChild(activeElm, wrapElm);
    activeElm.appendChild(wrapElm);

    /* Wrapper Guideline Tip */
    this.guidelineTip = this.createDiv(undefined, "guideline_tip_id_wrap");
    this.guidelineTip.setAttribute(
      "class",
      `guideline_tip guideline_tip_${positionTip}`
    );

    this.setTipPosition(positionTip, widthElm, heightElm);

    activeElm.appendChild(this.guidelineTip);
  }
}

export default Core;
