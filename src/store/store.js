import {configureStore} from "@reduxjs/toolkit";
import { rememberReducer, rememberEnhancer } from 'redux-remember';
import favorites from './reducers/favorites'
import user from './reducers/user'
import carts from './reducers/carts'
import reviews from './reducers/reviews'
import products from './reducers/products'
import logos from './reducers/print'


const rememberedKeys = ['products','user','favorites','carts']

export const store = configureStore({
    reducer: rememberReducer({
        logos,
        products,
        favorites,
        carts,
        reviews,
        user
    }),
    enhancers: (getDefaultEnhancers) => getDefaultEnhancers().concat(
        rememberEnhancer(
            window.localStorage, // or window.sessionStorage, or your own custom storage driver
            rememberedKeys
        )
    )
})