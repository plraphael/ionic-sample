let modulesToLoad =  [
  'angular-meteor',
  'ui.router',
];

if (Meteor.isCordova) {
  modulesToLoad = modulesToLoad.concat(['ionic-sample.mobile']);
} else {
  modulesToLoad = modulesToLoad.concat(['ionic-sample.mobile']);
}

angular.module('ionic-sample', modulesToLoad);

function onReady() {
  angular.bootstrap(document, ['ionic-sample'], {
    strictDi: true
  });
}
 
if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);