import{b as d}from"./lit-element-CdmuTPXr.js";const T={title:"Sections/TopBar",tags:["autodocs"],parameters:{docs:{description:{component:`
Fixed utility navigation bar above the main header.

Features:
- Contact info (phone, email) with proper tel: and mailto: links
- Social media icon links
- Language switcher slot
- Two variants: light and dark
- Dismissible with X button (sessionStorage persistence)
- Sticky positioning option
        `}}},argTypes:{variant:{control:{type:"select"},options:["light","dark"],description:"Visual variant"},phone:{control:"text",description:"Phone number"},email:{control:"text",description:"Email address"},sticky:{control:"boolean",description:"Sticky positioning"}}},i=e=>{const x=e.variant||"light",s=e.phone||"",l=e.email||"",a=x==="dark";return d`
    <style>
      .topbar-demo {
        width: 100%; font-family: system-ui, -apple-system, sans-serif; font-size: 0.75rem;
        background: ${a?"#1a202c":"#f7fafc"}; color: ${a?"#ffffff":"#1a202c"}; border-bottom: 1px solid ${a?"rgba(255,255,255,0.1)":"#e2e8f0"};
      }
      .topbar-demo__inner { max-width: 80rem; margin: 0 auto; padding: 0.25rem 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
      .topbar-demo__contact { display: flex; align-items: center; gap: 1rem; }
      .topbar-demo__link { display: inline-flex; align-items: center; gap: 0.25rem; text-decoration: none; color: inherit; font-weight: 500; }
      .topbar-demo__link:hover { opacity: 0.8; }
      .topbar-demo__actions { display: flex; align-items: center; gap: 0.75rem; }
      .topbar-demo__social { display: flex; gap: 0.5rem; }
      .topbar-demo__social-link { display: inline-flex; align-items: center; justify-content: center; width: 1.75rem; height: 1.75rem; color: ${a?"rgba(255,255,255,0.7)":"#718096"}; border-radius: 0.25rem; text-decoration: none; }
      .topbar-demo__social-link:hover { background: ${a?"rgba(255,255,255,0.1)":"#e2e8f0"}; }
      .topbar-demo__dismiss {
        display: inline-flex; align-items: center; justify-content: center;
        width: 1.75rem; height: 1.75rem; padding: 0; background: none;
        border: none; cursor: pointer; color: inherit; opacity: 0.6; border-radius: 0.25rem;
      }
      .topbar-demo__dismiss:hover { opacity: 1; }
    </style>
    <div class="topbar-demo" role="banner">
      <div class="topbar-demo__inner">
        <div class="topbar-demo__contact">
          ${s?d`<a class="topbar-demo__link" href="tel:${s.replace(/\s/g,"")}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>${s}</span>
          </a>`:""}
          ${l?d`<a class="topbar-demo__link" href="mailto:${l}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>${l}</span>
          </a>`:""}
        </div>
        <div class="topbar-demo__actions">
          <nav class="topbar-demo__social" aria-label="Social media links">
            <a class="topbar-demo__social-link" href="#" aria-label="Facebook">FB</a>
            <a class="topbar-demo__social-link" href="#" aria-label="Instagram">IG</a>
          </nav>
          <button class="topbar-demo__dismiss" type="button" aria-label="Close top bar">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
    </div>
  `},r={args:{variant:"light",phone:"+49 345 1234567",email:"info@wendermedia.de",sticky:!1},render:e=>i(e)},o={args:{variant:"dark",phone:"+49 345 1234567",email:"info@wendermedia.de",sticky:!1},render:e=>i(e)},n={args:{variant:"light",phone:"+49 345 1234567",email:"",sticky:!1},render:e=>i(e)},t={args:{variant:"dark",phone:"",email:"kontakt@example.de",sticky:!0},render:e=>i(e)};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    phone: '+49 345 1234567',
    email: 'info@wendermedia.de',
    sticky: false
  },
  render: args => renderTopBar(args)
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,h,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    phone: '+49 345 1234567',
    email: 'info@wendermedia.de',
    sticky: false
  },
  render: args => renderTopBar(args)
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,k,u;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'light',
    phone: '+49 345 1234567',
    email: '',
    sticky: false
  },
  render: args => renderTopBar(args)
}`,...(u=(k=n.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var y,_,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    phone: '',
    email: 'kontakt@example.de',
    sticky: true
  },
  render: args => renderTopBar(args)
}`,...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const C=["Light","Dark","PhoneOnly","Minimal"];export{o as Dark,r as Light,t as Minimal,n as PhoneOnly,C as __namedExportsOrder,T as default};
