import React from 'react';
import { Link } from 'react-router-dom';
import './shopByAge.css';

const ShopByAge = () => {
    const products = [
        { id: 1, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/172250456092624.webp' },
        { id: 2, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/172250496992629.webp' },
        { id: 3, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/172250587592630.webp' },
        { id: 4, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/172250610992632.webp' },
        { id: 5, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/172250630692633.webp' },
    ];

    return (
        <div data-aos="fade-up">
            <h1 className='shopAge'>Shop By Age</h1>
            <div className="shop-by-age-container">
                {products.map(product => (
                    <div className="shop-item" key={product.id}>
                        <Link 
                            to={`/shop/${product.id}`} 
                            onClick={() => window.scrollTo(0, 0)} 
                        >
                            <img 
                                src={product.image} 
                                alt={`product ${product.id}`} 
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopByAge;
