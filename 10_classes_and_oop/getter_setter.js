class User{
    constructor(email,pwd){
        this.email = email;
        this.pwd = pwd;
    }

    get pwd(){
        return `qw34d${this._pwd}23sd`;
    }

    set pwd(value){
        this._pwd = value;
    }
}

const joel = new User("joel@we12.app", "joel04");
console.log(joel.pwd);

