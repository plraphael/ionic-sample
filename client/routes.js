angular.module('ionic-sample').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('tab', {
      url: '/tab',
      abstract: true,
      template: '<tabs></tabs>',
    })
    .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: '/packages/ionic-sample-mobile/client/home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home',
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
        }
      }
    })
    .state('tab.classes', {
      url: '/classes',
      views: {
        'tab-classes': {
          template: '<classes></classes>'
        }
      }
    })
    .state('tab.workout', {
      url: '/workout',
      views: {
        'tab-workout': {
          template: '<workout></workout>'
        }
      }
    })
    .state('tab.activities', {
      url: '/activities',
      views: {
        'tab-activities': {
          template: '<activities></activities>'
        }
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: '/packages/ionic-sample-mobile/client/profile/profile.html',
      controller: 'ProfileCtrl',
      controllerAs: 'profile',
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

  $urlRouterProvider.otherwise("/tab/home");
})
.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
});