module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
  "import/no-extraneous-dependencies": 0,
  'import/no-extraneous-dependencies': ["error", { "devDependencies": true, }],
  "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
  "comma-dangle": ["error", "never"]
}
}
