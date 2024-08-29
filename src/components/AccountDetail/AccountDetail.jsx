import React from 'react';
import img from '../../images/hero/Fa5.jpg'

const AccountDetail = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-no-repeat"style={{ backgroundImage: `url(${img})` }}>
            <div className="w-full max-w-md bg-white  bg-opacity-70 shadow-md rounded-lg p-6 border-2 border-color1 mt-2">
                <form className="space-y-6 border-spacing-0 ">
                    <div className="flex flex-col">
                        <label htmlFor="mobileNumber" className="font-bold italic text-gray-700">Mobile Number</label>
                        <input 
                            type="text" 
                            id="mobileNumber" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="1537703400" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="font-bold italic text-gray-700">First name *</label>
                        <input 
                            type="text" 
                            id="firstName" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Swapnil" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="font-bold italic text-gray-700">Last name *</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Chowdhury" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="displayName" className="font-bold italic text-gray-700">Display name *</label>
                        <input 
                            type="text" 
                            id="displayName" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="854245583157" 
                        />
                        <small className="mt-1 text-gray-500">
                            This will be how your name will be displayed in the account section and in reviews
                        </small>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold italic text-gray-700">Email address *</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="currentPassword" className="font-bold italic text-gray-700">Current password (leave blank to leave unchanged)</label>
                        <input 
                            type="password" 
                            id="currentPassword" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="newPassword" className="font-bold italic text-gray-700">New password (leave blank to leave unchanged)</label>
                        <input 
                            type="password" 
                            id="newPassword" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="font-bold italic text-gray-700">Confirm new password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            className="mt-2 px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className=" flex ml-[130px] w-100 bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary border-2 border-black justify-center"
                    >
                        Save changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AccountDetail;
