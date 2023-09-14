const products = [
    {name: 'Laptop', brand: 'Walton', price: 79750, color: 'silver'},
    {name: 'Smartphone', brand: 'Walton', price: 18999, color: 'black'},
    {name: 'Watch', brand: 'Rolex', price: 5500, color: 'golden'},
    {name: 'Bike', brand: 'Yamaha', price: 565000, color: 'blue'},
    {name: 'Car', brand: 'Toyota', price: 2775000, color: 'sky blue'}
];

// 1. map
const brands = products.map(product => product.brand);
// console.log(brands);
const price = products.map(product => product.price);
// console.log(price);

// 2. forEach
// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));
products.forEach(product => {
    // console.log(product.name);
})

// 3. filter
const cheap = products.filter(product => product.price <= 20000);
// console.log(cheap);

const specificName = products.filter(pr => pr.name.includes('i'));
// console.log(specificName);

// 4. find
const findChar = products.find(pro => pro.name.includes('c'));
console.log(findChar);