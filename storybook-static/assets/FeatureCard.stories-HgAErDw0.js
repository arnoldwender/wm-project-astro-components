import{b as g}from"./lit-element-CdmuTPXr.js";const h={title:"Sections/FeatureCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual feature card for use in feature sections.
- Four variants: default, compact, horizontal, centered
- Renders as link when href is provided
- Supports text/emoji icons or inline SVG
- Optional icon background circle
        `}}},argTypes:{icon:{control:"text",description:"Icon emoji or SVG"},title:{control:"text",description:"Feature title"},description:{control:"text",description:"Feature description"},variant:{control:"select",options:["default","compact","horizontal","centered"],description:"Card variant"},iconBackground:{control:"boolean",description:"Show icon background"}}},o=e=>g`
  <div style="padding: 2rem; max-width: ${e.variant==="horizontal"?"24rem":"16rem"};">
    <div style="${e.variant==="horizontal"?"display: flex; align-items: flex-start; gap: 1rem;":""} ${e.variant==="centered"?"text-align: center;":""}">
      <div style="${e.iconBackground?"width: 3rem; height: 3rem; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; background: rgba(59,130,246,0.1); margin-bottom: 1rem;":"font-size: 2rem; margin-bottom: 0.75rem;"} ${e.variant==="centered"?"margin-left: auto; margin-right: auto;":""} ${e.variant==="horizontal"?"flex-shrink: 0; margin-bottom: 0;":""}">
        <span style="${e.iconBackground?"font-size: 1.25rem;":""}">${e.icon}</span>
      </div>
      <div>
        <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem; font-size: ${e.variant==="compact"?"0.875rem":"1rem"};">${e.title}</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0; line-height: 1.5;">${e.description}</p>
      </div>
    </div>
  </div>
`,r={args:{icon:"⚡",title:"Lightning Fast",description:"Optimized for speed with sub-100ms response times.",variant:"default",iconBackground:!0},render:e=>o(e)},t={args:{icon:"🔒",title:"Enterprise Security",description:"SOC 2 compliant with end-to-end encryption.",variant:"horizontal",iconBackground:!0},render:e=>o(e)},n={args:{icon:"🌍",title:"Global CDN",description:"Content delivered from 50+ edge locations worldwide.",variant:"centered",iconBackground:!0},render:e=>o(e)};var i,a,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized for speed with sub-100ms response times.',
    variant: 'default',
    iconBackground: true
  },
  render: args => renderFeatureCard(args)
}`,...(c=(a=r.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,s,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with end-to-end encryption.',
    variant: 'horizontal',
    iconBackground: true
  },
  render: args => renderFeatureCard(args)
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,p,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: '🌍',
    title: 'Global CDN',
    description: 'Content delivered from 50+ edge locations worldwide.',
    variant: 'centered',
    iconBackground: true
  },
  render: args => renderFeatureCard(args)
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const v=["Default","Horizontal","Centered"];export{n as Centered,r as Default,t as Horizontal,v as __namedExportsOrder,h as default};
