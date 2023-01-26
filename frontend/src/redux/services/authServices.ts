// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://3001-nazmul02904-chatting-pnnm3iou22v.ws-us84.gitpod.io/api/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `home`,
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: `auth/signup`,
        method: `POST`,
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `auth/login`,
        method: `POST`,
        body,
      }),
    }),
    loadUser: builder.query({
      query: () => ({
        url: `auth/load`,
        credentials: "include",
      }),
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetUsersQuery,
  useAddUserMutation,
  useLoginUserMutation,
  useLoadUserQuery,
} = authApi;
