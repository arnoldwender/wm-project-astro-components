import{b as r}from"./lit-element-CdmuTPXr.js";const $={title:"UI/Accordion",tags:["autodocs"],parameters:{docs:{description:{component:`
Collapsible content sections following WAI-ARIA Accordion pattern.

Features:
- Single or multiple open items
- Keyboard navigation (Arrow keys, Home, End)
- Smooth height animations
- Icon position customization (left/right)
- Four visual variants (default, bordered, separated, ghost)
- Three sizes (sm, md, lg)
- Reduced motion support
- Nested accordions support
        `}}},argTypes:{type:{control:{type:"select"},options:["single","multiple"],description:"Single or multiple items open at once"},variant:{control:{type:"select"},options:["default","bordered","separated","ghost"],description:"Visual style variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of accordion text and padding"},iconPosition:{control:{type:"select"},options:["left","right"],description:"Position of the expand/collapse chevron icon"},collapsible:{control:"boolean",description:"Whether the active item can be collapsed"}}},w=r`
  <style>
    .accordion-root { font-family: system-ui, -apple-system, sans-serif; max-width: 600px; }
    .accordion-item { background-color: #fff; }
    .accordion-root.bordered { border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; }
    .accordion-root.bordered .accordion-item + .accordion-item { border-top: 1px solid #e2e8f0; }
    .accordion-root.separated .accordion-item { border: 1px solid #e2e8f0; border-radius: 0.5rem; overflow: hidden; margin-bottom: 0.5rem; }
    .accordion-root.default .accordion-item + .accordion-item { border-top: 1px solid #e2e8f0; }
    .accordion-trigger {
      display: flex; align-items: center; width: 100%; padding: 1rem;
      font-weight: 500; color: #1e293b; background: transparent; border: none;
      cursor: pointer; text-align: left; transition: background-color 0.15s ease-out;
    }
    .accordion-trigger:hover { background-color: #f8fafc; }
    .accordion-trigger.icon-right { justify-content: space-between; }
    .accordion-trigger.icon-left .accordion-icon { margin-right: 0.75rem; order: -1; }
    .accordion-icon {
      flex-shrink: 0; width: 1.25rem; height: 1.25rem; color: #94a3b8;
      transition: transform 0.2s ease-out;
    }
    .accordion-trigger[aria-expanded="true"] .accordion-icon { transform: rotate(180deg); }
    .accordion-content-inner { padding: 0 1rem 1rem; color: #64748b; line-height: 1.6; }
    .accordion-trigger.sm { padding: 0.75rem; font-size: 0.875rem; }
    .accordion-trigger.lg { padding: 1.25rem; font-size: 1.125rem; }
  </style>
`,a=o=>{const x=o.variant||"default",e=o.iconPosition||"right",c=o.size||"md";return r`
    ${w}
    <div class="accordion-root ${x}">
      <div class="accordion-item">
        <h3>
          <button type="button" class="accordion-trigger icon-${e} ${c}" aria-expanded="true">
            ${e==="left"?r`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`:""}
            <span style="flex:1; text-align:left;">What services do you offer?</span>
            ${e==="right"?r`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`:""}
          </button>
        </h3>
        <div class="accordion-content">
          <div class="accordion-content-inner">
            We provide web design, SEO optimization, and digital marketing services
            tailored to small and medium businesses.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3>
          <button type="button" class="accordion-trigger icon-${e} ${c}" aria-expanded="false">
            ${e==="left"?r`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`:""}
            <span style="flex:1; text-align:left;">How long does a project take?</span>
            ${e==="right"?r`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`:""}
          </button>
        </h3>
      </div>
      <div class="accordion-item">
        <h3>
          <button type="button" class="accordion-trigger icon-${e} ${c}" aria-expanded="false">
            ${e==="left"?r`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`:""}
            <span style="flex:1; text-align:left;">Do you offer ongoing support?</span>
            ${e==="right"?r`
              <svg class="accordion-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>`:""}
          </button>
        </h3>
      </div>
    </div>
  `},n={args:{type:"single",variant:"default",size:"md",iconPosition:"right",collapsible:!0},render:o=>a(o)},t={args:{type:"single",variant:"bordered",size:"md",iconPosition:"right",collapsible:!0},render:o=>a(o)},i={args:{type:"multiple",variant:"separated",size:"md",iconPosition:"right",collapsible:!0},render:o=>a(o)},s={args:{type:"single",variant:"bordered",size:"md",iconPosition:"left",collapsible:!0},render:o=>a(o)};var d,l,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'default',
    size: 'md',
    iconPosition: 'right',
    collapsible: true
  },
  render: args => renderAccordion(args)
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,u,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'bordered',
    size: 'md',
    iconPosition: 'right',
    collapsible: true
  },
  render: args => renderAccordion(args)
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,h,v;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'multiple',
    variant: 'separated',
    size: 'md',
    iconPosition: 'right',
    collapsible: true
  },
  render: args => renderAccordion(args)
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,y,k;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'single',
    variant: 'bordered',
    size: 'md',
    iconPosition: 'left',
    collapsible: true
  },
  render: args => renderAccordion(args)
}`,...(k=(y=s.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const P=["Default","Bordered","Separated","IconLeft"];export{t as Bordered,n as Default,s as IconLeft,i as Separated,P as __namedExportsOrder,$ as default};
