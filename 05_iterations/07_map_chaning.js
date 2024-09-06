const myNum = [1,2,3,4,5,6,7,8,9,10];

// const newNum = myNum.map( (num)=> num+10);

// chaining
const newNum = myNum.map( (num)=> num+10).map( (el)=> el*2).filter( (num3)=> num3>=30 );


console.log(newNum);