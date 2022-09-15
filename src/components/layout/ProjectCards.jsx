import LayoutContext from '../context/LayoutContext'
import { useContext, useEffect } from 'react'
import Loading from '../layout/Loading'

function ProjectCards() {

    const { fetchRepos, repos, callComplete } = useContext(LayoutContext)

    // fetch data on load
    useEffect(() => {
        fetchRepos()
    }, [])

    if(callComplete === true) {
        return (
            <div className="projects-container">
                <h2>Check out my projects.</h2>
                <div className="projects-grid">
                    {repos.map((repo) => (
                        <div className="project-card" key={repo.id}>
                            <div className="project-card-title">
                                <h3>{repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}.</h3>
                                <p>{repo.description ? repo.description : <></>}.</p>
                            </div>
                            <div className="divider"></div>
                            {repo.topics[0] && repo.topics[1] ? <p>Made with {repo.topics[0].charAt(0).toUpperCase() + repo.topics[0].slice(1).replaceAll('-', ' ')} and {repo.topics[1].charAt(0).toUpperCase() + repo.topics[1].slice(1).replaceAll('-', ' ')}.</p> : <></>}
                            
                            <div className="project-card-links">
                                <a href={repo.html_url} target='_blank' rel='noreferrer'><button className='link-btn'>View Repo</button></a>
                                {repo.homepage ? <a href={repo.homepage} target='_blank' rel='noreferrer'><button className='link-btn'>Visit Site</button></a> : <></>}
                            </div>
                        </div>
                    ))} 
            </div>
            </div>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards