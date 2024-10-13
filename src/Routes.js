import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Admin from "./Pages/Admin"
import Login from "./Components/Login"

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/admin" element={<Admin />} /> 
                <Route path='/login' element={<Login/>} />
            </Routes>
        </Router>
    )
}

export default Routers;