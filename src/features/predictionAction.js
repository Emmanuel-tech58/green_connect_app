import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPrediction = createAsyncThunk(
    '/prediction',
    async({image}, {getState, rejectWithValue}) => {
        try{
            const config = {
                Headers: {
                    'content-type': 'application/json'
                },
            }
            const data = await axios.post(
                            'http://localhost:5000/predict',
                            {image},
                            config
                        );
            console.log(data);
        }catch(error){
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
                } else {
                return rejectWithValue(error.message)
            }
        }
    }
)