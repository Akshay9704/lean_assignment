import React from 'react';
import Logo from "../Images/Logo(f).jpg"

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className="newsletter">
                <div className="container">
                    <div className="content">
                        <p className="content-title">Newsletter</p>
                        <h2 className="content-desc">Get new offers on your email</h2>
                        <p className="content-tagline">Subscribe to get tips and tactics to grow the way you want.</p>
                        <form>
                            <input type="email" className="email-input" placeholder="Your Email Address" />
                            <button className="news-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className='footer'>
                <img src={Logo} alt=""/>
            </footer>
        </div>
    );
}

export default Footer;

