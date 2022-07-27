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
            <>
                <div className="projects-container">
                    {repos.map((repo) => (
                        <div className='project-card' key={repo.id}>
                            <div className="card-content">
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                    <div className="btn-container">
                                        <a href={repo.html_url} target='_blank' rel='noreferrer'><button className='link-btn'>View Repo</button></a>
                                        <a href={repo.homepage} target='_blank' rel='noreferrer'><button className='link-btn'>Visit Site</button></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </>
        )
    } else {
        return <Loading />
    }
}

export default ProjectCards