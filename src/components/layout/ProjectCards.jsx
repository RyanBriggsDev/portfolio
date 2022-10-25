import LayoutContext from '../context/LayoutContext'
import { useContext, useEffect } from 'react'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'
import HomeProjectCard from '../HomeProjectCard'

import reactPokedex from '../../assets/projectScreenshots/reactPokedex.png'
import houseMarketplace from '../../assets/projectScreenshots/houseMarketplace.png'
import expenseTracker from '../../assets/projectScreenshots/expenseTracker.png'
import SectionTitle from '../SectionTitle'

function ProjectCards() {

    const { fetchRepos, repos, callComplete } = useContext(LayoutContext)

    // fetch data on load
    useEffect(() => {
        fetchRepos()
    }, [])

    if(callComplete === true) {
        return (
            <div className="projects-container">
                <SectionTitle text='Recent Projects'/>
                <div className="home-projects">
                    <HomeProjectCard 
                        projectLink={'https://wrongmove-47s52aisf-ytsruh.vercel.app/'}
                    />
                    <HomeProjectCard
                        projectName='React Pokedex'
                        projectDescription={[`A Pokédex made in React using the `,<a href="https://pokeapi.co/" target='_blank' rel="noopener noreferrer">PokéAPI.</a>, ' ', 'You can search every pokémon by number or name and the app will show Pokédata']}
                        projectImage={reactPokedex}
                        projectRepo={'https://github.com/RyanBriggsDev/ReactPokedex'}
                        projectLink={'https://react-pokedex-blue.vercel.app/'}
                    />
                    <HomeProjectCard 
                        projectName='House Marketplace'
                        projectDescription={`My first React JS project following along with Brad Traversy's React course. The app was build using the Firestore database as a backend and allows users to sign up as agents and add listings, as well as browse properties as a user`}
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