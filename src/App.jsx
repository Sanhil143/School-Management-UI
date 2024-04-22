import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/auth/Login'
import AdminDashboard from './components/common/AdminDashboard'
import Dashboard from './components/common/Dashboard'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/adminDashboard' element={<AdminDashboard/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
