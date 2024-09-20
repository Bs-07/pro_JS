class User{
    constructor(username, email, pwd){
        this.username = username;
        this.email = email;
        this.pwd = pwd
    }

    encryptPassword(){
        return `${this.pwd}abc`
    }

}

const joel = new User("Joel","jl@google.com","joel123");

console.log(joel);
console.log(joel.encryptPassword());



// behind the scene

function Userb(username,email,_pwd){
    this.username = username;
    this.email = email;
    this._pwd = _pwd;
}

Userb.prototype.encryptPwd = function(){
    return `${this._pwd}@sbi`;
}

const deen = new Userb("Deen", "deen@google.com", "deen123");

console.log(deen);
console.log(Userb.prototype);
console.log(deen.encryptPwd())

