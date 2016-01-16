angular.module("ionic-sample.mobile").controller('HomeCtrl', 
  function ($scope, $reactive, $state, $ionicSideMenuDelegate) {
    $reactive(this).attach($scope);

    console.log('home');
    
    $scope.toggleMenu = () => {
      console.log('open menu');
      $ionicSideMenuDelegate.toggleLeft();
    }
  }
);
