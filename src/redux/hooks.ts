import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState;
	dispath: AppDispatch;
}>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
