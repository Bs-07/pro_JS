const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// here it will return array within an array
// const universal_heroes=marvel_heros.push(dc_heros);

// concat(): return new array not like push who also push 
// the array as a datatype 
console.log(marvel_heros.concat(dc_heros));

// Spread syntax (...): join array ad return new array

console.log([...marvel_heros,...dc_heros,...['hello']]);

const arrWithin=[1,2,3,[4,5,6,[7,8,9]]];
console.log(arrWithin);

// flat(): Returns a new array with all sub-array elements concatenated into single array
console.log(arrWithin.flat(Infinity));

// isArray(): returns boolean value, is it array or not?
console.log(Array.isArray("hello"));

// from():
console.log(Array.from('hello'));

// Create an array based on a property of DOM Elements
// const images = document.querySelectorAll("img");
// const sources = Array.from(images, (image) => image.src);
// const insecureSources = sources.filter((link) => link.startsWith("http://"));


// of():
const s1=100;
const s2=200;
const s3=300;
console.log(Array.of(s1,s2,s3));


