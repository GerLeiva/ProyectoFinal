

function toggleNavbar() {
    const navbar = document.getElementById("myNavbar");
    navbar.classList.toggle("responsive");
  }




document.addEventListener("DOMContentLoaded", function () {
    const catalog = document.getElementById("catalog");
    const cart = document.getElementById("cart");
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    let total = 0;

    const products = [
        { id: 1, name: "Arrollado de Pollo", price: 3.500, image: "../assets/arrolladoPollo.jpg" },
        { id: 2, name: "Suprema de Pollo", price: 2900, image: "../assets/Suprema.jpg" },
        { id: 2, name: "Pollo Entero Bonnin ", price: 1650, image: "../assets/polloEntero.jpg" },
        { id: 2, name: "Pata Muslo Condimentada", price: 1950, image: "../assets/cuartoCondi.jpg" },
        { id: 2, name: "Pata Muslo Bonnin ", price: 1850, image: "../assets/cuartodepollo.jpg" },
    ];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)} PESOS</p>
        <button class="add-to-cart" onclick="addToCart(${product.id}, ${product.price})">Añadir al Carrito</button>
    `;
        catalog.appendChild(productElement);
    });

    window.addToCart = function (productId, productPrice) {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${selectedProduct.name} - ${selectedProduct.price.toFixed(2)} PESOS`;
            cartItems.appendChild(cartItem);

            total += productPrice;
            totalElement.textContent = `Total: $${total.toFixed(2)} PESOS`;
        }
        cart.style.display = "block";
    };
});

/*Catalogo Paladini*/

document.addEventListener("DOMContentLoaded", function () {
    const catalog = document.getElementById("catalog2");
    const cart = document.getElementById("cart2");
    const cartItems = document.getElementById("cart-items2");
    const totalElement = document.getElementById("total2");

    let total = 0;

    const products = [
        { id: 1, name: "Hamburguesa con Cheddar", price:500, image: "../assets/burguercheddar.png" },
        { id: 2, name: "hamburguesa Clasica", price: 900, image: "../assets/burguerclasica.webp" },
        { id: 2, name: "Hamburguesa Criolla", price: 650, image: "../assets/burguerCriolla.jpeg" },
        { id: 2, name: "Ñoquis de papa", price: 1200, image: "../assets/noquis.png" },
        { id: 2, name: "Ravioles de verdura", price: 1200, image: "../assets/raviolesPyE.jpg" },
    ];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price.toFixed(2)} PESOS</p>
        <button class="add-to-cart" onclick="addToCart(${product.id}, ${product.price})">Añadir al Carrito</button>
    `;
        catalog.appendChild(productElement);
    });

    window.addToCart = function (productId, productPrice) {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
            const cartItem = document.createElement("li");
            cartItem.textContent = `${selectedProduct.name} - ${selectedProduct.price.toFixed(2)} PESOS`;
            cartItems.appendChild(cartItem);

            total += productPrice;
            totalElement.textContent = `Total: $${total.toFixed(2)} PESOS`;
        }
        cart.style.display = "block";
    };
});