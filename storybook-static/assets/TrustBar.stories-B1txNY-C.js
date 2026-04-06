import{b as m}from"./lit-element-CdmuTPXr.js";const z={title:"Sections/TrustBar",tags:["autodocs"],parameters:{docs:{description:{component:`
Horizontal social-proof bar displaying trust signals.

Features:
- Trust items with icon, label, and value
- Three variants: light, dark, gradient
- Compact mode for tighter layouts
- Responsive: horizontal on desktop, 2-column grid on mobile
        `}}},argTypes:{variant:{control:{type:"select"},options:["light","dark","gradient"],description:"Visual variant"},compact:{control:"boolean",description:"Compact spacing mode"}}},s=[{icon:"🏢",label:"Seit",value:"2007"},{icon:"📊",label:"Projekte",value:"500+"},{icon:"📍",label:"Standort",value:"Halle (Saale)"},{icon:"♿",label:"Zertifiziert",value:"WCAG AA"},{icon:"🔒",label:"DSGVO",value:"konform"}],o=e=>{const i=e.variant||"light",l=e.compact,x=e.items||s,T={light:"background: #f7fafc; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;",dark:"background: #1a202c;",gradient:"background: linear-gradient(135deg, #3b82f6, #8b5cf6);"},$=i==="light"?"#718096":"rgba(255,255,255,0.75)",w=i==="light"?"#1a202c":"#ffffff";return m`
    <style>
      .tb-demo { width: 100%; font-family: system-ui, -apple-system, sans-serif; ${T[i]} }
      .tb-demo__inner { max-width: 80rem; margin: 0 auto; padding: ${l?"0.5rem":"1rem"} 1.5rem; }
      .tb-demo__list { display: flex; align-items: center; justify-content: center; gap: 2rem; list-style: none; margin: 0; padding: 0; }
      .tb-demo__item { display: flex; align-items: center; gap: 0.5rem; white-space: nowrap; }
      .tb-demo__icon { font-size: ${l?"1.25rem":"1.5rem"}; line-height: 1; }
      .tb-demo__label { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; color: ${$}; }
      .tb-demo__value { font-size: ${l?"0.875rem":"1rem"}; font-weight: 700; color: ${w}; }
      .tb-demo__text { display: flex; flex-direction: column; }
    </style>
    <section class="tb-demo" aria-label="Trust signals">
      <div class="tb-demo__inner">
        <ul class="tb-demo__list" role="list">
          ${x.map(c=>m`
              <li class="tb-demo__item">
                <span class="tb-demo__icon" aria-hidden="true">${c.icon}</span>
                <span class="tb-demo__text">
                  <span class="tb-demo__label">${c.label}</span>
                  <span class="tb-demo__value">${c.value}</span>
                </span>
              </li>
            `)}
        </ul>
      </div>
    </section>
  `},a={args:{variant:"light",compact:!1,items:s},render:e=>o(e)},t={args:{variant:"dark",compact:!1,items:s},render:e=>o(e)},r={args:{variant:"gradient",compact:!1,items:s},render:e=>o(e)},n={args:{variant:"light",compact:!0,items:[{icon:"🏢",label:"Seit",value:"2007"},{icon:"📊",label:"Projekte",value:"500+"},{icon:"🔒",label:"DSGVO",value:"konform"}]},render:e=>o(e)};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    compact: false,
    items: defaultItems
  },
  render: args => renderTrustBar(args)
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,b,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    compact: false,
    items: defaultItems
  },
  render: args => renderTrustBar(args)
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,_,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'gradient',
    compact: false,
    items: defaultItems
  },
  render: args => renderTrustBar(args)
}`,...(h=(_=r.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var k,y,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    compact: true,
    items: [{
      icon: '🏢',
      label: 'Seit',
      value: '2007'
    }, {
      icon: '📊',
      label: 'Projekte',
      value: '500+'
    }, {
      icon: '🔒',
      label: 'DSGVO',
      value: 'konform'
    }]
  },
  render: args => renderTrustBar(args)
}`,...(S=(y=n.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const B=["Light","Dark","Gradient","Compact"];export{n as Compact,t as Dark,r as Gradient,a as Light,B as __namedExportsOrder,z as default};
