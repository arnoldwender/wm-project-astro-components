import{b as c}from"./lit-element-CdmuTPXr.js";const j={title:"Navigation/Pagination",tags:["autodocs"],parameters:{docs:{description:{component:`
SEO-friendly pagination with Schema.org markup and automatic ellipsis.

**Features:**
- Automatic ellipsis for large page ranges with configurable sibling count
- SEO rel="prev" / rel="next" on navigation links
- Schema.org CollectionPage JSON-LD structured data
- Disabled state for first/last page boundaries
- Responsive labels hidden on mobile, icons always visible
        `}}},argTypes:{currentPage:{control:"number",description:"Current active page"},totalPages:{control:"number",description:"Total number of pages"},siblingCount:{control:"number",description:"Number of page numbers to show around current"}}},g=e=>{const a=e.currentPage||1,t=e.totalPages||10,d=e.siblingCount||1,n=[],u=Math.max(2,a-d),p=Math.min(t-1,a+d);n.push(1),u>2&&n.push("...");for(let r=u;r<=p;r++)n.push(r);return p<t-1&&n.push("..."),t>1&&n.push(t),c`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <nav aria-label="Seitennavigation" style="display: flex; align-items: center; justify-content: center; gap: 0.25rem;">
        <!-- Prev -->
        <a href="#" style="display: flex; align-items: center; gap: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem;
                          ${a===1?"opacity: 0.5; pointer-events: none; color: #9ca3af;":"color: #374151;"}">
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          <span>Zur\u00FCck</span>
        </a>

        <!-- Pages -->
        ${n.map(r=>typeof r=="number"?c`
          <a href="#" style="display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem; font-weight: 500;
                            ${r===a?"background: #3b82f6; color: white;":"color: #374151; border: 1px solid #e2e8f0;"}">${r}</a>
        `:c`
          <span style="display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem; color: #9ca3af;">&hellip;</span>
        `)}

        <!-- Next -->
        <a href="#" style="display: flex; align-items: center; gap: 0.25rem; padding: 0.5rem 0.75rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem;
                          ${a===t?"opacity: 0.5; pointer-events: none; color: #9ca3af;":"color: #374151;"}">
          <span>Weiter</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>
      </nav>
    </div>
  `},s={args:{currentPage:3,totalPages:10,siblingCount:1},render:e=>g(e)},o={args:{currentPage:1,totalPages:25,siblingCount:1},render:e=>g(e)},i={args:{currentPage:10,totalPages:10,siblingCount:1},render:e=>g(e)},l={args:{currentPage:12,totalPages:50,siblingCount:2},render:e=>g(e)};var m,f,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1
  },
  render: args => renderPagination(args)
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,P,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 25,
    siblingCount: 1
  },
  render: args => renderPagination(args)
}`,...(y=(P=o.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var v,x,C;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 10,
    siblingCount: 1
  },
  render: args => renderPagination(args)
}`,...(C=(x=i.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var w,k,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    currentPage: 12,
    totalPages: 50,
    siblingCount: 2
  },
  render: args => renderPagination(args)
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const $=["Default","FirstPage","LastPage","ManyPages"];export{s as Default,o as FirstPage,i as LastPage,l as ManyPages,$ as __namedExportsOrder,j as default};
