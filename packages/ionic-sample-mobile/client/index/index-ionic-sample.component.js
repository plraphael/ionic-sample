angular.module('ionic-sample.mobile').directive('indexIonicSample', function () {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/index/index-ionic-sample.html',
    controllerAs: 'index',
    controller: function ($scope, $reactive, $state, $ionicSideMenuDelegate) {
      $reactive(this).attach($scope);

      $ionicSideMenuDelegate.canDragContent(false);

      this.logout = () => {
        Accounts.logout();
        $state.go('login');
      }
    }
  }
});