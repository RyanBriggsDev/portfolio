import LayoutContext from '../context/LayoutContext'
import { useContext, useEffect } from 'react'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'
import HomeProjectCard from '../HomeProjectCard'

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
                    <HomeProjectCard />
                    <HomeProjectCard />
                    <HomeProjectCard />
                    <HomeProjectCard />
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards