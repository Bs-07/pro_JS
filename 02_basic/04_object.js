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

