import{b as i}from"./lit-element-CdmuTPXr.js";const p={title:"Sections/ContactSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Contact information and form layouts.
- Five variants: split, centered, card, minimal, map
- Structured contact info (email, phone, address, hours)
- Social media links with icons
- Map embed support
        `}}},argTypes:{variant:{control:"select",options:["split","centered","card","minimal","map"],description:"Layout variant"},title:{control:"text",description:"Section title"}}},m=e=>i`
  <section style="padding: 4rem 2rem; background: ${e.variant==="card"?"#f8fafc":"#fff"};">
    <div style="max-width: 72rem; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 3rem;">
        <span style="font-size: 0.875rem; font-weight: 600; color: #3b82f6; text-transform: uppercase;">Contact</span>
        <h2 style="font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0.5rem 0;">${e.title}</h2>
        <p style="color: #64748b;">We'd love to hear from you. Fill out the form or reach us directly.</p>
      </div>
      <div style="display: grid; grid-template-columns: ${e.variant==="split"?"1fr 1fr":"1fr"}; gap: 3rem; ${e.variant!=="split"?"max-width: 32rem; margin: 0 auto;":""}">
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 2.5rem; height: 2.5rem; background: rgba(59,130,246,0.1); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
              <svg width="20" height="20" fill="none" stroke="#3b82f6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <p style="font-size: 0.875rem; color: #64748b; margin: 0;">Email</p>
              <a href="mailto:info@acmecorp.com" style="color: #1e293b; font-weight: 500; text-decoration: none;">info@acmecorp.com</a>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 2.5rem; height: 2.5rem; background: rgba(59,130,246,0.1); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
              <svg width="20" height="20" fill="none" stroke="#3b82f6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <p style="font-size: 0.875rem; color: #64748b; margin: 0;">Phone</p>
              <a href="tel:+493451234567" style="color: #1e293b; font-weight: 500; text-decoration: none;">+49 345 1234567</a>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 2.5rem; height: 2.5rem; background: rgba(59,130,246,0.1); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
              <svg width="20" height="20" fill="none" stroke="#3b82f6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <p style="font-size: 0.875rem; color: #64748b; margin: 0;">Address</p>
              <p style="color: #1e293b; font-weight: 500; margin: 0;">Marktplatz 1, 06108 Halle (Saale)</p>
            </div>
          </div>
        </div>
        ${e.variant==="split"?i`
          <form style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <input type="text" placeholder="First name" style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem;" />
              <input type="text" placeholder="Last name" style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem;" />
            </div>
            <input type="email" placeholder="Email" style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem;" />
            <textarea placeholder="Your message" rows="4" style="padding: 0.75rem 1rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.875rem; resize: vertical;"></textarea>
            <button type="button" style="padding: 0.875rem 1.5rem; background: #3b82f6; color: #fff; font-weight: 600; border: none; border-radius: 0.5rem; cursor: pointer;">Send Message</button>
          </form>
        `:""}
      </div>
    </div>
  </section>
`,t={args:{variant:"split",title:"Get in Touch"},render:e=>m(e)},r={args:{variant:"centered",title:"Contact Us"},render:e=>m(e)};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'split',
    title: 'Get in Touch'
  },
  render: args => renderContact(args)
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'centered',
    title: 'Contact Us'
  },
  render: args => renderContact(args)
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const f=["Split","Centered"];export{r as Centered,t as Split,f as __namedExportsOrder,p as default};
