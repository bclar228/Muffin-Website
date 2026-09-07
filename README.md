# Muffin-Website
This folder includes HTML, css and JavaScript code for a website about muffins.

## Local Development
To view the website locally:
1. Ensure Python 3 is installed
2. Run: `python -m http.server 8000`
3. Open browser to: http://localhost:8000/index.html

## Shopping Cart Behavior
The shopping cart uses `sessionStorage` for persistence (cleared when browser session ends):
- **Empty State**: Displays empty cart message and "Return to Shop" button when no items
- **Item Display**: Shows muffin name, image, price, quantity, subtotal and remove button
- **Removal**: Clicking remove button deletes item, updates storage and refreshes display
- **Persistence**: Cart contents saved as JSON string in sessionStorage under key "shoppingCart"