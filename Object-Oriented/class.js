//what is classs in typescript ?
// class is a blue print of object
var Person = /** @class */ (function () {
    //constructor is a special method which is used to initialize the object  // constructor is called when object is created 
    function Person(name, age) {
        this._phonenumber = 98989123432; // private access modifier  // private property can not be access outside the class
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "userphone", {
        get: function () {
            return this._phonenumber;
        },
        set: function (pnum) {
            this._phonenumber = pnum;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person('Nishit', 18); // object create    
console.log(" Person name is   ".concat(person.name)); // Nishit   // access property of object    // dot notation
console.log(" Person age is   ".concat(person.userphone)); // 9898123458   // access property of object    // dot notation      
console.log("not updated phone number   ".concat(person.userphone));
person.userphone = 123; // set the value of private property   // set the value of private property    
console.log(" updated phone number   ".concat(person.userphone));
//# sourceMappingURL=class.js.map