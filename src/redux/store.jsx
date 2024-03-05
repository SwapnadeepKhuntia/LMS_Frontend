import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./slices/authslice";
import courseSliceReducer from "./slices/courseslice";
import razorpaySliceReducer from "./slices/RazorpaySlice"
import lectureSliceReducer from "./slices/lectureslice";
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:lectureSliceReducer
    },
    devTools: true
})

export default store;