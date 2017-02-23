/*var app=angular.module('App',['ionic']);
/!*����·��*!/
app.config(function ($stateProvider,$urlRouterProvider) {

});

/!*���ÿ�����*!/
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
var app = angular.module('myApp', ['ionic']);

/*ʵ��ҳ�����ת��������·��*/
app.config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //ҳ����ת
    $stateProvider.state('video',{
        url:'/video',
        templateUrl:'tpl/video.html'

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
    /*�ض���*/
    $urlRouterProvider.otherwise('video');

});
/*����������*/
app.controller('parentCtrl',['$scope','$state','$ionicSideMenuDelegate','$ionicSlideBoxDelegate','$ionicModal', function ($scope, $state, $ionicSideMenuDelegater, $ionicSlideBoxDelegater, $ionicModal) {
    //��ת����
    $scope.jump= function (arg) {
        $state.go(arg);
    }
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
























