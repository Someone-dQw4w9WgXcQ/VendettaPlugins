(function(e,t,o){"use strict";const{FormText:c}=o.Forms;function r(){return React.createElement(c,null,"Hello, world!")}var u={onLoad(){var i=this;setTimeout(function(){i.onUnload=t.patcher.before("dispatch",t.metro.common.FluxDispatcher,function(a){const[n]=a;n.type==="MESSAGE_DELETE"&&console.log(n)})},1e4)},settings:r};return e.default=u,Object.defineProperty(e,"__esModule",{value:!0}),e})({},vendetta,vendetta.ui.components);
