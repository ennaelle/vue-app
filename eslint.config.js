// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"], // déstructure le tableau de config Vue
  {
    files: ["**/*.js", "**/*.vue"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "no-unused-vars": "warn",
      "no-empty": "warn",
    },
  },
];
