import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
            Vendetta.logger.log(args)
        })
    },
    onUnload: () => {
        
    },
    settings: Settings,
}