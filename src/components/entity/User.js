function  User(name, surname, age, phone) {
    if (!(name && surname && age && phone)){
        throw new Error("Invalid user");
    }
    this.id = 0;
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.phone = phone;
    this.getUserInfo = function () {
        alert("User: " + this.name + " " + this.surname);
    }
}