import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad() {
        setTimeout(() => {
            this.onUnload = Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
                const [event] = args
                if (event.type === "MESSAGE_DELETE") {
                    console.log(event)
                    Vendetta.ui.toasts.showToast("hello")
                }
            })
        }, 10000)
    },
    settings: Settings,
}