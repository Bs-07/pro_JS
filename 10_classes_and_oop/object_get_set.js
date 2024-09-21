const User = {
    _email: 'h@jsk',
    pwd: 'dfj123',

    get email(){
        return `${this._email}`;
    },
    set email(value){
        this._email = value;
    }
}

const chai = Object.create(User);
console.log(chai);
console.log(chai.email);