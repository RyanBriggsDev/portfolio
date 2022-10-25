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
                    <HomeProjectCard 
                        projectLink={'https://wrongmove-47s52aisf-ytsruh.vercel.app/'}
                    />
                    <HomeProjectCard
                        projectName='React Pokedex'
                        projectDescription={'I made a React Pokedex'}
                        projectImage={reactPokedex}
                        projectRepo={'https://github.com/RyanBriggsDev/ReactPokedex'}
                        projectLink={'https://react-pokedex-blue.vercel.app/'}
                    />
                    <HomeProjectCard 
                        projectName='House Marketplace'
                        projectDescription={`My first React JS project following along with Brad Traversy's React course`}
                        projectImage={houseMarketplace}
                        projectRepo={'https://github.com/RyanBriggsDev/house-marketplace'}
                        projectLink='https://house-marketplace-fkfcmqnhi-ryanbriggsdev.vercel.app/'
                    />
                    <HomeProjectCard 
                        projectName='Expense Tracker'
                        projectDescription={'A simple expense tracker made using Vanilla JavaScript'}
                        projectImage={expenseTracker}
                        projectRepo={'https://github.com/RyanBriggsDev/expense-tracker'}
                        projectLink={'https://expense-tracker-kappa-ten.vercel.app/'}
                    />
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards