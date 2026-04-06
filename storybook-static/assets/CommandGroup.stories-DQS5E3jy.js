import{b as o}from"./lit-element-CdmuTPXr.js";const f={title:"UI/CommandGroup",tags:["autodocs"],parameters:{docs:{description:{component:`
Groups related command items with an optional title.

Features:
- ARIA role="group" with accessible label for screen readers
- Uppercase styled section title for visual separation
- Automatic border separator between consecutive groups
- Hidden when no matching items via [hidden] attribute
- Slot-based children for flexible CommandItem composition
        `}}},argTypes:{title:{control:"text",description:"Group heading displayed above items"},name:{control:"text",description:"Internal group identifier"}}},v=o`
  <style>
    .cmd-group { font-family: system-ui, -apple-system, sans-serif; max-width: 480px; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; overflow: hidden; }
    .cmd-group-title {
      padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.05em; color: #94a3b8;
    }
    .cmd-item {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; cursor: pointer;
      transition: background-color 0.1s ease-out;
    }
    .cmd-item:hover { background: #f8fafc; }
    .cmd-item-icon { width: 1.25rem; height: 1.25rem; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
    .cmd-item-label { flex: 1; color: #1e293b; }
    .cmd-item-shortcut {
      margin-left: auto; padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #94a3b8;
      background: #f8fafc; border-radius: 0.25rem; border: 1px solid #e2e8f0; font-family: monospace;
    }
    .cmd-group + .cmd-group { border-top: 1px solid #f1f5f9; }
  </style>
`,g=e=>o`
  ${v}
  <div class="cmd-group" role="group" aria-label="${e.title}">
    ${e.title?o`<div class="cmd-group-title">${e.title}</div>`:""}
    <div role="listbox">
      <div class="cmd-item" role="option">
        <span class="cmd-item-icon">&#x1F3E0;</span>
        <span class="cmd-item-label">Home</span>
      </div>
      <div class="cmd-item" role="option">
        <span class="cmd-item-icon">&#x1F4C4;</span>
        <span class="cmd-item-label">Documentation</span>
        <span class="cmd-item-shortcut">Ctrl+D</span>
      </div>
      <div class="cmd-item" role="option">
        <span class="cmd-item-icon">&#x2699;</span>
        <span class="cmd-item-label">Settings</span>
        <span class="cmd-item-shortcut">Ctrl+,</span>
      </div>
    </div>
  </div>
`,s={args:{title:"Navigation",name:"nav"},render:e=>g(e)},a={render:()=>o`
    ${v}
    <div style="max-width:480px; background:#fff; border:1px solid #e2e8f0; border-radius:0.75rem; overflow:hidden;">
      <div class="cmd-group" role="group" aria-label="Navigation">
        <div class="cmd-group-title">Navigation</div>
        <div role="listbox">
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F3E0;</span>
            <span class="cmd-item-label">Home</span>
          </div>
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F4CA;</span>
            <span class="cmd-item-label">Dashboard</span>
          </div>
        </div>
      </div>
      <div class="cmd-group" role="group" aria-label="Actions">
        <div class="cmd-group-title">Actions</div>
        <div role="listbox">
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F50D;</span>
            <span class="cmd-item-label">Search</span>
            <span class="cmd-item-shortcut">Ctrl+K</span>
          </div>
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F3A8;</span>
            <span class="cmd-item-label">Toggle Theme</span>
            <span class="cmd-item-shortcut">Ctrl+T</span>
          </div>
        </div>
      </div>
    </div>
  `},i={args:{title:"",name:"ungrouped"},render:e=>g(e)};var t,r,n;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: 'Navigation',
    name: 'nav'
  },
  render: args => renderCommandGroup(args)
}`,...(n=(r=s.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    \${groupStyles}
    <div style="max-width:480px; background:#fff; border:1px solid #e2e8f0; border-radius:0.75rem; overflow:hidden;">
      <div class="cmd-group" role="group" aria-label="Navigation">
        <div class="cmd-group-title">Navigation</div>
        <div role="listbox">
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F3E0;</span>
            <span class="cmd-item-label">Home</span>
          </div>
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F4CA;</span>
            <span class="cmd-item-label">Dashboard</span>
          </div>
        </div>
      </div>
      <div class="cmd-group" role="group" aria-label="Actions">
        <div class="cmd-group-title">Actions</div>
        <div role="listbox">
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F50D;</span>
            <span class="cmd-item-label">Search</span>
            <span class="cmd-item-shortcut">Ctrl+K</span>
          </div>
          <div class="cmd-item" role="option">
            <span class="cmd-item-icon">&#x1F3A8;</span>
            <span class="cmd-item-label">Toggle Theme</span>
            <span class="cmd-item-shortcut">Ctrl+T</span>
          </div>
        </div>
      </div>
    </div>
  \`
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: '',
    name: 'ungrouped'
  },
  render: args => renderCommandGroup(args)
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const x=["Default","MultipleGroups","WithoutTitle"];export{s as Default,a as MultipleGroups,i as WithoutTitle,x as __namedExportsOrder,f as default};
