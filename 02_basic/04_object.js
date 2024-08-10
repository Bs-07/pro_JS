// const tinderUser= new Object();

const tinderUser={};

tinderUser.id="123zxc";
tinderUser.name="Shomya";
tinderUser.isLoggedIn=true;

// console.log(tinderUser);

const regularUser= {
    email:"shomya234@goo.com",
    fullname:{
        userfullname:{
            firstName:"Shoyma",
            lastName:"what"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstName);

const obj1= {1:"a", 2:"b", 3:"c"};
const obj2= {4:"d", 5:"e", 6:"f"};
const obj3= {7:"g", 8:"h", 9:"i"};

// const mergeObj= Object.assign({}, obj1,obj2,obj3);
const mergeObj= {...obj1,...obj2};
console.log(mergeObj);


//data fatch from the database = array of object 
const users= [
    {
        id:1,
        email:"sd11@gmail.com",
    },
    {
        id:2,
        email:"ad11@gmail.com",
    }
];

console.log(users[0].email);

// get the jey or values in an array to use
console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 

// return array of array which contains keys and values
console.log(Object.entries(tinderUser));

// check the key if present or not, return true or false 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('checkOrder'));

const course = {
    courseName:"pro_js",
    price:"999",
    courseInstructor:"kal"
}

// console.log(course.courseInstructor);
// console.log(course["courseInstructor"]);

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);

// API Syntax
{
    "name":"foo",
    "courseName":"pro_js",
    "price":999,
    "courseInstructor":"kal"
}

[
    {},
    {},
    {}
]
