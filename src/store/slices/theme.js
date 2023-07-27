import { createSlice } from "@reduxjs/toolkit";

const theme = createSlice({
    name: "theme",
    initialState: {theme:"light"},
    reducers: {
        toggleTheme(state){
            state.theme=state.theme==="dark"?"light" : "dark"
        }
    }
})
export default theme.reducer