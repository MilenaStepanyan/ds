import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import theme from "./slices/theme";
const store = configureStore({
    reducer: {
        user: userSlice,
        theme: theme,
    }

})
