import LayoutContext from "../../context/LayoutContext"
import { useContext, useState } from "react"
import './nav.scss'
import { Link } from "react-router-dom"

function NavBar() {

    const {} = useContext(LayoutContext)

    const [navToggle, setNavToggle] = useState(false)

    return (
        <nav>
            <div className="nav-container">
                <div className="nav-left">
                    <a href="/">RyanBriggs.Dev</a>
                </div>
                <div className="nav-right">
                    <div className={`hamburger-link ${navToggle === false ? '' : 'open'}`} onClick={(() => setNavToggle(!navToggle))}>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                        <div className="hamburger-line"></div>
                    </div>
                    <ul className="nav-links" id={navToggle ? 'show' : ''}>
                        <li className='nav-link'><a href="/now">Now</a></li>
                        <Link to={'/contact'} className="nav-link">Get in touch</Link>
                        <Link to={'/projects'} className="nav-link">Projects</Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar