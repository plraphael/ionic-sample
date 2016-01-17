angular.module("ionic-sample.mobile").controller('ProfileCtrl', 
  function ($scope, $reactive, $state) {
    //$reactive(this).attach($scope);
    
    $scope.goBack = () => {
      console.log('going back');
      $state.go('tab.home');
    }

    $scope.subscribe('user', () => [
      Meteor.userId()
    ]);

    $scope.helpers({
      user: () => Meteor.users.find({_id: Meteor.userId()})
    });

    $scope.userImg = () => {
      var u = $scope.getReactively('user');
      if(u && u[0] && u[0].services) {
        u = u[0];
        var imgUrl = 'http://graph.facebook.com/'+ u.services.facebook.id +'/picture?type=large'
        return imgUrl;
      }
      return 'images/profile-placeholder.jpg';
    }

    $scope.userName = () => {
      var u = $scope.getReactively('user');
      if(u && u[0] && u[0].services) {
        u = u[0];
        return u.services.facebook.name;
      }
      return '';
    }
    $scope.userEmail = () => {
      var u = $scope.getReactively('user');
      if(u && u[0] && u[0].services) {
        u = u[0];
        return u.services.facebook.email;
      }
      return '';
    }
  }
);