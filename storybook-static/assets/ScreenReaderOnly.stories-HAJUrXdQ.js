import{b as n}from"./lit-element-CdmuTPXr.js";const m={title:"Accessibility/ScreenReaderOnly",tags:["autodocs"],parameters:{docs:{description:{component:`
Visually hides content while keeping it accessible to screen readers.

**Features:**
- Configurable HTML element (span, div, p, h1-h6, label)
- Optional focusable mode for skip links that appear on focus
- Zero visual footprint using clip-path technique
- Slot-based content composition
        `}}},argTypes:{as:{control:"select",options:["span","div","p","h2","label"],description:"HTML element to render"},focusable:{control:"boolean",description:"Become visible on focus (for skip links)"}}},c=e=>n`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 1rem;">Screen Reader Only Demo</h3>

    <!-- Icon button with sr-only label -->
    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
      <button style="padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; background: white; cursor: pointer;">
        <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        <span style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;">Close menu</span>
      </button>
      <span style="font-size: 0.875rem; color: #64748b;">&larr; Button has a visually hidden "Close menu" label</span>
    </div>

    <!-- Focusable skip link demo -->
    ${e.focusable?n`
      <div style="margin-bottom: 1rem;">
        <a href="#main-content" style="padding: 0.5rem 1rem; background: #3b82f6; color: white; text-decoration: none; border-radius: 0.375rem; font-size: 0.875rem;">Skip to main content</a>
        <span style="font-size: 0.875rem; color: #64748b; margin-left: 0.75rem;">&larr; Focusable skip link (visible for demo)</span>
      </div>
    `:""}

    <div style="padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; color: #64748b;">
      <p style="margin: 0;">Element: <code>&lt;${e.as||"span"}&gt;</code>, Focusable: <code>${e.focusable||!1}</code></p>
      <p style="margin: 0.5rem 0 0;">The hidden content is invisible but read by screen readers using the clip-path technique.</p>
    </div>
  </div>
`,r={args:{as:"span",focusable:!1},render:e=>c(e)},s={args:{as:"span",focusable:!0},render:e=>c(e)};var o,a,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    as: 'span',
    focusable: false
  },
  render: args => renderScreenReaderOnly(args)
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var i,l,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'span',
    focusable: true
  },
  render: args => renderScreenReaderOnly(args)
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const u=["Default","FocusableSkipLink"];export{r as Default,s as FocusableSkipLink,u as __namedExportsOrder,m as default};
