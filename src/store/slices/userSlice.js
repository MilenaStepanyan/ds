import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user: null },
    reducers: {
        login(state) {
            state.user = "logedIn"
        },
        logout(state) {
            state.user = null
        }
    }
})
export default userSlice.reducer