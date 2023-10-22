# Do you think what is different between Interfaces and types

## Interfaces : Interfaces are similar to type aliases, except they only apply to object types

## exmaple of Interfaces is :

```
interface nameofinterface  : {
    obj1 : obj type | string ;
    obj2 : obj type | number
}

```

## Typescipt is also support inheritance

### example of inheritance in interfaces

```

interface  itf1  {
obj1 :string ;
obj2 ?: number ;
}

interface itf2 extends itf = {
//now we can able to use all the proeperties which is part of itf1 

}


let product : itf2 = {
    obj1 = "String"
// second parameter is optional so we dont need to write it 
}


```
