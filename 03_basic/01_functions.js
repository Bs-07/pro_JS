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

const hoola= (name)=>{
    console.log(`${name} Chiche`);
}
hoola("John");

// function overLoad() {  
//     console.log("default");
// }
// function overLoad(name){
//     console.log(`hello, ${name}`);
// }
// function overLoad(num1,num2) {
//     console.log(`sum: ${num1}+${num2}`);
// }
overLoad();
overLoad("Ryan");
overLoad(2,4);