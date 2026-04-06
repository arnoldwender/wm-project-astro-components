import{b as a}from"./lit-element-CdmuTPXr.js";const w={title:"UI/AccordionItem",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual collapsible section for use within Accordion.

Features:
- ARIA-compliant expand/collapse with aria-expanded and aria-controls
- Optional leading icon and disabled state
- Unique auto-generated IDs for trigger and content pairing
- Slot-based content allows any nested HTML or components
- Animated chevron indicator for open/closed state
        `}}},argTypes:{title:{control:"text",description:"Title text displayed in the trigger button"},icon:{control:"text",description:"Optional leading icon (emoji or character)"},defaultOpen:{control:"boolean",description:"Whether the item starts expanded"},disabled:{control:"boolean",description:"Disables interaction when true"}}},v=a`
  <style>
    .accordion-item { background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; max-width: 600px; font-family: system-ui, -apple-system, sans-serif; }
    .accordion-trigger {
      display: flex; align-items: center; justify-content: space-between; width: 100%; padding: 1rem;
      font-weight: 500; color: #1e293b; background: transparent; border: none;
      cursor: pointer; text-align: left; transition: background-color 0.15s ease-out;
    }
    .accordion-trigger:hover { background-color: #f8fafc; }
    .accordion-trigger[aria-disabled="true"] { color: #94a3b8; cursor: not-allowed; }
    .accordion-trigger[aria-disabled="true"]:hover { background: transparent; }
    .accordion-item-icon { margin-right: 0.75rem; }
    .accordion-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; color: #94a3b8; transition: transform 0.2s ease-out; }
    .accordion-trigger[aria-expanded="true"] .accordion-icon { transform: rotate(180deg); }
    .accordion-content-inner { padding: 0 1rem 1rem; color: #64748b; line-height: 1.6; }
  </style>
`,i=e=>a`
  ${v}
  <div class="accordion-item">
    <h3>
      <button
        type="button"
        class="accordion-trigger"
        aria-expanded="${e.defaultOpen?"true":"false"}"
        aria-disabled="${e.disabled?"true":"false"}"
      >
        ${e.icon?a`<span class="accordion-item-icon">${e.icon}</span>`:""}
        <span style="flex:1; text-align:left;">${e.title}</span>
        <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </h3>
    ${e.defaultOpen?a`
      <div class="accordion-content" role="region">
        <div class="accordion-content-inner">
          This is the content area of the accordion item. It can contain any HTML,
          including paragraphs, lists, images, or nested components.
        </div>
      </div>
    `:""}
  </div>
`,r={args:{title:"What services do you offer?",defaultOpen:!1,disabled:!1},render:e=>i(e)},t={args:{title:"What services do you offer?",defaultOpen:!0,disabled:!1},render:e=>i(e)},o={args:{title:"How do I get started?",icon:"?",defaultOpen:!0,disabled:!1},render:e=>i(e)},n={args:{title:"This item is disabled",defaultOpen:!1,disabled:!0},render:e=>i(e)};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'What services do you offer?',
    defaultOpen: false,
    disabled: false
  },
  render: args => renderAccordionItem(args)
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'What services do you offer?',
    defaultOpen: true,
    disabled: false
  },
  render: args => renderAccordionItem(args)
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'How do I get started?',
    icon: '?',
    defaultOpen: true,
    disabled: false
  },
  render: args => renderAccordionItem(args)
}`,...(m=(f=o.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var b,h,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'This item is disabled',
    defaultOpen: false,
    disabled: true
  },
  render: args => renderAccordionItem(args)
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const I=["Default","Expanded","WithIcon","Disabled"];export{r as Default,n as Disabled,t as Expanded,o as WithIcon,I as __namedExportsOrder,w as default};
