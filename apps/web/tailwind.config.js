/** @type {import('tailwindcss').Config} */
const sharedConfig = require("ui/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
    // "../../packages/ui/**/*.{js,ts,jsx,tsx}", // Include UI package
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};
