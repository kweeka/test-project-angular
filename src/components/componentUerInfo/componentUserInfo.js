(function () {
    angular.module("mainApp").component("componentUserInfo",{
        templateUrl: "componentUserInfo.html",
        controller: userInfoController
    });

    function userInfoController(authService, $state) {
        var ctrl = this;
        ctrl.user = null;
        ctrl.user_info = function () {
            authService.user_info()
                .then(function success(response) {
                    ctrl.user = response.data.response;
                    console.log(response);
                }, function error(response) {
                    console.log(response);
                });
        };
        ctrl.$onInit = function() {
            if(authService.user){
                ctrl.user = authService.user;
            } else {
                if(localStorage.getItem("auth_token")){
                    ctrl.user_info();
                } else {
                    $state.go("auth");
                }
            }
        }
    }
})();