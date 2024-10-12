import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { HomePage } from './pages/HomePage/HomePage'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalog' element={<CatalogPage/>}/>
      <Route path='/catalog/:id' element={<ProductPage/>}/>
    </Routes>
    </>
  )
}

export default App
