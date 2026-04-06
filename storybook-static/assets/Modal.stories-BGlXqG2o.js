import{b as o}from"./lit-element-CdmuTPXr.js";const z={title:"UI/Modal",tags:["autodocs"],parameters:{docs:{description:{component:`
Accessible modal dialog with focus trap, backdrop, and animations.

Features:
- Focus trap and restoration
- Escape key to close
- Backdrop click to close (optional)
- Scroll lock when open
- Five sizes (sm, md, lg, xl, full)
- Five variants (default, centered, sheet-right, sheet-left, sheet-bottom)
- Scale and slide animations
- Nested modals support
- Reduced motion support
        `}}},argTypes:{title:{control:"text",description:"Modal header title"},description:{control:"text",description:"Description below title"},size:{control:{type:"select"},options:["sm","md","lg","xl","full"],description:"Maximum width of the dialog"},variant:{control:{type:"select"},options:["default","centered","sheet-right","sheet-left","sheet-bottom"],description:"Modal positioning and animation variant"},showCloseButton:{control:"boolean",description:"Show close button"}}},k=o`
  <style>
    .modal-demo {
      position: relative; width: 100%; height: 450px; background: #f1f5f9;
      border-radius: 0.5rem; overflow: hidden; font-family: system-ui, -apple-system, sans-serif;
    }
    .modal-backdrop-demo {
      position: absolute; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
    }
    .modal-container-demo {
      position: absolute; inset: 0; display: flex; overflow-y: auto;
    }
    .modal-container-demo.default { align-items: flex-start; justify-content: center; padding: 1rem; padding-top: 3rem; }
    .modal-container-demo.centered { align-items: center; justify-content: center; padding: 1rem; }
    .modal-container-demo.sheet-right { justify-content: flex-end; }
    .modal-dialog-demo {
      position: relative; background: #fff; border-radius: 0.75rem; box-shadow: 0 25px 50px rgba(0,0,0,0.25);
      width: 100%;
    }
    .modal-dialog-demo.sm { max-width: 24rem; }
    .modal-dialog-demo.md { max-width: 32rem; }
    .modal-dialog-demo.lg { max-width: 42rem; }
    .modal-dialog-demo.sheet {
      border-radius: 0.75rem 0 0 0.75rem; height: 100%; max-width: 24rem;
    }
    .modal-close-demo {
      position: absolute; top: 1rem; right: 1rem; padding: 0.375rem; background: none; border: none;
      cursor: pointer; color: #94a3b8; border-radius: 50%; display: flex;
    }
    .modal-close-demo:hover { color: #1e293b; background: #f1f5f9; }
    .modal-close-demo svg { width: 1.25rem; height: 1.25rem; }
    .modal-header-demo { padding: 1.5rem 1.5rem 1rem; }
    .modal-header-demo h2 { font-size: 1.125rem; font-weight: 600; color: #1e293b; margin: 0; padding-right: 2rem; }
    .modal-header-demo p { font-size: 0.875rem; color: #64748b; margin: 0.25rem 0 0; }
    .modal-body-demo { padding: 0 1.5rem 1.5rem; color: #64748b; line-height: 1.6; }
    .modal-footer-demo {
      padding: 1rem 1.5rem; background: #f8fafc; border-radius: 0 0 0.75rem 0.75rem;
      display: flex; align-items: center; justify-content: flex-end; gap: 0.75rem;
    }
    .btn-secondary {
      padding: 0.5rem 1rem; background: #fff; border: 1px solid #e2e8f0; border-radius: 0.375rem;
      font-weight: 500; cursor: pointer; color: #1e293b;
    }
    .btn-primary {
      padding: 0.5rem 1rem; background: #3b82f6; border: none; border-radius: 0.375rem;
      font-weight: 500; cursor: pointer; color: #fff;
    }
  </style>
`,d=e=>{const i=e.variant||"default",y=e.size||"md",x=i.startsWith("sheet");return o`
    ${k}
    <div class="modal-demo">
      <div class="modal-backdrop-demo"></div>
      <div class="modal-container-demo ${i}">
        <div class="modal-dialog-demo ${x?"sheet":y}" role="dialog" aria-modal="true">
          ${e.showCloseButton?o`
            <button class="modal-close-demo" aria-label="Close dialog">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          `:""}
          ${e.title||e.description?o`
            <div class="modal-header-demo">
              ${e.title?o`<h2>${e.title}</h2>`:""}
              ${e.description?o`<p>${e.description}</p>`:""}
            </div>
          `:""}
          <div class="modal-body-demo">
            <p>This is the modal body content area. You can place any HTML, forms, or components here.
            The modal supports keyboard navigation, focus trapping, and screen reader announcements.</p>
          </div>
          <div class="modal-footer-demo">
            <button class="btn-secondary">Cancel</button>
            <button class="btn-primary">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  `},t={args:{title:"Confirm Action",description:"This action cannot be undone.",size:"md",variant:"default",showCloseButton:!0},render:e=>d(e)},r={args:{title:"Delete Item",description:"Are you sure you want to delete this item?",size:"sm",variant:"centered",showCloseButton:!0},render:e=>d(e)},a={args:{title:"Project Details",description:"View and edit project configuration.",size:"lg",variant:"default",showCloseButton:!0},render:e=>d(e)},n={args:{title:"Settings",description:"",size:"md",variant:"sheet-right",showCloseButton:!0},render:e=>d(e)};var s,l,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Confirm Action',
    description: 'This action cannot be undone.',
    size: 'md',
    variant: 'default',
    showCloseButton: true
  },
  render: args => renderModal(args)
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Delete Item',
    description: 'Are you sure you want to delete this item?',
    size: 'sm',
    variant: 'centered',
    showCloseButton: true
  },
  render: args => renderModal(args)
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Project Details',
    description: 'View and edit project configuration.',
    size: 'lg',
    variant: 'default',
    showCloseButton: true
  },
  render: args => renderModal(args)
}`,...(f=(h=a.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,w;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    description: '',
    size: 'md',
    variant: 'sheet-right',
    showCloseButton: true
  },
  render: args => renderModal(args)
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const S=["Default","Centered","Large","SheetRight"];export{r as Centered,t as Default,a as Large,n as SheetRight,S as __namedExportsOrder,z as default};
