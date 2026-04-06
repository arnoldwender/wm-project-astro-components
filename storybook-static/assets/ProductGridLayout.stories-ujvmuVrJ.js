import{b as o}from"./lit-element-CdmuTPXr.js";const b={title:"Layouts/ProductGridLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
E-commerce product grid with filtering sidebar, sorting, and view toggle.

**Features:**
- Filter sidebar with mobile slide-in panel
- Grid/List view toggle
- Sorting options (featured, newest, price, name)
- Sticky filters option
- Configurable columns (2-5)
- Responsive product cards
        `}}},argTypes:{showFilters:{control:"boolean",description:"Show filter sidebar"},showSorting:{control:"boolean",description:"Show sorting dropdown"},showViewToggle:{control:"boolean",description:"Show grid/list view toggle"},columns:{control:"select",options:[2,3,4,5],description:"Product grid columns"}}},r=(e,n)=>o`
  <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;">
    <div style="aspect-ratio: 1/1; background: #f1f5f9;"></div>
    <div style="padding: 1rem;">
      <h3 style="font-weight: 600; font-size: 0.875rem; margin: 0 0 0.25rem;">${e}</h3>
      <p style="color: #3b82f6; font-weight: 700; margin: 0;">${n}</p>
    </div>
  </div>
`,d=e=>o`
  <div style="font-family: system-ui, sans-serif; padding: 2rem;">
    <!-- Top Bar -->
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
      <p style="font-size: 0.875rem; color: #9ca3af; margin: 0;">24 Produkte</p>
      <div style="display: flex; align-items: center; gap: 1rem;">
        ${e.showSorting?o`
          <select style="font-size: 0.875rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; background: white;">
            <option>Empfohlen</option><option>Neueste</option><option>Preis: Niedrig - Hoch</option>
          </select>
        `:""}
        ${e.showViewToggle?o`
          <div style="display: flex; border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden;">
            <button style="padding: 0.5rem; background: #3b82f6; color: white; border: none; cursor: pointer;">Grid</button>
            <button style="padding: 0.5rem; background: white; color: #9ca3af; border: none; cursor: pointer;">List</button>
          </div>
        `:""}
      </div>
    </div>

    <!-- Main -->
    <div style="${e.showFilters?"display: grid; grid-template-columns: 280px 1fr; gap: 2rem;":""}">
      ${e.showFilters?o`
        <aside style="border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; height: fit-content;">
          <h3 style="font-weight: 600; font-size: 0.875rem; margin: 0 0 1rem;">Kategorie</h3>
          ${["Alle","Elektronik","Kleidung","Accessoires"].map(n=>o`
            <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #374151; margin-bottom: 0.5rem; cursor: pointer;">
              <input type="checkbox" /> ${n}
            </label>
          `)}
          <h3 style="font-weight: 600; font-size: 0.875rem; margin: 1.5rem 0 1rem; padding-top: 1rem; border-top: 1px solid #e2e8f0;">Preis</h3>
          <input type="range" min="0" max="500" style="width: 100%;" />
        </aside>
      `:""}

      <div style="display: grid; grid-template-columns: repeat(${e.columns||4}, 1fr); gap: 1.5rem;">
        ${r("Product Alpha","€49.99")}
        ${r("Product Beta","€79.99")}
        ${r("Product Gamma","€29.99")}
        ${r("Product Delta","€99.99")}
        ${r("Product Epsilon","€59.99")}
        ${r("Product Zeta","€39.99")}
        ${r("Product Eta","€149.99")}
        ${r("Product Theta","€19.99")}
      </div>
    </div>
  </div>
`,t={args:{showFilters:!0,showSorting:!0,showViewToggle:!0,columns:4},render:e=>d(e)},s={args:{showFilters:!1,showSorting:!0,showViewToggle:!0,columns:4},render:e=>d(e)},i={args:{showFilters:!0,showSorting:!0,showViewToggle:!1,columns:3},render:e=>d(e)};var a,l,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showSorting: true,
    showViewToggle: true,
    columns: 4
  },
  render: args => renderProductGrid(args)
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,u,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    showFilters: false,
    showSorting: true,
    showViewToggle: true,
    columns: 4
  },
  render: args => renderProductGrid(args)
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,h,w;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    showFilters: true,
    showSorting: true,
    showViewToggle: false,
    columns: 3
  },
  render: args => renderProductGrid(args)
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const y=["Default","WithoutFilters","ThreeColumns"];export{t as Default,i as ThreeColumns,s as WithoutFilters,y as __namedExportsOrder,b as default};
