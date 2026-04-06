import{b as t}from"./lit-element-CdmuTPXr.js";const x={title:"Layouts/PortfolioLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
Showcase grid for creative work with lightbox and filtering support.

**Features:**
- Four variants: grid, masonry, justified, featured
- Category filtering with tablist
- Lightbox integration with keyboard navigation
- Configurable columns (2-5) and gap sizes
- Responsive with lazy loading
        `}}},argTypes:{variant:{control:"select",options:["grid","masonry","justified","featured"],description:"Grid variant"},columns:{control:"select",options:[2,3,4,5],description:"Number of columns"},gap:{control:"select",options:["none","sm","md","lg"],description:"Gap size"},showFilter:{control:"boolean",description:"Show category filter bar"}}},s=r=>{const h={none:"0",sm:"0.5rem",md:"1rem",lg:"1.5rem"}[r.gap]||"1rem",y=r.columns||3,b=["Alle","Branding","Web Design","Photography"],v=[{title:"Project Alpha",cat:"Branding"},{title:"Project Beta",cat:"Web Design"},{title:"Project Gamma",cat:"Photography"},{title:"Project Delta",cat:"Branding"},{title:"Project Epsilon",cat:"Web Design"},{title:"Project Zeta",cat:"Photography"}];return t`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <!-- Filter Bar -->
      ${r.showFilter?t`
        <nav style="display: flex; gap: 0.5rem; margin-bottom: 2rem;">
          ${b.map((e,w)=>t`
            <button style="padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 500; border-radius: 9999px; border: none; cursor: pointer;
                           ${w===0?"background: #3b82f6; color: white;":"background: #f1f5f9; color: #64748b;"}">${e}</button>
          `)}
        </nav>
      `:""}

      <!-- Grid -->
      <div style="display: grid; grid-template-columns: repeat(${y}, 1fr); gap: ${h};">
        ${v.map(e=>t`
          <article style="position: relative; overflow: hidden; border-radius: 0.5rem; aspect-ratio: 1/1; background: #334155;">
            <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; padding: 1rem; color: white; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
              <span style="font-size: 0.75rem; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 0.25rem;">${e.cat}</span>
              <h3 style="font-weight: 600; margin: 0; font-size: 1rem;">${e.title}</h3>
            </div>
          </article>
        `)}
      </div>
    </div>
  `},o={args:{variant:"grid",columns:3,gap:"md",showFilter:!0},render:r=>s(r)},a={args:{variant:"grid",columns:4,gap:"sm",showFilter:!1},render:r=>s(r)},n={args:{variant:"grid",columns:2,gap:"lg",showFilter:!0},render:r=>s(r)};var i,l,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 3,
    gap: 'md',
    showFilter: true
  },
  render: args => renderPortfolioLayout(args)
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,g,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 4,
    gap: 'sm',
    showFilter: false
  },
  render: args => renderPortfolioLayout(args)
}`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 2,
    gap: 'lg',
    showFilter: true
  },
  render: args => renderPortfolioLayout(args)
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const j=["GridWithFilter","FourColumns","TwoColumnsLargeGap"];export{a as FourColumns,o as GridWithFilter,n as TwoColumnsLargeGap,j as __namedExportsOrder,x as default};
