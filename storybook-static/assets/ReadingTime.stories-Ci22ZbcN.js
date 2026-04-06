import{b as a}from"./lit-element-CdmuTPXr.js";const E={title:"Content/ReadingTime",tags:["autodocs"],parameters:{docs:{description:{component:`
Estimated reading time display calculated from word count.

Features:
- Automatic reading time calculation from text content
- Configurable words-per-minute rate (default: 200)
- Three display variants (inline, badge, detailed)
- Optional clock icon
- Locale-aware word count formatting via Intl.NumberFormat
- Semantic time element for machine readability
        `}}},argTypes:{variant:{control:{type:"select"},options:["inline","badge","detailed"],description:"Display variant"},icon:{control:"boolean",description:"Show clock icon"},wordsPerMinute:{control:{type:"number",min:100,max:400,step:25},description:"Reading speed (wpm)"},locale:{control:"text",description:"BCP 47 locale for number formatting"}}},r=a`
  <svg style="flex-shrink:0;opacity:0.7;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
`,t=e=>{const p=e.variant||"inline",m=e.icon,R=e.wordsPerMinute||200,B=e.locale||"en-US",g=1200,n=Math.max(1,Math.ceil(g/R)),C=new Intl.NumberFormat(B).format(g);return p==="badge"?a`
      <style>
        .rt-badge {
          display: inline-flex; align-items: center; gap: 0.25rem;
          font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff;
          padding: 0.25rem 0.5rem; border-radius: 9999px; font-family: system-ui, sans-serif;
          white-space: nowrap;
        }
      </style>
      <span class="rt-badge">
        ${m?r:""}
        <time datetime="PT${n}M">${n} min</time>
      </span>
    `:p==="detailed"?a`
      <style>
        .rt-detailed {
          display: inline-flex; align-items: center; gap: 0.5rem;
          font-size: 0.875rem; color: #64748b; font-family: system-ui, sans-serif;
        }
        .rt-sep { color: #e2e8f0; user-select: none; }
      </style>
      <span class="rt-detailed">
        ${m?r:""}
        <time datetime="PT${n}M">${n} min read</time>
        <span class="rt-sep">&middot;</span>
        <span>${C} words</span>
      </span>
    `:a`
    <style>
      .rt-inline {
        display: inline-flex; align-items: center; gap: 0.25rem;
        font-size: 0.875rem; color: #64748b; font-family: system-ui, sans-serif;
      }
    </style>
    <span class="rt-inline">
      ${m?r:""}
      <time datetime="PT${n}M">${n} min read</time>
    </span>
  `},i={args:{variant:"inline",icon:!1,wordsPerMinute:200,locale:"en-US"},render:e=>t(e)},s={args:{variant:"inline",icon:!0,wordsPerMinute:200,locale:"en-US"},render:e=>t(e)},o={args:{variant:"badge",icon:!0,wordsPerMinute:200,locale:"en-US"},render:e=>t(e)},l={args:{variant:"detailed",icon:!0,wordsPerMinute:200,locale:"en-US"},render:e=>t(e)},d={args:{variant:"detailed",icon:!0,wordsPerMinute:200,locale:"de-DE"},render:e=>t(e)},c={render:()=>a`
    <style>
      .rt-all { display: flex; flex-direction: column; gap: 1rem; font-family: system-ui, sans-serif; }
      .rt-row { display: flex; align-items: center; gap: 1rem; }
      .rt-label { font-size: 0.75rem; color: #94a3b8; min-width: 80px; }
      .rt-inline { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: #64748b; }
      .rt-badge { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 9999px; }
      .rt-detailed { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #64748b; }
      .rt-sep { color: #e2e8f0; }
    </style>
    <div class="rt-all">
      <div class="rt-row">
        <span class="rt-label">Inline:</span>
        <span class="rt-inline">
          ${r}
          <time datetime="PT6M">6 min read</time>
        </span>
      </div>
      <div class="rt-row">
        <span class="rt-label">Badge:</span>
        <span class="rt-badge">
          ${r}
          <time datetime="PT6M">6 min</time>
        </span>
      </div>
      <div class="rt-row">
        <span class="rt-label">Detailed:</span>
        <span class="rt-detailed">
          ${r}
          <time datetime="PT6M">6 min read</time>
          <span class="rt-sep">&middot;</span>
          <span>1,200 words</span>
        </span>
      </div>
    </div>
  `};var f,u,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'inline',
    icon: false,
    wordsPerMinute: 200,
    locale: 'en-US'
  },
  render: args => renderReadingTime(args)
}`,...(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var y,w,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: 'inline',
    icon: true,
    wordsPerMinute: 200,
    locale: 'en-US'
  },
  render: args => renderReadingTime(args)
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var x,M,P;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'badge',
    icon: true,
    wordsPerMinute: 200,
    locale: 'en-US'
  },
  render: args => renderReadingTime(args)
}`,...(P=(M=o.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var h,T,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'detailed',
    icon: true,
    wordsPerMinute: 200,
    locale: 'en-US'
  },
  render: args => renderReadingTime(args)
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var $,k,z;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'detailed',
    icon: true,
    wordsPerMinute: 200,
    locale: 'de-DE'
  },
  render: args => renderReadingTime(args)
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var I,D,U;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .rt-all { display: flex; flex-direction: column; gap: 1rem; font-family: system-ui, sans-serif; }
      .rt-row { display: flex; align-items: center; gap: 1rem; }
      .rt-label { font-size: 0.75rem; color: #94a3b8; min-width: 80px; }
      .rt-inline { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; color: #64748b; }
      .rt-badge { display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.75rem; font-weight: 500; color: #3b82f6; background: #eff6ff; padding: 0.25rem 0.5rem; border-radius: 9999px; }
      .rt-detailed { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: #64748b; }
      .rt-sep { color: #e2e8f0; }
    </style>
    <div class="rt-all">
      <div class="rt-row">
        <span class="rt-label">Inline:</span>
        <span class="rt-inline">
          \${clockIcon}
          <time datetime="PT6M">6 min read</time>
        </span>
      </div>
      <div class="rt-row">
        <span class="rt-label">Badge:</span>
        <span class="rt-badge">
          \${clockIcon}
          <time datetime="PT6M">6 min</time>
        </span>
      </div>
      <div class="rt-row">
        <span class="rt-label">Detailed:</span>
        <span class="rt-detailed">
          \${clockIcon}
          <time datetime="PT6M">6 min read</time>
          <span class="rt-sep">&middot;</span>
          <span>1,200 words</span>
        </span>
      </div>
    </div>
  \`
}`,...(U=(D=c.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const A=["Default","WithIcon","BadgeVariant","DetailedVariant","GermanLocale","AllVariants"];export{c as AllVariants,o as BadgeVariant,i as Default,l as DetailedVariant,d as GermanLocale,s as WithIcon,A as __namedExportsOrder,E as default};
