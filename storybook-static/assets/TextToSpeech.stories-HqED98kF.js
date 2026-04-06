import{b as t}from"./lit-element-CdmuTPXr.js";const f={title:"Accessibility/TextToSpeech",tags:["autodocs"],parameters:{docs:{description:{component:`
Web Speech API powered text-to-speech controls for page content.

**Features:**
- Play/Pause/Stop controls
- Speed and pitch adjustment
- Voice selection
- Read selected text or full page
- Highlight current sentence
- Three variants: full, compact, floating
        `}}},argTypes:{variant:{control:"select",options:["full","compact","floating"],description:"Toolbar variant"},defaultRate:{control:"number",description:"Default speech rate"},showVoiceSelect:{control:"boolean",description:"Show voice selection dropdown"}}},n=e=>e.variant==="floating"?t`
      <div style="position: relative; min-height: 300px; padding: 2rem; font-family: system-ui, sans-serif;">
        <p style="color: #374151; line-height: 1.7;">Sample text content that would be read aloud by the text-to-speech engine.</p>
        <button style="position: fixed; bottom: 1.5rem; right: 5rem; z-index: 50; width: 3rem; height: 3rem;
                       background: #3b82f6; color: white; border-radius: 50%; border: none; cursor: pointer;
                       box-shadow: 0 10px 15px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center;">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
        </button>
      </div>
    `:t`
    <div style="padding: 2rem; font-family: system-ui, sans-serif;">
      <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05); ${e.variant==="compact"?"max-width: 16rem;":""}">
        <!-- Play/Pause -->
        <button style="width: 2.25rem; height: 2.25rem; border-radius: 50%; background: #3b82f6; color: white; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </button>
        <!-- Stop -->
        <button style="width: 2rem; height: 2rem; border-radius: 0.375rem; background: #f1f5f9; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;">
          <svg width="12" height="12" fill="#64748b" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>
        </button>

        ${e.variant==="full"?t`
          <!-- Rate -->
          <div style="display: flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; color: #64748b;">
            <span>Speed:</span>
            <input type="range" min="0.5" max="2" step="0.1" value="${e.defaultRate||1}" style="width: 4rem;" />
          </div>
          ${e.showVoiceSelect?t`
            <select style="font-size: 0.75rem; padding: 0.25rem; border: 1px solid #e2e8f0; border-radius: 0.25rem;">
              <option>Google Deutsch</option><option>Google English</option>
            </select>
          `:""}
        `:""}
      </div>
    </div>
  `,r={args:{variant:"full",defaultRate:1,showVoiceSelect:!0},render:e=>n(e)},o={args:{variant:"compact",defaultRate:1,showVoiceSelect:!1},render:e=>n(e)},a={args:{variant:"floating",defaultRate:1.2,showVoiceSelect:!1},render:e=>n(e)};var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'full',
    defaultRate: 1,
    showVoiceSelect: true
  },
  render: args => renderTTS(args)
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    defaultRate: 1,
    showVoiceSelect: false
  },
  render: args => renderTTS(args)
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'floating',
    defaultRate: 1.2,
    showVoiceSelect: false
  },
  render: args => renderTTS(args)
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const b=["Full","Compact","Floating"];export{o as Compact,a as Floating,r as Full,b as __namedExportsOrder,f as default};
