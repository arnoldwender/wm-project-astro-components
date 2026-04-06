import{b as l}from"./lit-element-CdmuTPXr.js";const g={title:"Sections/MegaMenuSection",tags:["autodocs"],parameters:{docs:{description:{component:`
Advanced mega menu navigation with rich content support. Features:
- Six layout variants (default, featured, tabs, columns, cards, full)
- Hover and click toggle with smooth open/close animations
- Keyboard navigation and Escape key dismiss
- Mobile bottom-sheet fallback
        `}}},argTypes:{variant:{control:"select",options:["default","featured","tabs","columns","cards","full"],description:"Layout variant"},trigger:{control:"text",description:"Trigger button text"}}},m=t=>l`
  <div style="position:relative;padding:2rem;font-family:system-ui,sans-serif;">
    <button type="button" style="display:flex;align-items:center;gap:0.25rem;padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:500;color:#1e293b;background:transparent;border:1px solid #e2e8f0;border-radius:0.5rem;cursor:pointer;">
      <span>${t.trigger}</span>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
    </button>
    <div style="margin-top:0.5rem;min-width:600px;background:#fff;border:1px solid #e2e8f0;border-radius:0.75rem;box-shadow:0 10px 40px rgba(0,0,0,0.1);padding:1.5rem;">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;">
        <div>
          <h3 style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin:0 0 0.75rem;padding-bottom:0.5rem;border-bottom:1px solid #f1f5f9;">Platform</h3>
          <ul style="list-style:none;padding:0;margin:0;">
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Analytics</a></li>
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Automation</a></li>
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Integrations</a></li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin:0 0 0.75rem;padding-bottom:0.5rem;border-bottom:1px solid #f1f5f9;">Solutions</h3>
          <ul style="list-style:none;padding:0;margin:0;">
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Enterprise <span style="font-size:0.625rem;font-weight:600;text-transform:uppercase;padding:0.125rem 0.375rem;background:#3b82f6;color:white;border-radius:9999px;margin-left:0.5rem;">New</span></a></li>
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Startups</a></li>
          </ul>
        </div>
        <div>
          <h3 style="font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin:0 0 0.75rem;padding-bottom:0.5rem;border-bottom:1px solid #f1f5f9;">Resources</h3>
          <ul style="list-style:none;padding:0;margin:0;">
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Documentation</a></li>
            <li><a href="#" style="display:block;padding:0.5rem 0.75rem;border-radius:0.5rem;text-decoration:none;font-size:0.875rem;font-weight:500;color:#1e293b;">Blog</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`,e={args:{trigger:"Products",variant:"default"},render:t=>m(t)},r={args:{trigger:"Resources",variant:"featured"},render:()=>l`
    <div style="position:relative;padding:2rem;font-family:system-ui,sans-serif;">
      <button type="button" style="padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:500;color:#1e293b;background:transparent;border:1px solid #e2e8f0;border-radius:0.5rem;cursor:pointer;">Resources</button>
      <div style="margin-top:0.5rem;min-width:600px;background:#fff;border:1px solid #e2e8f0;border-radius:0.75rem;box-shadow:0 10px 40px rgba(0,0,0,0.1);padding:1.5rem;display:grid;grid-template-columns:2fr 1fr;gap:2rem;">
        <div>
          <h3 style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:#94a3b8;margin:0 0 0.75rem;">Learn</h3>
          <a href="#" style="display:block;padding:0.5rem;font-size:0.875rem;color:#1e293b;text-decoration:none;">Blog</a>
          <a href="#" style="display:block;padding:0.5rem;font-size:0.875rem;color:#1e293b;text-decoration:none;">Guides</a>
        </div>
        <div style="background:#f8fafc;border-radius:0.75rem;padding:1.5rem;">
          <h3 style="font-size:1rem;font-weight:600;margin:0 0 0.5rem;color:#1e293b;">Getting Started Guide</h3>
          <p style="font-size:0.875rem;color:#64748b;margin:0 0 1rem;">Everything you need to launch in 10 minutes.</p>
          <a href="#" style="font-size:0.875rem;font-weight:500;color:#3b82f6;text-decoration:none;">Learn more &rarr;</a>
        </div>
      </div>
    </div>
  `};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    trigger: 'Products',
    variant: 'default'
  },
  render: args => renderMegaMenu(args)
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var n,s,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    trigger: 'Resources',
    variant: 'featured'
  },
  render: () => html\`
    <div style="position:relative;padding:2rem;font-family:system-ui,sans-serif;">
      <button type="button" style="padding:0.5rem 0.75rem;font-size:0.875rem;font-weight:500;color:#1e293b;background:transparent;border:1px solid #e2e8f0;border-radius:0.5rem;cursor:pointer;">Resources</button>
      <div style="margin-top:0.5rem;min-width:600px;background:#fff;border:1px solid #e2e8f0;border-radius:0.75rem;box-shadow:0 10px 40px rgba(0,0,0,0.1);padding:1.5rem;display:grid;grid-template-columns:2fr 1fr;gap:2rem;">
        <div>
          <h3 style="font-size:0.75rem;font-weight:600;text-transform:uppercase;color:#94a3b8;margin:0 0 0.75rem;">Learn</h3>
          <a href="#" style="display:block;padding:0.5rem;font-size:0.875rem;color:#1e293b;text-decoration:none;">Blog</a>
          <a href="#" style="display:block;padding:0.5rem;font-size:0.875rem;color:#1e293b;text-decoration:none;">Guides</a>
        </div>
        <div style="background:#f8fafc;border-radius:0.75rem;padding:1.5rem;">
          <h3 style="font-size:1rem;font-weight:600;margin:0 0 0.5rem;color:#1e293b;">Getting Started Guide</h3>
          <p style="font-size:0.875rem;color:#64748b;margin:0 0 1rem;">Everything you need to launch in 10 minutes.</p>
          <a href="#" style="font-size:0.875rem;font-weight:500;color:#3b82f6;text-decoration:none;">Learn more &rarr;</a>
        </div>
      </div>
    </div>
  \`
}`,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Default","WithFeatured"];export{e as Default,r as WithFeatured,f as __namedExportsOrder,g as default};
