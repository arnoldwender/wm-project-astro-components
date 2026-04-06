import{b as r}from"./lit-element-CdmuTPXr.js";const u={title:"Sections/CTASection",tags:["autodocs"],parameters:{docs:{description:{component:`
Slot-based CTA section for maximum flexibility.
- Six variants: centered, split, banner, card, gradient, image
- Four backgrounds: primary, dark, gradient, transparent
- Named slots: eyebrow, title, description, cta, extra
        `}}},argTypes:{variant:{control:"select",options:["centered","split","banner","card","gradient","image"],description:"Layout variant"},background:{control:"select",options:["primary","dark","gradient","transparent"],description:"Background style"}}},o=e=>r`
  <section style="padding: ${e.variant==="banner"?"1.5rem 2rem":"4rem 2rem"}; background: ${e.background==="primary"?"#3b82f6":e.background==="dark"?"#1e293b":e.background==="gradient"?"linear-gradient(135deg, #3b82f6, #8b5cf6, #3b82f6)":"#fff"}; color: ${e.background==="transparent"?"#1e293b":"#fff"}; ${e.variant==="card"?"background: transparent; padding: 4rem 2rem;":""}">
    <div style="max-width: 72rem; margin: 0 auto; ${e.variant==="card",""}">
      ${e.variant==="card"?r`
        <div style="background: #3b82f6; color: #fff; border-radius: 1rem; padding: 3rem; text-align: center; max-width: 48rem; margin: 0 auto;">
          <h2 style="font-size: 2rem; font-weight: 700; margin: 0 0 1rem;">Upgrade Your Workflow</h2>
          <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Go Pro and unlock all features today.</p>
          <a href="#" style="display: inline-block; padding: 0.875rem 2rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Upgrade Now</a>
        </div>
      `:e.variant==="split"?r`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
          <div>
            <span style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8; display: block; margin-bottom: 1rem;">Newsletter</span>
            <h2 style="font-size: 2rem; font-weight: 700; margin: 0 0 0.5rem; color: #1e293b;">Stay in the Loop</h2>
            <p style="color: #64748b; font-size: 1.125rem;">Get weekly tips on design and development.</p>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <input type="email" placeholder="you@example.com" style="flex: 1; padding: 0.875rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem;" />
            <button style="padding: 0.875rem 1.5rem; background: #3b82f6; color: #fff; font-weight: 600; border: none; border-radius: 0.5rem; cursor: pointer;">Subscribe</button>
          </div>
        </div>
      `:r`
        <div style="text-align: center; max-width: 48rem; margin: 0 auto;">
          <h2 style="font-size: 2.5rem; font-weight: 700; margin: 0 0 1rem;">Ready to Get Started?</h2>
          <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Join 10,000+ teams already using Acme Platform.</p>
          <div style="display: flex; justify-content: center; gap: 1rem;">
            <a href="#" style="padding: 0.875rem 2rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Start Free Trial</a>
            <a href="#" style="padding: 0.875rem 2rem; border: 2px solid ${e.background==="transparent"?"#1e293b":"#fff"}; color: ${e.background==="transparent"?"#1e293b":"#fff"}; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">Book a Demo</a>
          </div>
        </div>
      `}
    </div>
  </section>
`,a={args:{variant:"centered",background:"primary"},render:e=>o(e)},t={args:{variant:"card",background:"transparent"},render:e=>o(e)},n={args:{variant:"split",background:"transparent"},render:e=>o(e)};var i,d,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    background: 'primary'
  },
  render: args => renderCTASection(args)
}`,...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    background: 'transparent'
  },
  render: args => renderCTASection(args)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,g,f;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'split',
    background: 'transparent'
  },
  render: args => renderCTASection(args)
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const y=["Centered","Card","Split"];export{t as Card,a as Centered,n as Split,y as __namedExportsOrder,u as default};
