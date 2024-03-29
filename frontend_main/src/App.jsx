import { useState } from 'react'
import Create from './components/Create';
import Login from './components/Login';
import Profile from './components/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ResetPassword from './components/ResetPassword';

function App() {
    const [redirectToProfile, setRedirectToProfile] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/create' element={<Create/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/profile' index element={<Profile/>}></Route>
                <Route path='/reset-password' index element={<ResetPassword/>}></Route>
                <Route path='/*' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App