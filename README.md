## React Component Boilerplate

Develop react components quickly with Mocha & Chai. Jest is awesome, but the tests are far too slow. Based on the following [Gulp file](http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/) we can achieve continous tests using Livereload that are incredibly fast as well.  Running your tests in the browser eliminates quite a few headaches and you get the benefit of dev tools as well.

### Install

* Clone the repo
* Run `npm install`
* run `gulp`
* Open `index.html`

### Livereload

* Have the [Livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) plugin installed
* Run `gulp watch`
* Edit your component under the tests directory and your tests will automatically be run