import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Cadastrar from "./pages/Cadastrar.jsx";
import Regras from './pages/Regras.jsx';

function app(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/Cadastrar" element={<Cadastrar/>}/>
                <Route path="/Regras" element={<Regras/>}/>
            </Routes>
        </Router>
    );
}

export default app;