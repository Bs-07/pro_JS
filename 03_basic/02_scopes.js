var a=300;
let b=100;
const c=200;

{
    var a=20;
    let b=10;
    const c=30
}
 
console.log(a,b,c);
/*
* variable inside a {} which is called block scope 
* lives only within the block, except of var, that's why don't use var 
*
* variable outside of block called global scope variable
*/

function one() {
    const username="john";

    function two() {
        const website="redit";
        console.log(username);
    }

    // console.log(website);

    two();
}

one();


addOne(5);
function addOne(num) {
    return num+1;
}


// addTwo(6);
const addTwo= function (num) {
    return num+2;
}   