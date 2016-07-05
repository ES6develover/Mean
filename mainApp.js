var mainApp = angular.module("mainApp", ["ui.router", "ngMessages"]);
mainApp.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('index.html', '/login');
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "partials/welcomepage.html",
      controller: "login",
      data: {}
    })

  $stateProvider
    .state('welcome', {
      url: "/welcome",
      templateUrl: "partials/welcomePage1.html",
      controller: "welcome1",
      data: {}
    })

$stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1List.html",
      controller: "state1",
      data: {}
 
   })
});
mainApp.controller("login", function ($scope, $state, $http) {
  // Submit form function
  var x=false;
  $scope.signin = function () {
    $http.get("data/userlist.json").then(function (response) {
      $scope.result = response.data;
       angular.forEach($scope.result, function(data){
              if(data.username==$scope.login.email){
               $state.go('welcome');
              x=false;
                return;
              }
         else{
            x=true;
           
              } 
               })
       
  });
    if(x==true){
         
         alert("Authentication failed");
       }
    }
 
});
              

mainApp.controller("welcome1", function ($scope, $state) {
  
$scope.userPrf = function () {
  alert("coming");
               $state.go('state1');
              }
});


mainApp.controller("state1", function ($scope) {
  $scope.items = ["One", "Two", "Three"];
});