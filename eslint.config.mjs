import { fixupPluginRules } from "@eslint/compat";
import eslint from "@eslint/js";
import prettierExtends from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import promisePlugin from "eslint-plugin-promise";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint from "typescript-eslint";

const globalToUse = {
  ...globals.browser,
  ...globals.serviceworker,
  ...globals.es2021,
  ...globals.worker,
  ...globals.node,
  React: true,
};

const ignores = [".next/**/*"];

const configs = tseslint.config(
  {
    plugins: {
      promise: promisePlugin,
      prettierPlugin,
      "unused-imports": fixupPluginRules(unusedImportsPlugin),
      react: reactPlugin,
      "react-hooks": fixupPluginRules(hooksPlugin),
    },
  },
  {
    ignores,
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, promisePlugin.configs["flat/recommended"], prettierExtends],

    rules: {
      "react-hooks/exhaustive-deps": "error",
      "react-hooks/rules-of-hooks": "error",
      "@typescript-eslint/ban-types": "off",
      "no-prototype-builtins": "off",
      "no-html-link-for-pages": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "prefer-const": "error",
      "promise/no-callback-in-promise": "off",
      curly: ["error", "all"],
      "@typescript-eslint/no-non-null-assertion": "off",
      "no-empty": "off",
      "no-bitwise": "off",
      "no-case-declarations": "off",
      "no-constant-binary-expression": "off",
      "no-constant-condition": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-control-regex": "off",
      "promise/always-return": "off",
      "promise/catch-or-return": "off",
      // "no-restricted-exports": ["error", { restrictDefaultExports: { direct: true } }],
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react/jsx-curly-brace-presence": ["error", { props: "always", children: "ignore", propElementValues: "always" }],
      "unused-imports/no-unused-imports": "error",
      "object-shorthand": "error",
      "no-async-promise-executor": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_", ignoreRestSiblings: true }],
      quotes: ["error", "double", { avoidEscape: true, allowTemplateLiterals: true }],
    },
    languageOptions: {
      globals: globalToUse,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: { version: "detect" },
    },
  },
  { ignores },
);
export default configs;
