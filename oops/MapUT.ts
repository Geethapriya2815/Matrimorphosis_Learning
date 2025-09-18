class Product {
  productname: string;
  qty: number;

  constructor(pname: string, qty: number) {
    this.productname = pname;
    this.qty = qty;
  }
}

let p1 = new Product("iphone", 10);
let p2 = new Product("headset", 20);

let productStock = new Map<string, Product>();

productStock.set(p1.productname, p1);
productStock.set(p2.productname, p2);

console.log(`Stock for iphone: ${productStock.get("iphone")?.qty}`);

function purchaseProduct(productName: string, qty: number): void {
  if (productStock.has(productName)) {
    let product = productStock.get(productName)!;
    if (product.qty >= qty) {
      product.qty -= qty;
      console.log(
        `✅ Purchased ${qty} ${productName}(s). Remaining stock: ${product.qty}`
      );
      if (product.qty === 0) {
        productStock.delete(productName);
        console.log(`❌ ${productName} is now out of stock and removed.`);
      }
    } else {
      console.log(
        `❌ Not enough stock for ${productName}. Only ${product.qty} left.`
      );
    }
  } else {
    console.log(`❌ Product ${productName} not found.`);
  }
}

purchaseProduct("iphone", 2);
purchaseProduct("headset", 6);
purchaseProduct("tablet", 5);
