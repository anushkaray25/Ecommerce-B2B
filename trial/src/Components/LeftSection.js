import React from 'react';
import './leftstyle.css';
import image1 from '../Images/image1.svg';
import image2 from '../Images/image2.svg';
import image3 from '../Images/image3.svg';
import image4 from '../Images/image4.svg';

const LeftSection = () => {
    return (
        <div className="left-section">
            <div className="background">
                <div className="image-background"></div>
                <div className="white-background"></div>
                <div className="image-background2"></div>
                <div className="yellow-background"></div>
                <img src={image4} alt="Paris" className="img1" />
                <img src={image2} alt="Paris" className="img2" />
                <img src={image3} alt="Paris" className="img3" />
                <img src={image1} alt="Paris" className="img4" />
            </div>
        </div>
    );
};

export default LeftSection;