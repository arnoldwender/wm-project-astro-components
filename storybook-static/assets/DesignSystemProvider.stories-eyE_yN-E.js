import{b as s}from"./lit-element-CdmuTPXr.js";const $={title:"Design System/DesignSystemProvider",tags:["autodocs"],parameters:{docs:{description:{component:`
The Design System Provider injects design tokens, base styles, and utilities globally. Features include:
- Three-tier token system (primitive, semantic, component)
- Automatic dark mode support with system preference detection
- Responsive and fluid typography
- Comprehensive utility classes
- Modern CSS reset
- Five theme presets: default, minimal, rounded, corporate, playful
- Custom token overrides via props
- Theme toggle API exposed on window.theme
        `}}},argTypes:{preset:{control:"select",options:["default","minimal","rounded","corporate","playful"],description:"Theme preset"},darkMode:{control:"boolean",description:"Enable dark mode support"},includeReset:{control:"boolean",description:"Include CSS reset"},includeTypography:{control:"boolean",description:"Include typography styles"}}},S={default:"Standard design tokens with balanced border-radius and shadows.",minimal:"Sharp edges, minimal shadows -- clean and technical aesthetic.",rounded:"Generous border-radius for a soft, approachable feel.",corporate:"Professional blue palette with Inter font stack.",playful:"Purple primary with extra-rounded corners and vibrant energy."},c={default:{primary:"#3b82f6",radius:"0.375rem"},minimal:{primary:"#3b82f6",radius:"2px"},rounded:{primary:"#3b82f6",radius:"1rem"},corporate:{primary:"#4055e5",radius:"0.375rem"},playful:{primary:"#8b5cf6",radius:"1rem"}},i=e=>{const n=e.preset,r=c[n]||c.default;return s`
    <style>
      .ds-demo { padding: 2rem; font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; }
      .ds-preset { display: inline-block; padding: 0.25rem 0.75rem; background: ${r.primary}; color: white; border-radius: ${r.radius}; font-size: 0.875rem; font-weight: 600; margin-bottom: 1rem; }
      .ds-desc { color: #6b7280; margin-bottom: 2rem; line-height: 1.6; }
      .ds-section { margin-bottom: 2rem; }
      .ds-section-title { font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #6b7280; margin-bottom: 0.75rem; }
      .ds-colors { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      .ds-color { width: 3rem; height: 3rem; border-radius: ${r.radius}; }
      .ds-radii { display: flex; gap: 1rem; align-items: center; }
      .ds-radius-box { width: 4rem; height: 4rem; background: ${r.primary}; }
      .ds-radius-label { font-size: 0.75rem; color: #6b7280; text-align: center; margin-top: 0.25rem; }
      .ds-buttons { display: flex; gap: 0.75rem; flex-wrap: wrap; }
      .ds-btn { padding: 0.625rem 1.25rem; border: none; border-radius: ${r.radius}; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
      .ds-btn-primary { background: ${r.primary}; color: white; }
      .ds-btn-secondary { background: #f3f4f6; color: #374151; }
      .ds-btn-outline { background: transparent; color: ${r.primary}; border: 1px solid ${r.primary}; }
      .ds-card { padding: 1.5rem; background: #fff; border: 1px solid #e5e7eb; border-radius: ${r.radius}; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .ds-card h3 { margin: 0 0 0.5rem; font-size: 1rem; font-weight: 600; }
      .ds-card p { margin: 0; font-size: 0.875rem; color: #6b7280; }
      .ds-features { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
      .ds-feature { padding: 0.25rem 0.5rem; background: #f3f4f6; border-radius: 0.25rem; font-size: 0.75rem; color: #6b7280; }
    </style>
    <div class="ds-demo">
      <span class="ds-preset">Preset: ${n}</span>
      <p class="ds-desc">${S[n]}</p>

      <div class="ds-section">
        <div class="ds-section-title">Colors</div>
        <div class="ds-colors">
          <div class="ds-color" style="background: ${r.primary};"></div>
          <div class="ds-color" style="background: #10b981;"></div>
          <div class="ds-color" style="background: #f59e0b;"></div>
          <div class="ds-color" style="background: #ef4444;"></div>
          <div class="ds-color" style="background: #6b7280;"></div>
          <div class="ds-color" style="background: #111827;"></div>
        </div>
      </div>

      <div class="ds-section">
        <div class="ds-section-title">Border Radius</div>
        <div class="ds-radii">
          ${["0",r.radius,"9999px"].map(l=>s`
            <div>
              <div class="ds-radius-box" style="border-radius: ${l};"></div>
              <div class="ds-radius-label">${l}</div>
            </div>
          `)}
        </div>
      </div>

      <div class="ds-section">
        <div class="ds-section-title">Buttons</div>
        <div class="ds-buttons">
          <button class="ds-btn ds-btn-primary">Primary</button>
          <button class="ds-btn ds-btn-secondary">Secondary</button>
          <button class="ds-btn ds-btn-outline">Outline</button>
        </div>
      </div>

      <div class="ds-section">
        <div class="ds-section-title">Card Component</div>
        <div class="ds-card">
          <h3>Sample Card</h3>
          <p>This card inherits all design tokens from the active preset.</p>
        </div>
      </div>

      <div class="ds-features">
        ${e.includeReset?s`<span class="ds-feature">CSS Reset</span>`:""}
        ${e.includeTypography?s`<span class="ds-feature">Typography</span>`:""}
        ${e.darkMode?s`<span class="ds-feature">Dark Mode</span>`:""}
        <span class="ds-feature">Design Tokens</span>
        <span class="ds-feature">Utilities</span>
      </div>
    </div>
  `},a={args:{preset:"default",darkMode:!0,includeReset:!0,includeTypography:!0},render:e=>i(e)},d={args:{preset:"minimal",darkMode:!0,includeReset:!0,includeTypography:!0},render:e=>i(e)},t={args:{preset:"playful",darkMode:!0,includeReset:!0,includeTypography:!0},render:e=>i(e)},o={args:{preset:"corporate",darkMode:!0,includeReset:!0,includeTypography:!0},render:e=>i(e)};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    preset: 'default',
    darkMode: true,
    includeReset: true,
    includeTypography: true
  },
  render: args => renderDesignSystem(args)
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,y,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    preset: 'minimal',
    darkMode: true,
    includeReset: true,
    includeTypography: true
  },
  render: args => renderDesignSystem(args)
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,v,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    preset: 'playful',
    darkMode: true,
    includeReset: true,
    includeTypography: true
  },
  render: args => renderDesignSystem(args)
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var k,w,x;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    preset: 'corporate',
    darkMode: true,
    includeReset: true,
    includeTypography: true
  },
  render: args => renderDesignSystem(args)
}`,...(x=(w=o.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const M=["Default","Minimal","Playful","Corporate"];export{o as Corporate,a as Default,d as Minimal,t as Playful,M as __namedExportsOrder,$ as default};
