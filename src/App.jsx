import { Route, Routes } from 'react-router-dom';
import StartGame from './pages/StartGame';
import './App.css'
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';

function App(){
  return (
    <Routes>
      <Route path='/start' element={< StartGame />} />
      <Route path='/play' element={< PlayGame />} />
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App