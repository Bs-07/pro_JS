// for of

const arr = [1,2,3,4];
for (const element of arr) {
    console.log(element);
}

const greating = "Namaste world!";

for(const great of greating){
    if(great == " ") continue;
    console.log(great);
}

// Maps

const map = new Map();
map.set('IN', 'India');
map.set('ASU', 'Australia');
map.set('USA', 'United State of America');
map.set('JAP', 'Japan');
map.set('Fr', 'France');

// console.log(map);

// for(const key of map){
//     console.log(key);
// } 

for(const [key,value] of map){
    console.log(key, ':-', value);
}

const myObj = {
    'game1': "COD",
    'game2': "PUBG",
    'game2': "GTA",
}

// for (const element of myObj) {
//     console.log(element);
// }
/*
    not for Object iteration through [for of] loop
*/