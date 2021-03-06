'use strict';

var app = angular.module('someApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { 
     url: '/',
     templateUrl: '/partials/home/home.html', 
     controller: 'homeCtrl' })

  $urlRouterProvider.otherwise('/');
});

app.controller('homeCtrl', function($scope,$sessionStorage) {
  console.log('homeCtrl');
  $http.get('/users')
  .then(function(res) {
    console.log('res.data:',res.data);
    $scope.users = res.data;
  }, function(err) {
    console.log('error:',err);
  });


  $scope.addUser = function() {
    var user = {
      user: $scope.user,
      date: $scope.date,
      complete: 0
    };
    $http.post('/users', users)
    .then(function(res) {
      console.log('response:',res);
    }, function(err) {
      console.log('error:',err);
    });
  }

