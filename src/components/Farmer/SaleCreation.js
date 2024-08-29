import React from 'react';
import './SaleCreation.css';
import {Link} from 'react-router-dom';
const SaleCreation = () => {
    return (
        <div className="sales-inspect">
            <div className="sales-inspect-container"></div>
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
                    <div className="form-group">
                        <label htmlFor="quality">Quality</label>
                        <input
                            type="number"
                            id="quality"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input
                            type="number"
                            id="price"
                            required
                        />
                    </div>
                    
                    <Link to = "/salehistorypage">
                        <button type="submit" className="submit-button">Submit</button>
                    </Link>
                    
                </form>
            </div>
        </div>
    );
};

export default SaleCreation;
