import React from 'react';
import { Link } from 'react-router-dom';
import inspect from '../Farmer/images/inspect.jpg';

import account from '../Farmer/images/account.jpg';
import './InspectorOption_I.css';

export default function InspectorOption_I() {
    return (
        <div className='inspector-option'>
            <div className='container py-5'>
                <div className='d-flex flex-wrap flashsale-container'>
                    <div className='col-lg-3 col-md-4 col-sm-6 p-2 d-flex flex-column card-body'>
                        <img src={inspect} className='img-fluid' alt="Product Inspection" />
                        <Link to="/productforinspection_I" className='mt-auto'>
                            <button className='btn btn-primary w-100 mt-2'>Product For Inspection</button>
                        </Link>
                    </div>

                    <div className='col-lg-3 col-md-4 col-sm-6 p-2 d-flex flex-column card-body'>
                        <img src={account} className='img-fluid' alt="Account Details" />
                        <Link to="/accountdetails_I" className='mt-auto'>
                            <button className='btn btn-primary w-100 mt-2'>Account Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}