import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../products/products";

export const fetchCategories = createAsyncThunk('/categories/fetchCategories', async (args, { rejectWithValue }) => {
    try {
        const options = { method: "GET", url: "/products/categories" }

        const res = await api.request(options)
        const data = res.data
        return data
    } catch (error) {
        console.log(error.message);
        return rejectWithValue(error.message)
    }
})

export const fetchItemsByCategory = createAsyncThunk("/byCategory/fetchItemsByCategory", async (category, {rejectWithValue}) => {

    try {
        const options = { method: "GET", url: `/products/category/${category}` }

        const res = await api.request(options)
        const data = res.data
        return data
    } catch (error) {
        console.log(error.message);
        return rejectWithValue(error.message);
    }
})

const initialState = {
    categories: [],
    errorCategories: null,
    errorEachCategory: null,
    ItemsByCategory: [],
    loading: false
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.errorCategories = action.error.message;
        })
    
        builder.addCase(fetchItemsByCategory.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchItemsByCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.ItemsByCategory = action.payload;
        })
        builder.addCase(fetchItemsByCategory.rejected, (state, action) => {
            state.loading = false;
            state.errorEachCategory = action.payload;
        })
    }

})

export default categoriesSlice.reducer;