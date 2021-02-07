const RULES = {
  OFF: "off",
  WARN: "warn",
  ERROR: "error",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react-native/all",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "standard",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native", "jest"],
  rules: {
    // 'name_of_rule': RULES.(action)
    "react/prop-types": RULES.OFF,
    "react/display-name": RULES.WARN,
    "no-unused-vars": RULES.WARN,
    "jest/no-disabled-tests": RULES.WARN,
    "jest/no-focused-tests": RULES.ERROR,
    "jest/no-identical-title": RULES.ERROR,
    "jest/prefer-to-have-length": RULES.WARN,
    "jest/valid-expect": RULES.ERROR,
  },
}
