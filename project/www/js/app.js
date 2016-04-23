// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var project = angular.module('ionic-navview', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	
	.state('home' , {
		url:'/',
		templateUrl: 'templates/home.html'
	})
    .state('history' , {
        url:'/history',
        templateUrl: 'templates/history.html'
    })
    .state('list1' , {
        url:'/toOwn',
        templateUrl: 'templates/list1.html'
    })
    .state('list2' , {
        url:'/expensive',
        templateUrl: 'templates/list2.html'
    })
    .state('allcars' , {
        url: '/allcars',
        templateUrl: 'templates/allcars.html'
    })
	.state('car' , {
        url:'/car:carId',
		templateUrl: function ($stateParams){
            console.log($stateParams.carId);
            return 'templates/car' + $stateParams.carId + '.html';
            
        },
        controller: function($scope, $stateParams) {
            $scope.carId = $stateParams.carId;
        }
	});
})

project.controller("getCarById", function($scope, $http) {
    $scope.vehicle;
    
    $scope.getData = function() {
        $http({
              method: 'GET',
              url: "http://edvalas.cloudapp.net/getcarbyid.php",
              params: {id: parseInt($scope.vehicle)}
            })
          .success(function(data) {
            $scope.cars = data;
            //console.log($scope.cars, $scope.vehicle);
        })
          .error(function(data) {
            alert("something is wrong");
        })
    }
    
});

project.controller("getListByPref", function($scope, $http) {

    $scope.getList = function() {
        $http({
              method: 'GET',
              url: "http://edvalas.cloudapp.net/getlistbypref.php"
            })
          .success(function(data) {
            $scope.cars = data;
            console.log($scope.cars);
        })
          .error(function(data) {
            alert("something is wrong");
        })
    }
    
});

project.controller("getListByPrice", function($scope, $http) {

    $scope.getListPrice = function() {
        $http({
              method: 'GET',
              url: "http://edvalas.cloudapp.net/getlistbyprice.php"
            })
          .success(function(data) {
            $scope.cars = data;
            console.log($scope.cars);
        })
          .error(function(data) {
            alert("something is wrong");
        })
    }
    
});

project.controller("mySearch", function($scope, $http) {
    $scope.name;
    
    $scope.search = function() {
        $http({
              method: 'GET',
              url: "http://edvalas.cloudapp.net/search.php",
              params: {name: $scope.name}
            })
          .success(function(data) {
            $scope.result = data;
            console.log($scope.result, $scope.name);
        })
          .error(function(data) {
            alert("something is wrong");
        })
    }
    
    $scope.clear = function() {
        $scope.name = "";
        
        var clearlist = angular.element( document.querySelector( '#div3' ) );
        clearlist.empty();
    }
    
});

project.controller("historyController", function($scope, $rootScope, $ionicHistory, $state) {
  
  $scope.visited;
  
  $scope.showHistory = function() {
    $scope.visited = $ionicHistory.viewHistory();
      console.log($scope.visited.views);
  };
    
  $scope.clearHistory = function() {
    $ionicHistory.clearHistory();
    $scope.showHistory();
    $ionicHistory.nextViewOptions({
        historyRoot: true
    });
      
    $state.go("home");
  };
});

project.controller("updatePrice", function($scope, $http, $state, $ionicHistory) {
    $scope.vehicle;
    $scope.newPrice;
    
    $scope.update = function() {
        $http({
              method: 'GET',
              url: "http://edvalas.cloudapp.net/updatePrice.php",
              params: {id: parseInt($scope.vehicle), price: $scope.newPrice}
            })
          .success(function(data) {
            $scope.result = data;
            $ionicHistory.goBack(-1);
        })
          .error(function(data) {
            alert("something is wrong");
        })
    }
});

project.controller("updatePref", function($scope, $http, $state) {
   $scope.vehicle;
   $scope.newPref;
   $scope.oldPref;
   
   $scope.updatePref = function() {
       $http({
              method: 'GET',
              url: "http://edvalas.cloudapp.net/updatePref.php",
              params: {id: parseInt($scope.vehicle), newpref: parseInt($scope.newPref), oldpref: parseInt($scope.oldPref)}
            })
          .success(function(data) {
            $scope.result = data;
            console.log("id: " + $scope.vehicle + " newPref: " + $scope.newPref + " oldPref: " + parseInt($scope.oldPref));
            $state.go("list1");
        })
          .error(function(data) {
            alert("something is wrong");
        })
   }
});