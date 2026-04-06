import{b as n}from"./lit-element-CdmuTPXr.js";const v={title:"Social/SocialShare",tags:["autodocs"],parameters:{docs:{description:{component:`
DSGVO-compliant social share buttons using a two-click "Shariff" approach. Features include:
- 10 share targets: Facebook, Twitter/X, LinkedIn, XING, WhatsApp, Telegram, Email, Pinterest, Reddit, Copy link
- Consent notice before any data is sent
- Popup window for social shares, mailto for email, clipboard API for copy
- "Copied!" feedback with auto-reset
- Three visual variants: buttons, icons, minimal
- Platform brand colors on hover with focus-visible outlines
        `}}},argTypes:{variant:{control:"select",options:["buttons","icons","minimal"],description:"Visual style"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},showConsent:{control:"boolean",description:"Show consent notice"}}},g=[{name:"Facebook",color:"#1877f2"},{name:"X (Twitter)",color:"#000000"},{name:"LinkedIn",color:"#0a66c2"},{name:"E-Mail",color:"#6b7280"},{name:"Link kopieren",color:"#6b7280"}],t=e=>n`
  <style>
    .ss-container { padding: 2rem; font-family: system-ui, sans-serif; }
    .ss-consent { margin: 0 0 0.75rem; font-size: 0.75rem; color: #6b7280; line-height: 1.4; }
    .ss-buttons { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .ss-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: ${e.variant==="icons"||e.variant==="minimal"?"0.75rem":"0.625rem 1rem"};
      background: ${e.variant==="minimal"?"transparent":"#f3f4f6"};
      border: ${e.variant==="minimal"?"none":"1px solid #e5e7eb"};
      border-radius: 0.375rem; color: #374151; font-size: 0.875rem; font-weight: 500;
      cursor: pointer; transition: all 0.2s;
    }
    .ss-btn:hover { background: var(--c); color: white; border-color: var(--c); }
    .ss-icon { width: 1.25rem; height: 1.25rem; }
  </style>
  <div class="ss-container">
    ${e.showConsent?n`<p class="ss-consent">Beim Teilen werden Daten an den jeweiligen Dienst &uuml;bertragen.</p>`:""}
    <div class="ss-buttons">
      ${g.map(a=>n`
        <button class="ss-btn" style="--c: ${a.color};" title="${a.name}">
          <svg class="ss-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/></svg>
          ${e.variant==="buttons"?n`<span>${a.name}</span>`:""}
        </button>
      `)}
    </div>
  </div>
`,r={args:{variant:"buttons",size:"md",showConsent:!0},render:e=>t(e)},s={args:{variant:"icons",size:"md",showConsent:!0},render:e=>t(e)},o={args:{variant:"minimal",size:"md",showConsent:!1},render:e=>t(e)};var i,c,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'buttons',
    size: 'md',
    showConsent: true
  },
  render: args => renderSocialShare(args)
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'icons',
    size: 'md',
    showConsent: true
  },
  render: args => renderSocialShare(args)
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'minimal',
    size: 'md',
    showConsent: false
  },
  render: args => renderSocialShare(args)
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const w=["Buttons","Icons","Minimal"];export{r as Buttons,s as Icons,o as Minimal,w as __namedExportsOrder,v as default};
