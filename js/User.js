'use strict';

class User {
    constructor(name, age, email, tel) {
        this.name = name
        this.age = age
        this.email = email
        this.tel = tel

        if(arrUsers.length === 0) {  
            this.id = 1
        } else {
            this.id = arrUsers[arrUsers.length - 1].id + 1
        }

    }
}