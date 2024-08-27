// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import tsParser from "@typescript-eslint/parser";

// export default [
//   { ignores: ["dist", "node_modules"] },
//   { files: ["**/*.{js,mjs,cjs,ts}"] },
//   {
//     languageOptions: {
//       globals: { ...globals.browser, ...globals.node },
//       parserOptions: {
//         ecmaVersion: 2020,
//         sourceType: "module",
//         project: "./tsconfig.json",
//       },
//       parser: tsParser,
//     },
//   },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   {
//     rules: {
//       eqeqeq: "error",
//       curly: "error",
//       "no-console": "warn",
//       "no-unused-vars": "off",
//       "@typescript-eslint/no-unused-vars": [
//         "error",
//         { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
//       ],
//       "no-implicit-coercion": "error",
//       "no-magic-numbers": [
//         "warn",
//         { ignore: [0, 1, -1], ignoreArrayIndexes: true },
//       ],
//       quotes: ["error", "single", { avoidEscape: true }],
//       semi: ["error", "always"],
//       indent: ["error", 2, { SwitchCase: 1 }],
//       "comma-dangle": ["error", "always-multiline"],
//     },
//   },
// ];
