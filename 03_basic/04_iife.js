// Immediate Invoked Function Expression(IIFE)

// semicolon is necessary here to end the code

// Named IIFE: IIFE Function with name 
(function greet(){
    console.log(`hello world!`);
})();

// Unnamed IIFE: IIFE Function without name(arrow function) 
( (name)=>{
    console.log(`Ram Ram ${name} Ji 🙏`);
} )('Sharma');