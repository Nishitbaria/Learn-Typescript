## Tuples is fix length of array with some fix order of datatype 

## A tuple is a typed array with a pre-defined length and types for each index.

```
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
```



## there is also read only Tuples exits and its best practies that you create a tuples with readonly keyword

```
// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');
console.log(ourTuple);

```