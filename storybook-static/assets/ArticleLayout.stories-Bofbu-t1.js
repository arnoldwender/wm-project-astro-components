import{b as t}from"./lit-element-CdmuTPXr.js";const b={title:"Layouts/ArticleLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
Clean, readable article/blog post layout optimized for long-form content.

**Features:**
- Optimal reading width (65-75 characters)
- Typography-first design with prose styling
- Reading progress bar
- Table of contents sidebar support
- Author info section with avatar
- Related articles and comments slots
        `}}},argTypes:{title:{control:"text",description:"Article title"},subtitle:{control:"text",description:"Article subtitle"},readingTime:{control:"text",description:"Estimated reading time"},category:{control:"text",description:"Article category"},layout:{control:"select",options:["default","wide","full-width-header"],description:"Layout variant"},showProgress:{control:"boolean",description:"Show reading progress bar"}}},a=e=>t`
  <article style="max-width: 48rem; margin: 0 auto; padding: 2rem 1rem; font-family: system-ui, sans-serif;">
    <!-- Progress Bar -->
    ${e.showProgress?t`<div style="position: fixed; top: 0; left: 0; height: 3px; width: 35%; background: #3b82f6; z-index: 50;"></div>`:""}

    <!-- Header -->
    <header style="margin-bottom: 2rem;">
      ${e.category?t`<span style="display: inline-block; padding: 0.25rem 0.75rem; font-size: 0.875rem; font-weight: 500; background: rgba(59,130,246,0.1); color: #3b82f6; border-radius: 9999px; margin-bottom: 1rem;">${e.category}</span>`:""}
      <h1 style="font-size: 2.5rem; font-weight: 700; line-height: 1.2; margin: 0 0 1rem;">${e.title}</h1>
      ${e.subtitle?t`<p style="font-size: 1.25rem; color: #6b7280;">${e.subtitle}</p>`:""}
    </header>

    <!-- Meta -->
    <div style="display: flex; align-items: center; gap: 1rem; font-size: 0.875rem; color: #9ca3af; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb; margin-bottom: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div style="width: 2.5rem; height: 2.5rem; border-radius: 50%; background: #d1d5db;"></div>
        <span style="font-weight: 500; color: #374151;">John Doe</span>
      </div>
      <span>1. April 2026</span>
      ${e.readingTime?t`<span>&middot;</span><span>${e.readingTime}</span>`:""}
    </div>

    <!-- Content -->
    <div style="font-size: 1.125rem; line-height: 1.8; color: #374151;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
      <h2 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem;">Section Heading</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      <blockquote style="border-left: 3px solid #3b82f6; padding: 0.5rem 1rem; background: #f9fafb; border-radius: 0 0.5rem 0.5rem 0; margin: 1.5rem 0; font-style: italic;">
        "Design is not just what it looks like and feels like. Design is how it works."
      </blockquote>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
    </div>
  </article>
  <style>
    body { background: #ffffff; }
  </style>
`,r={args:{title:"How to Build Accessible Web Applications",subtitle:"A comprehensive guide to WCAG 2.2 compliance",readingTime:"8 min read",category:"Development",layout:"default",showProgress:!0},render:e=>a(e)},i={args:{title:"The Future of Web Design in 2026",subtitle:"Trends shaping the digital landscape",readingTime:"5 min read",category:"Design",layout:"default",showProgress:!1},render:e=>a(e)},o={args:{title:"Quick Update: New Feature Release",layout:"default",showProgress:!1},render:e=>a(e)};var s,n,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'How to Build Accessible Web Applications',
    subtitle: 'A comprehensive guide to WCAG 2.2 compliance',
    readingTime: '8 min read',
    category: 'Development',
    layout: 'default',
    showProgress: true
  },
  render: args => renderArticleLayout(args)
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,c,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'The Future of Web Design in 2026',
    subtitle: 'Trends shaping the digital landscape',
    readingTime: '5 min read',
    category: 'Design',
    layout: 'default',
    showProgress: false
  },
  render: args => renderArticleLayout(args)
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Quick Update: New Feature Release',
    layout: 'default',
    showProgress: false
  },
  render: args => renderArticleLayout(args)
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const h=["Default","WithoutProgress","MinimalArticle"];export{r as Default,o as MinimalArticle,i as WithoutProgress,h as __namedExportsOrder,b as default};
