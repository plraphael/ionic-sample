angular.module("ionic-sample.mobile").directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: '/packages/ionic-sample-mobile/client/auth/login/login.html',
    controllerAs: 'login',
    controller: function ($scope, $reactive, $state) {
      $reactive(this).attach($scope);
      
      Accounts.onLogin(() => {
        $state.go('tab.home');
      });
      
      this.loginWithFacebook = () => {
        console.log('login with facebook');
        var options = {
          //requestPermissions: ['public_profile', 'email']
          //loginStyle: 'redirect',
          //redirectUrl: Meteor.absoluteUrl('home')
        };
        Meteor.loginWithFacebook(options);
      };
    }
  }
});