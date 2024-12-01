import { configureStore } from '@reduxjs/toolkit'
import choosePlanReducer from './choosePlanSlice'


const appStore = configureStore({
reducer:{
    selectPlan: choosePlanReducer,
}
});

export default appStore