import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from './hooks';
import { axiosClient } from '@/lib/axiosClient';
import { RootState } from './store';

export interface Game {
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

export interface SingleGame {
	id: number;
	title: string;
	thumbnail: string;
	status: string;
	short_description: string;
	description: string;
	game_url: string;
	genre: string;
	platform: string;
	publisher: string;
	developer: string;
	release_date: string;
	freetogame_profile_url: string;
	minimum_system_requirements: {
		os: string;
		processor: string;
		memory: string;
		graphics: string;
		storage: string;
	};
	screenshots: [
		{
			id: number;
			image: string;
		}
	];
}

interface GameState {
	data: Game[];
	item: SingleGame | null;
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: string | null;
}

const initialState: GameState = {
	data: [],
	item: null,
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
				state.data = action.payload;
			})
			.addCase(fetchAllGames.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message ?? 'Unknown Error';
			})
			.addCase(fetchGamesFromCategory.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(fetchGamesFromCategory.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchGamesFromCategory.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message ?? 'Unknown Error';
			})
			.addCase(fetchSingleGame.pending, (state) => {
				state.status = 'pending';
			})
			.addCase(fetchSingleGame.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.item = action.payload;
			})
			.addCase(fetchSingleGame.rejected, (state, action) => {
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
		return response.data;
	}
	// {
	// 	condition(arg, thunkApi) {
	// 		const status = selectGameStatus(thunkApi.getState());
	// 		if (status !== 'idle') {
	// 			return false;
	// 		}
	// 	}
	// }
);

export const fetchGamesFromCategory = createAppAsyncThunk(
	'games/fetchCategory',
	async (category: string) => {
		const response = await axiosClient.get<Game[]>(`/games?category=${category}`);
		return response.data;
	}
);

export const fetchSingleGame = createAppAsyncThunk(
	'games/fetchSingle',
	async (gameId: number) => {
		const response = await axiosClient.get<SingleGame>(`/game?id=${gameId}`);
		return response.data;
	}
);

export const selectAllGames = (state: RootState) => state.games.data;
export const selectGameStatus = (state: RootState) => state.games.status;
export const selectGameError = (state: RootState) => state.games.error;
export const selectSingleGame = (state: RootState) => state.games.item;
