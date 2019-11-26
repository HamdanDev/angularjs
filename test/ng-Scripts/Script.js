/// <reference path="angular.js" />
/// <reference path="angular-ui-router.js" />

var myApp = angular.module("AppModule", ["ui.router"])
    .config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {

        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlRouterProvider.otherwise("/home");
        
        $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "Templates/_HomePartial.html",
            controller: "HomeController",
            controllerAs: "homeCtrl",
            data: {
                customData1: "Home strate custom data 1",
                customData2: "Home strate custom data 2"
            }
        })
        .state("courses", {
            url: "/courses",
            templateUrl: "Templates/_CoursesPartial.html",
            controller: "CoursesController",
            controllerAs: "coursesCtrl",
            data: {
                customData1: "courses strate custom data 1",
                customData2: "courses strate custom data 2"
            }
        })
        .state("studentParent", {
            url: "/students",
            controller: "StudentParentController",
            controllerAs: "stdParentCtrl",
            templateUrl: "Templates/_StudentParentPartial.html",
            resolve: {
                StudentsStatistics: function ($http) {
                    return $http.get("StudentService.asmx/GetStudentsStatistics")
                            .then(function (response) {
                                return response.data;
                            })
                }
            },
            abstract: true

        })
        .state("studentParent.students", {
            url: "/",
            templateUrl: "Templates/_StudentsPartial.html",
            controller: "StudentsController",
            controllerAs: "studentCtrl",
            resolve: {
                studentList: function ($http) {
                    return $http.get("studentservice.asmx/GetStudents")
                                .then(function (response) {
                                    return response.data;
                                })
                }
            }

        })
        .state("studentParent.StudentDetails", {
            url: "/:id",
            templateUrl: "Templates/_StudentDetailsPartial.html",
            controller: "studentDetailsController",
            controllerAs: "studentDetailsCtrl"
        })
        .state("studentsSearch", {
            url: "/studentsSearch/:name",
            templateUrl: "Templates/_StudentSearchPartial.html",
            controller: "studentSearchController",
            controllerAs: "studentSearchCtrl"
        })
        $locationProvider.html5Mode(true);
    });


myApp.controller("HomeController", function ($state) {
    this.Title = "Welcome Home !!!!";
    this.homeCustomData1 = $state.current.data.customData1;
    this.homeCustomData2 = $state.current.data.customData2;

    this.coursesCustomData1 = $state.get("courses").data.customData1;
    this.coursesCustomData2 = $state.get("courses").data.customData2;
});

myApp.controller("CoursesController", function () {
    var courses = [
        { name: "C#" },
        { name: "VB" },
        { name: "SQl Server" },
        { name: "Asp.Net" },
        { name: "Bootstrap" },
        { name: "AngularJs" }];
    this.courses = courses;
});


myApp.controller("StudentsController", function (studentList, $state, $location) {
    var vm = this;

    vm.SearchStudent = function () {
        $state.go("studentsSearch", { name: vm.name });
    }

    //reloadPartial
    vm.ReloadData = function () {
        $state.reload();
    }

    //call for the page
    vm.students = studentList;
});

myApp.controller("studentDetailsController", function ($http, $stateParams) {
    //get Data by id, from web service 
    var vm = this;
    $http({
        url: "studentservice.asmx/GetStudent",
        method: 'GET',
        params: { id: $stateParams.id }

    }).then(function (GetInfo) {
        vm.student = GetInfo.data
    })
});

myApp.controller("studentSearchController", function ($http, $stateParams) {
    //get Data by id, from web service 
    var vm = this;

    if ($stateParams.name) {
        $http({
            url: "studentservice.asmx/GetStudentByName",
            method: 'GET',
            params: { name: $stateParams.name }

        }).then(function (GetInfo) {
            vm.students = GetInfo.data
        })
    }
    else {
        $http.get("studentservice.asmx/GetStudents").then(function (response) {
            vm.students = response.data;
        })
    }
});

myApp.controller("StudentParentController", function (StudentsStatistics) {
    this.total = StudentsStatistics.total;
    this.ageAvrage = StudentsStatistics.ageAvrage;
});

