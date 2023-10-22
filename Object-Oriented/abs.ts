abstract class Product {
    abstract getProductName(name: string): string;
}

class Mobile extends Product {
    getProductName(name: string): string {
        return name;
    }
}

let samsung = new Mobile();
let Samsung = samsung.getProductName("samsung");
console.log(Samsung);
