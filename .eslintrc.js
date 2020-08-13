module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
  },
  settings: {
    "import/extensions": [".ts", ".tsx", ".jsx", ".js"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".tsx", ".ts"],
      },
    },
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "react-hooks", "prettier", "jest", "react"],
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    /**
     * @description general rules
     */
    "import/no-unresolved": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        tsx: "never",
        ts: "never",
      },
    ],
    /**
     * @description rules of react
     */
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/prop-types": "off", // We use typescript to check types, this will be incompatible
    /**
     * @description rules of prettier
     */
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
      },
    ],
  },
};
