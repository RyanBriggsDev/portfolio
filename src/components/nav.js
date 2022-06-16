import React, { useState } from 'react';
import ReactDOM from 'react-dom'; 
import "../styles/nav.scss"

// selectors
const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('.nav');
const hamburgerMenu = document.getElementById('hamburgerMenu')

// functions
const hamburgerOpenClose = () => {
 
}



// initial state
// this.state = { open: false };

// navbar 

const NavBar = (props) => {
    return (
    <nav className='nav'>
        <div className="container">
            <ul>
                <div className='navLeft'>
                    <a href="index.html" className="navLink">
                        <li className="navListItem">ryanbriggs.dev</li>
                    </a>
                </div>
                <div className='navRight'>
                    <div className='navLrgDisplayLinks'>
                    <a href="#projects" className="navLink il-block">
                        <li className="navListItem">Projects</li>
                    </a>
                    <a href="#about" className="navLink il-block">
                        <li className="navListItem">About</li>
                    </a>
                    <a href="#contact" className="navLink contact btn il-block">
                        <li className="navListItem">Contact</li>
                    </a>
                    </div>
                    {/* // use state here to open/close hamburger menu */}
                    <div className='hamburgerBtn' id="hamburgerBtn" onClick={hamburgerOpenClose} >
                        <div className='burgLine'></div>
                        <div className='burgLine'></div>
                        <div className='burgLine'></div>
                    </div>
                    <div className='hamburgerMenu' id='hamburgerMenu'>
                        <a href="#projects" className="navLink il-block">
                            <li className="navListItem">Projects</li>
                        </a>
                        <a href="#about" className="navLink il-block">
                            <li className="navListItem">About</li>
                        </a>
                        <a href="#contact" className="navLink contactBurg il-block">
                            <li className="navListItem">Contact</li>
                        </a>
                    </div>
                </div>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar