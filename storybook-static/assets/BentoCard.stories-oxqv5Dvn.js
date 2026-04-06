import{b as n}from"./lit-element-CdmuTPXr.js";const w={title:"Layouts/BentoCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual card for the Bento Grid layout with multiple size and style options.

**Features:**
- Four size options (1x1, 2x1, 1x2, 2x2)
- Five visual variants: solid, gradient, glass, outline, image
- Named slots for icon, title, description
- Optional link mode with hover scale
- Decorative blur effects and hover gradient overlays
        `}}},argTypes:{size:{control:"select",options:["1x1","2x1","1x2","2x2"],description:"Card grid size"},variant:{control:"select",options:["solid","gradient","glass","outline","image"],description:"Visual variant"},color:{control:"select",options:["default","primary","secondary","accent"],description:"Color scheme for gradient variant"},href:{control:"text",description:"Optional link URL"}}},i=r=>{const s={solid:"background: #1f2937; border: 1px solid #374151;",gradient:"background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(59,130,246,0.05)); border: 1px solid #374151;",glass:"background: rgba(255,255,255,0.1); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.2);",outline:"background: transparent; border: 2px solid #374151;",image:`background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23334155' width='400' height='400'/%3E%3C/svg%3E") center/cover; border: 1px solid #374151;`};return n`
    <div style="padding: 2rem; background: #0f172a; min-height: 300px; display: flex; align-items: center; justify-content: center;">
      <div
        style="position: relative; overflow: hidden; border-radius: 1rem; padding: 1.5rem; width: 300px; min-height: 200px;
               transition: all 300ms; ${s[r.variant]||s.solid}
               ${r.href?"cursor: pointer;":""}"
      >
        ${r.variant==="image"?n`<div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent);"></div>`:""}
        <div style="position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%; ${r.variant==="image"?"color: white; justify-content: flex-end;":"color: white;"}">
          <!-- Icon -->
          <div style="width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;
                       background: rgba(59,130,246,0.1); color: #3b82f6;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 style="font-weight: 600; font-size: ${r.size==="2x2"?"1.5rem":"1.125rem"}; margin: 0 0 0.5rem;">Feature Title</h3>
          <p style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin: 0;">Description of this bento card feature goes here.</p>
          ${r.href?n`<div style="margin-top: 1rem; font-size: 0.875rem; font-weight: 500; color: #3b82f6;">Mehr erfahren &rarr;</div>`:""}
        </div>
      </div>
    </div>
  `},e={args:{size:"1x1",variant:"solid",color:"default"},render:r=>i(r)},t={args:{size:"2x2",variant:"gradient",color:"primary"},render:r=>i(r)},o={args:{size:"2x1",variant:"glass",color:"default"},render:r=>i(r)},a={args:{size:"1x1",variant:"solid",color:"default",href:"/features"},render:r=>i(r)};var d,l,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: '1x1',
    variant: 'solid',
    color: 'default'
  },
  render: args => renderBentoCard(args)
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,p,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: '2x2',
    variant: 'gradient',
    color: 'primary'
  },
  render: args => renderBentoCard(args)
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: '2x1',
    variant: 'glass',
    color: 'default'
  },
  render: args => renderBentoCard(args)
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,x,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: '1x1',
    variant: 'solid',
    color: 'default',
    href: '/features'
  },
  render: args => renderBentoCard(args)
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const z=["Solid","Gradient","Glass","WithLink"];export{o as Glass,t as Gradient,e as Solid,a as WithLink,z as __namedExportsOrder,w as default};
