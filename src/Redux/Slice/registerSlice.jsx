import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    full_name:"",
    user_name:"",
    phone_no:"",
    email:"",
    cnic:"",
    type:"",
    password:""
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setFullName: (state, action) => {
            state.full_name = action.payload;
        },
        setUserName: (state, action) => {
            state.user_name = action.payload;
        },
        setPhoneNo: (state, action) => {
            state.phone_no = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setCnic: (state, action) => {
            state.cnic = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    
        }}
        )

export const { setFullName, setUserName, setPhoneNo, setEmail, setCnic, setType, setPassword } = registerSlice.actions;
export default registerSlice.reducer;