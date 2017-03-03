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
app.controller('videoCtrl',['$scope','$ionicSideMenuDelegate','$http','$timeout',function($scope,$ionicSideMenuDelegate,$http,$timeout){
    $scope.openLeftSideMenu = function(){
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.openRightSideMenu= function () {
        $ionicSideMenuDelegate.toggleRight();
    };
    //设置默认时间
    $scope.startDate=new Date(2017,0,1);
    $scope.endDate=function (){
        var AddDayCount=1;
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        if (m >= 1 && m <= 9) {
            m = "0" + m;
        }
        var d = dd.getDate();
        if (d >= 0 && d <= 9) {
            d = "0" + d;
        }
        return y+"-"+m+"-"+d;
    };
    $scope.hasMore=true;
    //用户名
    $scope.userName="";
    //可见性
    $scope.select="all";
    //起始页
    $scope.curson_id=1;

    //获取初始的新闻数据
    /*$http.get().success();*/





}]);






















