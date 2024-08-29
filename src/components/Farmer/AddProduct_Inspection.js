import React from 'react';
import './AddProduct_Inspection.css';
import { Link } from 'react-router-dom';

const AddProduct_Inspection = () => {
    return (
        <div className='addproduct-inspection-page'>
            <div className="button-container">
                <Link to="/addproducttoinspection">
                    <button className="add-product-button">Add Product</button>
                </Link>
            </div>
            <div className="inspected-product">
                <h3>Inspected Product</h3>
                <ul className="product-list">
                    <li>
                        <span>Pineapple</span>
                        <Link to="/inspectedproductdetails">
                            <button>Show certificate</button>
                        </Link>
                    </li>
                    <li>
                        <span>Capsicum</span>
                        <button>Pending</button>
                    </li>
                    <li>
                        <span>Tomato</span>
                        <button>Pending</button>
                    </li>
                    <li>
                        <span>Carrot</span>
                        <button>Show Certificate</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AddProduct_Inspection;