var app = angular.module('Todolist', ['ngRoute', 'LocalStorageModule']);

app.controller('MainCtrl', function ($scope, $route, $routeParams, $location) {});

app.controller('ContactCtrl', function ($scope, $routeParams) {});

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html'
        })
        .when('/list2', {
            templateUrl: 'list2.html',
            controller: 'list2'
        })

    .when('/list3', {
        templateUrl: 'list3.html',
        controller: 'list3'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
});


app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('Todolist-pate0357')
        //.setStorageType('sessionStorage')
        .setNotify(true, true)
});


app.controller('list1', function ($scope, localStorageService) {

    if (localStorageService.isSupported) {

        var todoList = localStorageService.get('todos1');
        if (!todoList) {
            $scope.arrayList = [{
                'title1': 'list 1'
                }, {
                'title1': 'list 1'
                }, {
                'title1': 'list 1'
                }];

            //Set local storage
            localStorageService.set("todos1", $scope.arrayList);
        } else {

            $scope.arrayList = todoList;
        }

    } else {

        alert("Local Storage is not supported batter luck next time!");
    }

    $scope.addThing = function (name) {

        var item = '{"title1":"' + $scope.name + '"}';

        var obj = JSON.parse(item);
        $scope.arrayList.push(obj);
        $scope.name = "";
        //Set local storage
        localStorageService.set("todos1", $scope.arrayList);
    }

    $scope.remove = function (index) {
        $scope.arrayList.splice(index, 1);
        localStorageService.set("todos1", $scope.arrayList);
    };
});

app.controller('list2', function ($scope, localStorageService) {

    if (localStorageService.isSupported) {

        var todoList = localStorageService.get('todos2');
        if (!todoList) {
            $scope.arrayList = [{
                'title2': 'list 2'
                }, {
                'title2': 'list 2'
                }, {
                'title2': 'list 2'
                }];

            //Set local storage
            localStorageService.set("todos2", $scope.arrayList);
        } else {

            $scope.arrayList = todoList;
        }

    } else {

        alert("Local Storage is not supported batter luck next time!");
    }

    $scope.addThing = function (name) {

        var item = '{"title2":"' + $scope.name + '"}';

        var obj = JSON.parse(item);
        $scope.arrayList.push(obj);
        $scope.name = "";
        //Set local storage
        localStorageService.set("todos2", $scope.arrayList);
    }

    $scope.remove = function (index) {
        $scope.arrayList.splice(index, 1);
        localStorageService.set("todos2", $scope.arrayList);
    };
});

app.controller('list3', function ($scope, localStorageService) {

    if (localStorageService.isSupported) {

        var todoList = localStorageService.get('todos3');
        if (!todoList) {
            $scope.arrayList = [{
                'title3': 'list 3'
                }, {
                'title3': 'list 3'
                }, {
                'title3': 'list 3'
                }];

            //Set local storage
            localStorageService.set("todos3", $scope.arrayList);
        } else {

            $scope.arrayList = todoList;
        }

    } else {

        alert("Local Storage is not supported batter luck next time!");
    }

    $scope.addThing = function (name) {

        var item = '{"title3":"' + $scope.name + '"}';

        var obj = JSON.parse(item);
        $scope.arrayList.push(obj);
        $scope.name = "";
        //Set local storage
        localStorageService.set("todos3", $scope.arrayList);
    }

    $scope.remove = function (index) {
        $scope.arrayList.splice(index, 1);
        localStorageService.set("todos3", $scope.arrayList);
    };
});