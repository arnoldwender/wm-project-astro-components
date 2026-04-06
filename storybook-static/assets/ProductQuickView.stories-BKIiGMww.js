import{b as l}from"./lit-element-CdmuTPXr.js";const m={title:"E-commerce/ProductQuickView",tags:["autodocs"],parameters:{docs:{description:{component:`
A modal-based quick view for products without leaving the current page. Features include:
- Modal overlay with focus trap for accessibility
- Image gallery with thumbnail navigation
- Variant selection (size, color, etc.)
- Add to cart and wishlist actions from the modal
- Data-attribute driven trigger for zero-config usage
- Quantity selector with increment/decrement
        `}}},argTypes:{productName:{control:"text",description:"Product name"},productPrice:{control:"number",description:"Product price"},productDescription:{control:"text",description:"Product description"}}},d=e=>l`
  <style>
    .qv-modal { max-width: 56rem; margin: 2rem auto; background: #fff; border-radius: 1rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); overflow: hidden; font-family: system-ui, sans-serif; }
    .qv-content { display: grid; grid-template-columns: 1fr 1fr; }
    .qv-gallery { padding: 1.5rem; background: rgba(0,0,0,0.02); }
    .qv-main-img { aspect-ratio: 1; background: #e5e7eb; border-radius: 0.75rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: center; color: #9ca3af; font-size: 1.5rem; }
    .qv-thumbs { display: flex; gap: 0.5rem; }
    .qv-thumb { width: 4rem; height: 4rem; background: #e5e7eb; border: 2px solid transparent; border-radius: 0.5rem; cursor: pointer; }
    .qv-thumb.active { border-color: #3b82f6; }
    .qv-info { padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
    .qv-title { font-size: 1.5rem; font-weight: 600; margin: 0; line-height: 1.3; }
    .qv-price { font-size: 1.5rem; font-weight: 700; color: #3b82f6; }
    .qv-desc { font-size: 0.9375rem; line-height: 1.6; color: #6b7280; }
    .qv-variant { display: flex; flex-direction: column; gap: 0.5rem; }
    .qv-label { font-size: 0.875rem; font-weight: 500; }
    .qv-options { display: flex; flex-wrap: wrap; gap: 0.5rem; }
    .qv-option { padding: 0.5rem 1rem; font-size: 0.875rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; background: white; cursor: pointer; }
    .qv-option.selected { background: #3b82f6; color: white; border-color: #3b82f6; }
    .qv-qty { display: flex; flex-direction: column; gap: 0.5rem; }
    .qv-qty-controls { display: flex; align-items: center; gap: 0.25rem; }
    .qv-qty-btn { width: 2.5rem; height: 2.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; background: #e5e7eb; border: none; border-radius: 0.5rem; cursor: pointer; }
    .qv-qty-input { width: 3.5rem; height: 2.5rem; text-align: center; border: 1px solid #e5e7eb; border-radius: 0.5rem; font-size: 1rem; }
    .qv-actions { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
    .qv-add-cart { flex: 1; padding: 1rem 1.5rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.5rem; }
    .qv-wishlist { width: 3rem; display: flex; align-items: center; justify-content: center; border: 1px solid #e5e7eb; border-radius: 0.5rem; background: white; cursor: pointer; color: #6b7280; }
    .qv-wishlist svg { width: 1.5rem; height: 1.5rem; }
    .qv-link { display: inline-flex; align-items: center; gap: 0.5rem; color: #3b82f6; text-decoration: none; font-size: 0.9375rem; font-weight: 500; }
    .qv-link svg { width: 1rem; height: 1rem; }
  </style>
  <div class="qv-modal">
    <div class="qv-content">
      <div class="qv-gallery">
        <div class="qv-main-img">Product Image</div>
        <div class="qv-thumbs">
          <div class="qv-thumb active"></div>
          <div class="qv-thumb"></div>
          <div class="qv-thumb"></div>
        </div>
      </div>
      <div class="qv-info">
        <h2 class="qv-title">${e.productName}</h2>
        <div class="qv-price">${new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(e.productPrice)}</div>
        <p class="qv-desc">${e.productDescription}</p>
        <div class="qv-variant">
          <span class="qv-label">Size</span>
          <div class="qv-options">
            <button class="qv-option">S</button>
            <button class="qv-option selected">M</button>
            <button class="qv-option">L</button>
            <button class="qv-option">XL</button>
          </div>
        </div>
        <div class="qv-qty">
          <span class="qv-label">Menge</span>
          <div class="qv-qty-controls">
            <button class="qv-qty-btn">-</button>
            <input type="number" class="qv-qty-input" value="1" min="1" />
            <button class="qv-qty-btn">+</button>
          </div>
        </div>
        <div class="qv-actions">
          <button class="qv-add-cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M6 6L5 3H2"/>
            </svg>
            In den Warenkorb
          </button>
          <button class="qv-wishlist" aria-label="Auf die Wunschliste">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <a href="#" class="qv-link">
          Produkt ansehen
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </div>
`,r={args:{productName:"Premium Wireless Kopfhoerer",productPrice:149.99,productDescription:"High-quality wireless headphones with active noise cancellation and 30-hour battery life."},render:e=>d(e)},t={args:{productName:"Minimalist T-Shirt",productPrice:24.99,productDescription:"Organic cotton t-shirt with a clean, modern design. Available in multiple colors."},render:e=>d(e)};var i,o,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    productName: 'Premium Wireless Kopfhoerer',
    productPrice: 149.99,
    productDescription: 'High-quality wireless headphones with active noise cancellation and 30-hour battery life.'
  },
  render: args => renderQuickView(args)
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,a,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    productName: 'Minimalist T-Shirt',
    productPrice: 24.99,
    productDescription: 'Organic cotton t-shirt with a clean, modern design. Available in multiple colors.'
  },
  render: args => renderQuickView(args)
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const p=["Default","CheapProduct"];export{t as CheapProduct,r as Default,p as __namedExportsOrder,m as default};
