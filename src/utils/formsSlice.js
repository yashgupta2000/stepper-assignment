import { createSlice } from '@reduxjs/toolkit';

const formsSlice = createSlice({
    name: 'form',
    initialState: {
      formIndex: 1,
    },
    reducers: {
      setFormIndex: (state, action) => {
        state.formIndex = action.payload;
      },
    },
  });
  
  export const { setFormIndex } = formsSlice.actions;
  export default formsSlice.reducer;
  
