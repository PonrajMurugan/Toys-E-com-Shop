import React from 'react';
import './mostPopular.css';
import { useNavigate } from 'react-router-dom'; 

const mostPopular = [ 
     {
        id:1,
        image:"https://toycra.com/cdn/shop/files/Nerf-Elite-2_0-Ranger-PD-5-Blaster-Action-Toy-Figures-Nerf-Toycra-2_297x297.jpg?v=1714406497",
        name:"Nerf Elite",
        content:"2.0 Ranger PD-5 Blaster",
        price:1799,
     },
     {
        id:2,
        image:"https://toycra.com/cdn/shop/products/Transformers-2-IN-1-Rise-of-The-Beasts-Action-Figure-11-inch-Action-Toy-Figures-Transformers-Toycra-2_297x297.jpg?v=1681725217",
        name:"Transformers",
        content:"Rise Of The Beasts Action",
        price:1999,
     },
     {
        id:3,
        image:"https://toycra.com/cdn/shop/files/Marvel-Bend-and-Flex-Flex-Rider-Iron-Man-Action-Toy-Figures-Marvel-Toycra-2_297x297.jpg?v=1712164056",
        name:"Marvel Spider Man",
        content:"Webshots Scatterblast",
        price:2500,
     },
     {
        id:4,
        image:"https://toycra.com/cdn/shop/products/Beyblade-Burst-QuadDrive-Spinning-Top-Starter-Pack-Action-Toy-Figures-Beyblade-Toycra-2_297x297.jpg?v=1673344375",
        name:"Bey Blade Burst",
        content:"QuadDrive Spinning Top",
        price:1800,
     },
     {
        id:5,
        image:"https://toycra.com/cdn/shop/files/Hot-Wheels-Street-Power-Motorcycle-Vehicles-Hot-Wheels-Toycra-2_297x297.jpg?v=1696758983",
        name:"Hot Wheels",
        content:"Street Power Motor Cycle",
        price:599,
     },
];

const MostPopular = () => {

    const navigate = useNavigate(); 

    const goToDetails = (product) => {
        navigate(`/product-details/${product.id}`, { state: product }); 
        window.scrollTo(0, 0); 
    };



    return (
        <div  data-aos="fade-down" className="most-popular-container">
            <h1 className='most-popular'>Most Popular Products</h1>
            <div className="product-grid container">
                {mostPopular.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-content">{product.content}</p>
                        <p className="product-price"> ₹ {product.price}</p>
                        <button className='btn btn-success' onClick={() => goToDetails(product)}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MostPopular;
