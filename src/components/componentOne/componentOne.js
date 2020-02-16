(function () {
    angular.module("mainApp").component("componentOne",{
        templateUrl: "componentOne.html",
        controller: oneController,
        bindings:{
            users: "="
        }
    });

    function oneController(userService) {
        var ctrl = this;
        ctrl.delete_user = function () {
            var arr_delete = [];
            for(var i=ctrl.users.length-1; i >= 0; i--){
                if(ctrl.users[i].checked){
                    arr_delete.push(ctrl.users[i].id);
                }
            }
            userService.delete_user(arr_delete);
            if (ctrl.delete_selector){
                if(ctrl.delete_selector  == "even"){
                    for (i=ctrl.users.length-1; i >= 0; i--){
                        if( i % 2 === 1) {
                            arr_delete.push(ctrl.users[i].id);
                        }
                    }
                }
                if(ctrl.delete_selector  == "odd"){
                    for (i=ctrl.users.length-1; i >= 0; i--){
                        if( i % 2 === 0) {
                            arr_delete.push(ctrl.users[i].id);
                        }
                    }
                }
                if(ctrl.delete_selector  == "all"){
                    arr_delete = ctrl.users.map(function (user) {
                        return user.id;
                    });
                }
                userService.delete_user(arr_delete);
            }
        }
    }
})();





















