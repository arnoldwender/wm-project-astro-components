import{b as i}from"./lit-element-CdmuTPXr.js";const c={title:"Sections/StatItem",tags:["autodocs"],parameters:{docs:{description:{component:"Individual statistic item. Four variants (default, card, inline, centered). Count-up animation, prefix/suffix support, emoji or SVG icon."}}},argTypes:{variant:{control:"select",options:["default","card","inline","centered"]},value:{control:"text"},label:{control:"text"}}},e={render:()=>i`
    <div style="display:flex;gap:3rem;padding:2rem;font-family:system-ui,sans-serif;">
      ${[{val:"10K+",label:"Happy Customers",icon:"👥"},{val:"99.9%",label:"Uptime",icon:"⚡"},{val:"24/7",label:"Support",icon:"🎧"}].map(r=>i`
        <div style="text-align:center;">
          <span style="font-size:2rem;display:block;margin-bottom:0.5rem;">${r.icon}</span>
          <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:0.25rem;">${r.val}</div>
          <div style="color:#64748b;font-weight:500;">${r.label}</div>
        </div>
      `)}
    </div>
  `},t={render:()=>i`
    <div style="max-width:16rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;text-align:center;">
        <div style="width:3rem;height:3rem;border-radius:0.75rem;background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.5rem;">📊</div>
        <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:0.25rem;">500+</div>
        <div style="color:#64748b;font-weight:500;">Projects Delivered</div>
        <p style="font-size:0.875rem;color:#94a3b8;margin:0.5rem 0 0;">And counting every week</p>
      </div>
    </div>
  `};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:flex;gap:3rem;padding:2rem;font-family:system-ui,sans-serif;">
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
  }].map(s => html\`
        <div style="text-align:center;">
          <span style="font-size:2rem;display:block;margin-bottom:0.5rem;">\${s.icon}</span>
          <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:0.25rem;">\${s.val}</div>
          <div style="color:#64748b;font-weight:500;">\${s.label}</div>
        </div>
      \`)}
    </div>
  \`
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,d,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:16rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;text-align:center;">
        <div style="width:3rem;height:3rem;border-radius:0.75rem;background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 0.75rem;font-size:1.5rem;">📊</div>
        <div style="font-size:2.5rem;font-weight:700;color:#1e293b;margin-bottom:0.25rem;">500+</div>
        <div style="color:#64748b;font-weight:500;">Projects Delivered</div>
        <p style="font-size:0.875rem;color:#94a3b8;margin:0.5rem 0 0;">And counting every week</p>
      </div>
    </div>
  \`
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const p=["Default","CardVariant"];export{t as CardVariant,e as Default,p as __namedExportsOrder,c as default};
