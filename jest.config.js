module.exports = {
  moduleFileExtensions: [
    "js",
    "vue"
  ],
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/app/frontend/src/$1"
  },
  testRegex: '(./app/frontend/tests/.*(test|spec))\\.js$',
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
}
