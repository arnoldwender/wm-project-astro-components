import{b as a}from"./lit-element-CdmuTPXr.js";const c={title:"Sections/StatsSection",tags:["autodocs"],parameters:{docs:{description:{component:"Statistics display section. Five variants (simple, cards, inline, background, animated). Background image variant with dark overlay, animated count-up on scroll."}}},argTypes:{variant:{control:"select",options:["simple","cards","inline","background","animated"]},columns:{control:{type:"range",min:2,max:5}}}},t={render:()=>a`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">By the Numbers</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        ${[{val:"10K+",label:"Happy Customers",icon:"👥"},{val:"99.9%",label:"Uptime",icon:"⚡"},{val:"24/7",label:"Support",icon:"🎧"},{val:"50+",label:"Integrations",icon:"🔗"}].map(e=>a`
          <div style="text-align:center;">
            <span style="font-size:2rem;display:block;margin-bottom:0.5rem;">${e.icon}</span>
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;">${e.val}</div>
            <div style="color:#64748b;">${e.label}</div>
          </div>
        `)}
      </div>
    </section>
  `},i={render:()=>a`
    <section style="padding:4rem 2rem;background:#1e293b;color:white;font-family:system-ui,sans-serif;position:relative;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Our Impact</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:48rem;margin:0 auto;">
        ${[{val:"500+",label:"Projects Delivered"},{val:"98%",label:"Client Satisfaction"},{val:"15",label:"Years Experience"}].map(e=>a`
          <div style="text-align:center;">
            <div style="font-size:3rem;font-weight:700;">${e.val}</div>
            <div style="opacity:0.8;">${e.label}</div>
          </div>
        `)}
      </div>
    </section>
  `};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">By the Numbers</h2>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        \${[{
    val: '10K+',
    label: 'Happy Customers',
    icon: '👥'
  }, {
    val: '99.9%',
    label: 'Uptime',
    icon: '⚡'
  }, {
    val: '24/7',
    label: 'Support',
    icon: '🎧'
  }, {
    val: '50+',
    label: 'Integrations',
    icon: '🔗'
  }].map(s => html\`
          <div style="text-align:center;">
            <span style="font-size:2rem;display:block;margin-bottom:0.5rem;">\${s.icon}</span>
            <div style="font-size:2.5rem;font-weight:700;color:#1e293b;">\${s.val}</div>
            <div style="color:#64748b;">\${s.label}</div>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var n,o,m;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;background:#1e293b;color:white;font-family:system-ui,sans-serif;position:relative;">
      <h2 style="text-align:center;font-size:2rem;font-weight:700;margin:0 0 3rem;">Our Impact</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:48rem;margin:0 auto;">
        \${[{
    val: '500+',
    label: 'Projects Delivered'
  }, {
    val: '98%',
    label: 'Client Satisfaction'
  }, {
    val: '15',
    label: 'Years Experience'
  }].map(s => html\`
          <div style="text-align:center;">
            <div style="font-size:3rem;font-weight:700;">\${s.val}</div>
            <div style="opacity:0.8;">\${s.label}</div>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const p=["Default","WithBackground"];export{t as Default,i as WithBackground,p as __namedExportsOrder,c as default};
