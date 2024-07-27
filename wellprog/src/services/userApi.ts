import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/users' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    registerUser: builder.mutation<any, { username: string; email: string; password: string }>({
      query: (newUser) => ({
        url: '/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    getUsers: builder.query<any, void>({
      query: () => '/',
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation, useGetUsersQuery } = userApi;
