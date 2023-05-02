import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
            Vendetta.ui.toasts.showToast(args.toString())
        })
    },
    onUnload: () => {
        
    },
    settings: Settings,
}