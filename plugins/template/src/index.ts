import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad() {
        setTimeout(() => {
            this.onUnload = Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
                if (args[0].type === "MESSAGE_DELETE") {
                    Vendetta.ui.toasts.showToast(args[0].toString())
                }
            })
        }, 10000)
    },
    settings: Settings,
}