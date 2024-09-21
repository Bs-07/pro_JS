// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const description = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(description);

const chai = Object.create(null);
chai.name = "Darjeeling tea";
chai["price"] = 220;
chai["isAvaliable"] = true;
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable: false
// })

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for(const [value,key] of Object.entries(chai)){
    console.log(`${key}: ${value}`);
}

// const obj = Object.entries(chai)
// console.log(obj[1][0]);