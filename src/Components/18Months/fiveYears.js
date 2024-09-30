import React from 'react';
import './fiveYears.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartAction';


const productForThird = [ 
    { 
        id: 1,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491668619/300/491668619-1_2520.webp",
        name: "Pop Culture 2024",
        title: "Hot Wheels",
        price: 7500
    },
    { 
        id: 2,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493664311/300/493664311-1.jpeg",
        name: "Pearl And Chrome Assorted",
        title: "Hot Wheels",
        price: 7400
    },
    { 
        id: 3,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490160790/300/490160790-1.webp",
        name: "Basic Car Fans Assorted",
        title: "Hot Wheels",
        price: 7700
    },
    { 
        id: 4,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492910190/300/492910190-1_4032.jpeg",
        name: "Lcd Writing Tablet 8.5 in",
        title: "Rowan",
        price: 590
    },
    { 
        id: 5,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494423766/300/494423766-1_4789.webp",
        name: "Retro Ultra Hots Vintage",
        title: "Hot Wheels",
        price: 7000
    },
    { 
        id: 6,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493050118/300/493050118-1_9476.webp",
        name: "Jurassic World Die Cast",
        title: "Match Box",
        price: 590
    },
    { 
        id: 7,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494229832/300/494229832-1_8319.webp",
        name: "Ultra Hot Track Builder",
        title: "Hot Wheels",
        price: 8500
    },
    { 
        id: 8,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492407841/300/492407841-1.jpeg",
        name: "Bubble Blaster With Led Light",
        title: "Hamleys",
        price: 1300
    },
 
];

const ProductForThird = () => {
        
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };
 
    
    return (
        <div>
             <h1 className='eight-mon'>3 - 5 Years</h1>
  
        <div className="thr-products-container container">
            {productForThird.map((product) => (
                <div key={product.id} className="thr-product-card">
                    <img src={product.image} alt={product.name} />
                    <p className="title">{product.title}</p>
                    <h2>{product.name}</h2>
                    <p className="price">₹ {product.price}</p>
                    <button className='btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProductForThird;
