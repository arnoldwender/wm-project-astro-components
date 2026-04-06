import{b as t}from"./lit-element-CdmuTPXr.js";const m={title:"Accessibility/ReducedMotion",tags:["autodocs"],parameters:{docs:{description:{component:`
Respects prefers-reduced-motion and provides user control for motion preferences.

**Features:**
- Auto-detects system preference
- User toggle override with localStorage persistence
- CSS custom property injection (--motion-duration, --motion-ok)
- Optional visible toggle button
        `}}},argTypes:{showToggle:{control:"boolean",description:"Show visible toggle button"},defaultReduced:{control:"boolean",description:"Default to reduced motion"}}},c=e=>t`
  <div style="padding: 2rem; font-family: system-ui, sans-serif;">
    ${e.showToggle?t`
      <button style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; background: white; cursor: pointer; font-size: 0.875rem;">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        ${e.defaultReduced?"Animationen aktivieren":"Animationen deaktivieren"}
      </button>
    `:""}

    <div style="margin-top: 1.5rem; padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; color: #64748b;">
      <p style="margin: 0 0 0.5rem;"><strong>--motion-ok:</strong> ${e.defaultReduced?"0":"1"}</p>
      <p style="margin: 0;"><strong>--motion-duration:</strong> ${e.defaultReduced?"0s":"300ms"}</p>
    </div>

    <!-- Demo animation -->
    <div style="margin-top: 1.5rem; width: 3rem; height: 3rem; background: #3b82f6; border-radius: 0.5rem;
                ${e.defaultReduced?"":"animation: pulse 2s ease-in-out infinite;"}">
    </div>
  </div>
  <style>
    @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
  </style>
`,r={args:{showToggle:!0,defaultReduced:!1},render:e=>c(e)},o={args:{showToggle:!0,defaultReduced:!0},render:e=>c(e)};var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    showToggle: true,
    defaultReduced: false
  },
  render: args => renderReducedMotion(args)
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,a,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    showToggle: true,
    defaultReduced: true
  },
  render: args => renderReducedMotion(args)
}`,...(u=(a=o.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const g=["WithToggle","ReducedByDefault"];export{o as ReducedByDefault,r as WithToggle,g as __namedExportsOrder,m as default};
