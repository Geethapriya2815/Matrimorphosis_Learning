"use strict";
// Step 2: Implement different payment types
class CreditCard {
    pay(amount) {
        console.log(`Paid ₹${amount} using Credit Card (via bank gateway).`);
    }
}
class Cash {
    pay(amount) {
        console.log(`Paid ₹${amount} using Cash. Change returned if any.`);
    }
}
class UPI {
    pay(amount) {
        console.log(`Paid ₹${amount} using UPI (PhonePe/GPay).`);
    }
}
class GiftCard {
    pay(amount) {
        console.log(`Paid ₹${amount} using Gift Card. Balance updated.`);
    }
}
// Step 3: Customer uses any payment method
function checkout(payment, amount) {
    payment.pay(amount); // Polymorphic call
}
// Step 4: Try different payment methods
checkout(new CreditCard(), 500);
checkout(new Cash(), 300);
checkout(new UPI(), 200);
checkout(new GiftCard(), 150);
