import Vendetta from "@vendetta";
import { Forms } from "@vendetta/ui/components";
const { FormText } = Forms;
const storage = Vendetta.plugin.storage

let timeInstalled

if ("timeInstalled" in storage) {
    timeInstalled = storage.timeInstalled
} else {
    timeInstalled = storage.timeInstalled = Vendetta.metro.common.moment().format("hh:mm:ss.SS")
}

export default () => (
    <FormText>
        Installed at {timeInstalled}
    </FormText>
)