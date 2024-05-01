import { configureStore } from "@reduxjs/toolkit";
import SelectedDateReducer from "./DateSlice";

export default configureStore({
	reducer: {
            dateStore: SelectedDateReducer
      },
});

