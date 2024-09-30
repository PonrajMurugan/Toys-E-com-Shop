import React from 'react';
import './promotions.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ShippingIcons = () => {
    return (
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <h1 className='assurance'>Assurance</h1>

     
        <div className="shipping-container container">
        <div className="shipping-item">
            <i className="fas fa-truck" aria-hidden="true"></i>
            <h3>Free Shipping</h3>
            <p>On orders over ₹ 50</p>
        </div>
        <div className="shipping-item">
            <i className="fas fa-undo" aria-hidden="true"></i>
            <h3>Easy Returns</h3>
            <p>30 days return policy</p>
        </div>
        <div className="shipping-item">
            <i className="fas fa-headset" aria-hidden="true"></i>
            <h3>24/7 Support</h3>
            <p>Always here to help</p>
        </div>
        <div className="shipping-item">
            <i className="fas fa-gift" aria-hidden="true"></i>
            <h3>Special Offers</h3>
            <p>Discounts and promotions</p>
        </div>
    </div>
    </div>
    );
};

export default ShippingIcons;
