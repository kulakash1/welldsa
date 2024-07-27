import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/api';
import { courseApi } from './services/courseApi';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, courseApi.middleware, userApi.middleware),
});
