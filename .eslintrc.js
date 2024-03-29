module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["warn", "always"],
    "quotes": ["warn", "double"],
    "comma-dangle": ["warn", "never"],
    "max-len": ["warn", { "code": 150 }],
    "lines-between-class-members": ["warn", "always", { exceptAfterSingleLine: true }],
    "no-param-reassign": ["error", { "props": false }]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
