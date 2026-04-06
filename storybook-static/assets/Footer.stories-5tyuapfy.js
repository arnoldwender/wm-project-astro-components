import{b as t}from"./lit-element-CdmuTPXr.js";const k={title:"Layout/Footer",tags:["autodocs"],parameters:{docs:{description:{component:`
Responsive multi-column site footer with brand section, quick links,
contact details, social media icons, and copyright line.

**Features:**
- Three-column grid: brand/description, quick links, contact info
- Built-in SVG icons for 7 social platforms
- Logo image or text-based branding
- Auto-generated copyright year
- Fully responsive: collapses to single column on small screens
        `}}},argTypes:{siteName:{control:"text",description:"Site name for branding"},description:{control:"text",description:"Brand description text"},contactEmail:{control:"text",description:"Contact email address"},contactPhone:{control:"text",description:"Contact phone number"},address:{control:"text",description:"Physical address"},copyright:{control:"text",description:"Custom copyright text"}}},a=e=>{const s=e.links||[],c=e.socialLinks||[];return t`
    <footer style="border-top: 1px solid #374151; background: #111; color: white;">
      <div style="max-width: 1200px; margin: 0 auto; padding: 3rem 1rem 2rem;">
        <!-- Main Footer Content -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-bottom: 3rem;">
          <!-- Brand -->
          <div>
            <span style="font-size: 1.25rem; font-weight: 700;">${e.siteName||"Site Name"}</span>
            ${e.description?t`<p style="font-size: 0.875rem; line-height: 1.6; opacity: 0.7; max-width: 20rem; margin-top: 1rem;">${e.description}</p>`:""}
          </div>

          <!-- Links -->
          ${s.length>0?t`
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 1rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Links</h4>
                  <ul style="list-style: none; padding: 0; margin: 0;">
                    ${s.map(n=>t`
                        <li style="margin-bottom: 0.75rem;">
                          <a href=${n.href} style="color: white; opacity: 0.7; text-decoration: none; font-size: 0.875rem;">${n.label}</a>
                        </li>
                      `)}
                  </ul>
                </div>
              `:""}

          <!-- Contact -->
          ${e.contactEmail||e.contactPhone||e.address?t`
                <div>
                  <h4 style="font-weight: 600; margin-bottom: 1rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em;">Contact</h4>
                  <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.875rem;">
                    ${e.contactEmail?t`<li style="margin-bottom: 0.75rem; opacity: 0.7;">${e.contactEmail}</li>`:""}
                    ${e.contactPhone?t`<li style="margin-bottom: 0.75rem; opacity: 0.7;">${e.contactPhone}</li>`:""}
                    ${e.address?t`<li style="opacity: 0.7;">${e.address}</li>`:""}
                  </ul>
                </div>
              `:""}
        </div>

        <!-- Social Links -->
        ${c.length>0?t`
              <div style="display: flex; justify-content: center; gap: 1.5rem; padding-top: 2rem; border-top: 1px solid #374151; margin-bottom: 2rem;">
                ${c.map(n=>t`
                    <a href=${n.href} target="_blank" rel="noopener noreferrer" aria-label=${n.name}
                       style="color: white; opacity: 0.7; text-decoration: none; font-size: 0.875rem;">
                      ${n.name}
                    </a>
                  `)}
              </div>
            `:""}

        <!-- Copyright -->
        <div style="text-align: center; opacity: 0.7; font-size: 0.75rem;">
          <p>${e.copyright||`© ${new Date().getFullYear()} ${e.siteName||"Site Name"}. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  `},r={args:{siteName:"Acme Corp",description:"Building innovative solutions since 2010.",links:[{label:"Impressum",href:"/impressum"},{label:"Datenschutz",href:"/datenschutz"},{label:"Blog",href:"/blog"}],socialLinks:[{name:"Instagram",href:"https://instagram.com/acme"},{name:"LinkedIn",href:"https://linkedin.com/company/acme"}],contactEmail:"info@example.com",contactPhone:"+49 345 12345",address:"123 Main St, 06108 Halle (Saale)"},render:e=>a(e)},i={args:{siteName:"WenderMedia",copyright:"2020-2026 WenderMedia. All rights reserved."},render:e=>a(e)},o={args:{siteName:"Creative Studio",description:"Design and development agency.",socialLinks:[{name:"Instagram",href:"#"},{name:"Facebook",href:"#"},{name:"LinkedIn",href:"#"},{name:"GitHub",href:"#"}]},render:e=>a(e)};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    siteName: 'Acme Corp',
    description: 'Building innovative solutions since 2010.',
    links: [{
      label: 'Impressum',
      href: '/impressum'
    }, {
      label: 'Datenschutz',
      href: '/datenschutz'
    }, {
      label: 'Blog',
      href: '/blog'
    }],
    socialLinks: [{
      name: 'Instagram',
      href: 'https://instagram.com/acme'
    }, {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/acme'
    }],
    contactEmail: 'info@example.com',
    contactPhone: '+49 345 12345',
    address: '123 Main St, 06108 Halle (Saale)'
  },
  render: args => renderFooter(args)
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,h,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    siteName: 'WenderMedia',
    copyright: '2020-2026 WenderMedia. All rights reserved.'
  },
  render: args => renderFooter(args)
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    siteName: 'Creative Studio',
    description: 'Design and development agency.',
    socialLinks: [{
      name: 'Instagram',
      href: '#'
    }, {
      name: 'Facebook',
      href: '#'
    }, {
      name: 'LinkedIn',
      href: '#'
    }, {
      name: 'GitHub',
      href: '#'
    }]
  },
  render: args => renderFooter(args)
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const v=["Default","Minimal","WithSocialLinks"];export{r as Default,i as Minimal,o as WithSocialLinks,v as __namedExportsOrder,k as default};
