angular.module("ionic-sample.mobile").directive('classes', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/classes/classes.html',
    controllerAs: 'classes',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
      
      
    }
  }
});