/* Example 10 */
myApp.controller("ControllerName10", function ($scope) {
    var employees = [
     { firstname: "Someone", dateofbirth: new Date("November 23,1980"), gender: "Male", salary: 40000, city: 1 },
     { firstname: "flen", dateofbirth: new Date("May 12,1991"), gender: "Male", salary: 50000, city: 2 },
     { firstname: "Willam", dateofbirth: new Date("April 2,1993"), gender: "Male", salary: 300000.300, city: 3 },
     { firstname: "david", dateofbirth: new Date("November 23,1980"), gender: "Male", salary: 40000, city: 1 },
     { firstname: "Jon", dateofbirth: new Date("May 12,1991"), gender: "Male", salary: 50000, city: 2 },
     { firstname: "Willam", dateofbirth: new Date("April 2,1993"), gender: "Male", salary: 300000.300, city: 3 },
     { firstname: "sara", dateofbirth: new Date("August 30,1989"), gender: "Female", salary: 10000.20, city: 4 },
    ];
    $scope.employees = employees;
   $scope.employeeView = "employee.html"
});
/* End of Example 10 */
