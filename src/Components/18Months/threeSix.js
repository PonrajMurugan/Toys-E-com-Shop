import React from 'react';
import './threeSix.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/cartAction';

const productsForSecondCategory = [
    { id: 1, image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/490619074/300/490619074-1.webp', name: 'Magic Snow Sand Slime', title: "Hamleys", price: 1200 },
    { id: 2, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493173771/300/493173771-1_7186.webp', name: 'Dirt Drigger Bumper Truck', title: "Little Tikes", price: 2300 },
    { id: 3, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492908912/300/492908912-1_5862.webp', name: 'Melodious Xylophone Piano', title: "Shooting Star", price: 3010 },
    { id: 4, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409369/300/492409369-1_6275.webp', name: 'Movers And Shakers', title:"Hamleys" , price: 3400 },
    { id: 5, image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492908814/300/492908814_1_7817.jpeg', name: 'My First Pram', title: "ELC CupCake", price: 2500 },
    { id: 6, image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/491636181/300/491636181.webp', name: 'Sports T-Ball Set', title: "Little Tikes Tot", price: 1600 },
    { id: 7, image: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/492409370/300/492409370-1_1721.webp', name: 'Rolling Hamsters Toy', title: "Hamleys", price: 4700 },
    { id: 8, image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-product/493174264/300/493174264_7351.jpeg', name: 'Gigi Doll For', title: "Cry Babies", price: 1800 },
];

const ProductsPage = () => {


    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div>
            <h1 className='eight-mon'>18 - 36 Months</h1>

       
        <div className="sec-products-container container">
            {productsForSecondCategory.map((product) => (
                <div key={product.id} className="sec-product-card">
                    <img src={product.image} alt={product.name} />
                    <p>{product.title}</p>
                    <h2>{product.name}</h2>
                    <p> ₹ {product.price}</p>
                    <button className='btn btn-success' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ProductsPage;
