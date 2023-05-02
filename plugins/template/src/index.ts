import Vendetta from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad() {
        setTimeout(() => {
            this.onUnload = Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
                const event = args[0]
                const type: string = event.type
                if (type === "MESSAGE_CREATE") {
                    console.log(args)
                } else if (type === "MESSAGE_DELETE") {
                    console.log(args)
                } else if (type.startsWith("MESSAGE")) {
                    console.log(args)
                }
            })
        }, 10000)
    },
    settings: Settings,
}