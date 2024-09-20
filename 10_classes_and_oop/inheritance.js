class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`User ${this.username} is logged in.`);
    }
}

class teacher extends User{
    constructor(username, email, pwd){
        super(username);
        this.email = email;
        this.pwd = pwd;
    }
}

const t1 = new teacher("Walt", "waltWilly@google.com","we234");

console.log(t1);
t1.logMe();