/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file

var customerServices = (function () {
    function customerServices($resource) {
        this.$resource = $resource;

        this.customerResource = this.$resource(apiPaths.customerApi);
        this.getAllCustomerResource = this.$resource(apiPaths.getAllCustomers);
        this.createCustomerResource = this.$resource(apiPaths.createCustomer);
        this.deleteCustomerResource = this.$resource(apiPaths.deleteCustomer + "/?id=:id", { Id: "@id" });
        ;
        this.getCustomerResource = this.$resource(apiPaths.getCustomer + "/?id=:id", { Id: "@id" });
        this.updateCustomerResource = this.$resource(apiPaths.updateCustomer);
    }
    customerServices.prototype.AddCustomer = function (customer) {
        var promise = this.createCustomerResource.save(customer).$promise;
        return promise;
    };

    customerServices.prototype.GetCustomer = function (id) {
        var promise = this.getCustomerResource.get({ id: id }).$promise;
        return promise;
    };
    customerServices.prototype.GetAllCustomer = function () {
        var promise = this.getAllCustomerResource.query().$promise;
        return promise;
    };
    customerServices.prototype.DeleteCustomer = function (id) {
        var promise = this.deleteCustomerResource.delete({ id: id }).$promise;
        return promise;
    };
    customerServices.prototype.UpdateCustomer = function (customer) {
        var promise = this.updateCustomerResource.save(customer).$promise;
        return promise;
    };
    return customerServices;
})();

// Update the app1 variable name to be that of your module variable
app.factory("customerServices", [
    '$resource', function ($resource) {
        return new customerServices($resource);
    }
]);
//# sourceMappingURL=customerServices.js.map
