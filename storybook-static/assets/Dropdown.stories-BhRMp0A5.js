import{b as r}from"./lit-element-CdmuTPXr.js";const w={title:"UI/Dropdown",tags:["autodocs"],parameters:{docs:{description:{component:`
Accessible dropdown menu and select component following WAI-ARIA patterns.

Features:
- Full keyboard navigation (arrow keys, Home, End, type-ahead)
- Multiple selection support with checkboxes
- Grouped options with section headers
- Search/filter functionality
- Custom option rendering (icons, descriptions)
- Hidden input for form integration
- Three variants (default, ghost, outline)
- Three sizes (sm, md, lg)
- Error state display
- Reduced motion support
        `}}},argTypes:{label:{control:"text",description:"Field label"},placeholder:{control:"text",description:"Placeholder text when no selection"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Trigger button size"},variant:{control:{type:"select"},options:["default","ghost","outline"],description:"Visual style variant"},disabled:{control:"boolean",description:"Disable the dropdown"},error:{control:"text",description:"Error message text"},searchable:{control:"boolean",description:"Enable search/filter"},multiple:{control:"boolean",description:"Allow multiple selections"}}},y=r`
  <style>
    .dd-root {
      position: relative; max-width: 320px; font-family: system-ui, -apple-system, sans-serif;
    }
    .dd-label { display: block; font-size: 0.875rem; font-weight: 500; color: #1e293b; margin-bottom: 0.375rem; }
    .dd-label .required { color: #ef4444; margin-left: 0.125rem; }
    .dd-trigger {
      display: flex; align-items: center; justify-content: space-between; width: 100%;
      height: 2.5rem; padding: 0 0.75rem; background: #fff; border: 1px solid #e2e8f0;
      border-radius: 0.375rem; cursor: pointer; transition: border-color 0.2s; color: #1e293b;
    }
    .dd-trigger:hover { border-color: #94a3b8; }
    .dd-trigger.error { border-color: #ef4444; }
    .dd-trigger.disabled { opacity: 0.5; cursor: not-allowed; }
    .dd-trigger .placeholder { color: #94a3b8; }
    .dd-trigger svg { width: 1rem; height: 1rem; color: #94a3b8; margin-left: 0.5rem; }
    .dd-error { margin-top: 0.25rem; font-size: 0.875rem; color: #ef4444; }
    .dd-panel {
      position: absolute; z-index: 10; width: 100%; margin-top: 0.25rem; background: #fff;
      border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.1); border: 1px solid #e2e8f0;
      overflow: hidden;
    }
    .dd-search {
      padding: 0.5rem; border-bottom: 1px solid #e2e8f0;
    }
    .dd-search input {
      width: 100%; padding: 0.5rem 0.75rem; font-size: 0.875rem; background: #f8fafc;
      border: 1px solid #e2e8f0; border-radius: 0.375rem; outline: none;
    }
    .dd-list { padding: 0.25rem 0; max-height: 200px; overflow-y: auto; list-style: none; margin: 0; }
    .dd-option {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0.75rem; cursor: pointer;
      transition: background 0.1s;
    }
    .dd-option:hover, .dd-option.focused { background: #f8fafc; }
    .dd-option.selected { background: #f8fafc; }
    .dd-option .icon { flex-shrink: 0; }
    .dd-option .text { flex: 1; }
    .dd-option .desc { font-size: 0.75rem; color: #94a3b8; }
    .dd-option .check { width: 1rem; height: 1rem; color: #3b82f6; opacity: 0; }
    .dd-option.selected .check { opacity: 1; }
    .dd-group-title {
      padding: 0.5rem 0.75rem; font-size: 0.75rem; font-weight: 600; color: #94a3b8;
      text-transform: uppercase; letter-spacing: 0.05em;
    }
  </style>
`,t=e=>r`
  ${y}
  <div class="dd-root">
    ${e.label?r`
      <label class="dd-label">${e.label}<span class="required">*</span></label>
    `:""}
    <button class="dd-trigger ${e.error?"error":""} ${e.disabled?"disabled":""}">
      <span class="placeholder">${e.placeholder||"Select an option"}</span>
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    ${e.error?r`<p class="dd-error" role="alert">${e.error}</p>`:""}
    <div class="dd-panel">
      ${e.searchable?r`
        <div class="dd-search">
          <input type="text" placeholder="Search..." />
        </div>
      `:""}
      <ul class="dd-list" role="listbox">
        <li class="dd-option focused" role="option" aria-selected="false">
          <span class="icon">&#x1F1E9;&#x1F1EA;</span>
          <div class="text">Germany</div>
          <svg class="check" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </li>
        <li class="dd-option" role="option" aria-selected="false">
          <span class="icon">&#x1F1E6;&#x1F1F9;</span>
          <div class="text">Austria</div>
          <svg class="check" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </li>
        <li class="dd-option" role="option" aria-selected="false">
          <span class="icon">&#x1F1E8;&#x1F1ED;</span>
          <div class="text">Switzerland</div>
          <svg class="check" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
        </li>
      </ul>
    </div>
  </div>
`,o={args:{label:"Country",placeholder:"Choose a country",size:"md",variant:"default",disabled:!1,error:"",searchable:!1,multiple:!1},render:e=>t(e)},a={args:{label:"Country",placeholder:"Choose a country",size:"md",variant:"default",disabled:!1,error:"",searchable:!0,multiple:!1},render:e=>t(e)},l={args:{label:"Country",placeholder:"Choose a country",size:"md",variant:"default",disabled:!1,error:"Please select a country",searchable:!1,multiple:!1},render:e=>t(e)},s={args:{label:"Country",placeholder:"Choose a country",size:"md",variant:"default",disabled:!0,error:"",searchable:!1,multiple:!1},render:e=>t(e)};var d,n,i;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    placeholder: 'Choose a country',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: '',
    searchable: false,
    multiple: false
  },
  render: args => renderDropdown(args)
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    placeholder: 'Choose a country',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: '',
    searchable: true,
    multiple: false
  },
  render: args => renderDropdown(args)
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    placeholder: 'Choose a country',
    size: 'md',
    variant: 'default',
    disabled: false,
    error: 'Please select a country',
    searchable: false,
    multiple: false
  },
  render: args => renderDropdown(args)
}`,...(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Country',
    placeholder: 'Choose a country',
    size: 'md',
    variant: 'default',
    disabled: true,
    error: '',
    searchable: false,
    multiple: false
  },
  render: args => renderDropdown(args)
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const z=["Default","WithSearch","WithError","Disabled"];export{o as Default,s as Disabled,l as WithError,a as WithSearch,z as __namedExportsOrder,w as default};
