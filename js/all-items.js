/* We use querySelectorAll to select all elements matching the css class of
.muffin-catalogue. Then we add an event listener to each item, so that the
anonymous function is executed whenever click event occurs on the item. Then,
we use the this keyword to refer to the item that was clicked to get its attributes
(as well as the getAttribute method, which retrieves the data- attribute of the element).
We then set these attributes with a key in the sessionStorage so that they can be used
once we go to the muffin webpage (which we are redirected to). There is no need to convert
the attribute data into a JSON file because it is already a string. */
document.querySelectorAll('.muffin-catalogue').forEach(function(item) {
    item.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = this.getAttribute('data-price');
        const description = this.getAttribute('data-description');
        const id = this.getAttribute('id');

        // Save the muffin data to session storage
        sessionStorage.setItem('muffinName', name);
        sessionStorage.setItem('muffinPrice', price);
        sessionStorage.setItem('muffinDescription', description);
        sessionStorage.setItem('muffinId', id);

        // Redirect to the muffin page
        window.location.href = 'muffin.html';
    });
});

// Define background images for each muffin type
const backgroundImages = {
    chocolate: "url('images/chocolate-muffin.jpg')",
    banana: "url('images/banana-muffin.jpg')",
    apple: "url('images/apple-muffin.jpg')",
    carrot: "url('images/carrot-muffin.jpg')",
    blueberry: "url('images/blueberry-muffin.jpg')",
    pumpkin: "url('images/pumpkin-muffin.jpg')"
};

// Loop through each muffin catalogue item
document.querySelectorAll('.muffin-catalogue').forEach(item => {
    const id = item.id;

    // Check if an image exists for this id
    if (backgroundImages[id]) {
        // Set the background image
        item.style.backgroundImage = backgroundImages[id];
        item.style.backgroundSize = 'cover'; // Adjusts image to cover the element
        item.style.backgroundPosition = 'center'; // Centers the image
    }
});

/* This adds an event listener to the select element "muffin-select". It listens
for a "change" event, which occurs whenever the user changes the selected option in
the dropdown. When the change event is triggered, the anonymous function provided
as the second argument is excuted */
document.getElementById('muffin-select').addEventListener('change', function() {
    let option = this.value; /* This refers to the value of the currently selected option in the dropdown */
    /* This line retrieves all children of the element with the class muffins-catalogue. Then we use
    Array.from to convert these children, which are collected as NodeList, into a Javascript array
    for easier manipulation */
    let items = Array.from(document.querySelector('.muffins-catalogue').children); 
    let sortedItems; /* This is a variable to hold the sorted array of items. */

    // Sort items based on the selected option
    switch(option) {
        case 'price-highest-to-lowest':
            /* We use the built in JavaScript array method to sort the elements of the array in
            the sorting order defined by the provided comparator function. a and b are parameters
            representing any two elements of the array. The method getAttribute("data-price") is 
            called on each element (a and b) and retrieves the value of the data-price attribute
            from each element. This is a string and it is converted to a number for subtraction. 
            Then the subtraction calculates the difference between the prices of b and a.
            Now, the return value can either be positive value, negative value or zero. If it
            is positive value, b is placed before a in the array, as the function is designed
            to sort in descending order based on price. If the result is negative, a has a higher
            price than b, and a will be placed before b. If the result is zero, it inidicates both
            elements have the same price, and so their order relative to each other will remain unchanged.
            Since the sort method sorts the array in place, both sortedItems and items will reference the 
            same array. */
            sortedItems = items.sort(function(a, b) {
                return b.getAttribute('data-price') - a.getAttribute('data-price');
            });
            break;
        /* This case the above but in the opposite way, where it calculates the difference between
        a and b. Hence, if it is negative (when the price of a is less than the price of b), then
        a will be placed before b, which aligns with desired outcome of sorting from lowest to highest price.
        If the result is positive (a is a greater price than b), then b will be placed before a. If it is
        zero (prices are equal), then the order of a and b relative to each other remains unchanged. */
        case 'price-lowest-to-highest':
            sortedItems = items.sort(function(a, b) {
                return a.getAttribute('data-price') - b.getAttribute('data-price');
            });
            break;
        /* localCompare() is a string method that returns: a negative number if a is alphabetically less
        than b, a positive number if a is alphabetically greater than b, and zero if a and b does not need
        to change order. Recall that if the comparator function returns a negative number for a given pair
        of elements, this indicates that the first element a should appear before the second element b. The
        opposite for positive return value, and stay the same for a zero return value. */
        case 'alphabetical-A-Z':
            sortedItems = items.sort(function(a, b) {
                return a.getAttribute('data-name').localeCompare(b.getAttribute('data-name'));
            });
            break;
        /* This case works essentially the same as the one before but in reverse */
        case 'alphabetical-Z-A':
            sortedItems = items.sort(function(a, b) {
                return b.getAttribute('data-name').localeCompare(a.getAttribute('data-name'));
            });
            break;
        /* This case works the same as the first option except the attribute is now data-popularity */
        case 'best-selling':
            sortedItems = items.sort(function(a, b) {
                return b.getAttribute('data-popularity') - a.getAttribute('data-popularity');
            });
            break;
    }

    // Clear the container and append sorted items
    const container = document.querySelector('.muffins-catalogue');
    container.innerHTML = '';  // Clear existing content
    sortedItems.forEach(function(item) {
        container.appendChild(item);
    }); // Append sorted items
});



