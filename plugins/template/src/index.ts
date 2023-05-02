import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        Vendetta.ui.toasts.showToast("hi")
        Vendetta.logger.log("Hello world!");
    },
    onUnload: () => {
        Vendetta.logger.log("Goodbye, world.");
    },
    settings: Settings,
}