import React from 'react';
import { Link } from 'react-router-dom';
import inspect from '../Farmer/images/inspect.jpg';
import bid from '../Farmer/images/bid.jpg';
import sale from '../Farmer/images/sale.jpg';
import account from '../Farmer/images/account.jpg';
import './FarmerOption.css';

export default function FarmerOption() {
    return (
        <div className='farmer-option'>
            <div className='container py-5'>
                <div className='d-flex flex-wrap flashsale-container'>
                    <div className='col-lg-3 col-md-4 col-sm-6 p-2 d-flex flex-column card-body'>
                        <img src={inspect} className='img-fluid' alt="Product Inspection" />
                        <Link to="/addproductforinspection" className='mt-auto'>
                            <button className='btn btn-primary w-100 mt-2'>Add Product For Inspection</button>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 p-2 d-flex flex-column card-body'>
                        <img src={bid} className='img-fluid' alt="Auction" />
                        <Link to="/auctionhistorypage" className='mt-auto'>
                            <button className='btn btn-primary w-100 mt-2'>Add Product For Auction</button>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 p-2 d-flex flex-column card-body'>
                        <img src={sale} className='img-fluid' alt="Sale" />
                        <Link to="/salehistorypage" className='mt-auto'>
                            <button className='btn btn-primary w-100 mt-2'>Add Product For Sale</button>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-6 p-2 d-flex flex-column card-body'>
                        <img src={account} className='img-fluid' alt="Account Details" />
                        <Link to="/accountdetails" className='mt-auto'>
                            <button className='btn btn-primary w-100 mt-2'>Account Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
