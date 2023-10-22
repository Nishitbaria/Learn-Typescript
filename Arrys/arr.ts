//if i am not define any thing in array then its type is any or never 
let arr = [];   // type is any  


let nothing : [] = []; // type is never   because we are not define any thing in array
// nothing.push(1);   try to hover on push method and see the type of push method is never
let rollno : number[] =  [];

rollno.push(1); 
rollno.push(2); 
rollno.push(3); 
console.log(rollno);


let User : string | number | boolean = true ;    

console.log(` Value of User is  ${User}`); // Value of User is  true    

User = 1 ;
console.log(` Value of User is  ${User}`); // Value of User is  1


// array of string or number or boolean 


let student : (string  | number) [] = []; 

student.push(1);
student.push("Nishit Baria");
console.log(student); // [1]    // array of number



// let Students : "B.tech" | "M.tech" | "DIP" ; // union type  
// Students = "B.tech";

// console.log(Students); 

let Students : "B.tech" | "M.tech" | "DIP" ; // union type  

let Nishitbaria = Students = "B.tech";  // union type   
console.log(Nishitbaria); // B.tech 



