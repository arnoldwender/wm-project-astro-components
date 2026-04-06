import{b as f}from"./lit-element-CdmuTPXr.js";const E={title:"UI/StatCard",tags:["autodocs"],parameters:{docs:{description:{component:`
Compact statistic display with optional trend indicator.

Features:
- Displays value, label, and optional trend percentage
- Three trend directions (up, down, neutral) with semantic colors
- Three visual variants (default, outlined, filled)
- Three sizes (sm, md, lg)
- Optional icon
- Green for positive, red for negative, gray for neutral trends
- Dark mode support
        `}}},argTypes:{value:{control:"text",description:"Statistic value"},label:{control:"text",description:"Statistic label"},trend:{control:{type:"number",step:.1},description:"Trend percentage"},trendDirection:{control:{type:"select"},options:["up","down","neutral"],description:"Trend direction for color coding"},icon:{control:"text",description:"Icon (emoji or symbol)"},variant:{control:{type:"select"},options:["default","outlined","filled"],description:"Visual variant"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Component size"}}},I={sm:{padding:"1rem",valueSize:"1.5rem",labelSize:"0.75rem",iconSize:"1.25rem"},md:{padding:"1.5rem",valueSize:"2rem",labelSize:"0.875rem",iconSize:"1.5rem"},lg:{padding:"2rem",valueSize:"2.5rem",labelSize:"1rem",iconSize:"2rem"}},P={up:{color:"#16a34a",bg:"#f0fdf4"},down:{color:"#dc2626",bg:"#fef2f2"},neutral:{color:"#64748b",bg:"#f1f5f9"}},a={up:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 15l-6-6-6 6"/></svg>',down:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',neutral:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>'},n=e=>{const s=e.variant||"default",V=e.size||"md",r=I[V],t=e.trendDirection||"neutral",b=e.trend,h=P[t],c=s==="filled";return f`
    <style>
      .sc-demo {
        font-family: system-ui, -apple-system, sans-serif;
        display: flex; flex-direction: column; gap: 0.25rem;
        padding: ${r.padding}; border-radius: 1rem;
        ${s==="default"?"background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05);":""}
        ${s==="outlined"?"background: #fff; border: 1px solid #e2e8f0;":""}
        ${s==="filled"?"background: #3b82f6; color: #fff;":""}
        max-width: 280px; transition: box-shadow 0.3s ease;
      }
      .sc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; }
      .sc-icon { font-size: ${r.iconSize}; line-height: 1; }
      .sc-trend {
        display: inline-flex; align-items: center; gap: 2px;
        font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 9999px;
        color: ${c?t==="up"?"#dcfce7":t==="down"?"#fecaca":"rgba(255,255,255,0.8)":h.color};
        background: ${c?"rgba(255,255,255,0.15)":h.bg};
        margin-left: auto;
      }
      .sc-value {
        font-size: ${r.valueSize}; font-weight: 700; line-height: 1.2; letter-spacing: -0.025em;
        color: ${c?"#fff":"#1a1a2e"};
      }
      .sc-label {
        font-size: ${r.labelSize}; line-height: 1.5;
        color: ${c?"rgba(255,255,255,0.8)":"#64748b"};
      }
    </style>
    <article class="sc-demo">
      <header class="sc-header">
        ${e.icon?f`<span class="sc-icon">${e.icon}</span>`:""}
        ${b!==void 0?f`
          <span class="sc-trend">
            <span .innerHTML=${a[t]}></span>
            <span>${Math.abs(b)}%</span>
          </span>
        `:""}
      </header>
      <span class="sc-value">${e.value}</span>
      <span class="sc-label">${e.label}</span>
    </article>
  `},i={args:{value:"12,345",label:"Total Users",trend:12.5,trendDirection:"up",icon:"👥",variant:"default",size:"md"},render:e=>n(e)},l={args:{value:"$48.2K",label:"Revenue",trend:-3.2,trendDirection:"down",icon:"💰",variant:"default",size:"md"},render:e=>n(e)},o={args:{value:"99.9%",label:"Uptime",trend:0,trendDirection:"neutral",icon:"🟢",variant:"default",size:"md"},render:e=>n(e)},d={args:{value:"8,421",label:"Page Views",trend:5.7,trendDirection:"up",icon:"📊",variant:"outlined",size:"md"},render:e=>n(e)},p={args:{value:"1,847",label:"New Signups",trend:24.3,trendDirection:"up",icon:"🚀",variant:"filled",size:"md"},render:e=>n(e)},u={args:{value:"$128K",label:"Monthly Revenue",trend:8.1,trendDirection:"up",icon:"📈",variant:"default",size:"lg"},render:e=>n(e)},m={args:{value:"342",label:"Active Users",trend:2.1,trendDirection:"up",variant:"outlined",size:"sm"},render:e=>n(e)},g={render:()=>f`
    <style>
      .sc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; font-family: system-ui, sans-serif; }
      .sc-card {
        display: flex; flex-direction: column; gap: 0.25rem; padding: 1.5rem; border-radius: 1rem;
        background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }
      .sc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; }
      .sc-icon { font-size: 1.5rem; }
      .sc-trend { display: inline-flex; align-items: center; gap: 2px; font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 9999px; margin-left: auto; }
      .sc-trend--up { color: #16a34a; background: #f0fdf4; }
      .sc-trend--down { color: #dc2626; background: #fef2f2; }
      .sc-value { font-size: 2rem; font-weight: 700; color: #1a1a2e; line-height: 1.2; }
      .sc-label { font-size: 0.875rem; color: #64748b; }
    </style>
    <div class="sc-grid">
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">👥</span><span class="sc-trend sc-trend--up"><span .innerHTML=${a.up}></span>12.5%</span></header>
        <span class="sc-value">12,345</span><span class="sc-label">Total Users</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">💰</span><span class="sc-trend sc-trend--up"><span .innerHTML=${a.up}></span>8.1%</span></header>
        <span class="sc-value">$48.2K</span><span class="sc-label">Revenue</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">📊</span><span class="sc-trend sc-trend--down"><span .innerHTML=${a.down}></span>3.2%</span></header>
        <span class="sc-value">2.4K</span><span class="sc-label">Bounce Rate</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">🟢</span><span class="sc-trend sc-trend--up"><span .innerHTML=${a.up}></span>0.1%</span></header>
        <span class="sc-value">99.9%</span><span class="sc-label">Uptime</span>
      </article>
    </div>
  `};var v,w,z;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: '12,345',
    label: 'Total Users',
    trend: 12.5,
    trendDirection: 'up',
    icon: '👥',
    variant: 'default',
    size: 'md'
  },
  render: args => renderStatCard(args)
}`,...(z=(w=i.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var x,S,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: '$48.2K',
    label: 'Revenue',
    trend: -3.2,
    trendDirection: 'down',
    icon: '💰',
    variant: 'default',
    size: 'md'
  },
  render: args => renderStatCard(args)
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var $,D,k;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: '99.9%',
    label: 'Uptime',
    trend: 0,
    trendDirection: 'neutral',
    icon: '🟢',
    variant: 'default',
    size: 'md'
  },
  render: args => renderStatCard(args)
}`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var T,M,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: '8,421',
    label: 'Page Views',
    trend: 5.7,
    trendDirection: 'up',
    icon: '📊',
    variant: 'outlined',
    size: 'md'
  },
  render: args => renderStatCard(args)
}`,...(C=(M=d.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var L,U,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: '1,847',
    label: 'New Signups',
    trend: 24.3,
    trendDirection: 'up',
    icon: '🚀',
    variant: 'filled',
    size: 'md'
  },
  render: args => renderStatCard(args)
}`,...(H=(U=p.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var K,R,j;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: '$128K',
    label: 'Monthly Revenue',
    trend: 8.1,
    trendDirection: 'up',
    icon: '📈',
    variant: 'default',
    size: 'lg'
  },
  render: args => renderStatCard(args)
}`,...(j=(R=u.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var A,B,F;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    value: '342',
    label: 'Active Users',
    trend: 2.1,
    trendDirection: 'up',
    variant: 'outlined',
    size: 'sm'
  },
  render: args => renderStatCard(args)
}`,...(F=(B=m.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var N,O,G;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .sc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; font-family: system-ui, sans-serif; }
      .sc-card {
        display: flex; flex-direction: column; gap: 0.25rem; padding: 1.5rem; border-radius: 1rem;
        background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }
      .sc-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem; }
      .sc-icon { font-size: 1.5rem; }
      .sc-trend { display: inline-flex; align-items: center; gap: 2px; font-size: 0.75rem; font-weight: 500; padding: 0.25rem 0.5rem; border-radius: 9999px; margin-left: auto; }
      .sc-trend--up { color: #16a34a; background: #f0fdf4; }
      .sc-trend--down { color: #dc2626; background: #fef2f2; }
      .sc-value { font-size: 2rem; font-weight: 700; color: #1a1a2e; line-height: 1.2; }
      .sc-label { font-size: 0.875rem; color: #64748b; }
    </style>
    <div class="sc-grid">
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">👥</span><span class="sc-trend sc-trend--up"><span .innerHTML=\${trendArrows.up}></span>12.5%</span></header>
        <span class="sc-value">12,345</span><span class="sc-label">Total Users</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">💰</span><span class="sc-trend sc-trend--up"><span .innerHTML=\${trendArrows.up}></span>8.1%</span></header>
        <span class="sc-value">$48.2K</span><span class="sc-label">Revenue</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">📊</span><span class="sc-trend sc-trend--down"><span .innerHTML=\${trendArrows.down}></span>3.2%</span></header>
        <span class="sc-value">2.4K</span><span class="sc-label">Bounce Rate</span>
      </article>
      <article class="sc-card">
        <header class="sc-header"><span class="sc-icon">🟢</span><span class="sc-trend sc-trend--up"><span .innerHTML=\${trendArrows.up}></span>0.1%</span></header>
        <span class="sc-value">99.9%</span><span class="sc-label">Uptime</span>
      </article>
    </div>
  \`
}`,...(G=(O=g.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const q=["Default","TrendDown","TrendNeutral","Outlined","Filled","LargeSize","SmallSize","DashboardGrid"];export{g as DashboardGrid,i as Default,p as Filled,u as LargeSize,d as Outlined,m as SmallSize,l as TrendDown,o as TrendNeutral,q as __namedExportsOrder,E as default};
