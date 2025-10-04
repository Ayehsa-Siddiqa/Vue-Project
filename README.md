# 🍭 Goodiset Swedish Candy

A modern **Vue 3** project built with **TypeScript**, **Pinia**, **Vue Router**, and **Tailwind CSS** — showcasing a sweet collection of Swedish candies.  
This project features two main layouts (Default & Admin) and includes product listing and detail pages. Cart and other dynamic features will be added in future updates.

🌐 **Live Demo:** [https://goodiset-sweedish-candy.netlify.app/](https://goodiset-sweedish-candy.netlify.app/)

---

## 📖 Project Overview

**Goodiset Swedish Candy** is a responsive and scalable web project designed to demonstrate Vue 3’s Composition API, routing, and state management with Pinia.  
The app currently focuses on displaying candy products with detailed views and separates layout logic for user-facing and admin sections.

---

## 🧩 Tech Stack

- ⚡ **Vue 3** – Composition API  
- 🧠 **TypeScript** – Type-safe coding  
- 📦 **Pinia** – Centralized state management  
- 🧭 **Vue Router** – Navigation and route-based layouts  
- 🎨 **Tailwind CSS** – Modern, responsive styling  
- ☁️ **Netlify** – Hosting and deployment  

---

## 🧱 Project Structure

# 🗂️ Project Folder Structure

Goodies-Swedish-Candy/
│
├── public/                    # Public assets (images,icons served directly)
│
├── src/     
│   │
│   ├── components/            # Reusable UI components
│   │
│   ├── layouts/               # App layouts
│   │   ├── DefaultLayout.vue  # Public pages (Home, Shop, Product Detail)
│   │   └── AdminLayout.vue    # Admin dashboard layout
│   │
│   ├── pages/                 # Page components
│   │   ├── Home.vue
│   │   ├── Shop.vue
│   │   ├── ProductDetail.vue
│   │   ├── Dashboard.vue
│   │   └── PageNotFound.vue
│   │
│   ├── router/                # Vue Router setup
│   │   └── index.ts
|   |   └── routes.ts        
│   │
│   ├── store/                 # Pinia stores
│   │   └── productStore.ts
│   │
│   ├── types/                 # TypeScript interfaces and types
│   │
│   ├── utils/                 # Helper functions (future use)
│   │
│   ├── App.vue                # Root component
│   └── main.ts                # Application entry point
│   └── style.css              # Css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md




---

## ✨ Features

### 🏠 Default Layout
- Displays **Home**, **Shop**, and **Product Detail** pages  
- Uses **Pinia** for product state management  
- Uses **Vue Router** for navigation  
- Fully responsive with **Tailwind CSS**

### 🧑‍💼 Admin Layout (Setup Only)
- Created for **future admin panel features**
- No pages or logic yet — only layout structure defined  

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Ayehsa-Siddiqa/Goodies-Sweedish-Candy.git

# Navigate into the project directory
cd Goodies-Sweedish-Candy

# Install dependencies
npm install

# Run local development server
npm run dev

Then open http://localhost:5173
 in your browser.


 🧠 Future Improvements

🛒 Add to Cart functionality
🧾 Checkout and order pages
🔐 Admin panel development (using AdminLayout)
🌍 API integration for real-time product data



👩‍💻 Author
Ayesha Siddiqa
Frontend Developer | Vue.js & TypeScript Enthusiast

🌐 Live Demo: https://goodiset-sweedish-candy.netlify.app/
💻 GitHub: https://github.com/Ayehsa-Siddiqa
