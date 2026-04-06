import{b as l}from"./lit-element-CdmuTPXr.js";const h={title:"Sections/FeaturesSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Multiple layouts for showcasing features and benefits.
- Six variants: grid, alternating, icons, cards, list, bento
- Configurable columns (2-4)
- Left or center header alignment
- Background options including decorative pattern
        `}}},argTypes:{variant:{control:"select",options:["grid","alternating","icons","cards","list","bento"],description:"Layout variant"},columns:{control:"select",options:[2,3,4],description:"Grid columns"},title:{control:"text",description:"Section title"},align:{control:"select",options:["left","center"],description:"Header alignment"}}},n=(e,g,p,u=!1)=>l`
  <div style="${u?"background: #fff; border: 1px solid #e2e8f0; border-radius: 1rem; padding: 1.5rem; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,0.05);":"padding: 1.5rem;"}">
    <div style="width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.1); margin-bottom: 1rem;">
      <span style="font-size: 1.25rem;">${e}</span>
    </div>
    <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${g}</h3>
    <p style="font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5;">${p}</p>
  </div>
`,m=e=>l`
  <section style="padding: 4rem 2rem; background: ${e.variant==="cards"?"#f8fafc":"#fff"};">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: ${e.align}; margin-bottom: 3rem; ${e.align==="center"?"":"max-width: 32rem;"}">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">Features</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem;">${e.title}</h2>
        <p style="color: #64748b;">Acme Platform comes with all the tools your team needs to succeed.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 1.5rem;">
        ${n("⚡","Fast","Lightning fast performance",e.variant==="cards")}
        ${n("🔒","Secure","Enterprise-grade security",e.variant==="cards")}
        ${n("🌍","Global","CDN in 50+ regions",e.variant==="cards")}
      </div>
    </div>
  </section>
`,r={args:{variant:"grid",columns:3,title:"Everything You Need",align:"center"},render:e=>m(e)},t={args:{variant:"cards",columns:3,title:"Platform Highlights",align:"left"},render:e=>m(e)};var a,i,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 3,
    title: 'Everything You Need',
    align: 'center'
  },
  render: args => renderFeaturesSection(args)
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'cards',
    columns: 3,
    title: 'Platform Highlights',
    align: 'left'
  },
  render: args => renderFeaturesSection(args)
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Grid","Cards"];export{t as Cards,r as Grid,b as __namedExportsOrder,h as default};
