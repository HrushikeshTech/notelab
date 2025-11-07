const users = [
  { id: 1, name: "Amit", country: "India", premium: true },
  { id: 2, name: "John", country: "USA", premium: false },
  { id: 3, name: "Riya", country: "India", premium: true },
  { id: 4, country: "Germany", premium: false }, // missing name intentionally
  { id: 5, name: "Neha", country: "India", premium: false },
];
 
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
  { id: 2, name: "E-book", category: "Digital", price: 15 },
  { id: 3, category: "Fashion", price: 200 }, // missing name
  { id: 4, name: "Headphones", category: "Electronics", price: 120 },
  { id: 5, name: "Course", category: "Digital", price: 50 },
];
 
const orders = [
  { orderId: 1, userId: 1, productId: 1, quantity: 2 },
  { orderId: 2, userId: 2, productId: 2, quantity: 1 },
  { orderId: 3, userId: 1, productId: 4, quantity: 3 },
  { orderId: 4, userId: 5, productId: 5, quantity: 4 },
  { orderId: 5, userId: 3, productId: 3, quantity: 2 },
  { orderId: 6, userId: 9, productId: 2, quantity: 1 }, // invalid user
];

// Helper: Convert arrays to maps for quick lookup
const userMap = new Map(users.map(u => [u.id, u]));
const productMap = new Map(products.map(p => [p.id, p]));

// Filter out invalid orders (no valid user or product)
const validOrders = orders.filter(o => userMap.has(o.userId) && productMap.has(o.productId));

// 1️⃣ Total Revenue
const totalRevenue = validOrders.reduce((sum, order) => {
  const product = productMap.get(order.productId);
  return sum + product.price * order.quantity;
}, 0);

// 2️⃣ Total Items Sold
const totalItemsSold = validOrders.reduce((sum, order) => sum + order.quantity, 0);

// 3️⃣ Revenue by Country
const revenueByCountry = validOrders.reduce((acc, order) => {
  const user = userMap.get(order.userId);
  const product = productMap.get(order.productId);
  const country = user.country;
  const revenue = product.price * order.quantity;
  acc[country] = (acc[country] || 0) + revenue;
  return acc;
}, {});

// 4️⃣ Top Spending User
const userSpending = validOrders.reduce((acc, order) => {
  const user = userMap.get(order.userId);
  const product = productMap.get(order.productId);
  const spent = product.price * order.quantity;
  acc[user.name || "Unknown"] = (acc[user.name || "Unknown"] || 0) + spent;
  return acc;
}, {});
const topSpendingUser = Object.entries(userSpending).sort((a, b) => b[1] - a[1])[0];

// 5️⃣ Most Sold Product
const productSales = validOrders.reduce((acc, order) => {
  const product = productMap.get(order.productId);
  const name = product.name || "Unknown";
  acc[name] = (acc[name] || 0) + order.quantity;
  return acc;
}, {});
const mostSoldProduct = Object.entries(productSales).sort((a, b) => b[1] - a[1])[0];

// 6️⃣ Average Order Value
const averageOrderValue = totalRevenue / validOrders.length;

// Display results
console.log("✅ Total Revenue:", totalRevenue);
console.log("✅ Total Items Sold:", totalItemsSold);
console.log("✅ Revenue by Country:", revenueByCountry);
console.log("✅ Top Spending User:", topSpendingUser[0], "→", topSpendingUser[1]);
console.log("✅ Most Sold Product:", mostSoldProduct[0], "→", mostSoldProduct[1], "units");
console.log("✅ Average Order Value:", averageOrderValue.toFixed(2));


const productsWithGST = products.map(p => ({
  name: p.name || "Unknown",
  category: p.category,
  priceWithGST: (p.price * 1.1).toFixed(2)
}));

console.log("✅ Products with GST:");
console.table(productsWithGST);
