import{b as t}from"./lit-element-CdmuTPXr.js";const f={title:"Sections/SidebarLayout",tags:["autodocs"],parameters:{docs:{description:{component:"Layout with sidebar and main content. Left/right positioning, collapsible with mobile overlay, sticky sidebar/header options, configurable width and gap."}}},argTypes:{sidebarPosition:{control:"select",options:["left","right"]}}},e={render:()=>t`
    <div style="display:grid;grid-template-columns:280px 1fr;min-height:400px;font-family:system-ui,sans-serif;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
      <aside style="background:#fff;border-right:1px solid #e2e8f0;padding:1.5rem;">
        <h3 style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#94a3b8;margin:0 0 1rem;">Navigation</h3>
        ${["Dashboard","Projects","Team","Settings"].map(i=>t`
          <a href="#" style="display:block;padding:0.625rem 0.75rem;font-size:0.875rem;color:#64748b;text-decoration:none;border-radius:0.375rem;margin-bottom:0.25rem;">${i}</a>
        `)}
      </aside>
      <main style="padding:2rem;background:#f8fafc;">
        <h1 style="font-size:1.5rem;font-weight:700;margin:0 0 1rem;">Dashboard</h1>
        <p style="color:#64748b;">Main content area. Sidebar collapses on mobile with an overlay toggle.</p>
      </main>
    </div>
  `},r={render:()=>t`
    <div style="display:grid;grid-template-columns:1fr 280px;min-height:400px;font-family:system-ui,sans-serif;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
      <main style="padding:2rem;">
        <h1 style="font-size:1.5rem;font-weight:700;margin:0 0 1rem;">Blog Post Title</h1>
        <p style="color:#64748b;line-height:1.7;">Article content goes here. The sidebar on the right can contain filters, related articles, or table of contents.</p>
      </main>
      <aside style="background:#f8fafc;border-left:1px solid #e2e8f0;padding:1.5rem;">
        <h3 style="font-size:0.875rem;font-weight:600;margin:0 0 1rem;">Related Articles</h3>
        ${["Getting Started","Advanced Tips","FAQ"].map(i=>t`
          <a href="#" style="display:block;padding:0.5rem 0;font-size:0.875rem;color:#3b82f6;text-decoration:none;">${i}</a>
        `)}
      </aside>
    </div>
  `};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:grid;grid-template-columns:280px 1fr;min-height:400px;font-family:system-ui,sans-serif;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
      <aside style="background:#fff;border-right:1px solid #e2e8f0;padding:1.5rem;">
        <h3 style="font-size:0.875rem;font-weight:600;text-transform:uppercase;color:#94a3b8;margin:0 0 1rem;">Navigation</h3>
        \${['Dashboard', 'Projects', 'Team', 'Settings'].map(item => html\`
          <a href="#" style="display:block;padding:0.625rem 0.75rem;font-size:0.875rem;color:#64748b;text-decoration:none;border-radius:0.375rem;margin-bottom:0.25rem;">\${item}</a>
        \`)}
      </aside>
      <main style="padding:2rem;background:#f8fafc;">
        <h1 style="font-size:1.5rem;font-weight:700;margin:0 0 1rem;">Dashboard</h1>
        <p style="color:#64748b;">Main content area. Sidebar collapses on mobile with an overlay toggle.</p>
      </main>
    </div>
  \`
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display:grid;grid-template-columns:1fr 280px;min-height:400px;font-family:system-ui,sans-serif;border:1px solid #e2e8f0;border-radius:0.75rem;overflow:hidden;">
      <main style="padding:2rem;">
        <h1 style="font-size:1.5rem;font-weight:700;margin:0 0 1rem;">Blog Post Title</h1>
        <p style="color:#64748b;line-height:1.7;">Article content goes here. The sidebar on the right can contain filters, related articles, or table of contents.</p>
      </main>
      <aside style="background:#f8fafc;border-left:1px solid #e2e8f0;padding:1.5rem;">
        <h3 style="font-size:0.875rem;font-weight:600;margin:0 0 1rem;">Related Articles</h3>
        \${['Getting Started', 'Advanced Tips', 'FAQ'].map(item => html\`
          <a href="#" style="display:block;padding:0.5rem 0;font-size:0.875rem;color:#3b82f6;text-decoration:none;">\${item}</a>
        \`)}
      </aside>
    </div>
  \`
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const c=["Default","RightSidebar"];export{e as Default,r as RightSidebar,c as __namedExportsOrder,f as default};
