import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Accountdetails_I from '../../components/Inspector/Accountdetails_I';

const AccountDetailsI = () => {
    return (
        <div>
            <Navbar />
            <Accountdetails_I /> {/* Make sure this matches the import */}
        </div>
    );
};

export default AccountDetailsI;