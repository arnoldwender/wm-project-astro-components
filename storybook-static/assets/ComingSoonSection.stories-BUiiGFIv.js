import{b as t}from"./lit-element-CdmuTPXr.js";const u={title:"Sections/ComingSoonSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Coming soon / launching soon page section.
- Six variants: default, minimal, split, fullscreen, animated, card
- Live countdown timer
- Newsletter email signup form
- Social media links
        `}}},argTypes:{variant:{control:"select",options:["default","minimal","split","fullscreen","animated","card"],description:"Layout variant"},title:{control:"text",description:"Main title"},showCountdown:{control:"boolean",description:"Show countdown timer"},showNewsletter:{control:"boolean",description:"Show newsletter signup"}}},c=e=>t`
  <section style="min-height: 500px; display: flex; align-items: center; justify-content: center; background: ${e.variant==="card"?"linear-gradient(135deg, #f8fafc, #e2e8f0)":"#fff"}; padding: 2rem;">
    <div style="${e.variant==="card"?"background: #fff; border-radius: 1.5rem; padding: 3rem; text-align: center; max-width: 28rem; box-shadow: 0 10px 40px rgba(0,0,0,0.08);":"text-align: center; max-width: 40rem;"}">
      <span style="display: inline-block; font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6; margin-bottom: 1rem;">Acme Corp</span>
      <h1 style="font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; color: #1e293b; margin: 0 0 1rem; line-height: 1.1;">${e.title}</h1>
      <p style="font-size: 1.125rem; color: #64748b; margin: 0 0 2rem; line-height: 1.6;">We're working hard to bring you something amazing. Stay tuned!</p>

      ${e.showCountdown?t`
        <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 2.5rem;">
          ${["42","08","35","12"].map((p,o)=>t`
            ${o>0?t`<span style="font-size: 2rem; font-weight: 300; color: #94a3b8; align-self: flex-start; margin-top: 0.25rem;">:</span>`:""}
            <div style="text-align: center; min-width: 4rem;">
              <span style="display: block; font-size: clamp(1.5rem, 4vw, 2.5rem); font-weight: 700; color: #1e293b; line-height: 1;">${p}</span>
              <span style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #94a3b8; margin-top: 0.5rem; display: block;">${["Days","Hours","Minutes","Seconds"][o]}</span>
            </div>
          `)}
        </div>
      `:""}

      ${e.showNewsletter?t`
        <div style="margin-bottom: 2rem;">
          <p style="font-size: 0.875rem; color: #64748b; margin: 0 0 1rem;">Get notified when we launch</p>
          <div style="display: flex; gap: 0.5rem; max-width: 28rem; margin: 0 auto;">
            <input type="email" placeholder="Enter your email" style="flex: 1; padding: 0.875rem 1rem; font-size: 0.875rem; border: 1px solid #e2e8f0; border-radius: 0.5rem;" />
            <button style="padding: 0.875rem 1.5rem; font-size: 0.875rem; font-weight: 600; background: #3b82f6; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer; white-space: nowrap;">Notify Me</button>
          </div>
        </div>
      `:""}
    </div>
  </section>
`,r={args:{variant:"default",title:"Something Amazing is Coming",showCountdown:!0,showNewsletter:!0},render:e=>c(e)},n={args:{variant:"card",title:"Coming Soon",showCountdown:!0,showNewsletter:!0},render:e=>c(e)};var i,a,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    title: 'Something Amazing is Coming',
    showCountdown: true,
    showNewsletter: true
  },
  render: args => renderComingSoon(args)
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var l,m,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    title: 'Coming Soon',
    showCountdown: true,
    showNewsletter: true
  },
  render: args => renderComingSoon(args)
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const f=["Default","Card"];export{n as Card,r as Default,f as __namedExportsOrder,u as default};
