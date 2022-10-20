import ReactDOM from "react-dom/client";

export default function renderGuideline(content: any) {
    setTimeout(() => {
        const elm = document.getElementById('guideline_tip_id_wrap') as HTMLDivElement
        const guidelineContent = ReactDOM.createRoot(elm);
        guidelineContent.render(content);
    }, 50)
}