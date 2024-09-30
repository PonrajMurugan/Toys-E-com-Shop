import React from 'react';
import './sevenMonths.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartAction';



const productForFour = [ 

    { 
        id: 1,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491959762/300/491959762-1.webp",
        name: "Football Table Game",
        title: "Hamleys",
        price: 600
    },
    { 
        id: 2,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174802/300/493174802-1_6390.webp",
        name: "Flashing Stunt Car",
        title: "Ralleyz",
        price: 800
    },
    { 
        id: 3,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408264/300/492408264-1_9886.webp",
        name: "Rock Remote Car",
        title: "Ralleyz",
        price: 1500
    },
    { 
        id: 4,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493664275/300/493664275-1_3978.webp",
        name: "Sensor Flying Ball",
        title: "Ralleyz Heli ",
        price: 2500
    },
    { 
        id: 5,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493176359/300/493176359-1.jpeg",
        name: "Electric Sports Car",
        title: "Lego City",
        price: 1800
    },
    { 
        id: 6,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493173765/300/493173765_1_3439.jpeg",
        name: "Flip Racing Car",
        title: "Ralleyz Stunt",
        price: 3500
    },
    { 
        id: 7,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493663017/300/493663017-1_4191.webp",
        name: "Strike Mechasaurs",
        title: "Marvel Mech",
        price: 1400
    },
    { 
        id: 8,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493173882/300/493173882-1_7209.jpeg",
        name: "Robot Building Toys",
        title: "Creator 3 in 1",
        price: 870
    },
   
];

const SevenMonths = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };


    return (
        <div>
             <h1 className='eight-mon'> 5 - 7 Years</h1>

        <div className="fou-products-container">
        {productForFour.map((product) => (
            <div key={product.id} className="fou-product-card">
                <img src={product.image} alt={product.name} />
                <p className="title">{product.title}</p>
                <h2>{product.name}</h2>
                <p className="price">₹ {product.price}</p>
                <button className='fou-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
        ))}
    </div>
    </div>

    );
};

export default SevenMonths;