import Header from '../components/layout/Header'
import AllProjectCards from '../components/cards/projects/AllProjectCards'

function Projects() {
    return (
    <div className="content-grid">
      <Header 
        headerText={`Projects`} 
        headerDesc="Here are my most recent projects, pulled from GitHub using the GitHub API 👨‍💻"
        btnText='GitHub'  
        to='/github-redirect'
        target="_blank"
      />
      <AllProjectCards />
    </div>
    )
  }

export default Projects