import { createSlice } from "@reduxjs/toolkit";

const currentPage = localStorage.getItem('currentPage') ? localStorage.getItem('currentPage') : '';

const initialState = {
    currentPage,
}

export const navigationSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            localStorage.setItem('currentPage', action.payload);
            state.currentPage = action.payload;
        }
    }
});

export const {setPage} = navigationSlice.actions;

export const selectpage = (state) => state.page;

export default navigationSlice.reducer;