angular.module("ionic-sample.mobile").controller('HomeCtrl', 
  function ($scope, $reactive, $state, $ionicSideMenuDelegate) {
    $reactive(this).attach($scope);

    console.log('home');
    
    $scope.toggleMenu = () => {
      console.log('open menu');
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.format = 'hh:mm:ss';

    moment.locale('pt', {
      weekdays : "Domingo-Segunda-Terça-Quarta-Quinta-Sexta-Sábado".split("-"),
    });
    $scope.day = moment().format('dddd');
  }
);
