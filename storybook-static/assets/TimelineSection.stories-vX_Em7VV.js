import{b as t}from"./lit-element-CdmuTPXr.js";const p={title:"Sections/TimelineSection",tags:["autodocs"],parameters:{docs:{description:{component:"Chronological event display. Five variants (vertical, alternating, horizontal, compact, cards). Alternating zigzag, horizontal scrollable with drag support, fade edges."}}},argTypes:{variant:{control:"select",options:["vertical","alternating","horizontal","compact","cards"]}}},r=[{date:"2020",title:"Founded",desc:"Acme Corp launched from a small garage.",icon:"🚀"},{date:"2021",title:"First Product",desc:"Shipped v1.0 to 100 beta users.",icon:"📦"},{date:"2023",title:"Series A",desc:"Raised $10M to scale globally.",icon:"💰"},{date:"2025",title:"Global Launch",desc:"Expanded to 40 countries.",icon:"🌍"}],i={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0;">Our Journey</h2>
      </div>
      <div style="max-width:32rem;margin:0 auto;">
        ${r.map((e,o)=>t`
          <div style="display:grid;grid-template-columns:auto 1fr;gap:1rem;padding-bottom:${o<r.length-1?"2rem":"0"};">
            <div style="display:flex;justify-content:center;position:relative;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:1rem;z-index:1;">${e.icon}</div>
              ${o<r.length-1?t`<div style="position:absolute;top:2.5rem;left:50%;transform:translateX(-50%);width:2px;height:calc(100% + 0.5rem);background:#e2e8f0;"></div>`:""}
            </div>
            <div>
              <span style="font-weight:600;color:#3b82f6;font-size:0.875rem;">${e.date}</span>
              <h3 style="font-weight:600;margin:0.25rem 0;">${e.title}</h3>
              <p style="font-size:0.875rem;color:#64748b;margin:0;">${e.desc}</p>
            </div>
          </div>
        `)}
      </div>
    </section>
  `},n={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Roadmap</h2>
      <div style="overflow-x:auto;padding-bottom:1rem;">
        <div style="position:relative;min-width:max-content;">
          <div style="position:absolute;left:0;right:0;top:1.25rem;height:2px;background:#e2e8f0;"></div>
          <div style="display:flex;gap:3rem;position:relative;">
            ${r.map(e=>t`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;min-width:180px;">
                <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:1rem;z-index:1;margin-bottom:1rem;">${e.icon}</div>
                <span style="font-weight:600;color:#3b82f6;font-size:0.875rem;">${e.date}</span>
                <h3 style="font-weight:600;margin:0.25rem 0;font-size:1rem;">${e.title}</h3>
                <p style="font-size:0.875rem;color:#64748b;margin:0;max-width:180px;">${e.desc}</p>
              </div>
            `)}
          </div>
        </div>
      </div>
    </section>
  `};var s,a,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0;">Our Journey</h2>
      </div>
      <div style="max-width:32rem;margin:0 auto;">
        \${events.map((e, i) => html\`
          <div style="display:grid;grid-template-columns:auto 1fr;gap:1rem;padding-bottom:\${i < events.length - 1 ? '2rem' : '0'};">
            <div style="display:flex;justify-content:center;position:relative;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:1rem;z-index:1;">\${e.icon}</div>
              \${i < events.length - 1 ? html\`<div style="position:absolute;top:2.5rem;left:50%;transform:translateX(-50%);width:2px;height:calc(100% + 0.5rem);background:#e2e8f0;"></div>\` : ''}
            </div>
            <div>
              <span style="font-weight:600;color:#3b82f6;font-size:0.875rem;">\${e.date}</span>
              <h3 style="font-weight:600;margin:0.25rem 0;">\${e.title}</h3>
              <p style="font-size:0.875rem;color:#64748b;margin:0;">\${e.desc}</p>
            </div>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(l=(a=i.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var d,m,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Roadmap</h2>
      <div style="overflow-x:auto;padding-bottom:1rem;">
        <div style="position:relative;min-width:max-content;">
          <div style="position:absolute;left:0;right:0;top:1.25rem;height:2px;background:#e2e8f0;"></div>
          <div style="display:flex;gap:3rem;position:relative;">
            \${events.map(e => html\`
              <div style="display:flex;flex-direction:column;align-items:center;text-align:center;min-width:180px;">
                <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:1rem;z-index:1;margin-bottom:1rem;">\${e.icon}</div>
                <span style="font-weight:600;color:#3b82f6;font-size:0.875rem;">\${e.date}</span>
                <h3 style="font-weight:600;margin:0.25rem 0;font-size:1rem;">\${e.title}</h3>
                <p style="font-size:0.875rem;color:#64748b;margin:0;max-width:180px;">\${e.desc}</p>
              </div>
            \`)}
          </div>
        </div>
      </div>
    </section>
  \`
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const f=["Vertical","Horizontal"];export{n as Horizontal,i as Vertical,f as __namedExportsOrder,p as default};
