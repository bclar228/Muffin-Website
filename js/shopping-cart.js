/* First, we set the variable muffinsList to be the array, shoppingCart.
We do this by using the method that retrieves the value associated with the
key "shoppingCart" from the "sessionStorage". The sessionStorage is basically
a web storage object that allows you to store key-value pairs that 
are scoped to a single browser session. The data stored in sessionStorage
is cleared when the session ends. We use the logical OR operator as a fall
back, so that way if sessionStorage.getItem("shoppingCart") returns null, then
[] is used as fallback value. This ensures that if there is no previous shopping
cart data, muffinsList is initalised as an empty array. This is useful for later,
when we check if muffinsList is empty or not, and so whether we should display 
certain elements or not. */
let muffinsList = JSON.parse(sessionStorage.getItem("shoppingCart") || "[]");

// Function to calculate the grand total
function calculateGrandTotal() {
    /* Note that muffinsList is an array containing multiple objects, 
    and each object (like a dictionary in python) in the array represents
    a muffin with specific properties, such as price and quantity. 
    
    The parameter item in the anonymous function represents the current element
    of the muffinsList array during each iteration.
    
    We then access the properties of the object item to calculate the grandTotal. 
    
    Then we use querySlector method which returns the first element that matches a
    specified CSS selector. We use the textContent property to set the text content
    of this specific <h3> element.
    
    Lastly we concatenate the dollar sign with the grandTotal value formatted to two
    decimal places (we use the method toFixed(2) to do this). */
    let grandTotal = 0;
    muffinsList.forEach(function (item) {
        grandTotal += item.price;
    });
    document.querySelector('.grand-total h3').textContent = "GRAND TOTAL $" + grandTotal.toFixed(2);
}

// Function to update the cart UI
function updateCartUI() {
    let table = document.querySelector('.shopping-cart-container');
    let checkoutButton = document.querySelector('.checkout-button');
    let shopButton = document.querySelector('.shop-button');
    let grandTotalSection = document.querySelector('.grand-total');
    let shopButtonEmptyCart = document.querySelector('.shop-button-for-empty-cart');
    let emptyCartMessage = document.querySelector('.empty-cart-message');

    /* If there are no items in the cart, then we only want to display
    the heading, a message to tell the user the cart is empty, and
    a button to return to the shop, so we set the rest of the items to display: None. 
    Otherwise we display the table listing each item. So we set the elements that we 
    want to hide that we saved as variables and set their display to none.*/
    if (muffinsList.length === 0) {
        table.style.display = 'none';
        checkoutButton.style.display = 'none';
        grandTotalSection.style.display = 'none';
        shopButton.style.display = 'none';
        shopButtonEmptyCart.style.display = 'block';
        emptyCartMessage.style.display = 'flex';
    } else {
        table.style.display = 'table';
        checkoutButton.style.display = 'block';
        grandTotalSection.style.display = 'flex';
        emptyCartMessage.style.display = 'none';
        shopButtonEmptyCart.style.display = 'none';
    }
}

function deleteRow(index, event) {
    /* Without event.stopPropgation, when we delete an item in the table the webpage
    automatically takes the you to the muffin webpage without any details. So
    we do this to stop that from happening. Furthermore, we convert our
    array to a JSON string so that way the array will be in the correct format when
    we convert back (this is because sessionStorage can only store strings). So we save
    the updated muffinsList array to the sessionStorage as a JSON string under the key
    shoppingCart. Then we use our other functions to display the content on the webpage.*/
    event.stopPropagation(); 
    muffinsList.splice(index, 1);
    sessionStorage.setItem("shoppingCart", JSON.stringify(muffinsList));
    renderTable();
    calculateGrandTotal();
    updateCartUI();
}

// Update the renderTable function to pass the event
function renderTable() {
    /* Here we want to render the table. First, we set the html of tbody to an
    empty string, so that way we don't have overlap. Then, given our list of 
    objects that are muffins with specific properties, we loop over each item
    and write the html so that it is the same as the html in shopping cart,
    except that this time we use the properties of the object muffin from
    the muffin list to insert relevant information. Then we add this html that
    we set in the variable row to tbody and do it all over again until we get
    to the end of the list. */
    let tbody = document.querySelector('.shopping-cart-container tbody');
    tbody.innerHTML = ''; // Clear current rows
    muffinsList.forEach((item, index) => {
        let row = `<tr>
            <td class="col-item">
                <img src="images/${item.image}" class="col-item-image" alt="Image of a muffin">
                <div class="image-details"><span>${item.name}</span></div>
            </td>
            <td class="col-price"><span>$${item.basePrice.toFixed(2)}</span></td>
            <td class="col-qty"><span>${item.quantity}</span></td>
            <td class="col-subtotal"><span>$${(item.price).toFixed(2)}</span></td>
            <td class="col-x-button">
                <button class="x-button" onclick="deleteRow(${index}, event)"></button>
            </td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// Initialize the shopping cart
document.addEventListener("DOMContentLoaded", function () {
    /* As soon as the webpage is loaded we apply our functions
    to display the content correctly. */
    renderTable();
    calculateGrandTotal();
    updateCartUI();
});