import React from 'react';
import './nineMonths.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartAction';

const nineMonths = [ 


    { 
        id: 1,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493664271/300/493664271-1_8436.webp",
        name: "Max Drone Six Axis",
        title: "Sirus Toys",
        price: 1500
    },
    { 
        id: 2,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490619093/300/490619093-1.webp",
        name: "Telescope Equipments",
        title: "Hamleys",
        price: 1250
    },
  
    { 
        id: 3,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/494229893/300/494229893-1_2576.webp",
        name: "Candy Slime",
        title: "Youreka Mix",
        price: 700
    },
  
    { 
        id: 4,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174337/300/493174337-1_3586.webp",
        name: "Sports Boomerang",
        title: "Hamleys Sonic",
        price: 1600
    },
  
    { 
        id: 5,
        image: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492908070/300/492908070-1_2260.webp",
        name: "Tanker Kits",
        title: "Airfix Russian",
        price: 5200
    },
  
    { 
        id: 6,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491948157/300/491948157-1_8537.webp",
        name: "Strike Flyte CS 10",
        title: "Nerfs Alpha",
        price: 5700
    },
  
    { 
        id: 7,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491948154/300/491948154-1.webp",
        name: "Strike Wolf LR -1 Toy",
        title: "Nerfs Alpha",
        price: 2900
    },
  
    { 
        id: 8,
        image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492408249/300/492408249-1.jpeg",
        name: "Rock Crawler Car",
        title: "Hamleys Monster",
        price: 1850
    },
];

const NineMonths = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };


    return (
        <div>
             <h1 className='eight-mon'> 5 - 7 Years</h1>

        <div className="fiv-products-container container">
            {nineMonths.map((product) => (
                <div key={product.id} className="fiv-product-card">
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

export default NineMonths;