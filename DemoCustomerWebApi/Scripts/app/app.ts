/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/angularjs/angular-resource.d.ts" />


var apiPaths = {
    customerApi: 'api/Customers/',
    getAllCustomers: "api/Customers/GetAllCustomers",
    createCustomer: "api/Customers/CreateCustomer",
    deleteCustomer: "api/Customers/DeleteCustomer",
    getCustomer: "api/Customers/GetCustomer",
    updateCustomer: "api/Customers/UpdateCustomer"

};

// Create the module and define its dependencies.
var app = angular.module('app', [
    'ngResource',
    'ngRoute'
]);

// Execute bootstrapping code and any dependencies.
app.run([
    '$q', '$rootScope', function ($q, $rootScope) {
    }]);
app.config([
    '$routeProvider',
    function routes($routeProvider) {
        $routeProvider.when('/DetailPage', {
            templateUrl: 'detailPage.html'
        });
        $routeProvider.when('/HomePage', {
            templateUrl: 'homePage.html'
        });
        $routeProvider.when('/AddCustomer', {
            templateUrl: 'addCustomer.html'
        });
       
       
        $routeProvider.otherwise({ redirectTo: '/HomePage' });
    }
]);

//# sourceMappingURL=app.js.map
