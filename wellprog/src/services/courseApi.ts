import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/courses' }),
  endpoints: (builder) => ({
    getCourses: builder.query<any, void>({
      query: () => '/',
    }),
    addCourse: builder.mutation<any, { title: string; description: string }>({
      query: (course) => ({
        url: '/',
        method: 'POST',
        body: course,
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useAddCourseMutation } = courseApi;
