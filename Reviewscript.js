// Improved hardcoded reviews data with profile picture and rating
const reviews = JSON.parse(localStorage.getItem('reviews')) || [
    { name: "John Doe", review: "Great product! Highly recommend it.", rating: 5, image: "profile.jpg"},
    { name: "Jane Smith", review: "Good value for money.", rating: 4, image: "profile.jpg"},
    { name: "Alex Johnson", review: "Fast shipping and excellent quality.", rating: 4, image: "profile.jpg"},
];

// Populate reviews dynamically on page load
const reviewsList = document.getElementById("reviewsList");

reviews.forEach(({ name, review, rating, image}) => {
    const li = document.createElement("li");
    const starRating = Array(rating).fill("⭐").join("");  // Generate star rating

    li.innerHTML = `
        <div class="review-header">
            <img src="${image}" alt="${name}'s profile" class="profile-pic">
            <div class="review-info">
                <strong>${name}</strong> <span class="rating">${starRating}</span>
            </div>
        </div>
        <p class="review-text">${review}</p>
    `;
    reviewsList.appendChild(li);
});

// Star rating interaction
const stars = document.querySelectorAll(".star");
let currentRating = 0;

stars.forEach(star => {
    star.addEventListener("mouseover", () => {
        const value = star.getAttribute("data-value");
        highlightStars(value);
    });

    star.addEventListener("click", () => {
        currentRating = star.getAttribute("data-value");
        highlightStars(currentRating);
    });

    star.addEventListener("mouseout", () => {
        highlightStars(currentRating);
    });
});

function highlightStars(rating) {
    stars.forEach(star => {
        star.style.color = star.getAttribute("data-value") <= rating ? "gold" : "gray";
    });
}

// Review form submission
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('reviewText').value;
    const rating = currentRating;
    // Create a new review element
    const review = { name, review: reviewText, rating: parseInt(rating), image: "profile.jpg"};

    // Add the new review to the reviews array
    reviews.push(review);

    // Update localStorage with new reviews array
    localStorage.setItem('reviews', JSON.stringify(reviews));

    // Create a new review DOM element
    const li = document.createElement("li");
    const starRating = Array(rating).fill("⭐").join("");  // Generate star rating

    li.innerHTML = `
        <div class="review-header">
            <img src="${review.image}" alt="${review.name}'s profile" class="profile-pic">
            <div class="review-info">
                <strong>${review.name}</strong> <span class="rating">${starRating}</span>
            </div>
        </div>
        <p class="review-text">${review.review}</p>
    `;

    // Add the new review to the reviews list
    reviewsList.appendChild(li);

    // Clear the form after submission
    document.getElementById('reviewForm').reset();
    highlightStars(0); // Reset stars
});

// Add to Cart button functionality with visual feedback
const addToCartBtn = document.getElementById("addToCart");

addToCartBtn.addEventListener("click", () => {
    // Disable the button temporarily to simulate adding to cart
    addToCartBtn.disabled = true;
    addToCartBtn.innerText = "Adding...";

    // Change the cursor to not-allowed while adding
    addToCartBtn.style.cursor = "not-allowed";

// Simulate a short delay and reset button
setTimeout(() => {
    addToCartBtn.disabled = false;
    addToCartBtn.innerText = "Add to Cart";

    // Reset the cursor to default when the button is enabled again
    addToCartBtn.style.cursor = "pointer";

    alert("Item added to cart!");

    // Update cart count (Mocked)
    let cartCount = parseInt(document.getElementById("cartCount").innerText);
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}, 1500); // Delay to mimic a real-world interaction (1.5 seconds)
});
   
