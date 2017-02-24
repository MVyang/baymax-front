var app = angular.module('App', ['ionic','ngAnimate']);

/*实现页面的跳转——设置路由*/
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //页面跳转
    $stateProvider.state('loading',{
        url:'/loading',
        templateUrl:'tpl/loading.html'
    }).state('video',{
        url:'/video',
        templateUrl:'tpl/video.html',
        controller:'videoCtrl'
    }).state('hot',{
        url:'/hot',
        templateUrl:'tpl/hot.html'

    }).state('recomment',{
        url:'/recomment',
        templateUrl:'tpl/recomment.html'

    }).state('whiltList',{
        url:'/whiltList',
        templateUrl:'tpl/whiltList.html'
    });
    /*重定向*/
    $urlRouterProvider.otherwise('/loading');

});
/*声明控制器*/
app.controller('parentCtrl',['$scope','$state','$ionicSideMenuDelegate','$ionicSlideBoxDelegate','$ionicModal', function ($scope, $state, $ionicSideMenuDelegater, $ionicSlideBoxDelegater, $ionicModal) {
    //跳转方法
    $scope.jump= function (arg) {
        $state.go(arg);
    }
}]);
/*loading Controller*/
app.controller('loadCtrl',['$scope',function($scope){

}]);
/*video Controller*/
app.controller('videoCtrl',['$scope','$ionicSideMenuDelegate',function($scope,$ionicSideMenuDelegate){
    $scope.openLeftSideMenu = function(){
        $ionicSideMenuDelegate.toggleLeft();
    }
}]);






















