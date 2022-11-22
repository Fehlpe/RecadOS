import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LogIn from '../pages/login/Login';
import SignIn from '../pages/sign/Sign';

const AppRoutes: React.FC = () => {
return (
<BrowserRouter>
    <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/sign' element={<SignIn />}></Route>
        <Route path='/' element={<LogIn />}></Route>
    </Routes>
</BrowserRouter>
);
}

export default AppRoutes;