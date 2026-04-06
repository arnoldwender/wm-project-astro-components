import{b as r}from"./lit-element-CdmuTPXr.js";const f={title:"Sections/LocationCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual location, office, or store card.
- Five variants: default, card, compact, horizontal, detailed
- Opening hours table display
- Map link, phone and email contact
- Featured badge and location tags
        `}}},argTypes:{name:{control:"text",description:"Location name"},address:{control:"text",description:"Street address"},variant:{control:"select",options:["default","card","compact","horizontal","detailed"],description:"Card variant"},featured:{control:"boolean",description:"Featured badge"}}},c=e=>r`
  <div style="padding: 2rem; max-width: 24rem;">
    <div style="background: #fff; border: ${e.featured?"2px solid #3b82f6":"1px solid #e2e8f0"}; border-radius: 0.75rem; overflow: hidden; ${e.featured?"position: relative;":""}">
      ${e.featured?r`<div style="position: absolute; top: 1rem; right: 1rem; padding: 0.125rem 0.5rem; background: #3b82f6; color: #fff; font-size: 0.625rem; font-weight: 600; border-radius: 9999px; z-index: 1;">HQ</div>`:""}
      <div style="aspect-ratio: 16/9; background: linear-gradient(135deg, #e2e8f0, #cbd5e1);"></div>
      <div style="padding: 1.5rem;">
        <h3 style="font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${e.name}</h3>
        <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">${e.address}</p>
        ${e.phone?r`
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #64748b; margin-bottom: 0.5rem;">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            <a href="tel:${e.phone}" style="color: #64748b; text-decoration: none;">${e.phone}</a>
          </div>
        `:""}
        ${e.email?r`
          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #64748b; margin-bottom: 1rem;">
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <a href="mailto:${e.email}" style="color: #64748b; text-decoration: none;">${e.email}</a>
          </div>
        `:""}
        ${e.tags?r`
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
            ${e.tags.map(m=>r`<span style="padding: 0.125rem 0.5rem; font-size: 0.75rem; background: #f1f5f9; color: #64748b; border-radius: 9999px;">${m}</span>`)}
          </div>
        `:""}
        <a href="#" style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #3b82f6; font-weight: 500; text-decoration: none;">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
          Get directions
        </a>
      </div>
    </div>
  </div>
`,a={args:{name:"Berlin Headquarters",address:"Friedrichstrasse 123, 10117 Berlin",variant:"card",featured:!0,phone:"+49 30 12345678",email:"berlin@acmecorp.com",tags:["HQ","Sales"]},render:e=>c(e)},t={args:{name:"Halle Office",address:"Marktplatz 1, 06108 Halle (Saale)",variant:"card",featured:!1,phone:"+49 345 9876543"},render:e=>c(e)};var o,n,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    name: 'Berlin Headquarters',
    address: 'Friedrichstrasse 123, 10117 Berlin',
    variant: 'card',
    featured: true,
    phone: '+49 30 12345678',
    email: 'berlin@acmecorp.com',
    tags: ['HQ', 'Sales']
  },
  render: args => renderLocationCard(args)
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,s,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'Halle Office',
    address: 'Marktplatz 1, 06108 Halle (Saale)',
    variant: 'card',
    featured: false,
    phone: '+49 345 9876543'
  },
  render: args => renderLocationCard(args)
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const u=["Default","Simple"];export{a as Default,t as Simple,u as __namedExportsOrder,f as default};
