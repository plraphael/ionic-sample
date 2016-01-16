angular.module('ionic-sample').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('home', {
      url: '/home',
      template: '<home></home>',
      resolve: {
        currentUser: ($q) => {
          console.log('%%%%%%%%%%% RESOLVE FUNCTION');
          if (Meteor.userId() == null) {
            return $q.reject('AUTH_REQUIRED');
          }
          else {
            return $q.resolve();
          }
        }
      }
    });

  $urlRouterProvider.otherwise("/home");
})
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
});