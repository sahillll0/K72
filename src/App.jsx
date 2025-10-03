
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Agence from './pages/Agence'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNav'


const App = () => {
   
  return (
  

    <div className='overflow-x-hidden' >
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/agence' element={<Agence />} /> 
      </Routes>
    </div>
  )
}

export default App