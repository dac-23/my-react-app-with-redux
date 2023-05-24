import { configureStore, createSlice } from "@reduxjs/toolkit";

// ACCOUNT SLICE
export const accountSlice = createSlice({
  name: "account",

  // GLOBAL DATA MEMBER
  initialState: {
    balance: 1000,
    holder: "cdac",
    acnumber: "MUM00001",
  },

  // GLOBAL MEMBER FUNCN :: ACTION IN REDUX
  reducers: {
    deposit: (state) => {
      state.balance += 100;
    },
    withdraw: (state) => {
      state.balance -= 10;
    },
  },
});

export let { deposit, withdraw } = accountSlice.actions;

// SETUP THE STORE :: STORE IS WITH ACCOUNT SLICE/INFORMATION
export default configureStore({
  reducer: {
    account: accountSlice.reducer,
  },
});
