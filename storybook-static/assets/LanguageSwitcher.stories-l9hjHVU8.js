import{b as n}from"./lit-element-CdmuTPXr.js";const f={title:"Accessibility/LanguageSwitcher",tags:["autodocs"],parameters:{docs:{description:{component:`
Accessible i18n language selector with native language labels and screen reader optimization.

**Features:**
- Multiple display modes: dropdown, inline, flags, native select
- Native language names with per-option lang attributes
- RTL language support
- URL-based or localStorage persistence
- Keyboard accessible with visible focus indicators
        `}}},argTypes:{mode:{control:"select",options:["dropdown","inline","flags"],description:"Display mode"},currentLanguage:{control:"text",description:"Current active language code"}}},p=r=>{var i;const t=[{code:"de",native:"Deutsch"},{code:"en",native:"English"},{code:"es",native:"Español"}];return r.mode==="inline"?n`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <nav style="display: flex; gap: 0.25rem;" aria-label="Language">
          ${t.map(e=>n`
            <a href="#" lang=${e.code} style="padding: 0.5rem 0.75rem; font-size: 0.875rem; text-decoration: none; border-radius: 0.375rem;
               ${e.code===r.currentLanguage?"background: #3b82f6; color: white; font-weight: 600;":"color: #64748b;"}">${e.native}</a>
          `)}
        </nav>
      </div>
    `:n`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="position: relative; display: inline-block;">
        <button style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; background: white; cursor: pointer; font-size: 0.875rem;">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"/><path stroke-width="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
          ${((i=t.find(e=>e.code===r.currentLanguage))==null?void 0:i.native)||"Deutsch"}
          <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div style="position: absolute; top: 100%; left: 0; margin-top: 0.25rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.375rem; box-shadow: 0 10px 15px rgba(0,0,0,0.1); overflow: hidden; min-width: 10rem;">
          ${t.map(e=>n`
            <a href="#" lang=${e.code} style="display: block; padding: 0.5rem 0.75rem; font-size: 0.875rem; text-decoration: none;
               ${e.code===r.currentLanguage?"background: #eff6ff; color: #3b82f6; font-weight: 500;":"color: #374151;"}">${e.native}</a>
          `)}
        </div>
      </div>
    </div>
  `},o={args:{mode:"dropdown",currentLanguage:"de"},render:r=>p(r)},a={args:{mode:"inline",currentLanguage:"en"},render:r=>p(r)};var s,d,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mode: 'dropdown',
    currentLanguage: 'de'
  },
  render: args => renderLanguageSwitcher(args)
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,g,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mode: 'inline',
    currentLanguage: 'en'
  },
  render: args => renderLanguageSwitcher(args)
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const h=["Dropdown","Inline"];export{o as Dropdown,a as Inline,h as __namedExportsOrder,f as default};
