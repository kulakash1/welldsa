import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5050/' });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (newUser) => ({
        url: 'userapi/signup',
        method: 'POST',
        body: newUser,
      }),
    }),
    verifyPassword: builder.mutation({
      query: (credentials) => ({
        url: 'userapi/verify-password',
        method: 'POST',
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: 'userapi/reset-password',
        method: 'POST',
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: 'userapi/update-password',
        method: 'POST',
        body: data,
      }),
    }),
    updateUserDetails: builder.mutation({
      query: (data) => ({
        url: 'userapi/update-details',
        method: 'POST',
        body: data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => 'userapi',
    }),
  }),
});

export const {
  useCreateUserMutation,
  useVerifyPasswordMutation,
  useResetPasswordMutation,
  useUpdatePasswordMutation,
  useUpdateUserDetailsMutation,
  useGetAllUsersQuery,
} = apiSlice;
