// Function to update muffin details page
function updateMuffinDetails() {
    // Retrieve the muffin data from session storage
    const name = sessionStorage.getItem("muffinName");
    // parseFloat converts the string into a floating-point number
    const basePrice = parseFloat(sessionStorage.getItem("muffinPrice"));
    const description = sessionStorage.getItem("muffinDescription");
    const id = sessionStorage.getItem("muffinId");
    /* Here we get the elements that we need change their 
    value to the items in our sessionStorage */
    const muffinImage = document.getElementById("muffin-image");
    const quantityValue = document.querySelector(".quantity-value");
    const priceDisplay = document.getElementById("muffin-price");
    const sizeSelect = document.querySelector(".size");

    // We set default values for quantity, multipler and selectedSize
    let currentQuantity = 1;
    let sizeMultiplier = 1;
    let selectedSize = "small";

    // Display muffin data on the page
    if (name && basePrice && description && id) {
        document.getElementById("muffin-name").textContent = name;
        priceDisplay.textContent = `$${basePrice.toFixed(2)}`;
        document.getElementById("muffin-description").textContent = description;
        muffinImage.src = `images/${id}-muffin.jpg`;
        muffinImage.alt = name;
    } 
    function updatePrice() {
        const newPrice = basePrice * sizeMultiplier * currentQuantity;
        priceDisplay.textContent = `$${newPrice.toFixed(2)}`;
    }

    // We change the sizeMultiplier based on the selected size
    sizeSelect.addEventListener("change", function () {
        selectedSize = sizeSelect.value;
        if (selectedSize === "small") {
            sizeMultiplier = 1;
        } else if (selectedSize === "medium") {
            sizeMultiplier = 1.5;
        } else {
            sizeMultiplier = 2;
        }
        updatePrice();
    });

    // Handle quantity change
    document.querySelector(".quantity-button-minus").addEventListener("click", function () {
        if (currentQuantity > 1) {
            currentQuantity--; // This is shorthand to decrement
            quantityValue.textContent = currentQuantity;
            updatePrice();
        }
    });

    document.querySelector(".quantity-button-plus").addEventListener("click", function () {
        currentQuantity++; // This is shorthand to increment
        quantityValue.textContent = currentQuantity;
        updatePrice();
    });

    // Add to cart functionality
    document.querySelector(".add-to-cart").addEventListener("click", function () {
        /* The logical OR is used to provide a default value of [] in case
        sessionStorage.getItem("shoppingCart") returns null. This ensure
        there is always a valid JSON string to parse. JSON.parse converts a
        JSON string into a JavaScript object i.e. a JavaScript array. */
        const existingCart = JSON.parse(sessionStorage.getItem("shoppingCart") || "[]");
        const newItemName = `${name} SIZE - ${selectedSize.toUpperCase()}`;
        const newItem = {
            name: newItemName,
            price: parseFloat(priceDisplay.textContent.slice(1)), //Slice removes the dollar sign
            basePrice: basePrice * sizeMultiplier,
            quantity: currentQuantity,
            image: `${id}-muffin.jpg`,
        };

        // Check if the item already exists with the same name
        const existingItem = existingCart.find(function(item) {
            return item.name === newItemName;
        });
        if (existingItem) {
            existingItem.quantity += newItem.quantity;
        } else {
            existingCart.push(newItem);
        }
        // Add the item to sessionStorage under the key shoppingCart
        sessionStorage.setItem("shoppingCart", JSON.stringify(existingCart));
    });
}

// Initialize muffin details page
document.addEventListener("DOMContentLoaded", updateMuffinDetails);




