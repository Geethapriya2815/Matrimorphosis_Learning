class Wallet{
    private balance;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    addMoneyToWallet(amount: number) { 
            if (amount > 0) this.balance += amount;
        }
        
    }
let userobj = new Wallet(2000)
console.log("new wallet balance", userobj.addMoneyToWallet(5000))


function addMoneyToWallet(amount: number) {
}