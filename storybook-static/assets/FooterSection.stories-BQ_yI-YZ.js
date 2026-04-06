import{b as r}from"./lit-element-CdmuTPXr.js";const b={title:"Sections/FooterSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Website footer with various layouts.
- Six variants: default, simple, minimal, mega, centered, dark
- Logo, company name, tagline, social links
- Newsletter signup form
- Bottom links for legal pages (Impressum, Datenschutz)
        `}}},argTypes:{variant:{control:"select",options:["default","simple","minimal","mega","centered","dark"],description:"Layout variant"},companyName:{control:"text",description:"Company name"}}},i=e=>r`
  <footer style="background: ${e.variant==="dark"?"#1e293b":"#fff"}; color: ${e.variant==="dark"?"#e2e8f0":"#1e293b"}; padding: 3rem 2rem 1.5rem; border-top: 1px solid ${e.variant==="dark"?"#334155":"#e2e8f0"};">
    <div style="max-width: 72rem; margin: 0 auto;">
      ${e.variant==="minimal"?r`
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <span style="font-weight: 600;">${e.companyName}</span>
          <span style="font-size: 0.875rem; color: ${e.variant==="dark"?"#94a3b8":"#64748b"};">&copy; 2025 ${e.companyName}. All rights reserved.</span>
        </div>
      `:r`
        <div style="display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem;">
          <div>
            <h3 style="font-weight: 700; font-size: 1.25rem; margin: 0 0 0.5rem;">${e.companyName}</h3>
            <p style="font-size: 0.875rem; color: ${e.variant==="dark"?"#94a3b8":"#64748b"}; margin: 0 0 1.5rem; max-width: 20rem;">Building better tools for modern teams since 2020.</p>
            <div style="display: flex; gap: 0.75rem;">
              ${["Twitter","LinkedIn","GitHub"].map(a=>r`
                <a href="#" style="width: 2rem; height: 2rem; background: ${e.variant==="dark"?"#334155":"#f1f5f9"}; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: ${e.variant==="dark"?"#94a3b8":"#64748b"}; text-decoration: none; font-size: 0.625rem;">${a[0]}</a>
              `)}
            </div>
          </div>
          ${["Product","Company","Legal"].map(a=>r`
            <div>
              <h4 style="font-size: 0.875rem; font-weight: 600; margin: 0 0 1rem; ${e.variant==="dark"?"color: #e2e8f0;":""}">${a}</h4>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem;">
                ${(a==="Product"?["Features","Pricing","Integrations"]:a==="Company"?["About","Careers","Blog"]:["Impressum","Datenschutz","AGB"]).map(v=>r`
                  <li><a href="#" style="font-size: 0.875rem; color: ${e.variant==="dark"?"#94a3b8":"#64748b"}; text-decoration: none;">${v}</a></li>
                `)}
              </ul>
            </div>
          `)}
        </div>
        <div style="border-top: 1px solid ${e.variant==="dark"?"#334155":"#e2e8f0"}; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.875rem; color: ${e.variant==="dark"?"#94a3b8":"#64748b"};">&copy; 2025 ${e.companyName}. All rights reserved.</span>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#" style="font-size: 0.875rem; color: ${e.variant==="dark"?"#94a3b8":"#64748b"}; text-decoration: none;">Impressum</a>
            <a href="#" style="font-size: 0.875rem; color: ${e.variant==="dark"?"#94a3b8":"#64748b"}; text-decoration: none;">Datenschutz</a>
          </div>
        </div>
      `}
    </div>
  </footer>
`,t={args:{variant:"default",companyName:"Acme Corp"},render:e=>i(e)},n={args:{variant:"dark",companyName:"Acme Corp"},render:e=>i(e)},o={args:{variant:"minimal",companyName:"Acme Corp"},render:e=>i(e)};var s,m,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    companyName: 'Acme Corp'
  },
  render: args => renderFooter(args)
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,c,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    companyName: 'Acme Corp'
  },
  render: args => renderFooter(args)
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var f,y,u;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'minimal',
    companyName: 'Acme Corp'
  },
  render: args => renderFooter(args)
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};const k=["Default","Dark","Minimal"];export{n as Dark,t as Default,o as Minimal,k as __namedExportsOrder,b as default};
