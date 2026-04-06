import{b as i}from"./lit-element-CdmuTPXr.js";const p={title:"Accessibility/SkipLinks",tags:["autodocs"],parameters:{docs:{description:{component:`
WCAG 2.4.1 compliant skip navigation for keyboard users.

**Features:**
- Multiple configurable skip targets
- Visible on focus, hidden otherwise
- High contrast styling for visibility
- Customizable labels for i18n
- Screen reader optimized
        `}}},argTypes:{}},m=()=>i`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <p style="font-size: 0.875rem; color: #64748b; margin-bottom: 1rem;">Skip links are shown in visible state for demo purposes. Normally they only appear on keyboard focus (Tab key).</p>

    <!-- Skip Links (shown for demo) -->
    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem;">
      ${[{href:"#main-content",label:"Skip to main content"},{href:"#main-navigation",label:"Skip to navigation"},{href:"#footer",label:"Skip to footer"}].map(e=>i`
        <a href=${e.href} style="display: inline-block; padding: 0.75rem 1.5rem; background: #1e293b; color: white; text-decoration: none; font-weight: 600; font-size: 0.875rem; border-radius: 0 0 0.375rem 0.375rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          ${e.label}
        </a>
      `)}
    </div>

    <!-- Page structure -->
    <nav id="main-navigation" style="padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; margin-bottom: 1rem;">
      <span style="font-size: 0.875rem; font-weight: 600;">Navigation</span>
    </nav>
    <main id="main-content" style="padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; margin-bottom: 1rem;">
      <span style="font-size: 0.875rem; font-weight: 600;">Main Content</span>
    </main>
    <footer id="footer" style="padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem;">
      <span style="font-size: 0.875rem; font-weight: 600;">Footer</span>
    </footer>
  </div>
`,r={render:()=>m()},n={render:()=>i`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        ${[{href:"#inhalt",label:"Zum Inhalt springen"},{href:"#navigation",label:"Zur Navigation springen"},{href:"#fusszeile",label:"Zur Fußzeile springen"}].map(e=>i`
          <a href=${e.href} style="display: inline-block; padding: 0.75rem 1.5rem; background: #1e293b; color: white; text-decoration: none; font-weight: 600; font-size: 0.875rem; border-radius: 0 0 0.375rem 0.375rem;">
            ${e.label}
          </a>
        `)}
      </div>
    </div>
  `};var a,o,t;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => renderSkipLinks()
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => html\`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        \${[{
    href: '#inhalt',
    label: 'Zum Inhalt springen'
  }, {
    href: '#navigation',
    label: 'Zur Navigation springen'
  }, {
    href: '#fusszeile',
    label: 'Zur Fu\\u00DFzeile springen'
  }].map(link => html\`
          <a href=\${link.href} style="display: inline-block; padding: 0.75rem 1.5rem; background: #1e293b; color: white; text-decoration: none; font-weight: 600; font-size: 0.875rem; border-radius: 0 0 0.375rem 0.375rem;">
            \${link.label}
          </a>
        \`)}
      </div>
    </div>
  \`
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const c=["Default","GermanLabels"];export{r as Default,n as GermanLabels,c as __namedExportsOrder,p as default};
