angular.module("ionic-sample.mobile").directive('activities', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/activities/activities.html',
    controllerAs: 'activities',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
      
      
    }
  }
});