import{b as m}from"./lit-element-CdmuTPXr.js";const g={title:"SEO/SEO",tags:["autodocs"],parameters:{docs:{description:{component:`
Drop-in <head> component rendering a complete set of SEO meta tags.

**Features:**
- Primary meta: title, description, robots, language, author, theme-color
- Open Graph: type, url, title, description, image, locale, site_name
- Twitter Cards: summary_large_image, creator, site handle
- Hreflang links for multilingual sites
- Canonical URL with automatic fallback
- noindex/nofollow toggles
- Structured data via JSON-LD
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
        `}}},argTypes:{title:{control:"text",description:"Page title"},description:{control:"text",description:"Meta description"},lang:{control:"select",options:["de","en","es"],description:"Page language"},noindex:{control:"boolean",description:"Set noindex"}}},d=e=>{const c=[`<title>${e.title||"Web Design"} | ${e.siteName||"Acme Corp"}</title>`,`<meta name="description" content="${e.description||"Professional web design."}" />`,`<meta name="robots" content="${e.noindex?"noindex, nofollow":"index, follow"}" />`,`<meta property="og:title" content="${e.title||"Web Design"}" />`,`<meta property="og:description" content="${e.description||"Professional web design."}" />`,'<meta property="og:type" content="website" />',`<meta property="og:locale" content="${e.lang==="en"?"en_US":e.lang==="es"?"es_ES":"de_DE"}" />`,'<meta name="twitter:card" content="summary_large_image" />','<link rel="canonical" href="https://example.com/services/web-design" />'];return m`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">SEO Component Output</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">All-in-one <code>&lt;head&gt;</code> component. Place once inside your BaseLayout.</p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">${c.join(`
`)}</pre>
      </div>
    </div>
  `},t={args:{title:"Web Design Services",description:"Professional web design for small businesses.",lang:"de",noindex:!1,siteName:"Acme Corp"},render:e=>d(e)},n={args:{title:"Draft Article",description:"This page is still in progress.",lang:"en",noindex:!0},render:e=>d(e)};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    title: 'Web Design Services',
    description: 'Professional web design for small businesses.',
    lang: 'de',
    noindex: false,
    siteName: 'Acme Corp'
  },
  render: args => renderSEO(args)
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var s,a,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Draft Article',
    description: 'This page is still in progress.',
    lang: 'en',
    noindex: true
  },
  render: args => renderSEO(args)
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const u=["Default","NoIndex"];export{t as Default,n as NoIndex,u as __namedExportsOrder,g as default};
