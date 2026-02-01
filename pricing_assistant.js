// This is for a brownie shop.

let product_Name = "Chocolate Brownie";
let costPerUnit = 0.99;
let basePrice = 1.99;
let discountRate = 0.1;
let salesTaxRate = 0.07;
let fixedMonthlyCosts = 11.95;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product Name:", product_Name);
console.log("Discounted Price: $" + discountedPrice.toFixed(2));
console.log("Profit Per Unit: $" + profitPerUnit.toFixed(2));
console.log("Final Price with Tax: $" + finalPriceWithTax.toFixed(2))
console.log("Break-Even Units:", breakEvenUnits);
console.log("Is it profitable?", isProfitablePerUnit);

