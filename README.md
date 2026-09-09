# Muffin-Website
This folder includes HTML, css and JavaScript code for a website about muffins.

## Local Setup and Testing Instructions

To run this website locally for development or testing:

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Optional: A local HTTP server (for proper functionality)

### Quick Start (Simplest Method)
1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. Navigate through the site using the navigation menu

### Recommended Method (Using Local Server)
For the best experience and to avoid potential issues with relative paths, use a local HTTP server:

#### Option 1: Python (if available)
```bash
# Navigate to the project directory
cd Muffin-Website

# Start server (Python 3)
python3 -m http.server 8000

# Or for Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

#### Option 2: Node.js (if available)
```bash
# Navigate to the project directory
cd Muffin-Website

# Install http-server globally (if not already installed)
npm install -g http-server

# Start the server
http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

#### Option 3: VS Code Live Server Extension
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Project Structure
- `index.html` - Home page
- `recipes.html` - Recipes page
- `shop-menu.html` - Shop menu page
- `contact.html` - Contact page
- `shopping-cart.html` - Shopping cart page
- `css/` - Stylesheets (index.css, style.css, recipes.css, etc.)
- `js/` - JavaScript files (script.js for muffin details functionality)
- `images/` - Image assets

## Features
- Responsive navigation bar that stays fixed at the top
- Interactive buttons with hover and active states
- Muffin detail pages with dynamic pricing based on size and quantity
- Shopping cart functionality using sessionStorage
- CSS-based animations and transitions

## Browser Compatibility
This website is designed to work with modern browsers that support:
- HTML5
- CSS3 (including Flexbox, Grid, and custom properties)
- JavaScript ES6+
- sessionStorage API