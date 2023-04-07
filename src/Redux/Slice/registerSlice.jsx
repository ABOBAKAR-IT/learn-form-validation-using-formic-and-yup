import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   person:{
    full_name:"tayyab",
    user_name:"",
    phone_no:"",
    email:"",
    cnic:"",
    type:"",
    password:""
   }
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        setFullName: (state, action) => {
            state.person.full_name = action.payload;
        },
        setUserName: (state, action) => {
            state.person.user_name = action.payload;
        },
        setPhoneNo: (state, action) => {
            state.person.phone_no = action.payload;
        },
        setEmail: (state, action) => {
            state.person.email = action.payload;
        },
        setCnic: (state, action) => {
            state.person.cnic = action.payload;
        },
        setType: (state, action) => {
            state.person.type = action.payload;
        },
        setPassword: (state, action) => {
            state.person.password = action.payload;
        },
        setData:(state,action)=>{
         
   state.person=action.payload
        }
    
        }}
        )

export const { setFullName, setUserName, setPhoneNo, setEmail, setCnic, setType, setPassword,setData } = registerSlice.actions;
export default registerSlice.reducer;