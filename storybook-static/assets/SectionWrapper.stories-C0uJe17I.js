import{b as n}from"./lit-element-CdmuTPXr.js";const u={title:"Sections/SectionWrapper",tags:["autodocs"],parameters:{docs:{description:{component:"Base wrapper for all sections. Eight background themes, six padding presets, six container widths, optional section ID for anchor linking."}}},argTypes:{background:{control:"select",options:["transparent","subtle","muted","dark","primary","pattern"]},padding:{control:"select",options:["sm","md","lg","xl"]}}},e={render:()=>n`
    <section style="padding:4rem 0;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Section Content</h2>
        <p style="color:#64748b;">This is a basic section wrapper with default transparent background and large padding.</p>
      </div>
    </section>
  `},r={render:()=>n`
    <section style="padding:4rem 0;background:#f8fafc;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Subtle Background</h2>
        <p style="color:#64748b;">A section with a subtle gray background for visual separation.</p>
      </div>
    </section>
  `},t={render:()=>n`
    <section style="padding:4rem 0;background:#1e293b;color:white;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Dark Background</h2>
        <p style="color:rgba(255,255,255,0.7);">A dark section for contrast and emphasis.</p>
      </div>
    </section>
  `};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 0;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Section Content</h2>
        <p style="color:#64748b;">This is a basic section wrapper with default transparent background and large padding.</p>
      </div>
    </section>
  \`
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 0;background:#f8fafc;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Subtle Background</h2>
        <p style="color:#64748b;">A section with a subtle gray background for visual separation.</p>
      </div>
    </section>
  \`
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,l,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <section style="padding:4rem 0;background:#1e293b;color:white;font-family:system-ui,sans-serif;">
      <div style="max-width:72rem;margin:0 auto;padding:0 2rem;">
        <h2 style="font-size:2rem;font-weight:700;margin:0 0 1rem;">Dark Background</h2>
        <p style="color:rgba(255,255,255,0.7);">A dark section for contrast and emphasis.</p>
      </div>
    </section>
  \`
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const f=["Default","SubtleBackground","DarkBackground"];export{t as DarkBackground,e as Default,r as SubtleBackground,f as __namedExportsOrder,u as default};
