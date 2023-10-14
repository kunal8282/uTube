import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name : 'app',
    initialState : {
        toggleSideMenu : true,
        hiddenSideMenu : false,
    }, 
    reducers : {
        toggleMenu : (state) => {
            state.toggleSideMenu = !state.toggleSideMenu
        },
        hideMenu : (state) => {
            state.toggleSideMenu = false
        }
    }
})

export const {toggleMenu, hideMenu} = appSlice.actions
export default appSlice.reducer