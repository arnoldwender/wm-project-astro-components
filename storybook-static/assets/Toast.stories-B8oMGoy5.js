import{b as n}from"./lit-element-CdmuTPXr.js";const C={title:"UI/Toast",tags:["autodocs"],parameters:{docs:{description:{component:`
Non-blocking notification system with auto-dismiss and stacking.

Features:
- Four toast types (success, error, warning, info)
- Auto-dismiss with configurable duration
- Manual dismiss with close button
- Six positioning options (top/bottom + left/center/right)
- Action buttons support
- Progress bar indicator for auto-dismiss countdown
- Pause on hover (pauses countdown and progress)
- Stacking with max toasts limit
- ARIA live regions for screen reader announcements
- Entrance/exit animations
- Reduced motion support
        `}}},argTypes:{type:{control:{type:"select"},options:["success","error","warning","info"],description:"Toast notification type"},title:{control:"text",description:"Toast title text"},message:{control:"text",description:"Optional description below title"},showProgress:{control:"boolean",description:"Show progress bar countdown"},position:{control:{type:"select"},options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"],description:"Position of the toast container"}}},x={success:{border:"#22c55e",icon:"#22c55e",progress:"#22c55e"},error:{border:"#ef4444",icon:"#ef4444",progress:"#ef4444"},warning:{border:"#f59e0b",icon:"#f59e0b",progress:"#f59e0b"},info:{border:"#3b82f6",icon:"#3b82f6",progress:"#3b82f6"}},M={success:"M5 13l4 4L19 7",error:"M6 18L18 6M6 6l12 12",warning:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",info:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},a=s=>{const l=s.type||"info",i=x[l],y=M[l];return n`
    <style>
      .toast-demo {
        max-width: 24rem; background: #fff; border-radius: 0.5rem; overflow: hidden;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1); font-family: system-ui, -apple-system, sans-serif;
        border-left: 4px solid ${i.border};
      }
      .toast-body { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; }
      .toast-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; color: ${i.icon}; }
      .toast-content { flex: 1; min-width: 0; }
      .toast-title { font-size: 0.875rem; font-weight: 500; color: #1e293b; }
      .toast-message { font-size: 0.875rem; color: #64748b; margin-top: 0.25rem; }
      .toast-close {
        flex-shrink: 0; padding: 0.25rem; background: none; border: none; cursor: pointer;
        color: #94a3b8; border-radius: 50%; display: flex;
      }
      .toast-close:hover { color: #1e293b; background: #f1f5f9; }
      .toast-close svg { width: 1rem; height: 1rem; }
      .toast-progress { height: 0.25rem; background: #e2e8f0; }
      .toast-progress-bar { height: 100%; width: 65%; background: ${i.progress}; transition: width 0.3s; }
    </style>
    <div class="toast-demo" role="alert">
      <div class="toast-body">
        <svg class="toast-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${y}" />
        </svg>
        <div class="toast-content">
          <div class="toast-title">${s.title}</div>
          ${s.message?n`<div class="toast-message">${s.message}</div>`:""}
        </div>
        <button class="toast-close" aria-label="Dismiss notification">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      ${s.showProgress?n`
        <div class="toast-progress">
          <div class="toast-progress-bar"></div>
        </div>
      `:""}
    </div>
  `},o={args:{type:"success",title:"Changes saved successfully!",message:"",showProgress:!0,position:"top-right"},render:s=>a(s)},t={args:{type:"error",title:"Something went wrong",message:"Please try again later or contact support.",showProgress:!0,position:"top-right"},render:s=>a(s)},e={args:{type:"warning",title:"Your session will expire soon",message:"Save your work to avoid losing changes.",showProgress:!0,position:"top-right"},render:s=>a(s)},r={render:()=>n`
    <style>
      .toast-stack { display: flex; flex-direction: column; gap: 0.5rem; max-width: 24rem; font-family: system-ui, sans-serif; }
      .toast-s { background: #fff; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
      .toast-s-body { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; }
      .toast-s-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; }
      .toast-s-title { font-size: 0.875rem; font-weight: 500; color: #1e293b; }
      .toast-s-close { flex-shrink: 0; padding: 0.25rem; background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; }
      .toast-s-close svg { width: 1rem; height: 1rem; }
    </style>
    <div class="toast-stack">
      <div class="toast-s" style="border-left:4px solid #22c55e;">
        <div class="toast-s-body">
          <svg class="toast-s-icon" style="color:#22c55e;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          <div style="flex:1;"><div class="toast-s-title">File uploaded successfully</div></div>
          <button class="toast-s-close"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
      </div>
      <div class="toast-s" style="border-left:4px solid #3b82f6;">
        <div class="toast-s-body">
          <svg class="toast-s-icon" style="color:#3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div style="flex:1;"><div class="toast-s-title">New update available</div></div>
          <button class="toast-s-close"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
      </div>
      <div class="toast-s" style="border-left:4px solid #f59e0b;">
        <div class="toast-s-body">
          <svg class="toast-s-icon" style="color:#f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <div style="flex:1;"><div class="toast-s-title">Low disk space warning</div></div>
          <button class="toast-s-close"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
      </div>
    </div>
  `};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: 'Changes saved successfully!',
    message: '',
    showProgress: true,
    position: 'top-right'
  },
  render: args => renderToast(args)
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,u,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Something went wrong',
    message: 'Please try again later or contact support.',
    showProgress: true,
    position: 'top-right'
  },
  render: args => renderToast(args)
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var h,f,m;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: 'Your session will expire soon',
    message: 'Save your work to avoid losing changes.',
    showProgress: true,
    position: 'top-right'
  },
  render: args => renderToast(args)
}`,...(m=(f=e.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var b,w,k;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .toast-stack { display: flex; flex-direction: column; gap: 0.5rem; max-width: 24rem; font-family: system-ui, sans-serif; }
      .toast-s { background: #fff; border-radius: 0.5rem; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
      .toast-s-body { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; }
      .toast-s-icon { flex-shrink: 0; width: 1.25rem; height: 1.25rem; }
      .toast-s-title { font-size: 0.875rem; font-weight: 500; color: #1e293b; }
      .toast-s-close { flex-shrink: 0; padding: 0.25rem; background: none; border: none; cursor: pointer; color: #94a3b8; display: flex; }
      .toast-s-close svg { width: 1rem; height: 1rem; }
    </style>
    <div class="toast-stack">
      <div class="toast-s" style="border-left:4px solid #22c55e;">
        <div class="toast-s-body">
          <svg class="toast-s-icon" style="color:#22c55e;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          <div style="flex:1;"><div class="toast-s-title">File uploaded successfully</div></div>
          <button class="toast-s-close"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
      </div>
      <div class="toast-s" style="border-left:4px solid #3b82f6;">
        <div class="toast-s-body">
          <svg class="toast-s-icon" style="color:#3b82f6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div style="flex:1;"><div class="toast-s-title">New update available</div></div>
          <button class="toast-s-close"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
      </div>
      <div class="toast-s" style="border-left:4px solid #f59e0b;">
        <div class="toast-s-body">
          <svg class="toast-s-icon" style="color:#f59e0b;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <div style="flex:1;"><div class="toast-s-title">Low disk space warning</div></div>
          <button class="toast-s-close"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg></button>
        </div>
      </div>
    </div>
  \`
}`,...(k=(w=r.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const S=["Success","Error","Warning","Stacked"];export{t as Error,r as Stacked,o as Success,e as Warning,S as __namedExportsOrder,C as default};
