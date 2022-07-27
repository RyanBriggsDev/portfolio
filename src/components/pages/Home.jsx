import Header from '../layout/Header'
import ProjectCards from '../layout/ProjectCards'
import ContactCard from '../layout/ContactCard'

function Home(props) {
  return (
    <div className='home-content-grid'>
      <Header headerText={`👋 Hi. I'm Ryan`} 
              headerDesc="I'm a Self Taught Front End Web Developer 👨‍💻"
              btnText='View My Projects'
              disabled=''
              to='/projects'
              />
      <ContactCard />
      <ProjectCards />
    </div>

  )
}

export default Home