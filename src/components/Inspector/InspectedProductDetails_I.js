import React from 'react';
import './InspectedProductDetails_I.css';
import inspection from '../Farmer/images/inspection.png';
import anaros from '../Farmer/images/anaros.jpg';

const InspectedProduct_Details_I = () => {
    return (
        <div className='inspection-page'>
            <div className="product-details">
                <div className="product-image">
                    <img src={anaros} alt="Pineapple" />
                </div>
                <div className="product-info">
                    <h1>Pineapple (আনারস)</h1>
                    <div className="product-meta">
                        <p><strong>Categories:</strong> Fruits, Hilly Fruits</p>
                        <p><strong>Quantity:</strong> 1000 pc</p>
                    </div>
                </div>
            </div>
            <div className="footer-logo">
                <img src={inspection} alt="Inspection Team Logo" className="inspection-logo" />
                <p>Certified by Inspection Team</p>
                <p>Expiry Date: Nov 24</p>
                <p>Rating: 4.5/5</p>
            </div>
        </div>
    );
};

export default InspectedProduct_Details_I;