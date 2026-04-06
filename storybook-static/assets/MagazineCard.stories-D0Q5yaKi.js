import{b as r}from"./lit-element-CdmuTPXr.js";const f={title:"Layouts/MagazineCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Visual article card for magazine layouts with image backgrounds and overlay text.

**Features:**
- Four size presets (small, medium, large, hero)
- Gradient or solid overlay for text contrast
- Category badge with customizable color
- Author name and formatted date
- Hover zoom animation on background image
        `}}},argTypes:{size:{control:"select",options:["small","medium","large","hero"],description:"Card size preset"},overlay:{control:"select",options:["gradient","solid","none"],description:"Overlay type"},title:{control:"text",description:"Article title"},category:{control:"text",description:"Category label"},author:{control:"text",description:"Author name"}}},i=e=>{const y={small:"4/3",medium:"4/3",large:"16/10",hero:"21/9"},h={small:"1.125rem",medium:"1.5rem",large:"1.875rem",hero:"2.5rem"},z=y[e.size]||"4/3",v=h[e.size]||"1.5rem";return r`
    <div style="max-width: 800px; margin: 2rem auto;">
      <article style="position: relative; overflow: hidden; border-radius: 0.75rem; aspect-ratio: ${z}; background: #334155;">
        <!-- Overlay -->
        ${e.overlay==="gradient"?r`<div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent);"></div>`:e.overlay==="solid"?r`<div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5);"></div>`:""}

        <!-- Content -->
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1.5rem; color: white;">
          ${e.category?r`<span style="display: inline-block; align-self: flex-start; padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; background: #3b82f6; border-radius: 0.25rem; margin-bottom: 0.75rem;">${e.category}</span>`:""}
          <h3 style="font-weight: 700; font-size: ${v}; line-height: 1.2; margin: 0 0 0.5rem;">${e.title}</h3>
          ${e.size!=="small"&&e.excerpt?r`<p style="color: rgba(255,255,255,0.8); font-size: 0.875rem; margin: 0;">${e.excerpt}</p>`:""}
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; font-size: 0.875rem; color: rgba(255,255,255,0.7);">
            ${e.author?r`<span>${e.author}</span>`:""}
            ${e.author?r`<span>&middot;</span>`:""}
            <span>15. Mrz 2026</span>
          </div>
        </div>
      </article>
    </div>
  `},t={args:{size:"hero",overlay:"gradient",title:"How Digital Marketing Changed in 2026",category:"Marketing",author:"Jane Doe",excerpt:"A deep dive into the latest trends."},render:e=>i(e)},a={args:{size:"medium",overlay:"gradient",title:"5 Tips for Better Web Design",category:"Design",author:"John Smith"},render:e=>i(e)},o={args:{size:"small",overlay:"solid",title:"Quick Update: New Feature",category:"News"},render:e=>i(e)};var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'hero',
    overlay: 'gradient',
    title: 'How Digital Marketing Changed in 2026',
    category: 'Marketing',
    author: 'Jane Doe',
    excerpt: 'A deep dive into the latest trends.'
  },
  render: args => renderMagazineCard(args)
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    overlay: 'gradient',
    title: '5 Tips for Better Web Design',
    category: 'Design',
    author: 'John Smith'
  },
  render: args => renderMagazineCard(args)
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,p,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    overlay: 'solid',
    title: 'Quick Update: New Feature',
    category: 'News'
  },
  render: args => renderMagazineCard(args)
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const x=["HeroSize","MediumSize","SmallSize"];export{t as HeroSize,a as MediumSize,o as SmallSize,x as __namedExportsOrder,f as default};
