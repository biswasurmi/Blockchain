import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { addToDB } from '../../utilities/localDB';
import Swal from 'sweetalert2';
import { FaStar, FaHeart } from "react-icons/fa";
import img28 from '../../images/spices/Basmati Rice.jpg';
import img13 from '../../images/spices/potato.jpg';
import img15 from '../../images/spices/Cauliflower.jpg';
import img18 from '../../images/spices/Garlic.jpg';
import ProdData from '../data/ProdData'



const TopProducts = ({ handleOrderPopup }) => {
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
      `You Have Added ${product.title}!`,
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


  return (
    <div>
      <div className=" bg-primary/40 ">
        {/* Header section */}
        <div className="text-left mb-16 underline ">
          <p  className="text-sm text-primary">

          </p>
          <h1 className="text-3xl font-bold">
            Direct from Farmers: Fresh and Authentic
          </h1>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 place-items-center">
          {ProdData.slice(7, 11).map((product) => (
            <div
              key={product.id}
              
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group w-full max-w-[450px]"
            >
              {/* Image section */}
              <div className="h-[200px] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[260px] w-[300px] object-contain max-w-[440px] block mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* Details section */}
              <div className="p-4 text-center">
                <h1 className="text-xl font-bold">{product.name}</h1>

                <div className="flex gap-1 justify-center mt-2 ">
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate(`/product/${product.id}`);
                    }}
                    className=" bg-green-700 fs-5 text-white border-2 border-black  py-0 px-1 hover:bg-custom_gradient hover:text-white duration-300 rounded-full "
                  >
                    Details
                  </button>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-custom_gradient  border-2 px-8 border-black hover:scale-105 duration-300 text-white text-bold  rounded-full group-hover:bg-white group-hover:text-primary "
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
        </div>




        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate('/Farmer')}
            className=" mt-0 bg-white hover:scale-105 duration-300 text-black px-6 py-2 border-2 border-black rounded-full hover:bg-custom_gradient hover:text-white"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;