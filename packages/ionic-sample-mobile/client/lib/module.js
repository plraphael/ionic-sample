angular.module('ionic-sample.mobile', [
  'ionic',
  'ds.clock',
]).config(($ionicConfigProvider) => {
  $ionicConfigProvider.views.maxCache(5); 
  $ionicConfigProvider.tabs.position('bottom')
});