import React from 'react';
import { AiFillInstagram, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Thanapat Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/thanapat.b_/" target='_blank'><AiFillInstagram /></a>
        <a href="https://www.facebook.com/thanapat.julakarn/"><AiOutlineFacebook /></a>
      </p>
    </div>
  )
}

export default Footer