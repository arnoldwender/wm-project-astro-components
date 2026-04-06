import{b as r}from"./lit-element-CdmuTPXr.js";const k={title:"Sections/LogoCloudSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Display partner/client logos with various layouts.
- Five variants: grid, marquee, centered, featured, minimal
- Configurable columns (3-6) for the grid variant
- Infinite marquee animation with speed control
- Grayscale filter with hover color reveal
        `}}},argTypes:{variant:{control:"select",options:["grid","marquee","centered","featured","minimal"],description:"Layout variant"},columns:{control:"select",options:[3,4,5,6],description:"Grid columns"},title:{control:"text",description:"Section title"},grayscale:{control:"boolean",description:"Grayscale logos"}}},o=["Acme Corp","WidgetCo","Globex Inc","Initech","Umbrella Corp","Stark Industries"],l=(e,a)=>r`
  <div style="display: flex; align-items: center; justify-content: center; padding: 1.5rem; ${a?"filter: grayscale(100%); opacity: 0.5; transition: filter 0.2s, opacity 0.2s;":"opacity: 0.7;"}">
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <div style="width: 2rem; height: 2rem; background: #e2e8f0; border-radius: 0.5rem;"></div>
      <span style="font-size: 0.875rem; font-weight: 600; color: #64748b;">${e}</span>
    </div>
  </div>
`,s=e=>r`
  <section style="padding: ${e.variant==="minimal"?"2rem":"4rem"} 2rem; background: ${e.background==="dark"?"#1e293b":e.background==="subtle"?"#f8fafc":"#fff"};">
    <div style="max-width: 72rem; margin: 0 auto;">
      ${e.title?r`
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="font-size: ${e.variant==="minimal"?"1rem":"1.5rem"}; font-weight: ${e.variant==="minimal"?"500":"700"}; color: ${e.background==="dark"?"#e2e8f0":e.variant==="minimal"?"#94a3b8":"#1e293b"}; margin: 0;">${e.title}</h2>
          ${e.description?r`<p style="color: ${e.background==="dark"?"#94a3b8":"#64748b"}; margin: 0.5rem 0 0;">${e.description}</p>`:""}
        </div>
      `:""}
      ${e.variant==="marquee"?r`
        <div style="overflow: hidden; position: relative;">
          <div style="display: flex; gap: 2rem; animation: marquee 20s linear infinite;">
            ${[...o,...o].map(a=>l(a,e.grayscale))}
          </div>
        </div>
        <style>
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        </style>
      `:r`
        <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 1rem; align-items: center;">
          ${o.map(a=>l(a,e.grayscale))}
        </div>
      `}
    </div>
  </section>
`,t={args:{variant:"grid",columns:6,title:"Trusted by Leading Companies",description:"Over 500 teams use Acme Platform every day.",grayscale:!0,background:"transparent"},render:e=>s(e)},n={args:{variant:"marquee",columns:5,title:"Our Partners",grayscale:!0,background:"subtle"},render:e=>s(e)},i={args:{variant:"minimal",columns:6,title:"Trusted by 500+ companies",grayscale:!0,background:"transparent"},render:e=>s(e)};var c,d,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 6,
    title: 'Trusted by Leading Companies',
    description: 'Over 500 teams use Acme Platform every day.',
    grayscale: true,
    background: 'transparent'
  },
  render: args => renderLogoCloud(args)
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'marquee',
    columns: 5,
    title: 'Our Partners',
    grayscale: true,
    background: 'subtle'
  },
  render: args => renderLogoCloud(args)
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var y,v,f;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'minimal',
    columns: 6,
    title: 'Trusted by 500+ companies',
    grayscale: true,
    background: 'transparent'
  },
  render: args => renderLogoCloud(args)
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const h=["Grid","Marquee","Minimal"];export{t as Grid,n as Marquee,i as Minimal,h as __namedExportsOrder,k as default};
