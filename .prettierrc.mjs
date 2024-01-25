// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  printWidth: 80,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
