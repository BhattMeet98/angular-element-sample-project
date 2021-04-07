const concat = require('concat');

(async function build() {
  const files = [
    './dist/AngularElementSample/runtime.js',
    './dist/AngularElementSample/polyfills.js',
    './dist/AngularElementSample/scripts.js',
    './dist/AngularElementSample/main.js'
  ];
  await concat(files, './dist/AngularElementSample/bundle.js');
})();
