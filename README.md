<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
=======
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
>>>>>>> 17ee1b870a4640f3ec767595ff84897e4ccf8b88
