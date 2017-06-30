# Installation instructions

**Prerequisites:**

- Install Karma globall `npm install karma -g`
- Install NPM with `npm install`
- Install mongo

**To run the application**

- Run tests: `karma start`
- Build the style files: `sass public/styles/main.scss:public/styles/main.css`
- Run the server: `node server.js`

# Implementation

**Component based design** - No controllers in the application, just two directives. This is intended for flexibility.

**Separate front end data stores** - All implementation details regarding API endpoints and getter / setters is abstracted into tested services. 

# Improvements

**Babel / Precompiler** I have used some advanced JS features within the app, so would need to add a preprocessor to ensure browser compatibility. 

**Build tools** Running tests / compiling stylesheets could be cleaned up. All stylesheets could be brought together using a glob, rather than manually included in the `main.scss` file. The JS could be bundled and minified for lower file transfer size.

# Further testing

**API test harness** Introduce an API test harness to integration test the endpoint.

**API unit testing** Each of the API module files can be unit tested. A harness could be put in place for this. 