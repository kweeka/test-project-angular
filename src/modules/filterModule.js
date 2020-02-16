(function () {
    angular.module("filterModule", [])
        .filter("filterService", function () {
            return function (users, value, reverse) {
                if (reverse){
                    console.log(users);
                    console.log(value);
                    console.log(reverse);
                    for (var j = users.length - 1; j > 0; j--) {
                        for (var i = 0; i < j; i++) {
                            if (users[i][value] > users[i + 1][value]) {
                                var temp = users[i];
                                users[i] = users[i + 1];
                                users[i + 1] = temp;
                            }
                        }
                    }
                } else {
                    for (var j = users.length - 1; j > 0; j--) {
                        for (var i = 0; i < j; i++) {
                            if (users[i][value] < users[i + 1][value]) {
                                var temp = users[i];
                                users[i] = users[i + 1];
                                users[i + 1] = temp;
                            }
                        }
                    }
                }
                return users;
            }
        });
})();