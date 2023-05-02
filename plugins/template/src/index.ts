import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        setTimeout(() => {
            Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
                Vendetta.ui.toasts.showToast(args.toString())
            })
        }, 10000)
    },
    onUnload: () => {

    },
    settings: Settings,
}