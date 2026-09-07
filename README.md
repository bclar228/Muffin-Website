# Muffin Bakery Website

A fully functional, responsive website for a fictional muffin bakery featuring multiple pages, interactive shopping cart functionality, and form validation.

## Features

- **Multi-page Website**: Home, Recipes, Shop Menu, Contact, and Shopping Cart pages
- **Interactive Shopping Cart**: Add/remove muffins, view cart contents, calculate totals
- **Persistent Cart Data**: Uses sessionStorage to maintain cart state during browsing session
- **Form Validation**: Contact form with real-time error validation
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Consistent Navigation**: Uniform navigation bar across all pages
- **Interactive Elements**: Buttons, carousels, and dynamic content updates

## File Structure

```
Muffin-Website/
├── index.html              # Home page
├── recipes.html            # Recipes page
├── shop-menu.html          # Shop menu with product categories
├── all-items.html          # Complete product listing
├── contact.html            # Contact form and information
├── shopping-cart.html      # Shopping cart interface
├── css/
│   ├── style.css           # Main stylesheet
│   ├── index.css           # Home page specific styles
│   ├── shop-menu.css       # Shop menu styles
│   ├── contact.css         # Contact page styles
│   └── shopping-cart.css   # Shopping cart styles
├── js/
│   ├── shopping-cart.js    # Shopping cart logic and functionality
│   ├── contact.js          # Contact form validation
│   └── shop-menu.js        # Shop menu interactions
└── images/                 # Product images (referenced in JS)
```

## Key Functionalities

### Shopping Cart System
- Items are stored as objects in `muffinsList` array with properties: name, basePrice, price, quantity, image
- Data persistence via sessionStorage (automatically cleared when browser session ends)
- Dynamic table rendering based on cart contents
- Automatic grand total calculation
- Empty cart state handling with appropriate messaging
- Add/remove item functionality with event propagation prevention

### Contact Form
- Real-time validation for name, email, phone, and message fields
- Error messages displayed dynamically via JavaScript
- Prevents form submission when validation fails

### Navigation
- Consistent navigation bar across all pages
- Current page highlighting in navigation menu
- Button-based navigation between sections

## Technical Implementation

### Shopping Cart Logic (`js/shopping-cart.js`)
- **Data Storage**: Uses JSON.parse/stringify with sessionStorage for object persistence
- **Rendering**: Dynamic HTML generation for cart items
- **Event Handling**: Delegated event listeners for dynamic content
- **UI Updates**: Automatic interface refresh when cart state changes
- **Memory Management**: Proper cleanup to prevent overlap in table rendering

### Styling Approach
- External CSS files for separation of concerns
- Base styling in style.css with page-specific overrides
- Flexbox and grid layouts for responsive design
- Consistent visual theme across all pages

## How to Use

1. Clone or download the repository
2. Open `index.html` in any modern web browser
3. Navigate through the site using the navigation menu or buttons
4. Browse products in the shop menu and add items to your cart
5. View and manage your cart in the shopping cart page
6. Use the contact form to send a message (validation will guide you)
7. Note: Cart data persists only for the current browser session

## Browser Compatibility

- Tested on modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard HTML5, CSS3, and JavaScript ES6 features
- Responsive design principles applied for mobile compatibility

## Notes

- This is a frontend-only demonstration website
- No backend integration or actual payment processing
- Images are referenced but would need to be provided in the images/ directory
- All data is client-side and session-based