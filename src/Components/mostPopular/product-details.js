import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './product-detail.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartAction';

const relatedProducts = [
    {
        id: 6,
        image: "https://toycra.com/cdn/shop/files/Nerf-Elite-2_0-Ranger-PD-5-Blaster-Action-Toy-Figures-Nerf-Toycra-2_297x297.jpg?v=1714406497",
        name: "Nerf Elite",
        price: 1799,
    },
    {
        id: 7,
        image: "https://toycra.com/cdn/shop/products/Transformers-2-IN-1-Rise-of-The-Beasts-Action-Figure-11-inch-Action-Toy-Figures-Transformers-Toycra-2_297x297.jpg?v=1681725217",
        name: "Transformers",
        price: 1999,
    },
    {
        id: 8,
        image: "https://toycra.com/cdn/shop/files/Marvel-Bend-and-Flex-Flex-Rider-Iron-Man-Action-Toy-Figures-Marvel-Toycra-2_297x297.jpg?v=1712164056",
        name: "Marvel Spider",
        price: 2500,
    },
];

const ProductDetails = () => {
    const { state: product } = useLocation();
    const navigate = useNavigate(); 
    const [activeTab, setActiveTab] = useState('details');
    
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    if (!product) {
        return <h2>Product not found</h2>;
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'details':
                return (
                    <>
                        <h2 className='pro-det'>Product Details</h2>
                        <p className='con-det'>{product.content}</p>
                    </>
                );
            case 'reviews':
                return (
                    <>
                        <h2 className='rev-det'>Reviews</h2>
                        <p className='rev-con'>No reviews yet. Be the first to write a review!</p>
                    </>
                );
            case 'related':
                return (
                    <div className="related-products">
                        <h2 className='rel-con'>You May Also Like</h2>
                        <div className="related-products-grid">
                            {relatedProducts.map((related) => (
                                <div className="related-product-card" key={related.id}>
                                    <img src={related.image} alt={related.name} />
                                    <h3>{related.name}</h3>
                                    <p>₹{related.price}</p>
                                    <button 
                                        className="btn btn-success" 
                                        // onClick={() => navigate('/product-details', { state: related })} 
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="product-details">
            <div className="product-image-gallery">
                <img className="main-image" src={product.image} alt={product.name} />
                <div className="thumbnail-images">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
            </div>

            <div className="product-info">
                <h1 className="main-con">{product.name}</h1>
                <div className="rating">
                    ★★★★☆
                </div>
                <p className='main-pri'>Price : ₹ {product.price}</p>
                <button className="btn btn-success"  onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>

            <div className="tabs">
                <button className={`tab-button ${activeTab === 'details' ? 'active' : ''}`} onClick={() => setActiveTab('details')}>Details</button>
                <button className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews</button>
                <button className={`tab-button ${activeTab === 'related' ? 'active' : ''}`} onClick={() => setActiveTab('related')}>Related Products</button>
            </div>

            <div className="tab-content">
                {renderTabContent()}
            </div>
        </div>
    );
};

export default ProductDetails;
