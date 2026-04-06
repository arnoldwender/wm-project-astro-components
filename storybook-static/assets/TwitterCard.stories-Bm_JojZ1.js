import{b as i}from"./lit-element-CdmuTPXr.js";const g={title:"SEO/TwitterCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Twitter Card meta tags for rich social sharing on Twitter/X.

**Features:**
- Four card types: summary, summary_large_image, app, player
- Automatic @-prefix handling for handles
- Player card support with stream URL
- App card support for iOS and Android deep links
- Absolute-URL resolution for images
        `}}},argTypes:{title:{control:"text",description:"Card title"},description:{control:"text",description:"Card description"},card:{control:"select",options:["summary","summary_large_image","player"],description:"Card type"},site:{control:"text",description:"Twitter @handle for the site"},creator:{control:"text",description:"Twitter @handle for the creator"}}},c=e=>{const l=[`<meta name="twitter:card" content="${e.card||"summary_large_image"}" />`,`<meta name="twitter:title" content="${e.title||"Acme Corp"}" />`,`<meta name="twitter:description" content="${e.description||"Professional web design."}" />`,e.site?`<meta name="twitter:site" content="${e.site.startsWith("@")?e.site:"@"+e.site}" />`:"",e.creator?`<meta name="twitter:creator" content="${e.creator.startsWith("@")?e.creator:"@"+e.creator}" />`:"",'<meta name="twitter:image" content="/images/twitter-card.jpg" />'].filter(Boolean);return i`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 48rem;">
        <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">Twitter Card: ${e.card||"summary_large_image"}</h3>

        <!-- Preview -->
        <div style="border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; margin-bottom: 1.5rem; max-width: 32rem;">
          ${e.card==="summary"?i`
            <div style="display: flex;">
              <div style="width: 8rem; height: 8rem; background: #334155; flex-shrink: 0;"></div>
              <div style="padding: 0.75rem; flex: 1;">
                <div style="font-size: 0.75rem; color: #9ca3af;">example.com</div>
                <div style="font-weight: 600; margin: 0.25rem 0; font-size: 0.9375rem;">${e.title||"Acme Corp"}</div>
                <div style="font-size: 0.8125rem; color: #64748b;">${e.description||"Professional web design."}</div>
              </div>
            </div>
          `:i`
            <div style="aspect-ratio: 2/1; background: #334155; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5); font-size: 0.875rem;">Twitter Card Image</div>
            <div style="padding: 0.75rem; background: white;">
              <div style="font-size: 0.75rem; color: #9ca3af;">example.com</div>
              <div style="font-weight: 600; margin: 0.25rem 0;">${e.title||"Acme Corp"}</div>
              <div style="font-size: 0.875rem; color: #64748b;">${e.description||"Professional web design."}</div>
            </div>
          `}
        </div>

        <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0; line-height: 1.8;">${l.join(`
`)}</pre>
      </div>
    </div>
  `},r={args:{title:"Acme Corp - Web Design",description:"Professional web design services.",card:"summary_large_image",site:"@acmecorp",creator:"@janedoe"},render:e=>c(e)},t={args:{title:"Quick Update",description:"A brief update from our team.",card:"summary",site:"@acmecorp"},render:e=>c(e)};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Acme Corp - Web Design',
    description: 'Professional web design services.',
    card: 'summary_large_image',
    site: '@acmecorp',
    creator: '@janedoe'
  },
  render: args => renderTwitterCard(args)
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,d,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Quick Update',
    description: 'A brief update from our team.',
    card: 'summary',
    site: '@acmecorp'
  },
  render: args => renderTwitterCard(args)
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const f=["LargeImage","Summary"];export{r as LargeImage,t as Summary,f as __namedExportsOrder,g as default};
