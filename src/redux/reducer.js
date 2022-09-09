import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { add, remove, changeFilter } from './actions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const items = createReducer([], {
  [add]: (state, action) => [{ id: nanoid(), ...action.payload }, ...state],

  [remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
