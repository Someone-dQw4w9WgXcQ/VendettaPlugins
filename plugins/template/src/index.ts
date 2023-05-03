import Vendetta from "@vendetta";
import Settings from "./Settings";

const data = []

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
                    const saved = data[event.message.id]
                    if (saved) {
                        console.log(saved, "deleted at", Vendetta.metro.common.moment().format("hh:mm:ss.SS"))
                        event.message = saved
                        saved.content += " (deleted)"
                        data[event.message.id] = null
                    } else {
                        console.log("deleted", args)
                    }
                } else if (type == "MESSAGE_UPDATE") {
                    const saved = data[event.message.id]
                    if (saved) {
                        event.message.content = `${saved.content}\n${event.message.content}(edited${event.message.edited_timestamp})`
                    } else {
                        console.log("edited at", event.message.edited_timestamp, "to", event.message)
                        event.message.content += ` (edited${event.message.edited_timestamp})`
                    }
                }
                return args
            })
        }, 10000)
    },
    settings: Settings,
}