import js from "@eslint/js";
import { airbnbBase } from "eslint-config-airbnb-base";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  airbnbBase,
  prettier,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "warn", 
      "no-console": "off",
      "prettier/prettier": ["error", {
        "singleQuote": false,
        "trailingComma": "es5" 
      }]
    },
    plugins: {
      prettier
    }
  }
];
