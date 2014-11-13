/// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../app.ts" />
// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file

interface IcustomerControllerScope extends ng.IScope {
    // newcustomer: Model.Customer;
    customers: Array<Model.Customer>;
    customer: Model.Customer;

    addCustomerClick: (customer) => void;
    getAllCustomerClick: () => void;
    deleteCustomerClick: (id) => void;
    getcustomerbyIdClick: (id) => void;
    updateuserClick: (customer) => void;
}

interface IcustomerController {
   
}

class customerController implements IcustomerController {
    static controllerId: string = "customerController";
   
   // private newcustomer: Model.Customer;
    //constructor
    constructor(private $scope: IcustomerControllerScope,
        private customerServices) {
        //default settings

       // $scope.newcustomer = this.newcustomer;
        $scope.customers = [];
      
      
        $scope.addCustomerClick = (customer) => this.addCustomer(customer);
        $scope.getAllCustomerClick = () => this.getAllCustomers();
        $scope.deleteCustomerClick = (id) => this.deleteCustomer(id);
        $scope.getcustomerbyIdClick = (id) => this.getcustomer(id);
        $scope.updateuserClick = (customer) => this.updateCustomer(customer);

       
    }
    private deleteCustomer(id) {
        var promise = this.customerServices.DeleteCustomer(id);
        promise.then(result=> {
            console.log(this.$scope.customers);
            //for (var i = 0; i < this.$scope.customers.length; i++) {
            //    if (this.$scope.customers[i].CustomerID === id) {
            //        this.$scope.customers.splice(i, 1);
            //    }
            //}
        });
    }
   
    private getAllCustomers() {
        var promise = this.customerServices.GetAllCustomer();
        promise.then(result=> {
            this.$scope.customers = result;
        });
    }
    private getcustomer(id) {
        var promise = this.customerServices.GetCustomer(id);
        promise.then(result=> {
            console.log(result);
            this.$scope.customer = result;
        });
    }

    private addCustomer(customer) {
       
        var promise = this.customerServices.AddCustomer(customer);
        promise.then(result=> {           
          
            this.$scope.customers.push(result);
        });
    }
    private updateCustomer(result) {
        var promise = this.customerServices.UpdateCustomer(result);
        promise.then(result=> {
            console.log("update a customer");
        });
    }
   
}

// Update the app1 variable name to be that of your module variable
app.controller(customerController.controllerId, ['$scope', 'customerServices', ($scope, customerServices ) =>
    new customerController($scope, customerServices)
]);
