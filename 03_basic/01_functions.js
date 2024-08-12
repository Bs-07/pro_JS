function sayHello(){
    console.log("hello");
}
sayHello();
sayHello();

const hi= function(){
    console.log("🙏");
}
hi();
hi();

const hoola= (name="user")=>{
    console.log(`${name} Chiche`);
}
hoola("John");
hoola();

// function overLoad() {  
//     console.log("default");
// }
// function overLoad(name){
//     console.log(`hello, ${name}`);
// }
function overLoad(num1 ,num2=1) {
    return num1 * num2;
}
console.log(overLoad(4));


function loginUserMessage(username = "user"){
    if(!username){
        console.log("please enter username");
        return;
    }
    return `${username} just logged in...`;
}
console.log(loginUserMessage());

 /*
 After calling return in fun() don't write code, it didn't work. 
 */

/*
REST and SPREAD operator are same in look and different  by there use
# Spread when use to combine array or object
# Rest when used in function parameter
*/

//  REST operator ...
//  used when we don't the limit of parameter for eg. no. of items in cart
 function calculateCartPrice(...price){
     let count=0
     price.forEach((el)=>{
        console.log(el);
            count+=el;
    })
    return `total price: ${count} and all prices: ${price}`;
 }

 console.log(calculateCartPrice(200,100,699,678,346,624));

function fun(val1, val2, ...price){
    return `val1: ${val1}, val2: ${val2} and all: ${price}`;
 }

 console.log(fun(200,100,699,678,346));


//  passing object as parameter

const user={
    username: "foo",
    price:2199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
} 

handleObject(user);
// handleObject({
//     username: "foo",
//     price:2199
// });

const myNewArray= [123,234,345,456];

function handleArray(anyArray) {
    return anyArray;
}

console.log(handleArray(myNewArray)); 