import{b as o}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/MasonryGrid",tags:["autodocs"],parameters:{docs:{description:{component:`
Pinterest-style masonry layout for mixed-height content. Features:
- CSS columns-based masonry (no JavaScript required)
- Configurable column count (2-5) and gap sizes
- Responsive breakpoints collapse to 2 columns on tablet, 1 on mobile
        `}}},argTypes:{columns:{control:{type:"range",min:2,max:5},description:"Number of columns"},gap:{control:"select",options:["none","sm","md","lg","xl"],description:"Gap size"}}},a=["#e0f2fe","#fce7f3","#dcfce7","#fef3c7","#ede9fe","#fee2e2"],g=[120,200,160,240,180,140,220,150],p=e=>o`
  <div style="columns:${e.columns};column-gap:${e.gap==="sm"?"0.5rem":e.gap==="lg"?"1.5rem":"1rem"};padding:2rem;font-family:system-ui,sans-serif;">
    ${g.map((u,n)=>o`
      <div style="break-inside:avoid;margin-bottom:1rem;background:${a[n%a.length]};border-radius:0.75rem;padding:1.5rem;height:${u}px;display:flex;align-items:center;justify-content:center;">
        <span style="font-weight:600;color:#334155;">Card ${n+1}</span>
      </div>
    `)}
  </div>
`,r={args:{columns:3,gap:"md"},render:e=>p(e)},s={args:{columns:4,gap:"lg"},render:e=>p(e)};var t,c,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md'
  },
  render: args => renderMasonry(args)
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,i,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 'lg'
  },
  render: args => renderMasonry(args)
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const b=["Default","FourColumns"];export{r as Default,s as FourColumns,b as __namedExportsOrder,y as default};
