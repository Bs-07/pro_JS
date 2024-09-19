// const one = 'Kennedy   ';
// const two = 'John    ';

// console.log(one.trim().length()); not this
// console.log(one.truelength()); 
// made our own method 

let superHero = ['thor', 'spiderMan'];

let heroPower = {
    thor: 'hammer/god of thunder',
    spiderMan: 'sling',

    getSpiderPower: ()=>{
        console.log(`Spiderman power is ${this.spiderMan}`);
    }
}

Object.prototype.hello = function(){
    console.log(`I'm everywhere`);
}

heroPower.hello() // object can access hello
superHero.hello() // array also can access hello

Array.prototype.bye = ()=>{
    console.log(`Bye everyone :)`);
}

superHero.bye()
// heroPower.bye()

/*
    we put new or own property to the object which is access by all(array, function, string),
    But if we put in array then it is not going to be access by the function or object
*/


// Inheritance 
const user = {
    name: 'joe',
    email: 'joeqd@google.com'
}

const teacher = {
    makeVideo: true
}

const teacherSupport = {
    isAvaliable: true
}

const TASupport = {
    makeAssignment: 'js assignment',
    fulltime: true,
    __proto__: teacherSupport
}

teacher.__proto__ = user;

// console.log(teacher['name']);
// console.log(TASupport['isAvaliable']);

// modern syntax 
Object.setPrototypeOf(teacherSupport,teacher);
// console.log(teacherSupport.makeVideo);

let trimString = 'jeoil   ';

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

trimString.trueLength()
'oh!boy   '.trueLength()