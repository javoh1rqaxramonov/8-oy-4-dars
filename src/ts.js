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
class Admin extends User {
    constructor(title, age, id) {
        super(title, age, id);
    }
    deleteUser() {
        console.log(`${this.title} ochirildi`);
    }
    createUser() {
        console.log(`${this.title} yaratildi`);
    }
}
class Owner extends User {
    constructor(title, age, id) {
        super(title, age, id);
    }
    upgradeAdmin(admin) {
        console.log(`${this.title} ${admin.title}ning darajasi oshirildi`);
    }
}
class Bot extends User {
    constructor(title, age, id) {
        super(title, age, id);
    }
}
const owner1 = new Owner("Javohir", 16, 1);
owner1.about();
const newAdmin = new Admin("Kimdur", 99, 2);
newAdmin.about();
newAdmin.createUser();
newAdmin.deleteUser();
owner1.upgradeAdmin(newAdmin);
const bot1 = new Bot("Bot", 0, 3);
bot1.about();
console.log(owner1);
console.log(newAdmin);
console.log(bot1);
