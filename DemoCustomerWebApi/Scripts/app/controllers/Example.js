/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../app.ts" />

var Example = (function () {
    function Example($scope, $http, $resource) {
        var _this = this;
        this.$scope = $scope;
        this.$http = $http;
        this.$resource = $resource;
        $scope.greeting = "Hello";
        $scope.changeGreeting = function () {
            return _this.changeGreeting();
        };
    }
    Example.prototype.changeGreeting = function () {
        this.$scope.greeting = "Bye";
    };
    Example.controllerId = "Example";
    return Example;
})();

// Update the app1 variable name to be that of your module variable
app.controller(Example.controllerId, [
    '$scope', '$http', '$resource', function ($scope, $http, $resource) {
        return new Example($scope, $http, $resource);
    }
]);
//# sourceMappingURL=Example.js.map
