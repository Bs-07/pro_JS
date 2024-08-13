// THIS keyword point the current object
const user={
    username:"john",
    introduce: function(){
        console.log(`this is ${this.username}`);
        console.log(this);
    }
};

user.introduce();
user.username="sam";
user.introduce();

// THIS keyword only work with objects
// const one=function () {
//     const username="bahadur";
//     console.log(this.username);
// }
// one();

// const addTwo= (num=1)=>{
//     return num+2;
// }

// don't use return when we don't use {} braket
// const addTwo= (num=1)=>  num+2;
const addTwo= (num=1)=>  (num+2);

const objRet= ()=> {{username:"shnow"}};
console.log(objRet());

console.log(addTwo());