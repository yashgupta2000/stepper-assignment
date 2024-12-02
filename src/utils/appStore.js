import { configureStore } from '@reduxjs/toolkit'
import choosePlanReducer from './choosePlanSlice'
import pickAddOnsSlice from './pickAddOnsSlice'
import userDetailsSlice from './userDestilsSlice'
import formSlice from './formsSlice'; 


const appStore = configureStore({
    reducer: {
        selectPlan: choosePlanReducer,
        addOns: pickAddOnsSlice,
        details: userDetailsSlice,
        form: formSlice
    }
});

export default appStore