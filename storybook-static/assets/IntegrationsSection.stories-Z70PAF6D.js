import{b as n}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/IntegrationsSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Display integrations, partners, or compatible tools.
- Six variants: grid, categories, featured, marquee, searchable, compact
- Configurable columns (2-5)
- Search input and category grouping
        `}}},argTypes:{variant:{control:"select",options:["grid","categories","featured","marquee","searchable","compact"],description:"Layout variant"},columns:{control:"select",options:[2,3,4,5],description:"Grid columns"},title:{control:"text",description:"Section title"}}},r=(e,g,p,f,u)=>n`
  <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.25rem;">
    <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 0.75rem;">
      <div style="width: 2.5rem; height: 2.5rem; background: #f1f5f9; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">${g}</div>
      <span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: ${f}; color: ${u}; border-radius: 9999px;">${p}</span>
    </div>
    <h3 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0;">${e}</h3>
  </div>
`,m=e=>n`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Ecosystem</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${e.title}</h2>
        <p style="color: #64748b;">Connect Acme Platform with the tools you already use.</p>
      </div>
      ${e.variant==="searchable"?n`
        <div style="max-width: 24rem; margin: 0 auto 2rem;">
          <input type="text" placeholder="Search integrations..." style="width: 100%; padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box;" />
        </div>
      `:""}
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 1rem;">
        ${r("Slack","💬","Available","#dcfce7","#166534")}
        ${r("GitHub","🐙","Available","#dcfce7","#166534")}
        ${r("Figma","🎨","New","#fae8ff","#86198f")}
        ${r("Notion","📝","Available","#dcfce7","#166534")}
        ${r("Jira","📋","Beta","#dbeafe","#1e40af")}
        ${r("Zapier","⚡","Available","#dcfce7","#166534")}
        ${r("Stripe","💳","Coming Soon","#fef3c7","#92400e")}
        ${r("Vercel","▲","New","#fae8ff","#86198f")}
      </div>
    </div>
  </section>
`,t={args:{variant:"grid",columns:4,title:"200+ Integrations"},render:e=>m(e)},a={args:{variant:"searchable",columns:4,title:"Find an Integration"},render:e=>m(e)};var i,o,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 4,
    title: '200+ Integrations'
  },
  render: args => renderIntegrations(args)
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'searchable',
    columns: 4,
    title: 'Find an Integration'
  },
  render: args => renderIntegrations(args)
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const h=["Grid","Searchable"];export{t as Grid,a as Searchable,h as __namedExportsOrder,y as default};
