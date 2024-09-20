class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User ${this.username} is logged in.`);
    }

    static createId(){
        return Math.floor((Math.random()*1000)+100)
    }
}

const jaby = new User("Jaby");

console.log(jaby);
// console.log(jaby.createId());
console.log(User.createId());

/*
    Can't access the static method by the instance of class or by inheritance,
    It only can be access by the class itself.
*/