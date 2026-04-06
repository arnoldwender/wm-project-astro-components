import{b as t}from"./lit-element-CdmuTPXr.js";const f={title:"Sections/JobCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Individual job listing card.
- Four variants: default, card, compact, detailed
- Employment type labels with German localization
- Urgent and new badges for priority listings
- Salary range display and skill tags
        `}}},argTypes:{title:{control:"text",description:"Job title"},department:{control:"text",description:"Department"},location:{control:"text",description:"Office location"},type:{control:"select",options:["full-time","part-time","contract","remote","hybrid"],description:"Employment type"},variant:{control:"select",options:["default","card","compact","detailed"],description:"Card variant"},urgent:{control:"boolean",description:"Urgent hiring badge"}}},a={"full-time":"Vollzeit","part-time":"Teilzeit",contract:"Vertrag",remote:"Remote",hybrid:"Hybrid"},m=e=>t`
  <div style="padding: 2rem; max-width: ${e.variant==="card"?"24rem":"40rem"};">
    ${e.variant==="card"?t`
      <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 1.5rem; transition: box-shadow 0.2s;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
          ${e.urgent?t`<span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: #fef2f2; color: #dc2626; border-radius: 9999px;">Urgent</span>`:""}
          ${e.isNew?t`<span style="padding: 0.125rem 0.5rem; font-size: 0.625rem; font-weight: 600; background: #eff6ff; color: #2563eb; border-radius: 9999px;">New</span>`:""}
        </div>
        <h3 style="font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0 0 0.5rem;">${e.title}</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-size: 0.875rem; color: #64748b; margin-bottom: 1rem;">
          <span style="display: flex; align-items: center; gap: 0.25rem;">📍 ${e.location}</span>
          <span style="display: flex; align-items: center; gap: 0.25rem;">🏢 ${e.department}</span>
          <span style="display: flex; align-items: center; gap: 0.25rem;">⏰ ${a[e.type]||e.type}</span>
        </div>
        ${e.salary?t`<p style="font-size: 0.875rem; font-weight: 600; color: #1e293b; margin: 0 0 1rem;">${e.salary}</p>`:""}
        ${e.tags?t`
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            ${e.tags.map(c=>t`<span style="padding: 0.125rem 0.5rem; font-size: 0.75rem; background: #f1f5f9; color: #64748b; border-radius: 9999px;">${c}</span>`)}
          </div>
        `:""}
        <a href="#" style="display: block; text-align: center; padding: 0.75rem; background: #3b82f6; color: #fff; font-weight: 600; font-size: 0.875rem; border-radius: 0.5rem; text-decoration: none;">Apply Now</a>
      </div>
    `:t`
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 0; border-bottom: 1px solid #e2e8f0;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
            <h3 style="font-size: 1rem; font-weight: 600; color: #1e293b; margin: 0;">${e.title}</h3>
            ${e.urgent?t`<span style="padding: 0.125rem 0.375rem; font-size: 0.625rem; font-weight: 600; background: #fef2f2; color: #dc2626; border-radius: 9999px;">Urgent</span>`:""}
          </div>
          <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: #64748b;">
            <span>${e.department}</span><span>·</span><span>${e.location}</span><span>·</span><span>${a[e.type]||e.type}</span>
          </div>
        </div>
        <a href="#" style="padding: 0.5rem 1rem; background: #3b82f6; color: #fff; font-size: 0.875rem; font-weight: 500; border-radius: 0.5rem; text-decoration: none; white-space: nowrap;">Apply</a>
      </div>
    `}
  </div>
`,r={args:{title:"Senior Frontend Developer",department:"Engineering",location:"Berlin",type:"full-time",variant:"default",urgent:!1},render:e=>m(e)},n={args:{title:"UX Designer",department:"Design",location:"Remote",type:"contract",variant:"card",urgent:!0,isNew:!0,salary:"65,000 - 85,000 EUR",tags:["Figma","User Research","Prototyping"]},render:e=>m(e)};var i,o,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Berlin',
    type: 'full-time',
    variant: 'default',
    urgent: false
  },
  render: args => renderJobCard(args)
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'contract',
    variant: 'card',
    urgent: true,
    isNew: true,
    salary: '65,000 - 85,000 EUR',
    tags: ['Figma', 'User Research', 'Prototyping']
  },
  render: args => renderJobCard(args)
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const y=["Default","CardWithTags"];export{n as CardWithTags,r as Default,y as __namedExportsOrder,f as default};
