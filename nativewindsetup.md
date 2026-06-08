

1. Install NativeWind

Install:

NativeWind
Tailwind CSS
Reanimated
Safe Area Context

Run:

npm install nativewind react-native-reanimated react-native-safe-area-context

Install development dependencies:

npm install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 babel-preset-expo
2. Initialize Tailwind

Run:

npx tailwindcss init

This creates:

tailwind.config.js
3. Configure Tailwind
tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
  },

  plugins: [],
};
4. Create Global CSS File

Create:

global.css

Add:

@tailwind base;
@tailwind components;
@tailwind utilities;
5. Configure Babel

Create or modify:

babel.config.js

Add:

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
6. Configure Metro

Create:

metro.config.js

Add:

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./global.css",
});
7. Import Global CSS

Inside:

App.js

or

App.tsx

Add:

import "./global.css";
8. Restart Expo Server