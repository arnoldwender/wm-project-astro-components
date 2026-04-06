import{b as n}from"./lit-element-CdmuTPXr.js";const D={title:"UI/Badge",tags:["autodocs"],parameters:{docs:{description:{component:`
Small status indicator or label for categorization.

Features:
- Three variants (solid, soft, outline)
- Seven semantic colors (default, primary, secondary, success, warning, error, info)
- Three sizes (sm, md, lg)
- Optional dot indicator
- Pill (fully rounded) shape option
- Removable option with close button
        `}}},argTypes:{variant:{control:{type:"select"},options:["solid","soft","outline"],description:"Visual style variant"},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","error","info"],description:"Semantic color"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Badge size"},label:{control:"text",description:"Badge text content"},dot:{control:"boolean",description:"Show dot indicator"},pill:{control:"boolean",description:"Fully rounded pill shape"},removable:{control:"boolean",description:"Show remove/close button"}}},c={solid:{default:{bg:"#64748b",text:"#fff",dot:"#94a3b8"},primary:{bg:"#3b82f6",text:"#fff",dot:"#3b82f6"},success:{bg:"#22c55e",text:"#fff",dot:"#22c55e"},warning:{bg:"#f59e0b",text:"#fff",dot:"#f59e0b"},error:{bg:"#ef4444",text:"#fff",dot:"#ef4444"},info:{bg:"#06b6d4",text:"#fff",dot:"#06b6d4"},secondary:{bg:"#8b5cf6",text:"#fff",dot:"#8b5cf6"}},soft:{default:{bg:"#f1f5f9",text:"#64748b",dot:"#94a3b8"},primary:{bg:"#eff6ff",text:"#3b82f6",dot:"#3b82f6"},success:{bg:"#f0fdf4",text:"#166534",dot:"#22c55e"},warning:{bg:"#fffbeb",text:"#92400e",dot:"#f59e0b"},error:{bg:"#fef2f2",text:"#991b1b",dot:"#ef4444"},info:{bg:"#ecfeff",text:"#0e7490",dot:"#06b6d4"},secondary:{bg:"#f5f3ff",text:"#7c3aed",dot:"#8b5cf6"}},outline:{default:{bg:"transparent",text:"#64748b",border:"#e2e8f0",dot:"#94a3b8"},primary:{bg:"transparent",text:"#3b82f6",border:"#3b82f6",dot:"#3b82f6"},success:{bg:"transparent",text:"#22c55e",border:"#22c55e",dot:"#22c55e"},warning:{bg:"transparent",text:"#f59e0b",border:"#f59e0b",dot:"#f59e0b"},error:{bg:"transparent",text:"#ef4444",border:"#ef4444",dot:"#ef4444"},info:{bg:"transparent",text:"#06b6d4",border:"#06b6d4",dot:"#06b6d4"},secondary:{bg:"transparent",text:"#8b5cf6",border:"#8b5cf6",dot:"#8b5cf6"}}},B={sm:{px:"0.375rem",py:"0.125rem",fontSize:"0.75rem"},md:{px:"0.5rem",py:"0.125rem",fontSize:"0.875rem"},lg:{px:"0.625rem",py:"0.25rem",fontSize:"0.875rem"}},l=e=>{var i;const z=e.variant||"soft",S=e.color||"default",$=e.size||"md",d=B[$],r=((i=c[z])==null?void 0:i[S])||c.soft.default;return n`
    <style>
      .badge-demo {
        display: inline-flex; align-items: center; gap: 0.375rem;
        padding: ${d.py} ${d.px}; font-size: ${d.fontSize}; font-weight: 500;
        font-family: system-ui, -apple-system, sans-serif; white-space: nowrap;
        background: ${r.bg}; color: ${r.text};
        border-radius: ${e.pill?"9999px":"0.375rem"};
        ${r.border?`border: 1px solid ${r.border};`:""}
      }
      .badge-dot { width: 0.375rem; height: 0.375rem; border-radius: 50%; background: ${r.dot}; flex-shrink: 0; }
      .badge-remove {
        margin-right: -0.125rem; padding: 0.125rem; background: none; border: none; cursor: pointer;
        border-radius: 0.25rem; color: inherit; opacity: 0.7; display: flex;
      }
      .badge-remove:hover { opacity: 1; background: rgba(0,0,0,0.1); }
      .badge-remove svg { width: 0.75rem; height: 0.75rem; }
    </style>
    <span class="badge-demo">
      ${e.dot?n`<span class="badge-dot"></span>`:""}
      <span>${e.label}</span>
      ${e.removable?n`
        <button class="badge-remove" aria-label="Remove">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      `:""}
    </span>
  `},a={args:{variant:"soft",color:"default",size:"md",label:"Badge",dot:!1,pill:!1,removable:!1},render:e=>l(e)},o={render:()=>n`
    <style>
      .badges-row { display: flex; gap: 0.5rem; flex-wrap: wrap; font-family: system-ui, sans-serif; }
      .badge-s { display: inline-flex; align-items: center; padding: 0.125rem 0.5rem; font-size: 0.875rem; font-weight: 500; color: #fff; border-radius: 0.375rem; }
    </style>
    <div class="badges-row">
      <span class="badge-s" style="background:#3b82f6;">Primary</span>
      <span class="badge-s" style="background:#22c55e;">Success</span>
      <span class="badge-s" style="background:#f59e0b;color:#fff;">Warning</span>
      <span class="badge-s" style="background:#ef4444;">Error</span>
      <span class="badge-s" style="background:#06b6d4;">Info</span>
      <span class="badge-s" style="background:#8b5cf6;">Secondary</span>
    </div>
  `},s={args:{variant:"soft",color:"success",size:"md",label:"Active",dot:!0,pill:!0,removable:!1},render:e=>l(e)},t={args:{variant:"soft",color:"primary",size:"md",label:"Removable",dot:!1,pill:!0,removable:!0},render:e=>l(e)};var f,b,p;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'default',
    size: 'md',
    label: 'Badge',
    dot: false,
    pill: false,
    removable: false
  },
  render: args => renderBadge(args)
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,m,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .badges-row { display: flex; gap: 0.5rem; flex-wrap: wrap; font-family: system-ui, sans-serif; }
      .badge-s { display: inline-flex; align-items: center; padding: 0.125rem 0.5rem; font-size: 0.875rem; font-weight: 500; color: #fff; border-radius: 0.375rem; }
    </style>
    <div class="badges-row">
      <span class="badge-s" style="background:#3b82f6;">Primary</span>
      <span class="badge-s" style="background:#22c55e;">Success</span>
      <span class="badge-s" style="background:#f59e0b;color:#fff;">Warning</span>
      <span class="badge-s" style="background:#ef4444;">Error</span>
      <span class="badge-s" style="background:#06b6d4;">Info</span>
      <span class="badge-s" style="background:#8b5cf6;">Secondary</span>
    </div>
  \`
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,v,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'success',
    size: 'md',
    label: 'Active',
    dot: true,
    pill: true,
    removable: false
  },
  render: args => renderBadge(args)
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,w,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'soft',
    color: 'primary',
    size: 'md',
    label: 'Removable',
    dot: false,
    pill: true,
    removable: true
  },
  render: args => renderBadge(args)
}`,...(k=(w=t.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const M=["Default","SolidColors","WithDot","Removable"];export{a as Default,t as Removable,o as SolidColors,s as WithDot,M as __namedExportsOrder,D as default};
