import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AuctionList from '../../components/Farmer/AuctionList';
import LogoSearchBar from '../../components/LogoSearchBar/LogoSearchBar';

const OngoingAuction = () => {
    return (
        <div>
            <Navbar />
            <AuctionList />
        </div>
    );
};

export default OngoingAuction;