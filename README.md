## React Component Boilerplate

Jest is an awesome framework, but I found running tests using JSX to be extremely slow. So that is how react-component-boilerplate was born. You can view the conversation [here](https://github.com/facebook/jest/issues/116) if you are interested. So this repo lets you test and create React components quickly with Karma. Have your tests run continuously with the added benefit of testing in your favorite and least favorite browsers while also having access to developer tools. Win Win.

### Setup

* Clone the repo
* Run `npm install`

### Building Your Component

* Run `npm start`
* Open `index.html` and view your awesome creation

### Testing Your Components

* Run `npm test`
* To have your  tests run continuously, just run `./node_modules/karma/bin/karma start karma.conf.js --no-single-run` or you can always change the Karma configuration file

### Contribution

* Special thanks to [iamrandys](https://github.com/iamrandys)
