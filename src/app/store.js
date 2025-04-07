import { configureStore } from "@reduxjs/toolkit";
import reducer from "../features/transactions/transactionsSlice";

// TODO: Configure the store to use the reducer from the transactions slice.
const store = configureStore({
  reducer: reducer
});

export default store;
