import React from 'react';
import { Link } from 'react-router-dom';
import bid from '../Farmer/images/bid.jpg';
import sale from '../Farmer/images/sale.jpg';
import account from '../Farmer/images/account.jpg';
import delivery from '../Farmer/images/delivery.png';
import history from '../Farmer/images/history.png';
import trade from '../Farmer/images/trade.png';
import './FarmerOption.css';
import './Whole_sell.css';


import "../Farmer/assets/css/animate.css";
import "../Farmer/assets/css/bootstrap.min.css";
import "../Farmer/assets/css/icofont.min.css";
import "../Farmer/assets/css/magnific-popup.css";
import "../Farmer/assets/css/style.min.css";
import "../Farmer/assets/css/style.min.css.map";


const Whole_sell = () => {
  return (
    <div>

      <div className="Whole-out">
        <div className="whole-out1">
          <div>
            <img
              className="bid-img1"
              src={bid}
              alt=""
            ></img>
          </div>
          <div className="whole-out2">
            <Link to="/biditems">
              <span className="whole-out3">Bid now</span>
            </Link>
          </div>
        </div>
        <div className="whole-out1">
          <div>
            <img
              className="bid-img1"
              src={sale}
              alt=""
            ></img>
          </div>
          <div className="whole-out2">
            <Link to="/salehistorypage">
              <span className="whole-out3">Add products for sell</span>
            </Link>
          </div>
        </div>

        <div className="whole-out1">
          <div>
            <img
              className="bid-img1"
              src={delivery}
              alt=""
            ></img>
          </div>
          <div className="whole-out2">
            <Link to="/farmerproducts">
              <span className="whole-out3">Buy products</span>
            </Link>
          </div>
        </div>
        <div className="whole-out1">
          <div>
            <img
              className="bid-img1"
              src={trade}
              alt=""
            ></img>
          </div>
          <div className="whole-out2">
            <Link to="/Product_sell_history">
              <span className="whole-out3">Product selling History</span>
            </Link>
          </div>
        </div>
        <div className="whole-out1">
          <div>
            <img
              className="bid-img1"
              src={history}
              alt=""
            ></img>
          </div>
          <div className="whole-out2">
            <Link  to="/Product_buy_history">
              <span className="whole-out3">Product buying History</span>
            </Link>
          </div>
        </div>
        <div className="whole-out1">
          <div>
            <img
              className="bid-img1"
              src={account}
              alt=""
            ></img>
          </div>
          <div className="whole-out2">
            <Link to="/accountdetails">
              <span className="whole-out3">Account details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whole_sell;
