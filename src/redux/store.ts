import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import gamesReducer from './gamesSlice';

export const store = configureStore({
	reducer: {
		games: gamesReducer
	}
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
