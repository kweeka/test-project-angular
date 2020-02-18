(function () {
    angular.module("apiModule")
        .factory("authService", function ($http) {
            return {
                auth: function (email, password, token_type) {
                    return $http({
                        method: 'POST',
                        url: 'https://dev1.agafonov.me/api/v1/auth/login',
                        data: {email: email, password: password, token_type: token_type}
                    });
                }
            };
        });
})();