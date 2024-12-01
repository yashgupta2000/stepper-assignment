import { createSlice } from "@reduxjs/toolkit";

const choosePlanSlice = createSlice({
    name: 'selectPlan',
    initialState: {
        plan: null,
        billing: null
    },
    reducers: {
        choosePlan: (state, action) => {
            //mutating state here
            state.plan = action.payload;
        },
        billing: (state, action) => {
            state.billing = action.payload;
        }
    }
})
export const {choosePlan,billing} = choosePlanSlice.actions;
export default choosePlanSlice.reducer;