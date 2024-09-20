function setUsername(username){
    this.username = username;
}

function createUser(username, email, pwd){
    setUsername.call(this, username);

    this.email = email;
    this.pwd = pwd;
}

const joe = new createUser("Joe", "joeqr@google.com","joe@8794");

console.log(joe);