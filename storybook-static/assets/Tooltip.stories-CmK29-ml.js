import{b as s}from"./lit-element-CdmuTPXr.js";const x={title:"UI/Tooltip",tags:["autodocs"],parameters:{docs:{description:{component:`
Accessible tooltip with smart positioning and rich content support.

Features:
- Auto-positioning (flips when near viewport edges)
- Four placements (top, bottom, left, right)
- Configurable show/hide delay
- Rich HTML content support via slot
- Arrow pointer indicator
- Keyboard accessible (focus triggers tooltip)
- Touch device support (tap to toggle)
- Interactive mode (hover over tooltip content)
- Escape key to dismiss
- Repositions on scroll/resize
- Reduced motion support
        `}}},argTypes:{content:{control:"text",description:"Tooltip text content"},placement:{control:{type:"select"},options:["top","bottom","left","right"],description:"Preferred tooltip placement"},showArrow:{control:"boolean",description:"Show arrow pointer"},delay:{control:"number",description:"Show delay in milliseconds"}}},T=s`
  <style>
    .tooltip-demo-wrapper {
      position: relative; display: inline-block; font-family: system-ui, -apple-system, sans-serif;
    }
    .tooltip-demo-trigger {
      padding: 0.5rem 1rem; background: #3b82f6; color: #fff; border: none; border-radius: 0.375rem;
      cursor: pointer; font-weight: 500; font-size: 0.875rem;
    }
    .tooltip-demo-trigger:hover { background: #2563eb; }
    .tooltip-demo {
      position: absolute; z-index: 50; padding: 0.5rem 0.75rem; font-size: 0.875rem;
      background: #0f172a; color: #f8fafc; border-radius: 0.5rem;
      box-shadow: 0 10px 25px rgba(0,0,0,0.2); max-width: 280px; white-space: nowrap;
    }
    .tooltip-demo .arrow {
      position: absolute; width: 0.5rem; height: 0.5rem; background: #0f172a; transform: rotate(45deg);
    }
    /* Top placement */
    .tooltip-demo.top { bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
    .tooltip-demo.top .arrow { bottom: -0.25rem; left: 50%; transform: translateX(-50%) rotate(45deg); }
    /* Bottom placement */
    .tooltip-demo.bottom { top: calc(100% + 8px); left: 50%; transform: translateX(-50%); }
    .tooltip-demo.bottom .arrow { top: -0.25rem; left: 50%; transform: translateX(-50%) rotate(45deg); }
    /* Left placement */
    .tooltip-demo.left { right: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
    .tooltip-demo.left .arrow { right: -0.25rem; top: 50%; transform: translateY(-50%) rotate(45deg); }
    /* Right placement */
    .tooltip-demo.right { left: calc(100% + 8px); top: 50%; transform: translateY(-50%); }
    .tooltip-demo.right .arrow { left: -0.25rem; top: 50%; transform: translateY(-50%) rotate(45deg); }
  </style>
`,a=t=>{const y=t.placement||"top";return s`
    ${T}
    <div style="padding: 4rem; display: flex; justify-content: center;">
      <div class="tooltip-demo-wrapper">
        <button class="tooltip-demo-trigger">Hover me</button>
        <div class="tooltip-demo ${y}">
          ${t.content||"Helpful tooltip text"}
          ${t.showArrow?s`<div class="arrow"></div>`:""}
        </div>
      </div>
    </div>
  `},o={args:{content:"This is a helpful tooltip",placement:"top",showArrow:!0,delay:200},render:t=>a(t)},e={args:{content:"Information appears below",placement:"bottom",showArrow:!0,delay:200},render:t=>a(t)},r={args:{content:"Tooltip on the left",placement:"left",showArrow:!0,delay:200},render:t=>a(t)},n={args:{content:"Tooltip on the right",placement:"right",showArrow:!0,delay:200},render:t=>a(t)};var i,p,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    content: 'This is a helpful tooltip',
    placement: 'top',
    showArrow: true,
    delay: 200
  },
  render: args => renderTooltip(args)
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    content: 'Information appears below',
    placement: 'bottom',
    showArrow: true,
    delay: 200
  },
  render: args => renderTooltip(args)
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,f,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on the left',
    placement: 'left',
    showArrow: true,
    delay: 200
  },
  render: args => renderTooltip(args)
}`,...(u=(f=r.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,w,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    content: 'Tooltip on the right',
    placement: 'right',
    showArrow: true,
    delay: 200
  },
  render: args => renderTooltip(args)
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const A=["Top","Bottom","Left","Right"];export{e as Bottom,r as Left,n as Right,o as Top,A as __namedExportsOrder,x as default};
