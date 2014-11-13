
/// <reference path="../../typings/jasmine/jasmine.d.ts" />



describe('customerServicesSpec', () => {
    var httpBackend: ng.IHttpBackendService, _customerServices;

    beforeEach(angular.mock.module("app"));

    beforeEach(inject((customerServices:customerServices,$httpBackend: ng.IHttpBackendService) => {
        _customerServices = customerServices;
        httpBackend = $httpBackend;
    }));

    it("should call Get  on api/Customers/GetAllCustomers and return 200", () => {

        var customers = new Array<Model.Customer>();
        httpBackend.expectGET(apiPaths.getAllCustomers).respond(200,customers);
        var promise = _customerServices.GetAllCustomer();
        promise.then(result=> {
            expect(result.length).toBe(customers.length);
        });
        httpBackend.flush();
    });

    it("should call Get  on api/Customers/GetCustomer and return 200,customerinfo", () => {

        var customer = new Model.Customer();
        customer.CustomerID = 1;
        httpBackend.expectGET(apiPaths.getCustomer +"/?id=" + customer.CustomerID).respond(200,customer);
        var promise = _customerServices.GetCustomer(customer.CustomerID);
        promise.then(result=> {
            //expect(result.status).toBe(200);
            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });

    it("should call Post  on api/Customers/CreateCustomer and return added customer", () => {
        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        httpBackend.expectPOST(apiPaths.createCustomer, customer).respond(customer);

        var promise = _customerServices.AddCustomer(customer);
        promise.then(result=> {

            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });
    it("should call Delete  on api/Customers/DeleteCustomer and return deleted customerinfo", () => {
        var customer = new Model.Customer();
        //customer.Email = "abc@xyz.com";
        //customer.Name = "abc";
        customer.CustomerID = 1;

        httpBackend.expectDELETE(apiPaths.deleteCustomer + "/?id=" + customer.CustomerID).respond(customer);

        var promise = _customerServices.DeleteCustomer(customer.CustomerID);
        promise.then(result=> {

            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });

    it("should call update  on api/Customers/UpdateCustomer and return updated customerinfo", () => {
        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        httpBackend.expectPOST(apiPaths.updateCustomer,customer).respond(customer);

        var promise = _customerServices.UpdateCustomer(customer);
        promise.then(result=> {

            expect(result.CustomerID).toBe(customer.CustomerID);
        });
        httpBackend.flush();
    });


}) 