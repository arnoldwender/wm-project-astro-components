import{b as r}from"./lit-element-CdmuTPXr.js";const v={title:"Navigation/Breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`
SEO-optimized breadcrumb navigation with Schema.org BreadcrumbList JSON-LD.

**Features:**
- Three separator styles: chevron, slash, arrow
- Auto-prepends Home link when showHome is enabled
- Mobile-friendly truncation with ellipsis for intermediate items
- Dark mode support via prefers-color-scheme
- Schema.org structured data for rich snippets
        `}}},argTypes:{separator:{control:"select",options:["chevron","slash","arrow"],description:"Separator style between items"},showHome:{control:"boolean",description:"Auto-prepend Home link"}}},y={chevron:"›",slash:"/",arrow:"→"},l=e=>{const f=e.items||[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Product"}],g=y[e.separator]||"›";return r`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <nav aria-label="Breadcrumb" style="padding: 0.75rem 1rem; background: #f8fafc; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <ol style="display: flex; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0; font-size: 0.875rem; flex-wrap: wrap;">
          ${f.map((a,k)=>r`
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              ${k>0?r`<span style="color: #cbd5e1;">${g}</span>`:""}
              ${a.href?r`<a href=${a.href} style="color: #64748b; text-decoration: none;">${a.label}</a>`:r`<span style="color: #1e293b; font-weight: 500;" aria-current="page">${a.label}</span>`}
            </li>
          `)}
        </ol>
      </nav>
    </div>
  `},o={args:{separator:"chevron",showHome:!0,items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Current Product"}]},render:e=>l(e)},s={args:{separator:"slash",showHome:!1,items:[{label:"Acme Corp",href:"/"},{label:"Services",href:"/services"},{label:"Web Design"}]},render:e=>l(e)},t={args:{separator:"arrow",showHome:!0,items:[{label:"Home",href:"/"},{label:"Shop",href:"/shop"},{label:"Elektronik",href:"/shop/elektronik"},{label:"Computer",href:"/shop/elektronik/computer"},{label:"Laptops",href:"/shop/elektronik/computer/laptops"},{label:'MacBook Pro 16"'}]},render:e=>l(e)};var n,p,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    separator: 'chevron',
    showHome: true,
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category',
      href: '/products/category'
    }, {
      label: 'Current Product'
    }]
  },
  render: args => renderBreadcrumbs(args)
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    separator: 'slash',
    showHome: false,
    items: [{
      label: 'Acme Corp',
      href: '/'
    }, {
      label: 'Services',
      href: '/services'
    }, {
      label: 'Web Design'
    }]
  },
  render: args => renderBreadcrumbs(args)
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    separator: 'arrow',
    showHome: true,
    items: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Shop',
      href: '/shop'
    }, {
      label: 'Elektronik',
      href: '/shop/elektronik'
    }, {
      label: 'Computer',
      href: '/shop/elektronik/computer'
    }, {
      label: 'Laptops',
      href: '/shop/elektronik/computer/laptops'
    }, {
      label: 'MacBook Pro 16"'
    }]
  },
  render: args => renderBreadcrumbs(args)
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const S=["Default","SlashSeparator","LongPath"];export{o as Default,t as LongPath,s as SlashSeparator,S as __namedExportsOrder,v as default};
