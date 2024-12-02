import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
    name: 'details',
    initialState: {
        userDetails: {}
    }
    ,
    reducers: {
        formDetails: (state, action) => {
            // console.log("Payload received:", action.payload);
            state.userDetails = action.payload.userData;;
        }
    }
})
export const { formDetails } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;