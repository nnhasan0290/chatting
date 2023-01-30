import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./features/authslice";
import modalSlice from "./features/modalSlice";
import { authApi } from "./services/authServices";
import { chatApi } from "./services/chatServices";
const store = configureStore({
  reducer: {
    modal: modalSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, chatApi.middleware]),
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
