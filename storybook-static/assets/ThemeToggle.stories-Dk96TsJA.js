import{b as c}from"./lit-element-CdmuTPXr.js";const I={title:"Accessibility/ThemeToggle",tags:["autodocs"],parameters:{docs:{description:{component:`
Dark/Light mode toggle with localStorage persistence and FOUC prevention.

**Features:**
- Three variants: button (icon toggle), switch (iOS-style), dropdown (light/dark/system)
- System preference detection (prefers-color-scheme)
- localStorage persistence across sessions
- Accessible labels and focus indicators
- Smooth icon transitions
- Three sizes: sm, md, lg
- View Transitions API support
        `}}},argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Toggle button size"},variant:{control:"select",options:["button","switch","dropdown"],description:"Rendering style"}}},g=e=>{const o={sm:{pad:"0.375rem",icon:"16"},md:{pad:"0.5rem",icon:"20"},lg:{pad:"0.625rem",icon:"24"}},r=o[e.size]||o.md;return c`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; gap: 2rem; align-items: center;">
      <!-- Light mode toggle -->
      <div style="padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <button style="padding: ${r.pad}; border-radius: 0.5rem; border: none; background: transparent; cursor: pointer; color: #64748b; transition: all 200ms;"
                aria-label="Toggle dark mode" title="Toggle dark mode">
          <svg width="${r.icon}" height="${r.icon}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
        </button>
      </div>

      <!-- Dark mode toggle -->
      <div style="padding: 1rem; background: #1e293b; border-radius: 0.5rem;">
        <button style="padding: ${r.pad}; border-radius: 0.5rem; border: none; background: transparent; cursor: pointer; color: #94a3b8; transition: all 200ms;"
                aria-label="Toggle light mode" title="Toggle light mode">
          <svg width="${r.icon}" height="${r.icon}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </button>
      </div>

      <span style="font-size: 0.875rem; color: #64748b;">Size: ${e.size}</span>
    </div>
  `},t={args:{size:"md",variant:"button"},render:e=>g(e)},n={args:{size:"sm",variant:"button"},render:e=>g(e)},s={args:{size:"lg",variant:"button"},render:e=>g(e)},p=e=>{const o={sm:{w:"2.5rem",h:"1.25rem",thumb:"0.875rem",translate:"1.25rem"},md:{w:"3rem",h:"1.5rem",thumb:"1.125rem",translate:"1.5rem"},lg:{w:"3.5rem",h:"1.75rem",thumb:"1.375rem",translate:"1.75rem"}},r=o[e.size]||o.md;return c`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; gap: 2rem; align-items: center;">
      <!-- Light mode (off) -->
      <div style="padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0; display: flex; align-items: center; gap: 0.75rem;">
        <button role="switch" aria-checked="false" aria-label="Toggle dark mode"
          style="position: relative; width: ${r.w}; height: ${r.h}; background: #e2e8f0; border-radius: 9999px; border: none; cursor: pointer; display: flex; align-items: center;">
          <span style="position: absolute; left: 2px; width: ${r.thumb}; height: ${r.thumb}; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transition: transform 200ms;"></span>
        </button>
        <span style="font-size: 0.875rem; color: #475569;">Light</span>
      </div>

      <!-- Dark mode (on) -->
      <div style="padding: 1rem; background: #1e293b; border-radius: 0.5rem; display: flex; align-items: center; gap: 0.75rem;">
        <button role="switch" aria-checked="true" aria-label="Toggle light mode"
          style="position: relative; width: ${r.w}; height: ${r.h}; background: #6366f1; border-radius: 9999px; border: none; cursor: pointer; display: flex; align-items: center;">
          <span style="position: absolute; left: 2px; width: ${r.thumb}; height: ${r.thumb}; background: white; border-radius: 50%; box-shadow: 0 1px 3px rgba(0,0,0,0.2); transform: translateX(${r.translate}); transition: transform 200ms;"></span>
        </button>
        <span style="font-size: 0.875rem; color: #94a3b8;">Dark</span>
      </div>
    </div>
  `},a={args:{size:"md",variant:"switch"},render:e=>p(e),name:"Switch — Medium"},i={args:{size:"sm",variant:"switch"},render:e=>p(e),name:"Switch — Small"},d={args:{size:"lg",variant:"switch"},render:e=>p(e),name:"Switch — Large"},E=e=>{const o={sm:"0.75rem",md:"0.875rem",lg:"1rem"},r={sm:"0.375rem",md:"0.5rem",lg:"0.625rem"};return c`
    <div style="padding: 2rem; font-family: system-ui, sans-serif; display: flex; gap: 2rem; align-items: center;">
      <!-- Light background -->
      <div style="padding: 1rem; background: white; border-radius: 0.5rem; border: 1px solid #e2e8f0;">
        <div style="position: relative; display: inline-block;">
          <select style="appearance: none; padding: ${r[e.size]||r.md}; padding-right: 2rem; border: 1px solid #e2e8f0; border-radius: 0.5rem; background: white; font-size: ${o[e.size]||o.md}; cursor: pointer; min-width: 5rem;"
                  aria-label="Select color theme">
            <option value="light" selected>Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
          <svg style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 1rem; height: 1rem; color: #94a3b8;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>

      <!-- Dark background -->
      <div style="padding: 1rem; background: #1e293b; border-radius: 0.5rem;">
        <div style="position: relative; display: inline-block;">
          <select style="appearance: none; padding: ${r[e.size]||r.md}; padding-right: 2rem; border: 1px solid #475569; border-radius: 0.5rem; background: #334155; color: #e2e8f0; font-size: ${o[e.size]||o.md}; cursor: pointer; min-width: 5rem;"
                  aria-label="Select color theme">
            <option value="light">Light</option>
            <option value="dark" selected>Dark</option>
            <option value="system">System</option>
          </select>
          <svg style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); pointer-events: none; width: 1rem; height: 1rem; color: #94a3b8;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </div>
    </div>
  `},l={args:{size:"md",variant:"dropdown"},render:e=>E(e),name:"Dropdown — Medium"},m={args:{size:"sm",variant:"dropdown"},render:e=>E(e),name:"Dropdown — Small"};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'button'
  },
  render: args => renderThemeToggle(args)
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,v,k;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'button'
  },
  render: args => renderThemeToggle(args)
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var y,f,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'button'
  },
  render: args => renderThemeToggle(args)
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var z,x,T;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'switch'
  },
  render: args => renderSwitchToggle(args),
  name: 'Switch — Medium'
}`,...(T=(x=a.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var $,M,D;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'switch'
  },
  render: args => renderSwitchToggle(args),
  name: 'Switch — Small'
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var L,C,j;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    variant: 'switch'
  },
  render: args => renderSwitchToggle(args),
  name: 'Switch — Large'
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var A,B,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'dropdown'
  },
  render: args => renderDropdownToggle(args),
  name: 'Dropdown — Medium'
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var F,Y,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    variant: 'dropdown'
  },
  render: args => renderDropdownToggle(args),
  name: 'Dropdown — Small'
}`,...(_=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const P=["Medium","Small","Large","SwitchMedium","SwitchSmall","SwitchLarge","DropdownMedium","DropdownSmall"];export{l as DropdownMedium,m as DropdownSmall,s as Large,t as Medium,n as Small,d as SwitchLarge,a as SwitchMedium,i as SwitchSmall,P as __namedExportsOrder,I as default};
