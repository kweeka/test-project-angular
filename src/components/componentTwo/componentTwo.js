(function () {
    angular.module("mainApp").component("componentTwo",{
        templateUrl: "componentTwo.html",
        controller: twoController,
        bindings: {
            user: "="
        }
    });

    function twoController() {
        var ctrl = this;
            console.log(ctrl.user);
    }
})();