import Header from './components/Header';
import HomePage from './pages/Home';
import CategoriesPage from './pages/Categories';
import { Route, Routes } from 'react-router-dom';
import GamePage from './pages/GamePage';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path='/categories/:category' element={<CategoriesPage />} />
					<Route path='/game/:id' element={<GamePage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
