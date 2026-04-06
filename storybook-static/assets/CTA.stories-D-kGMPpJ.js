import{b as t}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/CTA",tags:["autodocs"],parameters:{docs:{description:{component:`
Premium Call-to-Action section with psychology-based design patterns.
- Five variants: centered, split, banner, floating, gradient
- Urgency elements, countdown timer, social proof
- Trust logos and testimonial integration
- A/B testing support
        `}}},argTypes:{variant:{control:"select",options:["centered","split","banner","floating","gradient"],description:"Layout variant"},title:{control:"text",description:"CTA headline"},ctaText:{control:"text",description:"Primary button text"},usersCount:{control:"number",description:"User count for social proof"}}},o=e=>t`
  <section style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: ${e.variant==="banner"?"1.5rem 2rem":"4rem 2rem"}; color: #fff;">
    <div style="max-width: 64rem; margin: 0 auto; ${e.variant==="banner"?"display: flex; align-items: center; justify-content: space-between; gap: 1rem;":"text-align: center;"}">
      ${e.variant!=="banner"?t`
        ${e.urgencyText?t`
          <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(239,68,68,0.2); border-radius: 9999px; margin-bottom: 1.5rem;">
            <span style="width: 0.5rem; height: 0.5rem; background: #ef4444; border-radius: 50;"></span>
            <span style="font-size: 0.875rem; font-weight: 500;">${e.urgencyText}</span>
          </div>
        `:""}
        <h2 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 1rem;">${e.title}</h2>
        ${e.description?t`<p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem; max-width: 32rem; margin-left: auto; margin-right: auto;">${e.description}</p>`:""}
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 2rem;">
          <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; background: #fff; color: #1e293b; font-weight: 600; font-size: 1.125rem; border-radius: 0.5rem; text-decoration: none; box-shadow: 0 4px 14px rgba(0,0,0,0.1);">${e.ctaText} &rarr;</a>
          ${e.secondaryText?t`<a href="#" style="display: inline-flex; align-items: center; padding: 1rem 2rem; border: 2px solid #fff; color: #fff; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">${e.secondaryText}</a>`:""}
        </div>
        ${e.usersCount?t`
          <div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; font-size: 0.875rem; opacity: 0.8;">
            <span><strong style="color: #fff;">${Number(e.usersCount).toLocaleString()}+</strong> users</span>
            <span style="color: #fbbf24;">★★★★★</span>
            <span>4.8 (2,500 reviews)</span>
          </div>
        `:""}
      `:t`
        <h3 style="font-size: 1.125rem; font-weight: 600;">${e.title}</h3>
        <a href="#" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1.5rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none; white-space: nowrap;">${e.ctaText} &rarr;</a>
      `}
    </div>
  </section>
`,r={args:{variant:"centered",title:"Start your free trial today",description:"Join 10,000+ teams already using Acme Platform.",ctaText:"Get Started Free",secondaryText:"Book a demo",usersCount:1e4},render:e=>o(e)},n={args:{variant:"banner",title:"Limited Offer: 30% Off All Plans",ctaText:"Claim Discount"},render:e=>o(e)},a={args:{variant:"centered",title:"Ready to transform your workflow?",ctaText:"Claim your discount",urgencyText:"Only 5 spots left this month",usersCount:5e3},render:e=>o(e)};var i,s,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    title: 'Start your free trial today',
    description: 'Join 10,000+ teams already using Acme Platform.',
    ctaText: 'Get Started Free',
    secondaryText: 'Book a demo',
    usersCount: 10000
  },
  render: args => renderCTA(args)
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'banner',
    title: 'Limited Offer: 30% Off All Plans',
    ctaText: 'Claim Discount'
  },
  render: args => renderCTA(args)
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,f,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    title: 'Ready to transform your workflow?',
    ctaText: 'Claim your discount',
    urgencyText: 'Only 5 spots left this month',
    usersCount: 5000
  },
  render: args => renderCTA(args)
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const x=["Centered","Banner","WithUrgency"];export{n as Banner,r as Centered,a as WithUrgency,x as __namedExportsOrder,y as default};
