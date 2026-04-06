import{b as a}from"./lit-element-CdmuTPXr.js";const v={title:"Content/TableOfContents",tags:["autodocs"],parameters:{docs:{description:{component:`
An auto-generated table of contents with active section highlighting. Features include:
- Active section highlighting via IntersectionObserver
- Configurable heading depth range (h2-h6)
- Sticky positioning option for sidebar use
- Smooth scroll navigation with accessible anchor links
- Nested indentation based on heading depth
        `}}},argTypes:{title:{control:"text",description:"TOC title"},sticky:{control:"boolean",description:"Sticky positioning"},activeIndex:{control:{type:"range",min:0,max:5,step:1},description:"Active item (demo)"}}},b=[{depth:2,slug:"introduction",text:"Introduction"},{depth:2,slug:"getting-started",text:"Getting Started"},{depth:3,slug:"installation",text:"Installation"},{depth:3,slug:"configuration",text:"Configuration"},{depth:2,slug:"usage",text:"Usage"},{depth:2,slug:"faq",text:"FAQ"}],s=e=>a`
  <style>
    .toc { font-size: 0.875rem; padding: 2rem; font-family: system-ui, sans-serif; max-width: 280px; }
    .toc-title { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin: 0 0 1rem; }
    .toc-list { list-style: none; padding: 0; margin: 0; }
    .toc-item { margin-bottom: 0.25rem; }
    .toc-link {
      display: block; padding: 0.375rem 0.75rem; color: #6b7280; text-decoration: none;
      border-left: 2px solid transparent; border-radius: 0 0.25rem 0.25rem 0;
      transition: all 0.15s; line-height: 1.4;
    }
    .toc-link:hover { color: #111; background: rgba(0,0,0,0.05); }
    .toc-link.active { color: #3b82f6; border-left-color: #3b82f6; background: rgba(59,130,246,0.1); font-weight: 500; }
  </style>
  <nav class="toc" aria-label="${e.title}">
    <h2 class="toc-title">${e.title}</h2>
    <ul class="toc-list">
      ${b.map((i,f)=>a`
        <li class="toc-item" style="padding-left: ${(i.depth-2)*.75}rem;">
          <a href="#${i.slug}" class="toc-link ${f===e.activeIndex?"active":""}">${i.text}</a>
        </li>
      `)}
    </ul>
  </nav>
`,t={args:{title:"Inhaltsverzeichnis",sticky:!0,activeIndex:0},render:e=>s(e)},n={args:{title:"Table of Contents",sticky:!1,activeIndex:2},render:e=>s(e)},r={args:{title:"On this page",sticky:!0,activeIndex:4},render:e=>s(e)};var o,c,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Inhaltsverzeichnis',
    sticky: true,
    activeIndex: 0
  },
  render: args => renderTOC(args)
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Table of Contents',
    sticky: false,
    activeIndex: 2
  },
  render: args => renderTOC(args)
}`,...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,u,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'On this page',
    sticky: true,
    activeIndex: 4
  },
  render: args => renderTOC(args)
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const y=["Default","ActiveSection","DeepNested"];export{n as ActiveSection,r as DeepNested,t as Default,y as __namedExportsOrder,v as default};
