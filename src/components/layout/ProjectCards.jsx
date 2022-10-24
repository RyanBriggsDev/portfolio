import LayoutContext from '../context/LayoutContext'
import { useContext, useEffect } from 'react'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'

import Wrongmove from '../../assets/projectScreenshots/wrongmove.png'

function ProjectCards() {

    const { fetchRepos, repos, callComplete } = useContext(LayoutContext)

    // fetch data on load
    useEffect(() => {
        fetchRepos()
    }, [])

    if(callComplete === true) {
        return (
            <div className="projects-container">
                <h2>My Recent Projects</h2>
                <div className="home-projects">
                    <div className="wrongmove home-project-card">
                        <div className="home-project-card-content">
                            <h3>Wrongmove - A Rightmove Clone</h3>
                            <p>I'm currently working on Wrongmove with <Link to='/ytsruh-redirect' target="_blank" rel="noopener noreferrer">@ytsruh</Link>. This is the first project I've worked on with another developer. Wrongmove is a clone of <a href="https://www.rightmove.co.uk/" target='_blank' rel="noopener noreferrer">Rightmove.co.uk</a></p>
                        </div>
                        <div className="home-project-card-image" style={{backgroundImage: `url(${Wrongmove})`}}>
                            <button className='card-button'><a href="https://github.com/ytsruh/wrongmove" target='_blank' rel="noopener noreferrer">GitHub Repo</a></button>
                        </div>
                    </div>

                    <div className="house-marketplace home-project-card">
                        <div className="home-project-card-content">
                            <h3>House Marketplace</h3>
                            <p>House marketplace app build in React. This was the first React project I completed following along with Brad Traversy's course and one I have learnt a lot from</p>
                        </div>
                        <div className="home-project-card-image" style={{backgroundImage: `url(${Wrongmove})`}}>
                            <button className='card-button'><a href="https://github.com/ytsruh/wrongmove" target='_blank' rel="noopener noreferrer">GitHub Repo</a></button>
                        </div>
                    </div>

                    <div className="react-pokedex">React Pokedex</div>
                    <div className="expense-tracker">Expense Tracker</div>
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards