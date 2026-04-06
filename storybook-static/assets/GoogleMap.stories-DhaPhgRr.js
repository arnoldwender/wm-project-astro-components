import{b as c}from"./lit-element-CdmuTPXr.js";const g={title:"Maps/GoogleMap",tags:["autodocs"],parameters:{docs:{description:{component:`
A DSGVO-compliant Google Maps component. No external requests until the user explicitly consents. Features include:
- Consent-first: no data sent to Google until user clicks "Karte laden"
- Optional "remember choice" checkbox with localStorage persistence
- Static map preview as blurred placeholder (when API key provided)
- Directions link overlay for quick route planning
- Customizable consent text, button label, and privacy link
- Supports roadmap, satellite, hybrid, and terrain map types
        `}}},argTypes:{lat:{control:"number",description:"Latitude coordinate"},lng:{control:"number",description:"Longitude coordinate"},height:{control:"text",description:"Map height"},title:{control:"text",description:"Map title"},buttonText:{control:"text",description:"Consent button text"},consentText:{control:"text",description:"Consent message"}}},d=e=>c`
  <div style="width: 100%; height: ${e.height}; position: relative; background: #e5e7eb; border-radius: 0.5rem; overflow: hidden; font-family: system-ui, sans-serif;">
    <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
      <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.6);"></div>
      <div style="position: relative; z-index: 1; text-align: center; color: white; max-width: 400px; padding: 1.5rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 1rem; opacity: 0.9;">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        <h3 style="margin: 0 0 0.5rem; font-size: 1.25rem; font-weight: 600;">${e.title}</h3>
        <p style="margin: 0 0 1.5rem; font-size: 0.875rem; opacity: 0.9; line-height: 1.5;">${e.consentText}</p>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;">
          <button style="padding: 0.75rem 2rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-size: 1rem; font-weight: 500; cursor: pointer;">
            ${e.buttonText}
          </button>
          <a href="/datenschutz#google-maps" style="color: white; opacity: 0.8; font-size: 0.875rem; text-decoration: underline;">Mehr erfahren</a>
        </div>
        <label style="display: flex; align-items: center; gap: 0.5rem; margin-top: 1rem; font-size: 0.75rem; opacity: 0.8; cursor: pointer; justify-content: center;">
          <input type="checkbox" style="width: 1rem; height: 1rem;" />
          <span>Auswahl merken</span>
        </label>
      </div>
    </div>
    <a href="#" style="position: absolute; bottom: 1rem; right: 1rem; display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: white; color: #1f2937; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 10;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7"></path>
      </svg>
      Route planen
    </a>
  </div>
`,t={args:{lat:51.4828,lng:11.97,height:"400px",title:"Google Maps",buttonText:"Karte laden",consentText:"Diese Karte wird von Google Maps bereitgestellt. Beim Laden der Karte werden Daten an Google übertragen."},render:e=>d(e)},o={args:{lat:48.1351,lng:11.582,height:"500px",title:"Our Location",buttonText:"Load map",consentText:"Loading this map transfers data to Google."},render:e=>d(e)};var r,n,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    lat: 51.4828,
    lng: 11.97,
    height: '400px',
    title: 'Google Maps',
    buttonText: 'Karte laden',
    consentText: 'Diese Karte wird von Google Maps bereitgestellt. Beim Laden der Karte werden Daten an Google übertragen.'
  },
  render: args => renderGoogleMap(args)
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    lat: 48.1351,
    lng: 11.582,
    height: '500px',
    title: 'Our Location',
    buttonText: 'Load map',
    consentText: 'Loading this map transfers data to Google.'
  },
  render: args => renderGoogleMap(args)
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const m=["Default","CustomHeight"];export{o as CustomHeight,t as Default,m as __namedExportsOrder,g as default};
