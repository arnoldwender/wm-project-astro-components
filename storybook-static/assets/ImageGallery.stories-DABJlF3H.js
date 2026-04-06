import{b as o}from"./lit-element-CdmuTPXr.js";const w={title:"Media/ImageGallery",tags:["autodocs"],parameters:{docs:{description:{component:`
A responsive image gallery with lightbox support. Features include:
- Grid and masonry layout modes with 2-6 configurable columns
- Full-screen lightbox with keyboard and touch-swipe navigation
- Schema.org ImageGallery JSON-LD structured data
- Lazy loading with thumbnail support for faster initial load
- Responsive column reduction on smaller viewports
- Hover zoom effect with overlay icon
        `}}},argTypes:{columns:{control:{type:"range",min:2,max:6,step:1},description:"Number of columns"},gap:{control:"select",options:["sm","md","lg"],description:"Gap between items"},lightbox:{control:"boolean",description:"Enable lightbox"},showCaptions:{control:"boolean",description:"Show image captions"},rounded:{control:"boolean",description:"Rounded corners"}}},b=["#e0e7ff","#dbeafe","#d1fae5","#fef3c7","#fce7f3","#ede9fe"],i=e=>o`
  <style>
    .ig { display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: ${e.gap==="sm"?"0.5rem":e.gap==="lg"?"1.5rem":"1rem"}; width: 100%; padding: 1rem; font-family: system-ui, sans-serif; box-sizing: border-box; }
    .ig-item { margin: 0; overflow: hidden; ${e.rounded?"border-radius: 0.5rem;":""} }
    .ig-trigger { position: relative; display: block; width: 100%; aspect-ratio: 1; padding: 0; border: none; background: transparent; cursor: ${e.lightbox?"pointer":"default"}; overflow: hidden; }
    .ig-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.3s; }
    .ig-trigger:hover .ig-img { transform: scale(1.05); }
    .ig-overlay { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); opacity: 0; transition: opacity 0.3s; }
    .ig-trigger:hover .ig-overlay { opacity: 1; }
    .ig-overlay svg { width: 2.5rem; height: 2.5rem; color: white; }
    .ig-caption { padding: 0.5rem; font-size: 0.875rem; color: #6b7280; text-align: center; }
  </style>
  <div class="ig">
    ${b.map((f,a)=>o`
      <figure class="ig-item">
        <button type="button" class="ig-trigger" ${e.lightbox?"":"disabled"}>
          <div class="ig-img" style="background: ${f}; display: flex; align-items: center; justify-content: center; color: #6b7280; font-weight: 600; font-size: 1.25rem;">
            ${a+1}
          </div>
          ${e.lightbox?o`
            <div class="ig-overlay">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </div>
          `:""}
        </button>
        ${e.showCaptions?o`<figcaption class="ig-caption">Image ${a+1}</figcaption>`:""}
      </figure>
    `)}
  </div>
`,r={args:{columns:3,gap:"md",lightbox:!0,showCaptions:!1,rounded:!0},render:e=>i(e)},t={args:{columns:3,gap:"md",lightbox:!0,showCaptions:!0,rounded:!0},render:e=>i(e)},n={args:{columns:2,gap:"lg",lightbox:!0,showCaptions:!1,rounded:!1},render:e=>i(e)};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    lightbox: true,
    showCaptions: false,
    rounded: true
  },
  render: args => renderImageGallery(args)
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,g,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    lightbox: true,
    showCaptions: true,
    rounded: true
  },
  render: args => renderImageGallery(args)
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    columns: 2,
    gap: 'lg',
    lightbox: true,
    showCaptions: false,
    rounded: false
  },
  render: args => renderImageGallery(args)
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const x=["Default","WithCaptions","TwoColumns"];export{r as Default,n as TwoColumns,t as WithCaptions,x as __namedExportsOrder,w as default};
