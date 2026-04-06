import{b as r}from"./lit-element-CdmuTPXr.js";const y={title:"Sections/BannerSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Announcement banners, notifications, and promotional bars.
- Six variants: top, inline, floating, promo, countdown, cookie
- Dismissible with localStorage persistence
- Countdown timer and cookie consent support
- Six color themes: primary, success, warning, danger, info, dark
        `}}},argTypes:{variant:{control:"select",options:["top","inline","floating","promo","countdown","cookie"],description:"Banner variant"},theme:{control:"select",options:["primary","success","warning","danger","info","dark"],description:"Color theme"},message:{control:"text",description:"Banner message"},dismissible:{control:"boolean",description:"Can be dismissed"}}},i={primary:"#3b82f6",success:"#16a34a",warning:"#f59e0b",danger:"#dc2626",info:"#2563eb",dark:"#1e293b"},s=e=>r`
  <div style="padding: 2rem;">
    ${e.variant==="top"?r`
      <div style="background: ${i[e.theme]||"#3b82f6"}; color: #fff; padding: 0.625rem 1rem; text-align: center; font-size: 0.875rem; border-radius: 0.5rem; position: relative;">
        <p style="margin: 0; font-weight: 500;">
          ${e.message}
          <a href="#" style="color: #fff; text-decoration: underline; margin-left: 0.5rem;">Shop now &rarr;</a>
        </p>
        ${e.dismissible?r`<button style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: #fff; cursor: pointer; font-size: 1rem;">&times;</button>`:""}
      </div>
    `:e.variant==="inline"?r`
      <div style="border: 1px solid ${e.theme==="success"?"#bbf7d0":e.theme==="warning"?"#fde68a":"#bfdbfe"}; background: ${e.theme==="success"?"#f0fdf4":e.theme==="warning"?"#fffbeb":"#eff6ff"}; color: ${e.theme==="success"?"#166534":e.theme==="warning"?"#92400e":"#1e40af"}; border-radius: 0.75rem; padding: 1rem 1.25rem;">
        <p style="margin: 0; font-weight: 500;">${e.message}</p>
        <p style="margin: 0.25rem 0 0; font-size: 0.875rem; opacity: 0.8;">Save up to 40% on all Acme Corp products.</p>
      </div>
    `:e.variant==="cookie"?r`
      <div style="background: #fff; border-top: 1px solid #e2e8f0; padding: 1rem 1.5rem; box-shadow: 0 -4px 6px rgba(0,0,0,0.05); border-radius: 0.75rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
          <div>
            <p style="margin: 0; font-weight: 500; color: #1e293b;">${e.message}</p>
            <p style="margin: 0.25rem 0 0; font-size: 0.875rem; color: #64748b;">We use cookies to enhance your experience.</p>
          </div>
          <div style="display: flex; gap: 0.75rem;">
            <button style="padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 500; background: #f1f5f9; border: none; border-radius: 0.5rem; cursor: pointer; color: #64748b;">Ablehnen</button>
            <button style="padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 500; background: #3b82f6; color: #fff; border: none; border-radius: 0.5rem; cursor: pointer;">Akzeptieren</button>
          </div>
        </div>
      </div>
    `:r`
      <div style="background: ${i[e.theme]||"#1e293b"}; color: #fff; border-radius: 1rem; padding: 2rem 3rem; text-align: center;">
        <p style="font-size: 0.875rem; opacity: 0.8; margin: 0 0 0.5rem;">Spring Sale ends in</p>
        <div style="display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem;">
          <div style="text-align: center;"><span style="font-size: 2rem; font-weight: 700;">12</span><br/><span style="font-size: 0.75rem; opacity: 0.7;">Tage</span></div>
          <span style="font-size: 2rem; font-weight: 700; opacity: 0.5;">:</span>
          <div style="text-align: center;"><span style="font-size: 2rem; font-weight: 700;">08</span><br/><span style="font-size: 0.75rem; opacity: 0.7;">Stunden</span></div>
          <span style="font-size: 2rem; font-weight: 700; opacity: 0.5;">:</span>
          <div style="text-align: center;"><span style="font-size: 2rem; font-weight: 700;">45</span><br/><span style="font-size: 0.75rem; opacity: 0.7;">Minuten</span></div>
        </div>
        <a href="#" style="display: inline-block; padding: 0.75rem 1.5rem; background: #fff; color: #1e293b; font-weight: 600; border-radius: 0.5rem; text-decoration: none;">View deals</a>
      </div>
    `}
  </div>
`,n={args:{variant:"top",theme:"primary",message:"Free shipping on orders over 50 EUR!",dismissible:!0},render:e=>s(e)},o={args:{variant:"inline",theme:"success",message:"Your order has been confirmed!",dismissible:!1},render:e=>s(e)},t={args:{variant:"cookie",theme:"primary",message:"Cookie-Hinweis",dismissible:!1},render:e=>s(e)};var a,d,m;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'top',
    theme: 'primary',
    message: 'Free shipping on orders over 50 EUR!',
    dismissible: true
  },
  render: args => renderBanner(args)
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'inline',
    theme: 'success',
    message: 'Your order has been confirmed!',
    dismissible: false
  },
  render: args => renderBanner(args)
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'cookie',
    theme: 'primary',
    message: 'Cookie-Hinweis',
    dismissible: false
  },
  render: args => renderBanner(args)
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const h=["TopBar","InlineAlert","CookieConsent"];export{t as CookieConsent,o as InlineAlert,n as TopBar,h as __namedExportsOrder,y as default};
