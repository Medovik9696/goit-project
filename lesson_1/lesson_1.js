function droidsOrder(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    console.log("Your ordered " + quantity + " droids worth " + totalPrice + " credits");
};
droidsOrder(3, 100);

console.log();

function getShippingMessage(country, price, deliveryFee) { 
    let totalPrice = price + deliveryFee;
    console.log("Shiping to " + country + " will cost " + totalPrice + " credits");
}
getShippingMessage("USA", 1500, 120);

console.log();

function getElementWidth(content, pending, border) { 
    content = parseInt(content);
    pending = parseInt(pending);
    border = parseInt(border);
    result = content + pending * 2 + border * 2;
    console.log("Element width =  " + result);
};
getElementWidth("50px","8px","4px");
