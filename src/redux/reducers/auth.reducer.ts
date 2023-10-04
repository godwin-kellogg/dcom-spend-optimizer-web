import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface AuthState {
    auth : {
        email : string;
        username : string;
    };
};

const initialState:AuthState = {
    auth : {
        email : "",
        username : ""
    } 
};


export const authSlice = createSlice({
    name : "authUser",
    initialState : initialState,
    reducers : {
        authData : (state, action:PayloadAction<any>) =>{
            state.auth.email = action.payload.email;
            state.auth.username = action.payload.name
        }
    }
});


export const {authData}  = authSlice.actions ;
export default authSlice.reducer;
