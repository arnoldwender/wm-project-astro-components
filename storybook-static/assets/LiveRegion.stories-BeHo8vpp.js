import{b as l}from"./lit-element-CdmuTPXr.js";const u={title:"Accessibility/LiveRegion",tags:["autodocs"],parameters:{docs:{description:{component:`
ARIA Live Region for announcing dynamic content changes to screen readers.

**Features:**
- Polite and assertive announcement modes
- Atomic updates option
- Content relevance filtering (additions, removals, text, all)
- JavaScript API for programmatic announcements
- Auto-clear with configurable delay
        `}}},argTypes:{mode:{control:"select",options:["polite","assertive","off"],description:"Announcement priority"},role:{control:"select",options:["status","alert","log","timer"],description:"ARIA role"},atomic:{control:"boolean",description:"Announce entire region on change"}}},c=e=>l`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1.5rem; max-width: 32rem;">
      <h3 style="font-size: 1rem; font-weight: 600; margin: 0 0 0.75rem;">Live Region Demo</h3>
      <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">
        Mode: <code style="background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 0.25rem;">${e.mode}</code>,
        Role: <code style="background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 0.25rem;">${e.role}</code>,
        Atomic: <code style="background: #e2e8f0; padding: 0.125rem 0.375rem; border-radius: 0.25rem;">${e.atomic}</code>
      </p>

      <!-- Simulated live region -->
      <div role="${e.role}" aria-live="${e.mode}" aria-atomic="${e.atomic}"
           style="padding: 0.75rem; background: ${e.role==="alert"?"#fef2f2":"#f0fdf4"}; border: 1px solid ${e.role==="alert"?"#fecaca":"#bbf7d0"}; border-radius: 0.375rem; font-size: 0.875rem; color: ${e.role==="alert"?"#991b1b":"#166534"};">
        ${e.role==="alert"?"Error: Please fill in all required fields.":"3 items added to your cart."}
      </div>
    </div>
  </div>
`,r={args:{mode:"polite",role:"status",atomic:!0},render:e=>c(e)},o={args:{mode:"assertive",role:"alert",atomic:!0},render:e=>c(e)};var t,i,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    mode: 'polite',
    role: 'status',
    atomic: true
  },
  render: args => renderLiveRegion(args)
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var n,s,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'assertive',
    role: 'alert',
    atomic: true
  },
  render: args => renderLiveRegion(args)
}`,...(d=(s=o.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const p=["PoliteStatus","AssertiveAlert"];export{o as AssertiveAlert,r as PoliteStatus,p as __namedExportsOrder,u as default};
