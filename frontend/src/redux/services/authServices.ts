// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://3001-nazmul02904-chatting-9ksminftrei.ws-us84.gitpod.io/api/`,
  }),
  tagTypes: ["load"],
  endpoints: (builder) => ({
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
        credentials: "include",
        body,
      }),
      invalidatesTags: ["load"]
    }),
    loadUser: builder.query({
      query: () => ({
        url: `auth/load`,
        method: `GET`,
        credentials: "include",
      }),
      providesTags: ["load"]
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `auth/logout`,
        method: `GET`,
        credentials: "include",
      }),
      invalidatesTags: ["load"]
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useAddUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useLoadUserQuery,
} = authApi;
