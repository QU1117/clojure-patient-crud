// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['cljs-test'],
    plugins: ['karma-cljs-test', 'karma-chrome-launcher'],
    colors: true,
    basePath: 'resources/public/js/',
    files: ['core.js'],
    logLevel: config.LOG_INFO,
    client: {
      args: ['test.frontend.test_runner.run'],
      singleRun: true,
    },
  });
};
