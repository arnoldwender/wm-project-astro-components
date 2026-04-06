import{b as t}from"./lit-element-CdmuTPXr.js";const m={title:"Media/AudioPlayer",tags:["autodocs"],parameters:{docs:{description:{component:`
A custom-styled audio player with playlist support. Features include:
- Single track and multi-track playlist modes with cover art
- Playback controls: play/pause, rewind/forward 10s, prev/next track
- Variable speed (0.5x to 2x) and volume control with mute toggle
- Keyboard shortcuts: Space (play), arrows (seek/volume)
- Progress bar with buffered indicator and time display
- Accessible and fully keyboard navigable
        `}}},argTypes:{title:{control:"text",description:"Track title"},artist:{control:"text",description:"Artist name"},showPlaylist:{control:"boolean",description:"Show playlist panel"}}},c=e=>t`
  <style>
    .ap { background: #fff; border: 1px solid #e5e7eb; border-radius: 1rem; overflow: hidden; max-width: 500px; margin: 2rem auto; font-family: system-ui, sans-serif; }
    .ap-main { display: flex; gap: 1rem; padding: 1rem; }
    .ap-cover { flex-shrink: 0; width: 5rem; height: 5rem; border-radius: 0.5rem; background: #e5e7eb; display: flex; align-items: center; justify-content: center; color: #9ca3af; }
    .ap-cover svg { width: 2.5rem; height: 2.5rem; }
    .ap-content { flex: 1; display: flex; flex-direction: column; gap: 0.5rem; min-width: 0; }
    .ap-title { font-size: 0.9375rem; font-weight: 600; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ap-artist { font-size: 0.8125rem; color: #6b7280; margin: 0; }
    .ap-progress { display: flex; align-items: center; gap: 0.5rem; }
    .ap-time { font-size: 0.75rem; color: #6b7280; min-width: 2.5rem; font-variant-numeric: tabular-nums; }
    .ap-bar { flex: 1; height: 0.5rem; background: #e5e7eb; border-radius: 9999px; position: relative; overflow: hidden; }
    .ap-fill { position: absolute; top: 0; left: 0; height: 100%; width: 35%; background: #3b82f6; border-radius: 9999px; }
    .ap-controls { display: flex; align-items: center; gap: 0.25rem; }
    .ap-btn { display: flex; align-items: center; justify-content: center; background: transparent; border: none; cursor: pointer; border-radius: 50%; }
    .ap-btn--primary { width: 2.5rem; height: 2.5rem; background: #3b82f6; color: white; }
    .ap-btn--secondary { width: 2rem; height: 2rem; color: #6b7280; }
    .ap-btn--secondary:hover { color: #111; background: #e5e7eb; }
    .ap-btn svg { width: 1rem; height: 1rem; }
    .ap-speed { padding: 0.25rem 0.5rem; font-size: 0.75rem; font-weight: 600; color: #6b7280; background: transparent; border: none; cursor: pointer; border-radius: 0.25rem; }
    .ap-playlist { border-top: 1px solid #e5e7eb; padding: 1rem; }
    .ap-pl-title { font-size: 0.75rem; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.75rem; }
    .ap-pl-item { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem; border-radius: 0.5rem; cursor: pointer; }
    .ap-pl-item:hover { background: #e5e7eb; }
    .ap-pl-item.active { background: rgba(59,130,246,0.1); }
    .ap-pl-num { width: 1.5rem; font-size: 0.75rem; color: #6b7280; text-align: center; }
    .ap-pl-info { flex: 1; }
    .ap-pl-track { font-size: 0.875rem; font-weight: 500; }
    .ap-pl-dur { font-size: 0.75rem; color: #6b7280; font-variant-numeric: tabular-nums; }
  </style>
  <div class="ap">
    <div class="ap-main">
      <div class="ap-cover">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        </svg>
      </div>
      <div class="ap-content">
        <div>
          <h3 class="ap-title">${e.title}</h3>
          <p class="ap-artist">${e.artist}</p>
        </div>
        <div class="ap-progress">
          <span class="ap-time">1:24</span>
          <div class="ap-bar"><div class="ap-fill"></div></div>
          <span class="ap-time">3:42</span>
        </div>
        <div class="ap-controls">
          <button class="ap-btn ap-btn--secondary" aria-label="10 Sekunden zurueck">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 19l-7-7 7-7"/></svg>
          </button>
          <button class="ap-btn ap-btn--primary" aria-label="Abspielen">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </button>
          <button class="ap-btn ap-btn--secondary" aria-label="10 Sekunden vorwaerts">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 5l7 7-7 7"/></svg>
          </button>
          <button class="ap-speed">1x</button>
        </div>
      </div>
    </div>
    ${e.showPlaylist?t`
      <div class="ap-playlist">
        <h4 class="ap-pl-title">Playlist (3 Tracks)</h4>
        <div class="ap-pl-item active">
          <span class="ap-pl-num">1</span>
          <div class="ap-pl-info"><span class="ap-pl-track">Welcome</span></div>
          <span class="ap-pl-dur">3:42</span>
        </div>
        <div class="ap-pl-item">
          <span class="ap-pl-num">2</span>
          <div class="ap-pl-info"><span class="ap-pl-track">Our Mission</span></div>
          <span class="ap-pl-dur">5:18</span>
        </div>
        <div class="ap-pl-item">
          <span class="ap-pl-num">3</span>
          <div class="ap-pl-info"><span class="ap-pl-track">Q&A Session</span></div>
          <span class="ap-pl-dur">12:05</span>
        </div>
      </div>
    `:""}
  </div>
`,a={args:{title:"Episode 1: Introduction",artist:"Acme Corp Podcast",showPlaylist:!1},render:e=>c(e)},r={args:{title:"Welcome",artist:"Acme Corp",showPlaylist:!0},render:e=>c(e)};var s,i,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Episode 1: Introduction',
    artist: 'Acme Corp Podcast',
    showPlaylist: false
  },
  render: args => renderAudioPlayer(args)
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Welcome',
    artist: 'Acme Corp',
    showPlaylist: true
  },
  render: args => renderAudioPlayer(args)
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const u=["SingleTrack","WithPlaylist"];export{a as SingleTrack,r as WithPlaylist,u as __namedExportsOrder,m as default};
