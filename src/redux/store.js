import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './reducer';
// import { persistedContactsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    // contacts: persistedContactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// export const persistor = persistStore(store);
