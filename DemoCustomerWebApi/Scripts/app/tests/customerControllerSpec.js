/// <reference path="../../typings/jasmine/jasmine.d.ts" />
describe('customerControllerSpec', function () {
    var scope, $controllerConstructor, mockedCustomerServices, customerController, $qService, sce, defered;
    beforeEach(angular.mock.module("app"));

    beforeEach(inject(function ($controller, $rootScope, $q, $sce, customerServices) {
        scope = $rootScope.$new(true);
        $controllerConstructor = $controller;
        mockedCustomerServices = customerServices;
        $qService = $q;
        sce = $sce;

        // Initialize fixture
        initializeTest();
        defered = $q.defer();
    }));

    //this will test setup of scope in controller's constructor
    it('should setup scope in constructor', function () {
        expect(scope.customers).toBeDefined();
        expect(scope.addCustomerClick).toBeDefined();
        expect(scope.getAllCustomerClick).toBeDefined();
        expect(scope.deleteCustomerClick).toBeDefined();
        expect(scope.getcustomerbyIdClick).toBeDefined();
        expect(scope.updateuserClick).toBeDefined();
    });

    it('should able to add customer', function () {
        defered = $qService.defer();
        scope.customers = [];
        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        scope.customer = customer;

        spyOn(mockedCustomerServices, "AddCustomer").and.callFake(function (customer) {
            return defered.promise;
        });
        scope.addCustomerClick(customer);
        defered.resolve(customer);
        scope.$root.$apply();
        expect(scope.customers.length).toBe(1);
    });
    it('should able to get all customer', function () {
        defered = $qService.defer();
        var customers = [];
        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        customers.push(customer);

        spyOn(mockedCustomerServices, "GetAllCustomer").and.callFake(function () {
            return defered.promise;
        });
        scope.getAllCustomerClick();
        defered.resolve(customers);
        scope.$root.$apply();
        expect(scope.customers.length).toBe(1);
    });
    it('should able to get customer by id', function () {
        defered = $qService.defer();

        var customer = new Model.Customer();
        customer.Email = "abc@xyz.com";
        customer.Name = "abc";
        customer.CustomerID = 1;

        spyOn(mockedCustomerServices, "GetCustomer").and.returnValue(defered.promise);
        scope.getcustomer(customer.CustomerID);
        defered.resolve(customer);
        scope.$root.$apply();
        expect(scope.customer.CustomerID).toBe(customer.CustomerID);
    });
    it('should able to delete customer by id', function () {
        defered = $qService.defer();

        scope.customers = [];
        var customer = {
            Email: "abc@xyz.com",
            Name: "abc",
            CustomerID: 1
        };
        scope.customers.push(customer);
        scope.customers.push({ Email: "abc@xyz.com", Name: "abc", CustomerID: 2 });

        spyOn(mockedCustomerServices, "DeleteCustomer").and.returnValue(defered.promise);

        scope.deleteCustomerClick(customer.CustomerID);
        defered.resolve(customer);

        scope.$root.$apply();
        expect(scope.customers).toNotContain(customer);
    });

    function initializeTest() {
        customerController = $controllerConstructor('customerController', { $scope: scope, customerServices: mockedCustomerServices });
    }
});
//# sourceMappingURL=customerControllerSpec.js.map
