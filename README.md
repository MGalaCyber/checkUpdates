# PACKAGE CHECKER (NOTIFY)

Package Checker is a simple utility that notifies users in the terminal when a package has been updated to a new version. Stay informed about the latest changes in your dependencies effortlessly.

## Features
- 🚀 Instantly receive notifications in the terminal about package updates.
- 📦 Keep track of changes in your dependencies to ensure you are always using the latest and greatest.
- 🔄 Easily integrate into your development workflow for seamless updates.

## Installation
npm:
```bash
$ npm install @mgalacyber/package-checker
```
yarn:
```bash
$ yarn add @mgalacyber/package-checker
```

## Simple to Use
## CommonJs (CJS) syntax
```js
const packageChecker = require("@mgalacyber/package-checker");
```
## ECMAScript Modules (ESM) syntax
```ts
import packageChecker from "@mgalacyber/package-checker";
```

## Example
```js
const version = require("./package.json").version;

packageChecker({
    packageName: "@mgalacyber/package-checker",
    currentVersion: version
});
```

## How It Works
Package Checker compares the installed versions of your project's dependencies with the latest versions available on the npm registry. If updates are found, it provides clear and concise notifications in the terminal, making it easy for you to take action.