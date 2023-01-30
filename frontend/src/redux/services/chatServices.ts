import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const chatApi = createApi({
  reducerPath: "chatApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://3001-nazmul02904-chatting-9ksminftrei.ws-us84.gitpod.io/api/chat",
  }),
  tagTypes: ["chat"],
  endpoints: (builder) => ({
    allUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
        credentials: "include",
      }),
    }),
    allChats: builder.query({
      query: () => ({
        url: "all",
        method: "GET",
        credentials: "include",
      }),

      providesTags: ["chat"],
    }),
    accessChat: builder.mutation({
      query: (body) => ({
        url: "access",
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["chat"],
    }),
    deleteChat: builder.mutation({
      query: (body) => ({
        url: "del",
        method: "DELETE",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["chat"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAllUsersQuery,
  useAllChatsQuery,
  useAccessChatMutation,
  useDeleteChatMutation,
} = chatApi;
