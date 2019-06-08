######Webpack

webpack is a module bundler for modern JavaScript applications. When webpack processes your application, it recursively builds a dependency graph that includes every module your application needs, then packages all of those modules into a small number of bundles — often only one — to be loaded by the browser.

Folder Structure
-------------------
src
  | js
  |  - app.js  

```
webpack  ./src/js/app.js --output-filename ./dist/app.bundle.js

```