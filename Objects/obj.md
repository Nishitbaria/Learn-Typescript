# All about Object in Typescript 


## In Typescript I have learned about read-only properties and optional properties 


## Like I am defining one Type aliases:

```

type card = {
  name: string;
  readonly age?: number; // ?: means optional property
};

let mycard: card = { name: "sbi", age: 21 };
mycard.name = "hdfc";
// mycard.age = 35; // error because age is readonly   property

```
