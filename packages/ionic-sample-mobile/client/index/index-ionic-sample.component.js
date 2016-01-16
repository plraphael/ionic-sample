angular.module('ionic-sample.mobile').directive('indexIonicSample', function () {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/index/index-ionic-sample.html',
    controllerAs: 'indexIonicSample',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);

      this.logout = () => {
        Accounts.logout();
        $state.go('login');
      }
    }
  }
});