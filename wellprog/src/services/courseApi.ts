import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/courseapi/courses' }),
  endpoints: (builder) => ({
    getCourses: builder.query<any, void>({
      query: () => '/',
    }),
    addCourse: builder.mutation<any, { title: string; description: string }>({
      query: (course) => ({
        url: 'courseapi/',
        method: 'POST',
        body: course,
      }),
    }),
  }),
});

export const { useGetCoursesQuery, useAddCourseMutation } = courseApi;


// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const courseApi = createApi({
//   reducerPath: 'courseApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   endpoints: (builder) => ({
//     getCourses: builder.query<Course[], void>({
//       query: () => 'courses',
//     }),
//     getCourse: builder.query<Course, string>({
//       query: (id) => `courses/${id}`,
//     }),
//   }),
// });

// export const { useGetCoursesQuery, useGetCourseQuery } = courseApi;
