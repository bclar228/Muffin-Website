# Muffin-Website

This repository contains the HTML, CSS, and JavaScript code for a muffin bakery website with the following features:

## Website Structure

- **index.html** - Home page featuring the bakery's story and navigation
- **recipes.html** - Page displaying muffin recipes
- **shop-menu.html** - Shop menu page with product showcase and navigation to all items
- **all-items.html** - Complete product listing (referenced in shop-menu.js)
- **contact.html** - Contact form with validation and bakery information
- **shopping-cart.html** - Interactive shopping cart with add/remove functionality

## Key Features

### Shopping Cart Functionality
- Persistent cart using sessionStorage
- Dynamic table rendering of cart items
- Automatic grand total calculation
- Add/remove items from cart
- Empty cart state handling
- Checkout and continue shopping buttons

### Contact Form
- Client-side form validation
- Error message display for invalid inputs
- Responsive design

### Navigation
- Consistent navigation bar across all pages
- Current page highlighting
- Responsive menu structure

## Technical Implementation

### JavaScript Components
- **shopping-cart.js**: Handles all shopping cart logic including:
  - SessionStorage persistence
  - Cart item rendering
  - Total calculation
  - UI updates based on cart state
  - Item deletion with event propagation prevention

- **contact.js**: Form validation and error handling (referenced in contact.html)

- **shop-menu.js**: Product carousel and navigation logic (referenced in shop-menu.html)

### Styling
- CSS files for each page (index.css, shop-menu.css, contact.css, shopping-cart.css)
- Shared style.css for common styling
- Responsive design principles

## How to Use
1. Clone or download the repository
2. Open any HTML file in a modern web browser
3. Navigate through the site using the navigation bar
4. Add items to your cart from the shop menu
5. View and manage your cart in the shopping cart page
6. Use the contact form to get in touch

## Browser Compatibility
The website uses modern web standards and should work in all current browsers that support:
- HTML5
- CSS3
- JavaScript ES6+
- sessionStorage API