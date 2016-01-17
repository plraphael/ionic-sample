angular.module('ionic-sample.mobile', [
  'ionic',
]).config(($ionicConfigProvider) => {
  $ionicConfigProvider.views.maxCache(5); 
  $ionicConfigProvider.tabs.position('bottom')
});