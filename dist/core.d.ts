import "./style/style.scss";
export type I_Args = {
    dataID: string;
    positionTip: string;
    content: any;
};
export type T_CustomObj = {
    withPadding?: boolean;
    opacityBackdrop?: number;
};
export type I_ArgsInit = {
    dataGuideline: Array<I_Args>;
} & T_CustomObj;
declare class Core {
    guidelineTip: HTMLDivElement;
    private _custom;
    private _html;
    private _allData;
    private _objDataActive;
    private _isRenderBtnClose;
    set allData(data: Array<I_Args>);
    get allData(): Array<I_Args>;
    set custom(custom: T_CustomObj);
    get custom(): T_CustomObj;
    set objDataActive(objDataActive: I_Args);
    get objDataActive(): I_Args;
    set isRenderBtnClose(isRenderBtnClose: boolean | true);
    get isRenderBtnClose(): boolean | true;
    set html(html: HTMLHtmlElement | any);
    get html(): HTMLHtmlElement | any;
    private createDiv;
    private setTipPosition;
    initDocument(): void;
    closeGuideline(isNext?: boolean | false): void;
    renderGuideline(): void;
}
export default Core;
