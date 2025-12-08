// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Global variables
let currentCategory = 'all';
let allProducts = [...products];
let filteredProducts = [...products];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCart');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const searchInput = document.getElementById('searchInput');
const sortBySelect = document.getElementById('sortBy');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutPage = document.getElementById('checkoutPage');
const confirmationPage = document.getElementById('confirmationPage');
const categoryTitle = document.getElementById('categoryTitle');
const ratingFilters = document.querySelectorAll('.rating-filter');
const inStockCheckbox = document.getElementById('inStock');
const clearFiltersBtn = document.getElementById('clearFilters');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadAllProducts();
    setupEventListeners();
    cart.updateCartUI();
});

// Setup all event listeners
function setupEventListeners() {
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            applyFilters();
        });
    });

    // Cart icons
    cartIcon.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Modal
    modalClose.addEventListener('click', closeProductModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) closeProductModal();
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        applyFilters();
    });

    // Sort
    sortBySelect.addEventListener('change', (e) => {
        applyFilters();
    });

    // Price range filter
    priceRange.addEventListener('input', (e) => {
        priceValue.textContent = e.target.value;
        applyFilters();
    });

    // Rating filters
    ratingFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });

    // In stock filter
    inStockCheckbox.addEventListener('change', applyFilters);

    // Clear filters
    clearFiltersBtn.addEventListener('click', () => {
        priceRange.value = 10000;
        priceValue.textContent = '10000';
        ratingFilters.forEach(f => f.checked = false);
        inStockCheckbox.checked = true;
        searchInput.value = '';
        categoryBtns.forEach(b => b.classList.remove('active'));
        categoryBtns[0].classList.add('active');
        currentCategory = 'all';
        applyFilters();
    });

    // Checkout
    checkoutBtn.addEventListener('click', goToCheckout);
    document.getElementById('backShoppingBtn').addEventListener('click', backToShopping);
    document.getElementById('checkoutForm').addEventListener('submit', submitOrder);
    document.getElementById('continueShoppingBtn').addEventListener('click', backToShopping);

    // Hero button
    document.querySelector('.hero-btn').addEventListener('click', () => {
        window.scrollTo({ top: 400, behavior: 'smooth' });
    });
}

// Load all products
function loadAllProducts() {
    displayProducts(products);
}

// Display products in grid
function displayProducts(productsToDisplay) {
    if (productsToDisplay.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No products found. Try adjusting your filters.</p>';
        return;
    }

    productsGrid.innerHTML = productsToDisplay.map(product => generateProductHTML(product)).join('');
}

// Apply all filters
function applyFilters() {
    // Start with category filter
    let filtered = getProductsByCategory(currentCategory);

    // Apply search
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Apply price filter
    const maxPrice = parseFloat(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);

    // Apply rating filter
    const selectedRatings = Array.from(ratingFilters)
        .filter(f => f.checked)
        .map(f => parseFloat(f.value));
    
    if (selectedRatings.length > 0) {
        const minRating = Math.min(...selectedRatings);
        filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Apply stock filter
    if (inStockCheckbox.checked) {
        filtered = filtered.filter(p => p.availability === 'In Stock');
    }

    // Apply sorting
    const sortType = sortBySelect.value;
    filtered = sortProducts(filtered, sortType);

    // Update category title
    const categoryName = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    categoryTitle.textContent = currentCategory === 'all' ? 'All Products' : categoryName;

    filteredProducts = filtered;
    displayProducts(filtered);
}

// Cart functions
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('open');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('open');
}

// Product modal functions
function openProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').onerror = function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2240%22 fill=%22%23ccc%22%3EProduct Image%3C/text%3E%3C/svg%3E';
    };
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalRating').textContent = `⭐ ${product.rating} stars`;
    document.getElementById('modalReviews').textContent = `(${product.reviews} reviews)`;
    document.getElementById('modalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modalOriginalPrice').textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById('modalDiscount').textContent = discount > 0 ? `-${discount}%` : '';
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalAvailability').textContent = product.availability;
    document.getElementById('modalSKU').textContent = product.sku;
    document.getElementById('quantityInput').value = 1;
    document.getElementById('quantityInput').max = 10;

    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

// Checkout functions
function goToCheckout() {
    if (cart.isEmpty()) {
        alert('Your cart is empty. Please add some products first.');
        return;
    }

    closeCart();
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.category-menu').style.display = 'none';
    document.querySelector('.main-content').style.display = 'none';
    document.querySelector('.footer').style.display = 'none';

    checkoutPage.style.display = 'block';
    updateCheckoutSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function backToShopping() {
    checkoutPage.style.display = 'none';
    confirmationPage.classList.remove('show');
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.category-menu').style.display = 'block';
    document.querySelector('.main-content').style.display = 'grid';
    document.querySelector('.footer').style.display = 'block';
    cart.clear();
    cart.updateCartUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateCheckoutSummary() {
    const checkoutItems = document.getElementById('checkoutItems');
    const subtotal = cart.getTotal();
    const shipping = subtotal > 50 ? 0 : 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    checkoutItems.innerHTML = cart.items.map(item => `
        <div class="checkout-item">
            <span>${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;
}

function submitOrder(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const address = document.querySelector('input[placeholder="Street Address"]').value;
    const city = document.querySelector('input[placeholder="City"]').value;

    if (!fullName || !email || !address || !city) {
        alert('Please fill in all required fields.');
        return;
    }

    // Generate order number
    const orderNumber = 'ORD-' + Date.now();
    const total = document.getElementById('totalAmount').textContent;

    // Show confirmation
    checkoutPage.style.display = 'none';
    confirmationPage.classList.add('show');
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('confirmedTotal').textContent = total;

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push({
        orderNumber,
        date: new Date().toLocaleDateString(),
        items: cart.items,
        total: parseFloat(total.replace('$', '')),
        customer: { fullName, email, address, city }
    });
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Export for use in HTML
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.addToCart = addToCart;
