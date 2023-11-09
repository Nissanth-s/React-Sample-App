import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Countries from "./components/Countries"

function ModuleRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/countries" element={<Countries />} />
            </Routes>
        </BrowserRouter>
    );
}

export default ModuleRoutes;