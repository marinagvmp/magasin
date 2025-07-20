import React from 'react';
import './Footer.css';
import tiktok from './assets/tiktok.PNG';
import x from './assets/x.PNG';
import facebook from './assets/facebook.PNG';
import insta from './assets/insta.PNG';

function Footer() {
  const handleClick = (platform) => {
    alert(`Connecting to ${platform}...`);
  };

  return (
    <div className="footer">
      <img src={tiktok} alt="TikTok" onClick={() => handleClick("TikTok")} />
      <img src={x} alt="X" onClick={() => handleClick("X")} />
      <img src={facebook} alt="Facebook" onClick={() => handleClick("Facebook")} />
      <img src={insta} alt="Instagram" onClick={() => handleClick("Instagram")} />
    </div>
  );
}

export default Footer;
