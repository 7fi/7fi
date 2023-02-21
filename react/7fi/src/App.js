import Project from './components/Project'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
