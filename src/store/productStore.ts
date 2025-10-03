import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product } from "../types/products";

export const useProductStore = defineStore("productStore", () => {
    // states
    const products = ref<Product[]>([
        {
            id: 1,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/1.png",
            rating: 4.5,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie",
            slug: "multicolored-sour-keys1",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."
        },
        {
            id: 2,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/2.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie",
            slug: "multicolored-sour-keys2",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."

        },
        {
            id: 3,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/3.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie",
            slug: "multicolored-sour-keys3",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."

        }, {
            id: 4,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/4.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Candie",
            slug: "multicolored-sour-keys4",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."

        },

        {
            id: 5,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box",
            slug: "multicolored-sour-keys5",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."
        }, {
            id: 6,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box",
            slug: "multicolored-sour-keys6",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."

        }, {
            id: 7,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box",
            slug: "multicolored-sour-keys7",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."

        }, {
            id: 8,
            title: "Multicolored Sour Keys (Gluten-Free)",
            price: 95.0,
            oldPrice: 190.0,
            discount: 50,
            image: "/images/productsImages/gift.png",
            rating: 4.0,
            reviews: 3,
            isSale: true,
            isGlutenFree: true,
            attribute: "Sale",
            category: "Gift Box",
            slug: "multicolored-sour-keys8",
            description: "From Christmas to birthdays and beyond, we’ve got the perfect treats for every celebration."

        },
    ]);
    const selectedProduct = ref<Product | null>(null);

    // getters
    const saleProducts = computed(() => products.value.filter(p => p.isSale));
    const getProductById = (id: number) => products.value.find(p => p.id === id);
    const getProductByCat = (category: string) => products.value.filter(p => p.category === category);



    //filter products base on slug
    function selectProductBySlug(slug: string) {
        selectedProduct.value = products.value.find(p => p.slug === slug) || null;
    }



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
        getProductByCat,
        selectedProduct,
        selectProductBySlug,
    };
});
