"use strict";
class Wallet {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    addMoneyToWallet(amount) {
        if (amount > 0)
            return (this.balance += amount);
    }
}
let userobj = new Wallet(2000);
console.log("new wallet balance", userobj.addMoneyToWallet(1000));
