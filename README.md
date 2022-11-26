# Guideline Tip Id

Simple guideline tip, coach mark

## Installation

```bash
npm i guideline-tip-id
```

**or**

```bash
yarn add guideline-tip-id
```

### Args function init
No | Value | Type | Default | Description
--- | --- | --- | --- | ---
2 | dataGuideline | Array<{}> | [] | For the data list that will be given instructions

#### Object of dataGuideline 
No | Value | Type | Default | Description
--- | --- | --- | --- | ---
1 | dataID | string | "" | id of element html
2 | positionTip | "left", "right", "top", "bottom" | "" | the position of the guidelines
3 | content | any | "" | content from guidelines

<hr/>

#### Demo
[Vanilla JS](https://stackblitz.com/edit/web-platform-z7ot74?file=index.html) 

<br/>

[ReactJS](https://github.com/ugiispoyo/example-guideline-tip-id-react/blob/master/src/App.js) 

<br/>

[VueJS - on version guideline >= 1.2.1](https://stackblitz.com/edit/vitejs-vite-esx3tn?file=src%2FApp.vue) 

<br/>

#### Note:
For vuejs it only supports vue 3 and above, and only supports guidelines with version 1.2.1 and above