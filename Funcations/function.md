# Typescipt funcation 

## Functions are the basic building block of any application, whether they’re local functions, imported from another module, or methods on a class. They’re also values, and just like other values, TypeScript has many ways to describe how functions can be called. Let’s learn about how to write types that describe functions.

## We can define Funcation like this also 


```

funcation ()  {} : {}



```


## also i am learning about `never` keyword and `void` which is show the return type of function if one time we define the function type then we not able to return other type 


## here is syntax of how to define function return type in typescipt 

```

function (parameters 1: : type of parameter1, parameters 2 : type of parameter2) : type of return type of function   {
    code.....
}



```

## if we use `never` and `void` then we can't able to return any object but we have quesiton that how both are different lets understand with one example


 # The Difference Between Void and Never in TypeScript

In TypeScript, `void` and `never` are two distinct function return types:

- `void`: Indicates that a function does not return a meaningful value
- `never`: Indicates that a function never returns (due to an error, infinite loop, or exit)

## Void

The `void` return type indicates that a function does not return a meaningful value. Functions with `void` return types are typically used for their side effects rather than returning a value:

```typescript
function logMessage(message: string): void {
  console.log(message); 
}
```

The key things to note about `void` are:

- Functions with `void` return types implicitly return `undefined` 
- The return value is not useful and should be ignored
- Use `void` when a function has side effects but no meaningful return value

## Never

The `never` return type indicates that a function never returns a value. Functions with `never` return types either:

- Throw an error 
- Enter an infinite loop
- Exit the program

```typescript
function handleError(error: Error): never {
  throw error;  
}

function infiniteLoop(): never {
  while (true) {}  
}
```

The key things to note about `never` are:

- Functions with `never` return types  *never* return a value
- Use `never` when a function never returns (due to an error, infinite loop, or exit)

In summary, the main difference is that:

- `void` functions return `undefined`, but the return value is ignored
- `never` functions never return a value at all

