import{b as m}from"./lit-element-CdmuTPXr.js";const h={title:"SEO/HreflangTags",tags:["autodocs"],parameters:{docs:{description:{component:`
Generate hreflang tags for multilingual SEO. Helps search engines serve the correct language version.

**Features:**
- Generates <link rel="alternate"> per locale
- Automatically adds x-default tag for the default locale
- Works with subdomain, subdirectory, or separate-domain strategies
        `}}},argTypes:{currentLocale:{control:"text",description:"Current page locale"},defaultLocale:{control:"text",description:"Default locale for x-default"}}},p=e=>{var t,o;const l=e.locales||[{lang:"de",url:"https://example.com/de/seite"},{lang:"en",url:"https://example.com/en/page"}];return m`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">HreflangTags (Head Meta)</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">Current locale: <strong>${e.currentLocale}</strong></p>
        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">
${l.map(r=>`&lt;link rel="alternate" hreflang="${r.lang}" href="${r.url}" /&gt;`).join(`
`)}
&lt;link rel="alternate" hreflang="x-default" href="${((t=l.find(r=>r.lang===e.defaultLocale))==null?void 0:t.url)||((o=l[0])==null?void 0:o.url)}" /&gt;</pre>
      </div>
    </div>
  `},a={args:{currentLocale:"de",defaultLocale:"de",locales:[{lang:"de",url:"https://example.com/de/seite"},{lang:"en",url:"https://example.com/en/page"}]},render:e=>p(e)},n={args:{currentLocale:"en",defaultLocale:"en",locales:[{lang:"en",url:"https://example.com/about"},{lang:"de",url:"https://example.de/ueber-uns"},{lang:"es",url:"https://example.es/sobre-nosotros"}]},render:e=>p(e)};var s,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    currentLocale: 'de',
    defaultLocale: 'de',
    locales: [{
      lang: 'de',
      url: 'https://example.com/de/seite'
    }, {
      lang: 'en',
      url: 'https://example.com/en/page'
    }]
  },
  render: args => renderHreflang(args)
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,g,i;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentLocale: 'en',
    defaultLocale: 'en',
    locales: [{
      lang: 'en',
      url: 'https://example.com/about'
    }, {
      lang: 'de',
      url: 'https://example.de/ueber-uns'
    }, {
      lang: 'es',
      url: 'https://example.es/sobre-nosotros'
    }]
  },
  render: args => renderHreflang(args)
}`,...(i=(g=n.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};const x=["Bilingual","Trilingual"];export{a as Bilingual,n as Trilingual,x as __namedExportsOrder,h as default};
