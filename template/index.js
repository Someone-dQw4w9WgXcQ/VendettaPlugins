(function(o,n,d){"use strict";const{FormText:i}=d.Forms;function c(){return React.createElement(i,null,"Hello, world!")}const s=[];var l={onLoad(){var r=this;setTimeout(function(){r.onUnload=n.patcher.before("dispatch",n.metro.common.FluxDispatcher,function(m){const e=m[0],a=e.type;if(a==="MESSAGE_CREATE")console.log("create",e.message),s[e.message.id]=e.message;else if(a==="MESSAGE_DELETE"){const t=s[e.message.id];t?(console.log(t,"deleted at",n.metro.common.moment().format("hh:mm:ss.SS")),e.message=t,t.content+=" (deleted)",s[e.message.id]=null):console.log("deleted",m)}else if(a=="MESSAGE_UPDATE"){const t=s[e.message.id];t?e.message.content=`${t}
${e.message.content}(edited${e.message.edited_timestamp})`:(console.log("edited at",e.message.edited_timestamp,"to",e.message),e.message.content+=` (edited${e.message.edited_timestamp})`)}return m})},1e4)},settings:c};return o.default=l,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta,vendetta.ui.components);
