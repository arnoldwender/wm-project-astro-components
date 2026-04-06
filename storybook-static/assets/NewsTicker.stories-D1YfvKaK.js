import{b as r}from"./lit-element-CdmuTPXr.js";const D={title:"UI/NewsTicker",tags:["autodocs"],parameters:{docs:{description:{component:`
Animated horizontal scrolling ticker for announcements, news, or promotions.

Features:
- Infinite smooth scrolling animation
- Three speed options (slow, normal, fast)
- Pause on hover
- Six visual variants (default, highlight, urgent, success, dark, gradient)
- Optional dot separator between items
- Icon and badge support per item
- Pause/play controls
- Optional label section
- RTL support
- Reduced motion fallback (horizontal scroll)
        `}}},argTypes:{variant:{control:{type:"select"},options:["default","highlight","urgent","success","dark","gradient"],description:"Visual color variant"},speed:{control:{type:"select"},options:["slow","normal","fast"],description:"Scrolling speed"},pauseOnHover:{control:"boolean",description:"Pause animation on mouse hover"},showLabel:{control:"boolean",description:"Show a fixed label section"}}},$={default:{bg:"#f8fafc",text:"#1e293b"},highlight:{bg:"#3b82f6",text:"#ffffff"},urgent:{bg:"#ef4444",text:"#ffffff"},success:{bg:"#22c55e",text:"#ffffff"},dark:{bg:"#0f172a",text:"#f1f5f9"},gradient:{bg:"linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)",text:"#ffffff"}},S={slow:"60s",normal:"40s",fast:"25s"},i=e=>{const l=e.variant||"default",O=e.speed||"normal",a=$[l],H=S[O],c=[{icon:"&#x1F4E2;",text:"New feature: Command Palette now available"},{icon:"&#x1F389;",text:"Sale: 20% off all services this month"},{icon:"&#x1F4C8;",text:"Performance improved by 35% in latest update"},{icon:"&#x26A0;",text:"Scheduled maintenance on Sunday, 2:00 AM"},{icon:"&#x2728;",text:"Version 3.0 released with new components"}];return r`
    <style>
      .ticker-demo {
        position: relative; overflow: hidden; padding: 0.625rem 0;
        font-family: system-ui, -apple-system, sans-serif;
        background: ${a.bg}; color: ${a.text};
      }
      .ticker-track-demo {
        display: flex; align-items: center; white-space: nowrap;
        animation: ticker-scroll-demo ${H} linear infinite;
      }
      .ticker-demo:hover .ticker-track-demo {
        animation-play-state: ${e.pauseOnHover?"paused":"running"};
      }
      @keyframes ticker-scroll-demo {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .ticker-item-demo { display: inline-flex; align-items: center; gap: 0.5rem; }
      .ticker-sep-demo { margin: 0 1rem; opacity: 0.5; }
      .ticker-label-demo {
        position: absolute; left: 0; top: 0; bottom: 0; z-index: 1;
        display: flex; align-items: center; padding: 0 1rem; font-weight: 600;
        background: inherit;
      }
      .ticker-label-demo::after {
        content: ''; position: absolute; right: -2rem; top: 0; bottom: 0; width: 2rem;
        background: linear-gradient(to right, ${l==="gradient"?"#3b82f6":a.bg.split(",")[0].replace("linear-gradient(90deg","").trim()||a.bg}, transparent);
      }
      .ticker-pulse { display: inline-flex; width: 0.5rem; height: 0.5rem; border-radius: 50%; background: currentColor; margin-right: 0.5rem; animation: pulse-demo 1.5s ease-in-out infinite; }
      @keyframes pulse-demo { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    </style>
    <div class="ticker-demo" role="marquee" aria-label="News ticker">
      ${e.showLabel?r`
        <div class="ticker-label-demo">
          ${l==="urgent"?r`<span class="ticker-pulse"></span>`:""}
          Breaking
        </div>
      `:""}
      <div class="ticker-track-demo" style="${e.showLabel?"padding-left:7rem;":""}">
        ${[...c,...c].map((d,L)=>r`
          <span class="ticker-item-demo">
            ${L>0?r`<span class="ticker-sep-demo">&bull;</span>`:""}
            <span>${d.icon}</span>
            <span>${d.text}</span>
          </span>
        `)}
      </div>
    </div>
  `},t={args:{variant:"default",speed:"normal",pauseOnHover:!0,showLabel:!1},render:e=>i(e)},n={args:{variant:"urgent",speed:"fast",pauseOnHover:!0,showLabel:!0},render:e=>i(e)},s={args:{variant:"dark",speed:"normal",pauseOnHover:!0,showLabel:!1},render:e=>i(e)},o={args:{variant:"highlight",speed:"slow",pauseOnHover:!0,showLabel:!1},render:e=>i(e)};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    speed: 'normal',
    pauseOnHover: true,
    showLabel: false
  },
  render: args => renderTicker(args)
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'urgent',
    speed: 'fast',
    pauseOnHover: true,
    showLabel: true
  },
  render: args => renderTicker(args)
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,k,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'dark',
    speed: 'normal',
    pauseOnHover: true,
    showLabel: false
  },
  render: args => renderTicker(args)
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,x,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'highlight',
    speed: 'slow',
    pauseOnHover: true,
    showLabel: false
  },
  render: args => renderTicker(args)
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const P=["Default","Urgent","Dark","Highlight"];export{s as Dark,t as Default,o as Highlight,n as Urgent,P as __namedExportsOrder,D as default};
