import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";


export const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={< Dashboard/>} />
            <Route path="/pagina-inicial" element={"Oi"} />

            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>

    );
}

