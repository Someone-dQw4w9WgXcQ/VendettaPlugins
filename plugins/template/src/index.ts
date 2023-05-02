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
                    console.log("create", event.message)
                    data[event.message.id] = event.message
                } else if (type === "MESSAGE_DELETE") {
                    console.log(data[event.message.id], "deleted at", Vendetta.metro.common.moment().format("hh:mm:ss.SS"))
                } else if (type == "MESSAGE_UPDATE") {
                    console.log(data[event.message.id], "edited at", event.message.edited_timestamp, "to", event.message.content)
                }
            })
        }, 10000)
    },
    settings: Settings,
}