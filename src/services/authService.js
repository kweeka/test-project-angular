(function () {
    angular.module("apiModule")
        .factory("authService", function ($http) {
            return {
                user: null,
                auth: function (email, password, token_type) {
                    return $http({
                        method: 'POST',
                        url: 'https://dev1.agafonov.me/api/v1/auth/login',
                        data: {email: email, password: password, token_type: token_type}
                    });
                },
                registration: function (email, password, name) {
                    return $http({
                        method: 'POST',
                        url: 'https://dev1.agafonov.me/api/v1/user/register',
                        data: {email: email, password: password, name: name}
                    });
                },
                user_info: function () {
                    return $http({
                        method: 'GET',
                        url: 'https://dev1.agafonov.me/api/v1/user',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem("auth_token")
                        }
                    });
                }
            };
        });
})();