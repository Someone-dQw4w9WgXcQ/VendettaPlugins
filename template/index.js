(function(t,e,n){"use strict";const{FormText:o}=n.Forms;function r(){return React.createElement(o,null,"Hello, world!")}var u={onLoad:function(){e.patcher.before("dispatch",e.metro.common.FluxDispatcher,function(c){e.ui.toasts.showToast(c.toString())})},onUnload:function(){},settings:r};return t.default=u,Object.defineProperty(t,"__esModule",{value:!0}),t})({},vendetta,vendetta.ui.components);
