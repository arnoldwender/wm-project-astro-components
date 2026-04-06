import{b as f}from"./lit-element-CdmuTPXr.js";const h={title:"Sections/FAQSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Accordion-powered FAQ section with five layout variants.
- Variants: simple, cards, columns, categorized, sidebar
- Optional single-open mode
- Sidebar variant with sticky category navigation
- Accessible with keyboard navigation
        `}}},argTypes:{variant:{control:"select",options:["simple","cards","columns","categorized","sidebar"],description:"Layout variant"},title:{control:"text",description:"Section title"},singleOpen:{control:"boolean",description:"Only one item open at a time"}}},r=(e,y,v=!1)=>f`
  <details style="${v?"background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; margin-bottom: 0.75rem;":"border-bottom: 1px solid #e2e8f0;"}">
    <summary style="padding: 1.25rem; font-weight: 500; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
      ${e}
      <svg width="16" height="16" fill="none" stroke="#94a3b8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </summary>
    <div style="padding: 0 1.25rem 1.25rem; color: #64748b; font-size: 0.875rem; line-height: 1.6;">${y}</div>
  </details>
`,s=e=>f`
  <section style="padding: 4rem 2rem; background: ${e.variant==="cards"?"#f8fafc":"#fff"};">
    <div style="max-width: ${e.variant==="columns"?"64rem":"48rem"}; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 0.5rem;">${e.title}</h2>
        <p style="color: #64748b;">Find answers to the most common questions.</p>
      </div>
      <div style="${e.variant==="columns"?"display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;":""}">
        ${r("What payment methods do you accept?","We accept all major credit cards, PayPal, and bank transfer.",e.variant==="cards")}
        ${r("Can I cancel my subscription?","Yes, you can cancel anytime from your account settings.",e.variant==="cards")}
        ${r("Do you offer refunds?","We offer a 30-day money-back guarantee on all plans.",e.variant==="cards")}
        ${r("Is there a free trial?","Yes, all plans include a free 14-day trial with no credit card required.",e.variant==="cards")}
      </div>
    </div>
  </section>
`,t={args:{variant:"simple",title:"Frequently Asked Questions",singleOpen:!1},render:e=>s(e)},n={args:{variant:"cards",title:"Help Center",singleOpen:!0},render:e=>s(e)},a={args:{variant:"columns",title:"All Questions",singleOpen:!1},render:e=>s(e)};var o,i,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'simple',
    title: 'Frequently Asked Questions',
    singleOpen: false
  },
  render: args => renderFAQSection(args)
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'cards',
    title: 'Help Center',
    singleOpen: true
  },
  render: args => renderFAQSection(args)
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'columns',
    title: 'All Questions',
    singleOpen: false
  },
  render: args => renderFAQSection(args)
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const w=["Simple","Cards","Columns"];export{n as Cards,a as Columns,t as Simple,w as __namedExportsOrder,h as default};
