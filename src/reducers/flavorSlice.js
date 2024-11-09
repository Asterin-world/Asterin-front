import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flavor: 'mojito', // Default flavor
  theme: 'mojito-theme', // Default theme
};

const flavorSlice = createSlice({
  name: 'flavor',
  initialState,
  reducers: {
    toggleFlavor: (state) => {
      if (state.flavor === 'mojito') {
        state.flavor = 'classic';
        state.theme = 'classic-theme';
      } else {
        state.flavor = 'mojito';
        state.theme = 'mojito-theme';
      }
    },
  },
});

export const { toggleFlavor } = flavorSlice.actions;
export default flavorSlice.reducer;
