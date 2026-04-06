import{b as t}from"./lit-element-CdmuTPXr.js";const g={title:"Sections/ServiceSection",tags:["autodocs"],parameters:{docs:{description:{component:"Service showcase display. Six variants (grid, list, tabs, accordion, featured, pricing). Category tab filtering, expand/collapse accordion, and pricing tiers."}}},argTypes:{variant:{control:"select",options:["grid","list","tabs","accordion","featured","pricing"]}}},d=[{title:"Web Development",desc:"Custom websites built with modern frameworks.",icon:"💻",features:["Responsive design","SEO optimized","Fast loading"]},{title:"SEO Optimization",desc:"Increase your organic traffic and visibility.",icon:"📈",features:["Keyword research","On-page SEO","Technical audits"]},{title:"UI/UX Design",desc:"User-centered design that converts visitors.",icon:"🎨",features:["Wireframes","Prototypes","User testing"]}],i={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.5rem;">What We Do</span>
        <h2 style="font-size:2rem;font-weight:700;margin:0;">Our Services</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        ${d.map(e=>t`
          <div style="background:white;border:1px solid #e2e8f0;border-radius:1rem;padding:2rem;text-align:center;">
            <span style="font-size:2.5rem;display:block;margin-bottom:1rem;">${e.icon}</span>
            <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.5rem;">${e.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0 0 1.5rem;">${e.desc}</p>
            <ul style="list-style:none;padding:0;margin:0;text-align:left;">
              ${e.features.map(c=>t`<li style="display:flex;align-items:center;gap:0.5rem;padding:0.25rem 0;font-size:0.875rem;color:#64748b;"><svg width="16" height="16" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${c}</li>`)}
            </ul>
          </div>
        `)}
      </div>
    </section>
  `},r={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <h2 style="font-size:2rem;font-weight:700;margin:0 0 2rem;">Explore Our Offerings</h2>
      ${d.map(e=>t`
        <div style="display:flex;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid #f1f5f9;">
          <span style="font-size:2rem;">${e.icon}</span>
          <div>
            <h3 style="font-weight:600;margin:0 0 0.25rem;">${e.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">${e.desc}</p>
          </div>
        </div>
      `)}
    </section>
  `};var s,n,o;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.5rem;">What We Do</span>
        <h2 style="font-size:2rem;font-weight:700;margin:0;">Our Services</h2>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        \${services.map(s => html\`
          <div style="background:white;border:1px solid #e2e8f0;border-radius:1rem;padding:2rem;text-align:center;">
            <span style="font-size:2.5rem;display:block;margin-bottom:1rem;">\${s.icon}</span>
            <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.5rem;">\${s.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0 0 1.5rem;">\${s.desc}</p>
            <ul style="list-style:none;padding:0;margin:0;text-align:left;">
              \${s.features.map(f => html\`<li style="display:flex;align-items:center;gap:0.5rem;padding:0.25rem 0;font-size:0.875rem;color:#64748b;"><svg width="16" height="16" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\${f}</li>\`)}
            </ul>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(o=(n=i.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var a,m,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;max-width:48rem;margin:0 auto;">
      <h2 style="font-size:2rem;font-weight:700;margin:0 0 2rem;">Explore Our Offerings</h2>
      \${services.map(s => html\`
        <div style="display:flex;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid #f1f5f9;">
          <span style="font-size:2rem;">\${s.icon}</span>
          <div>
            <h3 style="font-weight:600;margin:0 0 0.25rem;">\${s.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">\${s.desc}</p>
          </div>
        </div>
      \`)}
    </section>
  \`
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const f=["Grid","List"];export{i as Grid,r as List,f as __namedExportsOrder,g as default};
