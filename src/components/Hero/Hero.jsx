import React, { useState } from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import logo1 from '../../images/hero/logo1.jpg'; 
import { Link } from 'react-router-dom';
import img from '../../images/hero/cover6.png';
import ProdData from '../data/ProdData'; 

const Hero = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const results = ProdData.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className='relative w-full h-[90vh] bg-custom_bg bg-cover bg-no-repeat flex flex-col items-center justify-center'>
      
      {/* Image Above Logo and Search Bar */}
      <div className='w-full max-w-[600px]'>
        <img 
          className='w-[500px] h-[330px] object-cover mt-[-80px] ml-[50px]' 
          src={img} 
          alt="Decorative Image Above Logo and Search Bar" 
        />
      </div>

      {/* Logo */}
      <div className='flex items-center'>
        <a href="/" className='flex items-center ml-[10px]'>
          <img className='w-[120px] h-[150px]' src={logo1} alt="logo of BARAJ" />
        </a>

        {/* Search Bar */}
        <div className='relative'>
          <input 
            type="text" 
            value={searchQuery}
            onChange={handleSearch}
            className='bg-white p-1 border border-green-950 rounded ml-2 w-[500px] focus:outline-green-900 focus:border-green-600' 
            placeholder='Search ' 
          />
          <button className='absolute right-0 top-0 mt-0 mr-0 bg-green-600 text-white rounded p-2 cursor-pointer'>
            <FaSearch />
          </button>

          {/* Display Search Results */}
          {filteredProducts.length > 0 && (
            <ul className='absolute top-full left-0 w-full max-w-[500px] bg-white text-green-600 border border-gray-300 rounded shadow-lg z-10'>
              {filteredProducts.map(product => (
                <li key={product.id}>
                  <Link 
                    to={`/product/${product.id}`} 
                    className='block px-4 py-2 hover:bg-gray-100'
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* User Menu */}
        <div className='relative ml-2'>
          <button
            className='bg-white text-green-600 border border-green-600 rounded p-2 flex items-center cursor-pointer'
            onClick={toggleDropdown}
          >
            <FaUser />
          </button>
          {isDropdownOpen && (
            <ul className='absolute top-full right-0 mt-2 w-auto min-w-[200px] bg-white text-green-600 border border-gray-300 rounded shadow-lg z-10'>
              <li><Link className='block px-4 py-2 hover:bg-gray-100' to="/Dashboard">Dashboard</Link></li>
              <li><Link className='block px-4 py-2 hover:bg-gray-100' to="/OrderHistory">Order History</Link></li>
              <li><Link className='block px-4 py-2 hover:bg-gray-100' to="/Wishlist">Wishlist</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

