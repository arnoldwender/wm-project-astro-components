import{b as u}from"./lit-element-CdmuTPXr.js";const p={title:"Accessibility/FocusTrap",tags:["autodocs"],parameters:{docs:{description:{component:`
Traps keyboard focus within a container for modals, dialogs, and drawers.
WCAG 2.4.3 compliant focus order management.

**Features:**
- Traps Tab and Shift+Tab within container
- Returns focus to trigger element on close
- Auto-focus first focusable element
- Escape key support
- Works with dynamic content
        `}}},argTypes:{active:{control:"boolean",description:"Whether the focus trap is active"},returnFocusOnDeactivate:{control:"boolean",description:"Return focus to trigger on close"}}},d=e=>u`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <p style="color: #64748b; margin-bottom: 1rem;">Focus trap is ${e.active?"active":"inactive"}. Tab key cycles within the modal.</p>

    <!-- Modal Demo -->
    <div style="max-width: 28rem; margin: 0 auto; background: white; border-radius: 0.75rem; box-shadow: 0 25px 50px rgba(0,0,0,0.15); padding: 2rem; border: ${e.active?"2px solid #3b82f6":"1px solid #e2e8f0"};">
      <h2 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 1rem;">Confirm Action</h2>
      <p style="color: #64748b; font-size: 0.875rem; margin: 0 0 1.5rem;">Are you sure you want to proceed? This action cannot be undone.</p>
      <div style="display: flex; gap: 0.75rem; justify-content: flex-end;">
        <button style="padding: 0.5rem 1rem; background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 0.375rem; cursor: pointer; font-size: 0.875rem;">Cancel</button>
        <button style="padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; cursor: pointer; font-size: 0.875rem;">Confirm</button>
      </div>
    </div>
  </div>
`,r={args:{active:!0,returnFocusOnDeactivate:!0},render:e=>d(e)},t={args:{active:!1,returnFocusOnDeactivate:!0},render:e=>d(e)};var o,a,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    active: true,
    returnFocusOnDeactivate: true
  },
  render: args => renderFocusTrap(args)
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,i,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    active: false,
    returnFocusOnDeactivate: true
  },
  render: args => renderFocusTrap(args)
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const l=["Active","Inactive"];export{r as Active,t as Inactive,l as __namedExportsOrder,p as default};
