import{b as r}from"./lit-element-CdmuTPXr.js";const c={title:"Sections/SocialProofSection",tags:["autodocs"],parameters:{docs:{description:{component:"Social proof elements: ratings, reviews, trust signals. Six variants (stats, ratings, badges, reviews, combined, minimal). Built-in platform logos for Google, Trustpilot, etc."}}},argTypes:{variant:{control:"select",options:["stats","ratings","badges","reviews","combined","minimal"]}}},e={render:()=>r`
    <section style="padding:3rem 2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:1.5rem;font-weight:700;margin:0 0 2rem;">Trusted by thousands</h2>
      <div style="display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;">
        ${[{platform:"Google",rating:"4.8",count:"520"},{platform:"Trustpilot",rating:"4.6",count:"310"},{platform:"Capterra",rating:"4.7",count:"180"}].map(i=>r`
          <div style="text-align:center;">
            <div style="font-weight:700;color:#1e293b;margin-bottom:0.25rem;">${i.platform}</div>
            <div style="color:#f59e0b;font-size:1.25rem;margin-bottom:0.25rem;">★★★★★</div>
            <div style="font-size:0.875rem;color:#64748b;">${i.rating}/5 (${i.count} reviews)</div>
          </div>
        `)}
      </div>
    </section>
  `},t={render:()=>r`
    <section style="padding:3rem 2rem;font-family:system-ui,sans-serif;">
      <div style="display:flex;justify-content:center;gap:4rem;flex-wrap:wrap;align-items:center;">
        <div style="text-align:center;"><div style="font-size:2.5rem;font-weight:700;color:#1e293b;">10K+</div><div style="font-size:0.875rem;color:#64748b;">Customers</div></div>
        <div style="text-align:center;"><div style="font-size:2.5rem;font-weight:700;color:#1e293b;">99.9%</div><div style="font-size:0.875rem;color:#64748b;">Uptime</div></div>
        <div style="text-align:center;"><div style="color:#f59e0b;font-size:1.25rem;">★★★★★</div><div style="font-size:0.875rem;color:#64748b;">4.9/5 on Google</div></div>
      </div>
    </section>
  `};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:3rem 2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:1.5rem;font-weight:700;margin:0 0 2rem;">Trusted by thousands</h2>
      <div style="display:flex;justify-content:center;gap:3rem;flex-wrap:wrap;">
        \${[{
    platform: 'Google',
    rating: '4.8',
    count: '520'
  }, {
    platform: 'Trustpilot',
    rating: '4.6',
    count: '310'
  }, {
    platform: 'Capterra',
    rating: '4.7',
    count: '180'
  }].map(r => html\`
          <div style="text-align:center;">
            <div style="font-weight:700;color:#1e293b;margin-bottom:0.25rem;">\${r.platform}</div>
            <div style="color:#f59e0b;font-size:1.25rem;margin-bottom:0.25rem;">★★★★★</div>
            <div style="font-size:0.875rem;color:#64748b;">\${r.rating}/5 (\${r.count} reviews)</div>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,l,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:3rem 2rem;font-family:system-ui,sans-serif;">
      <div style="display:flex;justify-content:center;gap:4rem;flex-wrap:wrap;align-items:center;">
        <div style="text-align:center;"><div style="font-size:2.5rem;font-weight:700;color:#1e293b;">10K+</div><div style="font-size:0.875rem;color:#64748b;">Customers</div></div>
        <div style="text-align:center;"><div style="font-size:2.5rem;font-weight:700;color:#1e293b;">99.9%</div><div style="font-size:0.875rem;color:#64748b;">Uptime</div></div>
        <div style="text-align:center;"><div style="color:#f59e0b;font-size:1.25rem;">★★★★★</div><div style="font-size:0.875rem;color:#64748b;">4.9/5 on Google</div></div>
      </div>
    </section>
  \`
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const f=["Ratings","Combined"];export{t as Combined,e as Ratings,f as __namedExportsOrder,c as default};
