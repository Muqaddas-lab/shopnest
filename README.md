# shopnest
# 📦 ShopNest – Modern eCommerce App

**ShopNest** is a modern, responsive eCommerce web application built with **React**, **Next.js**, **Redux Toolkit**, and **Material UI (MUI)**. It allows users to browse products, view details, add items to a shopping cart, and calculate totals — all with a clean and intuitive UI.

---

## 🚀 Tech Stack

| Technology     | Purpose                         |
|----------------|---------------------------------|
| **Next.js**    | Server-side rendering and routing |
| **React**      | UI component-based architecture |
| **Redux Toolkit** | State management (cart)        |
| **Material UI**| Modern pre-built UI components  |
| **FakeStoreAPI**| Dummy product data API          |

---

## 🧩 Features

- 🛍️ Browse Products (from FakeStore API)
- 🔍 View Detailed Product Info
- ➕ Add/Remove Quantity
- 🛒 Add to Cart with Quantity Handling
- 💰 Real-time Total Price Calculation
- 🎨 Material UI-based Professional Design

---

## 📁 Folder Structure

```
ShopNest/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   └── ProductDetailPage.jsx
├── pages/
│   ├── _app.js
│   ├── index.js
│   ├── cart.js
│   └── product/
│       └── [id].jsx
├── redux/
│   └── slices/
│       └── cartSlice.js
├── store.js
├── styles/
│   └── globals.css
└── README.md
```
## 📌 Important Files

| File                       | Purpose                           |
|----------------------------|------------------------------------|
| `Header.jsx`               | Top AppBar with brand and cart     |
| `ProductList.jsx`          | Grid view of all products          |
| `ProductDetailPage.jsx`    | View and add product with quantity |
| `ShoppingCart.jsx`         | View cart items and total price    |
| `cartSlice.js`             | Redux logic for managing cart      |
| `store.js`                 | Global Redux store configuration   |
| `_app.js`                  | App-level Redux provider wrapper   |

---

## 📦 API Used

- [Fake Store API](https://fakestoreapi.com/)
  - `https://fakestoreapi.com/products` - all products
  - `https://fakestoreapi.com/products/:id` - product by ID

---

## 🌈 UI Preview

| Page           | Description                        |
|----------------|------------------------------------|
| **Home**       | Product grid from API              |
| **Product Detail** | Image, description, quantity selector |
| **Cart**       | Cart items, quantity, and total    |

---

## ✅ To-Do Features (Optional Enhancements)

- [ ] User Authentication
- [ ] Payment Gateway Integration
- [ ] Product Filters & Categories
- [ ] Wishlist Page
- [ ] Responsive Footer
- [ ] Pagination

---
