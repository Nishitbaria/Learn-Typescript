 # The typeof Operator in TypeScript

The `typeof` operator in TypeScript is used to get the type of a variable or expression. It serves a similar purpose as the `typeof` operator in JavaScript but with some additional features.

In TypeScript, `typeof` can be used in two contexts:

1. In an expression context to return the runtime type of a value. This is similar to JavaScript.

```ts
let name: string = "John";

typeof name; // string
```

2. In a type context to refer to the type of a variable or expression. This is unique to TypeScript.

```ts
let name = "John";

type Name = typeof name;
// Name is string
```

This allows us to define a `Name` type that is exactly the same as the type of `name`, which is `string`.

We can also use `typeof` with type operators like `ReturnType` to get the return type of a function:

```ts
function greeting(): string {
  return "Hello";
}

type GreetingType = ReturnType<typeof greeting>;
// GreetingType is string
```

Here `GreetingType` will be `string` since the