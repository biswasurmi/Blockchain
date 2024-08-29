import React from 'react';
import './AddProductTo_Inspection_I.css';
import { Link } from 'react-router-dom';

const AddProductTo_Inspection_I = () => {
    return (
        <div className="add-inspect">
            <div className="add-inspect-container"></div>
            <div className="form-page">
                <form>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">Product Image</label>
                        <input
                            type="file"
                            id="productImage"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Product Description</label>
                        <textarea
                            id="productDescription"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categories">Categories</label>
                        <input
                            type="text"
                            id="categories"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input
                            type="number"
                            id="quantity"
                            required
                        />
                    </div>
                    <Link to="/addproductforinspection_I">
                        <button type="submit" className="submit-button">Submit</button>
                    </Link>

                </form>
            </div>
        </div>


    );
};

export default AddProductTo_Inspection_I;