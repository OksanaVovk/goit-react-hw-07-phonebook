// import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { nanoid } from 'nanoid';
// import { add, remove, changeFilter } from './actions';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const items = createReducer([], {
//   [add]: (state, action) => [{ id: nanoid(), ...action.payload }, ...state],

//   [remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, action) => action.payload,
// });

// const contactsReducer = combineReducers({
//   items,
//   filter,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items'],
// };

// export const persistedContactsReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://631ae2aedc236c0b1ee694a0.mockapi.io/',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `contacts`,
    }),
  }),
});

export const { useFetchContactsQuery } = contactsApi;
