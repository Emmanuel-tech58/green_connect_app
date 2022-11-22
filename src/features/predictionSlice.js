import { createSlice } from "@reduxjs/toolkit";

import {getPrediction} from "./predictionAction";

const initialState = {
    image: null,
    prediction: null,
    loading: false,
    error: null,
    success: false,
}

export const predictionSlice = createSlice({
    name: 'prediction',
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        }
    },
    extraReducers: {
        //Interacting with the machine learning backend
        [getPrediction.pending] : (state) => {
            state.loading = true;
            state.error = null;
        },
        [getPrediction.fulfilled] : (state) => {
           state.loading = false;
           state.success = true; 
        },
        [getPrediction.rejected] : (state, {payload}) => {
            state.loading = false;
            state.error = payload; 
        }
    }
});

export const {setImage} = predictionSlice.actions;

export const selectPredictionData = (state) => state.prediction;

export default  predictionSlice.reducer;