import React from 'react';
import './toysAndGames.css'; 

const ToysAndGames = () => {
    return (
        <div className="toys-games-container">
            <div className="about-section">
                <h1>About Toys and Games</h1>
                {/* <p>
                    Toys and games play a vital role in childhood development. They enhance creativity, 
                    improve cognitive skills, and promote physical activity. Whether it’s building blocks, 
                    puzzles, or interactive games, each toy contributes to a child’s growth and learning.
                </p> */}
                <p>
                    Our collection features a wide variety of toys that cater to different age groups, 
                    ensuring every child finds something they love. Explore our range of educational 
                    toys, arts and crafts, outdoor games, and much more!
                </p>
            </div>

            <footer className="footer container">
                <div className="footer-content">
                    <h3>Connect with Us</h3>
                    <ul className="social-media ">
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                        {/* <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i> LinkedIn</a></li> */}
                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default ToysAndGames;
