import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import photoCollectionReducer from './photoCollectionSlice';

export const store = configureStore({
  reducer: {
    photoCollettion: photoCollectionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
