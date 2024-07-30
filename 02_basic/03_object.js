// singleton
// Object.create

// object literals

const mySym=Symbol("key1");

const myObj={
    name:"Joshua",
    "full name": "Joshua windy",
    [mySym]: "myKey1",
    age:18,
    location:"Jodhpur",
    email:"joshua24@google.com",
    isLoggedIn:false,
    lastLoginDays:['Monday','Friday']
}

// two way to call object
console.log(myObj.name);
console.log(myObj.email);
console.log(myObj["email"]);
console.log(myObj["full name"]);
console.log(myObj[mySym]);

myObj.email="windy24@gmail.com";

// stop editing the object 
// Object.freeze(myObj);
myObj.email="hello";
console.log(myObj);

myObj.greeting= function(){
    console.log(`hello user!`);
}
myObj.greetingTwo= function(){
    // here this keyword refer to current object
    // allow access to object
    console.log(`hello ${this["full name"]}!`);
}

console.log(myObj.greeting());
console.log(myObj.greetingTwo());
