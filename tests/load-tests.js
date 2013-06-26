(function() {

function loadScript(name) {
  // Replace < symbol with its hex code in order to not make the HTML parser
  // think we've ended the script.
  // http://stackoverflow.com/questions/8231048/why-use-x3c-instead-of-when-generating-html-from-javascript
  document.write('<script src="' + name + '"></script>');
}

function loadCSS(name) {
  document.write('<link href="' + name + '" rel="stylesheet">');
}

function loadTests(number) {
  loadScript('tests/vendor/qunit.js');
  loadScript('tests/helpers.js');

  for (var i=1; i<=number; i++) {
    loadScript('tests/step' + i + '.js');
  }

  loadCSS('tests/vendor/qunit.css');
}

if (~location.search.indexOf('tests=')) {
  var match = location.search.match(/tests=(\d+)/);

  if (!match) {
    throw new Error("To run tests, provide the step number you would like to test after tests=");
  }

  loadTests(match[1]);
}

var on = Ember.$.fn.on;

Ember.$.fn.on = function() {
  var callback = [].slice.call(arguments, -1)[0],
      args = [].slice.call(arguments, 0, -1);

  if (typeof callback === 'function') {
    var wrappedCallback = function() {
      var callbackArgs = arguments;

      return Ember.run(this, function() {
        callback.apply(this, callbackArgs);
      });
    };
    args.push(wrappedCallback);
    return on.apply(this, args);
  } else {
    return on.apply(this, arguments);
  }
};

})();
