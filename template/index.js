(function(t,n,r){"use strict";const{FormText:c}=r.Forms;function i(){return React.createElement(c,null,"Hello, world!")}var u={onLoad(){var a=this;setTimeout(function(){a.onUnload=n.patcher.before("dispatch",n.metro.common.FluxDispatcher,function(o){const e=o[0].type;(e==="MESSAGE_CREATE"||e==="MESSAGE_DELETE"||e.startsWith("MESSAGE"))&&console.log(o)})},1e4)},settings:i};return t.default=u,Object.defineProperty(t,"__esModule",{value:!0}),t})({},vendetta,vendetta.ui.components);
