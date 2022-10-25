import Firebase from '../assets/skills/firebase.svg'
import Javascript from '../assets/skills/javascript.svg'
import Nextjs from '../assets/skills/nextjs.svg'
import React from '../assets/skills/react.svg'
import Sass from '../assets/skills/sass.svg'
import Webflow from '../assets/skills/webflow.svg'

import SectionTitle from './SectionTitle'

function Skills() {
  return (
    <div className="skills">
        <SectionTitle text='Skills'/>
            <ul className="skills-grid">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank' rel="noopener noreferrer" className='skill'>
                    <li>
                        <img src={Javascript} alt="Javascript logo" />
                        <p>JavaScript</p>
                    </li>
                </a>
                <a href="https://reactjs.org/" target='_blank' rel="noopener noreferrer" className='skill'>
                    <li>
                        <img src={React} alt="React JS logo" />
                        <p>React JS</p>
                    </li>
                </a>
                <a href="https://nextjs.org/docs" target='_blank' rel="noopener noreferrer" className='skill'>
                    <li>
                        <img src={Nextjs} alt="Next JS logo" />
                        <p>Next JS</p>
                    </li>
                </a>
                <a href="https://sass-lang.com/" target='_blank' rel="noopener noreferrer" className='skill'>
                    <li>
                        <img src={Sass} alt="SASS logo" />
                        <p>Sass</p>
                    </li>
                </a>
                <a href="https://firebase.google.com/" target='_blank' rel="noopener noreferrer" className='skill'>
                    <li>
                        <img src={Firebase} alt="Firebase logo" />
                        <p>Firebase</p>
                    </li>
                </a>
                <a href="https://webflow.com/" target='_blank' rel="noopener noreferrer" className='skill'>
                    <li>
                        <img src={Webflow} alt="Webflow logo" />
                        <p>Webflow</p>
                    </li>
                </a>
            </ul>
    </div>
  )
}

export default Skills