(function () {
    angular.module("mainApp").component("componentRegistration",{
        templateUrl: "componentRegistration.html",
        controller: registrationController
    });

    function registrationController(authService, $state) {
        var ctrl = this;
        ctrl.registration = function () {
            authService.registration(ctrl.email, ctrl.password, ctrl.name_new_user)
                .then(function success(response) {
                    console.log(response);
                    localStorage.setItem("auth_token", response.data.response.token);
                    authService.user_info()
                        .then(function success(response) {
                            authService.user = response.data.response;
                            $state.go("user_info");
                            console.log(authService.user);
                        }, function error(response) {
                            console.log(response);
                        });
                }, function error(response) {
                    console.log(response);
                });
        }
    }
})();