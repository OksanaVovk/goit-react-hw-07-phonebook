import { createAction } from '@reduxjs/toolkit';

export const add = createAction('items/add');
export const remove = createAction('items/remove');
export const changeFilter = createAction('filter/changeFilter');
