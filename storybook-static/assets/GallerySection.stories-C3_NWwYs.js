import{b as o}from"./lit-element-CdmuTPXr.js";const u={title:"Sections/GallerySection",tags:["autodocs"],parameters:{docs:{description:{component:`
Image gallery and portfolio showcase section.
- Six variants: grid, masonry, carousel, lightbox, filterable, featured
- Configurable columns (2-5) and gap sizes
- Category filter buttons for filterable variant
        `}}},argTypes:{variant:{control:"select",options:["grid","masonry","carousel","lightbox","filterable","featured"],description:"Layout variant"},columns:{control:"select",options:[2,3,4,5],description:"Grid columns"},title:{control:"text",description:"Section title"}}},p=["#667eea,#764ba2","#f093fb,#f5576c","#4facfe,#00f2fe","#43e97b,#38f9d7","#fa709a,#fee140","#a18cd1,#fbc2eb"],c=e=>o`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Portfolio</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${e.title}</h2>
      </div>
      ${e.variant==="filterable"?o`
        <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem;">
          <button style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">All</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Web Design</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Branding</button>
        </div>
      `:""}
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 1rem;">
        ${p.map((f,m)=>o`
          <div style="position: relative; overflow: hidden; border-radius: 0.5rem; aspect-ratio: 1;">
            <div style="width: 100%; height: 100%; background: linear-gradient(135deg, ${f});"></div>
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); opacity: 0; transition: opacity 0.2s; display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem;">
              <h3 style="font-size: 0.875rem; color: #fff; font-weight: 600; margin: 0;">Project ${m+1}</h3>
            </div>
          </div>
        `)}
      </div>
    </div>
  </section>
`,r={args:{variant:"grid",columns:3,title:"Our Work"},render:e=>c(e)},t={args:{variant:"filterable",columns:3,title:"Portfolio"},render:e=>c(e)};var n,i,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 3,
    title: 'Our Work'
  },
  render: args => renderGallery(args)
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,l,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'filterable',
    columns: 3,
    title: 'Portfolio'
  },
  render: args => renderGallery(args)
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const b=["Grid","Filterable"];export{t as Filterable,r as Grid,b as __namedExportsOrder,u as default};
