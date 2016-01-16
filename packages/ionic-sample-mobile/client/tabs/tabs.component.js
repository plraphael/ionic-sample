angular.module("ionic-sample.mobile").directive('tabs', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/tabs/tabs.html',
    controllerAs: 'tabs',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
      
      
    }
  }
});