import CMS from "netlify-cms-app";
import MarkdownControl from "./custom-widgets/MarkdownControl";

// Registrovat vlastní widget pod jménem "markdown" (přepíšeš vestavěný)
CMS.registerWidget("markdown", MarkdownControl);

// Spustit CMS
CMS.init();
