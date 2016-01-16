angular.module("ionic-sample.mobile").directive('home', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/home/home.html',
    controllerAs: 'home',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);

      console.log('home');
    }
  }
});