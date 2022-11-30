
[![npm stat](https://img.shields.io/npm/dm/guideline-tip-id.svg?style=flat-square)](https://npm-stat.com/charts.html?package=guideline-tip-id)
[![npm version](https://img.shields.io/npm/v/guideline-tip-id.svg?style=flat-square)](https://www.npmjs.com/package/guideline-tip-id)
[![](https://data.jsdelivr.com/v1/package/npm/guideline-tip-id/badge)](https://www.jsdelivr.com/package/npm/guideline-tip-id)
[![install size](https://packagephobia.com/badge?p=guideline-tip-id)](https://packagephobia.com/result?p=guideline-tip-id)
[![gzip size][gzip-badge]][unpkg-dist]

# Guideline Tip Id

Simple guideline tip, coach mark


![Example](https://drive.google.com/uc?export=view&id=1WZpYUWwBKFx_2Xyn42clCZBbN3Erpx6M)

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
[Vanilla](https://stackblitz.com/edit/web-platform-z7ot74?file=index.html) 

<br/>

[React](https://github.com/ugiispoyo/example-guideline-tip-id-react/blob/master/src/App.js) 

<br/>

[Vue - on version guideline >= 1.2.1](https://stackblitz.com/edit/vitejs-vite-esx3tn?file=src%2FApp.vue) 

<br/>

#### Note:
For `Vue` it only supports `>= vue 3`, and only supports guideline-tip-id with version `>= 1.2.1`