/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../app.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file


interface IcustomerServices {
    AddCustomer: (customer) => void;
    GetCustomer: (id) => void;
    DeleteCustomer: (id) => void;
    UpdateCustomer: (customer) => void;
    GetAllCustomer: () => void;
    
}

class customerServices implements IcustomerServices {
    private $resource;
   
    private customerResource;
    private getAllCustomerResource;
    private createCustomerResource;
    private updateCustomerResource;
    private deleteCustomerResource;
    private getCustomerResource;
    constructor($resource: ng.resource.IResourceService) {
    
        this.$resource = $resource;
       

        this.customerResource = this.$resource(apiPaths.customerApi);
        this.getAllCustomerResource = this.$resource(apiPaths.getAllCustomers);
        this.createCustomerResource = this.$resource(apiPaths.createCustomer);
        this.deleteCustomerResource = this.$resource(apiPaths.deleteCustomer+"/?id=:id", { Id: "@id" });;
        this.getCustomerResource = this.$resource(apiPaths.getCustomer + "/?id=:id", { Id: "@id" });
        this.updateCustomerResource = this.$resource(apiPaths.updateCustomer);
    }

    AddCustomer(customer) {
        var promise: ng.IPromise<any> = this.createCustomerResource.save(customer).$promise;
        return promise;
        
    }

    GetCustomer(id) {
        var promise: ng.IPromise<any> = this.getCustomerResource.get({ id: id }).$promise;
        return promise;
      
    }
    GetAllCustomer() {
        var promise: ng.IPromise<any> = this.getAllCustomerResource.query().$promise;
        return promise;
       
    }
    DeleteCustomer(id) {
        var promise: ng.IPromise<any> = this.deleteCustomerResource.delete({ id: id }).$promise;
        return promise;
       
      
    }
    UpdateCustomer(customer) {
        var promise: ng.IPromise<any> = this.updateCustomerResource.save(customer).$promise;
        return promise;
        
    }
}

// Update the app1 variable name to be that of your module variable
app.factory("customerServices", ['$resource', ($resource) =>
    new customerServices($resource)
]);
