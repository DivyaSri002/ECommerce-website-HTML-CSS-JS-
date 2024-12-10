document.addEventListener("DOMContentLoaded", function () {
    // Fetch product data from the JSON file
    fetch('productdetails.json')
        .then(response => response.json())  // Parse the JSON response
        .then(product => {
            // Set product name
            document.querySelector(".product-name").textContent = product.name;

            // Set the main product image
            const mainImage = document.querySelector(".product-img");
            mainImage.src = product.images[0];  // Set the first image as the main image
            mainImage.alt = `Image of ${product.name}`;

            // Dynamically create thumbnail images and add event listener to each
            const thumbnailContainer = document.querySelector(".thumbnail-container");
            product.images.forEach((image, index) => {
                const thumbnail = document.createElement("img");
                thumbnail.src = image;
                thumbnail.alt = `Thumbnail ${index + 1}`;
                thumbnail.classList.add("thumbnail");

                // Add click event listener to each thumbnail
                thumbnail.addEventListener("click", function () {
                    mainImage.src = image;  // Change the main image to the clicked thumbnail
                    mainImage.alt = `Image of ${product.name} - ${index + 1}`;  // Update alt text for accessibility
                });

                thumbnailContainer.appendChild(thumbnail);
            });

            // Set product description
            document.querySelector(".description").textContent = product.description;

            // Set price details
            document.querySelector(".discount-badge").textContent = product.discount;
            document.querySelector(".original-price").textContent = product.originalPrice;
            document.querySelector(".current-price").textContent = product.currentPrice;

            // Add key features to the list
            const featuresList = document.querySelector(".features");
            product.features.forEach(feature => {
                const li = document.createElement("li");
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
});
