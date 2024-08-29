import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight, FaHeart } from 'react-icons/fa';
import img7 from '../../images/hero/veg.jpg';
import ProdData from '../data/ProdData';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
        >
            <FaAngleLeft />
        </button>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 z-10"
        >
            <FaAngleRight />
        </button>
    );
};

const Products = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDB(product.id);
        Swal.fire(
            'Successful!',
            `You Have Added ${product.name}!`,
            'success'
        );
    };

    const toggleWishlist = (product) => {
        let newWishlist;
        if (wishlist.includes(product.id)) {
            newWishlist = wishlist.filter((id) => id !== product.id);
        } else {
            newWishlist = [...wishlist, product.id];
        }
        setWishlist(newWishlist);
    };

    const isWishlisted = (product) => wishlist.includes(product.id);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold underline decoration-slice">
                    Retailer Picks: Quality and Convenience
                </h1>
                <div className="flex mt-4">
                    <div className="w-1/3 pr-4">
                        <img
                            src={img7}
                            alt="Spice Cover"
                            className="w-full h-80 object-cover rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105"
                        />
                    </div>
                    <div className="w-2/3">
                        <Slider {...settings}>
                            {ProdData.slice(11,20).map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden p-2"
                                >
                                    <Link
                                        to={`/product/${product.id}`}
                                        onClick={() => window.scrollTo(0, 0)}
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
                                        <span className='flex gap-3'>
                                            <p className="text-gray-800 rounded">Price: ৳{product.price}</p>
                                            <p className="text-gray-800">Weight: {product.weight}</p>
                                        </span>
                                        <div className="flex gap-1 mt-2">
                                            
                                            <button
                                                onClick={() => addToCart(product)}
                                                className="bg-green-500 hover:scale-105 duration-300 text-black py-1 px-2 rounded-full mt-4 group-hover:bg-white group-hover:text-primary border-2 border-black"
                                            >
                                                Add to Cart
                                            </button>
                                            <button
                                                onClick={() => toggleWishlist(product)}
                                                className={`text-${isWishlisted(product) ? 'red-500' : 'gray-400'} hover:text-red-500 duration-300 text-xl py-1 px-4 rounded-full mt-4`}
                                            >
                                                <FaHeart />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className="mt-4 text-center">
                            <button
                                onClick={() => navigate('/Retailor')}
                                className="bg-green-500 hover:scale-105 duration-300 text-black py-3 px-4 border-2 border-black rounded-full mt-4 hover:bg-custom_gradient group-hover:text-white ml-[-60px]"
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
