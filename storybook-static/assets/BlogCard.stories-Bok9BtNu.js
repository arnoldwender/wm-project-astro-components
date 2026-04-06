import{b as a}from"./lit-element-CdmuTPXr.js";const p={title:"Sections/BlogCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual blog post card with multiple layout variants.
- Five variants: default, horizontal, minimal, overlay, compact
- Author avatar with initials fallback
- Reading time indicator and German locale dates
- Featured mode spanning multiple grid columns
        `}}},argTypes:{title:{control:"text",description:"Post title"},excerpt:{control:"text",description:"Post excerpt"},variant:{control:"select",options:["default","horizontal","minimal","overlay","compact"],description:"Card variant"},category:{control:"text",description:"Post category"},date:{control:"text",description:"Publication date"},readingTime:{control:"text",description:"Reading time"}}},c=e=>a`
  <div style="padding: 2rem; max-width: ${e.variant==="horizontal"?"48rem":"24rem"};">
    <article style="${e.variant==="overlay"?"position: relative; overflow: hidden; border-radius: 1rem;":"display: flex; flex-direction: column;"}">
      ${e.variant!=="minimal"?a`
        <div style="${e.variant==="overlay"?"position: relative;":"border-radius: 0.75rem; overflow: hidden; margin-bottom: 1rem; aspect-ratio: 16/9;"}">
          <div style="width: 100%; height: ${e.variant==="overlay"?"300px":"100%"}; background: linear-gradient(135deg, #667eea, #764ba2); ${e.variant==="overlay"?"":"border-radius: 0.75rem;"}"></div>
          ${e.variant==="overlay"?a`<div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1));"></div>`:""}
        </div>
      `:""}
      <div style="${e.variant==="overlay"?"position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5rem; color: #fff;":""}">
        <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem; margin-bottom: 0.5rem; color: ${e.variant==="overlay"?"rgba(255,255,255,0.8)":"#64748b"};">
          <span style="font-weight: 500; color: ${e.variant==="overlay"?"#fff":"#3b82f6"};">${e.category}</span>
          <span style="color: ${e.variant==="overlay"?"rgba(255,255,255,0.5)":"#94a3b8"};">·</span>
          <time>${e.date}</time>
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; line-height: 1.4; margin: 0 0 0.5rem; color: ${e.variant==="overlay"?"#fff":"#1e293b"};">${e.title}</h3>
        <p style="font-size: 0.875rem; color: ${e.variant==="overlay"?"rgba(255,255,255,0.8)":"#64748b"}; margin: 0 0 1rem; line-height: 1.5;">${e.excerpt}</p>
        <div style="display: flex; align-items: center; gap: 1rem; color: ${e.variant==="overlay"?"rgba(255,255,255,0.7)":"#64748b"};">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 2rem; height: 2rem; border-radius: 50%; background: rgba(59,130,246,0.1); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 0.75rem; font-weight: 500; color: #3b82f6;">JD</span>
            </div>
            <span style="font-size: 0.875rem; font-weight: 500;">Jane Doe</span>
          </div>
          <span style="font-size: 0.875rem;">${e.readingTime}</span>
        </div>
      </div>
    </article>
  </div>
`,t={args:{title:"How to Build Better Products",excerpt:"Learn the secrets of successful product development from the Acme Corp team.",variant:"default",category:"Product",date:"15. Januar 2025",readingTime:"5 min"},render:e=>c(e)},r={args:{title:"Acme Corp Raises Series B",excerpt:"We are thrilled to announce our latest funding round of 50M EUR.",variant:"overlay",category:"News",date:"20. Marz 2025",readingTime:"3 min"},render:e=>c(e)};var i,o,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'How to Build Better Products',
    excerpt: 'Learn the secrets of successful product development from the Acme Corp team.',
    variant: 'default',
    category: 'Product',
    date: '15. Januar 2025',
    readingTime: '5 min'
  },
  render: args => renderBlogCard(args)
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var l,d,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Acme Corp Raises Series B',
    excerpt: 'We are thrilled to announce our latest funding round of 50M EUR.',
    variant: 'overlay',
    category: 'News',
    date: '20. Marz 2025',
    readingTime: '3 min'
  },
  render: args => renderBlogCard(args)
}`,...(s=(d=r.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const v=["Default","Overlay"];export{t as Default,r as Overlay,v as __namedExportsOrder,p as default};
