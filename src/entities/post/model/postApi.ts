import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from './types';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => `posts`,
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
