import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LogoSearchBar from '../../components/LogoSearchBar/LogoSearchBar';
import Whole_sell from '../../components/Farmer/Whole_sell';

const Wholesaler = () => {
    return (
        <div>
           <Navbar/>
           <LogoSearchBar/> 
           <Whole_sell/>
        </div>
    );
};

export default Wholesaler;