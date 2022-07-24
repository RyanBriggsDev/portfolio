import LayoutContext from "../../context/LayoutContext"
import { useContext, useState } from "react"
import './nav.scss'

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
                        <li className='nav-link'><a href="/contact">Contact</a></li>
                        <li className='nav-link'><a href="/projects">Projects</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar