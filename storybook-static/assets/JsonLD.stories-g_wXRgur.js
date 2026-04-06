import{b as h}from"./lit-element-CdmuTPXr.js";const S={title:"SEO/JsonLD",tags:["autodocs"],parameters:{docs:{description:{component:`
Generate structured data (JSON-LD) for various Schema.org types.

**Features:**
- Supports 17 Schema.org types (Organization, LocalBusiness, Article, FAQPage, Product, etc.)
- Automatically wraps data with @context and @type
- Outputs minified JSON-LD via set:html for XSS-safe injection
        `}}},argTypes:{type:{control:"select",options:["Organization","LocalBusiness","Article","FAQPage","Product","WebSite"],description:"Schema.org type"}}},a=e=>{const o={Organization:{"@context":"https://schema.org","@type":"Organization",name:"Acme Corp",url:"https://example.com",logo:"https://example.com/logo.png"},LocalBusiness:{"@context":"https://schema.org","@type":"LocalBusiness",name:"Acme Web Studio",address:{"@type":"PostalAddress",streetAddress:"123 Main St",addressLocality:"Halle",postalCode:"06108"},telephone:"+49 345 12345"},Article:{"@context":"https://schema.org","@type":"Article",headline:"10 Tips for Better SEO",author:{"@type":"Person",name:"Jane Doe"},datePublished:"2026-03-15"},FAQPage:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:[{"@type":"Question",name:"What services do you offer?",acceptedAnswer:{"@type":"Answer",text:"Web design, SEO, and hosting."}}]},Product:{"@context":"https://schema.org","@type":"Product",name:"Widget Pro",offers:{"@type":"Offer",price:"49.99",priceCurrency:"EUR"}},WebSite:{"@context":"https://schema.org","@type":"WebSite",name:"Acme Corp",url:"https://example.com"}},y=o[e.type]||o.Organization;return h`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.5rem;">JSON-LD: ${e.type}</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">Renders a <code>&lt;script type="application/ld+json"&gt;</code> in the document head.</p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; white-space: pre-wrap;">${JSON.stringify(y,null,2)}</pre>
      </div>
    </div>
  `},r={args:{type:"Organization"},render:e=>a(e)},t={args:{type:"LocalBusiness"},render:e=>a(e)},s={args:{type:"FAQPage"},render:e=>a(e)};var n,i,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'Organization'
  },
  render: args => renderJsonLD(args)
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'LocalBusiness'
  },
  render: args => renderJsonLD(args)
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,l,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'FAQPage'
  },
  render: args => renderJsonLD(args)
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const A=["Organization","LocalBusiness","FAQPage"];export{s as FAQPage,t as LocalBusiness,r as Organization,A as __namedExportsOrder,S as default};
