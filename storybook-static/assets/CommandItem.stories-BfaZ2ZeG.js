import{b as s}from"./lit-element-CdmuTPXr.js";const D={title:"UI/CommandItem",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual command/action item for the Command Palette.

Features:
- Supports navigation (href) and custom actions (data-action) modes
- Optional leading icon with SVG or emoji support
- Keyboard shortcut badge display for power-user discoverability
- Searchable via keywords attribute for fuzzy command filtering
- Disabled state with aria-disabled and visual opacity change
        `}}},argTypes:{value:{control:"text",description:"Unique value identifier"},label:{control:"text",description:"Display text for the command item"},icon:{control:"text",description:"Leading icon (emoji or character)"},shortcut:{control:"text",description:"Keyboard shortcut badge text"},disabled:{control:"boolean",description:"Whether the item is disabled"}}},y=s`
  <style>
    .cmd-item-demo {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem;
      cursor: pointer; transition: background-color 0.1s ease-out;
      font-family: system-ui, -apple-system, sans-serif; max-width: 480px;
      background: #fff; border: 1px solid #e2e8f0; border-radius: 0.5rem;
    }
    .cmd-item-demo:hover { background: #f8fafc; }
    .cmd-item-demo[aria-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
    .cmd-item-demo[aria-disabled="true"]:hover { background: #fff; }
    .cmd-item-demo .icon { width: 1.25rem; height: 1.25rem; display: flex; align-items: center; justify-content: center; color: #94a3b8; flex-shrink: 0; }
    .cmd-item-demo .label { flex: 1; color: #1e293b; }
    .cmd-item-demo .shortcut {
      margin-left: auto; padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #94a3b8;
      background: #f8fafc; border-radius: 0.25rem; border: 1px solid #e2e8f0; font-family: monospace;
    }
  </style>
`,n=e=>s`
  ${y}
  <div
    class="cmd-item-demo"
    role="option"
    aria-disabled="${e.disabled?"true":"false"}"
  >
    ${e.icon?s`<span class="icon">${e.icon}</span>`:""}
    <span class="label">${e.label}</span>
    ${e.shortcut?s`<span class="shortcut">${e.shortcut}</span>`:""}
  </div>
`,r={args:{value:"home",label:"Home",icon:"&#x1F3E0;",shortcut:"",disabled:!1},render:e=>n(e)},a={args:{value:"search",label:"Search",icon:"&#x1F50D;",shortcut:"Ctrl+K",disabled:!1},render:e=>n(e)},t={args:{value:"delete",label:"Delete Account",icon:"&#x1F5D1;",shortcut:"",disabled:!0},render:e=>n(e)},o={args:{value:"theme",label:"Toggle Theme",icon:"&#x1F3A8;",shortcut:"Ctrl+T",disabled:!1},render:e=>n(e)};var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: 'home',
    label: 'Home',
    icon: '&#x1F3E0;',
    shortcut: '',
    disabled: false
  },
  render: args => renderCommandItem(args)
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    value: 'search',
    label: 'Search',
    icon: '&#x1F50D;',
    shortcut: 'Ctrl+K',
    disabled: false
  },
  render: args => renderCommandItem(args)
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 'delete',
    label: 'Delete Account',
    icon: '&#x1F5D1;',
    shortcut: '',
    disabled: true
  },
  render: args => renderCommandItem(args)
}`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 'theme',
    label: 'Toggle Theme',
    icon: '&#x1F3A8;',
    shortcut: 'Ctrl+T',
    disabled: false
  },
  render: args => renderCommandItem(args)
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const S=["Default","WithShortcut","Disabled","WithAction"];export{r as Default,t as Disabled,o as WithAction,a as WithShortcut,S as __namedExportsOrder,D as default};
