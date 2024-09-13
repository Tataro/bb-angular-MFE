const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");

module.exports = withNativeFederation({
  name: "mfe1",

  exposes: {
    "./Shop": "./projects/mfe1/src/app/components/shop/shop.component.ts",
    "./Work": "./projects/mfe1/src/app/components/work/work.component.ts",
    "./Button": "./projects/mfe1/src/app/components/button/button.component.ts",
    "./Component": "./projects/mfe1/src/app/app.component.ts",
    // "./routes": "./projects/mfe1/src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
