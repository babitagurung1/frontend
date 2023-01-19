
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
 
} from "react-router-dom";
import Register from './components/auth/register';
import Login from './components/auth/login';
import Forget from './components/auth/forgetpass';
import Header from './components/layout/header/header';
import About from './components/pages/about';
import Home from "./components/pages/home";
import Changepassword from './components/auth/changepassword';

function App() {
  return (
    <div className='div1'> 
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Header/><Home/></>} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetpass" element={<Forget/>} />
      <Route path="/header" element={<Header/>}  />
      <Route path="/about" element={<><Header/><About/></>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/changepassword' element={<Changepassword/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  
  );
}

export default App;
