


import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./createSlice/UserSlice";
import authReducer from "./createSlice/authSlice" 
import ProductSlice from "./createSlice/ProductSlice/ProductSlice";
import { getApiCall } from "../Services/ApiCall";
import { setupListeners } from "@reduxjs/toolkit/query";





const store = configureStore({

    reducer:{
        user:userSlice.reducer,
        auth:authReducer,
        product:ProductSlice, 
        [getApiCall.reducerPath] : getApiCall.reducer,
        

    },


    middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(getApiCall.middleware),

});
setupListeners(store.dispatch)

export default store;