import Vendetta from "@vendetta";
import { Forms } from "@vendetta/ui/components";
const { FormText } = Forms;
const storage = Vendetta.plugin.storage

console.log("a")
let timeInstalled
if ("timeInstalled" in storage) {
    timeInstalled = storage.timeInstalled
} else {
    timeInstalled = storage.timeInstalled = Vendetta.metro.common.moment()
}
console.log(timeInstalled)

export default () => (
    <FormText>
        Installed at {timeInstalled}
    </FormText>
)