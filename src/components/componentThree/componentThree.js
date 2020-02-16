(function () {
    angular.module("mainApp").component("componentThree",{
        templateUrl: "componentThree.html",
        controller: threeController,
        bindings:{
            user_add: "="
        }
    });

    function threeController(userService, $state) {
        var ctrl = this;
        ctrl.clear_error_field = function (field) {
            ctrl['error_' + field] = false;
        };
        ctrl.addNewUser = function () {
            ctrl.error_name = false;
            ctrl.error_surname = false;
            ctrl.error_age = false;
            ctrl.error_phone = false;
            if (ctrl.name.length < 3 || ctrl.name.length > 12 ){
                ctrl.error_name = "Name is not correct";
            }
            if (ctrl.surname.length < 6 || ctrl.surname.length > 20){
                ctrl.error_surname = "Surname is not correct";
            }
            if (ctrl.age.length > 3){
                ctrl.error_age = "Age is not correct";
            }
            if (isNaN(+ctrl.phone)){
                ctrl.error_phone = "Phone is not correct";
            }
            if(ctrl.error_name || ctrl.error_surname || ctrl.error_age || ctrl.error_phone){
                return;
            }
            userService.addNewUser(new User(
                ctrl.name,
                ctrl.surname,
                +ctrl.age,
                ctrl.phone
            ));
            $state.go("users");
        };
    }
})();