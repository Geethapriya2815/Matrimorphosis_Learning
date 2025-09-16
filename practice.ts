let data: any = "Geethapriya"
console.log(typeof data)
let age: number = (data as number) - 90
let newnum: number = Number(data) - 5
console.log(newnum)
console.log(age)
console.log(typeof data)

function displayUser(fname: string, lastname?: string) {
    if (lastname) console.log("User name is", fname + lastname);
    else console.log("User name is", fname);

}
displayUser("Geethapriya");
displayUser("Geetha", "priya")

function displayUserName(msg: string, names: string = "guest") {
    console.log(msg,names)


}
displayUserName("Welcome","geetha")


function displayFullName(firstname: string, ...othernames: string[]) { 
    console.log(firstname+othernames.join(" "))
}

displayFullName("Geetha", "priya", "sundaraj")

function calculateTotalPrice(...charges: number[]) {
    let total = 0;
    for (let i of charges) {
        total += i;
    }
    return total;
}


console.log(calculateTotalPrice(20, 30, 40));      
console.log(calculateTotalPrice(30, 90, 80, 90));  
interface Product{
    productName: string,
    productPrice: number
}

let pd1: Product = { productName: "Mobile", productPrice: 20000 }
let pd2: Product = { productName: "window", productPrice: 300 }
let pd3: Product = { productName:"Biscuits", productPrice: 3 }

function addProductPrice(...pdt: Product[]) {
  let total = 0;
  pdt.map((p) => (total += p.productPrice));
  return total;
}
console.log(addProductPrice(pd1, pd2));

function calculateArea(radius: number): number; //circle
function calculateArea(l: number, b: number): number; //rectangle
function calculateArea(a: number, b?: number): number {
  const PI = 3.14;
  if (b) {
    //formula for area of rectangle
    return a * b;
  } else return PI * a * a;
}

console.log(calculateArea(2, 2));
