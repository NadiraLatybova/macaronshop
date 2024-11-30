import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import {loginUser, registerUser} from "./user";


export  const  getProducts = createAsyncThunk(
    'get/getProducts',
    async (arg,{rejectWithValue})=>{
        try{
            console.log(arg)

            let api = arg === 'default' ? 'http://localhost:8080/products':`http://localhost:8080/products?_sort=price&_order=${arg}`
            const  res = await axios(api)

            if (res.status  !== 200){
                throw new Error ('Ощибка при получении продукта')
            }
            return res.data
        }catch (err) {
            return rejectWithValue(err.message)
        }
    }

)

const products =createSlice({
    name:'products',
    initialState:{
        data:[],
        status:'idle',
        error:null,
        filter: {
            page: 2,
            filterPrice:'default',
            filteredCategory: 'All',
            filteredProducts: [],
        }
    },
    reducers:{
        changePage : (state,action)=>{
            state.filter.page = action.payload
        },
        changeFilterPrice:(state,action)=>{
            state.filter.filterPrice = action.payload
        },
        getVisibleProducts: (state) => {
            const startIndex = (state.filter.page - 1) * state.filter.itemsPerPage;
            const endIndex = startIndex + state.filter.itemsPerPage;
            return state.data.slice(startIndex, endIndex); // Возвращает массив продуктов
        },
        setCategory: (state, action) => {
            state.filteredCategory = action.payload;
            state.filteredProducts =
                action.payload === 'All'
                    ? state.data
                    : state.data.filter(product => product.category === action.payload);
        },






    },
    extraReducers:(builder)=>{
        builder
            .addCase(getProducts.pending,(state,action)=>{
                state.status = 'loading'
                state.error = null
            })
            .addCase(getProducts.rejected,(state,action)=>{
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.status = 'success'
                state.data = action.payload
            })
    }
})
export default products.reducer
export const  {setCategory,getVisibleProducts,changePage,changeFilterPrice}= products.actions