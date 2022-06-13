import React from 'react'; 
import ReactDOM from 'react-dom'; 
import "../styles/nav.scss"

const NavBar = () => {
    return (
    <nav>
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
                    <div className='hamburgerBtn'>
                        <div className='burgLine'></div>
                        <div className='burgLine'></div>
                        <div className='burgLine'></div>
                    </div>
                </div>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar