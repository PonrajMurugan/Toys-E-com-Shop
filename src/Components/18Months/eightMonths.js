import React from 'react';
import './eightMonths.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartAction';

const eighteenMonths = [
    { 
        id: 1,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492910192/300/492910192-1_2395.jpeg",
        name: "Dancing Cactus Toy",
        title: "Rowan",
        price: 1500
    },
    { 
        id: 2,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492909722/300/492909722-1_6171.jpeg",
        name: "Sunset Glow Pool 3 Feet",
        title: "Intex",
        price: 850
    },
    { 
        id: 3,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492407600/300/492407600.webp",
        name: "Rainbow Links Baby Toys",
        title: "Shooting Star",
        price: 750
    },
    { 
        id: 4,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491947815/300/saregama-carvaan-mini-kids_front.webp",
        name: "Carvaan Mini 2.0 kids",
        title: "Saregama",
        price: 2500
    },
    { 
        id: 5,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491333769/300/491333769-_1.webp",
        name: "Mummy Pig Plush 46 cm",
        title: "Peppa",
        price: 590
    },
    { 
        id: 6,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491603945/300/491603945-1.webp",
        name: "Basketball For Kids 1 Yr",
        title: "Hamleys Star",
        price: 330
    },
    { 
        id: 7,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491902533/300/491902533_1.webp",
        name: "Baby Ball Zone For Kids",
        title: "Hamleys",
        price: 520
    },
    { 
        id: 8,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492910448/300/492910448-1.jpeg",
        name: "Teddy Bear Soft For Kids",
        title: "Masha",
        price: 900
    },
];

const EightMonths = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => { 
        dispatch(addToCart(item));
    };

    return (
        <div>
            <h1 className='eight-mon'>0 - 18 Months</h1>
            <div className="eight-months-products-container container">
                {eighteenMonths.map((item) => (
                    <div key={item.id} className="products-card">
                        <img src={item.image} alt={item.name} />
                        <h2 className="products-name">{item.name}</h2>
                        <p className="products-title">{item.title}</p>
                        <p className="products-price"> ₹ {item.price}</p>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EightMonths;
