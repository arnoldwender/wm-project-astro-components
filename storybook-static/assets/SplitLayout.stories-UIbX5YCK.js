import{b as w}from"./lit-element-CdmuTPXr.js";const x={title:"Layouts/SplitLayout",tags:["autodocs"],parameters:{docs:{description:{component:`
Two-column split layout with flexible content and media placement.

**Features:**
- Reversible columns (content left/right)
- Seven ratio options (1:1, 1:2, 2:1, 3:2, etc.)
- Vertical alignment options (top, center, bottom, stretch)
- Sticky media option
- Full-bleed media on mobile
- Configurable background and min-height
        `}}},argTypes:{reverse:{control:"boolean",description:"Reverse column order"},ratio:{control:"select",options:["1:1","1:2","2:1","3:2","2:3"],description:"Column ratio"},verticalAlign:{control:"select",options:["top","center","bottom","stretch"],description:"Vertical alignment"},gap:{control:"select",options:["none","sm","md","lg","xl"],description:"Gap between columns"}}},o=e=>{const f={"1:1":"1fr 1fr","1:2":"1fr 2fr","2:1":"2fr 1fr","3:2":"3fr 2fr","2:3":"2fr 3fr"},v={none:"0",sm:"1rem",md:"2rem",lg:"3rem",xl:"4rem"},b={top:"start",center:"center",bottom:"end",stretch:"stretch"},s=f[e.ratio]||"1fr 1fr",h=v[e.gap]||"3rem",y=b[e.verticalAlign]||"center";return w`
    <section style="display: grid; grid-template-columns: ${e.reverse?s.split(" ").reverse().join(" "):s}; gap: ${h}; align-items: ${y}; padding: 3rem 2rem; font-family: system-ui, sans-serif;">
      <!-- Content -->
      <div style="padding: 2rem; ${e.reverse?"order: 2;":""}">
        <span style="font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #3b82f6;">About Us</span>
        <h2 style="font-size: 2.25rem; font-weight: 700; margin: 0.75rem 0 1rem; line-height: 1.2;">Building the future of web development</h2>
        <p style="color: #64748b; line-height: 1.7; margin: 0 0 1.5rem;">We create modern, accessible websites that drive results for businesses of all sizes. Our approach combines cutting-edge technology with proven design principles.</p>
        <button style="padding: 0.875rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Learn More</button>
      </div>

      <!-- Media -->
      <div style="background: #e2e8f0; border-radius: 1rem; min-height: 300px; ${e.verticalAlign==="stretch"?"height: 100%;":""} display: flex; align-items: center; justify-content: center; color: #94a3b8; font-weight: 600; ${e.reverse?"order: 1;":""}">
        Media Slot
      </div>
    </section>
  `},r={args:{reverse:!1,ratio:"1:1",verticalAlign:"center",gap:"lg"},render:e=>o(e)},t={args:{reverse:!0,ratio:"1:1",verticalAlign:"center",gap:"lg"},render:e=>o(e)},n={args:{reverse:!1,ratio:"2:1",verticalAlign:"center",gap:"xl"},render:e=>o(e)};var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    reverse: false,
    ratio: '1:1',
    verticalAlign: 'center',
    gap: 'lg'
  },
  render: args => renderSplitLayout(args)
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    reverse: true,
    ratio: '1:1',
    verticalAlign: 'center',
    gap: 'lg'
  },
  render: args => renderSplitLayout(args)
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,m,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    reverse: false,
    ratio: '2:1',
    verticalAlign: 'center',
    gap: 'xl'
  },
  render: args => renderSplitLayout(args)
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["Default","Reversed","WideContent"];export{r as Default,t as Reversed,n as WideContent,A as __namedExportsOrder,x as default};
