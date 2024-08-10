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

 /*
 After calling return in fun() don't write code, it didn't work. 
 */

 