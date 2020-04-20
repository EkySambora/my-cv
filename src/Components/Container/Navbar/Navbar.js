import React from 'react';
import './Style.scss'
const Navbar = () => {
    return (
        <div className="container mt-5 mb-5 ">
            <div className="row ">
                <div className="col-md-6 col-12 ">
                <h2 className="logo" ><a href="index.html">EZAWEB</a></h2>
                </div>
                <div className="col-md-6 col-12">
                <menu id="menuHidden" className="text-center" >MENU</menu>
                <div id="parentMenu">
                    <ul className="navbarMenu" id="menu">
                    <li><a style={{color: '#00C9FF'}} href="index.html">BLOG</a></li>  
                    <li><a href="work.html">WORK</a></li>
                    <li><a href="about.html">ABOUT</a></li>  
                    <li><a href="contact.html">CONTACT</a></li>  
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar;