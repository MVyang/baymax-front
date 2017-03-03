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
app.controller('videoCtrl',['$scope','$ionicSideMenuDelegate','$http','$timeout',function($scope,$ionicSideMenuDelegate,$http,$timeout){
    $scope.openLeftSideMenu = function(){
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.openRightSideMenu= function () {
        $ionicSideMenuDelegate.toggleRight();
    };
    //����Ĭ��ʱ��
    $scope.startDate=new Date(2017,0,1);
    $scope.endDate=function (){
        var AddDayCount=1;
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//��ȡAddDayCount��������
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//��ȡ��ǰ�·ݵ�����
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
    //�û���
    $scope.userName="";
    //�ɼ���
    $scope.select="all";
    //��ʼҳ
    $scope.curson_id=1;

    //��ȡ��ʼ����������
    /*$http.get().success();*/





}]);






















