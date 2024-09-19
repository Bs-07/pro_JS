function user(username, loginCount, IsLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.IsLoggedIn = IsLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${username}`);
    }

    return this; // not needed now, but it better to use return this
}

const userOne = new user("John", 4, true);
const userTwo = new user("Show", 2, false);

console.log(userOne.constructor);
// console.log(userTwo);