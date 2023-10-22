function idetityone(arg : number) : number{
    return arg;
}
// here type of arg is any, so we can pass any type of argument but typescipt have no idea about the type of the argument   
function identityany(arg : any) : any{
    return arg;
}

//define the generic function       
function identitytwo<T>(arg : T) : T{
    return arg;
}   

identitytwo("2");


function identitythree<T>(arg : T) : T{
    return arg;
}   


interface Car {
    name : string ; 
    model : string ;
}

const car =   identitythree<Car>({name : "suzuki" , model : "2010"}); 
console.log(car);


//Generic in aero function 

function GetMoreItem <T> (item :  T[]): T[] {
return item ;
}



//define the generic function using arrow function  

const getproduct = <T> (item : T[]) : T[] => {  
    return item ;   
}


//generic class 

class Products  <T> {
    name : T;  
    model : T[]; 
}

let audi = new Products<string>();      

audi.name =   "Samsung s21 ultra";
audi.model = ["2010" , "2011" , "2012" ]

console.log(audi);



//generic interface 

interface Productq <t> {
name : t; 
model : t ; 
}


const inerProduct  : Productq<string> = { 
    name : "samsung" , 
    model : "2010"  
}

console.log(inerProduct);   // { name: 'samsung', model: '2010' }   