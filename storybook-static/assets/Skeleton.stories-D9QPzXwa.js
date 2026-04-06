import{b as t}from"./lit-element-CdmuTPXr.js";const W={title:"UI/Skeleton",tags:["autodocs"],parameters:{docs:{description:{component:`
Premium loading placeholder with smooth animations.

Features:
- Seven variants (text, circle, rect, avatar, card, image, button)
- Four compound layouts (profile, post, comment, product)
- Four sizes (sm, md, lg, xl)
- Shimmer and pulse animation options
- Multi-line text skeleton
- Card skeleton with image, title, text, and buttons
- Custom width and height support
- Configurable border-radius
- Reduced motion support
        `}}},argTypes:{variant:{control:{type:"select"},options:["text","circle","rect","avatar","card","image","button"],description:"Shape/pattern variant"},size:{control:{type:"select"},options:["sm","md","lg","xl"],description:"Size preset"},animation:{control:{type:"select"},options:["shimmer","pulse","none"],description:"Loading animation type"},compound:{control:{type:"select"},options:[!1,"profile","post","comment","product"],description:"Compound layout combining multiple skeleton types"},lines:{control:{type:"range",min:1,max:6},description:"Number of text lines (text variant)"}}},d=t`
  <style>
    .skeleton-demo {
      background: #e2e8f0; position: relative; overflow: hidden; font-family: system-ui, sans-serif;
    }
    .skeleton-demo.shimmer::after {
      content: ''; position: absolute; inset: 0; transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      animation: shimmer-demo 1.5s infinite;
    }
    .skeleton-demo.pulse { animation: pulse-demo 1.5s ease-in-out infinite; }
    @keyframes shimmer-demo { 100% { transform: translateX(100%); } }
    @keyframes pulse-demo { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
  </style>
`,g=r=>{const e=r.variant||"rect",i=r.size||"md",s=r.animation||"shimmer",x=r.lines||1,f={sm:"0.75rem",md:"1rem",lg:"1.25rem",xl:"1.5rem"},w={sm:"4rem",md:"6rem",lg:"8rem",xl:"12rem"},k={sm:"2rem",md:"3rem",lg:"4rem",xl:"6rem"},b={sm:"2rem",md:"2.5rem",lg:"3rem",xl:"4rem"},$={sm:{h:"2rem",w:"5rem"},md:{h:"2.5rem",w:"6rem"},lg:{h:"3rem",w:"8rem"},xl:{h:"3.5rem",w:"10rem"}};if(e==="text"&&x>1)return t`
      ${d}
      <div style="display:flex; flex-direction:column; gap:0.5rem; max-width:400px;">
        ${Array.from({length:x}).map((Q,K)=>t`
          <div class="skeleton-demo ${s}"
            style="height:${f[i]}; border-radius:0.25rem; ${K===x-1?"width:80%;":"width:100%;"}"
          ></div>
        `)}
      </div>
    `;if(e==="card")return t`
      ${d}
      <div style="max-width:320px; border:1px solid #e2e8f0; border-radius:0.5rem; overflow:hidden;">
        <div class="skeleton-demo ${s}" style="height:10rem; width:100%;"></div>
        <div style="padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div class="skeleton-demo ${s}" style="height:1.25rem; width:75%; border-radius:0.25rem;"></div>
          <div style="display:flex; flex-direction:column; gap:0.5rem;">
            <div class="skeleton-demo ${s}" style="height:0.75rem; width:100%; border-radius:0.25rem;"></div>
            <div class="skeleton-demo ${s}" style="height:0.75rem; width:85%; border-radius:0.25rem;"></div>
          </div>
          <div style="display:flex; gap:0.5rem; padding-top:0.5rem;">
            <div class="skeleton-demo ${s}" style="height:2rem; width:5rem; border-radius:0.375rem;"></div>
            <div class="skeleton-demo ${s}" style="height:2rem; width:5rem; border-radius:0.375rem;"></div>
          </div>
        </div>
      </div>
    `;let o="",a="0.25rem";switch(e){case"text":o=`height:${f[i]}; width:100%; max-width:400px;`;break;case"circle":o=`width:${k[i]}; height:${k[i]};`,a="50%";break;case"avatar":o=`width:${b[i]}; height:${b[i]};`,a="50%";break;case"image":o=`height:${w[i]}; width:100%; max-width:400px; aspect-ratio:16/9;`,a="0.5rem";break;case"button":o=`height:${$[i].h}; width:${$[i].w};`,a="0.375rem";break;case"rect":default:o=`height:${w[i]}; width:100%; max-width:400px;`;break}return t`
    ${d}
    <div class="skeleton-demo ${s}" style="${o} border-radius:${a};" aria-hidden="true"></div>
  `},n={args:{variant:"text",size:"md",animation:"shimmer",lines:3},render:r=>g(r)},m={args:{variant:"card",size:"md",animation:"shimmer",lines:1},render:r=>g(r)},l={args:{variant:"avatar",size:"lg",animation:"shimmer",lines:1},render:r=>g(r)},c={args:{variant:"rect",size:"md",animation:"pulse",lines:1},render:r=>g(r)},y=r=>{const e=r.animation||"shimmer",i=r.compound;return i==="profile"?t`
      ${d}
      <div style="display:flex; align-items:center; gap:1rem; max-width:400px;">
        <div class="skeleton-demo ${e}" style="width:3rem; height:3rem; border-radius:50%; flex-shrink:0;"></div>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <div class="skeleton-demo ${e}" style="height:1rem; width:33%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${e}" style="height:0.75rem; width:50%; border-radius:0.25rem;"></div>
        </div>
      </div>
    `:i==="post"?t`
      ${d}
      <div style="max-width:400px; display:flex; flex-direction:column; gap:1rem;">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <div class="skeleton-demo ${e}" style="width:2.5rem; height:2.5rem; border-radius:50%;"></div>
          <div style="flex:1; display:flex; flex-direction:column; gap:0.375rem;">
            <div class="skeleton-demo ${e}" style="height:0.75rem; width:6rem; border-radius:0.25rem;"></div>
            <div class="skeleton-demo ${e}" style="height:0.625rem; width:4rem; border-radius:0.25rem;"></div>
          </div>
        </div>
        <div class="skeleton-demo ${e}" style="aspect-ratio:16/9; width:100%; border-radius:0.5rem;"></div>
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <div class="skeleton-demo ${e}" style="height:1rem; width:75%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${e}" style="height:0.75rem; width:100%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${e}" style="height:0.75rem; width:85%; border-radius:0.25rem;"></div>
        </div>
        <div style="display:flex; gap:0.75rem;">
          <div class="skeleton-demo ${e}" style="height:2rem; width:4rem; border-radius:0.375rem;"></div>
          <div class="skeleton-demo ${e}" style="height:2rem; width:4rem; border-radius:0.375rem;"></div>
          <div class="skeleton-demo ${e}" style="height:2rem; width:4rem; border-radius:0.375rem;"></div>
        </div>
      </div>
    `:i==="comment"?t`
      ${d}
      <div style="max-width:400px; display:flex; gap:0.75rem;">
        <div class="skeleton-demo ${e}" style="width:2rem; height:2rem; border-radius:50%; flex-shrink:0;"></div>
        <div style="flex:1; display:flex; flex-direction:column; gap:0.5rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <div class="skeleton-demo ${e}" style="height:0.75rem; width:5rem; border-radius:0.25rem;"></div>
            <div class="skeleton-demo ${e}" style="height:0.625rem; width:3rem; border-radius:0.25rem;"></div>
          </div>
          <div class="skeleton-demo ${e}" style="height:0.75rem; width:100%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${e}" style="height:0.75rem; width:80%; border-radius:0.25rem;"></div>
        </div>
      </div>
    `:i==="product"?t`
      ${d}
      <div style="max-width:280px; border:1px solid #e2e8f0; border-radius:0.5rem; overflow:hidden;">
        <div class="skeleton-demo ${e}" style="aspect-ratio:1/1; width:100%;"></div>
        <div style="padding:1rem; display:flex; flex-direction:column; gap:0.75rem;">
          <div class="skeleton-demo ${e}" style="height:1rem; width:75%; border-radius:0.25rem;"></div>
          <div style="display:flex; gap:0.25rem;">
            ${Array.from({length:5}).map(()=>t`
              <div class="skeleton-demo ${e}" style="width:1rem; height:1rem; border-radius:0.25rem;"></div>
            `)}
          </div>
          <div class="skeleton-demo ${e}" style="height:1.25rem; width:25%; border-radius:0.25rem;"></div>
          <div class="skeleton-demo ${e}" style="height:2.5rem; width:100%; border-radius:0.375rem;"></div>
        </div>
      </div>
    `:t`<p>Select a compound layout.</p>`},p={args:{compound:"profile",animation:"shimmer"},render:r=>y(r),name:"Compound — Profile"},h={args:{compound:"post",animation:"shimmer"},render:r=>y(r),name:"Compound — Post"},u={args:{compound:"comment",animation:"shimmer"},render:r=>y(r),name:"Compound — Comment"},v={args:{compound:"product",animation:"shimmer"},render:r=>y(r),name:"Compound — Product"};var C,S,P;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    size: 'md',
    animation: 'shimmer',
    lines: 3
  },
  render: args => renderSkeleton(args)
}`,...(P=(S=n.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var z,A,F;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'card',
    size: 'md',
    animation: 'shimmer',
    lines: 1
  },
  render: args => renderSkeleton(args)
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var L,T,_;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'avatar',
    size: 'lg',
    animation: 'shimmer',
    lines: 1
  },
  render: args => renderSkeleton(args)
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var D,H,X;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'rect',
    size: 'md',
    animation: 'pulse',
    lines: 1
  },
  render: args => renderSkeleton(args)
}`,...(X=(H=c.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var E,I,M;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    compound: 'profile',
    animation: 'shimmer'
  },
  render: args => renderCompound(args),
  name: 'Compound — Profile'
}`,...(M=(I=p.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var N,O,R;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    compound: 'post',
    animation: 'shimmer'
  },
  render: args => renderCompound(args),
  name: 'Compound — Post'
}`,...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var U,j,q;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    compound: 'comment',
    animation: 'shimmer'
  },
  render: args => renderCompound(args),
  name: 'Compound — Comment'
}`,...(q=(j=u.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var B,G,J;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    compound: 'product',
    animation: 'shimmer'
  },
  render: args => renderCompound(args),
  name: 'Compound — Product'
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Y=["TextLines","Card","Avatar","Pulse","CompoundProfile","CompoundPost","CompoundComment","CompoundProduct"];export{l as Avatar,m as Card,u as CompoundComment,h as CompoundPost,v as CompoundProduct,p as CompoundProfile,c as Pulse,n as TextLines,Y as __namedExportsOrder,W as default};
