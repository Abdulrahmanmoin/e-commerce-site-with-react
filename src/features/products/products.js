import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const api = axios.create({ baseURL: "https://fakestoreapi.com" })

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (limit, { rejectWithValue }) => {

    try {
        const options = { method: 'GET', url: `/products?limit=${limit}` };

        const res = await api.request(options)
        const data = res.data;
        return data;
    }
    catch (error) {
        console.log(error.message);
        return rejectWithValue(error)
    }
})

const initialState = {
    products: [],
    loading: false,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        })
    }
})


export default productsSlice.reducer;