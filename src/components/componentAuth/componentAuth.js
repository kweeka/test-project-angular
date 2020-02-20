(function () {
    angular.module("mainApp").component("componentAuth",{
        templateUrl: "componentAuth.html",
        controller: authController
    });

    function authController(authService, $state) {
        var ctrl = this;
        ctrl.authorization = function () {
            authService.auth(ctrl.email, ctrl.password, AuthTokenType.TEMPORARY)
                .then(function success(response) {
                console.log(response);
                localStorage.setItem("auth_token", response.data.response.token);
                $state.go("user_info");
            }, function error(response) {
                console.log(response);
            });
        }
    }
})();