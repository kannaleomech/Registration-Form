import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
export default function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>

    <Route path='/' element={<Register/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>);
}
