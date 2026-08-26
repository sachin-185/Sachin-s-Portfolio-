import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  globalIgnores([
    "dist/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "vite.config.ts"
  ]),
]);

export default eslintConfig;
