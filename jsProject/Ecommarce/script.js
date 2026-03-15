const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const emptyCard = document.getElementById("empty-card");
const cardTotal = document.getElementById("cart-total");
const totalPrice = document.getElementById("total-price");
const cheackoutBtn = document.getElementById("cheackout-btn");

const products = [
    {id:1, name:'product 1', price:29.99},
    {id:2, name:'product 2', price:19.99},
    {id:3, name:'product 3', price:9.99}
]
const cart = []

products.forEach((product)=>{
    const productDiv = document.createElement('div');
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - ${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv)
})