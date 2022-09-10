import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './reducer';
import { filter } from './reducer';

export const store = configureStore({
  reducer: {
    filter: filter,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
