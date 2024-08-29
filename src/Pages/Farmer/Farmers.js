import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LogoSearchBar from '../../components/LogoSearchBar/LogoSearchBar';
import FarmerOption from '../../components/Farmer/FarmerOption';
const Farmers = () => {
    return (
        <div>
            <Navbar />
            <LogoSearchBar />
            <FarmerOption />
            
        </div>
    );
};

export default Farmers;
