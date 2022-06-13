import React from 'react'; 
import ReactDOM from 'react-dom'; 
import "../styles/nav.scss"

const NavBar = () => {
    return (
    <nav>
        <div className="container">
            <ul>
                <div className='navHome'>
                    <a href="index.html" className="navLink">
                        <li className="navListItem">ryanbriggs.dev</li>
                    </a>
                </div>
                <div className='navLinks'>
                    <a href="#projects" className="navLink">
                        <li className="navListItem">Projects</li>
                    </a>
                    <a href="#about" className="navLink">
                        <li className="navListItem">About</li>
                    </a>
                    <a href="#contact" className="navLink contact btn">
                        <li className="navListItem">Contact</li>
                    </a>
                </div>
                <div className='hamburgerMenu'>
                    <div className='burgLine'>-</div>
                    <div className='burgLine'>-</div>
                    <div className='burgLine'>-</div>
                </div>
            </ul>
        </div>
    </nav>
    )
}

export default NavBar