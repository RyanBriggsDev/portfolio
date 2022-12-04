import ContactCard from '../components/layout/ContactCard'
import Header from '../components/layout/Header'

function Contact() {

  return (
    <div className='content-grid'>
          <Header headerText={`Get in Touch`} 
                headerDesc="Contact me on any of the below. If you want a faster reply, use Twitter."
                btnText=''
                to=''
                display='none'
          />
          <ContactCard />
    </div>
  )
}

export default Contact