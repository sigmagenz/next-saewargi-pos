import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

eslintConfig.push(
  compat.config({
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "react/jsx-key": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "off",
    },
  })
);

export default eslintConfig;
