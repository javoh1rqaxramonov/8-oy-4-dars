"use strict";
class User {
    constructor(title, age, id) {
        this.title = title;
        this.age = age;
        this.id = id;
    }
    about() {
        console.log(`User - ${this.title}, Age - ${this.age}, Id - ${this.id}`);
    }
}
class Owner extends User {
    constructor(title, age, id) {
        super(title, age, id);
    }
    UpgAdmin(admin) {
        console.log(`${this.title} ${admin.title}ni darajasi oshirirdi`);
    }
}
class Admin extends User {
    constructor(title, age, id) {
        super(title, age, id);
    }
    newUser() {
        console.log(`Admin shu ${this.title}ni yaratdi`);
    }
    deleteUser() {
        console.log(`Admin shu ${this.title}ni ochirdi`);
    }
}
class Bot extends User {
    constructor(title, age, id) {
        super(title, age, id);
    }
}
const newOwner = new Owner("Javohir", 16, 1);
newOwner.about();
const newAdmin = new Admin("Javohir", 99, 2);
newAdmin.about();
newAdmin.newUser();
newAdmin.deleteUser();
newOwner.UpgAdmin(newAdmin);
const newbot = new Bot("Bot", 0, 3);
newbot.about();
