import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from './types';

export const postApi = createApi({
  reducerPath: 'post',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], number>({
      query: () => `posts?_limit=30`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newPosts) => {
        currentCache.push(...newPosts);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getDetailedPost: builder.query<IPost, string>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetDetailedPostQuery } = postApi;
