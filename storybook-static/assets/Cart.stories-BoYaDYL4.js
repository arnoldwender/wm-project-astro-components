import{b as t}from"./lit-element-CdmuTPXr.js";const p={title:"E-commerce/Cart",tags:["autodocs"],parameters:{docs:{description:{component:`
A shopping cart slideout/modal with full functionality. Features include:
- Slideout panel with configurable left/right position
- Automatic tax calculation and free shipping threshold
- Quantity adjustment with item removal
- Persistent cart state via localStorage
- Empty cart state with customizable message
- Free shipping progress bar
        `}}},argTypes:{position:{control:"select",options:["left","right"],description:"Drawer position"},showTax:{control:"boolean",description:"Show tax calculation"},isEmpty:{control:"boolean",description:"Show empty state"}}},m=e=>t`
  <style>
    .cart-demo { font-family: system-ui, sans-serif; max-width: 400px; margin: 0 auto; background: #fff; border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden; }
    .cart-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.5rem; border-bottom: 1px solid #e5e7eb; }
    .cart-title { font-size: 1.125rem; font-weight: 600; }
    .cart-count { font-weight: 400; color: #6b7280; }
    .cart-close { width: 2rem; height: 2rem; background: transparent; border: none; cursor: pointer; color: #6b7280; display: flex; align-items: center; justify-content: center; }
    .cart-shipping { padding: 0.75rem 1.5rem; font-size: 0.875rem; color: #6b7280; background: rgba(0,0,0,0.02); }
    .cart-shipping-bar { height: 3px; background: #e5e7eb; margin-top: 0.5rem; border-radius: 2px; overflow: hidden; }
    .cart-shipping-fill { height: 100%; background: #10b981; width: 60%; }
    .cart-items { padding: 1rem 1.5rem; }
    .cart-item { display: grid; grid-template-columns: 5rem 1fr auto; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid #e5e7eb; }
    .cart-item:last-child { border-bottom: none; }
    .cart-item-img { width: 5rem; height: 5rem; border-radius: 0.5rem; background: #e5e7eb; }
    .cart-item-name { font-size: 0.875rem; font-weight: 500; margin: 0; }
    .cart-item-qty { display: flex; align-items: center; gap: 0.25rem; margin-top: 0.5rem; }
    .cart-item-qty-btn { width: 1.75rem; height: 1.75rem; display: flex; align-items: center; justify-content: center; background: #e5e7eb; border: none; border-radius: 0.25rem; cursor: pointer; }
    .cart-item-qty-input { width: 2.5rem; height: 1.75rem; text-align: center; border: 1px solid #e5e7eb; border-radius: 0.25rem; font-size: 0.875rem; }
    .cart-item-price { font-size: 0.875rem; font-weight: 600; }
    .cart-footer { padding: 1rem 1.5rem; border-top: 1px solid #e5e7eb; }
    .cart-row { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.875rem; color: #6b7280; }
    .cart-total { display: flex; justify-content: space-between; font-size: 1.125rem; font-weight: 600; padding-top: 0.5rem; border-top: 1px solid #e5e7eb; margin-bottom: 1rem; }
    .cart-checkout { display: block; width: 100%; padding: 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; text-align: center; cursor: pointer; text-decoration: none; box-sizing: border-box; }
    .cart-empty { display: flex; flex-direction: column; align-items: center; padding: 3rem 1rem; color: #6b7280; text-align: center; }
    .cart-empty svg { width: 4rem; height: 4rem; margin-bottom: 1rem; opacity: 0.5; }
  </style>
  <div class="cart-demo">
    <div class="cart-header">
      <h2 class="cart-title">Warenkorb <span class="cart-count">${e.isEmpty?"(0)":"(2)"}</span></h2>
      <button class="cart-close" aria-label="Schliessen">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>
    ${e.isEmpty?t`
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M6 6L5 3H2"/>
        </svg>
        <p>Ihr Warenkorb ist leer</p>
      </div>
    `:t`
      <div class="cart-shipping">
        Noch <strong>20,01 &euro;</strong> bis zum kostenlosen Versand
        <div class="cart-shipping-bar"><div class="cart-shipping-fill"></div></div>
      </div>
      <div class="cart-items">
        <div class="cart-item">
          <div class="cart-item-img"></div>
          <div>
            <h3 class="cart-item-name">Premium Kopfhoerer</h3>
            <div class="cart-item-qty">
              <button class="cart-item-qty-btn">-</button>
              <input type="number" class="cart-item-qty-input" value="1" />
              <button class="cart-item-qty-btn">+</button>
            </div>
          </div>
          <span class="cart-item-price">29,99 &euro;</span>
        </div>
      </div>
      <div class="cart-footer">
        ${e.showTax?t`<div class="cart-row"><span>inkl. MwSt. (19%)</span><span>4,75 &euro;</span></div>`:""}
        <div class="cart-row"><span>Versand</span><span>4,99 &euro;</span></div>
        <div class="cart-total"><span>Gesamtsumme</span><span>34,98 &euro;</span></div>
        <a href="/checkout" class="cart-checkout">Zur Kasse</a>
      </div>
    `}
  </div>
`,r={args:{position:"right",showTax:!0,isEmpty:!1},render:e=>m(e)},i={args:{position:"right",showTax:!0,isEmpty:!0},render:e=>m(e)};var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    position: 'right',
    showTax: true,
    isEmpty: false
  },
  render: args => renderCart(args)
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var n,c,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    position: 'right',
    showTax: true,
    isEmpty: true
  },
  render: args => renderCart(args)
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["WithItems","EmptyState"];export{i as EmptyState,r as WithItems,g as __namedExportsOrder,p as default};
