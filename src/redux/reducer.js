import { createReducer } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { changeFilter } from './actions';

export const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631ae2aedc236c0b1ee694a0.mockapi.io/',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: [`Contact`],
    }),

    addContact: builder.mutation({
      query: values => ({
        url: `/contacts`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: [`Contact`],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
