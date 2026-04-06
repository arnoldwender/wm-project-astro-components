import{b as m}from"./lit-element-CdmuTPXr.js";const g={title:"Gallery/BeforeAfter",tags:["autodocs"],parameters:{docs:{description:{component:`
An interactive image comparison slider. Features include:
- Touch, mouse, and keyboard support for the slider handle
- Accessible slider role with aria-valuenow updates
- Configurable initial slider position
- Before/After labels with customizable text
- Configurable aspect ratio
- Reduced motion support
- Click-to-snap and drag-to-compare interactions
        `}}},argTypes:{beforeLabel:{control:"text",description:"Before label text"},afterLabel:{control:"text",description:"After label text"},initialPosition:{control:{type:"range",min:0,max:100,step:5},description:"Initial slider position"},aspectRatio:{control:"text",description:"Aspect ratio"}}},i=e=>m`
  <style>
    .ba { position: relative; width: 100%; max-width: 800px; margin: 2rem auto; font-family: system-ui, sans-serif; }
    .ba-wrapper { position: relative; width: 100%; overflow: hidden; border-radius: 0.5rem; cursor: ew-resize; box-shadow: 0 10px 40px rgba(0,0,0,0.15); aspect-ratio: ${e.aspectRatio}; }
    .ba-layer { position: absolute; inset: 0; width: 100%; height: 100%; }
    .ba-after { background: linear-gradient(135deg, #dbeafe 0%, #93c5fd 100%); display: flex; align-items: center; justify-content: center; color: #1e40af; font-size: 1.5rem; font-weight: 700; }
    .ba-before { background: linear-gradient(135deg, #fecaca 0%, #f87171 100%); display: flex; align-items: center; justify-content: center; color: #991b1b; font-size: 1.5rem; font-weight: 700; clip-path: inset(0 ${100-e.initialPosition}% 0 0); }
    .ba-slider { position: absolute; top: 0; bottom: 0; left: ${e.initialPosition}%; transform: translateX(-50%); z-index: 10; pointer-events: none; }
    .ba-line { position: absolute; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: 2px; background: white; box-shadow: 0 0 4px rgba(0,0,0,0.3); }
    .ba-handle { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 3rem; height: 3rem; pointer-events: auto; cursor: grab; }
    .ba-handle svg { filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); }
    .ba-label { position: absolute; top: 1rem; padding: 0.375rem 0.75rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); color: white; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 0.375rem; z-index: 5; }
    .ba-label-before { left: 1rem; }
    .ba-label-after { right: 1rem; }
  </style>
  <div class="ba">
    <div class="ba-wrapper">
      <div class="ba-layer ba-after">After</div>
      <div class="ba-layer ba-before">Before</div>
      <div class="ba-slider" role="slider" aria-label="Image comparison slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${e.initialPosition}" tabindex="0">
        <div class="ba-line"></div>
        <div class="ba-handle">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" fill="white" stroke="#333" stroke-width="2"/>
            <path d="M15 20L12 17M12 17L15 14M12 17H28M28 17L25 14M28 17L25 20" stroke="#333" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
      <div class="ba-label ba-label-before">${e.beforeLabel}</div>
      <div class="ba-label ba-label-after">${e.afterLabel}</div>
    </div>
  </div>
`,a={args:{beforeLabel:"Vorher",afterLabel:"Nachher",initialPosition:50,aspectRatio:"4/3"},render:e=>i(e)},r={args:{beforeLabel:"Before",afterLabel:"After",initialPosition:75,aspectRatio:"16/9"},render:e=>i(e)},t={args:{beforeLabel:"Original",afterLabel:"Edited",initialPosition:25,aspectRatio:"4/3"},render:e=>i(e)};var o,s,n;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    beforeLabel: 'Vorher',
    afterLabel: 'Nachher',
    initialPosition: 50,
    aspectRatio: '4/3'
  },
  render: args => renderBeforeAfter(args)
}`,...(n=(s=a.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    beforeLabel: 'Before',
    afterLabel: 'After',
    initialPosition: 75,
    aspectRatio: '16/9'
  },
  render: args => renderBeforeAfter(args)
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var b,f,p;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    beforeLabel: 'Original',
    afterLabel: 'Edited',
    initialPosition: 25,
    aspectRatio: '4/3'
  },
  render: args => renderBeforeAfter(args)
}`,...(p=(f=t.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const h=["Default","MostlyBefore","MostlyAfter"];export{a as Default,t as MostlyAfter,r as MostlyBefore,h as __namedExportsOrder,g as default};
