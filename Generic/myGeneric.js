function idetityone(arg) {
    return arg;
}
// here type of arg is any, so we can pass any type of argument but typescipt have no idea about the type of the argument   
function identityany(arg) {
    return arg;
}
//define the generic function       
function identitytwo(arg) {
    return arg;
}
identitytwo("2");
function identitythree(arg) {
    return arg;
}
var car = identitythree({ name: "suzuki", model: "2010" });
console.log(car);
//Generic in aero function 
function GetMoreItem(item) {
    return item;
}
//define the generic function using arrow function  
var getproduct = function (item) {
    return item;
};
//generic class 
var Products = /** @class */ (function () {
    function Products() {
    }
    return Products;
}());
var audi = new Products();
audi.name = "Samsung s21 ultra";
audi.model = ["2010", "2011", "2012"];
console.log(audi);
var inerProduct = {
    name: "samsung",
    model: "2010"
};
console.log(inerProduct); // { name: 'samsung', model: '2010' }   
//# sourceMappingURL=myGeneric.js.map