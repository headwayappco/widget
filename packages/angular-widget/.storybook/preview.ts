import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

document.getElementsByTagName("html")[0].style.height = "90%";
document.body.style.height = "90%";
