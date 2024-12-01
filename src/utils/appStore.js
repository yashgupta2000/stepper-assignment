import { configureStore } from '@reduxjs/toolkit'
import choosePlanReducer from './choosePlanSlice'
import pickAddOnsSlice from './pickAddOnsSlice'


const appStore = configureStore({
reducer:{
    selectPlan: choosePlanReducer,
    addOns: pickAddOnsSlice
}
});

export default appStore