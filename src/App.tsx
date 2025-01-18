import Header from "./components/Header"
import HomePage from "./pages/Home"
import CategoriesPage from "./pages/Categories"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Header /> 
      <main>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </main>
    </>
 )
}

export default App
