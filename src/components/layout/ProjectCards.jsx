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
                        <div className="project-cards" key={repo.id}>
                            {repo.name}
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