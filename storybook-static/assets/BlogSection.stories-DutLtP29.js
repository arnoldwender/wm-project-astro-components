import{b as d}from"./lit-element-CdmuTPXr.js";const u={title:"Sections/BlogSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Blog posts, news, or articles section.
- Six variants: grid, featured, list, magazine, minimal, cards
- Configurable columns (2-4)
- "View All" link and cards variant with hover lift
        `}}},argTypes:{variant:{control:"select",options:["grid","featured","list","magazine","minimal","cards"],description:"Layout variant"},columns:{control:"select",options:[2,3,4],description:"Grid columns"},title:{control:"text",description:"Section title"}}},i=(e,g,p)=>d`
  <div style="display: flex; flex-direction: column;">
    <div style="border-radius: 0.75rem; overflow: hidden; margin-bottom: 1rem; aspect-ratio: 16/9; background: linear-gradient(135deg, #667eea, #764ba2);"></div>
    <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; margin-bottom: 0.5rem;">
      <span style="font-weight: 500; color: #3b82f6;">${g}</span>
      <span style="color: #94a3b8;">·</span>
      <span style="color: #64748b;">${p}</span>
    </div>
    <h3 style="font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${e}</h3>
    <p style="font-size: 0.875rem; color: #64748b; margin: 0;">A brief summary of the article content for preview.</p>
  </div>
`,m=e=>d`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem;">
        <div>
          <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Blog</span>
          <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0;">${e.title}</h2>
        </div>
        <a href="#" style="color: #3b82f6; font-weight: 500; text-decoration: none; display: flex; align-items: center; gap: 0.5rem;">Alle Artikel &rarr;</a>
      </div>
      <div style="display: grid; grid-template-columns: repeat(${e.columns}, 1fr); gap: 2rem;">
        ${i("Getting Started with Astro","Engineering","10. Feb 2025")}
        ${i("Design System Best Practices","Design","28. Jan 2025")}
        ${i("How We Scaled to 1M Users","Product","15. Jan 2025")}
      </div>
    </div>
  </section>
`,t={args:{variant:"grid",columns:3,title:"Latest Articles"},render:e=>m(e)},r={args:{variant:"cards",columns:2,title:"Featured Stories"},render:e=>m(e)};var n,o,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 3,
    title: 'Latest Articles'
  },
  render: args => renderBlogSection(args)
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var a,l,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'cards',
    columns: 2,
    title: 'Featured Stories'
  },
  render: args => renderBlogSection(args)
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const y=["Grid","TwoColumnCards"];export{t as Grid,r as TwoColumnCards,y as __namedExportsOrder,u as default};
