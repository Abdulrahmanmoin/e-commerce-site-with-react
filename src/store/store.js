import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/products"
import categoriesSlice from "../features/categories/categories"

export const store = configureStore({
    reducer: {
        product: productsSlice,
        category: categoriesSlice
    }
})