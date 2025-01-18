import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from './hooks';
import { axiosClient } from '@/lib/axiosClient';
import { RootState } from './store';

interface Game {
	id: number;
	title: string;
	thumbnail: string;
	short_description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
}

interface GameState {
	data: Game[];
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: GameState = {
	data: [],
	status: 'idle',
	error: null
};

const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAllGames.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(fetchAllGames.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data.push(...action.payload);
			})
			.addCase(fetchAllGames.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message ?? 'Unknown Error';
			});
	}
});

export default gamesSlice.reducer;

export const fetchAllGames = createAppAsyncThunk(
	'games/fetchAll',
	async () => {
		const response = await axiosClient.get<Game[]>('/games');
		console.log(response);
		return response.data;
	},
	{
		condition(arg, thunkApi) {
			const status = selectGameStatus(thunkApi.getState());
			if (status !== 'idle') {
				return false;
			}
		}
	}
);

export const selectAllGames = (state: RootState) => state.games.data;
export const selectGameStatus = (state: RootState) => state.games.status;
export const selectGameError = (state: RootState) => state.games.error;
