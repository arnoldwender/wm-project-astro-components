import{b as A}from"./lit-element-CdmuTPXr.js";const G={title:"Navigation/AccessibleLoadMore",tags:["autodocs"],parameters:{docs:{description:{component:`
Progressive "Load More" button as an accessible alternative to pagination.

Features:
- WCAG 2.2 AA with aria-live announcements for screen readers
- Shows remaining item count
- Loading state with animated spinner
- Custom 'loadmore' event on click
- Three variants: primary, outline, ghost
- Minimum 44x44px touch target
        `}}},argTypes:{totalItems:{control:{type:"number",min:0},description:"Total items available"},loadedItems:{control:{type:"number",min:0},description:"Items currently loaded"},batchSize:{control:{type:"number",min:1},description:"Items per batch"},label:{control:"text",description:"Button label"},variant:{control:{type:"select"},options:["primary","outline","ghost"],description:"Visual variant"}}},a=e=>{const r=e.totalItems||100,i=e.loadedItems||20,z=e.batchSize||10,L=e.label||"Mehr laden",w=e.variant||"primary",d=Math.max(0,r-i),k=Math.min(z,d),$=r>0?Math.round(i/r*100):0;return A`
    <style>
      .alm-demo { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 1rem 0; font-family: system-ui, -apple-system, sans-serif; }
      .alm-demo__progress { font-size: 0.875rem; color: #718096; margin: 0; }
      .alm-demo__bar { width: 100%; max-width: 16rem; height: 0.375rem; background: #edf2f7; border-radius: 9999px; overflow: hidden; }
      .alm-demo__bar-fill { height: 100%; background: #3b82f6; border-radius: 9999px; width: ${$}%; }
      .alm-demo__button {
        display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
        min-height: 2.75rem; padding: 0.5rem 2rem; font-size: 1rem; font-weight: 500;
        border-radius: 0.5rem; cursor: pointer; ${{primary:"background: #3b82f6; color: #fff; border: 2px solid #3b82f6;",outline:"background: transparent; color: #3b82f6; border: 2px solid #3b82f6;",ghost:"background: transparent; color: #1a202c; border: 2px solid transparent;"}[w]}
      }
      .alm-demo__button:hover { opacity: 0.9; }
      .alm-demo__button:disabled { opacity: 0.5; cursor: not-allowed; }
    </style>
    <div class="alm-demo">
      <p class="alm-demo__progress">${i} / ${r}</p>
      <div class="alm-demo__bar"><div class="alm-demo__bar-fill"></div></div>
      <button class="alm-demo__button" ?disabled=${d<=0}>
        ${d<=0?"Alle geladen":`${L} (${k} weitere)`}
      </button>
    </div>
  `},t={args:{totalItems:100,loadedItems:20,batchSize:10,label:"Mehr laden",variant:"primary"},render:e=>a(e)},o={args:{totalItems:50,loadedItems:30,batchSize:10,label:"Weitere Projekte laden",variant:"outline"},render:e=>a(e)},n={args:{totalItems:80,loadedItems:10,batchSize:20,label:"Mehr anzeigen",variant:"ghost"},render:e=>a(e)},s={args:{totalItems:50,loadedItems:50,batchSize:10,label:"Mehr laden",variant:"primary"},render:e=>a(e)},l={args:{totalItems:25,loadedItems:22,batchSize:5,label:"Load more",variant:"outline"},render:e=>a(e)};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    totalItems: 100,
    loadedItems: 20,
    batchSize: 10,
    label: 'Mehr laden',
    variant: 'primary'
  },
  render: args => renderLoadMore(args)
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var b,u,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    totalItems: 50,
    loadedItems: 30,
    batchSize: 10,
    label: 'Weitere Projekte laden',
    variant: 'outline'
  },
  render: args => renderLoadMore(args)
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,v,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    totalItems: 80,
    loadedItems: 10,
    batchSize: 20,
    label: 'Mehr anzeigen',
    variant: 'ghost'
  },
  render: args => renderLoadMore(args)
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,I,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    totalItems: 50,
    loadedItems: 50,
    batchSize: 10,
    label: 'Mehr laden',
    variant: 'primary'
  },
  render: args => renderLoadMore(args)
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var _,M,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    totalItems: 25,
    loadedItems: 22,
    batchSize: 5,
    label: 'Load more',
    variant: 'outline'
  },
  render: args => renderLoadMore(args)
}`,...(x=(M=l.parameters)==null?void 0:M.docs)==null?void 0:x.source}}};const O=["Default","Outline","Ghost","AllLoaded","SmallBatch"];export{s as AllLoaded,t as Default,n as Ghost,o as Outline,l as SmallBatch,O as __namedExportsOrder,G as default};
