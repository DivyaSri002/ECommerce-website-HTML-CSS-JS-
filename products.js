document.addEventListener("DOMContentLoaded", function() {
    // Fetch the product data from the JSON file
    fetch('products.json')
        .then(response => response.json())  // Parse the JSON response
        .then(products => {
            generateProductCards(products);  // Call function to generate product cards
        })
        .catch(error => {
            console.error("Error fetching product data:", error);  // Handle any errors
        });
});

// Function to generate product cards
function generateProductCards(products) {
    const productList = document.getElementById('product-list');
    
    // Clear the existing content (in case of updates)
    productList.innerHTML = '';

    // Loop through each product and create HTML dynamically
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="${product.detailsLink}" class="view-details">View Details</a>
        `;
        
        // Append the product card to the product list
        productList.appendChild(productCard);
    });
}
