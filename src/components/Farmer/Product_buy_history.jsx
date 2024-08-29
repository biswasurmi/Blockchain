import React from "react";
import { Link } from "react-router-dom";

import d1 from '../Farmer/images/tomato.jpg';
import d2 from '../Farmer/images/spinach.jpg';
import d3 from '../Farmer/images/pineapple.jpg';
import d4 from '../Farmer/images/cucum.jpg';
import d5 from '../Farmer/images/carrot.jpg';
import d6 from '../Farmer/images/pepper.jpg';
import d7 from '../Farmer/images/apple.jpg';
import d8 from '../Farmer/images/potato.jpg';
import d9 from '../Farmer/images/orange.jpg';
import d10 from '../Farmer/images/orange.jpg';
import Navbar from "../Navbar/Navbar";



const ProductData = [
  {
    id: 1,
    image: d1, // Use require to dynamically load the image
    name: "Fresh Tomatoes",
    address: "CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rakib",
    mobile:"017XXXXXXXX",
    quantity:20,

  },

  {
    id: 2,
    image: d5, // Use require to dynamically load the image
    name: "Fresh Carrots",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:10,
  },

  {
    id: 3,
    image: d2, // Use require to dynamically load the image
    name: "Egyptian Garlic",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:20,
  },

  {
    id: 4,
    image: d3, // Use require to dynamically load the image
    name: "Brussels",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:10,
  },

  {
    id: 5,
    image: d9, // Use require to dynamically load the image
    name: "Bangladeshi Orange",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:30,
  },

  {
    id: 6,
    image: d1, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:20,
  },

  {
    id: 7,
    image: d8, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:10,
  },

  {
    id: 8,
    image: d6, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
    buyer:"Rahim",
    mobile:"017XXXXXXXX",
    quantity:20,
  },
];
const Product_buy_history = () => {
  return (
    <div>
      <Navbar/>
    <div className="p-6 bg-white shadow-md rounded-lg">
  <div className="bg-gray-100 p-4 rounded-lg">
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-700">Product Buying History</h3>
    </div>
    <div className="border-t border-green-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {ProductData.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{item.buyer}</div>
                <div className="text-sm text-gray-500">{item.mobile}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={item.image} alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.quantity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">TK.{item.basePrice}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.endTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  );
};

export default Product_buy_history;
