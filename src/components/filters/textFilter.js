(function () {
    angular.module("mainApp").component("textFilter",{
        templateUrl: "textFilter.html",
        controller: textFilter,
        bindings: {
            text: "=",
            label: "<"
        }
    });

    function textFilter() {
        var ctrl = this;

    }
})();