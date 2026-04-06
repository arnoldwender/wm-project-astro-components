import{b as n}from"./lit-element-CdmuTPXr.js";const b={title:"Layouts/MagazineLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
Editorial-style grid layout for visual storytelling, inspired by modern digital magazines.

**Features:**
- Five variants: editorial, grid, masonry, featured-left, featured-right
- Dynamic grid with featured articles
- Visual hierarchy with varied card sizes
- Category color coding
- Responsive masonry-like layout
        `}}},argTypes:{variant:{control:"select",options:["editorial","grid","masonry","featured-left","featured-right"],description:"Layout variant"},columns:{control:"select",options:[2,3,4],description:"Grid columns"},gap:{control:"select",options:["sm","md","lg"],description:"Gap size"}}},e=(r,l="200px")=>n`
  <div style="position: relative; overflow: hidden; border-radius: 0.75rem; height: ${l}; background: #334155;">
    <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);"></div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; color: white;">
      <h3 style="font-weight: 600; margin: 0; font-size: 1rem;">${r}</h3>
    </div>
  </div>
`,d=r=>{const a={sm:"1rem",md:"1.5rem",lg:"2rem"}[r.gap]||"1.5rem";return r.variant==="editorial"?n`
      <div style="padding: 2rem; font-family: system-ui, sans-serif;">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: ${a};">
          <div style="grid-row: span 2;">${e("Featured Article","420px")}</div>
          ${e("Secondary Article 1","200px")}
          ${e("Secondary Article 2","200px")}
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: ${a}; margin-top: ${a};">
          ${[1,2,3,4].map(o=>e(`Article ${o}`,"180px"))}
        </div>
      </div>
    `:n`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="display: grid; grid-template-columns: repeat(${r.columns||3}, 1fr); gap: ${a};">
        ${[1,2,3,4,5,6].map(o=>e(`Article ${o}`,"200px"))}
      </div>
    </div>
  `},t={args:{variant:"editorial",columns:3,gap:"md"},render:r=>d(r)},i={args:{variant:"grid",columns:3,gap:"md"},render:r=>d(r)},s={args:{variant:"featured-left",columns:2,gap:"md"},render:r=>d(r)};var p,c,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'editorial',
    columns: 3,
    gap: 'md'
  },
  render: args => renderMagazineLayout(args)
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'grid',
    columns: 3,
    gap: 'md'
  },
  render: args => renderMagazineLayout(args)
}`,...(y=(u=i.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,f,h;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'featured-left',
    columns: 2,
    gap: 'md'
  },
  render: args => renderMagazineLayout(args)
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const z=["Editorial","Grid","FeaturedLeft"];export{t as Editorial,s as FeaturedLeft,i as Grid,z as __namedExportsOrder,b as default};
