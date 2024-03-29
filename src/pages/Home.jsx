import ProjectCards from '../components/cards/projects/ProjectCards'
import ContactCard from '../components/cards/ContactCard'
import AboutMe from '../components/AboutMe/AboutMe'
import Skills from '../components/Skills'
import { Link } from 'react-router-dom'
import profilePic from '../assets/profilePic.png'

function Home() {
  return (
    <div className='content-grid'>
      <header className='home-header'>
        <div className="home-header-text">
          <p className='hover-animation label-home-header'>Hello there,</p>
          <h1 className='hover-animation h1-home-header'>👋 <span className='h1-span-home-header'>I'm Ryan Briggs</span></h1>
          <p className='hover-animation p-home-header'>I make websites</p>
          <Link className='hover-animation' to={'/projects'}><button className="btn btn-primary">View My Projects</button></Link>
        </div>
        <div className="home-header-img-div">
          <img className='home-header-img' src={profilePic} alt="ryan briggs" />
        </div>
      </header>
      <AboutMe />
      <Skills />
      <ProjectCards />
      <ContactCard />
    </div>
  )
}

export default Home