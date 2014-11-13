// Update the reference to app1.ts to be that of your module file.
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package to resolve the .d.ts reference paths,
// then adjust the path value to be relative to this file
// <reference path="../../typings/angularjs/angular-resource.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../app.ts" />
interface IExampleScope extends ng.IScope {
    greeting: string;
    changeGreeting: () => void;
}

interface IExample {

}

class Example implements IExample {
    static controllerId: string = "Example";
    
    constructor(private $scope: IExampleScope, private $http: ng.IHttpService, private $resource: ng.resource.IResourceService) {
        $scope.greeting = "Hello";
        $scope.changeGreeting = () => this.changeGreeting();
    }

    private changeGreeting() {
        this.$scope.greeting = "Bye";
    }
}

// Update the app1 variable name to be that of your module variable
app.controller(Example.controllerId, ['$scope', '$http', '$resource', ($scope, $http, $resource) =>
    new Example($scope, $http, $resource)
]);
