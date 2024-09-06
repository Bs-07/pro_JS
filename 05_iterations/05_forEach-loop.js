// forEach

const coding = ['js', 'c', 'c++', 'c#', 'java', 'python'];

// coding.forEach( function (el){
//     console.log(el);
// } )
coding.forEach( (el)=>{
    console.log(el);
} )

// function print(item){
//     console.log(item);
// }
// coding.forEach(print);

coding.forEach( (el, index, arr)=>{
    console.log(el, index, arr);
} )

const arrObj = [
    {js: 'javascript'},
    {cpp: 'c++'},
    {py: 'python'},
    {rb: 'ruby'}
]

arrObj.forEach( (el)=>{
    console.log(el);
} )