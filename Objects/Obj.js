// let Student: {
//   name: string;
//   age: number;
// } = {
//   name: "Nishit baria",
//   age: 21,
// };
// console.log(Student);
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
var mycard = { name: "sbi", age: 21 };
mycard.name = "hdfc";
// mycard.age = 35; // error because age is readonly   property
function createStudent(student) {
    console.log("Student name is " + student.name);
    console.log("Student age is " + student.age);
}
createStudent({ name: "Nishit Baria", age: 21 });
createStudent({ name: "Nishit 2Baria", age: 212 });
//# sourceMappingURL=Obj.js.map