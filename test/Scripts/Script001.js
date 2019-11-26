/// <reference path="angular.js"/>

// myApp.controller("ControllerName3", function ($scope) {});

var myApp = angular.module("ModuleName", []);

/* Example 1 */
myApp.controller("ControllerName", function ($scope) {
    var employee = {
        firstname: "david",
        lastname: "zack",
        func: "web designer"
    };
    $scope.employee = employee;
});
/* End of Example 2 */

/* Example 1 */
myApp.controller("ControllerName2", function ($scope) {
    var picture = {
        name: "MyPicture",
        info: "Random Picture",
        pic: "../Images/pic.png"
    };
    $scope.picture = picture;
});
/* End of Example 2 */

/* Example 3 */
myApp.controller("ControllerName3", function ($scope) {
    $scope.message = "Hello ng!"
});
/* End of Example 3 */

/* Example 4 *///ng-repeat
myApp.controller("ControllerName4", function ($scope) {
    var employees = [
        { firstname: "david", lastname: "zack", gender: "Male", salary: 40000 },
        { firstname: "Jon",   lastname: "Smith", gender: "Male", salary: 50000 },
        { firstname: "Willam",lastname: "whale", gender: "Male", salary: 30000 },
        { firstname: "sara",  lastname: "Jackson", gender: "Female", salary: 10000 },
    ];
    $scope.employees = employees;
});
/* End of Example 4 */

/* Example 5 */
myApp.controller("ControllerName5", function ($scope) {
    var countries = [
        { name: "USA", cities: [{ name: "Los Angelos" }, { name: "New Mexico" }, { name: "New York" }] },
        { name: "UK", cities: [{ name: "London" }, { name: "Manchester" }, { name: "Chelsea" }] },
        { name: "Morocco", cities: [{ name: "Tetouan" }, { name: "Casa Blanca" }, { name: "Rabat" }] }
    ];
    $scope.countries = countries;
});
/* End of Example 5 */

/* Example 6 */
myApp.controller("ControllerName6", function ($scope) {
    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.Net", likes: 0, dislikes: 0 },
        { name: "SqlServer", likes: 0, dislikes: 0 },
        { name: "AngularJs", likes: 0, dislikes: 0 }
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {

        technology.likes++;
    }
    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    }
});
/* End of Example 6 */

/* Example 7, 8 and 9*/
myApp.controller("ControllerName7", function ($scope) {
    var employees = [
     { firstname: "david",dateofbirth:new Date("November 23,1980") , gender: "Male", salary: 40000, city:1},
     { firstname: "flen", dateofbirth: new Date("May 12,1991"), gender: "Male", salary: 50000, city: 2 },
     { firstname: "Willam", dateofbirth: new Date("April 2,1993"), gender: "Male", salary: 300000.300, city: 3 },
     { firstname: "david", dateofbirth: new Date("November 23,1980"), gender: "Male", salary: 40000 ,city:1},
     { firstname: "Jon", dateofbirth: new Date("May 12,1991"), gender: "Male", salary: 50000, city: 2 },
     { firstname: "Willam", dateofbirth: new Date("April 2,1993"), gender: "Male", salary: 300000.300, city: 3 },
     { firstname: "sara", dateofbirth: new Date("August 30,1989"), gender: "Female", salary: 10000.20, city: 4 },
    ];
    $scope.employees = employees;
    $scope.rowLimit = 3;


    $scope.sort = { column: '', descending: false ,classname:'' };
    $scope.changeSorting = function (column) {
        var sort = $scope.sort;
        if (sort.column == column)
            sort.descending = !sort.descending;
        else
        {
            sort.column = column;
            sort.descending = false;
        }
    };
    
});
/* End of Example 7, 8 and 9*/


/*Example 11*/
//Calling Service
myApp.controller("ControllerName11", function ($scope, StringService) {

    $scope.transformString = function (input)
    {
        $scope.output = StringService.ProcessString(input);
    }

});
/* End of Example 11*/


/*Example 12*/
//myApp.controller("ControllerName12", function ($scope, $location, $ancherScroll) {
//    $scope.scrollto = function (scrollLocation) {
//        $location.hash(scrollLocation);
//        $ancherScroll();
//    }

//});


myApp.controller('ControllerName12', ['$scope', '$location', '$anchorScroll',
  function ($scope, $location, $anchorScroll) {
      $scope.goto = function (location) {
          $location.hash(location);
          $anchorScroll();
      };
  }]);

/*End of Example 12*/


