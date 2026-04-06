import{b as t}from"./lit-element-CdmuTPXr.js";const v={title:"Sections/MaintenanceSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Maintenance mode / under construction page component. Features:
- Six visual variants (default, progress, scheduled, minimal, branded, technical)
- Live countdown timer for scheduled maintenance windows
- Progress bar with circular and linear indicators
- Terminal-style developer variant with animated cursor
        `}}},argTypes:{variant:{control:"select",options:["default","progress","scheduled","minimal","branded","technical"],description:"Visual variant"},title:{control:"text",description:"Main heading"},description:{control:"text",description:"Description text"},estimatedTime:{control:"text",description:"Estimated downtime"},progress:{control:{type:"range",min:0,max:100},description:"Progress percentage"},contactEmail:{control:"text",description:"Support email"}}},f=e=>t`
  <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
    <div style="width:100%;max-width:40rem;text-align:center;">
      <div style="margin-bottom:1.5rem;">
        <svg fill="none" stroke="#3b82f6" viewBox="0 0 24 24" width="64" height="64" style="animation:spin 8s linear infinite;">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
      <h1 style="font-size:2rem;font-weight:700;margin:0 0 1rem;color:#1e293b;">${e.title}</h1>
      <p style="font-size:1.125rem;color:#64748b;margin:0 0 2rem;line-height:1.6;">${e.description}</p>
      ${e.estimatedTime?t`
        <div style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 1.25rem;background:#f1f5f9;border-radius:9999px;font-size:0.875rem;color:#64748b;margin-bottom:1.5rem;">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Estimated downtime: <strong>${e.estimatedTime}</strong></span>
        </div>
      `:""}
      ${e.contactEmail?t`
        <div style="display:flex;justify-content:center;gap:1.5rem;margin-top:1rem;">
          <a href="mailto:${e.contactEmail}" style="display:inline-flex;align-items:center;gap:0.5rem;color:#3b82f6;text-decoration:none;font-size:0.875rem;font-weight:500;">Contact Support</a>
        </div>
      `:""}
    </div>
  </section>
  <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
`,r={args:{title:"Under Maintenance",description:"We're currently performing scheduled maintenance. We'll be back online shortly.",estimatedTime:"2 hours",contactEmail:"support@acmecorp.com"},render:e=>f(e)},h=()=>t`
  <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:#0d1117;font-family:system-ui,sans-serif;">
    <div style="width:100%;max-width:48rem;">
      <div style="background:#161b22;border:1px solid #30363d;border-radius:0.75rem;overflow:hidden;font-family:ui-monospace,SFMono-Regular,monospace;">
        <div style="display:flex;align-items:center;gap:0.5rem;padding:0.75rem 1rem;background:#21262d;border-bottom:1px solid #30363d;">
          <span style="width:0.75rem;height:0.75rem;border-radius:50%;background:#ff5f56;"></span>
          <span style="width:0.75rem;height:0.75rem;border-radius:50%;background:#ffbd2e;"></span>
          <span style="width:0.75rem;height:0.75rem;border-radius:50%;background:#27c93f;"></span>
          <span style="margin-left:auto;font-size:0.75rem;color:#8b949e;">system-status</span>
        </div>
        <div style="padding:1.5rem;">
          <div style="display:flex;gap:0.75rem;color:#c9d1d9;font-size:0.875rem;margin-bottom:0.75rem;">
            <span style="color:#27c93f;">$</span><span style="color:#79c0ff;">status --check</span>
          </div>
          <div style="padding-left:1.5rem;color:#8b949e;font-size:0.875rem;margin-bottom:0.75rem;">Maintenance mode: <span style="color:#e3b341;">ACTIVE</span></div>
          <div style="padding-left:1.5rem;color:#8b949e;font-size:0.875rem;margin-bottom:0.75rem;">ETA: 2 hours</div>
          <div style="padding-left:1.5rem;color:#8b949e;font-size:0.875rem;margin-bottom:0.75rem;">Upgrading database and API servers.</div>
          <div style="display:flex;gap:0.75rem;color:#c9d1d9;font-size:0.875rem;">
            <span style="color:#27c93f;">$</span><span style="animation:blink 1s step-end infinite;">_</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <style>@keyframes blink { 50% { opacity: 0; } }</style>
`,i={render:()=>h()},y=e=>t`
  <section style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:2rem;background:#f8fafc;font-family:system-ui,sans-serif;">
    <div style="width:100%;max-width:40rem;text-align:center;">
      <div style="position:relative;width:160px;height:160px;margin:0 auto 2rem;">
        <svg viewBox="0 0 100 100" style="transform:rotate(-90deg);">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" stroke-width="8"/>
          <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" stroke-width="8" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="${283-283*e.progress/100}"/>
        </svg>
        <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:2rem;font-weight:700;color:#1e293b;">${e.progress}%</span>
      </div>
      <h1 style="font-size:2rem;font-weight:700;margin:0 0 1rem;color:#1e293b;">System Update in Progress</h1>
      <p style="font-size:1.125rem;color:#64748b;margin:0 0 2rem;">Applying security patches and performance improvements.</p>
      <div style="max-width:20rem;margin:0 auto 1.5rem;">
        <div style="height:0.5rem;background:#e2e8f0;border-radius:9999px;overflow:hidden;margin-bottom:0.5rem;">
          <div style="height:100%;background:#3b82f6;border-radius:9999px;width:${e.progress}%;"></div>
        </div>
        <span style="font-size:0.75rem;color:#94a3b8;">${e.progress}% Complete</span>
      </div>
    </div>
  </section>
`,n={args:{progress:65},render:e=>y(e)};var s,o,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Under Maintenance',
    description: "We're currently performing scheduled maintenance. We'll be back online shortly.",
    estimatedTime: '2 hours',
    contactEmail: 'support@acmecorp.com'
  },
  render: args => renderMaintenance(args)
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var d,c,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => renderTechnical()
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    progress: 65
  },
  render: args => renderProgress(args)
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const b=["Default","Technical","Progress"];export{r as Default,n as Progress,i as Technical,b as __namedExportsOrder,v as default};
