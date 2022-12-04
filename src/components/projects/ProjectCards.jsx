import LayoutContext from '../../context/LayoutContext'
import { useContext, useEffect } from 'react'
import Loading from '../layout/Loading'
import { Link } from 'react-router-dom'
import HomeProjectCard from '../projects/HomeProjectCard'

import reactPokedex from '../../assets/projectScreenshots/reactPokedex.png'
import houseMarketplace from '../../assets/projectScreenshots/houseMarketplace.png'
import nextComponents from '../../assets/projectScreenshots/nextComponents.png'
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
                        projectName='React/Next.js Component Library'
                        projectDescription={'An app to document React/Next components to make reuse easier, help other developers and improve my documentation skills.'}
                        projectImage={nextComponents}
                        projectRepo={'https://github.com/RyanBriggsDev/next-components'}
                        projectLink={'https://next-components-zeta.vercel.app/'}
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
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards