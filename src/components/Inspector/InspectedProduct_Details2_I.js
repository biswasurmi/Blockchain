import React from 'react';
import './InspectedProduct_Details2_I.css';
import inspection from '../Farmer/images/inspection.png';
import carrot from '../Farmer/images/carrot.jpg';

const InspectedProduct_Details2_I = () => {
    return (
        <div className='inspection-page'>
            <div className="product-details">
                <div className="product-image">
                    <img src={carrot} alt="Carrot" />
                </div>
                <div className="product-info">
                    <h1>Carrot (গাজর)</h1>
                    <div className="product-meta">
                        <p><strong>Categories:</strong> Vegetable</p>
                        <p><strong>Quantity:</strong> 5000 pc</p>
                    </div>
                </div>
            </div>
            <div className="footer-logo">
                <img src={inspection} alt="Inspection Team Logo" className="inspection-logo" />
                <p>Certified by Inspection Team</p>
                <p>Expiry Date: June 25</p>
                <p>Rating: 4/5</p>
            </div>
        </div>
    );
};

export default InspectedProduct_Details2_I;