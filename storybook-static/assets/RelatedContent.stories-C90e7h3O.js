import{b as i}from"./lit-element-CdmuTPXr.js";const L={title:"Content/RelatedContent",tags:["autodocs"],parameters:{docs:{description:{component:`
Internal linking grid for SEO topic clustering.

Features:
- Grid of related content cards with title, description, category badge, and icon
- Three display variants (cards, list, minimal)
- Configurable column count (2, 3, or 4)
- Schema.org ItemList structured data for SEO
- Dark mode support
- Fully accessible with semantic HTML
        `}}},argTypes:{variant:{control:{type:"select"},options:["cards","list","minimal"],description:"Display variant"},columns:{control:{type:"select"},options:[2,3,4],description:"Number of grid columns"},heading:{control:"text",description:"Section heading text"}}},s=[{title:"Getting Started Guide",description:"Learn the basics of our platform and set up your first project.",href:"/guides/start",category:"Guide",icon:"📖"},{title:"Advanced Configuration",description:"Deep dive into advanced settings and customization options.",href:"/guides/advanced",category:"Tutorial",icon:"⚙️"},{title:"API Reference",description:"Complete API documentation with examples and best practices.",href:"/docs/api",category:"Reference",icon:"📚"},{title:"Deployment Guide",description:"Deploy your application to production with confidence.",href:"/guides/deploy",category:"Guide",icon:"🚀"},{title:"Security Best Practices",description:"Protect your application with security hardening tips.",href:"/guides/security",category:"Security",icon:"🔒"},{title:"Performance Tuning",description:"Optimize your application for speed and efficiency.",href:"/guides/performance",category:"Tutorial",icon:"⚡"}],a=(r,m,u,D)=>{const o=m==="cards",e=m==="list";return i`
    <style>
      .rc-demo { font-family: system-ui, -apple-system, sans-serif; max-width: 900px; }
      .rc-heading { font-size: 1.5rem; font-weight: 700; color: #1a1a2e; margin-bottom: 1.5rem; }
      .rc-grid { display: grid; grid-template-columns: ${e?"1fr":u===2?"repeat(2, 1fr)":u===4?"repeat(4, 1fr)":"repeat(3, 1fr)"}; gap: 1rem; }
      .rc-card {
        display: flex; flex-direction: ${e?"row":"column"}; gap: 0.5rem;
        padding: ${o?"1.5rem":e?"1rem 1.5rem":"0.5rem 1rem"};
        background: #fff; border-radius: ${o?"1rem":"0.5rem"};
        ${o?"border: 1px solid #e2e8f0;":e?"border-bottom: 1px solid #e2e8f0;":""}
        text-decoration: none; color: inherit; align-items: ${e?"center":"stretch"};
        transition: box-shadow 0.3s ease, border-color 0.3s ease;
      }
      .rc-card:hover { ${o?"box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-color: #3b82f6;":"background: #f8fafc;"} }
      .rc-badge { display: inline-block; font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 9999px; width: fit-content; }
      .rc-title { font-size: 1rem; font-weight: 700; color: #1a1a2e; margin: 0; display: flex; align-items: center; gap: 0.25rem; }
      .rc-desc { font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5; ${e?"flex: 1;":""} }
      .rc-arrow { color: #64748b; margin-left: auto; flex-shrink: 0; transition: transform 0.15s ease; }
      .rc-card:hover .rc-arrow { transform: translateX(4px); color: #3b82f6; }
    </style>
    <div class="rc-demo">
      <h2 class="rc-heading">${D}</h2>
      <div class="rc-grid">
        ${r.map(t=>i`
          <a href="#" class="rc-card" @click=${G=>G.preventDefault()}>
            <span class="rc-badge">${t.category}</span>
            <h3 class="rc-title">
              ${t.icon?i`<span>${t.icon}</span>`:""}
              <span>${t.title}</span>
            </h3>
            ${m!=="minimal"?i`<p class="rc-desc">${t.description}</p>`:""}
            <span class="rc-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>
        `)}
      </div>
    </div>
  `},n={args:{variant:"cards",columns:3,heading:"Related Articles"},render:r=>a(s,r.variant,r.columns,r.heading)},c={render:()=>a(s.slice(0,4),"list",1,"Related Topics")},d={render:()=>a(s.slice(0,4),"minimal",2,"See Also")},l={render:()=>a(s.slice(0,4),"cards",2,"Related Guides")},p={render:()=>a(s.slice(0,4),"cards",4,"Explore More")};var g,f,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'cards',
    columns: 3,
    heading: 'Related Articles'
  },
  render: args => renderCards(demoItems, args.variant as string, args.columns as number, args.heading as string)
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,b,x;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => renderCards(demoItems.slice(0, 4), 'list', 1, 'Related Topics')
}`,...(x=(b=c.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var w,v,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => renderCards(demoItems.slice(0, 4), 'minimal', 2, 'See Also')
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var $,S,k;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => renderCards(demoItems.slice(0, 4), 'cards', 2, 'Related Guides')
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var I,T,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => renderCards(demoItems.slice(0, 4), 'cards', 4, 'Explore More')
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const M=["Default","ListVariant","MinimalVariant","TwoColumns","FourColumns"];export{n as Default,p as FourColumns,c as ListVariant,d as MinimalVariant,l as TwoColumns,M as __namedExportsOrder,L as default};
