import{b as d}from"./lit-element-CdmuTPXr.js";const c={title:"Forms/ContactForm",tags:["autodocs"],parameters:{docs:{description:{component:`
A ready-to-use GDPR-compliant contact form with built-in validation and spam protection. Features include:
- Honeypot field for bot detection
- Real-time field validation on blur
- GDPR/DSGVO consent checkbox linked to privacy policy
- Accessible: aria-describedby, aria-invalid, role="alert" messages
- All labels and messages customizable via props
- Astro view transition support
        `}}},argTypes:{nameLabel:{control:"text",description:"Name field label"},emailLabel:{control:"text",description:"Email field label"},messageLabel:{control:"text",description:"Message field label"},submitLabel:{control:"text",description:"Submit button text"},consentText:{control:"text",description:"Consent checkbox text"}}},m=e=>d`
  <form style="max-width: 500px; margin: 2rem auto; font-family: system-ui, sans-serif; display: flex; flex-direction: column; gap: 1.5rem;" onsubmit="event.preventDefault();">
    <div>
      <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
        ${e.nameLabel} *
      </label>
      <input type="text" required
        style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; box-sizing: border-box;" />
    </div>

    <div>
      <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
        ${e.emailLabel} *
      </label>
      <input type="email" required
        style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; box-sizing: border-box;" />
    </div>

    <div>
      <label style="display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem;">
        ${e.messageLabel} *
      </label>
      <textarea rows="4" required
        style="width: 100%; padding: 0.5rem 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 1rem; resize: vertical; box-sizing: border-box;"></textarea>
    </div>

    <div>
      <label style="display: flex; align-items: flex-start; gap: 0.5rem;">
        <input type="checkbox" required style="margin-top: 0.25rem; width: 1rem; height: 1rem;" />
        <span style="font-size: 0.875rem;">
          ${e.consentText}
          <a href="/privacy-policy" style="color: #3b82f6; text-decoration: underline;">Privacy Policy</a>
        </span>
      </label>
    </div>

    <input type="text" name="honeypot" style="display: none;" tabindex="-1" autocomplete="off" />

    <button type="submit"
      style="width: 100%; padding: 0.625rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-size: 1rem; cursor: pointer;">
      ${e.submitLabel}
    </button>

    <div style="display: none;" role="status" aria-live="polite"></div>
  </form>
`,t={args:{nameLabel:"Name",emailLabel:"Email",messageLabel:"Message",submitLabel:"Send Message",consentText:"I consent to the processing of my personal data for responding to my inquiry."},render:e=>m(e)},r={args:{nameLabel:"Ihr Name",emailLabel:"E-Mail-Adresse",messageLabel:"Ihre Nachricht",submitLabel:"Nachricht senden",consentText:"Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu."},render:e=>m(e)};var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitLabel: 'Send Message',
    consentText: 'I consent to the processing of my personal data for responding to my inquiry.'
  },
  render: args => renderContactForm(args)
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var o,s,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    nameLabel: 'Ihr Name',
    emailLabel: 'E-Mail-Adresse',
    messageLabel: 'Ihre Nachricht',
    submitLabel: 'Nachricht senden',
    consentText: 'Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.'
  },
  render: args => renderContactForm(args)
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const p=["Default","German"];export{t as Default,r as German,p as __namedExportsOrder,c as default};
