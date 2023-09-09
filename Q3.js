// Build a feature for Store's Inventory.

// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

const exchangeRate = 80; // 1 USD to 80 INR

// Original object with prices in USD
const pricesInUSD = {
    item1: 10,
    item2: 20,
    item3: 15,
};

// Use map() to create a new object with prices in INR
const pricesInINR = Object.keys(pricesInUSD).map((key) => ({
    [key]: pricesInUSD[key] * exchangeRate,
}));

// Combine the array of objects into a single object
const convertedPrices = Object.assign({}, ...pricesInINR);

console.log(convertedPrices);


// Output 
    // { item1: 800, item2: 1600, item3: 1200 }