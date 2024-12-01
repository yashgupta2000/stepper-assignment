import { createSlice } from "@reduxjs/toolkit";

const pickAddOnsSlice = createSlice({
    name: 'addOns',
    initialState: {
        addOns: []
    },
    reducers: {
        selectAddOns: (state, action)=>{
            state.addOns = action.payload;
        }
    }
})
export const { selectAddOns } = pickAddOnsSlice.actions
export default pickAddOnsSlice.reducer;