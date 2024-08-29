import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

import FarmersProd from '../data/FarmersProd';
import ProdData from '../data/ProdData';
import Retail from '../data/Retail'; // Import the utility function


const WishList = () => {
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(id => id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const wishlistProducts = getProducts(wishlist);
    const getProducts = (wishlist) => {
        const allProducts = [...FarmersProd, ...ProdData, ...Retail];
        return allProducts.filter(product => wishlist.includes(product.id));
    };

    return (
        <section className="bg-gray-100 py-6">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold underline mb-6 text-green-800">Your Wishlist</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistProducts.length === 0 ? (
                        <p className="text-lg font-semibold text-center col-span-full">Your wishlist is empty.</p>
                    ) : (
                        wishlistProducts.map(product => (
                            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h5 className="text-lg font-semibold">{product.name}</h5>
                                    <p className="text-lg font-bold mb-4">Price: {product.price} Taka</p>
                                    <div className="flex justify-between items-center">
                                        <Link to={`/product/${product.id}`} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700">
                                            Details
                                        </Link>
                                        <button
                                            onClick={() => handleRemoveFromWishlist(product.id)}
                                            className="text-red-500 hover:text-red-700 text-xl"
                                        >
                                            <FaHeart />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default WishList;
