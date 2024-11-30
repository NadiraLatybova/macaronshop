import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронный thunk для получения данных
export const Logos = createAsyncThunk(
    'logos/fetchLogos',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get('http://localhost:8080/logo');
            if (res.status !== 200) {
                throw new Error('Ошибка при загрузке данных');
            }
            return res.data; // Возвращаем массив данных
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);

// Slice для управления состоянием логотипов
const logoSlice = createSlice({
    name: 'logos',
    initialState: {
        data: [],
        loading: false,
        error: null,
        filter:{
            filteredCategory: 'Тема',

        }
    },
    reducers: {
        setCategory: (state, action) => {
            state.filteredCategory = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(Logos.pending, (state) => {
                state.loading = true;
                state.error = null; // Сбрасываем ошибки
            })
            .addCase(Logos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Сохраняем полученные данные
            })
            .addCase(Logos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Сохраняем сообщение об ошибке
            });
    }
});

export const {setCategory} = logoSlice.actions;
export default logoSlice.reducer;
