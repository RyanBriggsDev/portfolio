import React from 'react'
import Header from '../layout/Header'
import pokedex from '../../assets/pokedex.png'
import LayoutContext from '../context/LayoutContext'
import { useContext, useEffect } from 'react'

function Projects() {

  const { fetchRepos, repos, loading } = useContext(LayoutContext)

  useEffect(() => {
    fetchRepos()
  }, [])

  console.log(repos);

  if (loading === false && repos !== {}) {

    return (
      <>
      <Header headerText={`Projects`} 
              headerDesc="Here are my most recent projects, pulled from GitHub using the GitHub API 👨‍💻"
              btnText='GitHub'
              />
      <div className="projects-container">
        
        <div className="project-card">
          <img src={pokedex} alt="pokedex projects" />
          <h3>Project Name</h3>
          <p>React JS, React Router, SASS, PokeAPI</p>
          <div className="btn-container">
            <button>View Repo</button>
            <button>Visit Site</button>
          </div>
        </div>
      </div>
    </>
  )
} else {
  return 'loading...'
}
}

export default Projects