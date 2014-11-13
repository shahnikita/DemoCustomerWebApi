/// <reference path="../app.ts" />


interface Ixyz {
    greeting: string;
    changeGreeting: () => void;
}

class xyz implements Ixyz {
    static serviceId: string = "xyz";
    greeting = "Hello";

    constructor(private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
    }

    changeGreeting() {
        this.greeting = "Bye";
    }
}

// Update the app1 variable name to be that of your module variable
app.factory(xyz.serviceId, ['$http', '$resource', ($http, $resource) =>
    new xyz($http, $resource)
]);
