import{b as s}from"./lit-element-CdmuTPXr.js";const O={title:"UI/Progress",tags:["autodocs"],parameters:{docs:{description:{component:`
Visual indicator for task completion or loading state.

Features:
- Linear and circular variants
- Determinate and indeterminate states
- Six color options (primary, secondary, success, warning, error, info)
- Three sizes (sm, md, lg)
- Optional label and percentage value display
- Animated transitions
- Reduced motion support
        `}}},argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value"},max:{control:"number",description:"Maximum progress value"},variant:{control:{type:"select"},options:["linear","circular"],description:"Linear bar or circular ring"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the progress indicator"},color:{control:{type:"select"},options:["primary","secondary","success","warning","error","info"],description:"Progress bar color"},indeterminate:{control:"boolean",description:"Show indeterminate loading animation"},showValue:{control:"boolean",description:"Show percentage value text"},label:{control:"text",description:"Label text above the progress bar"}}},P={primary:"#3b82f6",secondary:"#8b5cf6",success:"#22c55e",warning:"#f59e0b",error:"#ef4444",info:"#06b6d4"},A={sm:"0.25rem",md:"0.5rem",lg:"0.75rem"},D={sm:{dim:32,stroke:3},md:{dim:48,stroke:4},lg:{dim:64,stroke:5}},g=e=>{const d=e.value||0,m=e.max||100,C=e.variant||"linear",a=e.size||"md",L=e.color||"primary",o=Math.min(Math.max(d/m*100,0),100),f=P[L];if(C==="circular"){const{dim:r,stroke:p}=D[a],u=(r-p)/2,t=2*Math.PI*u,I=t-o/100*t;return s`
      <style>
        .progress-circ-demo { position: relative; display: inline-flex; align-items: center; justify-content: center; font-family: system-ui, sans-serif; }
        .progress-circ-value { position: absolute; font-weight: 500; color: #1e293b; font-size: ${a==="sm"?"0.625rem":a==="lg"?"0.875rem":"0.75rem"}; }
        @keyframes circ-rotate { 100% { transform: rotate(360deg); } }
        .circ-indeterminate { animation: circ-rotate 1.5s linear infinite; }
      </style>
      <div class="progress-circ-demo" role="progressbar" aria-valuenow="${d}" aria-valuemax="${m}" style="width:${r}px;height:${r}px;">
        <svg width="${r}" height="${r}" viewBox="0 0 ${r} ${r}" class="${e.indeterminate?"circ-indeterminate":""}">
          <circle fill="none" stroke="#e2e8f0" stroke-width="${p}" cx="${r/2}" cy="${r/2}" r="${u}" />
          <circle fill="none" stroke="${f}" stroke-width="${p}" stroke-linecap="round"
            cx="${r/2}" cy="${r/2}" r="${u}"
            style="stroke-dasharray:${t}; stroke-dashoffset:${e.indeterminate?t*.75:I}; transition: stroke-dashoffset 0.3s ease-out;"
            transform="rotate(-90 ${r/2} ${r/2})" />
        </svg>
        ${e.showValue&&!e.indeterminate?s`<span class="progress-circ-value">${Math.round(o)}%</span>`:""}
      </div>
    `}return s`
    <style>
      .progress-linear-demo { max-width: 400px; font-family: system-ui, sans-serif; }
      .progress-meta { display: flex; justify-content: space-between; margin-bottom: 0.25rem; font-size: 0.875rem; }
      .progress-label { color: #64748b; }
      .progress-value { color: #94a3b8; font-weight: 500; }
      .progress-track { width: 100%; background: #e2e8f0; border-radius: 9999px; overflow: hidden; height: ${A[a]}; }
      .progress-bar { height: 100%; border-radius: 9999px; transition: width 0.3s ease-out; background: ${f}; }
      @keyframes indeterminate-demo { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
      .progress-bar.indeterminate { width: 50% !important; animation: indeterminate-demo 1.5s ease-in-out infinite; }
    </style>
    <div class="progress-linear-demo" role="progressbar" aria-valuenow="${d}" aria-valuemax="${m}">
      ${e.label||e.showValue?s`
        <div class="progress-meta">
          ${e.label?s`<span class="progress-label">${e.label}</span>`:""}
          ${e.showValue&&!e.indeterminate?s`<span class="progress-value">${Math.round(o)}%</span>`:""}
        </div>
      `:""}
      <div class="progress-track">
        <div class="progress-bar ${e.indeterminate?"indeterminate":""}" style="width:${e.indeterminate?"50":o}%"></div>
      </div>
    </div>
  `},i={args:{value:65,max:100,variant:"linear",size:"md",color:"primary",indeterminate:!1,showValue:!0,label:"Upload progress"},render:e=>g(e)},n={args:{value:75,max:100,variant:"circular",size:"lg",color:"success",indeterminate:!1,showValue:!0,label:""},render:e=>g(e)},l={args:{value:0,max:100,variant:"linear",size:"md",color:"primary",indeterminate:!0,showValue:!1,label:"Loading..."},render:e=>g(e)},c={render:()=>s`
    <style>
      .progress-colors { display: flex; flex-direction: column; gap: 0.75rem; max-width: 400px; font-family: system-ui, sans-serif; }
      .progress-colors .track { width: 100%; height: 0.5rem; background: #e2e8f0; border-radius: 9999px; overflow: hidden; }
      .progress-colors .bar { height: 100%; border-radius: 9999px; width: 70%; }
      .progress-colors .lbl { font-size: 0.75rem; color: #64748b; margin-bottom: 0.125rem; }
    </style>
    <div class="progress-colors">
      ${["primary","secondary","success","warning","error","info"].map(e=>s`
        <div>
          <div class="lbl">${e}</div>
          <div class="track"><div class="bar" style="background:${P[e]}"></div></div>
        </div>
      `)}
    </div>
  `};var v,b,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 65,
    max: 100,
    variant: 'linear',
    size: 'md',
    color: 'primary',
    indeterminate: false,
    showValue: true,
    label: 'Upload progress'
  },
  render: args => renderProgress(args)
}`,...(h=(b=i.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,x,$;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 75,
    max: 100,
    variant: 'circular',
    size: 'lg',
    color: 'success',
    indeterminate: false,
    showValue: true,
    label: ''
  },
  render: args => renderProgress(args)
}`,...($=(x=n.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};var w,k,z;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: 0,
    max: 100,
    variant: 'linear',
    size: 'md',
    color: 'primary',
    indeterminate: true,
    showValue: false,
    label: 'Loading...'
  },
  render: args => renderProgress(args)
}`,...(z=(k=l.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,V,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .progress-colors { display: flex; flex-direction: column; gap: 0.75rem; max-width: 400px; font-family: system-ui, sans-serif; }
      .progress-colors .track { width: 100%; height: 0.5rem; background: #e2e8f0; border-radius: 9999px; overflow: hidden; }
      .progress-colors .bar { height: 100%; border-radius: 9999px; width: 70%; }
      .progress-colors .lbl { font-size: 0.75rem; color: #64748b; margin-bottom: 0.125rem; }
    </style>
    <div class="progress-colors">
      \${['primary', 'secondary', 'success', 'warning', 'error', 'info'].map(c => html\`
        <div>
          <div class="lbl">\${c}</div>
          <div class="track"><div class="bar" style="background:\${colorMap[c]}"></div></div>
        </div>
      \`)}
    </div>
  \`
}`,...(M=(V=c.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};const T=["Default","Circular","Indeterminate","AllColors"];export{c as AllColors,n as Circular,i as Default,l as Indeterminate,T as __namedExportsOrder,O as default};
