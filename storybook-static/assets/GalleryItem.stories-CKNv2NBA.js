import{b as t}from"./lit-element-CdmuTPXr.js";const v={title:"Sections/GalleryItem",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual gallery/portfolio item with lightbox support.
- Four variants: default, overlay, card, minimal
- Configurable aspect ratios: square, landscape, portrait, auto
- Lightbox and linked modes with hover effects
        `}}},argTypes:{title:{control:"text",description:"Item title"},category:{control:"text",description:"Item category"},variant:{control:"select",options:["default","overlay","card","minimal"],description:"Display variant"},aspectRatio:{control:"select",options:["square","landscape","portrait","auto"],description:"Aspect ratio"}}},n=e=>t`
  <div style="padding: 2rem; max-width: 20rem;">
    <div style="position: relative; overflow: hidden; border-radius: ${e.variant==="card"?"0.75rem":"0.5rem"}; ${e.variant==="card"?"background: #fff; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.05);":""}">
      <div style="aspect-ratio: ${e.aspectRatio==="square"?"1":e.aspectRatio==="landscape"?"16/10":e.aspectRatio==="portrait"?"3/4":"auto"}; background: linear-gradient(135deg, #667eea, #764ba2); ${e.aspectRatio==="auto"?"min-height: 200px;":""} position: relative;">
        ${e.variant==="overlay"?t`
          <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem;">
            <span style="font-size: 0.75rem; color: rgba(255,255,255,0.8); margin-bottom: 0.25rem;">${e.category}</span>
            <h3 style="font-size: 1rem; font-weight: 600; color: #fff; margin: 0;">${e.title}</h3>
          </div>
        `:""}
      </div>
      ${e.variant==="card"?t`
        <div style="padding: 1rem;">
          <span style="font-size: 0.75rem; color: #3b82f6; font-weight: 500;">${e.category}</span>
          <h3 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0.25rem 0 0;">${e.title}</h3>
        </div>
      `:e.variant!=="overlay"?t`
        <div style="padding: 0.75rem 0 0;">
          <span style="font-size: 0.75rem; color: #64748b;">${e.category}</span>
          <h3 style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0.125rem 0 0;">${e.title}</h3>
        </div>
      `:""}
    </div>
  </div>
`,a={args:{title:"Acme Corp Redesign",category:"Web Design",variant:"default",aspectRatio:"landscape"},render:e=>n(e)},r={args:{title:"Brand Identity",category:"Branding",variant:"overlay",aspectRatio:"square"},render:e=>n(e)},o={args:{title:"Product Photography",category:"Photography",variant:"card",aspectRatio:"landscape"},render:e=>n(e)};var i,s,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Acme Corp Redesign',
    category: 'Web Design',
    variant: 'default',
    aspectRatio: 'landscape'
  },
  render: args => renderGalleryItem(args)
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Brand Identity',
    category: 'Branding',
    variant: 'overlay',
    aspectRatio: 'square'
  },
  render: args => renderGalleryItem(args)
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Product Photography',
    category: 'Photography',
    variant: 'card',
    aspectRatio: 'landscape'
  },
  render: args => renderGalleryItem(args)
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const f=["Default","Overlay","Card"];export{o as Card,a as Default,r as Overlay,f as __namedExportsOrder,v as default};
