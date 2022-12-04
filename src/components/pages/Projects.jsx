import Header from '../layout/Header'
import AllProjectCards from '../projects/AllProjectCards'

function Projects(props) {
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