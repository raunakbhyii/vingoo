import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userSlice"
import ownerSlice from "./ownerSlice"
export const store=configureStore({
    reducer:{
        user:userslice,
        owner:ownerSlice
    }

})