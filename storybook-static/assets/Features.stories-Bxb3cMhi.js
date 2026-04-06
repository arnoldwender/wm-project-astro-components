import{b as s}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/Features",tags:["autodocs"],parameters:{docs:{description:{component:`
Premium features showcase section.
- Five layouts: grid, alternating, bento, cards, list
- Configurable columns (2-4)
- Scroll-triggered entrance animations
- Feature highlighting and badge labels
        `}}},argTypes:{layout:{control:"select",options:["grid","alternating","bento","cards","list"],description:"Layout type"},columns:{control:"select",options:[2,3,4],description:"Grid columns"},title:{control:"text",description:"Section title"}}},r=(e,u,p,n=!1)=>s`
  <div style="padding: 1.5rem; ${n?"border: 2px solid #3b82f6; border-radius: 1rem; position: relative;":""}">
    ${n?s`<span style="position: absolute; top: -0.5rem; right: 1rem; padding: 0.125rem 0.5rem; background: #3b82f6; color: #fff; font-size: 0.625rem; font-weight: 600; border-radius: 9999px;">Popular</span>`:""}
    <div style="width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.1); margin-bottom: 1rem;">
      <span style="font-size: 1.25rem;">${e}</span>
    </div>
    <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${u}</h3>
    <p style="font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5;">${p}</p>
  </div>
`,g=e=>s`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Built for modern teams</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${e.title}</h2>
        <p style="color: #64748b; max-width: 32rem; margin: 0 auto;">Everything you need to manage projects, track progress, and ship faster.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 2rem;">
        ${r("⚡","Blazing Fast","Sub-100ms load times worldwide.")}
        ${r("🔒","Secure by Default","End-to-end encryption on all plans.")}
        ${r("📈","Scales With You","From 5 users to 5,000 with zero config.",!0)}
        ${r("🌍","Global CDN","Content delivered from 50+ edge locations.")}
        ${r("🔄","Integrations","Connect 200+ tools and services.")}
        ${r("📊","Analytics","Real-time dashboards and reports.")}
      </div>
    </div>
  </section>
`,t={args:{layout:"grid",columns:3,title:"Why Choose Acme Platform"},render:e=>g(e)},o={args:{layout:"grid",columns:2,title:"Core Features"},render:e=>g(e)};var a,i,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 3,
    title: 'Why Choose Acme Platform'
  },
  render: args => renderFeatures(args)
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,m,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    layout: 'grid',
    columns: 2,
    title: 'Core Features'
  },
  render: args => renderFeatures(args)
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Grid","TwoColumns"];export{t as Grid,o as TwoColumns,b as __namedExportsOrder,y as default};
