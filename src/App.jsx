import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectPortfolio from './pages/ProjectPortfolio'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<ProjectPortfolio /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
