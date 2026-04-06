import{b as a}from"./lit-element-CdmuTPXr.js";const x={title:"Images/OptimizedImage",tags:["autodocs"],parameters:{docs:{description:{component:`
A premium responsive image with modern format support. Features include:
- Automatic WebP/AVIF format detection via picture element
- Responsive srcset with customizable breakpoints
- Lazy loading with native browser support
- Priority loading for LCP images
- Blur-up placeholder option with fade-in animation
- Progressive LQIP (Low Quality Image Placeholder) with blur(20px) crossfade
- Aspect ratio preservation
- Art direction support
- Reduced motion support for animations
        `}}},argTypes:{aspectRatio:{control:"text",description:"Aspect ratio (e.g. 16/9)"},objectFit:{control:"select",options:["cover","contain","fill","none"],description:"Object fit"},placeholder:{control:"select",options:["none","blur"],description:"Placeholder type"},priority:{control:"boolean",description:"Priority loading for LCP"},blurUp:{control:"boolean",description:"Enable blur-up LQIP progressive loading"}}},l=e=>a`
  <style>
    .oi-container { max-width: 600px; margin: 2rem auto; font-family: system-ui, sans-serif; }
    .oi-picture {
      display: block; position: relative; overflow: hidden;
      ${e.aspectRatio?`aspect-ratio: ${e.aspectRatio};`:""}
      ${e.placeholder==="blur"||e.blurUp?"background: linear-gradient(135deg, #e0e7ff, #dbeafe); background-size: cover;":""}
    }
    .oi-img { display: block; width: 100%; height: 100%; object-fit: ${e.objectFit}; object-position: center; }
    .oi-placeholder {
      display: block; width: 100%; height: 100%;
      background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
      display: flex; align-items: center; justify-content: center; color: #9ca3af;
    }
    .oi-meta { padding: 1rem 0; font-size: 0.75rem; color: #6b7280; }
    .oi-meta span { display: inline-block; padding: 0.25rem 0.5rem; background: #f3f4f6; border-radius: 0.25rem; margin-right: 0.5rem; }
  </style>
  <div class="oi-container">
    <picture class="oi-picture">
      <div class="oi-placeholder" style="object-fit: ${e.objectFit};">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>
    </picture>
    <div class="oi-meta">
      <span>Aspect: ${e.aspectRatio||"auto"}</span>
      <span>Fit: ${e.objectFit}</span>
      <span>Placeholder: ${e.placeholder}</span>
      ${e.priority?a`<span>Priority: LCP</span>`:""}
      ${e.blurUp?a`<span>Blur-Up: LQIP</span>`:""}
    </div>
  </div>
`,r={args:{aspectRatio:"16/9",objectFit:"cover",placeholder:"none",priority:!1,blurUp:!1},render:e=>l(e)},i={args:{aspectRatio:"4/3",objectFit:"cover",placeholder:"blur",priority:!1,blurUp:!1},render:e=>l(e)},o={args:{aspectRatio:"1/1",objectFit:"cover",placeholder:"none",priority:!0,blurUp:!1},render:e=>l(e)},t={args:{aspectRatio:"16/9",objectFit:"cover",placeholder:"none",priority:!1,blurUp:!0},render:()=>a`
    <style>
      .lqip-demo { max-width: 600px; margin: 2rem auto; font-family: system-ui, sans-serif; }
      .lqip-container {
        position: relative; overflow: hidden; aspect-ratio: 16/9; border-radius: 0.75rem;
        background: linear-gradient(135deg, #dbeafe, #c7d2fe); background-size: cover;
      }
      .lqip-blur {
        position: absolute; inset: 0; filter: blur(20px); transform: scale(1.1);
        background: linear-gradient(135deg, #93c5fd, #a5b4fc); transition: opacity 500ms ease-out;
      }
      .lqip-blur.loaded { opacity: 0; }
      .lqip-img-placeholder {
        position: relative; z-index: 1; width: 100%; height: 100%; display: flex;
        align-items: center; justify-content: center; color: #6366f1;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
        opacity: 0; transition: opacity 500ms ease-out;
      }
      .lqip-img-placeholder.loaded { opacity: 1; }
      .lqip-label { text-align: center; margin-top: 1rem; font-size: 0.875rem; color: #6b7280; }
      .lqip-label span { display: inline-block; padding: 0.25rem 0.75rem; background: #eff6ff; color: #3b82f6; border-radius: 9999px; font-weight: 500; }
    </style>
    <div class="lqip-demo">
      <div class="lqip-container">
        <div class="lqip-blur"></div>
        <div class="lqip-img-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      </div>
      <div class="lqip-label">
        <span>blurUp=true</span> Tiny base64 placeholder with blur(20px) crossfades to full image on load
      </div>
    </div>
  `,name:"Blur-Up LQIP"};var s,n,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    aspectRatio: '16/9',
    objectFit: 'cover',
    placeholder: 'none',
    priority: false,
    blurUp: false
  },
  render: args => renderOptimizedImage(args)
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    aspectRatio: '4/3',
    objectFit: 'cover',
    placeholder: 'blur',
    priority: false,
    blurUp: false
  },
  render: args => renderOptimizedImage(args)
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,b,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    aspectRatio: '1/1',
    objectFit: 'cover',
    placeholder: 'none',
    priority: true,
    blurUp: false
  },
  render: args => renderOptimizedImage(args)
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,h,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    aspectRatio: '16/9',
    objectFit: 'cover',
    placeholder: 'none',
    priority: false,
    blurUp: true
  },
  render: () => html\`
    <style>
      .lqip-demo { max-width: 600px; margin: 2rem auto; font-family: system-ui, sans-serif; }
      .lqip-container {
        position: relative; overflow: hidden; aspect-ratio: 16/9; border-radius: 0.75rem;
        background: linear-gradient(135deg, #dbeafe, #c7d2fe); background-size: cover;
      }
      .lqip-blur {
        position: absolute; inset: 0; filter: blur(20px); transform: scale(1.1);
        background: linear-gradient(135deg, #93c5fd, #a5b4fc); transition: opacity 500ms ease-out;
      }
      .lqip-blur.loaded { opacity: 0; }
      .lqip-img-placeholder {
        position: relative; z-index: 1; width: 100%; height: 100%; display: flex;
        align-items: center; justify-content: center; color: #6366f1;
        background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%);
        opacity: 0; transition: opacity 500ms ease-out;
      }
      .lqip-img-placeholder.loaded { opacity: 1; }
      .lqip-label { text-align: center; margin-top: 1rem; font-size: 0.875rem; color: #6b7280; }
      .lqip-label span { display: inline-block; padding: 0.25rem 0.75rem; background: #eff6ff; color: #3b82f6; border-radius: 9999px; font-weight: 500; }
    </style>
    <div class="lqip-demo">
      <div class="lqip-container">
        <div class="lqip-blur"></div>
        <div class="lqip-img-placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </div>
      </div>
      <div class="lqip-label">
        <span>blurUp=true</span> Tiny base64 placeholder with blur(20px) crossfades to full image on load
      </div>
    </div>
  \`,
  name: 'Blur-Up LQIP'
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const w=["Default","BlurPlaceholder","SquarePriority","BlurUpLQIP"];export{i as BlurPlaceholder,t as BlurUpLQIP,r as Default,o as SquarePriority,w as __namedExportsOrder,x as default};
