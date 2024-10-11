import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    isUserConnected: (state, action) => {
      state.value.isConnected = true;
      state.value.token = action.payload;
    },
  },
});

export const { isUserConnected } = usersSlice.actions;
export default usersSlice.reducer;
