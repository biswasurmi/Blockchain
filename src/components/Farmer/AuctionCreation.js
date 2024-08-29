import React from 'react';
import './AuctionCreation.css';
import {Link} from 'react-router-dom';
const AuctionCreation = () => {
    return (
        <div className="auction-inspect">
            <div className="auction-inspect-container"></div>
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
                    {/* New Time Field */}
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            id="time"
                            required
                        />
                    </div>
                    <Link to = "/ongoingauction">
                        <button type="submit" className="submit-button">Submit</button>
                    </Link>
                    
                </form>
            </div>
        </div>
    );
};

export default AuctionCreation;
