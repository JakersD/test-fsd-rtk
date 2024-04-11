import { postApi } from '@entities/post';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  [postApi.reducerPath]: postApi.reducer,
});
