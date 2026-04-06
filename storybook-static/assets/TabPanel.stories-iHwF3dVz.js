import{b as r}from"./lit-element-CdmuTPXr.js";const v={title:"UI/TabPanel",tags:["autodocs"],parameters:{docs:{description:{component:`
Content panel for use within the Tabs component.

Features:
- ARIA role="tabpanel" linked to its Tab via aria-labelledby
- Hidden by default, shown when corresponding Tab is selected
- Focusable with tabindex="0" for keyboard accessibility
- Slot-based content supports any nested HTML or components
        `}}},argTypes:{id:{control:"text",description:"Panel identifier (matches Tab id)"},visible:{control:"boolean",description:"Whether the panel is visible (active tab)"}}},u=r`
  <style>
    .tabpanel-demo {
      padding: 1rem; font-family: system-ui, -apple-system, sans-serif;
      color: #1e293b; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 0.5rem;
      max-width: 480px; background: #fff;
    }
    .tabpanel-demo[hidden] { display: none; }
    .tabpanel-demo h3 { margin: 0 0 0.5rem; font-size: 1.125rem; font-weight: 600; }
    .tabpanel-demo p { margin: 0; color: #64748b; }
    .tabpanel-demo:focus-visible { outline: 2px solid #3b82f6; outline-offset: 2px; }
  </style>
`,h=e=>r`
  ${u}
  <div
    class="tabpanel-demo"
    role="tabpanel"
    id="${e.id}-panel"
    aria-labelledby="${e.id}-tab"
    tabindex="0"
    ?hidden=${!e.visible}
  >
    <h3>Panel: ${e.id}</h3>
    <p>This is the content area of the tab panel. It supports any HTML content,
    forms, tables, or nested components. The panel is linked to its corresponding
    tab button via ARIA attributes for screen reader accessibility.</p>
  </div>
`,t={args:{id:"overview",visible:!0},render:e=>h(e)},a={args:{id:"settings",visible:!1},render:e=>h(e)},n={render:()=>r`
    ${u}
    <div class="tabpanel-demo" role="tabpanel" tabindex="0">
      <h3>Project Details</h3>
      <p style="margin-bottom:0.75rem;">Comprehensive overview of the current project status and deliverables.</p>
      <ul style="margin:0; padding-left:1.25rem; color:#64748b;">
        <li>Frontend: Astro + React</li>
        <li>Backend: Node.js API</li>
        <li>Database: PostgreSQL</li>
        <li>Deployment: Netlify</li>
      </ul>
    </div>
  `};var s,i,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    id: 'overview',
    visible: true
  },
  render: args => renderTabPanel(args)
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,d,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'settings',
    visible: false
  },
  render: args => renderTabPanel(args)
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,b,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    \${panelStyles}
    <div class="tabpanel-demo" role="tabpanel" tabindex="0">
      <h3>Project Details</h3>
      <p style="margin-bottom:0.75rem;">Comprehensive overview of the current project status and deliverables.</p>
      <ul style="margin:0; padding-left:1.25rem; color:#64748b;">
        <li>Frontend: Astro + React</li>
        <li>Backend: Node.js API</li>
        <li>Database: PostgreSQL</li>
        <li>Deployment: Netlify</li>
      </ul>
    </div>
  \`
}`,...(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};const g=["Default","Hidden","RichContent"];export{t as Default,a as Hidden,n as RichContent,g as __namedExportsOrder,v as default};
