module.exports = {
  env: { browser: true, es2021: true },
  parser: "@typescript-eslint/parser",
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: { version: "detect" }
  },
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": "warn"
  }
};