class User {

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        // this.age = 40;
        this.age = age;
    }

    sayHi() {
        //   alert(this.name);
        console.log(this.name + " " + this.surname + " " + this.age);
    }

}

let user = new User("Rado", "Gervazov", 40);
user.sayHi();