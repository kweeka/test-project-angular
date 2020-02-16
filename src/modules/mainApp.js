(function () {
    angular.module("mainApp", ["ui.router", "userModule", "filterModule"])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(true);
            $stateProvider.state({
                name: "users",
                url: "/users",
                component: "componentOne",
                resolve: {
                    users: function (userService) {
                        return userService.getAllUsers();
                    }
                }
            });
            $stateProvider.state({
                name: "user_add",
                url: "/userAdd",
                component: "componentThree"
            });
            $stateProvider.state({
                name: "user",
                url: "/user/{userId}",
                component: "componentTwo",
                resolve: {
                    user: function (userService, $transition$) {
                        return userService.getUserById($transition$.params().userId);
                    }
                }
            });
            $stateProvider.state({
                name: "map",
                url: "/map",
                component: "componentMap"
            });
            $urlRouterProvider.otherwise("/");
        });
})();
