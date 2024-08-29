import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Biditems.css";

import "../Farmer/assets/css/animate.css";
import "../Farmer/assets/css/bootstrap.min.css";
import "../Farmer/assets/css/icofont.min.css";
import "../Farmer/assets/css/magnific-popup.css";
import "../Farmer/assets/css/style.min.css";
import "../Farmer/assets/css/style.min.css.map";





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


const title = "Wholeseller bids";

const BidsData = [
  {
    id: 1,
    image: d1, // Use require to dynamically load the image
    name: "Fresh Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
  },

  {
    id: 2,
    image: d2, // Use require to dynamically load the image
    name: "Fresh Carrots",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
  },

  {
    id: 3,
    image: d3, // Use require to dynamically load the image
    name: "Egyptian Garlic",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
  },

  {
    id: 4,
    image: d4, // Use require to dynamically load the image
    name: "Brussels",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
  },

  {
    id: 5,
    image: d5, // Use require to dynamically load the image
    name: "Bangladeshi Orange",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
  },

  {
    id: 6,
    image: d6, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "Running",
  },

  {
    id: 7,
    image: d7, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
  },

  {
    id: 8,
    image: d8, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
  },

  {
    id: 9,
    image: d1, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: true,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
  },

  {
    id: 10,
    image: d9, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
  },

  {
    id: 11,
    image: d10, // Use require to dynamically load the image
    name: "Fresh Red Tomatoes",
    address: "From CUET, CSE",
    description: "Fresh winter tomatoes",
    isBidsRunning: false,
    currentBid: 30000,
    basePrice: 25000,
    totalUnit: "30 Tons",
    endTime: "Apr 08, 2024",
    cate: "End",
  },
];

const Biditems = () => {
  const [items, setItems] = useState(BidsData);

  //filtering
  const filterItem = (categItem) => {
    const updateItems = BidsData.filter((curElem) => {
      return curElem.cate === categItem;
    });
    setItems(updateItems);
  };

  return (
    <div className="">
      <Navbar/>
    
      {/* main section */}

      <div className="container11">
        {/* section-header */}
            <div className="items">
              <button className="item-btn" onClick={() => setItems(BidsData)}>All bids</button>
              <button  className="item-btn" onClick={() => filterItem("Running")}>Running bids</button >
              <button  className="item-btn" onClick={() => filterItem("End")}>End bids</button >
            </div>

        {/* section-body */}
        <div className="section-wrapper">
          <div
            className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1
           course-filter"
          >
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thumb">
                      <img className="prod-img1" src={product.image} alt="" />
                      <div className="course-category1">
                        <div className="course-cate">
                          <a className="product1" href="#">
                            {product.name}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* content */}
                    <div className="course-content">
                   
                      <div className="bid-content">
                        {" "}
                        Bid-status : {product.cate}{" "}
                      </div>
                      <div className="bid-content">
                        {" "}
                        Amount : {product.totalUnit}{" "}
                      </div>
                      <div className="bid-content">
                        {" "}
                        Base-price : TK.{product.basePrice}{" "}
                      </div>
                      <div className="bid-content">
                        {" "}
                        Current-bid : TK.{product.currentBid}{" "}
                      </div>
                      <div className="bid-content">
                        {" "}
                        End-time : {product.endTime}{" "}
                      </div>
                      <div className="course-footer">
                        <Link to={`/BidProduct/${product.id}`}>
                          <button className="button1">Bid now</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biditems;
