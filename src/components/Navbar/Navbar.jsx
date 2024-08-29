import React from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom'; 
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Logo from '../../images/hero/logo1.jpg';

const Navbar = () => {
    const navigate = useNavigate(); 
    const location = useLocation();

    // Check if the current path is home
    const isHomePage = location.pathname === '/';

    const handleLogout = () => {
        // Add your logout logic here
        navigate('/');
    };

    return (
        <div>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
                <div className="bg-white py-2">
                    <div className="container flex justify-between items-center">
                        <div>
                            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <img src={Logo} alt="Logo" className="w-14" />
                                <h1 className='text-xl italic text-green-800'>Harvest <br /> Hope</h1>
                            </a>
                        </div>
                        <div>
                            <ul className="sm:flex hidden items-center gap-2">
                                <li>
                                    <a
                                        href="/#"
                                        className="hover:bg-custom_gradient hover:text-white inline-block px-4 hover:text-primary duration-200 text-bold"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/topproducts"
                                        className="hover:bg-custom_gradient hover:text-white inline-block px-4 hover:text-primary duration-200 text-bold"
                                    >
                                        Farmers' Product
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/retailor"
                                        className="hover:bg-custom_gradient hover:text-white inline-block px-4 hover:text-primary duration-200 text-bold"
                                    >
                                        Retailers' Product
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/wholeSale"
                                        className="hover:bg-custom_gradient hover:text-white inline-block px-4 hover:text-primary duration-200 text-bold"
                                    >
                                        Wholesalers' Product
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/Cart"
                                        className="hover:bg-custom_gradient hover:text-white inline-block px-4 hover:text-primary duration-200 text-bold"
                                    >
                                        Cart
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="relative flex items-center gap-2">
                            <button
                                onClick={() => navigate('/connectwallet')}
                                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-2 px-6 rounded-full flex items-center group fs-5"
                            >
                                Connect Wallet
                            </button>

                            {isHomePage ? (
                                <div className="group relative cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-0 px-3 rounded-full fs-5">
                                    <Link to="" className="flex items-center gap-[2px] py-2">
                                        Login/Signup
                                        <span>
                                            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                                        </span>
                                    </Link>
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                                        <ul>
                                            <li>
                                                <Link
                                                    to="/userlogin"
                                                    className="block px-0 py-2 text-gray-700 hover:bg-gray-100 rounded-md fs-6"
                                                >
                                                    Login
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/userregister"
                                                    className="block px-0 py-2 text-gray-700 hover:bg-gray-100 rounded-md fs-6"
                                                >
                                                    Signup
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={handleLogout}
                                    className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-6 rounded-full flex items-center gap-2 group fs-5"
                                >
                                    Logout
                                </button>
                            )}

                            <button
                                onClick={() => navigate('/Cart')}
                                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-6 rounded-full flex items-center gap-2 group fs-5"
                            >
                                Order
                                <FaCartShopping className="text-xl text-black drop-shadow-sm cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
