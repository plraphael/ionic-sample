angular.module("ionic-sample.mobile").directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/auth/login/login.html',
    controllerAs: 'login',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
 
      
      this.loginWithFacebook = () => {
        console.log('login with facebook');
      };
    }
  }
});