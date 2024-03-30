import { useState } from 'react'
import Create from './components/Create';
import Login from './components/Login';
import Profile from './components/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ResetPassword from './components/ResetPassword';
<<<<<<< HEAD
import Home from './dashboard/Home';
=======
import FramePage from './pages/Frame';
>>>>>>> 17a1a6134571117e7619d49d0bd6ef4475dded3b

function App() {
    const [redirectToProfile, setRedirectToProfile] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/auth/create' element={<Create/>}></Route>
                <Route path='/auth/login' element={<Login/>}></Route>
                <Route path='/profile' index element={<Profile/>}></Route>
                <Route path='/auth/reset-password' index element={<ResetPassword/>}></Route>
<<<<<<< HEAD
                <Route path='/dashboard' index element={<Home/>}></Route>
=======
                <Route path='/dashboard' index element={<FramePage/>}></Route>
>>>>>>> 17a1a6134571117e7619d49d0bd6ef4475dded3b
                <Route path='/*' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App