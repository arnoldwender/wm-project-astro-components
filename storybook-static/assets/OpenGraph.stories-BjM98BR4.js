import{b as m}from"./lit-element-CdmuTPXr.js";const f={title:"SEO/OpenGraph",tags:["autodocs"],parameters:{docs:{description:{component:`
Complete Open Graph meta tags for social media sharing.

**Features:**
- Supports website, article, product, and profile OG types
- Article meta: published/modified times, authors, section, tags
- Product meta: price, currency, availability
- Profile meta: first/last name, username
- Automatic absolute-URL resolution for images
        `}}},argTypes:{title:{control:"text",description:"OG title"},description:{control:"text",description:"OG description"},type:{control:"select",options:["website","article","product","profile"],description:"OG type"},locale:{control:"text",description:"OG locale (e.g. de_DE)"}}},d=e=>{const l=[{property:"og:type",content:e.type||"website"},{property:"og:title",content:e.title||"Acme Corp"},{property:"og:description",content:e.description||"Professional web design services."},{property:"og:image",content:"/images/og-default.jpg"},{property:"og:locale",content:e.locale||"de_DE"},{property:"og:site_name",content:e.siteName||"Acme Corp"}];return m`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">Open Graph Tags</h3>

        <!-- Social Preview -->
        <div style="border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; margin-bottom: 1.5rem; max-width: 32rem;">
          <div style="aspect-ratio: 1200/630; background: #334155; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5); font-size: 0.875rem;">1200 x 630 OG Image</div>
          <div style="padding: 0.75rem; background: white;">
            <div style="font-size: 0.75rem; color: #9ca3af; text-transform: uppercase;">example.com</div>
            <div style="font-weight: 600; margin: 0.25rem 0;">${e.title||"Acme Corp"}</div>
            <div style="font-size: 0.875rem; color: #64748b;">${e.description||"Professional web design services."}</div>
          </div>
        </div>

        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">
${l.map(o=>`&lt;meta property="${o.property}" content="${o.content}" /&gt;`).join(`
`)}</pre>
      </div>
    </div>
  `},r={args:{title:"Acme Corp - Web Design",description:"Professional web design services.",type:"website",locale:"de_DE"},render:e=>d(e)},t={args:{title:"10 Tips for Better SEO",description:"Learn actionable SEO strategies for 2026.",type:"article",locale:"de_DE"},render:e=>d(e)};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Acme Corp - Web Design',
    description: 'Professional web design services.',
    type: 'website',
    locale: 'de_DE'
  },
  render: args => renderOpenGraph(args)
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,c,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: '10 Tips for Better SEO',
    description: 'Learn actionable SEO strategies for 2026.',
    type: 'article',
    locale: 'de_DE'
  },
  render: args => renderOpenGraph(args)
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const y=["Website","Article"];export{t as Article,r as Website,y as __namedExportsOrder,f as default};
