import{b as t}from"./lit-element-CdmuTPXr.js";const p={title:"Sections/TabPanel",tags:["autodocs"],parameters:{docs:{description:{component:"Individual tab panel content wrapper. Semantic tabpanel role with aria-labelledby linking. Keyboard focusable. Accepts any slotted content."}}},argTypes:{id:{control:"text"}}},e={render:()=>t`
    <div style="padding:2rem;font-family:system-ui,sans-serif;">
      <div role="tabpanel" aria-labelledby="tab-features" style="padding:1.5rem;border:1px solid #e2e8f0;border-radius:0 0 0.5rem 0.5rem;border-top:2px solid #3b82f6;">
        <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.75rem;">Platform Features</h3>
        <p style="color:#64748b;margin:0;">Real-time analytics, team collaboration tools, and automated reports to help your team work smarter.</p>
      </div>
    </div>
  `},r={render:()=>t`
    <div style="padding:2rem;font-family:system-ui,sans-serif;">
      <div role="tabpanel" style="padding:1.5rem;border:1px solid #e2e8f0;border-radius:0.5rem;">
        <h3 style="font-weight:700;margin:0 0 1rem;">Pricing Details</h3>
        <ul style="list-style:none;padding:0;margin:0;">
          ${["Starter: Free forever","Pro: €29/month","Enterprise: Custom pricing"].map(d=>t`
            <li style="padding:0.5rem 0;border-bottom:1px solid #f1f5f9;font-size:0.875rem;color:#64748b;">${d}</li>
          `)}
        </ul>
      </div>
    </div>
  `};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:2rem;font-family:system-ui,sans-serif;">
      <div role="tabpanel" aria-labelledby="tab-features" style="padding:1.5rem;border:1px solid #e2e8f0;border-radius:0 0 0.5rem 0.5rem;border-top:2px solid #3b82f6;">
        <h3 style="font-size:1.25rem;font-weight:700;margin:0 0 0.75rem;">Platform Features</h3>
        <p style="color:#64748b;margin:0;">Real-time analytics, team collaboration tools, and automated reports to help your team work smarter.</p>
      </div>
    </div>
  \`
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,s,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding:2rem;font-family:system-ui,sans-serif;">
      <div role="tabpanel" style="padding:1.5rem;border:1px solid #e2e8f0;border-radius:0.5rem;">
        <h3 style="font-weight:700;margin:0 0 1rem;">Pricing Details</h3>
        <ul style="list-style:none;padding:0;margin:0;">
          \${['Starter: Free forever', 'Pro: €29/month', 'Enterprise: Custom pricing'].map(item => html\`
            <li style="padding:0.5rem 0;border-bottom:1px solid #f1f5f9;font-size:0.875rem;color:#64748b;">\${item}</li>
          \`)}
        </ul>
      </div>
    </div>
  \`
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const f=["Default","WithRichContent"];export{e as Default,r as WithRichContent,f as __namedExportsOrder,p as default};
