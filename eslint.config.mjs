import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore old files:
    "**/*.old/**",
    "**/*.old",
    "**/public.old/**",
    "**/src.old/**",
    "package.json.old",
    "package-lock.json.old",
    "README.old.md",
  ]),
]);

export default eslintConfig;
