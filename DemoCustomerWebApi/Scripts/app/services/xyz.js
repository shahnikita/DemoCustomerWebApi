/// <reference path="../app.ts" />

var xyz = (function () {
    function xyz($http, $resource) {
        this.$http = $http;
        this.$resource = $resource;
        this.greeting = "Hello";
    }
    xyz.prototype.changeGreeting = function () {
        this.greeting = "Bye";
    };
    xyz.serviceId = "xyz";
    return xyz;
})();

// Update the app1 variable name to be that of your module variable
app.factory(xyz.serviceId, [
    '$http', '$resource', function ($http, $resource) {
        return new xyz($http, $resource);
    }
]);
//# sourceMappingURL=xyz.js.map
