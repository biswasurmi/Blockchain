import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/Pages/Customers";
import Dashboard from "../../Admin/Pages/Dashbaord";
import Products from "../../Admin/Pages/Products";
import Orders from "../../Admin/Pages/Orders";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/customers" element={<Customers />}></Route>
        </Routes>
    );
}
export default AppRoutes;