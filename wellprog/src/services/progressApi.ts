import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const progressApi = createApi({
  reducerPath: 'progressApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProgress: builder.query<any, string>({
      query: (userId) => `progress/${userId}`,
    }),
    updateProgress: builder.mutation<any, { courseId: string; status: string }>({
      query: ({ courseId, status }) => ({
        url: `progress/${courseId}`,
        method: 'PUT',
        body: { status },
      }),
    }),
  }),
});

export const { useGetProgressQuery, useUpdateProgressMutation } = progressApi;
