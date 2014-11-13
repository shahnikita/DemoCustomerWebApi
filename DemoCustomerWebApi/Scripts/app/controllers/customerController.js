/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../app.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file

var customerController = (function () {
    // private newcustomer: Model.Customer;
    //constructor
    function customerController($scope, customerServices) {
        var _this = this;
        this.$scope = $scope;
        this.customerServices = customerServices;
        //default settings
        // $scope.newcustomer = this.newcustomer;
        $scope.customers = [];

        $scope.addCustomerClick = function (customer) {
            return _this.addCustomer(customer);
        };
        $scope.getAllCustomerClick = function () {
            return _this.getAllCustomers();
        };
        $scope.deleteCustomerClick = function (id) {
            return _this.deleteCustomer(id);
        };
        $scope.getcustomerbyIdClick = function (id) {
            return _this.getcustomer(id);
        };
        $scope.updateuserClick = function (customer) {
            return _this.updateCustomer(customer);
        };
    }
    customerController.prototype.deleteCustomer = function (id) {
        var _this = this;
        var promise = this.customerServices.DeleteCustomer(id);
        promise.then(function (result) {
            console.log(_this.$scope.customers);
            //for (var i = 0; i < this.$scope.customers.length; i++) {
            //    if (this.$scope.customers[i].CustomerID === id) {
            //        this.$scope.customers.splice(i, 1);
            //    }
            //}
        });
    };

    customerController.prototype.getAllCustomers = function () {
        var _this = this;
        var promise = this.customerServices.GetAllCustomer();
        promise.then(function (result) {
            _this.$scope.customers = result;
        });
    };
    customerController.prototype.getcustomer = function (id) {
        var _this = this;
        var promise = this.customerServices.GetCustomer(id);
        promise.then(function (result) {
            console.log(result);
            _this.$scope.customer = result;
        });
    };

    customerController.prototype.addCustomer = function (customer) {
        var _this = this;
        var promise = this.customerServices.AddCustomer(customer);
        promise.then(function (result) {
            _this.$scope.customers.push(result);
        });
    };
    customerController.prototype.updateCustomer = function (result) {
        var promise = this.customerServices.UpdateCustomer(result);
        promise.then(function (result) {
            console.log("update a customer");
        });
    };
    customerController.controllerId = "customerController";
    return customerController;
})();

// Update the app1 variable name to be that of your module variable
app.controller(customerController.controllerId, [
    '$scope', 'customerServices', function ($scope, customerServices) {
        return new customerController($scope, customerServices);
    }
]);
//# sourceMappingURL=customerController.js.map
