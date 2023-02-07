module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: "@antfu",
  // "plugin:import/errors", "plugin:import/warnings", "plugin:prettier/recommended", "prettier"

  rules: {
    semi: ["error", "always"],
    "no-var": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": [0, "never"],
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: [".eslintrc.js"],
};
