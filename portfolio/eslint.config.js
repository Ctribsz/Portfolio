// .eslintrc.cjs
module.exports = {
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    // Tus reglas personalizadas, por ejemplo:
    "react/react-in-jsx-scope": "off", // no hace falta importar React en cada archivo
    "react/prop-types": "off",        // si no usas PropTypes
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};