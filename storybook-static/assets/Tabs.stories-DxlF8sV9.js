import{b as x}from"./lit-element-CdmuTPXr.js";const k={title:"UI/Tabs",tags:["autodocs"],parameters:{docs:{description:{component:`
Accessible tabbed interface following WAI-ARIA Tabs pattern.

Features:
- Keyboard navigation (arrow keys, Home, End)
- Automatic and manual activation modes
- Vertical and horizontal orientations
- Four visual variants (default, pills, underline, bordered)
- Three sizes (sm, md, lg)
- Full-width tab option
- Animated underline indicator
- Persistent tab state via localStorage
- Reduced motion support
        `}}},argTypes:{variant:{control:{type:"select"},options:["default","pills","underline","bordered"],description:"Visual style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Tab text size"},orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Tab list orientation"}}},z=x`
  <style>
    .tabs-demo { max-width: 600px; font-family: system-ui, -apple-system, sans-serif; }
    .tabs-demo .tab-list {
      display: flex; gap: 0.25rem; padding: 0.25rem; background: #f1f5f9; border-radius: 0.5rem;
    }
    .tabs-demo .tab-list.pills { background: transparent; gap: 0.5rem; padding: 0; }
    .tabs-demo .tab-list.underline {
      background: transparent; gap: 0; padding: 0; border-bottom: 1px solid #e2e8f0;
    }
    .tabs-demo .tab-list.bordered {
      background: transparent; gap: 0; padding: 0; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;
    }
    .tabs-demo .tab-list.vertical { flex-direction: column; min-width: 160px; }
    .tabs-demo .tab-btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
      padding: 0.5rem 1rem; font-weight: 500; color: #64748b; cursor: pointer;
      border: none; background: transparent; white-space: nowrap; transition: all 0.15s;
    }
    .tabs-demo .tab-btn:hover { color: #1e293b; }
    .tabs-demo .tab-btn.active { color: #1e293b; }

    /* Default variant */
    .tabs-demo .tab-list.default .tab-btn.active {
      background: #fff; border-radius: 0.375rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    /* Pills variant */
    .tabs-demo .tab-list.pills .tab-btn { border-radius: 9999px; }
    .tabs-demo .tab-list.pills .tab-btn.active { background: #3b82f6; color: #fff; }
    /* Underline variant */
    .tabs-demo .tab-list.underline .tab-btn { padding-bottom: 0.75rem; border-radius: 0; }
    .tabs-demo .tab-list.underline .tab-btn.active { box-shadow: inset 0 -2px 0 #3b82f6; }
    /* Bordered variant */
    .tabs-demo .tab-list.bordered .tab-btn { border-right: 1px solid #e2e8f0; border-radius: 0; }
    .tabs-demo .tab-list.bordered .tab-btn:last-child { border-right: none; }
    .tabs-demo .tab-list.bordered .tab-btn.active { background: #fff; }

    .tabs-demo .tab-panel { padding: 1rem 0; color: #64748b; line-height: 1.6; }
    .tabs-demo .tab-panel h3 { color: #1e293b; margin: 0 0 0.5rem; }
    .tabs-demo .tab-panel p { margin: 0; }

    .tabs-demo.vertical-layout { display: flex; gap: 1rem; }
    .tabs-demo.vertical-layout .tab-list { border-radius: 0; background: transparent; border-right: 1px solid #e2e8f0; padding-right: 0; }
    .tabs-demo.vertical-layout .tab-btn { text-align: left; justify-content: flex-start; }
    .tabs-demo.vertical-layout .tab-btn.active { background: #eff6ff; border-radius: 0.375rem; }
  </style>
`,o=e=>{const y=e.variant||"default",i=e.orientation==="vertical";return x`
    ${z}
    <div class="tabs-demo ${i?"vertical-layout":""}">
      <div class="tab-list ${y} ${i?"vertical":""}" role="tablist">
        <button class="tab-btn active" role="tab" aria-selected="true" tabindex="0">Overview</button>
        <button class="tab-btn" role="tab" aria-selected="false" tabindex="-1">Features</button>
        <button class="tab-btn" role="tab" aria-selected="false" tabindex="-1">Pricing</button>
        <button class="tab-btn" role="tab" aria-selected="false" tabindex="-1" aria-disabled="true" style="color:#cbd5e1;cursor:not-allowed;">Billing</button>
      </div>
      <div class="tab-panel" role="tabpanel" tabindex="0">
        <h3>Overview</h3>
        <p>Welcome to the project overview. This section provides a high-level summary
        of the application architecture, key features, and current status.</p>
      </div>
    </div>
  `},t={args:{variant:"default",size:"md",orientation:"horizontal"},render:e=>o(e)},a={args:{variant:"pills",size:"md",orientation:"horizontal"},render:e=>o(e)},r={args:{variant:"underline",size:"md",orientation:"horizontal"},render:e=>o(e)},n={args:{variant:"default",size:"md",orientation:"vertical"},render:e=>o(e)};var s,d,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    orientation: 'horizontal'
  },
  render: args => renderTabs(args)
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var b,c,m;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'pills',
    size: 'md',
    orientation: 'horizontal'
  },
  render: args => renderTabs(args)
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    size: 'md',
    orientation: 'horizontal'
  },
  render: args => renderTabs(args)
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'md',
    orientation: 'vertical'
  },
  render: args => renderTabs(args)
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const T=["Default","Pills","Underline","Vertical"];export{t as Default,a as Pills,r as Underline,n as Vertical,T as __namedExportsOrder,k as default};
