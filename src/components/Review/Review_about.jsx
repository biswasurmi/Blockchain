import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import img1 from '../../images/Review/review.jpg'
import img2 from '../../images/Review/green.jpg'


const Review_about = () => {
  return (
    <div className="relative flex bg-white">
      {/* Image Section */}
      <div className="w-2/3 p-0 ml-0">
        <img
          src={img1}
          alt="Descriptive Alt Text"
          
        />
      </div>
      
      {/* Text Section */}
      

      {/* Box with Links */}
      <div className="w-1/2 h-[450px] p-8 mt-8">
        <div className="grid grid-cols-2  justify-center items-center mt-14">
          <Link to="/Rev" className="text-black text-center bg-custom_gradient border-2 border-bg-white rounded-md text-2xl font-semibold px-6 py-8 tracking-wider hover:bg-white hover:text-white hover:border-white transition-all duration-300">
            Review
          </Link>
          <Link to="/about-us" className="text-white text-center bg-white border-2 border-black rounded-md text-2xl font-semibold px-6 py-4 tracking-wider hover:bg-white hover:text-white hover:border-white transition-all duration-300">
            About Us
          </Link>
          <Link to="/health" className="text-white text-center bg-white border-2 border-black rounded-md text-2xl font-semibold px-6 py-4 tracking-wider hover:bg-white hover:text-white hover:border-white transition-all duration-300">
            Health
          </Link>
          <Link to="/spice" className="text-black text-center bg-custom_gradient border-2 border-bg-white rounded-md text-2xl font-semibold px-6 py-8 tracking-wider hover:bg-white hover:text-white hover:border-white transition-all duration-300">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Review_about;
