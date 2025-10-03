import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "../types/products";

export const useProductStore = defineStore("productStore", () => {
    // state
    const products = ref<Product[]>([
        {
            id: 1,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/1.png",
            rating: 4.5,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie"
        },
        {
            id: 2,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/2.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie"
        },
        {
            id: 3,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/3.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie"
        }, {
            id: 4,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/4.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie"
        },

          {
            id: 5,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box"
        },  {
            id: 6,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box"
        },  {
            id: 7,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box"
        },  {
            id: 8,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box"
        },  {
            id: 9,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/src/assets/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box"
        },
    ]);

    // getters
    const saleProducts = computed(() => products.value.filter(p => p.isSale));
    const getProductById = (id: number) => products.value.find(p => p.id === id);
    const getProductByCat = (category: string) => products.value.filter(p => p.category === category);


    // actions (later replace with API call)
    const fetchProducts = async () => {
        // simulate API fetch
        // const res = await fetch("/api/products");
        // products.value = await res.json();
        console.log("Fetching products...");
    };

    return {
        products,
        saleProducts,
        getProductById,
        fetchProducts,
        getProductByCat
    };
});
