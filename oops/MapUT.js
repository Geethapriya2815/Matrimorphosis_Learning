"use strict";
class Product {
    constructor(pname, qty) {
        this.productname = pname;
        this.qty = qty;
    }
}
let p1 = new Product("iphone", 10);
let p2 = new Product("headset", 20);
let p3 = new Product("laptop", 5);
// ✅ Declare only once
let productStock = new Map();
productStock.set(p1.productname, p1);
productStock.set(p2.productname, p2);
productStock.set(p3.productname, p3);
function checkStock(productName) {
    const product = productStock.get(productName); // ✅ use same variable name
    if (product) {
        console.log(`${product.productname} has ${product.qty} items in stock.`);
    }
    else {
        console.log(`${productName} is not available.`);
    }
}
// Test
checkStock("iphone");
checkStock("headset");
checkStock("tablet");
