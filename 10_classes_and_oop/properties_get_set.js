function User(email, pwd){
    this.email = email;
    this._pwd = pwd;

    Object.defineProperty(this,"pwd",{
        get: function(){return `aso23${this._pwd}qws2`},
        set: function(value){ this._pwd = value}
    })

}

const christogram = new User("christogram@de.bo", "gramChristo");
console.log(christogram.pwd);