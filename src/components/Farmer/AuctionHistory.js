import React from 'react';
import './AuctionHistory.css';
import { FaTrash } from 'react-icons/fa';

const AuctionHistory = () => {
    return (
        <div className="auctionhistorypage">
            <div className='auction_history_page'>
                <div className="button-container">
                    <a href="/createauction">
                        <button className="aution-button">Create Auction</button>
                    </a>
                    <a href="/ongoingauction">
                        <button className="aution-button">Ongoing Auction</button>
                    </a>
                </div>
                <div className="auctioned-product">
                <h3>Auctioned Product</h3>
                <ul className="product-list">
                    <li>
                        <span>Pineapple</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                        
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Mango</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Apple</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Banana</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Carrot</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Cabbage</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Tomato</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
                <ul className="product-list">
                    <li>
                        <span>Spinach</span>
                        <span>Quantity: 100 kg</span>
                        <span>Rating: 4.5</span>
                        <span>Price: $200</span>
                        <span>Date: 2023-08-23</span>
                        <span>
                            <button className="delete-button-auction">
                                <FaTrash />
                            </button>
                        </span>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default AuctionHistory;
