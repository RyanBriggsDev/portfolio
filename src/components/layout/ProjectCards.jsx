import LayoutContext from '../context/LayoutContext'
import { useContext, useEffect } from 'react'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'
import HomeProjectCard from '../HomeProjectCard'

import reactPokedex from '../../assets/projectScreenshots/reactPokedex.png'
import houseMarketplace from '../../assets/projectScreenshots/houseMarketplace.png'
import expenseTracker from '../../assets/projectScreenshots/expenseTracker.png'

function ProjectCards() {

    const { fetchRepos, repos, callComplete } = useContext(LayoutContext)

    // fetch data on load
    useEffect(() => {
        fetchRepos()
    }, [])

    if(callComplete === true) {
        return (
            <div className="projects-container">
                <h2>Recent Projects</h2>
                <div className="home-projects">
                    <HomeProjectCard />
                    <HomeProjectCard 
                        projectName='React Pokedex'
                        projectDescription={'I made a React Pokedex'}
                        projectImage={reactPokedex}
                        projectRepo={'https://github.com/RyanBriggsDev/ReactPokedex'}
                    />
                    <HomeProjectCard 
                        projectName='House Marketplace'
                        projectDescription={`My first React JS project following along with Brad Travercy's React course`}
                        projectImage={houseMarketplace}
                        projectRepo={'https://github.com/RyanBriggsDev/house-marketplace'}/>
                    <HomeProjectCard 
                        projectName='Expense Tracker'
                        projectDescription={'A simple expense tracker made using Vanilla JavaScript'}
                        projectImage={expenseTracker}
                        projectRepo={'https://github.com/RyanBriggsDev/expense-tracker'}
                    />
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards