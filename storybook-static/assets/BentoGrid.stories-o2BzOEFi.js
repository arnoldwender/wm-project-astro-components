import{b as y}from"./lit-element-CdmuTPXr.js";const $={title:"Layouts/BentoGrid",tags:["autodocs"],parameters:{docs:{description:{component:`
Modern asymmetric grid layout inspired by Apple's Bento design.

**Features:**
- Pre-defined cell sizes (1x1, 2x1, 1x2, 2x2)
- Configurable columns (2, 3, or 4)
- Responsive grid adaptation
- Gap size options (sm, md, lg)
- Dark mode optimized
        `}}},argTypes:{columns:{control:"select",options:[2,3,4],description:"Number of grid columns"},gap:{control:"select",options:["sm","md","lg"],description:"Gap between grid cells"}}},e="background: #1f2937; border: 1px solid #374151; border-radius: 1rem; padding: 1.5rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600;",n=r=>{const v={sm:"0.75rem",md:"1rem",lg:"1.5rem"}[r.gap]||"1rem",x=r.columns||4;return y`
    <div style="padding: 2rem; background: #0f172a;">
      <div style="display: grid; grid-template-columns: repeat(${x}, 1fr); grid-auto-rows: minmax(180px, auto); gap: ${v};">
        <div style="${e} grid-column: span 2; grid-row: span 2; min-height: 380px;">2x2 Card</div>
        <div style="${e}">1x1 Card</div>
        <div style="${e}">1x1 Card</div>
        <div style="${e} grid-column: span 2;">2x1 Card</div>
        <div style="${e} grid-row: span 2;">1x2 Card</div>
        <div style="${e}">1x1 Card</div>
        <div style="${e}">1x1 Card</div>
        <div style="${e}">1x1 Card</div>
      </div>
    </div>
  `},s={args:{columns:4,gap:"md"},render:r=>n(r)},o={args:{columns:3,gap:"md"},render:r=>n(r)},a={args:{columns:2,gap:"lg"},render:r=>n(r)};var d,t,i;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 'md'
  },
  render: args => renderBentoGrid(args)
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md'
  },
  render: args => renderBentoGrid(args)
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    columns: 2,
    gap: 'lg'
  },
  render: args => renderBentoGrid(args)
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const b=["FourColumns","ThreeColumns","TwoColumnsLargeGap"];export{s as FourColumns,o as ThreeColumns,a as TwoColumnsLargeGap,b as __namedExportsOrder,$ as default};
