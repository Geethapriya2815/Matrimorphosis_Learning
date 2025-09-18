"use strict";
class FoodService {
    closureMessage(msg) {
        console.log(msg);
    }
}
class Swiggy extends FoodService {
    searchRestaurant(food) {
        console.log("searching the restaurant for the given food:", food);
    }
    pay(amount) {
        console.log("you have successfully paid");
    }
    placeOrder(food, qty) {
        console.log("order has been placed");
    }
}
class Zomato extends FoodService {
    searchRestaurant(food) {
        console.log("zomato");
    }
    pay(amount) {
        console.log("zomato");
    }
    placeOrder(food, qty) {
        console.log("zomato");
    }
}
const userOrder = new Zomato();
userOrder.searchRestaurant("Pizza");
userOrder.placeOrder("Pizza", 2);
userOrder.pay(2000);
