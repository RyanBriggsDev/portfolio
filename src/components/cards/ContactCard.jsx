import envelope from '../../assets/envelope.png'
import github from '../../assets/github.png'
// import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import SectionTitle from '../SectionTitle'


function ContactCard() {
  
  return (
    <div className='contact-card'>
        <SectionTitle text={`Let's Connect`} />
        <ul>
          <a href="https://twitter.com/ryanbriggsdev" target="_blank" rel="noreferrer">
              <img className="contact-icon" src={twitter} alt="twitter logo" />
          </a>
          <a href="https://github.com/RyanBriggsDev" target="_blank" rel="noreferrer">
              <img className="contact-icon" src={github} alt="github logo" />
          </a>
          <a href="mailto: r@ryanbriggs.dev" target="_blank" rel="noreferrer">
              <img className="contact-icon" src={envelope} alt="mail logo" />
          </a>
          {/* <a href="https://www.linkedin.com/in/ryanbriggsdev/" target="_blank">
              <img className="contact-icon" src={linkedin} alt="linkedin logo" />
          </a> */}
        </ul>
    </div>
  )
}

export default ContactCard