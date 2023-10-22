interface Product {
    Productname: string;
    Productprice: number;
    Productqty?: number;
    Productdesc?: string;
    discount: (discountPercentage: number) => void;
}

// lets define product now   

let product : Product = {   
    Productname : "Mobile", 
    Productprice : 10000,
    discount : function(discountPercentage) { 
        this.Productprice = this.Productprice - (this.Productprice * discountPercentage / 100) 
    }

}
console.log("Product Name : " + product.Productname);   
console.log("Product Price : " + product.Productprice);
product.discount(90);
console.log("Product Price after discount : " + product.Productprice);
