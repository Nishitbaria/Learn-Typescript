//normal tuples example 


let studentTuples  : [string, number, boolean] ;


studentTuples = ["Nishitbaria", 2411, true];
console.log(studentTuples); 

studentTuples[1] = 2412;    
console.log(studentTuples);

//readonly student tuples example   

let readonlystudent : readonly  [string, number, boolean] = ["Nishitbaria", 2411, true];   
// readonlystudent[2] = false; // error!   
//we can not change the value of readonly tuples    // error!   


