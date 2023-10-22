//funcation in typescript

function addTwoNum( num1 : number , num2 : number ) {
    return num1 + num2 ;
    
}

console.log(addTwoNum(1,2));


// sign up function 
function signup(name : string , email: string , password : number | string , student:boolean) {
return `name : ${name} , email : ${email} , password : ${password} , student : ${student}`;
}
console.log(signup("Nishit" , "Nishitbaria@gmail.com" , 123456 , true));    // if we pass string in password it will not give error because we have given password type as number | string      


//return array in function  

function getArray(numbers : number[]) {
    return numbers;
}
console.log(getArray([1,2,3,4,5,6,7,8,9,10]));

//arroow function in typescipt 

const add = (x: number, y: number) => x + y;
console.log(add(1, 2));

//map function in typescript     

const naruto : string[]= ["naruto", "sasuke", "sakura", "kakashi", "obito", "madara"];
const nameofheros = naruto.map( (name : string) : string => {
    
    return name.toUpperCase();

});
console.log(nameofheros);   // [ 'NARUTO', 'SASUKE', 'SAKURA', 'KAKASHI', 'OBITO', 'MADARA' ]