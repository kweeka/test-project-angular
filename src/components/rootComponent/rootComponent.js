(function () {
    angular.module("mainApp").component("rootComponent",{
        templateUrl: "rootComponent.html",
        controller: rootController
    });

    function rootController() {
        var ctrl = this;
    }
})();