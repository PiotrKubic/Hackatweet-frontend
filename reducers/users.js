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
      state.value.token = action.payload.token;
      state.value.pseudo = action.payload.pseudo;
      state.value.username = action.payload.username
    },
  },
});

export const { isUserConnected } = usersSlice.actions;
export default usersSlice.reducer;
