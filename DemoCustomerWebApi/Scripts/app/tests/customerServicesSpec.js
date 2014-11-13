/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe('customerServicesSpec', function () {
    var httpBackend, _customerServices;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function (customerServices, $httpBackend) {
        _customerServices = customerServices;
        httpBackend = $httpBackend;
    }));

    it("should call Get  on api/Customers/GetAllCustomers and return 200", function () {
        var customers = new Array();
        httpBackend.expectGET(apiPaths.getAllCustomers).respond(200, customers);
        var promise = _customerServices.GetAllCustomer();
        promise.then(function (result) {
            expect(result.length).toBe(customers.length);
        });
        httpBackend.flush();
    });

    it("should call Get  on api/Customers/GetCustomer and return 200,customerinfo", function () {
        var customer = new Model.Customer();
        customer.CustomerID = 1;
        httpBackend.expectGET(apiPaths.getCustomer + "/?id=" + customer.CustomerID).respond(200, customer);
        var promise = _customerServices.GetCustomer(customer.CustomerID);
        promise.then(function (result) {
            //expect(result.status).toBe(200);
            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });

    it("should call Post  on api/Customers/CreateCustomer and return added customer", function () {
        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        httpBackend.expectPOST(apiPaths.createCustomer, customer).respond(customer);

        var promise = _customerServices.AddCustomer(customer);
        promise.then(function (result) {
            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });
    it("should call Delete  on api/Customers/DeleteCustomer and return deleted customerinfo", function () {
        var customer = new Model.Customer();

        //customer.Email = "abc@xyz.com";
        //customer.Name = "abc";
        customer.CustomerID = 1;

        httpBackend.expectDELETE(apiPaths.deleteCustomer + "/?id=" + customer.CustomerID).respond(customer);

        var promise = _customerServices.DeleteCustomer(customer.CustomerID);
        promise.then(function (result) {
            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });

    it("should call update  on api/Customers/UpdateCustomer and return updated customerinfo", function () {
        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        httpBackend.expectPOST(apiPaths.updateCustomer, customer).respond(customer);

        var promise = _customerServices.UpdateCustomer(customer);
        promise.then(function (result) {
            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });
});
//# sourceMappingURL=customerServicesSpec.js.map
