import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import ProdData from '../data/ProdData';
import '../../App.css';
import Navbar from '../Navbar/Navbar';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const removeFromWishlist = (product) => {
        const newWishlist = wishlist.filter((id) => id !== product.id);
        setWishlist(newWishlist);
    };

    const getProduct = (id) => ProdData.find((product) => product.id === id);

    return (
        <div>
            <Navbar/>
            <section className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold underline text-green-800 italic text-center mb-6">Wishlist</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {wishlist.length > 0 ? wishlist.map((id) => {
                        const product = getProduct(id);
                        return (
                            product ? (
                                <div
                                    key={product.id}
                                    className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-2"
                                >
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="block"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover transform transition-transform duration-200 hover:scale-105"
                                        />
                                    </Link>
                                    <div className="p-2">
                                        <h5 className="text-lg font-semibold">{product.name}</h5>
                                        <p className='text-lg font-bold mb-4'>Price: ৳ {product.price} Taka</p>
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={() => removeFromWishlist(product)}
                                                className="text-red-500 hover:text-red-600 duration-300 text-xl py-1 px-4 rounded-full"
                                            >
                                                <FaHeart />
                                            </button>
                                            <Link
                                                to={`/product/${product.id}`}
                                                className='bg-green-500 hover:bg-green-600 text-white border-2 border-green-500 py-1 px-4 rounded-full transition duration-300'
                                            >
                                                Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : null
                        );
                    }) : (
                        <p className="text-center text-lg font-semibold">Your wishlist is empty.</p>
                    )}
                </div>
            </div>
        </section>
        </div>
    );
};

export default Wishlist;
