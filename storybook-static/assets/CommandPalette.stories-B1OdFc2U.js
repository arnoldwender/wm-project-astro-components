import{b as t}from"./lit-element-CdmuTPXr.js";const k={title:"UI/CommandPalette",tags:["autodocs"],parameters:{docs:{description:{component:`
Fast, keyboard-driven search interface (Cmd/Ctrl+K) for navigation and actions.

Features:
- Global keyboard shortcut (Cmd/Ctrl + K)
- Fuzzy search with text highlighting
- Grouped results with categories
- Keyboard navigation (arrow keys, Enter, Escape)
- Custom actions and shortcut badges
- Empty state with visual feedback
- Backdrop with blur overlay
- Reduced motion support
        `}}},argTypes:{placeholder:{control:"text",description:"Search input placeholder text"},maxResults:{control:"number",description:"Maximum results to display"},showRecent:{control:"boolean",description:"Show recent searches section"}}},d=t`
  <style>
    .cmd-palette {
      max-width: 640px; font-family: system-ui, -apple-system, sans-serif;
      background: #fff; border-radius: 0.75rem; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
      border: 1px solid #e2e8f0; overflow: hidden;
    }
    .cmd-header {
      display: flex; align-items: center; gap: 0.75rem; padding: 0 1rem;
      border-bottom: 1px solid #e2e8f0;
    }
    .cmd-header svg { width: 1.25rem; height: 1.25rem; color: #94a3b8; flex-shrink: 0; }
    .cmd-header input {
      flex: 1; padding: 1rem 0; background: transparent; border: none; outline: none;
      font-size: 1.125rem; color: #1e293b;
    }
    .cmd-header input::placeholder { color: #94a3b8; }
    .cmd-header kbd {
      display: flex; align-items: center; padding: 0.25rem 0.5rem; font-size: 0.75rem;
      color: #94a3b8; background: #f8fafc; border-radius: 0.25rem; border: 1px solid #e2e8f0;
    }
    .cmd-results { max-height: 20rem; overflow-y: auto; }
    .cmd-group-title {
      padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.05em; color: #94a3b8;
    }
    .cmd-item {
      display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; cursor: pointer;
      transition: background-color 0.1s ease-out;
    }
    .cmd-item:hover, .cmd-item.selected { background: #f8fafc; }
    .cmd-item.selected { background: #eff6ff; }
    .cmd-item-icon { width: 1.25rem; height: 1.25rem; display: flex; align-items: center; justify-content: center; color: #94a3b8; }
    .cmd-item-label { flex: 1; color: #1e293b; }
    .cmd-item-shortcut {
      margin-left: auto; padding: 0.25rem 0.5rem; font-size: 0.75rem; color: #94a3b8;
      background: #f8fafc; border-radius: 0.25rem; border: 1px solid #e2e8f0; font-family: monospace;
    }
    .cmd-group + .cmd-group { border-top: 1px solid #f1f5f9; }
    .cmd-footer {
      display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 1rem;
      border-top: 1px solid #e2e8f0; background: #f8fafc; font-size: 0.75rem; color: #94a3b8;
    }
    .cmd-footer-keys { display: flex; align-items: center; gap: 1rem; }
    .cmd-footer-keys span { display: flex; align-items: center; gap: 0.25rem; }
    .cmd-footer kbd {
      padding: 0.125rem 0.375rem; background: #fff; border-radius: 0.25rem; border: 1px solid #e2e8f0;
    }
  </style>
`,b=a=>t`
  ${d}
  <div class="cmd-palette">
    <div class="cmd-header">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" placeholder="${a.placeholder||"Type a command or search..."}" />
      <kbd>ESC</kbd>
    </div>
    <div class="cmd-results">
      <div class="cmd-group">
        <div class="cmd-group-title">Pages</div>
        <div class="cmd-item selected" role="option">
          <span class="cmd-item-icon">&#x1F3E0;</span>
          <span class="cmd-item-label">Home</span>
        </div>
        <div class="cmd-item" role="option">
          <span class="cmd-item-icon">&#x1F4CB;</span>
          <span class="cmd-item-label">About</span>
        </div>
        <div class="cmd-item" role="option">
          <span class="cmd-item-icon">&#x1F4DE;</span>
          <span class="cmd-item-label">Contact</span>
        </div>
      </div>
      <div class="cmd-group">
        <div class="cmd-group-title">Actions</div>
        <div class="cmd-item" role="option">
          <span class="cmd-item-icon">&#x1F3A8;</span>
          <span class="cmd-item-label">Toggle Theme</span>
          <span class="cmd-item-shortcut">Ctrl+T</span>
        </div>
        <div class="cmd-item" role="option">
          <span class="cmd-item-icon">&#x1F50D;</span>
          <span class="cmd-item-label">Search</span>
          <span class="cmd-item-shortcut">Ctrl+K</span>
        </div>
      </div>
    </div>
    <div class="cmd-footer">
      <div class="cmd-footer-keys">
        <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
        <span><kbd>&crarr;</kbd> Select</span>
      </div>
      <span><kbd>ESC</kbd> Close</span>
    </div>
  </div>
`,e={args:{placeholder:"Type a command or search...",maxResults:10,showRecent:!0},render:a=>b(a)},s={render:()=>t`
    ${d}
    <div class="cmd-palette">
      <div class="cmd-header">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Type a command or search..." value="xyznotfound" />
        <kbd>ESC</kbd>
      </div>
      <div class="cmd-results" style="padding:2rem; text-align:center; color:#94a3b8;">
        <svg style="width:3rem;height:3rem;margin:0 auto 0.75rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p style="font-weight:500; color:#64748b;">No results found</p>
        <p style="font-size:0.875rem; margin-top:0.25rem;">Try a different search term</p>
      </div>
      <div class="cmd-footer">
        <div class="cmd-footer-keys">
          <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
          <span><kbd>&crarr;</kbd> Select</span>
        </div>
        <span><kbd>ESC</kbd> Close</span>
      </div>
    </div>
  `},r={render:()=>t`
    ${d}
    <div style="position:relative; width:100%; height:400px; background:#f1f5f9; border-radius:0.5rem; display:flex; align-items:flex-start; justify-content:center; padding-top:60px;">
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); border-radius:0.5rem;"></div>
      <div class="cmd-palette" style="position:relative; z-index:1; width:100%; max-width:640px;">
        <div class="cmd-header">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search or jump to..." />
          <kbd>ESC</kbd>
        </div>
        <div class="cmd-results">
          <div class="cmd-group">
            <div class="cmd-group-title">Quick Actions</div>
            <div class="cmd-item selected" role="option">
              <span class="cmd-item-icon">&#x2795;</span>
              <span class="cmd-item-label">New Project</span>
              <span class="cmd-item-shortcut">Ctrl+N</span>
            </div>
            <div class="cmd-item" role="option">
              <span class="cmd-item-icon">&#x1F4E4;</span>
              <span class="cmd-item-label">Import Data</span>
            </div>
          </div>
        </div>
        <div class="cmd-footer">
          <div class="cmd-footer-keys">
            <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
            <span><kbd>&crarr;</kbd> Select</span>
          </div>
          <span><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  `};var o,n,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a command or search...',
    maxResults: 10,
    showRecent: true
  },
  render: args => renderCommandPalette(args)
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    \${paletteStyles}
    <div class="cmd-palette">
      <div class="cmd-header">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Type a command or search..." value="xyznotfound" />
        <kbd>ESC</kbd>
      </div>
      <div class="cmd-results" style="padding:2rem; text-align:center; color:#94a3b8;">
        <svg style="width:3rem;height:3rem;margin:0 auto 0.75rem;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p style="font-weight:500; color:#64748b;">No results found</p>
        <p style="font-size:0.875rem; margin-top:0.25rem;">Try a different search term</p>
      </div>
      <div class="cmd-footer">
        <div class="cmd-footer-keys">
          <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
          <span><kbd>&crarr;</kbd> Select</span>
        </div>
        <span><kbd>ESC</kbd> Close</span>
      </div>
    </div>
  \`
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    \${paletteStyles}
    <div style="position:relative; width:100%; height:400px; background:#f1f5f9; border-radius:0.5rem; display:flex; align-items:flex-start; justify-content:center; padding-top:60px;">
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); border-radius:0.5rem;"></div>
      <div class="cmd-palette" style="position:relative; z-index:1; width:100%; max-width:640px;">
        <div class="cmd-header">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder="Search or jump to..." />
          <kbd>ESC</kbd>
        </div>
        <div class="cmd-results">
          <div class="cmd-group">
            <div class="cmd-group-title">Quick Actions</div>
            <div class="cmd-item selected" role="option">
              <span class="cmd-item-icon">&#x2795;</span>
              <span class="cmd-item-label">New Project</span>
              <span class="cmd-item-shortcut">Ctrl+N</span>
            </div>
            <div class="cmd-item" role="option">
              <span class="cmd-item-icon">&#x1F4E4;</span>
              <span class="cmd-item-label">Import Data</span>
            </div>
          </div>
        </div>
        <div class="cmd-footer">
          <div class="cmd-footer-keys">
            <span><kbd>&uarr;</kbd><kbd>&darr;</kbd> Navigate</span>
            <span><kbd>&crarr;</kbd> Select</span>
          </div>
          <span><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  \`
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};const g=["Default","EmptyState","WithBackdrop"];export{e as Default,s as EmptyState,r as WithBackdrop,g as __namedExportsOrder,k as default};
