import React from 'react';
import './Product_Inspection_I.css';
import { Link } from 'react-router-dom';

const Product_Inspection = () => {
    return (
        <div className='product-inspection-page'>

            <div className="inspected-product">
                <h3>Inspected Product</h3>
                <ul className="product-list">
                    <li>
                        <span>Pineapple</span>
                        <Link to="/inspectedproductdetails_I">
                            <button>Show certificate</button>
                        </Link>
                    </li>
                    <li>
                        <span>Capsicum</span>
                        <Link to="/pendingpage">
                            <button>Pending</button>
                        </Link>
                    </li>
                    <li>
                        <span>Tomato</span>
                        <Link to="/pendingpage">
                            <button>Pending</button>
                        </Link>
                    </li>
                    <li>
                        <span>Carrot</span>
                        <Link to="/inspectedproductdetails2_I">
                            <button>Show Certificate</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Product_Inspection;