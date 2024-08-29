import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Add this import
import Farmers from './Pages/Farmer/Farmers';
import AccountDetails from './Pages/Farmer/AccountDetails';
import AddProductForInspection from './Pages/Farmer/AddProductForInspection';
import InspectedProductDetails from './Pages/Farmer/InspectedProductDetails';
import AddProductToInspection from './Pages/Farmer/AddProductToInspection';

import AuctionHistoryPage from './Pages/Farmer/AuctionHistoryPage';
import CreateAuction from './Pages/Farmer/CreateAuction';
import OngoingAuction from './Pages/Farmer/OngoingAuction';
import AuctionItemDetails from './Pages/Farmer/AuctionItemDetails';
import SaleHistorypage from './Pages/Farmer/SaleHistoryPage';
import CreateSale from './Pages/Farmer/CreateSale';
import ConnectWallet from './components/ConnectWallet/ConnectWallet';

// Ishraq
import Inspectors from './Pages/Inspector/Inspectors';
import AccountDetailsI from './Pages/Inspector/AccountDetailsI';
import ProductForInspectionI from './Pages/Inspector/ProductForInspectionI';
import InspectedProductDetailsI from './Pages/Inspector/InspectedProductDetailsI';
import InspectedProductDetails2I from './Pages/Inspector/InspectedProductDetails2I';
import AddProductToInspectionI from './Pages/Inspector/AddProductToInspectionI';
import Admin from './Pages/Admin/admin';
import Orders from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/Pages/Orders";
import Customers from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/Pages/Customers";
import Products1 from "D:/Blockchain/Blockchain_Olympiad/src/components/Admin/Pages/Products";

// Gourab
import Login from './components/LoginSignup/Login'
import Register from './components/LoginSignup/Register'
import Wholesaler from './Pages/Wholesaler/Wholesaler';
import Retailer from './Pages/Retailer/Retailer';
import Biditems from './components/Farmer/Biditems';
import BidProduct from './components/Farmer/BidProduct';
import Product_sell_history from './components/Farmer/Product_sell_history';
import Product_buy_history from './components/Farmer/Product_buy_history';

//Swapnill
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import RetailProd from './components/Product/RetailProd';
import Home from './Page/Home';
import WholeProd from './components/Product/WholeProd';
import TopProducts from './components/TopProducts/TopProducts';
import Vegetable from './components/Vegetable/Vegetable';
import WholeSale from './components/Farmers_prod/WholeSale'
import Cart from './components/Cart/Cart';
import Review from './components/Review/Review_about';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Farmer from './components/Farmers_prod/Farmer'
import Retailor from './components/Farmers_prod/Retailor'
import Feature from './components/Feature/Feature'
import Wishlist from './components/Wishlist/Wishlist'
import ProceedCheckOut from './components/ProceedCheckOut/ProceedCheckOut'
import OrderHistory from './components/OrderHistory/OrderHistory'
import AccountDetail from './components/AccountDetail/AccountDetail'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Review_about from './components/Review/Review_about';
import Rev from './components/Review/Rev';
import Pending_I from './components/Inspector/Pending_I';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/farmer" element={<Farmers />} />
            <Route path="/accountdetails" element={<AccountDetails />} />
            <Route path="/addproductforinspection" element={<AddProductForInspection/>}/>
            <Route path="/inspectedproductdetails" element={<InspectedProductDetails />} />
            <Route path="/addproducttoinspection" element={<AddProductToInspection/>} />
            <Route path = "/auctionhistorypage" element={<AuctionHistoryPage />} />
            <Route path = "/createauction" element={<CreateAuction />} />
            <Route path = "/ongoingauction" element={<OngoingAuction />} />
            <Route path = "/auctiondetails" element= {<AuctionItemDetails />} />
            <Route path = "/salehistorypage" element={<SaleHistorypage />} />
            <Route path = "/createsale" element={<CreateSale />} />
            <Route path="/connectwallet" element={<ConnectWallet />} />

            {/* Israq */}
            <Route path="/inspector" element={<Inspectors />} />

            <Route path="/accountdetails_I" element={<AccountDetailsI />} />
            <Route path="/productforinspection_I" element={<ProductForInspectionI />} />
            <Route path="/inspectedproductdetails_I" element={<InspectedProductDetailsI />} />
            <Route path="/inspectedproductdetails2_I" element={<InspectedProductDetails2I />} />
            <Route path="/addproducttoinspection_I" element={<AddProductToInspectionI />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products1" element={<Products1 />} />
            <Route path="/pendingpage" element={<Pending_I />} />

            {/* Gourab */}
            <Route path="/wholesaler" element={<Wholesaler />} />
            <Route path="/retailer" element={<Retailer />} />
            <Route path="/biditems" element={<Biditems />} />
            <Route path="/BidProduct/:id" element={<BidProduct />} />
            <Route path="/Product_sell_history" element={<Product_sell_history />} />
            <Route path="/Product_buy_history" element={<Product_buy_history />} />
            <Route path="/userlogin" element={<Login />} />
            <Route path="/userregister" element={<Register/>} />

            {/* Swapnill */}
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/Feature" element={<Feature />} />
            <Route path="/topproducts" element={<TopProducts />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/farmerproducts" element={<Farmer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/vegetable" element={<Vegetable />} />
            <Route path="/WholeSale" element={<WholeSale />} />
            <Route path="/WholeProd/:id" element={<WholeProd />} />
            <Route path="/Review" element={<Review_about />} />
            <Route path="/Rev" element={<Rev />} />
            <Route path="/Retailor" element={<Retailor />} />
            <Route path="/RetailProd/:id" element={<RetailProd />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/OrderHistory" element={<OrderHistory />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Footer" element={<Footer />} />
            <Route path="/ProceedCheckOut" element={<ProceedCheckOut />} />
            <Route path="/AccountDetail" element={<AccountDetail />} />

            
        </Routes>
    </BrowserRouter>
  );
}

export default App;