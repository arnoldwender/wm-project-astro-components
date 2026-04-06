import{b as t}from"./lit-element-CdmuTPXr.js";const c={title:"Sections/TeamMember",tags:["autodocs"],parameters:{docs:{description:{component:"Individual team member card. Five variants (default, card, horizontal, minimal, overlay). Built-in social icons for LinkedIn, Twitter, GitHub, etc. Initials fallback."}}},argTypes:{variant:{control:"select",options:["default","card","horizontal","minimal","overlay"]},name:{control:"text"},role:{control:"text"}}},e={render:()=>t`
    <div style="max-width:16rem;padding:2rem;font-family:system-ui,sans-serif;text-align:center;">
      <div style="width:10rem;height:10rem;border-radius:50%;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(59,130,246,0.4));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
        <span style="font-size:2.5rem;font-weight:700;color:#3b82f6;">JD</span>
      </div>
      <h3 style="font-weight:600;font-size:1.125rem;margin:0 0 0.25rem;">Jane Doe</h3>
      <p style="font-size:0.875rem;color:#3b82f6;font-weight:500;margin:0 0 0.5rem;">CEO & Founder</p>
      <p style="font-size:0.875rem;color:#64748b;margin:0 0 1rem;">Passionate about building great products.</p>
      <div style="display:flex;justify-content:center;gap:0.5rem;">
        ${["Li","X","GH"].map(m=>t`
          <a href="#" style="width:2.5rem;height:2.5rem;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;color:#64748b;text-decoration:none;">${m}</a>
        `)}
      </div>
    </div>
  `},r={render:()=>t`
    <div style="max-width:18rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:1rem;padding:1.5rem;text-align:center;">
        <div style="width:7rem;height:7rem;border-radius:50%;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(59,130,246,0.4));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
          <span style="font-size:2rem;font-weight:700;color:#3b82f6;">JS</span>
        </div>
        <h3 style="font-weight:600;font-size:1.125rem;margin:0 0 0.25rem;">John Smith</h3>
        <p style="font-size:0.875rem;color:#3b82f6;font-weight:500;margin:0 0 0.5rem;">Lead Engineer</p>
        <p style="font-size:0.875rem;color:#64748b;margin:0;">Full-stack developer with 10 years of experience.</p>
      </div>
    </div>
  `};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:16rem;padding:2rem;font-family:system-ui,sans-serif;text-align:center;">
      <div style="width:10rem;height:10rem;border-radius:50%;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(59,130,246,0.4));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
        <span style="font-size:2.5rem;font-weight:700;color:#3b82f6;">JD</span>
      </div>
      <h3 style="font-weight:600;font-size:1.125rem;margin:0 0 0.25rem;">Jane Doe</h3>
      <p style="font-size:0.875rem;color:#3b82f6;font-weight:500;margin:0 0 0.5rem;">CEO & Founder</p>
      <p style="font-size:0.875rem;color:#64748b;margin:0 0 1rem;">Passionate about building great products.</p>
      <div style="display:flex;justify-content:center;gap:0.5rem;">
        \${['Li', 'X', 'GH'].map(s => html\`
          <a href="#" style="width:2.5rem;height:2.5rem;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;font-size:0.625rem;font-weight:700;color:#64748b;text-decoration:none;">\${s}</a>
        \`)}
      </div>
    </div>
  \`
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var o,s,d;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="max-width:18rem;padding:2rem;font-family:system-ui,sans-serif;">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:1rem;padding:1.5rem;text-align:center;">
        <div style="width:7rem;height:7rem;border-radius:50%;background:linear-gradient(135deg,rgba(59,130,246,0.2),rgba(59,130,246,0.4));display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
          <span style="font-size:2rem;font-weight:700;color:#3b82f6;">JS</span>
        </div>
        <h3 style="font-weight:600;font-size:1.125rem;margin:0 0 0.25rem;">John Smith</h3>
        <p style="font-size:0.875rem;color:#3b82f6;font-weight:500;margin:0 0 0.5rem;">Lead Engineer</p>
        <p style="font-size:0.875rem;color:#64748b;margin:0;">Full-stack developer with 10 years of experience.</p>
      </div>
    </div>
  \`
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Default","CardVariant"];export{r as CardVariant,e as Default,f as __namedExportsOrder,c as default};
