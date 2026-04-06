import{b as o}from"./lit-element-CdmuTPXr.js";const v={title:"E-commerce/Wishlist",tags:["autodocs"],parameters:{docs:{description:{component:`
Wishlist/favorites functionality with localStorage persistence. Features include:
- Toggle, list, and count display modes
- localStorage persistence across sessions
- Heart icon animation on toggle
- Localized currency formatting
- Custom event dispatch for cross-component sync
- Add to cart and clear all actions
        `}}},argTypes:{mode:{control:"select",options:["toggle","list","count"],description:"Display mode"},isActive:{control:"boolean",description:"Toggle active state (toggle mode)"}}},u=e=>o`
  <style>
    .wl-toggle {
      display: flex; align-items: center; justify-content: center; width: 2.5rem; height: 2.5rem;
      background: transparent; border: none; cursor: pointer; color: ${e.isActive?"#ef4444":"#6b7280"};
      transition: all 0.2s;
    }
    .wl-toggle:hover { color: #ef4444; transform: scale(1.1); }
    .wl-toggle svg { width: 1.5rem; height: 1.5rem; }
  </style>
  <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; align-items: center; gap: 1rem;">
    <button class="wl-toggle" aria-label="${e.isActive?"Aus Wunschliste entfernen":"Zur Wunschliste hinzufuegen"}" aria-pressed="${e.isActive}">
      <svg viewBox="0 0 24 24" fill="${e.isActive?"currentColor":"none"}" stroke="currentColor" stroke-width="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
    <span style="font-size: 0.875rem; color: #6b7280;">${e.isActive?"In der Wunschliste":"Zur Wunschliste hinzufuegen"}</span>
  </div>
`,f=()=>o`
  <style>
    .wl-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr)); gap: 1.5rem; padding: 2rem; font-family: system-ui, sans-serif; }
    .wl-item { border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden; transition: box-shadow 0.2s; }
    .wl-item:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .wl-img { aspect-ratio: 1; background: #f3f4f6; }
    .wl-details { padding: 1rem; }
    .wl-name { font-size: 0.9375rem; font-weight: 500; margin: 0 0 0.5rem; }
    .wl-price { font-size: 1rem; font-weight: 600; }
    .wl-actions { display: flex; gap: 0.5rem; padding: 0 1rem 1rem; }
    .wl-cart-btn { flex: 1; padding: 0.625rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
    .wl-remove-btn { width: 2.5rem; padding: 0.625rem; background: #e5e7eb; border: none; border-radius: 0.5rem; cursor: pointer; color: #6b7280; display: flex; align-items: center; justify-content: center; }
    .wl-remove-btn svg { width: 1.25rem; height: 1.25rem; }
  </style>
  <div class="wl-grid">
    ${["Premium Kopfhoerer","Designer Sonnenbrille"].map(e=>o`
      <div class="wl-item">
        <div class="wl-img"></div>
        <div class="wl-details">
          <h3 class="wl-name">${e}</h3>
          <span class="wl-price">29,99 &euro;</span>
        </div>
        <div class="wl-actions">
          <button class="wl-cart-btn">In den Warenkorb</button>
          <button class="wl-remove-btn" aria-label="Entfernen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    `)}
  </div>
`,r={args:{mode:"toggle",isActive:!1},render:e=>u(e)},s={args:{mode:"toggle",isActive:!0},render:e=>u(e)},t={args:{mode:"list"},render:()=>f()};var i,n,a;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: 'toggle',
    isActive: false
  },
  render: args => renderWishlistToggle(args)
}`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var l,c,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mode: 'toggle',
    isActive: true
  },
  render: args => renderWishlistToggle(args)
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,m,p;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: 'list'
  },
  render: () => renderWishlistList()
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Toggle","ToggleActive","List"];export{t as List,r as Toggle,s as ToggleActive,w as __namedExportsOrder,v as default};
