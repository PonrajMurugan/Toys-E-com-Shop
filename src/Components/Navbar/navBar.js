import React from 'react';
import { Link } from 'react-router-dom'; 
import './navBar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartItems = useSelector((state) => state.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCardClick = () => {
    window.scrollTo(0, 0); 
};


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link  onClick={handleCardClick} className="navbar-brand" to="/">
                        <img className="logo-img" src="https://www.hamleys.in/_nuxt/img/logo.903d661.png" alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link  onClick={handleCardClick} className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <Link className="nav-link" to="/toys">Toys</Link> */}
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link  onClick={handleCardClick} className="dropdown-item" to="/shop/1">0 - 18 Months</Link></li>
                                    <li><Link  onClick={handleCardClick} className="dropdown-item" to="/shop/2">18 - 36 Months</Link></li>
                                    <li><Link  onClick={handleCardClick} className="dropdown-item" to="/shop/3">3 - 5 Years</Link></li>
                                    <li><Link  onClick={handleCardClick} className="dropdown-item" to="/shop/4">5 - 7 Years</Link></li>
                                    <li><Link  onClick={handleCardClick} className="dropdown-item" to="/shop/5">7 - 9 Years</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                      <Link  onClick={handleCardClick} className="nav-link position-relative" to="/cart">
                                Cart <i className="fa fa-shopping-cart"></i>
                                {cartCount > 0 && (
                                    <span style={{marginTop:"15px"}} className="cart-count badge bg-danger rounded-circle position-absolute top-0 start-100 translate-middle">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            </li>
                            <li className='loader'>

                            </li>
                        </ul>
                     
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 pp" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
