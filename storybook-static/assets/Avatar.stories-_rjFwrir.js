import{b as a}from"./lit-element-CdmuTPXr.js";const T={title:"UI/Avatar",tags:["autodocs"],parameters:{docs:{description:{component:`
User avatar with image, initials, or icon fallback.

Features:
- Image with lazy loading
- Initials fallback generated from name
- Generic icon fallback
- Six sizes (xs through 2xl)
- Status indicator (online, offline, busy, away)
- Ring/border for emphasis with color options
- Square shape option
- Consistent background colors from name hash
        `}}},argTypes:{name:{control:"text",description:"User name (used for initials fallback)"},size:{control:{type:"select"},options:["xs","sm","md","lg","xl","2xl"],description:"Avatar size"},status:{control:{type:"select"},options:[void 0,"online","offline","busy","away"],description:"Status indicator dot"},ring:{control:"boolean",description:"Show ring border around avatar"},square:{control:"boolean",description:"Square shape instead of circular"}}},C={xs:"1.5rem",sm:"2rem",md:"2.5rem",lg:"3rem",xl:"4rem","2xl":"5rem"},f={xs:"0.375rem",sm:"0.5rem",md:"0.625rem",lg:"0.75rem",xl:"0.875rem","2xl":"1rem"},W={online:"#22c55e",offline:"#94a3b8",busy:"#ef4444",away:"#f59e0b"},U={xs:"0.625rem",sm:"0.75rem",md:"0.875rem",lg:"1rem",xl:"1.25rem","2xl":"1.5rem"},I=e=>{const s=e.trim().split(/\s+/);return s.length===1?s[0].charAt(0).toUpperCase():(s[0].charAt(0)+s[s.length-1].charAt(0)).toUpperCase()},h=["#3b82f6","#8b5cf6","#22c55e","#f59e0b","#ef4444","#06b6d4"],j=e=>{let s=0;for(let r=0;r<e.length;r++)s=e.charCodeAt(r)+((s<<5)-s);return h[Math.abs(s)%h.length]},m=e=>{const s=e.size||"md",r=C[s],t=e.name||"",d=e.status,k=e.ring,$=e.square,c=t?I(t):"",q=t?j(t):"#cbd5e1";return a`
    <style>
      .avatar-demo {
        position: relative; display: inline-flex; align-items: center; justify-content: center;
        width: ${r}; height: ${r}; border-radius: ${$?"0.5rem":"50%"};
        background: ${q}; color: #fff; font-weight: 500; font-size: ${U[s]};
        font-family: system-ui, -apple-system, sans-serif; user-select: none; flex-shrink: 0;
        ${k?"box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3b82f6;":""}
      }
      .avatar-demo svg { width: 50%; height: 50%; color: rgba(255,255,255,0.7); }
      .avatar-status {
        position: absolute; bottom: 0; right: 0; display: block; border-radius: 50%;
        width: ${f[s]}; height: ${f[s]};
        border: 2px solid #fff;
      }
    </style>
    <div class="avatar-demo">
      ${c?a`<span>${c}</span>`:a`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`}
      ${d?a`<span class="avatar-status" style="background:${W[d]}"></span>`:""}
    </div>
  `},i={args:{name:"Max Mustermann",size:"md",ring:!1,square:!1},render:e=>m(e)},n={args:{name:"Anna Schmidt",size:"lg",status:"online",ring:!1,square:!1},render:e=>m(e)},o={args:{name:"Thomas Weber",size:"xl",ring:!0,square:!1,status:"busy"},render:e=>m(e)},l={render:()=>a`
    <style>
      .avatar-sizes { display: flex; align-items: center; gap: 1rem; font-family: system-ui, sans-serif; }
      .avatar-sizes .av {
        display: inline-flex; align-items: center; justify-content: center;
        border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 500; flex-shrink: 0;
      }
    </style>
    <div class="avatar-sizes">
      <div class="av" style="width:1.5rem;height:1.5rem;font-size:0.625rem;">M</div>
      <div class="av" style="width:2rem;height:2rem;font-size:0.75rem;">MM</div>
      <div class="av" style="width:2.5rem;height:2.5rem;font-size:0.875rem;">MM</div>
      <div class="av" style="width:3rem;height:3rem;font-size:1rem;">MM</div>
      <div class="av" style="width:4rem;height:4rem;font-size:1.25rem;">MM</div>
      <div class="av" style="width:5rem;height:5rem;font-size:1.5rem;">MM</div>
    </div>
  `};var g,u,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'Max Mustermann',
    size: 'md',
    ring: false,
    square: false
  },
  render: args => renderAvatar(args)
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var p,y,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'Anna Schmidt',
    size: 'lg',
    status: 'online',
    ring: false,
    square: false
  },
  render: args => renderAvatar(args)
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var z,x,M;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'Thomas Weber',
    size: 'xl',
    ring: true,
    square: false,
    status: 'busy'
  },
  render: args => renderAvatar(args)
}`,...(M=(x=o.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var w,S,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .avatar-sizes { display: flex; align-items: center; gap: 1rem; font-family: system-ui, sans-serif; }
      .avatar-sizes .av {
        display: inline-flex; align-items: center; justify-content: center;
        border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 500; flex-shrink: 0;
      }
    </style>
    <div class="avatar-sizes">
      <div class="av" style="width:1.5rem;height:1.5rem;font-size:0.625rem;">M</div>
      <div class="av" style="width:2rem;height:2rem;font-size:0.75rem;">MM</div>
      <div class="av" style="width:2.5rem;height:2.5rem;font-size:0.875rem;">MM</div>
      <div class="av" style="width:3rem;height:3rem;font-size:1rem;">MM</div>
      <div class="av" style="width:4rem;height:4rem;font-size:1.25rem;">MM</div>
      <div class="av" style="width:5rem;height:5rem;font-size:1.5rem;">MM</div>
    </div>
  \`
}`,...(A=(S=l.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const B=["Default","WithStatus","WithRing","AllSizes"];export{l as AllSizes,i as Default,o as WithRing,n as WithStatus,B as __namedExportsOrder,T as default};
