var app = angular.module('App', ['ionic','ngAnimate']);

/*ʵ��ҳ�����ת��������·��*/
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //ҳ����ת
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
    /*�ض���*/
    $urlRouterProvider.otherwise('/loading');

});
/*����������*/
app.controller('parentCtrl',['$scope','$state','$ionicSideMenuDelegate','$ionicSlideBoxDelegate','$ionicModal', function ($scope, $state, $ionicSideMenuDelegater, $ionicSlideBoxDelegater, $ionicModal) {
    //��ת����
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






















