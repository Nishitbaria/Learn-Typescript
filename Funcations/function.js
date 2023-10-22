//funcation in typescript
function addTwoNum(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNum(1, 2));
// sign up function 
function signup(name, email, password, student) {
    return "name : ".concat(name, " , email : ").concat(email, " , password : ").concat(password, " , student : ").concat(student);
}
console.log(signup("Nishit", "Nishitbaria@gmail.com", 123456, true)); // if we pass string in password it will not give error because we have given password type as number | string      
//return array in function  
function getArray(numbers) {
    return numbers;
}
console.log(getArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//arroow function in typescipt 
var add = function (x, y) { return x + y; };
console.log(add(1, 2));
//map function in typescript     
var naruto = ["naruto", "sasuke", "sakura", "kakashi", "obito", "madara"];
var nameofheros = naruto.map(function (name) {
    return name.toUpperCase();
});
console.log(nameofheros); // [ 'NARUTO', 'SASUKE', 'SAKURA', 'KAKASHI', 'OBITO', 'MADARA' ]
//# sourceMappingURL=function.js.map