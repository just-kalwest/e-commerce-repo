const products = [
    { id: 1, name: "T-Shirt", price: 29.99 },
    { id: 2, name: "Jeans", price: 50.99 },
    { id: 3, name: "Jacket", price: 59.99 },
    { id: 4, name: "senators", price: 39.99 },
    { id: 5, name: "shorts", price: 39.99 },
    { id: 6, name: "agbada", price: 200.99 },
    { id: 7, name: "casuals", price: 39.99 },
    { id: 8, name: "corsets", price: 39.99 },
    { id: 9, name: "wedding gown", price: 559.99 },
    { id: 10, name: "two piece", price: 39.99 },
    { id: 11, name: "bikini", price: 39.99 },
    { id: 12, name: "vintage", price: 39.99 },
    { id: 13, name: "custom made pants and bra", price: 39.99 },
    { id: 14, name: "bubu", price: 39.99 },
    { id: 15, name: "robe", price: 39.99 },
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} has been added to your cart!`);
}

document.addEventListener('DOMContentLoaded', displayProducts);