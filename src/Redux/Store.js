import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./Slice/registerSlice";
const store = configureStore({
    reducer: {
       register:registerSlice 
}
});
export default store