import { createSlice } from "@reduxjs/toolkit";

const trainerSlice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers:{
        setTrainerGloval: (state, action) => action.payload
    }
 })

 export const  { setTrainerGloval } = trainerSlice.actions

 export default trainerSlice.reducer