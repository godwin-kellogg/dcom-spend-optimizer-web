import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import usersReducer from "src/redux/reducers/users.reducer";
import authReducer from "src/redux/reducers/auth.reducer";

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
     users: usersReducer,
     auth : authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
