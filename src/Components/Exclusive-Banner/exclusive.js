import React from 'react';
import './exclusive.css';

const Exclusive = () => {
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">

            <div className='exclusive'>
                <h1>Exclusives</h1>

            </div>

            <div  id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://toycra.com/cdn/shop/files/Wooden_Toys_2736x912.jpg?v=1681476513" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://toycra.com/cdn/shop/files/33-01_2736x912.png?v=1681838940" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://toycra.com/cdn/shop/files/Smoby_1710x570.jpg?v=1639478171" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            
        </div>
    );
};

export default Exclusive;