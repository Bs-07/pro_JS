//  for in

const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rp: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
    console.log(`${key}:- ${myObj[key]}`);
}

const arr = [1,2,3,4];

for (const key in arr) {
    console.log(arr[key]);
}

/*
    not for Map()-----------
*/

// const map = new Map();
// map.set('IN', 'India');
// map.set('ASU', 'Australia');
// map.set('USA', 'United State of America');
// map.set('JAP', 'Japan');
// map.set('Fr', 'France');

// for(const key in map){
//     console.log(key);
// }