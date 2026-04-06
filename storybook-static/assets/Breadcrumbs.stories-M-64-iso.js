import{b as r}from"./lit-element-CdmuTPXr.js";const f={title:"SEO/Breadcrumbs",tags:["autodocs"],parameters:{docs:{description:{component:`
Accessible breadcrumb navigation with inline Schema.org BreadcrumbList structured data.

**Features:**
- Dual structured data: microdata attributes and JSON-LD script block
- Three separator styles: chevron, slash, arrow
- aria-current="page" on the last item
- Keyboard-focusable links with visible focus ring
- Automatically hides with fewer than 2 items
        `}}},argTypes:{separator:{control:"select",options:["chevron","slash","arrow"],description:"Separator style"}}},k={chevron:"›",slash:"/",arrow:"→"},o=e=>{const i=e.items||[{name:"Home",url:"/"},{name:"Services",url:"/services"},{name:"Web Design",url:"/services/web-design"}],y=k[e.separator]||"›";return r`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <nav aria-label="Breadcrumb">
        <ol style="display: flex; align-items: center; gap: 0.5rem; list-style: none; padding: 0; margin: 0; font-size: 0.875rem;">
          ${i.map((t,l)=>r`
            <li style="display: flex; align-items: center; gap: 0.5rem;">
              ${l>0?r`<span style="color: #9ca3af;">${y}</span>`:""}
              ${l<i.length-1?r`<a href=${t.url} style="color: #64748b; text-decoration: none; transition: color 150ms;" onmouseover="this.style.color='#1e293b'" onmouseout="this.style.color='#64748b'">${t.name}</a>`:r`<span style="color: #1e293b; font-weight: 500;" aria-current="page">${t.name}</span>`}
            </li>
          `)}
        </ol>
      </nav>
    </div>
  `},a={args:{separator:"chevron",items:[{name:"Home",url:"/"},{name:"Services",url:"/services"},{name:"Web Design",url:"/services/web-design"}]},render:e=>o(e)},s={args:{separator:"slash",items:[{name:"Home",url:"/"},{name:"Blog",url:"/blog"},{name:"My Article",url:"/blog/my-article"}]},render:e=>o(e)},n={args:{separator:"arrow",items:[{name:"Startseite",url:"/"},{name:"Produkte",url:"/produkte"},{name:"Kategorie",url:"/produkte/kategorie"},{name:"Artikel",url:"/produkte/kategorie/artikel"}]},render:e=>o(e)};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    separator: 'chevron',
    items: [{
      name: 'Home',
      url: '/'
    }, {
      name: 'Services',
      url: '/services'
    }, {
      name: 'Web Design',
      url: '/services/web-design'
    }]
  },
  render: args => renderBreadcrumbs(args)
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    separator: 'slash',
    items: [{
      name: 'Home',
      url: '/'
    }, {
      name: 'Blog',
      url: '/blog'
    }, {
      name: 'My Article',
      url: '/blog/my-article'
    }]
  },
  render: args => renderBreadcrumbs(args)
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,v;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    separator: 'arrow',
    items: [{
      name: 'Startseite',
      url: '/'
    }, {
      name: 'Produkte',
      url: '/produkte'
    }, {
      name: 'Kategorie',
      url: '/produkte/kategorie'
    }, {
      name: 'Artikel',
      url: '/produkte/kategorie/artikel'
    }]
  },
  render: args => renderBreadcrumbs(args)
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const S=["Chevron","Slash","Arrow"];export{n as Arrow,a as Chevron,s as Slash,S as __namedExportsOrder,f as default};
