import Header from '../layout/Header'
import ProjectCards from '../layout/ProjectCards'

function Projects(props) {
    return (<>
     <Header headerText={`Projects`} 
                headerDesc="Here are my most recent projects, pulled from GitHub using the GitHub API 👨‍💻"
                btnText='GitHub'  
                to='/github-redirect'
                target="_blank"
      />
      <ProjectCards />
    </>
    )
  }

export default Projects