// Product Database
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "electronics",
        price: 89.99,
        originalPrice: 129.99,
        image: "images/products/headphones.jpg",
        rating: 4.5,
        reviews: 128,
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
        availability: "In Stock",
        sku: "WH-1000"
    },
    {
        id: 2,
        name: "Smartphone",
        category: "electronics",
        price: 599.99,
        originalPrice: 799.99,
        image: "images/products/smartphone.jpg",
        rating: 4.8,
        reviews: 542,
        description: "Latest flagship smartphone with 5G, amazing camera, and premium build quality.",
        availability: "In Stock",
        sku: "SM-2024"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "sports",
        price: 79.99,
        originalPrice: 119.99,
        image: "images/products/shoes.jpg",
        rating: 4.3,
        reviews: 89,
        description: "Comfortable running shoes with advanced cushioning and breathable mesh.",
        availability: "In Stock",
        sku: "RS-500"
    },
    {
        id: 4,
        name: "Yoga Mat",
        category: "sports",
        price: 29.99,
        originalPrice: 49.99,
        image: "images/products/yoga-mat.jpg",
        rating: 4.6,
        reviews: 234,
        description: "Non-slip yoga mat with carrying strap, perfect for gym or home workouts.",
        availability: "In Stock",
        sku: "YM-100"
    },
    {
        id: 5,
        name: "Winter Jacket",
        category: "fashion",
        price: 149.99,
        originalPrice: 199.99,
        image: "images/products/jacket.jpg",
        rating: 4.4,
        reviews: 167,
        description: "Warm and stylish winter jacket with waterproof outer layer.",
        availability: "In Stock",
        sku: "WJ-200"
    },
    {
        id: 6,
        name: "Blue Jeans",
        category: "fashion",
        price: 49.99,
        originalPrice: 79.99,
        image: "images/products/jeans.jpg",
        rating: 4.5,
        reviews: 312,
        description: "Classic blue denim jeans with comfortable fit and premium quality fabric.",
        availability: "In Stock",
        sku: "BJ-001"
    },
    {
        id: 7,
        name: "The Great Gatsby",
        category: "books",
        price: 12.99,
        originalPrice: 19.99,
        image: "images/products/book.jpg",
        rating: 4.7,
        reviews: 456,
        description: "Classic American novel by F. Scott Fitzgerald. Hardcover edition.",
        availability: "In Stock",
        sku: "BK-001"
    },
    {
        id: 8,
        name: "Programming Guide",
        category: "books",
        price: 34.99,
        originalPrice: 49.99,
        image: "images/products/programming-book.jpg",
        rating: 4.8,
        reviews: 678,
        description: "Complete guide to web development and modern programming practices.",
        availability: "In Stock",
        sku: "BK-002"
    },
    {
        id: 9,
        name: "Coffee Maker",
        category: "home",
        price: 59.99,
        originalPrice: 89.99,
        image: "images/products/coffee-maker.jpg",
        rating: 4.4,
        reviews: 245,
        description: "Programmable coffee maker with built-in grinder and thermal carafe.",
        availability: "In Stock",
        sku: "CM-100"
    },
    {
        id: 10,
        name: "LED Desk Lamp",
        category: "home",
        price: 39.99,
        originalPrice: 59.99,
        image: "images/products/lamp.jpg",
        rating: 4.6,
        reviews: 189,
        description: "Modern LED desk lamp with adjustable brightness and USB charging port.",
        availability: "In Stock",
        sku: "LD-200"
    },
    {
        id: 11,
        name: "Bedsheet Set",
        category: "home",
        price: 44.99,
        originalPrice: 69.99,
        image: "images/products/bedsheet.jpg",
        rating: 4.5,
        reviews: 156,
        description: "Soft and comfortable cotton bedsheet set with deep pocket fit.",
        availability: "In Stock",
        sku: "BS-300"
    },
    {
        id: 12,
        name: "Plant Pot",
        category: "home",
        price: 24.99,
        originalPrice: 39.99,
        image: "images/products/pot.jpg",
        rating: 4.3,
        reviews: 123,
        description: "Decorative ceramic plant pot with drainage hole, perfect for indoor plants.",
        availability: "In Stock",
        sku: "PP-100"
    },
    {
        id: 13,
        name: "Tablet",
        category: "electronics",
        price: 299.99,
        originalPrice: 399.99,
        image: "images/products/tablet.jpg",
        rating: 4.7,
        reviews: 389,
        description: "10-inch tablet with high resolution display and powerful processor.",
        availability: "In Stock",
        sku: "TB-2024"
    },
    {
        id: 14,
        name: "Sports Watch",
        category: "sports",
        price: 199.99,
        originalPrice: 299.99,
        image: "images/products/watch.jpg",
        rating: 4.6,
        reviews: 267,
        description: "Advanced sports watch with heart rate monitor and GPS tracking.",
        availability: "In Stock",
        sku: "SW-100"
    },
    {
        id: 15,
        name: "T-Shirt",
        category: "fashion",
        price: 19.99,
        originalPrice: 34.99,
        image: "images/products/tshirt.jpg",
        rating: 4.4,
        reviews: 445,
        description: "Soft cotton t-shirt available in multiple colors and sizes.",
        availability: "In Stock",
        sku: "TS-001"
    }
];

// Helper function to generate product grid HTML
function generateProductHTML(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22200%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22220%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2220%22 fill=%22%23ccc%22%3EProduct Image%3C/text%3E%3C/svg%3E'">
                ${discount > 0 ? `<span class="product-badge">-${discount}%</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <span>⭐ ${product.rating}</span>
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="product-current-price">$${product.price.toFixed(2)}</span>
                    <span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
                <div class="product-actions">
                    <button class="quick-view-btn" onclick="openProductModal(${product.id})">Quick View</button>
                    <button class="add-btn" onclick="addToCart(${product.id})">Add</button>
                </div>
            </div>
        </div>
    `;
}

// Function to get product by ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Function to get all products or filter by category
function getProductsByCategory(category) {
    if (category === 'all') {
        return products;
    }
    return products.filter(p => p.category === category);
}

// Function to search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery)
    );
}

// Function to filter by price
function filterByPrice(maxPrice) {
    return products.filter(p => p.price <= maxPrice);
}

// Function to filter by rating
function filterByRating(minRating) {
    return products.filter(p => p.rating >= minRating);
}

// Function to sort products
function sortProducts(productsArray, sortType) {
    const sorted = [...productsArray];
    
    switch(sortType) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'featured':
        default:
            return sorted;
    }
}
