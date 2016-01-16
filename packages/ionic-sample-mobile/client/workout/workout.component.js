angular.module("ionic-sample.mobile").directive('workout', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/workout/workout.html',
    controllerAs: 'workout',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
      
      
    }
  }
});