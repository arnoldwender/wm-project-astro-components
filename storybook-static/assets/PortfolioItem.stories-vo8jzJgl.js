import{b as a}from"./lit-element-CdmuTPXr.js";const f={title:"Layouts/PortfolioItem",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual portfolio/gallery item with hover effects for creative showcases.

**Features:**
- Five aspect ratio options: square, video, portrait, landscape, auto
- Hover overlay with title, category, description
- Lightbox mode with zoom cursor
- Filterable by category via data-category
- Hover lift animation with reduced-motion support
        `}}},argTypes:{title:{control:"text",description:"Project title"},category:{control:"text",description:"Project category"},aspectRatio:{control:"select",options:["square","video","portrait","landscape"],description:"Aspect ratio"},enableLightbox:{control:"boolean",description:"Enable lightbox mode"}}},i=e=>{const y={square:"1/1",video:"16/9",portrait:"3/4",landscape:"4/3"}[e.aspectRatio]||"1/1";return a`
    <div style="max-width: 400px; margin: 2rem auto;">
      <article style="position: relative; overflow: hidden; border-radius: 0.5rem; aspect-ratio: ${y}; background: #334155; cursor: pointer; transition: transform 300ms, box-shadow 300ms;"
               onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1)'"
               onmouseout="this.style.transform=''; this.style.boxShadow=''">
        <!-- Overlay (shown on hover) -->
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent); opacity: 0; transition: opacity 300ms;"
             class="portfolio-overlay"
             onmouseover="this.style.opacity='1'"
             onmouseout="this.style.opacity='0'">
        </div>

        <!-- Content -->
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; color: white;">
          ${e.category?a`<span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(255,255,255,0.7); margin-bottom: 0.5rem;">${e.category}</span>`:""}
          <h3 style="font-size: 1.25rem; font-weight: 600; margin: 0;">${e.title}</h3>
          ${e.description?a`<p style="font-size: 0.875rem; color: rgba(255,255,255,0.8); margin: 0.25rem 0 0;">${e.description}</p>`:""}
          <span style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; margin-top: 0.75rem; color: rgba(255,255,255,0.9);">
            ${e.enableLightbox?"Vergrößern":"Projekt ansehen"} &rarr;
          </span>
        </div>
      </article>
    </div>
  `},t={args:{title:"Acme Corp Rebrand",category:"Branding",aspectRatio:"landscape",description:"Complete visual identity overhaul.",enableLightbox:!1},render:e=>i(e)},o={args:{title:"Product Photography",category:"Photography",aspectRatio:"square",enableLightbox:!0},render:e=>i(e)},r={args:{title:"Mobile App Design",category:"UI/UX",aspectRatio:"portrait",description:"iOS app for fitness tracking.",enableLightbox:!1},render:e=>i(e)};var s,n,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Acme Corp Rebrand',
    category: 'Branding',
    aspectRatio: 'landscape',
    description: 'Complete visual identity overhaul.',
    enableLightbox: false
  },
  render: args => renderPortfolioItem(args)
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Product Photography',
    category: 'Photography',
    aspectRatio: 'square',
    enableLightbox: true
  },
  render: args => renderPortfolioItem(args)
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,m,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Mobile App Design',
    category: 'UI/UX',
    aspectRatio: 'portrait',
    description: 'iOS app for fitness tracking.',
    enableLightbox: false
  },
  render: args => renderPortfolioItem(args)
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const v=["Default","Square","Portrait"];export{t as Default,r as Portrait,o as Square,v as __namedExportsOrder,f as default};
