import{b as s}from"./lit-element-CdmuTPXr.js";const g={title:"Sections/FAQ",tags:["autodocs"],parameters:{docs:{description:{component:`
Premium FAQ accordion with SEO-optimized Schema.org markup.
- Search/filter functionality across questions and answers
- Category grouping with filter pills
- Single or dual column layout
- Google rich snippets eligible
        `}}},argTypes:{title:{control:"text",description:"Section title"},showSearch:{control:"boolean",description:"Show search bar"},showCategories:{control:"boolean",description:"Show category filters"},columns:{control:"select",options:[1,2],description:"Column count"}}},r=(e,u,p=!1)=>s`
  <details style="border-bottom: 1px solid #e2e8f0;" ?open=${p}>
    <summary style="padding: 1.25rem 0; font-weight: 500; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
      ${e}
      <svg width="20" height="20" fill="none" stroke="#94a3b8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </summary>
    <div style="padding: 0 0 1.25rem; color: #64748b; line-height: 1.6; font-size: 0.875rem;">${u}</div>
  </details>
`,m=e=>s`
  <section style="padding: 4rem 2rem;">
    <div style="max-width: 48rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem;">${e.title}</h2>
        <p style="color: #64748b;">Find answers to common questions</p>
      </div>

      ${e.showSearch?s`
        <div style="margin-bottom: 2rem;">
          <input type="text" placeholder="Search questions..." style="width: 100%; padding: 0.875rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; box-sizing: border-box;" />
        </div>
      `:""}

      ${e.showCategories?s`
        <div style="display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 2rem;">
          <button style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">All</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">General</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Pricing</button>
          <button style="padding: 0.5rem 1rem; background: #f1f5f9; color: #64748b; border: none; border-radius: 9999px; font-size: 0.875rem; cursor: pointer;">Support</button>
        </div>
      `:""}

      <div>
        ${r("What is Acme Platform?","Acme Platform is a project management tool for teams of all sizes. It helps you plan, track, and deliver projects faster.",!0)}
        ${r("How much does it cost?","Plans start at 9 EUR per month. A free 14-day trial is available on all plans.")}
        ${r("Can I cancel anytime?","Yes, you can cancel your subscription at any time with no penalties or hidden fees.")}
        ${r("Do you offer enterprise plans?","Yes, we offer custom enterprise plans for teams of 50+. Contact sales@acmecorp.com for details.")}
      </div>
    </div>
  </section>
`,o={args:{title:"Frequently Asked Questions",showSearch:!0,showCategories:!0,columns:1},render:e=>m(e)},t={args:{title:"FAQ",showSearch:!1,showCategories:!1,columns:1},render:e=>m(e)};var n,i,a;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Frequently Asked Questions',
    showSearch: true,
    showCategories: true,
    columns: 1
  },
  render: args => renderFAQ(args)
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'FAQ',
    showSearch: false,
    showCategories: false,
    columns: 1
  },
  render: args => renderFAQ(args)
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Default","Minimal"];export{o as Default,t as Minimal,b as __namedExportsOrder,g as default};
