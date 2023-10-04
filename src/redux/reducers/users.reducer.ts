import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface UserState {
  users: {
    loading: boolean;
    usersList: any[];
  };
}

// Define the initial state using that type
const initialState: UserState = {
  users: {
    loading: false,
    usersList: [],
  },
};

export const usersSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    userListLoading: (state, action: PayloadAction<boolean>) => {
      state.users.loading = action.payload;
    },
    setUserList: (state, action: PayloadAction<any[]>) => {
      state.users.usersList = action.payload;
    },
  },
});

export const { userListLoading, setUserList } = usersSlice.actions;

export default usersSlice.reducer;
