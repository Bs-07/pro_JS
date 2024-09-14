const promiseOne = new Promise((resolve,reject)=>{
    // do an async task
    //  DB calls, cryptography, network
    setTimeout(()=>{
        console.log(`Async task is compelete`);
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log('Promise consumed');
})

// ---------------------------------------
new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        console.log('Async task 2');
        resolve();
    },1000)
} ).then( ()=>{
    console.log('Promise 2  consumed');
} )

// ---------------------------------------

new Promise( (resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "John", email: "john@fg.com"})
    },1000)
} ).then((user)=>{
    console.log(user);
})

// ---------------------------------------

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "Shnow"})
        }else{
            reject('Error: Something went wrong');
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('promise is either resolved or rejected.');
})

// ---------------------------------------

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "js", pwd: 123})
        }else{
            reject('Error: js went wrong');
        }
    },1000)
})

async function consumePromise() {
    try {
        const respone = await promiseFive;
        console.log(respone);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();

// ---------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json(); 
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});