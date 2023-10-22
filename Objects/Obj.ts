// let Student: {
//   name: string;
//   age: number;
// } = {
//   name: "Nishit baria",
//   age: 21,
// };
// console.log(Student);

//now if i have to create second object with same properties then i have to write same code again and again
// now we will use Type alias to solve this problem

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type Students = {
  name: string;
  age: number;
  readonly rollno?: number; // ? means optional property
};

type card = {
  name: string;
  readonly age?: number; // ?: means optional property
};

let mycard: card = { name: "sbi", age: 21 };
mycard.name = "hdfc";
// mycard.age = 35; // error because age is readonly   property

function createStudent(student: Students) {
  console.log("Student name is " + student.name);
  console.log("Student age is " + student.age);
}

createStudent({ name: "Nishit Baria", age: 21 });
createStudent({ name: "Nishit 2Baria", age: 212 });
