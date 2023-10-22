 # Generics in TypeScript

Generics are a powerful feature of TypeScript that allows you to create reusable components that work with a variety of data types.

## Basic Syntax

The basic syntax for defining a generic type is:

```typescript
function identity<Type>(arg: Type): Type {
  return arg; 
}
```

Here, `<Type>` defines a type variable that can represent any type. We use `Type` as the type for the `arg` parameter and also the return type.

When calling a generic function, you can either:

1. Invoke the generic type inference by just passing arguments:

```typescript
let output = identity("myString"); 
// output has type string
```

2. Explicitly pass the type arguments within angle brackets:

```typescript
let output = identity<string>("myString");
// output has type string 
```

You can define generic types using interfaces and classes as well:

```typescript
interface GenericIdentityFn<Type> {
  (arg: Type): Type; 
}

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
```

## Example

Here is a simple example of a generic `print` function:

```typescript
function print<T>(arg: T): void {
  console.log(arg);
}

print<string>("Hello"); 
print(100);
print(true);
```

The `<T>` type variable allows the `print` function to work with any data type.

We can also define a generic function that takes multiple type arguments:

```typescript
function printTwo<T, U>(arg1: T, arg2: U): void {
  console.log(arg1, arg2);
}

printTwo<number, string>(1, "Hello");
// 1 Hello
```

Here `T` and `U` represent two different types for the two arguments.

