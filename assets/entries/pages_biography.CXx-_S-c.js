import{j as e,f as p,i as l,a as n,R as c,b as m}from"../chunks/chunk-Cz4VaW8O.js";/* empty css                      */const i=void 0,u=void 0,g=[],f=[],x=({})=>e.jsx(p,{className:"w-body"}),y=({data:a})=>{const{pageMeta:t}=a,{origin:s}=new URL(a.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${s}${l({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[a.url&&e.jsx("meta",{property:"og:url",content:a.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:o,content:d})=>e.jsx("meta",{property:o,content:d},o)),u,g.map(o=>e.jsx("link",{rel:"preload",href:`${n}${o.name}`,as:"font",crossOrigin:"anonymous"},o.id)),f.map(o=>e.jsx("link",{rel:"preload",href:`${n}${o.name}`,as:"image"},o.id))]})},j=Object.freeze(Object.defineProperty({__proto__:null,Head:y},Symbol.toStringTag,{value:"Module"})),h=({data:a})=>{const{system:t,resources:s,url:r}=a;return e.jsx(c.Provider,{value:{imageLoader:l,assetBaseUrl:n,resources:s},children:e.jsx(x,{system:t},r)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),T={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:m}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/biography/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/biography/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}}};export{T as configValuesSerialized};
