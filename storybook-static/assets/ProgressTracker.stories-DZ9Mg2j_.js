import{b as s}from"./lit-element-CdmuTPXr.js";const O={title:"UI/ProgressTracker",tags:["autodocs"],parameters:{docs:{description:{component:`
Multi-step progress indicator for checkout flows, wizards, and onboarding.

Features:
- Horizontal and vertical orientation
- Three variants (dots, numbers, icons)
- Three sizes (sm, md, lg)
- Step status tracking (completed, current, upcoming)
- Animated connecting lines with progress fill
- aria-current="step" on active step
- Dark mode support
        `}}},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"Layout orientation"},variant:{control:{type:"select"},options:["dots","numbers","icons"],description:"Step indicator style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Component size"}}},n=[{label:"Cart",description:"Review items",status:"completed"},{label:"Shipping",description:"Delivery address",status:"completed"},{label:"Payment",description:"Payment method",status:"current"},{label:"Confirm",description:"Place order",status:"upcoming"}],f={sm:{indicator:"1.5rem",font:"0.75rem",descFont:"0.75rem",checkSize:"0.75rem"},md:{indicator:"2rem",font:"0.875rem",descFont:"0.75rem",checkSize:"1rem"},lg:{indicator:"2.75rem",font:"1rem",descFont:"0.875rem",checkSize:"1.25rem"}},B=e=>`<svg width="${e}" height="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`,a=(e,N,g,_)=>{const r=f[_]||f.md,t=N==="vertical";return s`
    <style>
      .pt-demo { font-family: system-ui, -apple-system, sans-serif; max-width: ${t?"400px":"700px"}; }
      .pt-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: ${t?"column":"row"}; }
      .pt-step { flex: ${t?"none":"1"}; display: flex; flex-direction: ${t?"row":"column"}; align-items: ${t?"flex-start":"center"}; position: relative; ${t?"padding-bottom: 1.5rem;":"text-align: center;"} }
      .pt-step:last-child { ${t?"padding-bottom: 0;":""} }

      /* Connector lines */
      .pt-connector {
        position: absolute;
        ${t?`left: calc(${r.indicator} / 2); top: 0; bottom: 0; width: 2px; transform: translateX(-50%);`:`top: calc(${r.indicator} / 2); left: calc(-50% + calc(${r.indicator} / 2)); right: calc(50% + calc(${r.indicator} / 2)); height: 2px;`}
        background: #e2e8f0; z-index: 0;
      }
      .pt-connector--filled { background: #3b82f6; }

      /* Indicator base */
      .pt-indicator {
        position: relative; z-index: 1; flex-shrink: 0;
        display: flex; align-items: center; justify-content: center;
        width: ${r.indicator}; height: ${r.indicator}; border-radius: 9999px;
        border: 2px solid #e2e8f0; background: #fff;
        font-size: ${g==="numbers"?r.font:"inherit"}; font-weight: 700; color: #64748b;
        transition: all 0.3s ease;
      }
      .pt-step--completed .pt-indicator { background: #3b82f6; border-color: #3b82f6; color: #fff; }
      .pt-step--current .pt-indicator { border-color: #3b82f6; color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.2); }

      /* Text */
      .pt-content { display: flex; flex-direction: column; gap: 0.25rem; ${t?"margin-left: 1rem; padding-top: 0.25rem;":"margin-top: 0.5rem;"} }
      .pt-label { font-size: ${r.font}; font-weight: 500; color: #64748b; line-height: 1.2; }
      .pt-step--completed .pt-label, .pt-step--current .pt-label { color: #1a1a2e; font-weight: 700; }
      .pt-desc { font-size: ${r.descFont}; color: #94a3b8; line-height: 1.4; }

      /* Pulse for icons variant current step */
      .pt-pulse { width: 8px; height: 8px; border-radius: 9999px; background: #3b82f6; animation: pt-pulse 2s ease-in-out infinite; }
      .pt-empty { width: 8px; height: 8px; border-radius: 9999px; background: #e2e8f0; }
      @keyframes pt-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.4); } }
    </style>
    <div class="pt-demo">
      <nav aria-label="Progress">
        <ol class="pt-list" role="list">
          ${e.map((o,h)=>s`
            <li class="pt-step pt-step--${o.status}" .ariaCurrent=${o.status==="current"?"step":null}>
              ${h>0?s`<span class="pt-connector ${o.status==="completed"||o.status==="current"?"pt-connector--filled":""}"></span>`:""}
              <span class="pt-indicator">
                ${o.status==="completed"?s`<span .innerHTML=${B(r.checkSize)}></span>`:g==="numbers"?s`${h+1}`:g==="icons"?o.status==="current"?s`<span class="pt-pulse"></span>`:s`<span class="pt-empty"></span>`:""}
              </span>
              <span class="pt-content">
                <span class="pt-label">${o.label}</span>
                ${o.description?s`<span class="pt-desc">${o.description}</span>`:""}
              </span>
            </li>
          `)}
        </ol>
      </nav>
    </div>
  `},i={args:{orientation:"horizontal",variant:"dots",size:"md"},render:e=>a(n,e.orientation,e.variant,e.size)},c={render:()=>a(n,"horizontal","numbers","md")},l={render:()=>a(n,"horizontal","icons","md")},p={render:()=>a(n,"vertical","numbers","md")},d={render:()=>a(n,"horizontal","numbers","lg")},m={render:()=>a(n,"horizontal","dots","sm")},u={render:()=>a(n.map(e=>({...e,status:"completed"})),"horizontal","numbers","md")};var b,k,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'dots',
    size: 'md'
  },
  render: args => renderTracker(checkoutSteps, args.orientation as string, args.variant as string, args.size as string)
}`,...(z=(k=i.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var x,$,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => renderTracker(checkoutSteps, 'horizontal', 'numbers', 'md')
}`,...(S=($=c.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var y,v,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => renderTracker(checkoutSteps, 'horizontal', 'icons', 'md')
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var T,C,V;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => renderTracker(checkoutSteps, 'vertical', 'numbers', 'md')
}`,...(V=(C=p.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var P,F,L;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => renderTracker(checkoutSteps, 'horizontal', 'numbers', 'lg')
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var D,I,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => renderTracker(checkoutSteps, 'horizontal', 'dots', 'sm')
}`,...(M=(I=m.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var A,j,H;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => renderTracker(checkoutSteps.map(s => ({
    ...s,
    status: 'completed' as const
  })), 'horizontal', 'numbers', 'md')
}`,...(H=(j=u.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};const R=["Default","NumbersVariant","IconsVariant","Vertical","LargeSize","SmallSize","AllCompleted"];export{u as AllCompleted,i as Default,l as IconsVariant,d as LargeSize,c as NumbersVariant,m as SmallSize,p as Vertical,R as __namedExportsOrder,O as default};
