//if i am not define any thing in array then its type is any or never 
var arr = []; // type is any  
var nothing = []; // type is never   because we are not define any thing in array
// nothing.push(1);   try to hover on push method and see the type of push method is never
var rollno = [];
rollno.push(1);
rollno.push(2);
rollno.push(3);
console.log(rollno);
var User = true;
console.log(" Value of User is  ".concat(User)); // Value of User is  true    
User = 1;
console.log(" Value of User is  ".concat(User)); // Value of User is  1
// array of string or number or boolean 
var student = [];
student.push(1);
student.push("Nishit Baria");
console.log(student); // [1]    // array of number
// let Students : "B.tech" | "M.tech" | "DIP" ; // union type  
// Students = "B.tech";
// console.log(Students); 
var Students; // union type  
var Nishitbaria = Students = "B.tech"; // union type   
console.log(Nishitbaria); // B.tech 
//# sourceMappingURL=arr.js.map