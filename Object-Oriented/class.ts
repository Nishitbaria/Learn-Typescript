//what is classs in typescript ?

// class is a blue print of object

class Person {
  name: string;
  age: number;
private _phonenumber ?: number = 98989123432;   // private access modifier  // private property can not be access outside the class
  //constructor is a special method which is used to initialize the object  // constructor is called when object is created 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

 get userphone () : number {
     return this._phonenumber;
  }
  set userphone(pnum: number | undefined) {
    this._phonenumber = pnum;
  }
}


const person =  new Person ('Nishit', 18);   // object create    
console.log(` Person name is   ${person.name}`);   // Nishit   // access property of object    // dot notation
console.log(` Person age is   ${person.userphone}`);   // 9898123458   // access property of object    // dot notation      
console.log(`not updated phone number   ${person.userphone}`); 
person.userphone = 123;   // set the value of private property   // set the value of private property    
console.log(` updated phone number   ${person.userphone}`); 