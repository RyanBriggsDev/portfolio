import Header from '../layout/Header'
import ProjectCards from '../layout/ProjectCards'
import ContactCard from '../layout/ContactCard'
import AboutMe from '../AboutMe'
import { Link } from 'react-router-dom'
import  CircleLogo  from '../../assets/CircleLogo.png'

function Home(props) {
  return (
    <div className='home-content-grid'>
      <header className='home-header'>
        <div className="home-header-text">
          <p className='hover-animation label-home-header'>Hello there,</p>
          <h1 className='hover-animation h1-home-header'>👋 <span className='h1-span-home-header'>I'm Ryan Briggs</span></h1>
          <p className='hover-animation p-home-header'>I make websites</p>
          <Link className='hover-animation' to={'/projects'}><button className="btn btn-primary">View My Projects</button></Link>
        </div>
        <div className="home-header-img-div">
          <img className='home-header-img' src={CircleLogo} alt="ryan briggs" />
        </div>
      </header>
      <ProjectCards />
      <ContactCard />
    </div>
  )
}

export default Home