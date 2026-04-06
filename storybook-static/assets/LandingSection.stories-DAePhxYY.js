import{b as n}from"./lit-element-CdmuTPXr.js";const w={title:"Layouts/LandingSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Pre-built section patterns for landing pages with scroll-triggered animations.

**Features:**
- Ten variants: hero, features, benefits, testimonials, pricing, faq, cta, stats, logos, content
- Configurable background (transparent, subtle, muted, gradient, dark, primary)
- Responsive grid columns (1-4)
- Scroll-triggered fade-in animation with reduced-motion support
        `}}},argTypes:{variant:{control:"select",options:["hero","features","benefits","testimonials","pricing","faq","cta","stats","logos","content"],description:"Section variant"},columns:{control:"select",options:[1,2,3,4],description:"Grid columns"},background:{control:"select",options:["transparent","subtle","muted","gradient","dark","primary"],description:"Background style"},padding:{control:"select",options:["sm","md","lg","xl"],description:"Vertical padding"}}},h={transparent:"background: transparent;",subtle:"background: #f8fafc;",muted:"background: #f1f5f9;",gradient:"background: linear-gradient(to bottom, #f8fafc, transparent);",dark:"background: #0f172a; color: white;",primary:"background: #3b82f6; color: white;"},k={sm:"3rem",md:"4rem",lg:"5rem",xl:"7rem"},f=r=>{const b=h[r.background]||"",y=k[r.padding]||"5rem";return n`
    <section style="padding: ${y} 2rem; font-family: system-ui, sans-serif; ${b}">
      <div style="max-width: 1200px; margin: 0 auto;">
        <!-- Header -->
        <header style="text-align: center; margin-bottom: 3rem;">
          <div style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: ${r.background==="dark"||r.background==="primary"?"rgba(255,255,255,0.8)":"#3b82f6"}; margin-bottom: 0.75rem;">
            Our Features
          </div>
          <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0 0 1rem;">Everything you need</h2>
          <p style="font-size: 1.125rem; opacity: 0.8; max-width: 48rem; margin: 0 auto;">Build better products with our comprehensive toolkit.</p>
        </header>

        <!-- Grid Content -->
        <div style="display: grid; grid-template-columns: repeat(${r.columns||3}, 1fr); gap: 2rem;">
          ${[1,2,3].map(o=>n`
            <div style="padding: 1.5rem; background: ${r.background==="dark"?"rgba(255,255,255,0.05)":"white"}; border-radius: 0.75rem; border: 1px solid ${r.background==="dark"?"rgba(255,255,255,0.1)":"#e2e8f0"};">
              <h3 style="font-weight: 600; margin: 0 0 0.5rem;">Feature ${o}</h3>
              <p style="font-size: 0.875rem; opacity: 0.7; margin: 0;">Description of feature ${o} goes here.</p>
            </div>
          `)}
        </div>
      </div>
    </section>
  `},e={args:{variant:"features",columns:3,background:"transparent",padding:"lg"},render:r=>f(r)},t={args:{variant:"features",columns:3,background:"dark",padding:"lg"},render:r=>f(r)},a={args:{variant:"cta",columns:1,background:"primary",padding:"xl"},render:r=>n`
    <section style="padding: 7rem 2rem; background: #3b82f6; color: white; font-family: system-ui, sans-serif;">
      <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0 0 1rem;">Ready to get started?</h2>
        <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Join thousands of teams already using our platform.</p>
        <button style="padding: 0.875rem 2rem; background: white; color: #3b82f6; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Start Free Trial</button>
      </div>
    </section>
  `};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'features',
    columns: 3,
    background: 'transparent',
    padding: 'lg'
  },
  render: args => renderSection(args)
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'features',
    columns: 3,
    background: 'dark',
    padding: 'lg'
  },
  render: args => renderSection(args)
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,l,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'cta',
    columns: 1,
    background: 'primary',
    padding: 'xl'
  },
  render: args => html\`
    <section style="padding: 7rem 2rem; background: #3b82f6; color: white; font-family: system-ui, sans-serif;">
      <div style="max-width: 48rem; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0 0 1rem;">Ready to get started?</h2>
        <p style="font-size: 1.125rem; opacity: 0.9; margin: 0 0 2rem;">Join thousands of teams already using our platform.</p>
        <button style="padding: 0.875rem 2rem; background: white; color: #3b82f6; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Start Free Trial</button>
      </div>
    </section>
  \`
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const x=["Features","DarkBackground","CTASection"];export{a as CTASection,t as DarkBackground,e as Features,x as __namedExportsOrder,w as default};
