import{b as r}from"./lit-element-CdmuTPXr.js";const c={title:"Sections/Stats",tags:["autodocs"],parameters:{docs:{description:{component:"Animated statistics display. Four layouts (inline, cards, banner, minimal). Scroll-triggered count-up animation with easeOutExpo easing and staggered delays."}}},argTypes:{layout:{control:"select",options:["inline","cards","banner","minimal"]}}},s={render:()=>r`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Acme Corp by the Numbers</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        ${[{val:"12K",label:"Customers",desc:"Across 40 countries",suf:"+"},{val:"99",label:"Uptime",suf:".9%"},{val:"24",label:"Support",suf:"/7"},{val:"72",label:"NPS Score",pre:"+"}].map(e=>r`
          <div style="background:#f8fafc;border-radius:1rem;padding:2rem;text-align:center;">
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;">${e.pre||""}${e.val}${e.suf||""}</div>
            <div style="font-weight:600;margin:0.25rem 0;">${e.label}</div>
            ${e.desc?r`<p style="font-size:0.875rem;color:#64748b;margin:0;">${e.desc}</p>`:""}
          </div>
        `)}
      </div>
    </section>
  `},t={render:()=>r`
    <section style="font-family:system-ui,sans-serif;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #e5e7eb;border-radius:1rem;overflow:hidden;">
        ${[{val:"500",label:"Projects",suf:"+"},{val:"45",label:"Team Members"},{val:"12",label:"Countries"},{val:"99",label:"Satisfaction",suf:"%"}].map(e=>r`
          <div style="padding:2rem;text-align:center;background:white;border-right:1px solid #e5e7eb;">
            <div style="font-size:2rem;font-weight:700;">${e.val}${e.suf||""}</div>
            <div style="font-size:0.875rem;color:#6b7280;">${e.label}</div>
          </div>
        `)}
      </div>
    </section>
  `};var a,i,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Acme Corp by the Numbers</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        \${[{
    val: '12K',
    label: 'Customers',
    desc: 'Across 40 countries',
    suf: '+'
  }, {
    val: '99',
    label: 'Uptime',
    suf: '.9%'
  }, {
    val: '24',
    label: 'Support',
    suf: '/7'
  }, {
    val: '72',
    label: 'NPS Score',
    pre: '+'
  }].map(s => html\`
          <div style="background:#f8fafc;border-radius:1rem;padding:2rem;text-align:center;">
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;">\${s.pre || ''}\${s.val}\${s.suf || ''}</div>
            <div style="font-weight:600;margin:0.25rem 0;">\${s.label}</div>
            \${s.desc ? html\`<p style="font-size:0.875rem;color:#64748b;margin:0;">\${s.desc}</p>\` : ''}
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var o,d,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <section style="font-family:system-ui,sans-serif;">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #e5e7eb;border-radius:1rem;overflow:hidden;">
        \${[{
    val: '500',
    label: 'Projects',
    suf: '+'
  }, {
    val: '45',
    label: 'Team Members'
  }, {
    val: '12',
    label: 'Countries'
  }, {
    val: '99',
    label: 'Satisfaction',
    suf: '%'
  }].map(s => html\`
          <div style="padding:2rem;text-align:center;background:white;border-right:1px solid #e5e7eb;">
            <div style="font-size:2rem;font-weight:700;">\${s.val}\${s.suf || ''}</div>
            <div style="font-size:0.875rem;color:#6b7280;">\${s.label}</div>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const p=["Cards","Banner"];export{t as Banner,s as Cards,p as __namedExportsOrder,c as default};
