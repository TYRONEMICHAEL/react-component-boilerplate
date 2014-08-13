## React Component Boilerplate

Develop react components quickly with Mocha & Chai. Jest is awesome, but the tests are far too slow for react components. Based on the following [Gulp file](http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/) we can achieve continous tests using Livereload that are incredibly fast as well.  Running your tests in the browser eliminates quite a few headaches and you get the benefit of dev tools as well.

### Install

* Clone the repo
* Run `npm install`
* run `gulp test --tests './tests/checkboxWithLabel-test.js'`
* Open `index.html`

### Livereload

* No plugin required, reload script is provided in the index.html
* Run `gulp test --watch --tests './tests/checkboxWithLabel-test.js'`
* Edit your component under the tests directory and your tests will automatically be run


### Run all tests with Karma
* Clone the repo
* Run `npm install`
* Run `npm test`

Karma will launch Chrome and Firefox and will run the tests. Karma will continue to look for changes and rerun tests as needed.

If you need to run your tests in a CI environment run:

`./node_modules/.bin/karma start --single-run --browsers PhantomJS`
