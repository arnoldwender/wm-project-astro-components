import{b as n}from"./lit-element-CdmuTPXr.js";const v={title:"Layout/Header",tags:["autodocs"],parameters:{docs:{description:{component:`
Fixed-position site header with transparent-to-solid scroll behavior,
responsive desktop/mobile navigation, and optional logo or text branding.

**Features:**
- Fixed top position with smooth background transition on scroll
- Transparent mode: starts see-through, gains backdrop blur after 100px
- Desktop horizontal nav with active-link detection
- Mobile full-screen overlay menu with animated hamburger/close icon
- Keyboard accessible: Escape closes the mobile menu
- Astro View Transitions compatible
        `}}},argTypes:{siteName:{control:"text",description:"Site name displayed when no logo is provided"},transparent:{control:"boolean",description:"Enable transparent-to-solid scroll behavior"},contactEmail:{control:"text",description:"Contact email shown in mobile menu"},contactPhone:{control:"text",description:"Contact phone shown in mobile menu"}}},s=e=>{const f=e.navItems||[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}];return n`
    <header
      style="position: relative; top: 0; left: 0; right: 0; z-index: 50; transition: all 500ms;
             ${e.transparent?"background: transparent;":"background: rgba(0,0,0,0.95); backdrop-filter: blur(24px);"}"
    >
      <nav style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; height: 5rem;">
          <!-- Logo / Site Name -->
          <a href="/" style="text-decoration: none; color: white;">
            <span style="font-size: 1.25rem; font-weight: 700;">${e.siteName||"Site Name"}</span>
          </a>

          <!-- Desktop Navigation -->
          <ul style="display: flex; align-items: center; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            ${f.map(o=>n`
                <li>
                  <a
                    href=${o.href}
                    style="color: white; text-decoration: none; font-size: 0.875rem; font-weight: 500;
                           text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7; transition: opacity 200ms;"
                    ${o.external?'target="_blank" rel="noopener noreferrer"':""}
                  >
                    ${o.label}
                  </a>
                </li>
              `)}
          </ul>

          <!-- Mobile Menu Button (icon only) -->
          <button
            style="display: none; padding: 0.5rem; background: none; border: none; color: white; cursor: pointer;"
            aria-label="Open menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      ${e.contactEmail||e.contactPhone?n`<div style="max-width: 1200px; margin: 0 auto; padding: 0.5rem 1rem; font-size: 0.75rem; color: rgba(255,255,255,0.6);">
            ${e.contactEmail?n`<span>${e.contactEmail}</span>`:""}
            ${e.contactPhone?n`<span style="margin-left: 1rem;">${e.contactPhone}</span>`:""}
          </div>`:""}
    </header>
    <style>
      :host, body { background: #111; color: white; }
    </style>
  `},t={args:{siteName:"Acme Corp",transparent:!0,contactEmail:"",contactPhone:"",navItems:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"}]},render:e=>s(e)},a={args:{siteName:"Acme Corp",transparent:!1,contactEmail:"hello@example.com",contactPhone:"+49 345 12345",navItems:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"}]},render:e=>s(e)},r={args:{siteName:"WenderMedia",transparent:!1,navItems:[{label:"Startseite",href:"/"},{label:"Leistungen",href:"/leistungen"},{label:"Über uns",href:"/ueber-uns"},{label:"Kontakt",href:"/kontakt"}]},render:e=>s(e)};var l,i,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    siteName: 'Acme Corp',
    transparent: true,
    contactEmail: '',
    contactPhone: '',
    navItems: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'About',
      href: '/about'
    }, {
      label: 'Contact',
      href: '/contact'
    }]
  },
  render: args => renderHeader(args)
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    siteName: 'Acme Corp',
    transparent: false,
    contactEmail: 'hello@example.com',
    contactPhone: '+49 345 12345',
    navItems: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Blog',
      href: '/blog'
    }, {
      label: 'Contact',
      href: '/contact'
    }]
  },
  render: args => renderHeader(args)
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,b,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    siteName: 'WenderMedia',
    transparent: false,
    navItems: [{
      label: 'Startseite',
      href: '/'
    }, {
      label: 'Leistungen',
      href: '/leistungen'
    }, {
      label: 'Über uns',
      href: '/ueber-uns'
    }, {
      label: 'Kontakt',
      href: '/kontakt'
    }]
  },
  render: args => renderHeader(args)
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const y=["Default","WithContactInfo","SolidBackground"];export{t as Default,r as SolidBackground,a as WithContactInfo,y as __namedExportsOrder,v as default};
