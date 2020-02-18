(function () {
    angular.module("mainApp").component("componentAuth",{
        templateUrl: "componentAuth.html",
        controller: authController
    });

    function authController(authService) {
        var ctrl = this;
        ctrl.authorization = function () {
            authService.auth(ctrl.email, ctrl.password, AuthTokenType.TEMPORARY)
                .then(function success(response) {
                console.log(response);
            }, function error(response) {
                console.log(response);
            });
        }
    }
})();