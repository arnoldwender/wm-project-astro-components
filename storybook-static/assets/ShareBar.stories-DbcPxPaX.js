import{b as n}from"./lit-element-CdmuTPXr.js";const z={title:"Content/ShareBar",tags:["autodocs"],parameters:{docs:{description:{component:`
Social sharing buttons with tracking support. GDPR-friendly with no third-party scripts. Features include:
- Supports Twitter, LinkedIn, Facebook, WhatsApp, Telegram, email, copy, and print
- Horizontal and vertical layout with optional labels
- Copy-to-clipboard with visual toast feedback
- Multiple size (sm, md, lg) and style variants (default, outline, ghost)
- Platform brand colors applied to buttons
        `}}},argTypes:{variant:{control:"select",options:["default","outline","ghost"],description:"Button style variant"},size:{control:"select",options:["sm","md","lg"],description:"Button size"},direction:{control:"select",options:["horizontal","vertical"],description:"Layout direction"},showLabels:{control:"boolean",description:"Show text labels"}}},v=[{name:"Twitter",color:"#1DA1F2"},{name:"LinkedIn",color:"#0A66C2"},{name:"Facebook",color:"#1877F2"},{name:"E-Mail",color:"#6b7280"},{name:"Link kopieren",color:"#6b7280"}],i={sm:"2rem",md:"2.5rem",lg:"3rem"},l={sm:"1rem",md:"1.25rem",lg:"1.5rem"},s=e=>n`
  <style>
    .sb { display: flex; gap: 0.5rem; padding: 2rem; font-family: system-ui, sans-serif;
      ${e.direction==="vertical"?"flex-direction: column; max-width: 200px;":""} }
    .sb-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      width: ${e.showLabels?"auto":i[e.size]}; height: ${i[e.size]};
      ${e.showLabels?"padding: 0 1rem;":""}
      border-radius: 0.5rem; border: none; cursor: pointer; transition: all 0.15s;
      ${e.variant==="default"?"color: #fff;":""}
      ${e.variant==="outline"?"background: transparent;":""}
      ${e.variant==="ghost"?"background: transparent; border: none;":""}
    }
    .sb-btn:hover { opacity: 0.9; transform: scale(1.05); }
    .sb-icon { width: ${l[e.size]}; height: ${l[e.size]}; }
    .sb-label { font-size: 0.875rem; font-weight: 500; }
  </style>
  <div class="sb">
    ${v.map(r=>n`
      <button class="sb-btn" aria-label="${r.name}"
        style="${e.variant==="default"?`background: ${r.color};`:e.variant==="outline"?`border: 1px solid ${r.color}; color: ${r.color};`:`color: ${r.color};`}">
        <svg class="sb-icon" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
        ${e.showLabels?n`<span class="sb-label">${r.name}</span>`:""}
      </button>
    `)}
  </div>
`,a={args:{variant:"default",size:"md",direction:"horizontal",showLabels:!1},render:e=>s(e)},t={args:{variant:"outline",size:"md",direction:"horizontal",showLabels:!1},render:e=>s(e)},o={args:{variant:"default",size:"lg",direction:"vertical",showLabels:!0},render:e=>s(e)};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    direction: 'horizontal',
    showLabels: false
  },
  render: args => renderShareBar(args)
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    direction: 'horizontal',
    showLabels: false
  },
  render: args => renderShareBar(args)
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,f,g;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'lg',
    direction: 'vertical',
    showLabels: true
  },
  render: args => renderShareBar(args)
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const y=["Default","Outline","Vertical"];export{a as Default,t as Outline,o as Vertical,y as __namedExportsOrder,z as default};
