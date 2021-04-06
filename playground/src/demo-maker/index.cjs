import"./styles/index.css";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("html2canvas"),n=require("classnames");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),l=a(t),o=a(n),u=function(){return(u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c={checkbox:function(e){return!("true"===String(e))},text:function(e){return e},number:function(e){return e},range:function(e){return e},select:function(e){return e}},i=function(e,t){return c[t](e)},d=function(e,t){var n=u({},e);return Object.keys(t).forEach((function(e){return n[e]=t[e]})),n},s=function(e){var t={};return Object.keys(e).forEach((function(n){return t[n]=e[n].value})),t},m=function(e,t){void 0===t&&(t="#ffffff"),l.default(e,{scrollY:0,scrollX:0,allowTaint:!0,backgroundColor:t,useCORS:!0,logging:!1,height:window.outerHeight+window.innerHeight,windowHeight:window.outerHeight+window.innerHeight}).then((function(e){f(e.toDataURL("image/png").replace(/^data:image\/png/,"data:application/octet-stream"))}))},f=function(e){var t=document.createElement("a");t.setAttribute("download","component_preview.png"),t.setAttribute("href",e),t.click()},v=function(e){var t=e.className,n=e.label,a=void 0===n?"":n,l=e.children,u=e.type,c=void 0===u?"text":u;e.callBack;var i=e.value,d=e.values,s=void 0===d?{}:d,m=e.hide,f=void 0!==m&&m,v=e.min,p=e.max,g=e.id,y=e.onChange,h=void 0===y?function(){}:y,b=r.default.useState(""),x=b[0],E=b[1];return r.default.createElement("div",{className:o.default("box-container",t,{hidden:f}),key:g||a},r.default.createElement("div",{key:"demo_label",className:"demo-label"},r.default.createElement("label",null,a)),r.default.createElement("div",{key:"demo_box_element"},"select"===c?r.default.createElement("select",{className:o.default("box",c),value:x,onChange:function(e){h(s[e.target.value]),E(e.target.value)}},Object.keys(s).map((function(e){return r.default.createElement("option",{key:e,value:e},e)}))):r.default.createElement("input",{checked:i,className:o.default("box",c),type:c,value:i,onChange:function(e){return h(e.target.value)},min:v,max:p})),l)},p=function(e){var t=e.className,n=e.borderContent,a=e.label,l=e.children,u=e.customSettings,c=e.screenshot,i=r.default.useState("#FFFFFF"),d=i[0],s=i[1],f=o.default("preview-screen",a);return r.default.createElement("div",{className:o.default("previewer-container my-1 mx-1",t)},r.default.createElement("div",null,r.default.createElement("p",null,a),r.default.createElement("div",{className:"preview my-1 mx-1",id:"preview",style:{backgroundColor:d}},r.default.createElement("div",{className:"preview-tools"},r.default.createElement("input",{type:"color",onChange:function(e){return s(e.target.value)},className:"my-1 mx-1",value:d}),c&&r.default.createElement("button",{className:"screenshot-button my-1 mx-1",onClick:function(){m(document.getElementById(f),d)}},"Snapshot"),u&&r.default.createElement("div",{className:"extra-settings"},Object.keys(u).map((function(e){return r.default.createElement("div",{key:e},r.default.createElement(v,{label:e,id:e,type:u[e].type,onChange:u[e].onChange}))})))),r.default.createElement("div",{className:"preview-screen my-1",id:f},l)),r.default.createElement("div",{className:"mx-1 my-1"},n)))},g=function(e,t,n,a,r,l,o){return void 0===a&&(a=!1),void 0===r&&(r=0),void 0===l&&(l=100),{type:e,value:t,values:n,hide:a,min:r,max:l,callBack:o}};exports.BooleanProp=function(e){return g("checkbox",e)},exports.Box=v,exports.Demo=function(e){var t=e.className,n=void 0===t?"":t,a=e.props,l=void 0===a?{}:a,o=e.label,u=void 0===o?"":o,c=e.renderFunction,m=void 0===c?function(e,t){return r.default.createElement("div",null)}:c,f=e.rows,g=e.children,y=e.settings,h=void 0===y?{}:y,b=r.default.useState(s(l)),x=b[0],E=b[1],k=r.default.useState(!1),w=k[0],N=k[1],C=f||[Object.keys(l)];return r.default.createElement(p,{className:n,label:u,screenshot:h.screenshot,customSettings:h.debug&&{"Show props":{type:"checkbox",value:w,onChange:function(){return N(!w)}}},borderContent:r.default.createElement("div",{key:"demo_rows"},C.map((function(e,t){return r.default.createElement("div",{className:"demo-row",key:"demo_row_"+t},e.map((function(e){return r.default.createElement("div",{key:e},r.default.createElement(v,{id:e,label:e,hide:l[e].hide,type:l[e].type,value:x[e],onChange:function(t){var n;return E(d(x,((n={})[e]=i(t,l[e].type),n)))},values:l[e].values}))})))})))},r.default.createElement("div",{className:"demo-container",key:"demo_container"},r.default.createElement("div",{key:"demo_render_function"},m(x,(function(e){return E(d(x,e))}))),r.default.createElement("div",{key:"demo_children"},g),h.debug&&w&&r.default.createElement("div",{key:"props-container",className:"props-container"},"{",Object.keys(x).map((function(e){return r.default.createElement("div",{className:"prop",key:e},r.default.createElement("label",{className:"name"},e+" : "),r.default.createElement("label",{className:"value"},""+x[e]),",")})),"}")))},exports.HiddenProp=function(e){return g("text",e,null,!0)},exports.NumberProp=function(e){return g("number",e)},exports.Previewer=p,exports.RangeProp=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=100),g("range",e,null,!1,t,n)},exports.SelectProp=function(e){return g("select",e[Object.keys(e)[0]],e)},exports.StringProp=function(e){return g("text",e)},exports.downloadFile=f,exports.formatValue=i,exports.getProps=s,exports.merge=d,exports.takeScreenshot=m;
