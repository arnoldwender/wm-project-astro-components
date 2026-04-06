import{b as t}from"./lit-element-CdmuTPXr.js";const x={title:"Sections/IntegrationCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual integration, partner, or tool card.
- Four variants: default, compact, detailed, minimal
- Status badges: available, coming-soon, beta, new
- Featured highlight mode with accent styling
        `}}},argTypes:{name:{control:"text",description:"Integration name"},description:{control:"text",description:"Integration description"},variant:{control:"select",options:["default","compact","detailed","minimal"],description:"Card variant"},status:{control:"select",options:["available","coming-soon","beta","new"],description:"Integration status"},featured:{control:"boolean",description:"Featured highlight"}}},o={available:{bg:"#dcfce7",text:"#166534",label:"Available"},"coming-soon":{bg:"#fef3c7",text:"#92400e",label:"Coming Soon"},beta:{bg:"#dbeafe",text:"#1e40af",label:"Beta"},new:{bg:"#fae8ff",text:"#86198f",label:"New"}},s=e=>{var i,d,c;return t`
  <div style="padding: 2rem; max-width: 20rem;">
    <div style="background: #fff; border: ${e.featured?"2px solid #3b82f6":"1px solid #e2e8f0"}; border-radius: 0.75rem; padding: 1.5rem; transition: box-shadow 0.2s;">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1rem;">
        <div style="width: 3rem; height: 3rem; background: #f1f5f9; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
          ${e.name==="Slack"?"💬":e.name==="GitHub"?"🐙":"🔗"}
        </div>
        ${e.status?t`
          <span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: ${(i=o[e.status])==null?void 0:i.bg}; color: ${(d=o[e.status])==null?void 0:d.text}; border-radius: 9999px;">
            ${(c=o[e.status])==null?void 0:c.label}
          </span>
        `:""}
      </div>
      <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.25rem;">${e.name}</h3>
      ${e.category?t`<span style="font-size: 0.75rem; color: #94a3b8;">${e.category}</span>`:""}
      ${e.description?t`<p style="font-size: 0.875rem; color: #64748b; margin: 0.5rem 0 0; line-height: 1.5;">${e.description}</p>`:""}
    </div>
  </div>
`},a={args:{name:"Slack",description:"Send real-time notifications to your Slack channels.",variant:"default",status:"available",category:"Communication",featured:!1},render:e=>s(e)},n={args:{name:"Acme Analytics",description:"Connect your analytics dashboard for deeper insights.",variant:"detailed",status:"beta",category:"Analytics",featured:!0},render:e=>s(e)},r={args:{name:"GitHub",description:"Sync issues and pull requests automatically.",variant:"default",status:"coming-soon",category:"Developer Tools",featured:!1},render:e=>s(e)};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'Slack',
    description: 'Send real-time notifications to your Slack channels.',
    variant: 'default',
    status: 'available',
    category: 'Communication',
    featured: false
  },
  render: args => renderIntegrationCard(args)
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'Acme Analytics',
    description: 'Connect your analytics dashboard for deeper insights.',
    variant: 'detailed',
    status: 'beta',
    category: 'Analytics',
    featured: true
  },
  render: args => renderIntegrationCard(args)
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,y,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'GitHub',
    description: 'Sync issues and pull requests automatically.',
    variant: 'default',
    status: 'coming-soon',
    category: 'Developer Tools',
    featured: false
  },
  render: args => renderIntegrationCard(args)
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const S=["Default","BetaFeatured","ComingSoon"];export{n as BetaFeatured,r as ComingSoon,a as Default,S as __namedExportsOrder,x as default};
