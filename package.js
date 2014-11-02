Package.describe({
  name: 'magee:ramda',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('magee:ramda.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('magee:ramda');
  api.addFiles('magee:ramda-tests.js');
});
