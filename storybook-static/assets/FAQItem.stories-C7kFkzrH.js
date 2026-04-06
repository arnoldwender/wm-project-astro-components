import{b as f}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/FAQItem",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual FAQ accordion item.
- Four variants: default, bordered, card, minimal
- Accessible button trigger with aria-expanded
- Smooth height animation
- Optional default open state
        `}}},argTypes:{question:{control:"text",description:"Question text"},answer:{control:"text",description:"Answer text"},variant:{control:"select",options:["default","bordered","card","minimal"],description:"Display variant"},defaultOpen:{control:"boolean",description:"Start expanded"}}},t=e=>f`
  <div style="padding: 2rem; max-width: 40rem;">
    <details
      style="${e.variant==="bordered"?"border: 1px solid #e2e8f0; border-radius: 0.75rem;":e.variant==="card"?"background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; box-shadow: 0 1px 2px rgba(0,0,0,0.05);":"border-bottom: 1px solid #e2e8f0;"}"
      ?open=${e.defaultOpen}
    >
      <summary style="padding: ${e.variant==="minimal"?"1rem 0":"1.25rem"}; font-weight: 500; color: #1e293b; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
        ${e.question}
        <span style="width: 1.5rem; height: 1.5rem; flex-shrink: 0; display: flex; align-items: center; justify-content: center; ${e.variant==="card"||e.variant==="bordered"?"background: #f1f5f9; border-radius: 50%;":""}">
          <svg width="14" height="14" fill="none" stroke="#94a3b8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </span>
      </summary>
      <div style="padding: 0 ${e.variant==="minimal"?"0":"1.25rem"} 1.25rem; color: #64748b; line-height: 1.6; font-size: 0.875rem;">
        ${e.answer}
      </div>
    </details>
  </div>
`,r={args:{question:"What is your refund policy?",answer:"We offer a 30-day money-back guarantee on all plans. Contact support@acmecorp.com to request a refund.",variant:"default",defaultOpen:!1},render:e=>t(e)},o={args:{question:"Do you offer enterprise pricing?",answer:"Yes, Acme Corp provides custom enterprise plans for teams of 50+. Please reach out to sales@acmecorp.com for a personalized quote.",variant:"card",defaultOpen:!0},render:e=>t(e)},a={args:{question:"How do I reset my password?",answer:'Click "Forgot password" on the login page, enter your email, and follow the instructions sent to your inbox.',variant:"bordered",defaultOpen:!1},render:e=>t(e)};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee on all plans. Contact support@acmecorp.com to request a refund.',
    variant: 'default',
    defaultOpen: false
  },
  render: args => renderFAQItem(args)
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,l,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    question: 'Do you offer enterprise pricing?',
    answer: 'Yes, Acme Corp provides custom enterprise plans for teams of 50+. Please reach out to sales@acmecorp.com for a personalized quote.',
    variant: 'card',
    defaultOpen: true
  },
  render: args => renderFAQItem(args)
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    question: 'How do I reset my password?',
    answer: 'Click "Forgot password" on the login page, enter your email, and follow the instructions sent to your inbox.',
    variant: 'bordered',
    defaultOpen: false
  },
  render: args => renderFAQItem(args)
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const b=["Default","Card","Bordered"];export{a as Bordered,o as Card,r as Default,b as __namedExportsOrder,y as default};
