import React from 'react';
import { Link } from 'react-router-dom';
import './Accountdetails.css';

const AccountDetails = () => {
    return (
        <div className="account-page">
            <div className="account-details-container">
                <form className="account-form">
                    <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile Number</label>
                        <input type="text" id="mobileNumber" className="form-control" placeholder="1537703400" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First name *</label>
                        <input type="text" id="firstName" className="form-control" placeholder="Urmi" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name *</label>
                        <input type="text" id="lastName" className="form-control" placeholder="Biswas" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="displayName">Display name *</label>
                        <input type="text" id="displayName" className="form-control" placeholder="854245583157" />
                        <small className="form-text text-muted">
                            This will be how your name will be displayed in the account section and in reviews
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address *</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="currentPassword">Current password (leave blank to leave unchanged)</label>
                        <input type="password" id="currentPassword" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newPassword">New password (leave blank to leave unchanged)</label>
                        <input type="password" id="newPassword" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm new password</label>
                        <input type="password" id="confirmPassword" className="form-control" />
                    </div>
                    <Link to="/farmer">
                        <button type="submit" className="button-accountdetails">Save changes</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default AccountDetails;
