import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-content">
          <h2 className="footer-title">Agate Phone Grip</h2>
          <p className="footer-price">
            <span className="original-price">$40.00</span>
            <span className="discounted-price">$19.50</span>
          </p>
          <p className="footer-description">
            These Pop Rock Crystals grip your phone with ease and peace of mind.
          </p>
          <button className="footer-button">BUY NOW</button>
        </div>
        <div className="footer-image-container">
          <img 
            src="https://s3-alpha-sig.figma.com/img/515a/3922/05949d981f0a7ab0ecb2d55fcf22b90f?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QM9aP6psi0S5kPMyarBxUgypM-4PRGRQ3z79i2eR0hUPgbfxn1BxFh2tLIF1nDoCSvbjJ4S8Ggw6DYfAGu06y7qLeb7I6PJiCHYZCu~1HlIhpQbLR7Z62YYpLbD~unVbQ~YG5DrPRy-7wQjf~F9vMWHxS-b4q7aQPHk0tvXA1Ey-rlktGBYt1wtqYU9fCcseSgVZwmtxvCP38ByPxx0vML7cbE2Thb8ekdsO0h6u4QwTIpVVh76kUorAqKEqWNQOKIUNvc-mcSz6TifJCtsdEmaX6yORqF2kdMAx6vGJeZFWnML4QHIeaW-OHEHlwNwQg2~gjivTDQLuOKS~sb-Y1w" 
            alt="Agate Phone Grip" 
            className="footer-image" 
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
