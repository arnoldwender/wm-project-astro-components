import{b as d}from"./lit-element-CdmuTPXr.js";const m={title:"Accessibility/BackToTop",tags:["autodocs"],parameters:{docs:{description:{component:`
Smooth scroll-to-top button with accessibility and reduced-motion support.

**Features:**
- Appears after configurable scroll threshold
- Smooth scroll with reduced-motion fallback
- Focus management after scrolling
- High contrast mode support
- Keyboard accessible
        `}}},argTypes:{threshold:{control:"number",description:"Scroll threshold in pixels before button appears"},label:{control:"text",description:"Accessible label text"}}},c=e=>d`
  <div style="position: relative; min-height: 200px; padding: 2rem; font-family: system-ui, sans-serif;">
    <p style="color: #64748b; margin-bottom: 1rem;">Scroll threshold: ${e.threshold||300}px. Button shown in visible state for demo.</p>

    <button
      style="position: fixed; bottom: 1.5rem; right: 1.5rem; z-index: 50; padding: 0.75rem;
             background: #2563eb; color: white; border-radius: 50%; border: none;
             box-shadow: 0 10px 15px rgba(0,0,0,0.1); cursor: pointer; transition: all 300ms;"
      aria-label="${e.label||"Back to top"}"
      title="${e.label||"Back to top"}"
    >
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  </div>
`,o={args:{threshold:300,label:"Back to top"},render:e=>c(e)},r={args:{threshold:500,label:"Nach oben"},render:e=>c(e)};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    threshold: 300,
    label: 'Back to top'
  },
  render: args => renderBackToTop(args)
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    threshold: 500,
    label: 'Nach oben'
  },
  render: args => renderBackToTop(args)
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const h=["Default","GermanLabel"];export{o as Default,r as GermanLabel,h as __namedExportsOrder,m as default};
