import{b as o}from"./lit-element-CdmuTPXr.js";const T={title:"UI/Tab",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual tab button for use within the Tabs component.

Features:
- ARIA role="tab" with aria-controls linked to corresponding TabPanel
- Optional leading icon for visual tab identification
- Disabled state via aria-disabled attribute
- Managed tabindex for roving keyboard navigation
- Slot-based label content for flexible tab text
        `}}},argTypes:{label:{control:"text",description:"Tab button text"},icon:{control:"text",description:"Optional leading icon (emoji)"},disabled:{control:"boolean",description:"Disabled state"},selected:{control:"boolean",description:"Selected/active state"}}},y=o`
  <style>
    .tab-demo {
      display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem;
      font-weight: 500; color: #64748b; cursor: pointer; border: none; background: transparent;
      font-family: system-ui, -apple-system, sans-serif; font-size: 0.875rem;
      transition: color 0.15s, background 0.15s; border-radius: 0.375rem;
    }
    .tab-demo:hover { color: #1e293b; }
    .tab-demo[aria-selected="true"] {
      color: #1e293b; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .tab-demo[aria-disabled="true"] { color: #cbd5e1; cursor: not-allowed; }
    .tab-demo[aria-disabled="true"]:hover { color: #cbd5e1; }
    .tab-wrapper { background: #f1f5f9; padding: 0.25rem; border-radius: 0.5rem; display: inline-flex; }
  </style>
`,n=e=>o`
  ${y}
  <div class="tab-wrapper">
    <button
      class="tab-demo"
      role="tab"
      aria-selected="${e.selected?"true":"false"}"
      aria-disabled="${e.disabled?"true":"false"}"
      tabindex="${e.selected?"0":"-1"}"
    >
      ${e.icon?o`<span>${e.icon}</span>`:""}
      ${e.label}
    </button>
  </div>
`,a={args:{label:"Overview",icon:"",disabled:!1,selected:!1},render:e=>n(e)},r={args:{label:"Overview",icon:"",disabled:!1,selected:!0},render:e=>n(e)},s={args:{label:"Analytics",icon:"&#x1F4CA;",disabled:!1,selected:!0},render:e=>n(e)},t={args:{label:"Billing",icon:"",disabled:!0,selected:!1},render:e=>n(e)};var l,d,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Overview',
    icon: '',
    disabled: false,
    selected: false
  },
  render: args => renderTab(args)
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,b,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Overview',
    icon: '',
    disabled: false,
    selected: true
  },
  render: args => renderTab(args)
}`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var u,m,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Analytics',
    icon: '&#x1F4CA;',
    disabled: false,
    selected: true
  },
  render: args => renderTab(args)
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,v,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Billing',
    icon: '',
    disabled: true,
    selected: false
  },
  render: args => renderTab(args)
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const h=["Default","Selected","WithIcon","Disabled"];export{a as Default,t as Disabled,r as Selected,s as WithIcon,h as __namedExportsOrder,T as default};
