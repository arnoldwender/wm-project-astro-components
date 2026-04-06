import{b as r}from"./lit-element-CdmuTPXr.js";const g={title:"Sections/TestimonialsSection",tags:["autodocs"],parameters:{docs:{description:{component:"Social-proof section with six layout variants (grid, carousel, featured, masonry, quote, wall). Configurable columns, carousel navigation, masonry CSS columns layout."}}},argTypes:{variant:{control:"select",options:["grid","carousel","featured","masonry","quote","wall"]},columns:{control:{type:"range",min:2,max:4}}}},t={render:()=>r`
    <section style="padding:4rem 2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.5rem;">Testimonials</span>
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;">What Our Customers Say</h2>
        <p style="color:#64748b;">Trusted by teams worldwide.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        ${[{name:"Jane Doe",role:"CEO, Acme Corp",quote:"This tool saved us hours every week."},{name:"John Smith",role:"CTO, Globex",quote:"The best investment we made this year."},{name:"Maria Garcia",role:"Designer, Initech",quote:"Intuitive and beautiful. Highly recommended."}].map(e=>r`
          <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;">
            <div style="color:#f59e0b;margin-bottom:0.75rem;">★★★★★</div>
            <p style="color:#1e293b;margin:0 0 1.5rem;line-height:1.6;">"${e.quote}"</p>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:0.75rem;">${e.name.split(" ").map(d=>d[0]).join("")}</div>
              <div><p style="font-weight:600;margin:0;font-size:0.875rem;">${e.name}</p><p style="font-size:0.75rem;color:#94a3b8;margin:0;">${e.role}</p></div>
            </div>
          </div>
        `)}
      </div>
    </section>
  `},i={render:()=>r`
    <section style="padding:4rem 2rem;background:#1e293b;color:white;font-family:system-ui,sans-serif;text-align:center;">
      <div style="max-width:48rem;margin:0 auto;">
        <blockquote style="font-size:1.75rem;font-weight:500;font-style:italic;margin:0 0 2rem;line-height:1.5;">"The single best decision we made for our business this year."</blockquote>
        <div style="display:flex;align-items:center;justify-content:center;gap:1rem;">
          <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-weight:600;">JD</div>
          <div style="text-align:left;"><p style="font-weight:600;margin:0;">Jane Doe</p><p style="font-size:0.875rem;opacity:0.7;margin:0;">CEO, Acme Corp</p></div>
        </div>
      </div>
    </section>
  `};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
      <div style="text-align:center;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#3b82f6;display:block;margin-bottom:0.5rem;">Testimonials</span>
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 0.5rem;">What Our Customers Say</h2>
        <p style="color:#64748b;">Trusted by teams worldwide.</p>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:64rem;margin:0 auto;">
        \${[{
    name: 'Jane Doe',
    role: 'CEO, Acme Corp',
    quote: 'This tool saved us hours every week.'
  }, {
    name: 'John Smith',
    role: 'CTO, Globex',
    quote: 'The best investment we made this year.'
  }, {
    name: 'Maria Garcia',
    role: 'Designer, Initech',
    quote: 'Intuitive and beautiful. Highly recommended.'
  }].map(t => html\`
          <div style="background:white;border:1px solid #e2e8f0;border-radius:0.75rem;padding:1.5rem;">
            <div style="color:#f59e0b;margin-bottom:0.75rem;">★★★★★</div>
            <p style="color:#1e293b;margin:0 0 1.5rem;line-height:1.6;">"\${t.quote}"</p>
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:0.75rem;">\${t.name.split(' ').map(n => n[0]).join('')}</div>
              <div><p style="font-weight:600;margin:0;font-size:0.875rem;">\${t.name}</p><p style="font-size:0.75rem;color:#94a3b8;margin:0;">\${t.role}</p></div>
            </div>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var a,m,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;background:#1e293b;color:white;font-family:system-ui,sans-serif;text-align:center;">
      <div style="max-width:48rem;margin:0 auto;">
        <blockquote style="font-size:1.75rem;font-weight:500;font-style:italic;margin:0 0 2rem;line-height:1.5;">"The single best decision we made for our business this year."</blockquote>
        <div style="display:flex;align-items:center;justify-content:center;gap:1rem;">
          <div style="width:3rem;height:3rem;border-radius:50%;background:rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;font-weight:600;">JD</div>
          <div style="text-align:left;"><p style="font-weight:600;margin:0;">Jane Doe</p><p style="font-size:0.875rem;opacity:0.7;margin:0;">CEO, Acme Corp</p></div>
        </div>
      </div>
    </section>
  \`
}`,...(l=(m=i.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const p=["Default","SingleQuote"];export{t as Default,i as SingleQuote,p as __namedExportsOrder,g as default};
