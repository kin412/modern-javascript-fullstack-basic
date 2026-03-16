import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      //'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      "no-unused-vars": "off", //쓰지 않는 변수를 오류로 처리. 끄기
      "react/prop-types": "off", // 나중에 다배우고 켜기
      "react-refresh/only-export-components": "off",
    },
  },
]);
