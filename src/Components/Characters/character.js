import React from 'react';
import './character.css';

const characters = [{
    img: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503313Frame_1647.webp",
    img1: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503362Frame_1597879648.webp",
    img2: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503500Frame_1597879650.webp",
    img3: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503422Frame_1648.webp",
    img4: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503407Frame_1597879649.webp",
    img5: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503297Frame_1597879651.webp",
    img6: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503345Frame_1597879653.webp",
    img7: "https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-banner/1722503378Frame_1597879652.webp",
}];

const Character = () => {
    return (
        <div data-aos="fade-down"
        data-aos-duration="3000" className="character-container">
            <h1 className='super-title'>Super Characters</h1>
            <div className="character-grid container">
                {Object.values(characters[0]).map((img, index) => (
                    <div className="character-card" key={index}>
                        <img src={img} alt={`Character ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Character;
