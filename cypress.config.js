const { defineConfig } = require("cypress");
const {faker} = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://opencart.abstracta.us/',
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,

  },
  "chromeWebSecurity": false
});
