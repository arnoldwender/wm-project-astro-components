import{b as n}from"./lit-element-CdmuTPXr.js";const b={title:"Layouts/NewspaperLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
Classic newspaper-style multi-column layout inspired by NYT and The Guardian.

**Features:**
- Multi-column text flow (1-4 columns)
- Breaking news banner
- Section dividers and pull quotes
- Sidebar for related content
- Traditional serif typography
- Print-friendly styling
        `}}},argTypes:{headline:{control:"text",description:"Main headline"},subheadline:{control:"text",description:"Sub-headline"},byline:{control:"text",description:"Author byline"},columns:{control:"select",options:[1,2,3,4],description:"Text columns"},layout:{control:"select",options:["standard","feature","opinion","investigative"],description:"Layout style"},showBreakingBanner:{control:"boolean",description:"Show breaking news banner"}}},i="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",o=e=>n`
  <article style="max-width: 72rem; margin: 0 auto; padding: 2rem 1rem; font-family: Georgia, 'Times New Roman', serif;">
    <!-- Breaking Banner -->
    ${e.showBreakingBanner?n`
      <div style="background: #dc2626; color: white; padding: 0.5rem 1rem; margin: -1rem -1rem 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">BREAKING</span>
        <div style="height: 1rem; width: 1px; background: rgba(255,255,255,0.3);"></div>
        <span>Major development in ongoing story</span>
      </div>
    `:""}

    <!-- Section -->
    ${e.section?n`<div style="border-bottom: 2px solid #1e293b; padding-bottom: 0.25rem; margin-bottom: 1rem;"><span style="font-size: 0.875rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">${e.section}</span></div>`:""}

    <!-- Header -->
    <header style="margin-bottom: 2rem; ${e.layout==="feature"?"text-align: center;":""}">
      <h1 style="font-weight: 700; line-height: 1.1; margin: 0 0 1rem;
                 ${e.layout==="opinion"?"font-size: 2rem; font-style: italic;":"font-size: 2.5rem;"}
                 ${e.layout==="investigative"?"text-transform: uppercase; letter-spacing: -0.02em;":""}">${e.headline}</h1>
      ${e.subheadline?n`<p style="font-size: 1.25rem; color: #64748b; margin: 0 0 1rem;">${e.subheadline}</p>`:""}
      <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #9ca3af; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; padding: 0.75rem 0; ${e.layout==="feature"?"justify-content: center;":""}">
        ${e.byline?n`<span style="font-weight: 500; color: #64748b;">${e.byline}</span>`:""}
        <span>${e.dateline||"Berlin, 1. April 2026"}</span>
      </div>
    </header>

    <!-- Body -->
    <div style="columns: ${e.columns||2}; column-gap: 2rem; column-rule: 1px solid #e2e8f0; font-size: 1.125rem; line-height: 1.7; color: #374151;">
      <p style="margin: 0 0 1.25em;">${i}</p>
      <p style="margin: 0 0 1.25em;">${i}</p>
      <p style="margin: 0 0 1.25em;">${i}</p>
    </div>
  </article>
`,r={args:{headline:"City Council Approves New Climate Action Plan",subheadline:"Ambitious targets set for carbon neutrality by 2035",byline:"By John Doe",columns:2,layout:"standard",showBreakingBanner:!1,section:"Politics"},render:e=>o(e)},a={args:{headline:"Breaking: Major Development in Global Climate Talks",subheadline:"World leaders reach unprecedented agreement",byline:"By Jane Smith",columns:2,layout:"standard",showBreakingBanner:!0},render:e=>o(e)},t={args:{headline:"The Rise of Sustainable Architecture",subheadline:"How modern buildings are reshaping our cities",byline:"By Maria Garcia",columns:3,layout:"feature",showBreakingBanner:!1},render:e=>o(e)};var s,l,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headline: 'City Council Approves New Climate Action Plan',
    subheadline: 'Ambitious targets set for carbon neutrality by 2035',
    byline: 'By John Doe',
    columns: 2,
    layout: 'standard',
    showBreakingBanner: false,
    section: 'Politics'
  },
  render: args => renderNewspaper(args)
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'Breaking: Major Development in Global Climate Talks',
    subheadline: 'World leaders reach unprecedented agreement',
    byline: 'By Jane Smith',
    columns: 2,
    layout: 'standard',
    showBreakingBanner: true
  },
  render: args => renderNewspaper(args)
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'The Rise of Sustainable Architecture',
    subheadline: 'How modern buildings are reshaping our cities',
    byline: 'By Maria Garcia',
    columns: 3,
    layout: 'feature',
    showBreakingBanner: false
  },
  render: args => renderNewspaper(args)
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const f=["Standard","BreakingNews","FeatureArticle"];export{a as BreakingNews,t as FeatureArticle,r as Standard,f as __namedExportsOrder,b as default};
