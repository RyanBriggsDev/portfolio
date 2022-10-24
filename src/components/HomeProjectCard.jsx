import Wrongmove from '../assets/projectScreenshots/wrongmove.png'

import { Link } from 'react-router-dom'

function HomeProjectCard(props) {
  return (
    <div className="home-project-card">
        <div className="home-project-card-content">
            <h3>{props.projectName}</h3>
            <p>{props.projectDescription}</p>
        </div>
        <div className="home-project-card-image" style={{backgroundImage: `url(${props.projectImage})`}}>
            <button className='card-button'><a href={props.projectRepo} target='_blank' rel="noopener noreferrer">GitHub Repo</a></button>
        </div>
    </div>

  )
}

export default HomeProjectCard

HomeProjectCard.defaultProps = {
    projectName: 'Wrongmove - A Rightmove Clone',
    projectDescription: [`I'm currently working on Wrongmove with `, <Link to='/ytsruh-redirect' target="_blank" rel="noopener noreferrer">@ytsruh</Link>,`.`, ` This is the first project I've worked on with another developer. Wrongmove is a clone of `,<a href="https://www.rightmove.co.uk/" target='_blank' rel="noopener noreferrer">Rightmove.co.uk</a>],
    projectImage: Wrongmove,
    projectRepo: 'https://github.com/ytsruh/wrongmove'
}