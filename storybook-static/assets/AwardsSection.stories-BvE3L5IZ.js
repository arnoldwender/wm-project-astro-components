import{b as m}from"./lit-element-CdmuTPXr.js";const f={title:"Sections/AwardsSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Awards, certifications, and achievements section.
- Six variants: grid, carousel, badges, timeline, featured, showcase
- Configurable columns (2-5)
- Carousel navigation and timeline connector
        `}}},argTypes:{variant:{control:"select",options:["grid","carousel","badges","timeline","featured","showcase"],description:"Layout variant"},columns:{control:"select",options:[2,3,4,5],description:"Grid columns"},title:{control:"text",description:"Section title"}}},r=(e,g,u)=>m`
  <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; text-align: center;">
    <div style="width: 3rem; height: 3rem; margin: 0 auto 0.75rem; background: #f0f9ff; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">🏆</div>
    <span style="display: inline-block; padding: 0.125rem 0.5rem; font-size: 0.75rem; font-weight: 600; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 9999px; margin-bottom: 0.5rem;">${u}</span>
    <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.25rem; font-size: 0.875rem;">${e}</h3>
    <p style="font-size: 0.75rem; color: #64748b; margin: 0;">${g}</p>
  </div>
`,l=e=>m`
  <section style="padding: 4rem 2rem; background: ${e.variant==="showcase"?"#f8fafc":"#fff"};">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.05em;">Recognition</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${e.title}</h2>
        <p style="color: #64748b; max-width: 32rem; margin: 0 auto;">Our work has been recognized by industry leaders.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 1.5rem;">
        ${r("Best SaaS Product","Acme Awards","2025")}
        ${r("Design Excellence","Global UX Summit","2024")}
        ${r("Innovation Award","TechCrunch","2024")}
        ${r("Customer Choice","G2 Crowd","2023")}
      </div>
    </div>
  </section>
`,t={args:{variant:"grid",columns:4,title:"Awards & Achievements"},render:e=>l(e)},n={args:{variant:"grid",columns:2,title:"Our Certifications"},render:e=>l(e)};var i,o,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 4,
    title: 'Awards & Achievements'
  },
  render: args => renderAwardsSection(args)
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 2,
    title: 'Our Certifications'
  },
  render: args => renderAwardsSection(args)
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Grid","TwoColumns"];export{t as Grid,n as TwoColumns,b as __namedExportsOrder,f as default};
