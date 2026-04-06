import{b as c}from"./lit-element-CdmuTPXr.js";const p={title:"SEO/CanonicalURL",tags:["autodocs"],parameters:{docs:{description:{component:`
Set the canonical URL to prevent duplicate content issues. Renders a <link rel="canonical"> tag.

**Features:**
- Automatic URL normalization (strips query params and trailing slashes)
- Falls back to the current page URL when no explicit url is provided
- Configurable: keep query params or trailing slashes when needed
        `}}},argTypes:{url:{control:"text",description:"Canonical URL"},removeQueryParams:{control:"boolean",description:"Remove query parameters"},removeTrailingSlash:{control:"boolean",description:"Remove trailing slash"}}},m=e=>c`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 40rem;">
      <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">CanonicalURL (Head Meta)</h3>
      <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">This component renders a <code>&lt;link rel="canonical"&gt;</code> tag in the document head.</p>
      <pre style="background: #1e293b; color: #e2e8f0; padding: 1rem; border-radius: 0.375rem; font-size: 0.8125rem; overflow-x: auto; margin: 0;">&lt;link rel="canonical" href="${e.url||"https://example.com/services/web-design"}" /&gt;</pre>
      <div style="margin-top: 1rem; font-size: 0.875rem; color: #64748b;">
        <p style="margin: 0;">Remove query params: <strong>${e.removeQueryParams??!0}</strong></p>
        <p style="margin: 0.25rem 0 0;">Remove trailing slash: <strong>${e.removeTrailingSlash??!0}</strong></p>
      </div>
    </div>
  </div>
`,r={args:{url:"https://example.com/services/web-design",removeQueryParams:!0,removeTrailingSlash:!0},render:e=>m(e)},a={args:{url:"https://example.com/blog?page=2",removeQueryParams:!1,removeTrailingSlash:!0},render:e=>m(e)};var s,n,o;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    url: 'https://example.com/services/web-design',
    removeQueryParams: true,
    removeTrailingSlash: true
  },
  render: args => renderCanonical(args)
}`,...(o=(n=r.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var t,i,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    url: 'https://example.com/blog?page=2',
    removeQueryParams: false,
    removeTrailingSlash: true
  },
  render: args => renderCanonical(args)
}`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const u=["Default","KeepQueryParams"];export{r as Default,a as KeepQueryParams,u as __namedExportsOrder,p as default};
