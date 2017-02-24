/*var app=angular.module('App',['ionic']);
/!*设置路由*!/
app.config(function ($stateProvider,$urlRouterProvider) {

});

/!*配置控制器*!/
app.controller('parentCtrl',['$scope','$state', function ($scope,$state) {

}]);
app.controller('sideMenuCtrl', ['$scope','$ionicSideMenuDelegate',
        function($scope,$ionicSideMenuDelegate){
            $scope.openLeftSideMenu = function(){
                $ionicSideMenuDelegate.toggleLeft();
            },
                $scope.openLeftSideMenuRight= function () {
                    $ionicSideMenuDelegate.toggleRight();
                }
        }]);*/
var app = angular.module('myApp', ['ionic','ngAnimate']);

/*实现页面的跳转——设置路由*/
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //页面跳转
    $ionicConfigProvider.tabs.position("bottom");
    $stateProvider.state('video',{
        url:'/video',
        templateUrl:'tpl/video.html',
        controller:'startCtrl'


    }).state('attention',{
        url:'/attention',
        templateUrl:'tpl/attention.html'

    }).state('hot',{
        url:'/hot',
        templateUrl:'tpl/hot.html'

    }).state('myAlbum',{
        url:'/myAlbum',
        templateUrl:'tpl/myAlbum.html'

    }).state('myCollection',{
        url:'/myCollection',
        templateUrl:'tpl/myCollection.html'
    }).state('myVideo',{
        url:'/myVideo',
        templateUrl:'tpl/myVideo.html'
    });
    /*重定向*/
    $urlRouterProvider.otherwise('video');

});
/*声明控制器*/
app.controller('parentCtrl',['$scope','$state','$ionicSideMenuDelegate','$ionicSlideBoxDelegate','$ionicModal', function ($scope, $state, $ionicSideMenuDelegater, $ionicSlideBoxDelegater, $ionicModal) {
    //跳转方法
    $scope.jump= function (arg) {
        $state.go(arg);
    }
}]);
app.controller('startCtrl',['$scope','$timeout','$interval','$state', function ($scope, $timeout, $interval, $state) {
    $scope.secondNumber=5;
    $timeout(function () {
        $state.go('video');
    },5000);
    $interval(function () {
        if($scope.secondNumber>0)
        $scope.secondNumber--;
    },1000);
    console.log(111);
}]);
app.controller('sideMenuCtrl', ['$scope','$ionicSideMenuDelegate',
    function($scope,$ionicSideMenuDelegate){
        $scope.openLeftSideMenu = function(){
            $ionicSideMenuDelegate.toggleLeft();
        },
            $scope.openLeftSideMenuRight= function () {
                $ionicSideMenuDelegate.toggleRight();
            }
    }]);
























