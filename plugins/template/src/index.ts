import Vendetta from "@vendetta";
import Settings from "./Settings";

const data = Vendetta.plugin.storage

export default {
    onLoad() {
        setTimeout(() => {
            this.onUnload = Vendetta.patcher.before("dispatch", Vendetta.metro.common.FluxDispatcher, (args) => {
                const event = args[0]
                const type: string = event.type
                // would not be surprised if this uses a lot of memory...
                if (type === "MESSAGE_CREATE") {
                    data[event.message.id] = event.message
                } else if (type === "MESSAGE_DELETE") {
                    console.log(data[event.message.id], "deleted at", Vendetta.metro.common.moment().format("hh:mm:ss.SS"))
                } else if (type == "MESSAGE_UPDATE") {
                    console.log(data[event.message.id], "edited at", Vendetta.metro.common.moment().format("hh:mm:ss.SS"), "to", event.message)
                }
            })
        }, 10000)
    },
    settings: Settings,
}