import{b as g}from"./lit-element-CdmuTPXr.js";const C={title:"SEO/TitleTagEditor",tags:["autodocs"],parameters:{docs:{description:{component:`
Interactive SERP preview tool for SEO title tag optimization.

Features:
- Editable title input with live Google SERP preview
- Character counter (max 60) with color-coded warnings (green/yellow/red)
- Pixel width approximation (max 580px)
- Quality score (0-100) based on length, keyword presence, and power words
- Locale support (de/en/es)
- Dark mode support
        `}}},argTypes:{initialTitle:{control:"text",description:"Pre-filled title text"},targetKeyword:{control:"text",description:"Target SEO keyword"},maxChars:{control:{type:"number",min:30,max:100},description:"Maximum characters"},locale:{control:{type:"select"},options:["de","en","es"],description:"Locale for labels and power words"}}},l=e=>{const t=e.initialTitle||"",c=e.targetKeyword||"",m=e.maxChars||60,r=e.locale||"de",o=t.length,a=o>0&&o<=m;return g`
    <style>
      .tte-demo {
        font-family: system-ui, -apple-system, sans-serif;
        background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem;
        padding: 2rem; max-width: 40rem;
      }
      .tte-demo__label { display: block; font-size: 0.875rem; font-weight: 700; margin-bottom: 0.5rem; color: #1a202c; }
      .tte-demo__input {
        width: 100%; padding: 0.5rem 1rem; font-size: 1rem; border: 2px solid #e2e8f0;
        border-radius: 0.5rem; background: #f7fafc; outline: none; box-sizing: border-box;
      }
      .tte-demo__input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.25); }
      .tte-demo__indicators { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; font-size: 0.875rem; color: #718096; }
      .tte-demo__badge {
        display: inline-block; padding: 0.0625rem 0.25rem; font-size: 0.75rem; font-weight: 700;
        border-radius: 0.25rem; text-transform: uppercase;
      }
      .tte-demo__badge--green { background: rgba(34,197,94,0.15); color: #22c55e; }
      .tte-demo__badge--red { background: rgba(239,68,68,0.15); color: #ef4444; }
      .tte-demo__score-bar { flex: 1; height: 0.5rem; background: #edf2f7; border-radius: 9999px; overflow: hidden; min-width: 6rem; }
      .tte-demo__score-fill { height: 100%; border-radius: 9999px; background: #22c55e; width: 0%; }
      .tte-demo__serp { margin-top: 1.5rem; padding: 1rem 1.5rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-family: Arial, sans-serif; }
      .tte-demo__serp-title { font-size: 1.25rem; color: #1a0dab; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 36.25rem; }
      .tte-demo__serp-url { font-size: 0.875rem; color: #006621; margin-top: 0.25rem; }
      .tte-demo__serp-desc { font-size: 0.875rem; color: #545454; margin-top: 0.25rem; }
      .tte-demo__score-row { display: flex; align-items: center; gap: 0.25rem; flex-basis: 100%; }
    </style>
    <div class="tte-demo">
      <label class="tte-demo__label">${r==="en"?"Google SERP Preview":r==="es"?"Vista previa SERP":"Google SERP Vorschau"}</label>
      <input class="tte-demo__input" type="text" value="${t}" placeholder="${r==="en"?"Enter page title...":"Seitentitel eingeben..."}" />
      <div class="tte-demo__indicators">
        <div>
          <strong>${r==="en"?"Characters":"Zeichen"}:</strong>
          <span style="font-weight:700">${o}</span> / ${m}
          <span class="tte-demo__badge ${a?"tte-demo__badge--green":"tte-demo__badge--red"}">
            ${a?r==="en"?"Good":"Gut":o===0?r==="en"?"Too short":"Zu kurz":r==="en"?"Too long":"Zu lang"}
          </span>
        </div>
        ${c?g`
          <div>
            <strong>Keyword:</strong>
            <span class="tte-demo__badge ${t.toLowerCase().includes(c.toLowerCase())?"tte-demo__badge--green":"tte-demo__badge--red"}">
              ${t.toLowerCase().includes(c.toLowerCase())?r==="en"?"found":"gefunden":r==="en"?"missing":"fehlt"}
            </span>
          </div>
        `:""}
        <div class="tte-demo__score-row">
          <strong>${r==="en"?"Quality":"Qualitaet"}:</strong>
          <div class="tte-demo__score-bar"><div class="tte-demo__score-fill" style="width:${a?"75":"20"}%"></div></div>
          <span style="font-weight:700">${a?75:20}</span> / 100
        </div>
      </div>
      <div class="tte-demo__serp">
        <div class="tte-demo__serp-title">${t||"Seitentitel eingeben..."}</div>
        <div class="tte-demo__serp-url">${r==="en"?"www.example.com › page":"www.beispiel.de › seite"}</div>
        <div class="tte-demo__serp-desc">${r==="en"?"This is an example meta description for the SERP preview.":"Dies ist eine beispielhafte Meta-Beschreibung fuer die SERP-Vorschau."}</div>
      </div>
    </div>
  `},s={args:{initialTitle:"SEO Agentur Halle | Webdesign & Online Marketing",targetKeyword:"SEO Agentur Halle",maxChars:60,locale:"de"},render:e=>l(e)},i={args:{initialTitle:"Best Coffee Shops in Berlin - Your Ultimate Guide",targetKeyword:"coffee shops berlin",maxChars:60,locale:"en"},render:e=>l(e)},n={args:{initialTitle:"This Is An Extremely Long SEO Title That Will Definitely Get Truncated In Google Search Results Pages",targetKeyword:"seo title",maxChars:60,locale:"en"},render:e=>l(e)},d={args:{initialTitle:"",targetKeyword:"",maxChars:60,locale:"de"},render:e=>l(e)};var p,u,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initialTitle: 'SEO Agentur Halle | Webdesign & Online Marketing',
    targetKeyword: 'SEO Agentur Halle',
    maxChars: 60,
    locale: 'de'
  },
  render: args => renderEditor(args)
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var _,h,b;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    initialTitle: 'Best Coffee Shops in Berlin - Your Ultimate Guide',
    targetKeyword: 'coffee shops berlin',
    maxChars: 60,
    locale: 'en'
  },
  render: args => renderEditor(args)
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,x,y;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    initialTitle: 'This Is An Extremely Long SEO Title That Will Definitely Get Truncated In Google Search Results Pages',
    targetKeyword: 'seo title',
    maxChars: 60,
    locale: 'en'
  },
  render: args => renderEditor(args)
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,E,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    initialTitle: '',
    targetKeyword: '',
    maxChars: 60,
    locale: 'de'
  },
  render: args => renderEditor(args)
}`,...(T=(E=d.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const $=["Default","EnglishLocale","TooLong","Empty"];export{s as Default,d as Empty,i as EnglishLocale,n as TooLong,$ as __namedExportsOrder,C as default};
