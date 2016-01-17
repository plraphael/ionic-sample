Package.describe({
  name: 'ionic-sample-mobile',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('angular');
  api.use('driftyco:ionic');
  api.use('less');
  api.use('momentjs:moment');
  api.use('plraphael:angular-ui-clock');
  api.use('russ:weather-icons');

  api.addFiles([
    'client/lib/module.js',

    'client/styles/main.less',
    'client/index/index-ionic-sample.component.js',
    'client/index/index-ionic-sample.html',

    'client/auth/login/login.component.js',
    'client/auth/login/login.html',
    'client/auth/login/styles/login.less',

    'client/tabs/tabs.component.js',
    'client/tabs/tabs.html',

    'client/home/home.component.js',
    'client/home/home.html',
    'client/home/styles/home.less',

    'client/classes/classes.component.js',
    'client/classes/classes.html',

    'client/workout/workout.component.js',
    'client/workout/workout.html',

    'client/activities/activities.component.js',
    'client/activities/activities.html',

    'client/profile/profile.component.js',
    'client/profile/profile.html',
    'client/profile/styles/profile.less',
    
  ], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ionic-sample-mobile');
});
