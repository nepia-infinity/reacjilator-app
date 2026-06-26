import { Manifest } from "deno-slack-sdk/mod.ts";
import { def as detectLang } from "./functions/detect_lang.ts";
import { def as translate } from "./functions/translate.ts";
import reacjilator from "./workflows/reacjilator.ts";

/**
 * DeepL Translator app translates Slack messages in channels.
 * During the open beta period, only public channels are supported.
 * To run this app, DeepL API account is required.
 * Refer to https://www.deepl.com/en/docs-api for DeepL API details.
 */
export default Manifest({
  name: "reacjilator-app",
  description: "A Slack app translates Slack messages",
  icon: "assets/app_logo.png",
  functions: [detectLang, translate],
  workflows: [reacjilator],
  outgoingDomains: [
    "api-free.deepl.com",
    "api.deepl.com",
  ],
  botScopes: [
    "commands",
    "chat:write",
    "channels:history",
    "groups:history",
    "reactions:read",
  ],
});
