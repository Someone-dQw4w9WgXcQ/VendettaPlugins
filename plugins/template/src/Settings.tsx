import Vendetta from "@vendetta";
import { Forms } from "@vendetta/ui/components";
const { FormText } = Forms;
const storage = Vendetta.plugin.storage

let timeInstalled
try {
    if ("timeInstalled" in storage) {
        timeInstalled = storage.timeInstalled
    } else {
        timeInstalled = storage.timeInstalled = Vendetta.metro.common.moment()
    }
}
catch (e) {
    console.log(e)
}

export default () => (
    <FormText>
        Installed at {timeInstalled}
    </FormText>
)