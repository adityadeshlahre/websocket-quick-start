// module.exports = require("@repo/config-tailwind/tailwind.config");

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/config-tailwind/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
};

export default config;
