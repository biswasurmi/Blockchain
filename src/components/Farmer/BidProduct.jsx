import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../Farmer/Data"; // Import the products array
import "./Bidproduct.css";


import "../Farmer/assets/css/animate.css";
import "../Farmer/assets/css/bootstrap.min.css";
import "../Farmer/assets/css/icofont.min.css";
import "../Farmer/assets/css/magnific-popup.css";
import "../Farmer/assets/css/style.min.css";
import "../Farmer/assets/css/style.min.css.map";
import Navbar from "../Navbar/Navbar";


const BidProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const loggedInUser="User";

  const [bidAmount, setBidAmount] = useState("");
  const [bids, setBids] = useState([]);

  useEffect(() => {
    // Load existing bids from local storage
    const storedBids = JSON.parse(localStorage.getItem(`bids_${id}`)) || [];
    setBids(storedBids);
  }, [id]);

  const handleBidSubmit = () => {
    const newBid = {
      username: loggedInUser.username,
      bidAmount,
      timestamp: new Date().toLocaleString(),
    };

    // Add new bid at the top of the list
    const updatedBids = [newBid, ...bids];
    setBids(updatedBids);

    // Save the updated bids to local storage
    localStorage.setItem(`bids_${id}`, JSON.stringify(updatedBids));

    // Clear the input field
    setBidAmount("");
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="">
      <Navbar/>
      <div className="Outer1">
        {/* Product Image */}
        <div className="Outer2">
          <img src={product.image} alt={product.name} className="image1" />
        </div>

        {/* Product Details */}
        <div className="Outer3">
          <h1 className="Top1">{product.name}</h1>
          <p className="Top2">{product.address}</p>
          <p className="Top2">Description: {product.description}</p>
          <p className="Top2">Current Bid: TK.{product.currentBid}</p>
          <p className="Top2">Base Price: TK.{product.basePrice}</p>
          <p className="Top2">Total Unit: {product.totalUnit}</p>
          <p className="Top2">End Time: {product.endTime}</p>

          {/* Input for Bid Amount */}
          <div className="mt-6">
            <input
              type="number"
              placeholder="Enter your bid"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="input_form1"
            />
            <button onClick={handleBidSubmit} className="bttn1">
              Submit Bid
            </button>
          </div>
        </div>
      </div>

      {/* Bids Section */}
      <div className="Out1">
        <div className="Text1">Bids:</div>
        <div className="border-t border-green-300">
          <table className="content-table">
            <thead>
              <tr>
                <th>Bidder Name</th>
                <th>Bid price</th>
                <th>Timestamp</th>
              </tr>
            </thead>

            <tbody>
              {bids.map((bid, index) => (
                <tr key={index}>
                  <td>{loggedInUser}</td>
                  <td>{bid.bidAmount}</td>
                  <td>{bid.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidProduct;
