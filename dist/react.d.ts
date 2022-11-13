import Core, { I_ArgsInit } from "./core";
declare const closeGuideline: (isNext?: boolean) => void;
declare class init extends Core {
    constructor({ dataGuideline }: I_ArgsInit);
}
declare class nextTip extends Core {
    constructor(id: string);
}
export { closeGuideline, init, nextTip };
