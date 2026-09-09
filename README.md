# Muffin-Website

This folder includes HTML, CSS and JavaScript code for a website about muffins.

## Website Structure

This is a multi-page static website consisting of:
- **index.html** - Home page with bakery introduction
- **recipes.html** - Muffin recipes collection
- **shop-menu.html** - Bakery shop menu
- **contact.html** - Contact information and form
- **shopping-cart.html** - Shopping cart functionality

## Local Setup Instructions

To view this website locally:

1. **Clone or download** this repository to your local machine
2. **Open index.html** in your web browser:
   - Double-click the index.html file, OR
   - Right-click index.html and select "Open with" → your preferred browser
3. **Navigate** through the website using the navigation bar at the top

## Technical Details

- **Styling**: CSS files located in the `css/` directory:
  - `index.css` - Home page specific styles
  - `style.css` - Global styles including navigation, buttons, and layout
  - Additional CSS files for other pages (recipes.css, etc.)

- **Navigation**: Consistent navigation bar across all pages implemented in HTML/CSS
- **Interactive Elements**: Button navigation implemented using inline JavaScript `onclick` handlers
- **Responsive Design**: Uses viewport units (vw, vh) and clamp() for responsive typography and spacing

## File Structure
```
Muffin-Website/
├── index.html
├── recipes.html
├── shop-menu.html
├── contact.html
├── shopping-cart.html
├── css/
│   ├── index.css
│   ├── style.css
│   ├── recipes.css
│   ├── shop-menu.css
│   ├── contact.css
│   └── shopping-cart.css
├── images/
│   └── (various muffin images)
└── README.md
```

## Notes
- This is a static website - no server-side processing or build tools required
- All navigation is handled client-side through standard HTML links and JavaScript
- The website uses modern CSS features including flexbox, CSS variables, and responsive design principles