import{b as o}from"./lit-element-CdmuTPXr.js";const h={title:"Navigation/MobileNav",tags:["autodocs"],parameters:{docs:{description:{component:`
Full-screen mobile navigation overlay with smooth animations and nested submenus.

**Features:**
- Slide-in panel from right with backdrop overlay
- Nested accordion submenus for grouped navigation items
- Staggered entry animations per menu item
- Escape key and backdrop click to close
- Optional social links and contact info sections
        `}}},argTypes:{contactEmail:{control:"text",description:"Contact email shown at bottom"},contactPhone:{control:"text",description:"Contact phone shown at bottom"}}},p=e=>o`
    <div style="position: relative; width: 375px; height: 667px; margin: 2rem auto; background: #000; border-radius: 2rem; overflow: hidden; box-shadow: 0 25px 50px rgba(0,0,0,0.2);">
      <!-- Backdrop -->
      <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5);"></div>

      <!-- Panel -->
      <div style="position: absolute; top: 0; right: 0; bottom: 0; width: 85%; background: #111; color: white; padding: 1.5rem;">
        <!-- Close Button -->
        <div style="display: flex; justify-content: flex-end; margin-bottom: 2rem;">
          <button style="padding: 0.5rem; background: none; border: none; color: white; cursor: pointer;">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Nav Items -->
        <nav>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Services",href:"/services",children:[{label:"Web Design",href:"/services/web-design"},{label:"SEO",href:"/services/seo"},{label:"Hosting",href:"/services/hosting"}]},{label:"Blog",href:"/blog"},{label:"Contact",href:"/contact"}].map(t=>o`
              <li style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <a href=${t.href} style="display: block; padding: 1rem 0; color: white; text-decoration: none; font-size: 1.25rem; font-weight: 500;">
                  ${t.label}
                </a>
                ${t.children?o`
                  <ul style="list-style: none; padding: 0 0 0.5rem 1rem; margin: 0;">
                    ${t.children.map(a=>o`
                      <li><a href=${a.href} style="display: block; padding: 0.5rem 0; color: rgba(255,255,255,0.7); text-decoration: none; font-size: 1rem;">${a.label}</a></li>
                    `)}
                  </ul>
                `:""}
              </li>
            `)}
          </ul>
        </nav>

        <!-- Contact Info -->
        ${e.contactEmail||e.contactPhone?o`
          <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); font-size: 0.875rem; color: rgba(255,255,255,0.6);">
            ${e.contactEmail?o`<p style="margin: 0 0 0.5rem;">${e.contactEmail}</p>`:""}
            ${e.contactPhone?o`<p style="margin: 0;">${e.contactPhone}</p>`:""}
          </div>
        `:""}
      </div>
    </div>
  `,r={args:{contactEmail:"hello@acme-corp.com",contactPhone:"+49 123 456789"},render:e=>p(e)},n={args:{},render:e=>p(e)};var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    contactEmail: 'hello@acme-corp.com',
    contactPhone: '+49 123 456789'
  },
  render: args => renderMobileNav(args)
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,d,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: args => renderMobileNav(args)
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const u=["Default","WithoutContact"];export{r as Default,n as WithoutContact,u as __namedExportsOrder,h as default};
