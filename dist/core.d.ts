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
declare class Core {
    guidelineTip: HTMLDivElement;
    _custom: T_CustomObj;
    _html: any;
    _allData: Array<I_Args>;
    _objDataActive: I_Args;
    _isRenderBtnClose: boolean | true;
    set allData(data: Array<I_Args>);
    get allData(): Array<I_Args>;
    set custom(custom: T_CustomObj);
    get custom(): T_CustomObj;
    set objDataActive(objDataActive: I_Args);
    get objDataActive(): I_Args;
    set isRenderBtnClose(isRenderBtnClose: boolean | true);
    get isRenderBtnClose(): boolean | true;
    set html(html: any);
    get html(): any;
    initDocument(): void;
    closeGuideline(isNext?: boolean | false): void;
    renderGuideline(): void;
}
export default Core;
