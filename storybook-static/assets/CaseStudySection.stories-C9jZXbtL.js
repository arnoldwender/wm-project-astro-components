import{b as s}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/CaseStudySection",tags:["autodocs"],parameters:{docs:{description:{component:`
Case study and portfolio showcase section.
- Six variants: grid, featured, carousel, detail, minimal, stats
- Metrics display, client testimonials, tags and industry badges
        `}}},argTypes:{variant:{control:"select",options:["grid","featured","carousel","detail","minimal","stats"],description:"Layout variant"},title:{control:"text",description:"Section title"},columns:{control:"select",options:[2,3],description:"Grid columns"}}},r=(e,p,a)=>s`
  <article style="background: #fff; border-radius: 1rem; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: transform 0.2s;">
    <div style="aspect-ratio: 16/10; background: linear-gradient(135deg, #667eea, #764ba2);"></div>
    <div style="padding: 1.5rem;">
      <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6;">${e}</span>
      <h3 style="font-size: 1.125rem; font-weight: 700; color: #1e293b; margin: 0.25rem 0 0.5rem;">${p}</h3>
      <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
        <span style="font-size: 0.75rem; padding: 0.125rem 0.5rem; background: #f1f5f9; border-radius: 9999px; color: #64748b;">UX</span>
        <span style="font-size: 0.75rem; padding: 0.125rem 0.5rem; background: #f1f5f9; border-radius: 9999px; color: #64748b;">Shopify</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${a.length}, 1fr); gap: 0.5rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">
        ${a.map(g=>s`
          <div style="text-align: center;">
            <span style="display: block; font-size: 1.25rem; font-weight: 700; color: #3b82f6;">${g}</span>
            <span style="font-size: 0.625rem; color: #94a3b8; text-transform: uppercase;">Metric</span>
          </div>
        `)}
      </div>
    </div>
  </article>
`,f=e=>s`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Case Studies</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${e.title}</h2>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 2rem;">
        ${r("Acme Corp","E-Commerce Redesign",["+200%","+150%","-40%"])}
        ${r("WidgetCo","Brand Identity Refresh",["+80%","+120%"])}
      </div>
    </div>
  </section>
`,t={args:{variant:"grid",title:"Our Work",columns:2},render:e=>f(e)},i={args:{variant:"grid",title:"Client Success Stories",columns:3},render:e=>s`
    <section style="padding: 4rem 2rem;">
      <div style="max-width: 72rem; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b;">${e.title}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          ${r("Acme Corp","E-Commerce Redesign",["+200%"])}
          ${r("WidgetCo","Brand Refresh",["+80%"])}
          ${r("Globex","Mobile App",["+300%"])}
        </div>
      </div>
    </section>
  `};var o,n,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    title: 'Our Work',
    columns: 2
  },
  render: args => renderCaseStudy(args)
}`,...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var l,m,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    title: 'Client Success Stories',
    columns: 3
  },
  render: args => html\`
    <section style="padding: 4rem 2rem;">
      <div style="max-width: 72rem; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b;">\${args.title}</h2>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          \${caseCard('Acme Corp', 'E-Commerce Redesign', ['+200%'])}
          \${caseCard('WidgetCo', 'Brand Refresh', ['+80%'])}
          \${caseCard('Globex', 'Mobile App', ['+300%'])}
        </div>
      </div>
    </section>
  \`
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const v=["Grid","ThreeColumns"];export{t as Grid,i as ThreeColumns,v as __namedExportsOrder,y as default};
