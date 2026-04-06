import{b as t}from"./lit-element-CdmuTPXr.js";const c={title:"Sections/TabsSection",tags:["autodocs"],parameters:{docs:{description:{component:"Tabbed content sections. Six style variants (default, pills, underline, vertical, cards, segmented). Full keyboard navigation, badge support, animated transitions."}}},argTypes:{variant:{control:"select",options:["default","pills","underline","vertical","cards","segmented"]}}},o={render:()=>t`
    <section style="padding:2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <div style="display:flex;border-bottom:2px solid #e2e8f0;margin-bottom:1.5rem;">
        ${["Features","Pricing","FAQ"].map((r,e)=>t`
          <button style="padding:0.75rem 1.5rem;font-size:0.875rem;font-weight:500;border:none;background:none;cursor:pointer;border-bottom:2px solid ${e===0?"#3b82f6":"transparent"};color:${e===0?"#3b82f6":"#64748b"};margin-bottom:-2px;">${r}</button>
        `)}
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-weight:700;margin:0 0 0.75rem;">Platform Features</h3>
        <p style="color:#64748b;">Real-time analytics, collaboration tools, and automated reports.</p>
      </div>
    </section>
  `},i={render:()=>t`
    <section style="padding:2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;">
        ${["Features","Pricing","FAQ"].map((r,e)=>t`
          <button style="padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;border:none;border-radius:9999px;cursor:pointer;background:${e===0?"#3b82f6":"#f1f5f9"};color:${e===0?"white":"#64748b"};">${r}${r==="Pricing"?t`<span style="margin-left:0.375rem;padding:0.125rem 0.375rem;font-size:0.625rem;background:${e===1?"#3b82f6":"rgba(255,255,255,0.2)"};color:white;border-radius:9999px;">New</span>`:""}</button>
        `)}
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-weight:700;margin:0 0 0.75rem;">Feature Highlights</h3>
        <p style="color:#64748b;">Everything you need in one platform.</p>
      </div>
    </section>
  `};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <div style="display:flex;border-bottom:2px solid #e2e8f0;margin-bottom:1.5rem;">
        \${['Features', 'Pricing', 'FAQ'].map((t, i) => html\`
          <button style="padding:0.75rem 1.5rem;font-size:0.875rem;font-weight:500;border:none;background:none;cursor:pointer;border-bottom:2px solid \${i === 0 ? '#3b82f6' : 'transparent'};color:\${i === 0 ? '#3b82f6' : '#64748b'};margin-bottom:-2px;">\${t}</button>
        \`)}
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-weight:700;margin:0 0 0.75rem;">Platform Features</h3>
        <p style="color:#64748b;">Real-time analytics, collaboration tools, and automated reports.</p>
      </div>
    </section>
  \`
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var m,d,l;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <div style="display:flex;gap:0.5rem;margin-bottom:1.5rem;">
        \${['Features', 'Pricing', 'FAQ'].map((t, i) => html\`
          <button style="padding:0.5rem 1rem;font-size:0.875rem;font-weight:500;border:none;border-radius:9999px;cursor:pointer;background:\${i === 0 ? '#3b82f6' : '#f1f5f9'};color:\${i === 0 ? 'white' : '#64748b'};">\${t}\${t === 'Pricing' ? html\`<span style="margin-left:0.375rem;padding:0.125rem 0.375rem;font-size:0.625rem;background:\${i === 1 ? '#3b82f6' : 'rgba(255,255,255,0.2)'};color:white;border-radius:9999px;">New</span>\` : ''}</button>
        \`)}
      </div>
      <div style="padding:1rem 0;">
        <h3 style="font-weight:700;margin:0 0 0.75rem;">Feature Highlights</h3>
        <p style="color:#64748b;">Everything you need in one platform.</p>
      </div>
    </section>
  \`
}`,...(l=(d=i.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const g=["Default","Pills"];export{o as Default,i as Pills,g as __namedExportsOrder,c as default};
