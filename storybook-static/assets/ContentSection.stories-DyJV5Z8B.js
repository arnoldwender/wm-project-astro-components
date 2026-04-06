import{b as t}from"./lit-element-CdmuTPXr.js";const v={title:"Sections/ContentSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Flexible content blocks for text, media, and mixed layouts.
- Seven variants: prose, media-left, media-right, media-top, media-bottom, full-bleed, split
- Configurable media aspect ratio and rounded corners
- Vertical alignment control
        `}}},argTypes:{variant:{control:"select",options:["prose","media-left","media-right","media-top","media-bottom","full-bleed","split"],description:"Layout variant"},title:{control:"text",description:"Section title"}}},i=e=>t`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: ${e.variant==="prose"?"48rem":"72rem"}; margin: 0 auto;">
      ${e.variant==="prose"?t`
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">About Us</span>
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 1.5rem;">${e.title}</h2>
          <div style="font-size: 1.125rem; line-height: 1.8; color: #475569;">
            <p style="margin: 0 0 1.5rem;">Founded in 2020, Acme Corp set out to simplify project management for small teams. What started as a side project has grown into a platform used by thousands of teams worldwide.</p>
            <p style="margin: 0 0 1.5rem;">Our mission is simple: make collaboration effortless. We believe that great tools should get out of your way and let you focus on what matters most -- building amazing products.</p>
            <p style="margin: 0;">Today, we serve over 10,000 teams across 50 countries, and we're just getting started.</p>
          </div>
        </div>
      `:t`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; ${e.variant==="media-left",""}">
          ${e.variant==="media-left"?t`
            <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem;"></div>
          `:""}
          <div>
            <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; display: block; margin-bottom: 0.5rem;">About Us</span>
            <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 1rem;">${e.title}</h2>
            <p style="font-size: 1.125rem; line-height: 1.7; color: #475569;">Founded in 2020, Acme Corp set out to simplify project management for small teams. Our platform helps thousands of teams collaborate more effectively every day.</p>
          </div>
          ${e.variant==="media-right"?t`
            <div style="aspect-ratio: 4/3; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 1rem;"></div>
          `:""}
        </div>
      `}
    </div>
  </section>
`,r={args:{variant:"prose",title:"Our Story"},render:e=>i(e)},a={args:{variant:"media-right",title:"Our Story"},render:e=>i(e)},o={args:{variant:"media-left",title:"Our Mission"},render:e=>i(e)};var s,n,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'prose',
    title: 'Our Story'
  },
  render: args => renderContent(args)
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,l,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'media-right',
    title: 'Our Story'
  },
  render: args => renderContent(args)
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'media-left',
    title: 'Our Mission'
  },
  render: args => renderContent(args)
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const y=["Prose","MediaRight","MediaLeft"];export{o as MediaLeft,a as MediaRight,r as Prose,y as __namedExportsOrder,v as default};
