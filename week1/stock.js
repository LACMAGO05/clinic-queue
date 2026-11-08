// const products = [
// { name: "Rice (50 kg bag)", qty: 4, minQty: 2, buy: 21000, sell: 23500 },
// { name: "Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300 },
// { name: "Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900 },
// { name: "Maggi cubes (packet)", qty: 30, minQty: 10, buy: 900, sell: 1000
// },
// ];
// const lowStock = products.filter((p) => p.qty <= p.minQty);
// console.log("Products to restock:");
// for (const p of lowStock) {
// console.log(`- ${p.name}: ${p.qty} left`);
// }
// const stockValue = products.reduce((total, p) => total + p.qty * p.buy, 0);
// console.log(`Stock value at buying price: ${stockValue} XAF`);

// ==========================================
// STOCK MANAGEMENT SYSTEM
// Week 1 Practical Exercise
// ==========================================

// Store product information in an array of objects.
const products = [
  { name: "Rice (50 kg bag)", qty: 4, minQty: 2, buy: 21000, sell: 23500 },
  { name: "Groundnut oil (1 L)", qty: 1, minQty: 6, buy: 1100, sell: 1300 },
  { name: "Sugar (1 kg)", qty: 0, minQty: 5, buy: 750, sell: 900 },
  { name: "Maggi cubes (packet)", qty: 30, minQty: 10, buy: 900, sell: 1000 },
];

// ==========================================
// 1. LOW STOCK PRODUCTS
// ==========================================

// Return products whose quantity is at or below minimum stock.
function getLowStockProducts(products) {
  return products.filter((product) => product.qty <= product.minQty);
}

// ==========================================
// 2. OUT OF STOCK PRODUCTS
// ==========================================

// Return products that have completely run out.
function getOutOfStockProducts(products) {
  return products.filter((product) => product.qty === 0);
}


// ==========================================
// 3. STOCK VALUE CALCULATIONS
// ==========================================

// Calculate the total value of stock using buying prices.
function calculateStockValue(products, priceType) {
  return products.reduce((total, product) => {
    return total + product.qty * product[priceType];
  }, 0);
}

// ==========================================
// 4. PROFIT CALCULATIONS
// ==========================================

// Calculate the profit made on one unit of a product.
function profitPerUnit(product) {
  return product.sell - product.buy;
}

// Calculate the total potential profit if all products are sold.
function calculateTotalProfit(products) {
  return products.reduce((total, product) => {
    return total + profitPerUnit(product) * product.qty;
  }, 0);
}

// Find the product with the highest profit per unit.
function getHighestProfitProduct(products) {
  return products.reduce((highest, product) => {
    return profitPerUnit(product) > profitPerUnit(highest) ? product : highest;
  });
}

// ==========================================
// 5. DISPLAY RESULTS
// ==========================================

// Display products that need restocking.
console.log("\n===== PRODUCTS TO RESTOCK =====");

getLowStockProducts(products).forEach((product) => {
  console.log(`- ${product.name}: ${product.qty} left`);
});

// Display products that are completely out of stock.
console.log("\n===== OUT OF STOCK PRODUCTS =====");

getOutOfStockProducts(products).forEach((product) => {
  console.log(`- ${product.name}`);
});

// Display stock value at buying price.
const buyingStockValue = calculateStockValue(products, "buy");

console.log("\n===== STOCK VALUE =====");
console.log(`Stock value at buying price: ${buyingStockValue} XAF`);

// Display stock value at selling price.
const sellingStockValue = calculateStockValue(products, "sell");

console.log(`Stock value at selling price: ${sellingStockValue} XAF`);

// Display the product with the highest profit per unit.
const highestProfitProduct = getHighestProfitProduct(products);

console.log("\n===== HIGHEST PROFIT PER UNIT =====");
console.log(`Product: ${highestProfitProduct.name}`);
console.log(`Profit per unit: ${profitPerUnit(highestProfitProduct)} XAF`);

// Display the total potential profit.
const totalProfit = calculateTotalProfit(products);

console.log("\n===== TOTAL POTENTIAL PROFIT =====");
console.log(`Profit if everything is sold: ${totalProfit} XAF`);
