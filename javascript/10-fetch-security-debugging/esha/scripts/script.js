const BASE_URL = "https://dummyjson.com/products";

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productsContainer = document.getElementById("productsContainer");
const productDetails = document.getElementById("productDetails");
const productDetailsContent = document.getElementById("productDetailsContent");
const backButton = document.getElementById("backButton");

function showMessage(message) {
    const messageBox = document.createElement("div");
    messageBox.className = "message-box";
    messageBox.textContent = message;
    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}

async function getAllProducts() {
    productsContainer.innerHTML = `<div class="spinner"></div>`;
    try {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        renderProducts(data.products);
    } catch (err) {
        console.error(err);
        showMessage("Failed to load products. Please check your connection.");
        productsContainer.innerHTML = `<p id='no-products-message'>Could not load products. Please try again later.</p>`;
    }
}

async function searchProducts(query) {
    productsContainer.innerHTML = `<div class="spinner"></div>`;
    try {
        const res = await fetch(`${BASE_URL}/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        renderProducts(data.products);
    } catch (err) {
        console.error(err);
        showMessage("Search failed. Please try again.");
        productsContainer.innerHTML = `<p id='no-products-message'>Search failed. Please try again later.</p>`;
    }
}

async function getProductById(id) {
    productsContainer.classList.add("hidden");
    productDetails.classList.remove("hidden");
    productDetailsContent.innerHTML = `<div class="spinner"></div>`;

    try {
        const res = await fetch(`${BASE_URL}/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const product = await res.json();
        renderProductDetails(product);
    } catch (err) {
        console.error(err);
        showMessage("Error loading product. Please try again.");
        productDetailsContent.innerHTML = `<p id='no-products-message'>${err.message}</p>`;
    }
}

function renderProducts(products) {
    productsContainer.innerHTML = "";
    if (!products || products.length === 0) {
        productsContainer.innerHTML = "<p id='no-products-message'>No products found.</p>";
        return;
    }
    products.forEach((product) => {
        const div = document.createElement("div");
        div.className = "product-card";
        div.innerHTML = `
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p>${product.description.slice(0, 60)}...</p>
                `;
        div.addEventListener("click", () => getProductById(product.id));
        productsContainer.appendChild(div);
    });
}

function renderProductDetails(product) {
    const galleryImages = product.images
        .map((img) => `<img src="${img}" alt="product thumbnail" onclick="changeMainImage(this, '${img}')">`)
        .join("");

    productDetailsContent.innerHTML = `
                <div class="product-image-section">
                    <img id="main-product-image" src="${
                        product.images[0]
                    }" alt="${product.title}" class="main-image">
                    <div class="image-gallery">
                        ${galleryImages}
                    </div>
                </div>
                <div class="product-info-section">
                    <h2>${product.title}</h2>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p><strong>Brand:</strong> ${product.brand}</p>
                    <p><strong>Description:</strong> ${product.description}</p>
                    <button class="btn-primary" onclick="showMessage('Added ${product.title} to cart!')">Add to Cart</button>
                </div>
            `;
    if (product.images.length > 0) {
        
        document.querySelector(".image-gallery img").classList.add("active");
    }
}

function changeMainImage(thumbnailElement, imageUrl) {
    const mainImage = document.getElementById("main-product-image");
    if (mainImage) {
        mainImage.src = imageUrl;
        document.querySelectorAll(".image-gallery img").forEach((img) => {
            img.classList.remove("active");
        });
        thumbnailElement.classList.add("active");
    }
}

searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        searchProducts(query);
    } else {
        getAllProducts();
    }
});

backButton.addEventListener("click", () => {
    productDetails.classList.add("hidden");
    productsContainer.classList.remove("hidden");
    getAllProducts();
});

getAllProducts();
