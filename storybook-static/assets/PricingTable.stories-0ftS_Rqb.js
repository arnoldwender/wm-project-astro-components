import{b as t}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/PricingTable",tags:["autodocs"],parameters:{docs:{description:{component:"Premium pricing table with monthly/yearly billing toggle, feature tooltips, Schema.org Product markup, savings badges, trust signals, and a generic comparison mode for feature tables."}}},argTypes:{defaultBilling:{control:"select",options:["monthly","yearly"],description:"Default billing period"},mode:{control:"select",options:["pricing","comparison"],description:"Display mode"}}},h=[{name:"Starter",desc:"For individuals",monthly:0,yearly:0,features:["3 projects","1 GB storage","Community support"],cta:"Get Started"},{name:"Pro",desc:"For growing teams",monthly:29,yearly:290,features:["Unlimited projects","100 GB storage","Priority support","API access"],cta:"Start Trial",popular:!0},{name:"Enterprise",desc:"For large orgs",monthly:99,yearly:990,features:["Everything in Pro","SSO & SAML","Dedicated manager","Custom SLA"],cta:"Contact Sales"}],r={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;max-width:48rem;margin:0 auto 2rem;">
        <h2 style="font-size:2.5rem;font-weight:700;margin:0 0 1rem;">Simple, transparent pricing</h2>
        <p style="font-size:1.125rem;color:#64748b;">Choose the plan that fits your needs.</p>
      </div>
      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">Monthly</span>
        <div style="width:4rem;height:2rem;background:#3b82f6;border-radius:9999px;position:relative;cursor:pointer;"><span style="position:absolute;top:0.25rem;right:0.25rem;width:1.5rem;height:1.5rem;background:white;border-radius:50%;"></span></div>
        <span style="font-size:0.875rem;font-weight:500;color:#64748b;">Yearly <span style="padding:0.125rem 0.5rem;font-size:0.75rem;font-weight:600;background:#dcfce7;color:#166534;border-radius:9999px;">Save 17%</span></span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:72rem;margin:0 auto;">
        ${h.map(e=>t`
          <article style="position:relative;display:flex;flex-direction:column;padding:2rem;border-radius:1rem;${e.popular?"border:2px solid #3b82f6;box-shadow:0 10px 40px rgba(0,0,0,0.1);transform:scale(1.05);":"border:2px solid #e5e7eb;"}background:white;">
            ${e.popular?t`<div style="position:absolute;top:-1rem;left:50%;transform:translateX(-50%);"><span style="padding:0.25rem 1rem;font-size:0.875rem;font-weight:600;color:white;background:#3b82f6;border-radius:9999px;">Most Popular</span></div>`:""}
            <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.5rem;">${e.name}</h3>
            <p style="font-size:0.875rem;color:#6b7280;margin:0 0 1.5rem;">${e.desc}</p>
            <div style="margin-bottom:1.5rem;"><span style="color:#6b7280;">€</span><span style="font-size:3rem;font-weight:700;">${Math.round(e.yearly/12)}</span><span style="color:#6b7280;">/mo</span></div>
            <a href="#" style="display:block;text-align:center;padding:0.75rem;border-radius:0.5rem;font-weight:600;text-decoration:none;margin-bottom:1.5rem;${e.popular?"background:#3b82f6;color:white;":"background:#1e293b;color:white;"}">${e.cta}</a>
            <ul style="list-style:none;padding:0;margin:0;flex:1;">
              ${e.features.map(f=>t`<li style="display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0;font-size:0.875rem;"><svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${f}</li>`)}
            </ul>
          </article>
        `)}
      </div>
    </section>
  `},o={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;">
      <h2 style="font-size:2rem;font-weight:700;margin:0 0 2rem;">Monthly Plans</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        ${h.map(e=>t`
          <div style="border:1px solid #e5e7eb;border-radius:1rem;padding:2rem;background:white;">
            <h3 style="font-weight:700;margin:0 0 1rem;">${e.name}</h3>
            <div style="font-size:3rem;font-weight:700;margin-bottom:1rem;">€${e.monthly}<span style="font-size:1rem;font-weight:400;color:#6b7280;">/mo</span></div>
            <a href="#" style="display:block;padding:0.75rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;text-decoration:none;">${e.cta}</a>
          </div>
        `)}
      </div>
    </section>
  `},i={render:()=>t`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;max-width:48rem;margin:0 auto 2rem;">
        <h2 style="font-size:2.5rem;font-weight:700;margin:0 0 1rem;">Compare Plans</h2>
        <p style="font-size:1.125rem;color:#64748b;">See which plan is right for your team.</p>
      </div>
      <div style="overflow-x:auto;max-width:72rem;margin:0 auto;">
        <table style="width:100%;border-collapse:collapse;text-align:left;">
          <thead>
            <tr>
              <th style="padding:1rem;font-size:0.875rem;color:#6b7280;border-bottom:1px solid #e5e7eb;min-width:200px;">Feature</th>
              <th style="padding:1rem;text-align:center;border-bottom:1px solid #e5e7eb;min-width:140px;">Basic</th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #3b82f6;background:#eff6ff;min-width:140px;">
                <span style="display:inline-block;margin-bottom:0.5rem;padding:0.125rem 0.75rem;font-size:0.75rem;font-weight:600;color:white;background:#3b82f6;border-radius:9999px;">Best Value</span>
                <div style="font-size:1.125rem;font-weight:700;">Pro</div>
              </th>
              <th style="padding:1rem;text-align:center;border-bottom:1px solid #e5e7eb;min-width:140px;">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            ${[{name:"Users",basic:"1",pro:"10",enterprise:"Unlimited"},{name:"Storage",basic:"1 GB",pro:"100 GB",enterprise:"1 TB"},{name:"API Access",basic:!1,pro:!0,enterprise:!0},{name:"SSO/SAML",basic:!1,pro:!1,enterprise:!0},{name:"Priority Support",basic:!1,pro:!0,enterprise:!0},{name:"Custom SLA",basic:!1,pro:!1,enterprise:!0}].map(e=>t`
              <tr style="transition:background 150ms;">
                <td style="padding:0.75rem 1rem;font-size:0.875rem;font-weight:500;border-bottom:1px solid #f1f5f9;">${e.name}</td>
                <td style="padding:0.75rem 1rem;text-align:center;border-bottom:1px solid #f1f5f9;">
                  ${typeof e.basic=="boolean"?e.basic?t`<svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`:t`<svg width="20" height="20" fill="none" stroke="#d1d5db" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`:t`<span style="font-weight:500;color:#374151;">${e.basic}</span>`}
                </td>
                <td style="padding:0.75rem 1rem;text-align:center;background:#fafbff;border-bottom:1px solid #eff6ff;">
                  ${typeof e.pro=="boolean"?e.pro?t`<svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`:t`<svg width="20" height="20" fill="none" stroke="#d1d5db" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`:t`<span style="font-weight:500;color:#374151;">${e.pro}</span>`}
                </td>
                <td style="padding:0.75rem 1rem;text-align:center;border-bottom:1px solid #f1f5f9;">
                  ${typeof e.enterprise=="boolean"?e.enterprise?t`<svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`:t`<svg width="20" height="20" fill="none" stroke="#d1d5db" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>`:t`<span style="font-weight:500;color:#374151;">${e.enterprise}</span>`}
                </td>
              </tr>
            `)}
          </tbody>
          <tfoot>
            <tr>
              <td style="padding:1rem;"></td>
              <td style="padding:1rem;text-align:center;"><a href="#" style="display:inline-block;padding:0.625rem 1.5rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;">Get Started</a></td>
              <td style="padding:1rem;text-align:center;background:#fafbff;"><a href="#" style="display:inline-block;padding:0.625rem 1.5rem;background:#3b82f6;color:white;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;box-shadow:0 4px 12px rgba(59,130,246,0.3);">Choose Pro</a></td>
              <td style="padding:1rem;text-align:center;"><a href="#" style="display:inline-block;padding:0.625rem 1.5rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;">Contact Sales</a></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  `,name:"Comparison Mode"};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;max-width:48rem;margin:0 auto 2rem;">
        <h2 style="font-size:2.5rem;font-weight:700;margin:0 0 1rem;">Simple, transparent pricing</h2>
        <p style="font-size:1.125rem;color:#64748b;">Choose the plan that fits your needs.</p>
      </div>
      <div style="display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:3rem;">
        <span style="font-size:0.875rem;font-weight:500;color:#1e293b;">Monthly</span>
        <div style="width:4rem;height:2rem;background:#3b82f6;border-radius:9999px;position:relative;cursor:pointer;"><span style="position:absolute;top:0.25rem;right:0.25rem;width:1.5rem;height:1.5rem;background:white;border-radius:50%;"></span></div>
        <span style="font-size:0.875rem;font-weight:500;color:#64748b;">Yearly <span style="padding:0.125rem 0.5rem;font-size:0.75rem;font-weight:600;background:#dcfce7;color:#166534;border-radius:9999px;">Save 17%</span></span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:72rem;margin:0 auto;">
        \${tiers.map(t => html\`
          <article style="position:relative;display:flex;flex-direction:column;padding:2rem;border-radius:1rem;\${t.popular ? 'border:2px solid #3b82f6;box-shadow:0 10px 40px rgba(0,0,0,0.1);transform:scale(1.05);' : 'border:2px solid #e5e7eb;'}background:white;">
            \${t.popular ? html\`<div style="position:absolute;top:-1rem;left:50%;transform:translateX(-50%);"><span style="padding:0.25rem 1rem;font-size:0.875rem;font-weight:600;color:white;background:#3b82f6;border-radius:9999px;">Most Popular</span></div>\` : ''}
            <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.5rem;">\${t.name}</h3>
            <p style="font-size:0.875rem;color:#6b7280;margin:0 0 1.5rem;">\${t.desc}</p>
            <div style="margin-bottom:1.5rem;"><span style="color:#6b7280;">€</span><span style="font-size:3rem;font-weight:700;">\${Math.round(t.yearly / 12)}</span><span style="color:#6b7280;">/mo</span></div>
            <a href="#" style="display:block;text-align:center;padding:0.75rem;border-radius:0.5rem;font-weight:600;text-decoration:none;margin-bottom:1.5rem;\${t.popular ? 'background:#3b82f6;color:white;' : 'background:#1e293b;color:white;'}">\${t.cta}</a>
            <ul style="list-style:none;padding:0;margin:0;flex:1;">
              \${t.features.map(f => html\`<li style="display:flex;align-items:center;gap:0.75rem;padding:0.5rem 0;font-size:0.875rem;"><svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\${f}</li>\`)}
            </ul>
          </article>
        \`)}
      </div>
    </section>
  \`
}`,...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;text-align:center;">
      <h2 style="font-size:2rem;font-weight:700;margin:0 0 2rem;">Monthly Plans</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:64rem;margin:0 auto;">
        \${tiers.map(t => html\`
          <div style="border:1px solid #e5e7eb;border-radius:1rem;padding:2rem;background:white;">
            <h3 style="font-weight:700;margin:0 0 1rem;">\${t.name}</h3>
            <div style="font-size:3rem;font-weight:700;margin-bottom:1rem;">€\${t.monthly}<span style="font-size:1rem;font-weight:400;color:#6b7280;">/mo</span></div>
            <a href="#" style="display:block;padding:0.75rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;text-decoration:none;">\${t.cta}</a>
          </div>
        \`)}
      </div>
    </section>
  \`
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 2rem;font-family:system-ui,sans-serif;">
      <div style="text-align:center;max-width:48rem;margin:0 auto 2rem;">
        <h2 style="font-size:2.5rem;font-weight:700;margin:0 0 1rem;">Compare Plans</h2>
        <p style="font-size:1.125rem;color:#64748b;">See which plan is right for your team.</p>
      </div>
      <div style="overflow-x:auto;max-width:72rem;margin:0 auto;">
        <table style="width:100%;border-collapse:collapse;text-align:left;">
          <thead>
            <tr>
              <th style="padding:1rem;font-size:0.875rem;color:#6b7280;border-bottom:1px solid #e5e7eb;min-width:200px;">Feature</th>
              <th style="padding:1rem;text-align:center;border-bottom:1px solid #e5e7eb;min-width:140px;">Basic</th>
              <th style="padding:1rem;text-align:center;border-bottom:2px solid #3b82f6;background:#eff6ff;min-width:140px;">
                <span style="display:inline-block;margin-bottom:0.5rem;padding:0.125rem 0.75rem;font-size:0.75rem;font-weight:600;color:white;background:#3b82f6;border-radius:9999px;">Best Value</span>
                <div style="font-size:1.125rem;font-weight:700;">Pro</div>
              </th>
              <th style="padding:1rem;text-align:center;border-bottom:1px solid #e5e7eb;min-width:140px;">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            \${[{
    name: 'Users',
    basic: '1',
    pro: '10',
    enterprise: 'Unlimited'
  }, {
    name: 'Storage',
    basic: '1 GB',
    pro: '100 GB',
    enterprise: '1 TB'
  }, {
    name: 'API Access',
    basic: false,
    pro: true,
    enterprise: true
  }, {
    name: 'SSO/SAML',
    basic: false,
    pro: false,
    enterprise: true
  }, {
    name: 'Priority Support',
    basic: false,
    pro: true,
    enterprise: true
  }, {
    name: 'Custom SLA',
    basic: false,
    pro: false,
    enterprise: true
  }].map(row => html\`
              <tr style="transition:background 150ms;">
                <td style="padding:0.75rem 1rem;font-size:0.875rem;font-weight:500;border-bottom:1px solid #f1f5f9;">\${row.name}</td>
                <td style="padding:0.75rem 1rem;text-align:center;border-bottom:1px solid #f1f5f9;">
                  \${typeof row.basic === 'boolean' ? row.basic ? html\`<svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\` : html\`<svg width="20" height="20" fill="none" stroke="#d1d5db" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\` : html\`<span style="font-weight:500;color:#374151;">\${row.basic}</span>\`}
                </td>
                <td style="padding:0.75rem 1rem;text-align:center;background:#fafbff;border-bottom:1px solid #eff6ff;">
                  \${typeof row.pro === 'boolean' ? row.pro ? html\`<svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\` : html\`<svg width="20" height="20" fill="none" stroke="#d1d5db" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\` : html\`<span style="font-weight:500;color:#374151;">\${row.pro}</span>\`}
                </td>
                <td style="padding:0.75rem 1rem;text-align:center;border-bottom:1px solid #f1f5f9;">
                  \${typeof row.enterprise === 'boolean' ? row.enterprise ? html\`<svg width="20" height="20" fill="none" stroke="#22c55e" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>\` : html\`<svg width="20" height="20" fill="none" stroke="#d1d5db" viewBox="0 0 24 24" style="margin:0 auto;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>\` : html\`<span style="font-weight:500;color:#374151;">\${row.enterprise}</span>\`}
                </td>
              </tr>
            \`)}
          </tbody>
          <tfoot>
            <tr>
              <td style="padding:1rem;"></td>
              <td style="padding:1rem;text-align:center;"><a href="#" style="display:inline-block;padding:0.625rem 1.5rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;">Get Started</a></td>
              <td style="padding:1rem;text-align:center;background:#fafbff;"><a href="#" style="display:inline-block;padding:0.625rem 1.5rem;background:#3b82f6;color:white;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;box-shadow:0 4px 12px rgba(59,130,246,0.3);">Choose Pro</a></td>
              <td style="padding:1rem;text-align:center;"><a href="#" style="display:inline-block;padding:0.625rem 1.5rem;background:#1e293b;color:white;border-radius:0.5rem;font-weight:600;font-size:0.875rem;text-decoration:none;">Contact Sales</a></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  \`,
  name: 'Comparison Mode'
}`,...(c=(g=i.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};const u=["Default","MonthlyView","ComparisonMode"];export{i as ComparisonMode,r as Default,o as MonthlyView,u as __namedExportsOrder,y as default};
