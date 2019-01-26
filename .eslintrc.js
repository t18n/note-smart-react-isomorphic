module.exports = {
  "env": {
    "es6": true, // enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
    "browser": true, // browser global variables
    "node": true, //# Node.js global variables and Node.js scoping.
  },

  // Specifying global variables
  "globals": {
    "logInfo": true,
    "logWarning": true,
    "logError": true,
    "logDebug": true,
  },

  "parser": "babel-eslint", // By default, ESLint expects ECMAScript 5 syntax, specify ES6 instead

  "parserOptions": {
    "allowImportExportEverywhere": true,
  },

  "extends": "airbnb", //Use Airbnb style guide

  "rules": {
    // Allow reassign params
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],

    // Disable error forcing return on all arrow functions
    "consistent-return": [
      0,
    ],

    "import/no-extraneous-dependencies": [
      "error", 
      { 
        "devDependencies": false, 
        "optionalDependencies": false, 
        "peerDependencies": false 
      }
    ],


    // Allow Underscore dangle
    "no-underscore-dangle": [
      2, 
      {
        "allow": [
          "__ROUTE_DATA__",
          "__content",
        ],
        "allowAfterThis": true, // e.g. this._bar is accepted
        "allowAfterSuper": true, // e.g. super._bar() is accepted
      }
    ],

    // Allow js + jsx file name extension
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"], // Allow both JS and JSx extension
      }
    ],

    // Allow console.log inside component
    "no-console": "off",

    // Allow to write operation without space
    "space-infix-ops": [
      0, 
      {
        "int32Hint": true,
      }
    ],

    // Disable react/destructuring-assignment
    "react/destructuring-assignment": [
      0,
    ]
  },

  "settings": {
    // Import resolver from Babel module-resolver, avoid "cannot resolve path"
    "import/resolver": {
      "babel-module": {
        root: ['.'],
      }
    }
  }
};
