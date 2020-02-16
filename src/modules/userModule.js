(function () {
    angular.module("userModule", [])
        .factory("userService", function () {
            var last_id = 0;
            var users = [];
            var userService = {
                getAllUsers: function () {
                    return users;
                },
                getUserById: function (i) {
                    for(var t=0; t < users.length; t++){
                        if (users[t].id === +i){
                            return users[t];
                        }
                    }
                    return null;
                },
                addNewUser: function (user) {
                    if (!(user instanceof User)){
                        throw new Error("Invalid object");
                    }
                    last_id++;
                    user.id = last_id;
                    users.push(user);

                    console.log(users);
                },
                delete_user: function (arr) {
                    console.log(arr);
                    for (var t=0; t < arr.length; t++){
                        for (var i = 0; i < users.length; i++){
                            if (users[i].id === arr[t]){
                                users.splice(i, 1);
                            }
                        }
                    }

                }
            };
            userService.addNewUser(new User("Ann", "Ture", 30, 723456));
            userService.addNewUser(new User("Igor", "Ture", 26, 723456));
            userService.addNewUser(new User("Vika", "Ture", 15, 723456));
            userService.addNewUser(new User("Alex", "Ture", 54, 723456));
            userService.addNewUser(new User("Cat", "Ture", 2, 723456));
            userService.addNewUser(new User("Alexander", "Ture", 2, 723456));
            userService.addNewUser(new User("Frerty", "Ture", 2, 723456));
            return userService;
            // function check(user, required_fields) {
            //     for(var i=0; i <required_fields.length; i++){
            //         var exist = false;
            //         for(var field in user){
            //             if (field === required_fields[i]){
            //                 exist = true;
            //                 break;
            //             }
            //         }
            //         if (!exist){
            //             return false;
            //         }
            //     }
            //     return true;
            // }

        });
})();

































