import{b as o}from"./lit-element-CdmuTPXr.js";const f={title:"E-commerce/AddToCartButton",tags:["autodocs"],parameters:{docs:{description:{component:`
A standalone add-to-cart button with loading states and feedback. Features include:
- Loading, success, and error state animations
- Optional quantity selector with max limit
- Multiple size (sm, md, lg) and style variants (primary, secondary, outline)
- Custom event integration with Cart component
- Full-width option for mobile layouts
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Button size"},variant:{control:"select",options:["primary","secondary","outline"],description:"Style variant"},showQuantity:{control:"boolean",description:"Show quantity selector"},fullWidth:{control:"boolean",description:"Full width button"},text:{control:"text",description:"Button text"}}},b={sm:"padding: 0.5rem 1rem; font-size: 0.8125rem;",md:"padding: 0.75rem 1.5rem; font-size: 0.9375rem;",lg:"padding: 1rem 2rem; font-size: 1rem;"},h={primary:"background: #3b82f6; color: white; border: none;",secondary:"background: #6b7280; color: white; border: none;",outline:"background: transparent; color: #3b82f6; border: 2px solid #3b82f6;"},a=t=>o`
  <style>
    .atc { display: ${t.fullWidth?"flex":"inline-flex"}; align-items: center; gap: 0.5rem; padding: 2rem; font-family: system-ui, sans-serif; ${t.fullWidth?"width: 100%; max-width: 400px;":""} }
    .atc-qty { display: flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; }
    .atc-qty-btn { display: flex; align-items: center; justify-content: center; width: 2rem; height: 2rem; background: transparent; border: none; cursor: pointer; font-size: 1rem; }
    .atc-qty-btn:hover { background: rgba(0,0,0,0.05); }
    .atc-qty-input { width: 2.5rem; text-align: center; font-size: 0.875rem; font-weight: 500; border: none; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; }
    .atc-btn { ${b[t.size]} ${h[t.variant]} font-weight: 600; border-radius: 0.5rem; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem; transition: all 0.2s; ${t.fullWidth?"flex: 1;":""} }
    .atc-btn:hover { opacity: 0.9; }
    .atc-icon { width: 1.25rem; height: 1.25rem; }
  </style>
  <div class="atc">
    ${t.showQuantity?o`
      <div class="atc-qty">
        <button class="atc-qty-btn" aria-label="Menge verringern">-</button>
        <input type="number" class="atc-qty-input" value="1" min="1" aria-label="Menge" />
        <button class="atc-qty-btn" aria-label="Menge erhoehen">+</button>
      </div>
    `:""}
    <button class="atc-btn" type="button">
      <span>${t.text}</span>
      <svg class="atc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M6 6L5 3H2"/>
      </svg>
    </button>
  </div>
`,e={args:{size:"md",variant:"primary",showQuantity:!1,fullWidth:!1,text:"In den Warenkorb"},render:t=>a(t)},r={args:{size:"md",variant:"primary",showQuantity:!0,fullWidth:!1,text:"In den Warenkorb"},render:t=>a(t)},n={args:{size:"lg",variant:"outline",showQuantity:!1,fullWidth:!0,text:"Add to Cart"},render:t=>a(t)};var i,s,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary',
    showQuantity: false,
    fullWidth: false,
    text: 'In den Warenkorb'
  },
  render: args => renderAddToCart(args)
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,c,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'primary',
    showQuantity: true,
    fullWidth: false,
    text: 'In den Warenkorb'
  },
  render: args => renderAddToCart(args)
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'outline',
    showQuantity: false,
    fullWidth: true,
    text: 'Add to Cart'
  },
  render: args => renderAddToCart(args)
}`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const x=["Primary","WithQuantity","Outline"];export{n as Outline,e as Primary,r as WithQuantity,x as __namedExportsOrder,f as default};
