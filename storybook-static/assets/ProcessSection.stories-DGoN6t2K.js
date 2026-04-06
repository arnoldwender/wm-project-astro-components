import{b as i}from"./lit-element-CdmuTPXr.js";const g={title:"Sections/ProcessSection",tags:["autodocs"],parameters:{docs:{description:{component:"Workflow / how-it-works display. Six layout variants (vertical, horizontal, grid, alternating, cards, roadmap) with configurable connector lines."}}},argTypes:{variant:{control:"select",options:["vertical","horizontal","grid","alternating","cards","roadmap"]}}},d=[{num:1,title:"Sign Up",desc:"Create your free account in seconds.",icon:"📝"},{num:2,title:"Configure",desc:"Set up your workspace and invite your team.",icon:"⚙️"},{num:3,title:"Launch",desc:"Go live and start tracking results.",icon:"🚀"}],t={render:()=>i`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;">How It Works</h2>
        <p style="color:#64748b;">Three simple steps to get started.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:60rem;margin:0 auto;">
        ${d.map(e=>i`
          <div style="text-align:center;">
            <div style="width:3.5rem;height:3.5rem;border-radius:50%;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;margin:0 auto 1rem;">${e.num}</div>
            <h3 style="font-weight:600;margin:0 0 0.5rem;">${e.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">${e.desc}</p>
          </div>
        `)}
      </div>
    </section>
  `},r={render:()=>i`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Our Process</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:60rem;margin:0 auto;">
        ${d.map(e=>i`
          <div style="text-align:center;">
            <div style="width:3.5rem;height:3.5rem;border-radius:0.75rem;background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 1rem;">${e.icon}</div>
            <h3 style="font-weight:600;margin:0 0 0.5rem;">${e.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">${e.desc}</p>
          </div>
        `)}
      </div>
    </section>
  `};var n,s,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;">How It Works</h2>
        <p style="color:#64748b;">Three simple steps to get started.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:60rem;margin:0 auto;">
        \${steps.map(s => html\`
          <div style="text-align:center;">
            <div style="width:3.5rem;height:3.5rem;border-radius:50%;background:#3b82f6;color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;margin:0 auto 1rem;">\${s.num}</div>
            <h3 style="font-weight:600;margin:0 0 0.5rem;">\${s.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">\${s.desc}</p>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(o=(s=t.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var a,m,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Our Process</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:60rem;margin:0 auto;">
        \${steps.map(s => html\`
          <div style="text-align:center;">
            <div style="width:3.5rem;height:3.5rem;border-radius:0.75rem;background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;font-size:1.5rem;margin:0 auto 1rem;">\${s.icon}</div>
            <h3 style="font-weight:600;margin:0 0 0.5rem;">\${s.title}</h3>
            <p style="font-size:0.875rem;color:#64748b;margin:0;">\${s.desc}</p>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const p=["Horizontal","WithIcons"];export{t as Horizontal,r as WithIcons,p as __namedExportsOrder,g as default};
